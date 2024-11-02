import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color } from 'GlobalStyles';

const ScanItem = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  // Request camera permission when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanItem = async () => {
    if (cameraRef) {
      setIsScanning(true);
      const photo = await cameraRef.takePictureAsync(); // Capture photo

      try {
        // Send the captured image to the backend
        const formData = new FormData();
        formData.append('file', {
          uri: photo.uri,
          name: 'scan.jpg',
          type: 'image/jpg',
        });

        const response = await fetch('http://192.168.1.20:5000/api/scan-item', {
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (!response.ok) {
          throw new Error('Image recognition failed');
        }

        const data = await response.json();
        console.log(data);  // Display the brand or company information
        navigation.navigate('ProductData', { data });  // Navigate to product data page with result

      } catch (error) {
        Alert.alert('Scan Failed', 'An error occurred while scanning the item.');
        console.error('Image recognition failed:', error);
      } finally {
        setIsScanning(false);
      }
    }
  };

  // Handle cases where camera permissions are still loading or denied
  if (hasPermission === null) {
    return <View><Text>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return <View><Text>No access to camera</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={Camera.Constants.Type.back}
        ref={ref => setCameraRef(ref)}
      >
        {/* Overlay for guiding the user */}
        <View style={styles.overlay}>
          <Text style={styles.scanText}>Align your item within the frame</Text>
        </View>

        {/* Scan Button */}
        <View style={styles.buttonContainer}>
          {isScanning ? (
            <ActivityIndicator size="large" color={Color.white} />
          ) : (
            <TouchableOpacity style={styles.scanButton} onPress={handleScanItem}>
              <Text style={styles.scanButtonText}>Scan</Text>
            </TouchableOpacity>
          )}
        </View>
      </Camera>

      {/* Back button */}
      <TouchableOpacity 
        style={styles.navButtonLeft} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.navButtonText}>←</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    bottom: 50,
    position: 'absolute',
    width: '100%',
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  navButtonLeft: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    left: 20,
    position: 'absolute',
    top: 40,
    width: 40,
  },
  navButtonText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    flex: 1,
    justifyContent: 'center',
  },
  scanButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 50,
    height: 100,
    justifyContent: 'center',
    width: 100,
  },
  scanButtonText: {
    color: '#000',
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  scanText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 24,
    textAlign: 'center',
  },
});

export default ScanItem;

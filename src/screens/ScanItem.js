import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { Camera } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { FontFamily, Color } from "GlobalStyles";

const ScanItem = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  // Request camera permission when the component mounts
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync(); // Corrected permission method
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleScanItem = async () => {
    if (cameraRef) {
      setIsScanning(true);
      const photo = await cameraRef.takePictureAsync(); // Capture photo
      // Here you would send the photo.uri to your backend for image recognition
      // Example: await sendImageToBackend(photo.uri);
      setIsScanning(false);
      navigation.goBack(); // Navigate back after scan or to results page
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
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
  },
  scanText: {
    color: Color.white,
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    alignItems: 'center',
  },
  scanButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#000',
    fontFamily: FontFamily.ralewayExtraBold,
    fontSize: 20,
  },
  navButtonLeft: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navButtonText: {
    color: Color.white,
    fontSize: 20,
    fontFamily: FontFamily.ralewayExtraBold,
  },
});

export default ScanItem;

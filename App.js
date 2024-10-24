import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from "expo-font";

// Import screens
import ProductData from "screens/ProductData";
import Profile from "screens/Profile";
import SignIn from "screens/SignIn";
import Labor from "screens/Labor";
import How from "screens/How";
import Environment from "screens/Environment";
import Intro from "screens/Intro";
import Survey from "screens/Survey";
import ForgotPassword1 from "screens/ForgotPassword1";
import RegisterAccount from "screens/RegisterAccount";
import Search from "screens/Search";
import ForgotPassword from "screens/ForgotPassword";
import CorporateGovernance from "screens/CorporateGovernance";
import SideMenu from "screens/SideMenu";
import Verification from "screens/Verification";
import Favorites from "screens/Favorites";  
import Notifications from "screens/Notifications";  
import Settings from "screens/Settings";  
import Recommendations from "screens/Recommendations";  

// Newly added screens
import EcoFashion from "screens/EcoFashion";  
import GreenTech from "screens/GreenTech";  
import FairTrade from "screens/FairTrade";  
import HumanRights from "screens/HumanRights";  
import EthicalGadgets from "screens/EthicalGadgets"; 

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Regular": require("assets/fonts/Poppins-Regular.ttf"),  
    "Poppins-Medium": require("assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-ExtraBold": require("assets/fonts/Poppins-ExtraBold.ttf"),
    "Raleway-Light": require("assets/fonts/Raleway-Light.ttf"),
    "Raleway-Regular": require("assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("assets/fonts/Raleway-Medium.ttf"),
    "Raleway-SemiBold": require("assets/fonts/Raleway-SemiBold.ttf"),
    "Raleway-Bold": require("assets/fonts/Raleway-Bold.ttf"),
    "Raleway-ExtraBold": require("assets/fonts/Raleway-ExtraBold.ttf"),
    "Lato-Regular": require("assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("assets/fonts/Lato-Light.ttf"),
    "Lato-Bold": require("assets/fonts/Lato-Bold.ttf"),
    "Lato-Black": require("assets/fonts/Lato-Black.ttf"),
    "Mali-Regular": require("assets/fonts/Mali-Regular.ttf"),
    "Mali-Medium": require("assets/fonts/Mali-Medium.ttf"),
    "ReenieBeanie": require("assets/fonts/ReenieBeanie.ttf"),
    "Trispace-Light": require("assets/fonts/Trispace-Light.ttf"),
    "Overpass-Bold": require("assets/fonts/Overpass-Bold.ttf"),
    "Sonder": require("assets/fonts/SonderRegular.ttf"),
    "NATS": require("assets/fonts/NATS-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              gestureEnabled: false, // Disable default gesture handling
            }}
          >
            {/* Existing screens */}
            <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="How" component={How} />
            <Stack.Screen name="Environment" component={Environment} />
            <Stack.Screen name="Labor" component={Labor} />
            <Stack.Screen name="CorporateGovernance" component={CorporateGovernance} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ForgotPassword1" component={ForgotPassword1} />
            <Stack.Screen name="Verification" component={Verification} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="SideMenu" component={SideMenu} />
            <Stack.Screen name="Survey" component={Survey} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="ProductData" component={ProductData} />

            {/* Newly added screens */}
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Recommendations" component={Recommendations} />

            {/* Category Screens */}
            <Stack.Screen name="EcoFashion" component={EcoFashion} />
            <Stack.Screen name="GreenTech" component={GreenTech} />
            <Stack.Screen name="FairTrade" component={FairTrade} />
            <Stack.Screen name="HumanRights" component={HumanRights} />
            <Stack.Screen name="EthicalGadgets" component={EthicalGadgets} />

          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

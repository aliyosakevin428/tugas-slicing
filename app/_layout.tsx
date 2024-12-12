import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

const AuthLayout = () => {
  const [loaded, erorr] = useFonts({
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("../assets/fonts/Nunito-ExtraBold.ttf"),
    "Nunito-Medium": require("../assets/fonts/Nunito-Medium.ttf"),
  });

  useEffect(() => {
    if (loaded || erorr) {
      SplashScreen.hideAsync();
    }
  }, [loaded, erorr]);

  if (!loaded && erorr) {
    return null; // Loading state while fonts are loading.
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
        <Stack.Screen name="home" />
      </Stack>
      <StatusBar style="dark" />
    </>
  );
};

export default AuthLayout;

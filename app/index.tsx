import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import SlideIndicator from "@/components/SlideIndicator";
import Button from "@/components/Button";
import { COLORS } from "@/constants/colors";

const AuthScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        padding: 30,
        gap: 28,
        flex: 1,
        justifyContent: "space-between",
      }}>
      <View style={{ overflow: "hidden", borderRadius: 40 }}>
        <ImageBackground
          style={{
            height: 400,
            width: "100%",
            backgroundColor: COLORS.primary,
          }}
          source={{
            uri: "https://robohash.org/aliyosa",
          }}
        />
      </View>
      <View style={{ gap: 20, paddingHorizontal: 20 }}>
        <Title style={{ textAlign: "center" }}>
          Transform speech into Text Effortlessly
        </Title>
        <Paragraph style={{ textAlign: "center" }}>
          Capture Every detail with RecogNotes, Record conversation s, lecture ,
          meeting and more, and watch as they transcriped into accurate text
          instantly.
        </Paragraph>
      </View>
      <SlideIndicator count={5} active={1} />
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button
          label="Register"
          mode="filled"
          color="#6b56f1"
          onPress={() => {
            router.push("/register");
          }}
        />
        <Button
          label="Sign In"
          mode="outlined"
          color="#6b56f1"
          onPress={() => router.push("/login")}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});

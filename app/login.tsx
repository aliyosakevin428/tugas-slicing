import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import Input from "@/components/input";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "@/components/Button";
import { COLORS } from "@/constants/colors";

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        padding: 30,
        gap: 60,
        flex: 1,
        justifyContent: "center",
      }}>
      <View style={{ gap: 8, paddingHorizontal: 20 }}>
        <Title style={{ textAlign: "center" }}>Create an Account</Title>
        <Paragraph style={{ textAlign: "center" }}>
          Already have an account? {""}
          <Paragraph color={COLORS.primary}>Login</Paragraph>
        </Paragraph>
      </View>
      <View style={{ gap: 20 }}>
        <Input placeholder="Email address" />
        <Input placeholder="Password" rightIcon="eye-closed" secureTextEntry />
        <Paragraph style={{ textAlign: "right" }}>Recovery Password</Paragraph>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Button label="Continue" color={COLORS.primary} onPress={() => {}} />
        </View>
      </View>

      <View>
        <Paragraph style={styles.bottomText}>
          By Clicking Create account you agree to Recognotes{" "}
          <Paragraph color={COLORS.primary} style={styles.bottomText}>
            Term's of use
          </Paragraph>{" "}
          and
          <Paragraph color={COLORS.primary} style={styles.bottomText}>
            {" "}
            Privacy Policy
          </Paragraph>
        </Paragraph>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 18,
  },
});

export default LoginScreen;

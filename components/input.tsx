import { View, Text, TextInput, TextInputProps } from "react-native";
import React, { FC } from "react";
import { Octicons } from "@expo/vector-icons";

type InputProps = TextInputProps & {
  rightIcon?: keyof typeof Octicons.glyphMap;
  leftIcon?: keyof typeof Octicons.glyphMap;
};

const Input: FC<InputProps> = ({ rightIcon, leftIcon, ...props }) => {
  return (
    <View
      style={{
        backgroundColor: "#f2f2f2",
        width: "100%",
        display: "flex",
        padding: 15,
        paddingVertical: 7,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
      }}>
      <TextInput {...props} style={{ flex: 1, fontFamily: "Nunito-Medium" }} />
      {rightIcon && <Octicons name={rightIcon} size={20} color={"#aaa"} />}
    </View>
  );
};

export default Input;

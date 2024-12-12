import { Text, TouchableOpacity, View } from "react-native";
import React, { FC, ReactNode } from "react";
import { Octicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/colors";

interface CustomButton {
  label: string;
  color: string;
  icon?: keyof (typeof Octicons)["glyphMap"];
  mode?: "filled" | "outlined";
  onPress?: () => void;
}

const Button: FC<CustomButton> = (props) => {
  const {
    label,
    color = COLORS.primary,
    icon,
    mode = "filled",
    onPress,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: mode == "filled" ? color : "transparent",
        padding: 15,
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        borderWidth: mode == "outlined" ? 1.5 : 0,
        borderColor: mode === "outlined" ? color : "transparent",
      }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        {icon && (
          <Octicons
            name={icon}
            size={20}
            color={mode === "filled" ? "white" : color}
            style={{ marginRight: 10 }}
          />
        )}
        <Text
          style={{
            color: mode === "filled" ? "white" : color,
            fontSize: 16,
            fontFamily: "Nunito-Bold",
            textAlign: "center",
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

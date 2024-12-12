import { Text, TextProps } from "react-native";
import React, { FC } from "react";

interface Titleprops extends TextProps {}

const Title: FC<Titleprops> = ({ children, style, ...other }) => {
  return (
    <Text
      style={[style, { fontSize: 28, fontFamily: "Nunito-ExtraBold" }]}
      {...other}
      >
      {children}
    </Text>
  );
};

export default Title;

import { Text, TextProps } from "react-native";
import React, { FC } from "react";

interface ParagraphProps extends TextProps {
  color?: string;
}

const Paragraph: FC<ParagraphProps> = ({
  children,
  style,
  color = "grey",
  ...other
}) => {
  return (
    <Text
      style={[
        style,
        {
          fontSize: 16,
          color: color,
          lineHeight: 28,
          fontFamily: "Nunito-Bold",
        },
        style,
      ]}
      {...other}
      >
      {children}
    </Text>
  );
};

export default Paragraph;

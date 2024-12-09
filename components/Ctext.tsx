import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { Colors } from "../constants/Colors";

interface CTextProps extends TextProps {
	children: ReactNode;
	style?: TextStyle | TextStyle[];
	variant?: "default" | "heading" | "subheading" | "error";
	fontFamily?: string;
}

const CText: React.FC<CTextProps> = ({
	children,
	style,
	variant = "default",
	fontFamily = "outfit-regular",
	...props
}) => {
	return (
		<Text style={[{ fontFamily }, styles[variant], style]} {...props}>
			{children}
		</Text>
	);
};

export default CText;

const styles = StyleSheet.create({
	default: {
		fontSize: 16,
		color: Colors.text,
	},
	heading: {
		fontSize: 24,
		fontWeight: "bold",
		color: Colors.text,
	},
	subheading: {
		fontSize: 18,
		color: Colors.text,
	},
	error: {
		fontSize: 14,
		color: Colors.error,
	},
});

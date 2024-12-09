import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface FormField {
	title: string;
	value: string;
	otherStyles?: {};
	handleChangeText: () => {};
}
const FormField = ({
	title,
	value,
	otherStyles,
	handleChangeText,
	...props
}: FormField) => {
	return (
		<View>
			<Text>FormField</Text>
		</View>
	);
};

export default FormField;

const styles = StyleSheet.create({});

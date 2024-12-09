import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import CText from "./Ctext";

interface Header {
	title: string;
	icon?: keyof typeof Ionicons.glyphMap;
	onPress: () => void;
}
const Header = ({ title, icon, onPress }: Header) => {
	return (
		<View style={styles.headerContainer}>
			<Pressable onPress={() => router.back()}>
				<Ionicons name="arrow-back" size={24} color="black" />
			</Pressable>

			<CText style={{ textAlign: "center" }}>{title}</CText>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({
	headerContainer: {
		// backgroundColor: Colors.gray,
		borderBottomColor: Colors.gray,
		borderBottomWidth: 0.5,
		paddingVertical: 16,
		flexDirection: "row",
		gap: 14,
		alignItems: "center",

		// width: "600",
		// flex: 1,
	},
});

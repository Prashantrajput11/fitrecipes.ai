import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CreateNewDiet from "../../components/Diet/CreateNewDiet";

const MyDiets = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Text>Your Diet</Text>

			<CreateNewDiet />
		</SafeAreaView>
	);
};

export default MyDiets;

const styles = StyleSheet.create({});

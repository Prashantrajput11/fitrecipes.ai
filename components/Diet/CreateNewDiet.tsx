import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import CButton from "../CButton";

import { router } from "expo-router";
import Header from "../Header";
import CText from "../Ctext";

const CreateNewDiet = () => {
	return (
		<View>
			<Header title={"My Diets"} />
			<NoDiet />
		</View>
	);
};

const NoDiet = () => {
	return (
		<View>
			<Image
				source={require("../../assets/nodiet.png")}
				style={{ width: "100%", height: 500 }}
				resizeMode="contain"
			/>

			<CText
				style={{
					textAlign: "center",
					fontFamily: "outfit-bold",
					fontSize: 34,
					marginVertical: 16,
				}}
				// variant="subheading"
			>
				No Diets Yet !!
			</CText>

			<CButton
				title="Create a diet"
				containerStyles={{ marginHorizontal: 16 }}
				textStyles={{ fontFamily: "outfit-regular" }}
				onPress={() => router.push("/createTrip/search-place")}
			/>
		</View>
	);
};
export default CreateNewDiet;

const styles = StyleSheet.create({});

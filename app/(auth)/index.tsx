import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import FormField from "../../components/FormField";
import CButton from "../../components/CButton";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<>
			<View
				style={{
					backgroundColor: "gray",
					paddingVertical: 20,
					marginHorizontal: 16,
					marginTop: 16,
					borderRadius: 8,
				}}
			>
				<TextInput
					placeholder="enter name"
					value={email}
					onChangeText={(text) => setEmail(text)}
					placeholderTextColor={"red"}
				/>
			</View>

			<View
				style={{
					backgroundColor: "gray",
					paddingVertical: 20,
					marginHorizontal: 16,
					marginTop: 16,
					borderRadius: 8,
				}}
			>
				<TextInput
					placeholder="enter password "
					value={email}
					onChangeText={(text) => setPassword(text)}
					placeholderTextColor={"red"}
				/>
			</View>

			<CButton
				title="signin"
				containerStyles={{ marginTop: 20, marginHorizontal: 16 }}
			/>
		</>
	);
};

export default Auth;

const styles = StyleSheet.create({});

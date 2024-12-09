import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Stack } from "expo-router";

const AuthLayout = () => {
	// const { isAuthenticated } = useAuth();

	const isLoggedIn = false;

	if (isLoggedIn) {
		return <Redirect href="/(tabs)" />;
	}
	return <Stack />;
};

export default AuthLayout;

const styles = StyleSheet.create({});

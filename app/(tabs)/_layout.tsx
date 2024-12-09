import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect, Tabs } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const TabsLayout = () => {
	const user = true;

	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "orange", headerShown: false }}
		>
			<Tabs.Screen
				name="mydiet"
				options={{
					headerTitle: "For you",
					title: "My Diets",
					tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: "Tools",
					title: "Explore Tools",
					tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					headerTitle: "Profile",
					title: "Profile",
					tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";

const TabsLayout = () => {
	return (
		<Tabs
			screenOptions={{ tabBarActiveTintColor: "orange", headerShown: false }}
		>
			<Tabs.Screen
				name="index"
				options={{
					headerTitle: "For you",
					title: "New Event",
					tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
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

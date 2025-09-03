import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";


type TabItemProps = {
  focused: boolean;
  icon: string;
  label: string;
};

const TabItem = ({ focused, icon, label }: TabItemProps) => (
  <View
    className={`flex flex-row items-center justify-center rounded-lg px-4 py-2 mt-5 gap-1 ${
      focused ? "bg-primary" : "bg-transparent"
    }`}
  >
    <Ionicons
      name={icon}
      size={24}
      color={focused ? "white" : "gray"}
    />
    {focused && <Text className="text-white text-xs">{label}</Text>}
  </View>
);

const _layout = () => {
  return (
  <Tabs
  screenOptions={{
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
      backgroundColor: "#fff",
      height: 60,
    },
  }}
>

<Tabs.Screen
  name="index"
  options={{
    tabBarIcon: ({ focused }) => (
      <TabItem
        focused={focused}
        icon="compass-outline"
        label="Home"
      />
    ),
  }}
/>

      <Tabs.Screen
        name="saved"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} icon="bookmark-outline" label="Saved" />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} icon="book-outline" label="Learn" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabItem focused={focused} icon="person-outline" label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

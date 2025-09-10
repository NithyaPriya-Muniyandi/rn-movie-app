import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LinkCard() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="m-4">
        <View className="bg-blue-50 rounded-2xl p-4 w-full">
          {/* Header */}
          <View className="flex-row justify-between mb-4">
            <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
              <Ionicons name="swap-horizontal-outline" size={20} color="black" />
            </TouchableOpacity>

            <View className="relative">
              <TouchableOpacity
                className="bg-gray-200 p-2 rounded-full"
                onPress={() => setShowTooltip(!showTooltip)}
              >
                <Ionicons name="information-outline" size={20} color="black" />
              </TouchableOpacity>

              {showTooltip && (
                <View
                  className="absolute top-12 right-0 bg-white p-3 rounded-lg shadow-lg w-56"
                  style={{ zIndex: 999, elevation: 10 }}
                >
                  <View
                    className="absolute -top-2 right-3 w-0 h-0 
                               border-l-8 border-r-8 border-b-8 
                               border-l-transparent border-r-transparent border-b-white"
                  />
                  <Text className="text-sm text-gray-800">
                    Add a link and rename it for display.
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Label */}
          <Text className="text-xs text-gray-500 mb-4">LABEL</Text>

          {/* Insert link */}
          <Text className="text-sm font-semibold mb-2">Insert link</Text>
          <TextInput
            placeholder="e.g.: hint"
            placeholderTextColor="#9CA3AF"
            className="bg-blue-200 px-3 py-2 mb-4 text-black"
          />

          {/* Rename link */}
          <Text className="text-sm font-semibold mb-2">Rename link</Text>
          <TextInput
            placeholder="e.g.: hint"
            placeholderTextColor="#9CA3AF"
            className="bg-blue-200 px-3 py-2 mb-2 text-black"
          />
        </View>
      </View>
    </ScrollView>
  );
}

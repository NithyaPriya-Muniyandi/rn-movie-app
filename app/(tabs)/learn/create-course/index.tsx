import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function CourseHome() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <View className="flex-1 bg-blue-50 p-4">
      {/* Header Row */}
      <View className="flex-row justify-between mb-3">
        {/* Back Button */}
        <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
          <Ionicons name="swap-horizontal-outline" size={20} color="black" />
        </TouchableOpacity>

        {/* Info Button + Tooltip */}
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
              style={{ zIndex: 999, elevation: 10 }} // ✅ works on Android + iOS
            >
              {/* Tooltip Arrow */}
              <View
                className="absolute -top-2 right-3 w-0 h-0 
                           border-l-8 border-r-8 border-b-8 
                           border-l-transparent border-r-transparent border-b-white"
              />
              <Text className="text-sm text-gray-800">
                Tap on the text placeholders to edit. Tap outside the text box
                to finish editing.
              </Text>
            </View>
          )}
        </View>
      </View>

      {/* Page Content */}
      <Text className="text-base uppercase text-[#003E64] mb-2">Compliance</Text>
      <Text className="text-4xl font-bold text-[#003E64] leading-snug -z-10 ">
        Mastering Email Communication
      </Text>
      <Text className="text-xl font-bold my-3 text-[#003E64]">
        A Practical Guide
      </Text>
      <Text className="text-lg text-[#003E64]">
        This training will teach you 3 techniques to write concise, clear, and
        actionable emails.
      </Text>
    </View>
  );
}

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function PollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [showTooltip, setShowTooltip] = useState(false);

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index: number, text: string) => {
    const updated = [...options];
    updated[index] = text;
    setOptions(updated);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="bg-white">
      <View className="bg-blue-50 rounded-2xl p-4">
        {/* Header */}
        <View className="flex-row justify-between mb-5">
          <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
            <Ionicons name="swap-horizontal-outline" size={20} color="black" />
          </TouchableOpacity>

          {/* Info with Tooltip */}
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
                {/* Tooltip arrow */}
                <View
                  className="absolute -top-2 right-3 w-0 h-0 
                             border-l-8 border-r-8 border-b-8 
                             border-l-transparent border-r-transparent border-b-white"
                />
                <Text className="text-sm text-gray-800">
                  Enter your poll question and options. Users will be able to vote later.
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Label */}
        <Text className="text-xs text-gray-600 mb-1">LABEL</Text>

        {/* Question */}
        <Text className="font-bold text-[#003E64] text-2xl my-4 -z-10">
          {question || "Type your poll question here"}
        </Text>

        {/* Options */}
        {options.map((opt, index) => (
          <TextInput
            key={index}
            placeholder="Type your option"
            value={opt}
            onChangeText={(text) => updateOption(index, text)}
            className="bg-blue-100 p-3 rounded-lg mb-3 text-[#003E64]"
          />
        ))}

        {/* Add Option */}
        <TouchableOpacity onPress={addOption} className="flex-row items-center mt-2">
          <Ionicons name="add-outline" size={20} color="#3B82F6" />
          <Text className="ml-2 text-[#003E64]">Add another option</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

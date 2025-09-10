import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function MultipleChoicePage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    { text: "", checked: false, type: "" },
    { text: "", checked: false, type: "" },
  ]);
  const [showTooltip, setShowTooltip] = useState(false);

  const addOption = () => {
    setOptions([...options, { text: "", checked: false, type: "" }]);
  };

  const updateOption = (
    index: number,
    field: "text" | "checked" | "type",
    value: string | boolean
  ) => {
    const updated = [...options];
    // @ts-ignore
    updated[index][field] = value;
    setOptions(updated);
  };

  const toggleCheck = (index: number) => {
    updateOption(index, "checked", !options[index].checked);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="bg-white">
      <View className="bg-blue-50 rounded-2xl p-4">
        {/* Header */}
        <View className="flex-row justify-between mb-5">
          <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
            <Ionicons name="swap-horizontal-outline" size={20} color="black" />
          </TouchableOpacity>

          {/* Info + Tooltip */}
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
                <Text className="text-sm text-gray-800 !z-10">
                   Enter a multiple choice question with options. Users can select one or more,
                  and type a custom field type for each option.
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Label */}
        <Text className="text-xs text-gray-600 mb-1">LABEL</Text>

        {/* Question */}
        <Text className="font-bold text-[#003E64] text-2xl my-4 -z-20">
          {question || "Type your multiple choice question here"}
        </Text>
       

        {/* Options with Checkboxes + Type Input */}
        {options.map((opt, index) => (
          <View
            key={index}
            className="flex-col bg-blue-100 p-3 rounded-lg mb-3"
          >
            <View className="flex-row items-center mb-2">
              {/* Checkbox */}
              <TouchableOpacity onPress={() => toggleCheck(index)} className="mr-3">
                <Ionicons
                  name={opt.checked ? "checkbox-outline" : "square-outline"}
                  size={22}
                  color="#003E64"
                />
              </TouchableOpacity>

              {/* Option Text */}
              <TextInput
                placeholder="Type your option"
                value={opt.text}
                onChangeText={(text) => updateOption(index, "text", text)}
                className="flex-1 text-[#003E64] bg-white p-2 rounded-lg"
              />
            </View>

          </View>
        ))}

        {/* Add Option */}
        <TouchableOpacity onPress={addOption} className="flex-row items-center mt-2">
          <Ionicons name="add-outline" size={20} color="#3B82F6" />
          <Text className="ml-2 text-[#3B82F6]">Add another option</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

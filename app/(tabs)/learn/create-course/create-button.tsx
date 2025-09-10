import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ButtonCard() {
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState(null); // track which button's dropdown is open
  const [buttons, setButtons] = useState([{ type: null }]); // initially no type chosen
  const [showTooltip, setShowTooltip] = useState(false);
  const buttonTypes = ["Primary", "Secondary", "Outline"];

  const toggleDropdown = (index) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const handleSelect = (index, type) => {
    const updated = [...buttons];
    updated[index].type = type;
    setButtons(updated);
    setDropdownOpenIndex(null);
  };

  const addButton = () => {
    setButtons([...buttons, { type: null }]); // new button starts as unselected
  };

  const renderButtonStyle = (type) => {
    switch (type) {
      case "Primary":
        return "bg-blue-600";
      case "Secondary":
        return "bg-gray-400";
      case "Outline":
        return "border border-blue-600";
      default:
        return "bg-gray-200"; // default style when not chosen
    }
  };

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
                  <Text className="text-sm text-gray-800 !z-10">
                    Add interactive buttons like "Buy Now" or "Learn More" to
                    engage users.
                  </Text>
                </View>
              )}
            </View>
          </View>

          {/* Label */}
          <Text className="text-xs text-gray-500 mb-4">LABEL</Text>

          {buttons.map((btn, index) => (
            <View key={index} className="mb-4 -z-30">
              {/* Dropdown */}
              <TouchableOpacity
                className="flex-row items-center justify-between border-b border-gray-300 pb-2 mb-4"
                onPress={() => toggleDropdown(index)}
              >
                <Text className="text-black font-semibold">
                  {btn.type ? `${btn.type} button` : "Choose button type"}
                </Text>
                <Ionicons name="chevron-down-outline" size={18} color="black" />
              </TouchableOpacity>

              {dropdownOpenIndex === index && (
                <View className="bg-white rounded-lg border border-gray-300 mb-3">
                  {buttonTypes.map((type) => (
                    <TouchableOpacity
                      key={type}
                      className="p-2 border-b border-gray-200"
                      onPress={() => handleSelect(index, type)}
                    >
                      <Text className="text-black">{type}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {/* Button (only show if type is chosen) */}
              {btn.type && (
                <TouchableOpacity
                  className={`${renderButtonStyle(
                    btn.type
                  )} py-3 rounded items-center`}
                >
                  <Text
                    className={
                      btn.type === "Outline" ? "text-blue-600" : "text-white"
                    }
                  >
                    {btn.type} Button
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
<TouchableOpacity
  className={`py-3 rounded-xl items-center ${
    buttons.every((btn) => btn.type) ? "bg-blue-600" : "bg-primary"
  }`}
  disabled={!buttons.every((btn) => btn.type)}
  onPress={() => console.log("Submitted:", buttons)}
>
  <Text className="text-white font-semibold text-base">Submit</Text>
</TouchableOpacity>
          {/* Add another button */}
          <TouchableOpacity className="flex-row items-center mt-5" onPress={addButton}>
            <Ionicons name="add-outline" size={18} color="#3B82F6" />
            <Text className="text-primary text-sm ml-1">Add another button</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

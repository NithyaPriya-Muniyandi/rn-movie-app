import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ChecklistPage() {
  const [checklist, setChecklist] = useState([
    { text: "", checked: false },
    { text: "", checked: false },
  ]);
  const [showTooltip, setShowTooltip] = useState(false);
  const toggleCheck = (index: number) => {
    const updated = [...checklist];
    updated[index].checked = !updated[index].checked;
    setChecklist(updated);
  };

  const updateText = (index: number, text: string) => {
    const updated = [...checklist];
    updated[index].text = text;
    setChecklist(updated);
  };

  const addChecklist = () => {
    setChecklist([...checklist, { text: "", checked: false }]);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="bg-white">
      <View className="bg-blue-50 rounded-2xl p-4">
        {/* Header */}
        <View className="flex-row justify-between mb-5">
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
                                      border-l-transparent border-r-transparent border-b-white !z-20"
                         />
                         <Text className="text-sm text-gray-800">
                             Use this checklist to define requirements or tasks that need to be completed.  
                         </Text>
                       </View>
                     )}
                   </View>
        </View>

        {/* Label */}
        <Text className="text-xs text-gray-600 mb-1">LABEL</Text>

        {/* Title */}
        <Text className="font-bold text-[#003E64] text-2xl my-4 -z-40">
          Type your checklist requirements here
        </Text>

        {/* Checklist Items */}
        {checklist.map((item, index) => (
          <View
            key={index}
            className="flex-row items-center bg-blue-100 p-3 rounded-lg mb-3"
          >
            <TouchableOpacity onPress={() => toggleCheck(index)} className="mr-3">
              <Ionicons
                name={item.checked ? "checkbox-outline" : "square-outline"}
                size={22}
                color="#003E64"
              />
            </TouchableOpacity>
            <TextInput
              placeholder={`Type checklist ${index + 1}`}
              value={item.text}
              onChangeText={(text) => updateText(index, text)}
              className="flex-1 text-[#003E64]"
            />
          </View>
        ))}

        {/* Add another checklist */}
        <TouchableOpacity
          onPress={addChecklist}
          className="flex-row items-center mt-2"
        >
          <Ionicons name="add-outline" size={20} color="#3B82F6" />
          <Text className="ml-2 text-[#3B82F6]">Add another checklist</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

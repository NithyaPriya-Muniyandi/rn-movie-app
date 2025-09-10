import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function RatingCard() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingVertical: 16 }}
      showsVerticalScrollIndicator={false}
    >
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
                         {/* Tooltip arrow */}
                         <View
                           className="absolute -top-2 right-3 w-0 h-0 
                                      border-l-8 border-r-8 border-b-8 
                                      border-l-transparent border-r-transparent border-b-white"
                         />
                         <Text className="text-sm text-gray-800">
                            Rate the course and provide feedback to help others.
                         </Text>
                       </View>
                     )}
                   </View>
        </View>

        {/* Label */}
        <Text className="text-xs mb-4">LABEL</Text>

        {/* Rating */}
        <Text className="text-black text-sm mb-2">Rate course</Text>
        <View className="flex-row mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => setRating(star)}>
              <Ionicons
                name={star <= rating ? "star" : "star-outline"}
                size={24}
                className="text-primary m-2"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Comment box */}
        <Text className="text-black text-sm mb-2">Add a comment</Text>
        <TextInput
          className="bg-blue-200 p-3 h-20 mb-6 text-black placeholder:text-gray-500"
          placeholder="e.g.: hint"
          value={comment}
          onChangeText={setComment}
          multiline
        />

        {/* Submit button */}
        <TouchableOpacity
          className="bg-primary py-3 rounded-lg items-center"
          onPress={() => alert(`Rating: ${rating}, Comment: ${comment}`)}
        >
          <Text className="text-white font-medium">Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

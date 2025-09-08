import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function QAPage() {
  const [questions, setQuestions] = useState([{ id: Date.now(), text: "" }]);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: "" }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: number, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, text } : q))
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <View className="bg-blue-50 rounded-xl p-4">
        {/* Header */}
        <View className="flex-row justify-between mb-3">
          <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
            <Ionicons name="arrow-back-outline" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-200 p-2 rounded-full">
            <Ionicons name="information-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>

        {/* Label */}
        <Text className="text-xs text-gray-600 mb-1">LABEL</Text>
        <Text className="text-2xl font-bold text-[#003E64] mb-2">
          Type your question here
        </Text>

        {/* Dynamic Questions */}
        {questions.map((q, index) => (
          <View key={q.id} className="mb-3">
            <TextInput
              placeholder={`Answer for Question ${index + 1}`}
              value={q.text}
              onChangeText={(text) => updateQuestion(q.id, text)}
              className="bg-white p-3 rounded-lg border border-gray-300"
            />

            {questions.length > 1 && (
              <TouchableOpacity
                onPress={() => removeQuestion(q.id)}
                className="flex-row items-center mt-1"
              >
                <Ionicons name="remove-circle-outline" size={18} color="red" />
                <Text className="ml-1 text-red-500">Remove this question</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Add More */}
        <TouchableOpacity onPress={addQuestion} className="flex-row items-center mt-2">
          <Ionicons name="add-outline" size={20} color="#003E64" />
          <Text className="ml-2 text-[#003E64]">Add another question</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

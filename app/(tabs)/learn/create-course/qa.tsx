import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function QAPage() {
  const [questions, setQuestions] = useState([
    { id: Date.now(), text: "", answers: [] as string[], newAnswer: "" },
  ]);
  const [showTooltip, setShowTooltip] = useState(false);

  const addQuestion = () => {
    setQuestions([...questions, { id: Date.now(), text: "", answers: [], newAnswer: "" }]);
  };

  const removeQuestion = (id: number) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  const updateQuestion = (id: number, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, text } : q))
    );
  };

  const updateNewAnswer = (id: number, text: string) => {
    setQuestions(
      questions.map((q) => (q.id === id ? { ...q, newAnswer: text } : q))
    );
  };

  const addAnswer = (id: number) => {
    setQuestions(
      questions.map((q) =>
        q.id === id && q.newAnswer.trim()
          ? { ...q, answers: [...q.answers, q.newAnswer], newAnswer: "" }
          : q
      )
    );
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }} className="bg-white">
      <View className="bg-blue-50 rounded-xl p-4">
        {/* Header */}
        <View className="flex-row justify-between mb-3">
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
                  Ask questions and type answers.
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Label */}
        <Text className="text-xs text-gray-600 mb-1">DISCUSSION</Text>

        {/* Reddit-style Questions + Answers */}
        {questions.map((q, index) => (
          <View key={q.id} className="mb-5 p-3">
            {/* Question */}
            <Text className="font-bold text-[#003E64] text-2xl mb-2">
              Q{index + 1}: {q.text || "Type your question here..."}
            </Text>
            <TextInput
              placeholder="Edit question text..."
              value={q.text}
              onChangeText={(text) => updateQuestion(q.id, text)}
              className="bg-gray-50 p-2 rounded-lg border border-gray-300 mb-2"
            />

            {/* Answers */}
            <View className="pl-3 border-l-2 border-gray-300">
              {q.answers.length > 0 ? (
                q.answers.map((ans, idx) => (
                  <Text key={idx} className="text-gray-700 mb-1">
                    • {ans}
                  </Text>
                ))
              ) : (
                <Text className="text-gray-400">No answers yet...</Text>
              )}
            </View>

            {/* Type + Add Answer */}
            <View className="flex-row items-center mt-2">
              <TextInput
                placeholder="Type your answer..."
                value={q.newAnswer}
                onChangeText={(text) => updateNewAnswer(q.id, text)}
                className="flex-1 bg-white p-2 rounded-lg border border-gray-300"
              />
              <TouchableOpacity
                onPress={() => addAnswer(q.id)}
                className="ml-2 bg-[#003E64] p-2 rounded-lg"
              >
                <Ionicons name="send-outline" size={18} color="white" />
              </TouchableOpacity>
            </View>

            {/* Remove Question */}
            {questions.length > 1 && (
              <TouchableOpacity
                onPress={() => removeQuestion(q.id)}
                className="flex-row items-center mt-2"
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

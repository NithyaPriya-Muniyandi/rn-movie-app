import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateCourse() {
  const router = useRouter();
  const [visible, setVisible] = useState(false); // 🔥 added state

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-sm font-semibold text-primary">Go to Drafts</Text>
      </View>

      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Left Side */}
        <View className="flex-row items-center gap-2">
          {/* Hamburger */}
         <TouchableOpacity
  onPress={() => setVisible(!visible)}
  className="flex-row items-center gap-2"
>
  <Ionicons name="menu-outline" size={26} color="black" />
  <Text className="text-lg font-semibold">Modules</Text>
  <Ionicons
    name={visible ? "chevron-up-outline" : "chevron-down-outline"}
    size={20}
    color="black"
  />
</TouchableOpacity>


          {/* Modules Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <View className="bg-white rounded-t-2xl p-4 h-[70%]">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-4">
                  <Text className="text-lg font-bold">Modules</Text>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Ionicons name="close-outline" size={28} color="black" />
                  </TouchableOpacity>
                </View>

                {/* Modules List */}
               <ScrollView>
  {/* Module 1 */}
  <View className="bg-blue-100 rounded-md p-3 mb-2">
    <Text className="text-base font-semibold">Module 1</Text>
  </View>

  {/* Chapters */}
  <View className="ml-4 mb-2">
    <View className="flex-row justify-between items-center bg-gray-100 rounded-md p-2 mb-1">
      <Text>Chapter 1</Text>
      <Ionicons name="remove-circle-outline" size={20} className="text-primary" />
    </View>
    <View className="flex-row justify-between items-center bg-gray-100 rounded-md p-2 mb-1">
      <Text>Chapter 2</Text>
      <Ionicons name="remove-circle-outline" size={20} className="text-primary" />
    </View>
    <TouchableOpacity className="flex-row items-center bg-blue-100 rounded-md p-2 mt-1">
      <Ionicons name="add" size={20} className="text-primary" />
      <Text className="ml-2">Add a new chapter</Text>
    </TouchableOpacity>
  </View>

  {/* Module 2 */}
  <View className="bg-blue-100 rounded-md p-3 mb-2">
    <Text className="text-base font-semibold">Module 2</Text>
  </View>

  {/* Add new Module Button */}
<View className="items-center mt-2">
  <TouchableOpacity className="flex-row items-center bg-primary rounded-md px-4 py-2">
    <Ionicons name="add" size={22} color="white" />
    <Text className="ml-2 text-white font-semibold">Add a new module</Text>
  </TouchableOpacity>
</View>
</ScrollView>

              </View>
            </View>
          </Modal>
        </View>

        {/* Right Side */}
        <View className="flex-row items-center gap-3">
          {/* Video Button */}
          <TouchableOpacity>
            <Ionicons name="play-circle-outline" size={26} color="black" />
          </TouchableOpacity>

          {/* Plus Button */}
          <TouchableOpacity className="bg-primary p-2 rounded-lg">
            <Ionicons name="add" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* Card */}
        <View className="bg-blue-50 rounded-xl p-4 shadow">
          {/* Back + Info buttons */}
          <View className="flex-row justify-between mb-3">
            <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
              <Ionicons name="arrow-back-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
              <Ionicons name="information-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <Text className="text-xs uppercase text-gray-600 mb-2">
            Compliance
          </Text>
          <Text className="text-2xl font-bold text-gray-900 leading-snug">
            Mastering Email Communication
          </Text>
          <Text className="text-base font-semibold mt-2 text-gray-800">
            A Practical Guide
          </Text>
          <Text className="text-sm text-gray-600 mt-3">
            This training will teach you 3 techniques to write concise, clear,
            and actionable emails.
          </Text>
        </View>
      </ScrollView>

      {/* Footer Toolbar */}
      <View className="flex-row justify-around items-center border-t border-gray-200 py-3 bg-white">
        <TouchableOpacity>
          <Ionicons name="text-outline" size={22} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity>
          <Ionicons name="image-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="cloud-upload-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="refresh-outline" size={22} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="trash-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

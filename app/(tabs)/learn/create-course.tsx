import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Animated,
  Easing,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateCourse() {
  const [showTooltip, setShowTooltip] = useState(false);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modulesVisible, setModulesVisible] = useState(false); // For Modules panel
  const [formatVisible, setFormatVisible] = useState(false);   // For Format sheet

  // Animation values for bottom sheet
  const translateY = useState(new Animated.Value(300))[0];

  const openFormatSheet = () => {
    setFormatVisible(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const closeFormatSheet = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 200,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setFormatVisible(false));
  };

  // Modules state
  const [modules, setModules] = useState([
    { id: 1, name: "Module 1", chapters: ["Chapter 1", "Chapter 2"] },
    { id: 2, name: "Module 2", chapters: [] },
  ]);

  const addModule = () => {
    setModules([
      ...modules,
      { id: Date.now(), name: `Module ${modules.length + 1}`, chapters: [] },
    ]);
  };

  const addChapter = (moduleId) => {
    setModules(
      modules.map((mod) =>
        mod.id === moduleId
          ? {
              ...mod,
              chapters: [
                ...mod.chapters,
                `Chapter ${mod.chapters.length + 1}`,
              ],
            }
          : mod
      )
    );
  };

  const removeChapter = (moduleId, index) => {
    setModules(
      modules.map((mod) =>
        mod.id === moduleId
          ? { ...mod, chapters: mod.chapters.filter((_, i) => i !== index) }
          : mod
      )
    );
  };

  const menuItems = [
    { icon: "create-outline", label: "Rename" },
    { icon: "color-palette-outline", label: "Theme" },
    { icon: "language-outline", label: "Translate" },
    { icon: "refresh-outline", label: "Reset" },
    { icon: "save-outline", label: "Save a draft" },
    { icon: "trash-outline", label: "Delete course" },
  ];

  const cardTypes = [
    { icon: "reader-outline", label: "Text" },
    { icon: "help-circle-outline", label: "Q&A" },
    { icon: "list-outline", label: "Poll" },
    { icon: "checkbox-outline", label: "Multiple Choice" },
    { icon: "options-outline", label: "Checklist" },
    { icon: "mic-outline", label: "Audio" },
    { icon: "videocam-outline", label: "Video" },
    { icon: "star-outline", label: "Star Rating" },
    { icon: "square-outline", label: "Button" },
    { icon: "link-outline", label: "Link" },
  ];

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-sm font-semibold text-primary">Go to Drafts</Text>
      </View>

      {/* Top bar */}
      <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-200">
        {/* Left Side */}
        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu-outline" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModulesVisible(!modulesVisible)}
            className="flex-row items-center gap-2"
          >
            <Text className="text-lg font-semibold">Modules</Text>
            <Ionicons
              name={
                modulesVisible ? "chevron-up-outline" : "chevron-down-outline"
              }
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>

        {/* Right Side */}
        <View className="flex-row items-center gap-3">
          <TouchableOpacity>
            <Ionicons name="play-circle-outline" size={26} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-primary p-2 rounded-lg"
            onPress={() => setVisible(true)}
          >
            <Ionicons name="add" size={20} color="white" />
          </TouchableOpacity>

          {/* Add card modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/40">
              <View className="bg-white rounded-t-2xl p-5 max-h-[80%]">
                {/* Header */}
                <View className="flex-row justify-between items-center mb-4">
                  <Text className="text-lg font-semibold">Add card type</Text>
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Ionicons name="close" size={22} color="black" />
                  </TouchableOpacity>
                </View>

                {/* Options */}
                <ScrollView>
                  {cardTypes.map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      className="flex-row items-center bg-blue-50 p-3 rounded-lg mb-2"
                    >
                      <Ionicons
                        name={item.icon}
                        size={20}
                        color="black"
                        style={{ marginRight: 12 }}
                      />
                      <Text className="text-base">{item.label}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </View>

      {/* ================= Course Menu Panel ================= */}
      {menuVisible && (
        <View className="absolute top-0 right-0 bottom-0 w-4/5 bg-white shadow-lg p-4 z-50">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Course Menu</Text>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Ionicons name="close" size={22} color="black" />
            </TouchableOpacity>
          </View>

          <Text className="font-semibold mb-6">
            Mastering Email Communication
          </Text>

          <ScrollView>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-4 mb-3 rounded-lg bg-blue-100"
              >
                <Ionicons name={item.icon} size={20} color="black" />
                <Text className="ml-3 text-base">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}

      {/* ================= Modules Panel ================= */}
      {modulesVisible && (
        <View className="absolute top-0 right-0 bottom-0 w-4/5 bg-white shadow-lg p-4 z-50">
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Modules</Text>
            <TouchableOpacity onPress={() => setModulesVisible(false)}>
              <Ionicons name="close" size={22} color="black" />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {modules.map((module) => (
              <View key={module.id} className="mb-4">
                {/* Module Header */}
                <View className="bg-blue-100 p-3 rounded-md mb-2">
                  <Text className="text-base font-semibold text-gray-800">
                    {module.name}
                  </Text>
                </View>

                {/* Chapters */}
                {module.chapters.map((chapter, index) => (
                  <View
                    key={index}
                    className="flex-row items-center justify-between bg-blue-50 p-3 rounded-md mb-2"
                  >
                    <Text className="text-gray-700">{chapter}</Text>
                    <TouchableOpacity
                      onPress={() => removeChapter(module.id, index)}
                    >
                      <Ionicons
                        name="remove-circle-outline"
                        size={20}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                ))}

                {/* Add Chapter */}
                <TouchableOpacity
                  onPress={() => addChapter(module.id)}
                  className="flex-row items-center justify-center bg-blue-200 p-3 rounded-md"
                >
                  <Ionicons name="add" size={18} color="black" />
                  <Text className="ml-2 font-medium">Add a new chapter</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>

          {/* Add Module Button */}
          <TouchableOpacity
            onPress={addModule}
            className="flex-row items-center justify-center bg-primary py-3 rounded-md mt-4"
          >
            <Ionicons name="add" size={18} color="white" />
            <Text className="ml-2 text-white font-medium">Add a new module</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Main Content */}
   <ScrollView contentContainerStyle={{ padding: 16 }}>
  <View className="bg-blue-50 rounded-xl p-4 shadow relative"> 
    <View className="flex-row justify-between mb-3">
      {/* Back Button */}
      <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
        <Ionicons name="arrow-back-outline" size={20} color="black" />
      </TouchableOpacity>

      {/* Info Button with Tooltip */}
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
            style={{ zIndex: 999, elevation: 10 }} // ✅ zIndex + elevation for Android
          >
            {/* Arrow */}
            <View
              className="absolute -top-2 right-3 w-0 h-0 
                        border-l-8 border-r-8 border-b-8 border-l-transparent 
                        border-r-transparent border-b-white"
            />
            <Text className="text-sm text-gray-800">
              Tap on the text placeholders to edit. Tap outside the text box to finish editing.
            </Text>
          </View>
        )}
      </View>
    </View>

    {/* Content */}
    <Text className="text-base uppercase text-[#003E64] mb-2 -z-10">Compliance</Text>
    <Text className="text-4xl font-bold text-[#003E64] leading-snug -z-10">
      Mastering Email Communication
    </Text>
    <Text className="text-xl font-bold my-3 text-[#003E64]">
      A Practical Guide
    </Text>
    <Text className="text-lg text-[#003E64]">
      This training will teach you 3 techniques to write concise, clear,
      and actionable emails.
    </Text>
  </View>
</ScrollView>
      {/* Footer Toolbar */}
      <View className="flex-row justify-around items-center border-t border-gray-200 py-3 bg-white">
        <TouchableOpacity onPress={openFormatSheet}>
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

      {/* Format Bottom Sheet */}
      {formatVisible && (
        <Animated.View
          style={{
            position: "absolute",
            bottom: 60, // keep above toolbar
            left: 0,
            right: 0,
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            padding: 15,
            height: "30%",
            transform: [{ translateY }],
            shadowColor: "#000",
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          {/* Header */}
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold">Format text</Text>
            <TouchableOpacity onPress={closeFormatSheet}>
              <Ionicons name="close" size={20} color="black" />
            </TouchableOpacity>
          </View>

          {/* Title, Heading, Subheading */}
          <View className="flex-row mt-4">
            <TouchableOpacity className="px-4 py-2 bg-primary rounded-full mr-2">
              <Text className="text-white font-bold">Title</Text>
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-2 bg-gray-200 rounded-full mr-2">
              <Text className="font-semibold text-gray-600">Heading</Text>
            </TouchableOpacity>

            <TouchableOpacity className="px-4 py-2 bg-gray-100 rounded-full">
              <Text className="font-medium text-gray-500">Subheading</Text>
            </TouchableOpacity>
          </View>

          {/* Bold, Italic, Underline, Strikethrough */}
          <View className="flex-row mt-5">
            <TouchableOpacity className="bg-primary rounded-lg mr-2 flex items-center justify-center h-10 w-10">
              <Text className="text-lg text-white font-bold">B</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 rounded-lg mr-2 flex items-center justify-center h-10 w-10">
              <Text className="text-lg italic">I</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 rounded-lg mr-2 flex items-center justify-center h-10 w-10">
              <Text className="text-lg underline">U</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-200 rounded-lg mr-2 flex items-center justify-center h-10 w-10">
              <Text className="text-lg line-through">S</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-100 rounded-lg mr-2 flex items-center justify-center h-10 w-10">
              <Ionicons name="text-outline" size={22} color="black" />
            </TouchableOpacity>

            <TouchableOpacity className="bg-gray-100 rounded-lg flex items-center justify-center h-10 w-10">
              <Ionicons name="ellipse" size={22} color="black" />
            </TouchableOpacity>
          </View>
        </Animated.View>
      )}
    </View>
  );
}

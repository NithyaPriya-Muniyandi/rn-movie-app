import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateCourseLayout() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modulesVisible, setModulesVisible] = useState(false);

  const menuItems = [
    { icon: "create-outline", label: "Rename" },
    { icon: "color-palette-outline", label: "Theme" },
    { icon: "language-outline", label: "Translate" },
    { icon: "refresh-outline", label: "Reset" },
    { icon: "save-outline", label: "Save a draft" },
    { icon: "trash-outline", label: "Delete course" },
  ];

  const cardTypes = [
    { icon: "reader-outline", label: "Text", link: "/learn/create-course/text" },
    { icon: "help-circle-outline", label: "Q&A", link: "/learn/create-course/qa" },
    { icon: "list-outline", label: "Poll", link: "/learn/create-course/poll" },
    { icon: "checkbox-outline", label: "Multiple Choice", link: "/learn/create-course/multiple-choice" },
    { icon: "options-outline", label: "Checklist", link: "/learn/create-course/checklist" },
    { icon: "mic-outline", label: "Audio", link: "/learn/create-course/audio" },
    { icon: "videocam-outline", label: "Video", link: "/learn/create-course/video" },
    { icon: "star-outline", label: "Star Rating", link: "/learn/create-course/star-rating" },
    { icon: "square-outline", label: "Button", link: "/learn/create-course/create-button" },
    { icon: "link-outline", label: "Link", link: "/learn/create-course/alink" },
  ];

  // --- State for Modules ---
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

  const addChapter = (moduleId: number) => {
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

  const removeChapter = (moduleId: number, index: number) => {
    setModules(
      modules.map((mod) =>
        mod.id === moduleId
          ? { ...mod, chapters: mod.chapters.filter((_, i) => i !== index) }
          : mod
      )
    );
  };

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
        <View className="flex-row items-center gap-2">
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu-outline" size={26} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModulesVisible(true)}
            className="flex-row items-center gap-2"
          >
            <Text className="text-lg font-semibold">Modules</Text>
            <Ionicons
              name={modulesVisible ? "chevron-up-outline" : "chevron-down-outline"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
        </View>

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
        </View>
      </View>

      {/* Where child pages render */}
      <Stack screenOptions={{ headerShown: false }} />

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

      {/* Add card modal */}
      <Modal visible={visible} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/40">
          <View className="bg-white rounded-t-2xl p-5 max-h-[80%]">
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-semibold">Add card type</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <Ionicons name="close" size={22} color="black" />
              </TouchableOpacity>
            </View>
            <ScrollView>
              {cardTypes.map((item) => (
                <TouchableOpacity
                  key={item.label}
                  className="flex-row items-center bg-blue-50 p-3 rounded-lg mb-2"
                  onPress={() => {
                    setVisible(false);
                    router.push(item.link as any);
                  }}
                >
                  <Ionicons name={item.icon as any} size={20} color="black" />
                  <Text className="ml-3 text-base">{item.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Modules Modal */}
      <Modal
        visible={modulesVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModulesVisible(false)}
      >
        <View className="flex-1 bg-black/40 justify-end">
          <View className="bg-white rounded-t-2xl p-5 max-h-[80%]">
            {/* Header */}
            <View className="flex-row justify-between items-center mb-4">
              <Text className="text-lg font-bold">Modules</Text>
              <TouchableOpacity onPress={() => setModulesVisible(false)}>
                <Ionicons name="close" size={22} color="black" />
              </TouchableOpacity>
            </View>

            {/* Modules List */}
            <ScrollView>
              {modules.map((module) => (
                <View key={module.id} className="mb-4">
                  <View className="bg-blue-100 p-3 rounded-md mb-2">
                    <Text className="text-base font-semibold text-gray-800">
                      {module.name}
                    </Text>
                  </View>

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
              <Text className="ml-2 text-white font-medium">
                Add a new module
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Course Menu Panel */}
      {menuVisible && (
        <View className="absolute top-0 right-0 bottom-0 w-4/5 bg-white shadow-lg p-4 z-50">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold">Course Menu</Text>
            <TouchableOpacity onPress={() => setMenuVisible(false)}>
              <Ionicons name="close" size={22} color="black" />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                className="flex-row items-center p-4 mb-3 rounded-lg bg-blue-100"
              >
                <Ionicons name={item.icon as any} size={20} color="black" />
                <Text className="ml-3 text-base">{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

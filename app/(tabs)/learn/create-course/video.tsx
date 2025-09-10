import { Ionicons } from "@expo/vector-icons";
import { Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function VideoUploadCard() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [videoUri, setVideoUri] = useState(null);
  const { width } = Dimensions.get("window");

  // Pick video from gallery
  const pickVideo = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  // Record new video
  const recordVideo = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingVertical: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="bg-blue-50 rounded-2xl p-4 w-full max-w-sm mx-auto m-4">
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
                className="absolute top-12 right-0 bg-white p-3 rounded-lg shadow-lg w-56 z-10"
                style={{ zIndex: 999, elevation: 10 }}
              >
                <Text className="text-sm text-gray-800">
                  You can either upload a video from your device or record a new one using your camera.
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Label */}
        <Text className="text-blue-800 text-xs mb-4">LABEL</Text>

        {/* Video placeholder */}
        <TouchableOpacity
          className="border-2 border-dashed border-blue-200 rounded-lg items-center justify-center mb-6 -z-30"
          style={{ height: width * 0.5 }}
        >
          {videoUri ? (
            <VideoPreview videoUri={videoUri} />
          ) : (
            <Ionicons name="image-outline" size={50} color="#93C5FD" />
          )}
        </TouchableOpacity>

        {/* Upload button */}
        <TouchableOpacity
          className="bg-primary py-3 rounded-lg mb-3 flex-row justify-center items-center"
          onPress={pickVideo}
        >
          <Ionicons name="cloud-upload-outline" size={20} color="white" />
          <Text className="text-white text-base ml-2">Upload a video</Text>
        </TouchableOpacity>

        {/* Record button */}
        <TouchableOpacity
          className="bg-primary py-3 rounded-lg flex-row justify-center items-center"
          onPress={recordVideo}
        >
          <Ionicons name="videocam-outline" size={20} color="white" />
          <Text className="text-white text-base ml-2">Record a video</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

// A simple video preview component
function VideoPreview({ videoUri }) {
  return (
    <Video
      source={{ uri: videoUri }}
      style={{ width: "100%", height: "100%", borderRadius: 12 }}
      useNativeControls
      resizeMode="cover"
    />
  );
}

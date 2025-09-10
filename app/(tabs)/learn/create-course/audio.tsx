import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function VoiceRecorderPage() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);

  const { width } = Dimensions.get("window");
  const micSize = width * 0.35; // circle size relative to screen width

  // timer effect
  useEffect(() => {
    let interval: NodeJS.Timer;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const startRecording = async () => {
    try {
      // Request permissions
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access microphone is required!");
        return;
      }

      // Prepare Audio
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );

      setRecording(recording);
      setIsRecording(true);
      setRecordingTime(0);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  };

  const stopRecording = async () => {
    try {
      if (!recording) return;

      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      console.log("Recording saved at", uri);

      setRecording(null);
      setIsRecording(false);
    } catch (err) {
      console.error("Failed to stop recording", err);
    }
  };

  const handleRecordPress = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16, flexGrow: 1 }} className="bg-white">
      <View className="bg-blue-50 rounded-2xl p-4 flex-1">
        {/* Header */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity className="bg-gray-200 p-2 rounded-lg">
            <Ionicons name="swap-horizontal-outline" size={20} color="black" />
          </TouchableOpacity>

          {/* Tooltip */}
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
                  Tap the red button to start or stop recording.
                </Text>
              </View>
            )}
          </View>
        </View>

        {/* Label */}
        <Text className="text-xs text-blue-800 mb-2">LABEL</Text>

        {/* Mic Section */}
        <View className="flex-1 items-center justify-center mt-6 -z-30">
          <View
            style={{
              width: micSize,
              height: micSize,
              borderRadius: micSize / 2,
              borderWidth: 5,
              borderColor: "#BFDBFE",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="mic-outline" size={micSize * 0.4} color="black" />
          </View>

          {/* Timer */}
          <Text className="text-blue-900 mt-6 text-lg font-medium">
            {formatTime(recordingTime)}
          </Text>

          {/* Record Button */}
          <TouchableOpacity
            onPress={handleRecordPress}
            className="mt-10"
            style={{
              width: 50,
              height: 50,
              borderRadius: 35,
              backgroundColor: isRecording ? "gray" : "red",
              borderWidth: 2,
              borderColor: "#FCA5A5",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

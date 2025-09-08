import { Text, View } from "react-native";

export default function CourseHome() {
  return (
    <View className="flex-1 bg-blue-50 p-4">
      <Text className="text-base uppercase text-[#003E64] mb-2">
        Compliance
      </Text>
      <Text className="text-4xl font-bold text-[#003E64] leading-snug">
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
  );
}

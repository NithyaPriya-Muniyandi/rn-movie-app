import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const learn = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
     <View className="relative p-4">
  {/* Blue background covering half of card height */}
  <View className="absolute top-0 left-0 right-0 h-3/4 bg-[#007BC0]" />

  {/* Header */}
  <Text className="text-xl font-bold text-white z-10">
    Learning & Development
  </Text>
  <Text className="text-sm text-white mb-4 z-10">
    Learn and grow at your own pace.
  </Text>

  {/* White floating Card */}
  <View className="bg-white rounded-xl shadow p-4 mt-2 z-10">
    <Text className="text-xs text-gray-500">Learned today</Text>
    <Text className="text-base font-bold">
      3 Courses{" "}
      <Text className="font-normal text-gray-600">/ 2 Hrs, 58 Mins</Text>
    </Text>

    {/* Progress bar */}
    <View className="h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
      <LinearGradient
        colors={["#ffffff", "#007BC0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="h-2 w-1/4 rounded-full"
      />
    </View>
  </View>
</View>



      {/* New & Popular Cards */}
      <View className="flex-row justify-between mx-4 my-2">
      {/* New Card */}
   <View className="flex-1 bg-blue-50 rounded-xl p-4 mr-2 shadow relative items-center">
  <Image
    source={require("../../assets/images/courseImg1.webp")}
    className="w-24 h-24 rounded-lg"
    resizeMode="contain"
  />
  {/* Overlay Label pinned to card edge */}
  <View className="absolute bottom-4 right-0 bg-[#9DC9FF] px-4 py-1.5 rounded-l-full">
    <Text className="text-[#003E64] text-sm font-semibold">New</Text>
  </View>
</View>

      {/* Popular Card */}
      <View className="flex-1 bg-green-50 rounded-xl p-4 ml-2 shadow items-center">
        <Image
          source={require("../../assets/images/courseimage2.webp")}
          className="w-20 h-20 mb-2"
          resizeMode="contain"
        />
       <View className="absolute bottom-4 right-0 bg-[#54ABA5] px-4 py-1.5 rounded-l-full">
          <Text className="text-[#07423F] font-semibold text-sm">Popular</Text>
        </View>
      </View>
    </View>

      {/* Search Bar */}
      <View className="flex-row items-center border-b border-gray-300 mx-4 my-2">
        <TextInput
          placeholder="Find a course"
          className="flex-1 py-2 text-gray-700"
        />
        <Ionicons name="search-outline" size={20} color="gray" />
      </View>

      {/* Categories */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mx-4 my-2">
        {["All", "Business", "Logistics", "Technical"].map((item, index) => (
          <TouchableOpacity
            key={index}
            className={`px-4 py-2 rounded-full mr-2 ${
              item === "All" ? "bg-[#007bc0]" : "bg-gray-200"
            }`}
          >
            <Text className={item === "All" ? "text-white" : "text-gray-700"}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text className="text-sm text-gray-500 mx-4 my-2">All</Text>
      <Text className="text-xs text-gray-400 mx-4 my-2">17 Courses</Text>

      {/* Business Card */}
   <View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/business.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">BUSINESS</Text>
    <Text className="text-base font-semibold mb-2">
      Business Essentials: A Quick Guide
    </Text>
    <Text className="text-xs">5 Modules | 45 Mins</Text>
  </View>
</View>

{/* Business Card */}
   <View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/business.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1 items-between">
    <View>
    <Text className="text-xs mb-1">BUSINESS</Text>
    <Text className="text-base font-semibold mb-2">
      Foundations of Leadership: Becoming a Effective Leader
    </Text>
    </View>
    <Text className="text-xs">5 Modules | 45 Mins</Text>
  </View>
</View>

{/* Business Card */}
   <View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/business.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">BUSINESS</Text>
    <Text className="text-base font-semibold mb-2">
      Strategic Thinking for Managers
    </Text>
    <Text className="text-xs">5 Modules | 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Supply Chain Basics: From Source to Shelf
    </Text>
    <Text className="text-xs">5 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Supply Chain: Coordination and Collaboration
    </Text>
    <Text className="text-xs">5 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Warehouse Management Simplified
    </Text>
    <Text className="text-xs">5 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Transportation Management Essentials
    </Text>
    <Text className="text-xs">5 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Logistics and Sustainability
    </Text>
    <Text className="text-xs">3 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Risk Management Logistics
    </Text>
    <Text className="text-xs">3 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

{/* Logistics Card */}
<View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../assets/images/logistics.webp")}
    className="!w-15 !h-32 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">LOGISTICS</Text>
    <Text className="text-base font-semibold mb-2">
      Technology In Logistics
    </Text>
    <Text className="text-xs">3 Modules | 3 Hrs, 45 Mins</Text>
  </View>
</View>

    </ScrollView>
  );
};

export default learn;

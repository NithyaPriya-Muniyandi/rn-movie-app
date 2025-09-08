import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import createcourseimg from "../../../assets/images/createcourseimg.webp";
const learn = () => {
    const navigation = useNavigation();
  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
     <View className="relative p-4">
  {/* Blue background covering half of card height */}
  <View className="absolute top-0 left-0 right-0 h-3/4 bg-[#007BC0]" />

  {/* Header */}
  <Text className="text-xl font-bold text-white z-10">
    My courses
  </Text>
  <Text className="text-sm text-white mb-4 z-10">
    Create courses like a pro!
  </Text>

  <View className="bg-white rounded-xl shadow p-4 mt-2 z-10 flex-row items-start">
    
      <Image
        source={createcourseimg}
        className="w-16 h-16 rounded-lg mr-4"
        resizeMode="cover"
      />

      {/* Right Side - Text + Button */}
      <View className="flex-1">
        <Text className="text-base text-gray-500">Created Today</Text>

        <Text className="text-base font-bold">
          2 Courses{" "}
          <Text className="font-normal text-gray-600">/ 1 Hr, 40 mins</Text>
        </Text>

        <TouchableOpacity
          className="bg-primary mt-3 py-2 px-4 rounded-lg"
          onPress={() => navigation.navigate("create-course")}
        >
          <Text className="text-white text-center font-semibold">
            Create a Course
          </Text>
        </TouchableOpacity>
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

      <Text className="text-lg mx-4 my-2">All Courses</Text>
      <Text className="text-sm mx-4">5 Courses</Text>

      {/* Business Card */}
   <View className="bg-blue-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../../assets/images/business.webp")}
    className="!w-15 !h-28 rounded-lg mr-4"
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


{/* Logistics Card */}
<View className="bg-pink-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../../assets/images/logistics.webp")}
    className="!w-15 !h-28 rounded-lg mr-4"
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

{/* Technical Training */}
<View className="bg-green-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../../assets/images/logistics.webp")}
    className="!w-15 !h-28 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">TECHNICAL TRAINING</Text>
    <Text className="text-base font-semibold mb-2">
      Code like a Pro: Coding Practices
    </Text>
    <Text className="text-xs">5 Modules | 1 Hr</Text>
  </View>
</View>

{/* Mobility Service */}
<View className="bg-pink-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../../assets/images/mobilityimg.webp")}
    className="!w-15 !h-28 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">MOBILITY</Text>
    <Text className="text-base font-semibold mb-2">
      Introduction to Mobility Services
    </Text>
    <Text className="text-xs">5 Modules | 1 Hr</Text>
  </View>
</View>

{/* compliance */}
<View className="bg-green-50 rounded-xl p-4 mx-4 my-2 shadow flex-row items-center">
  <Image
    source={require("../../../assets/images/complianceimg.webp")}
    className="!w-15 !h-28 rounded-lg mr-4"
    resizeMode="contain"
  />
  <View className="flex-1">
    <Text className="text-xs mb-1">COMPLIANCE</Text>
    <Text className="text-base font-semibold mb-2">
      Introduction to Policy and Compliance
    </Text>
    <Text className="text-xs">5 Modules | 45 Mins</Text>
  </View>
</View>

    </ScrollView>
  );
};

export default learn;

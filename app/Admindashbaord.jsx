import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function AdminDashboard() {
  const { token } = useLocalSearchParams();
  const [message, setMessage] = useState("Loading dashboard...");

  useEffect(() => {
    const authToken = Array.isArray(token) ? token[0] : token;

    if (!authToken) {
      setMessage("No token found. Please login again.");
      return;
    }
    setMessage("Welcome Admin Dashboard");
  }, [token]);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
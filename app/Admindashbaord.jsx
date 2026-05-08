import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import { API_BASE_URL } from "./config/api";

export default function AdminDashboard() {
  const { token } = useLocalSearchParams();
  const [message, setMessage] = useState("Loading dashboard...");

  useEffect(() => {
    const authToken = Array.isArray(token) ? token[0] : token;

    if (!authToken) {
      setMessage("No token found. Please login again.");
      return;
    }

    const fetchDashboard = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/auth/admin`, {
          headers: {
            authorization: authToken,
          },
        });
        setMessage(response.data?.message || "Welcome Admin Dashboard");
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setMessage(error.response?.data?.message || "Failed to load dashboard");
          return;
        }
        setMessage("Failed to load dashboard");
      }
    };

    fetchDashboard();
  }, [token]);

  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
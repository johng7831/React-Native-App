import Constants from "expo-constants";
import { Platform } from "react-native";

const hostUri = Constants.expoConfig?.hostUri;
const host = hostUri?.split(":")[0];

function resolveApiBaseUrl() {
  // Use .env value if available
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  // Expo Go / local network
  if (host) {
    return `http://${host}:5000`;
  }

  // Android emulator fallback
  if (Platform.OS === "android") {
    return "http://10.0.2.2:5000";
  }

  // iOS simulator / web fallback
  return "http://localhost:5000";
}

export const API_BASE_URL = resolveApiBaseUrl();
import Constants from "expo-constants";
import { Platform } from "react-native";

const hostFromExpo = Constants.expoConfig?.hostUri?.split(":")[0];

function resolveApiBaseUrl() {
  if (process.env.EXPO_PUBLIC_API_URL) {
    return process.env.EXPO_PUBLIC_API_URL;
  }

  if (hostFromExpo) {
    return `http://${hostFromExpo}:5000`;
  }

  if (Platform.OS === "android") {
    return "http://10.0.2.2:5000";
  }

  return "http://localhost:5000";
}

export const API_BASE_URL = resolveApiBaseUrl();

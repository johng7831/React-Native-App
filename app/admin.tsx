import { useState } from "react";
import { useRouter } from "expo-router";
import axios from "axios";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { API_BASE_URL } from "./config/api";

type AuthMode = "login" | "register";

export default function AdminAuthScreen() {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isLogin = mode === "login";

  const handleSubmit = async () => {
    if (!email || !password) {
      setMessage("Please enter email and password");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      if (isLogin) {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, {
          email,
          password,
        });

        const token = response.data?.token;
        if (!token) {
          throw new Error("Token missing");
        }

        router.replace({
          pathname: "/Admindashbaord",
          params: { token },
        });
      } else {
        await axios.post(`${API_BASE_URL}/api/auth/register`, {
          email,
          password,
        });
        setMessage("Registration successful. You can login now.");
        setMode("login");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.response?.data?.message || "Request failed");
      } else {
        setMessage("Request failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin {isLogin ? "Login" : "Register"}</Text>

      <View style={styles.switchRow}>
        <Pressable
          onPress={() => setMode("login")}
          style={[styles.switchButton, isLogin && styles.activeButton]}
        >
          <Text style={[styles.switchText, isLogin && styles.activeText]}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode("register")}
          style={[styles.switchButton, !isLogin && styles.activeButton]}
        >
          <Text style={[styles.switchText, !isLogin && styles.activeText]}>Register</Text>
        </Pressable>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <Pressable style={styles.submitButton} onPress={handleSubmit} disabled={loading}>
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.submitText}>{isLogin ? "Login" : "Create Admin"}</Text>
        )}
      </Pressable>

      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    gap: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  switchRow: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    overflow: "hidden",
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  activeButton: {
    backgroundColor: "#111827",
  },
  switchText: {
    textAlign: "center",
    color: "#111827",
    fontWeight: "600",
  },
  activeText: {
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  submitButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
  },
  message: {
    textAlign: "center",
    color: "#111827",
    marginTop: 8,
  },
});

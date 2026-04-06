import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function GiveScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Give</Text>

      <View style={styles.mainCard}>
        <Text style={styles.mainCardTitle}>Support the Ministry</Text>
        <Text style={styles.mainCardText}>
          Your generosity helps us serve families, reach the community, and support global missions.
        </Text>
      </View>

      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Tithes & Offerings</Text>
        <Text style={styles.optionText}>Give securely each week to support worship services and outreach.</Text>
      </View>

      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Missions</Text>
        <Text style={styles.optionText}>Partner with us to support local and international mission work.</Text>
      </View>

      <View style={styles.optionCard}>
        <Text style={styles.optionTitle}>Building Fund</Text>
        <Text style={styles.optionText}>Help improve and maintain a welcoming church home for everyone.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111926',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 56,
    paddingBottom: 24,
  },
  title: {
    color: '#f2f6ff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  mainCard: {
    borderRadius: 14,
    backgroundColor: '#243040',
    borderWidth: 1,
    borderColor: '#2f3d50',
    padding: 16,
    marginBottom: 12,
  },
  mainCardTitle: {
    color: '#f2f6ff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  mainCardText: {
    color: '#b0bccd',
    lineHeight: 20,
  },
  optionCard: {
    borderRadius: 12,
    backgroundColor: '#1f2837',
    borderWidth: 1,
    borderColor: '#2f3d50',
    padding: 14,
    marginBottom: 10,
  },
  optionTitle: {
    color: '#f2f6ff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 4,
  },
  optionText: {
    color: '#9aa7b9',
    lineHeight: 19,
  },
});
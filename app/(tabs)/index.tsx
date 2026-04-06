import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ChurchHomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.heroCard}>
        <Text style={styles.heroSubtitle}>Welcome to</Text>
        <Text style={styles.heroTitle}>Grace Community Church</Text>
      </View>

      <Text style={styles.sectionTitle}>This Sunday&apos;s Message</Text>
      <View style={styles.videoCard}>
        <View style={styles.playButton}>
          <Text style={styles.playIcon}>▶</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Upcoming Highlights</Text>
      <View style={styles.highlightsRow}>
        <View style={styles.highlightCard}>
          <Text style={styles.highlightText}>Youth Night</Text>
          <Text style={styles.highlightSubtext}>Fri 7:00 PM</Text>
        </View>
        <View style={styles.highlightCard}>
          <Text style={styles.highlightText}>Prayer Night</Text>
          <Text style={styles.highlightSubtext}>Wed 7:00 PM</Text>
        </View>
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
    paddingTop: 58,
    paddingBottom: 24,
  },
  heroCard: {
    borderRadius: 14,
    padding: 18,
    backgroundColor: '#243040',
    borderWidth: 1,
    borderColor: '#2e3d4f',
    marginBottom: 16,
  },
  heroSubtitle: {
    color: '#d6dae0',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 6,
  },
  heroTitle: {
    color: '#f5f8ff',
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  videoCard: {
    height: 145,
    borderRadius: 14,
    backgroundColor: '#b29e58',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  playButton: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: 'rgba(255,255,255,0.92)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    color: '#1d2633',
    fontSize: 28,
    marginLeft: 4,
  },
  highlightsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  highlightCard: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    backgroundColor: '#243040',
    borderWidth: 1,
    borderColor: '#2e3d4f',
  },
  highlightText: {
    color: '#eef2ff',
    fontSize: 15,
    fontWeight: '600',
  },
  highlightSubtext: {
    color: '#9aa7b9',
    marginTop: 4,
  },
});
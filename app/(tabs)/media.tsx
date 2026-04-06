import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const podcastEpisodes = [
  { title: 'Spotify Podcast Episode 1', subtitle: 'Spotify Podcast', date: 'Apr 15, 2023' },
  { title: 'Spotify Podcast Episode 2', subtitle: 'Spotify Podcast', date: 'Apr 10, 2023' },
];

export default function MediaScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>Media</Text>

      <Text style={styles.sectionTitle}>Latest Video</Text>
      <View style={styles.videoCard}>
        <Text style={styles.videoText}>UPCOMING EVENT</Text>
      </View>

      <Text style={styles.sectionTitle}>Spotify Podcast Episodes</Text>
      {podcastEpisodes.map((episode) => (
        <View key={episode.title} style={styles.episodeCard}>
          <View style={styles.spotifyIconWrap}>
            <MaterialIcons name="graphic-eq" size={18} color="#1ed760" />
          </View>
          <View style={styles.episodeInfo}>
            <Text style={styles.episodeTitle}>{episode.title}</Text>
            <Text style={styles.episodeMeta}>{episode.subtitle}</Text>
            <Text style={styles.episodeMeta}>{episode.date}</Text>
          </View>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Instagram</Text>
      <View style={styles.instagramCard}>
        <View style={styles.instagramImage} />
        <View style={styles.instagramImage} />
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
    color: '#f6f8ff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#f2f6ff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  videoCard: {
    height: 130,
    borderRadius: 12,
    backgroundColor: '#2a3547',
    borderWidth: 1,
    borderColor: '#3b4a62',
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: '#f1e8ce',
    fontSize: 18,
    fontWeight: '700',
  },
  episodeCard: {
    borderRadius: 12,
    backgroundColor: '#1f2837',
    borderWidth: 1,
    borderColor: '#2f3d50',
    padding: 10,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  spotifyIconWrap: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#172126',
    alignItems: 'center',
    justifyContent: 'center',
  },
  episodeInfo: {
    flex: 1,
  },
  episodeTitle: {
    color: '#eef3ff',
    fontSize: 14,
    fontWeight: '700',
  },
  episodeMeta: {
    color: '#9aa7b9',
    fontSize: 12,
  },
  instagramCard: {
    borderRadius: 12,
    backgroundColor: '#1f2837',
    borderWidth: 1,
    borderColor: '#2f3d50',
    padding: 10,
    flexDirection: 'row',
    gap: 8,
  },
  instagramImage: {
    flex: 1,
    height: 70,
    borderRadius: 8,
    backgroundColor: '#334159',
  },
});

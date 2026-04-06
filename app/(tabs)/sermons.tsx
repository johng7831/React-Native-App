import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const sermons = [
  { title: 'The Book of Romans', speaker: 'Speaker Name', date: 'Jan 15, 2023' },
  { title: 'Walking by Faith', speaker: 'Speaker Name', date: 'Jan 8, 2023' },
  { title: 'Hope in Christ', speaker: 'Speaker Name', date: 'Jan 1, 2023' },
  { title: 'Power of Prayer', speaker: 'Speaker Name', date: 'Dec 25, 2022' },
];

export default function SermonsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.searchBar}>
        <MaterialIcons name="search" size={20} color="#94a0b3" />
        <TextInput placeholder="Search" placeholderTextColor="#94a0b3" style={styles.searchInput} />
      </View>

      <View style={styles.filterRow}>
        <View style={styles.filterChip}>
          <Text style={styles.filterText}>Speaker</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="#d9dfec" />
        </View>
        <View style={styles.filterChip}>
          <Text style={styles.filterText}>Topic</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="#d9dfec" />
        </View>
      </View>

      {sermons.map((sermon) => (
        <View key={`${sermon.title}-${sermon.date}`} style={styles.sermonCard}>
          <View style={styles.thumb}>
            <Text style={styles.thumbText}>ROMANS</Text>
          </View>
          <View style={styles.sermonTextWrap}>
            <Text style={styles.sermonTitle}>{sermon.title}</Text>
            <Text style={styles.sermonMeta}>{sermon.speaker}</Text>
            <Text style={styles.sermonMeta}>{sermon.date}</Text>
          </View>
        </View>
      ))}
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
    paddingTop: 54,
    paddingBottom: 24,
  },
  searchBar: {
    height: 44,
    borderRadius: 12,
    backgroundColor: '#232d3d',
    borderWidth: 1,
    borderColor: '#334055',
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    color: '#f2f6ff',
    marginLeft: 8,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 12,
  },
  filterChip: {
    borderRadius: 20,
    backgroundColor: '#232d3d',
    borderWidth: 1,
    borderColor: '#334055',
    paddingHorizontal: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  filterText: {
    color: '#d9dfec',
    fontSize: 13,
    fontWeight: '600',
  },
  sermonCard: {
    borderRadius: 12,
    backgroundColor: '#1f2837',
    borderWidth: 1,
    borderColor: '#303d52',
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    gap: 10,
  },
  thumb: {
    width: 82,
    borderRadius: 8,
    backgroundColor: '#5e4f3a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbText: {
    color: '#f4e4bc',
    fontWeight: '700',
    fontSize: 12,
  },
  sermonTextWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  sermonTitle: {
    color: '#f6f8ff',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 2,
  },
  sermonMeta: {
    color: '#9aa7b9',
    fontSize: 12,
  },
});
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const events = [
  { month: 'OCT', day: '26', title: 'Community BBQ', time: '1:00 - 5:00 pm', location: 'Samsaty Church' },
  { month: 'OCT', day: '26', title: 'Community BBQ', time: '1:00 - 5:00 pm', location: 'Samsaty Church' },
  { month: 'OCT', day: '26', title: 'Community BBQ', time: '1:00 - 5:00 pm', location: 'Samsaty Church' },
  { month: 'OCT', day: '26', title: 'Community BBQ', time: '2:00 pm', location: 'Samsaty Church' },
];

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.screenTitle}>Events</Text>

      {events.map((event, index) => (
        <View key={`${event.title}-${index}`} style={styles.card}>
          <View style={styles.dateBadge}>
            <Text style={styles.monthText}>{event.month}</Text>
            <Text style={styles.dayText}>{event.day}</Text>
          </View>

          <View style={styles.infoWrap}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.eventMeta}>{event.time}</Text>
            <Text style={styles.eventMeta}>Location: {event.location}</Text>
          </View>

          <View style={styles.registerButton}>
            <Text style={styles.registerText}>Register</Text>
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
    paddingTop: 56,
    paddingBottom: 24,
  },
  screenTitle: {
    color: '#f6f8ff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
  },
  card: {
    backgroundColor: '#1f2837',
    borderWidth: 1,
    borderColor: '#2f3d50',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dateBadge: {
    width: 48,
    borderRadius: 8,
    backgroundColor: '#d4b16a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
  },
  monthText: {
    color: '#3a2c14',
    fontSize: 10,
    fontWeight: '700',
  },
  dayText: {
    color: '#2a2114',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 20,
  },
  infoWrap: {
    flex: 1,
  },
  eventTitle: {
    color: '#f2f6ff',
    fontSize: 15,
    fontWeight: '700',
  },
  eventMeta: {
    color: '#9aa7b9',
    fontSize: 12,
    marginTop: 1,
  },
  registerButton: {
    backgroundColor: '#4c8f4b',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  registerText: {
    color: '#edf8ed',
    fontSize: 12,
    fontWeight: '700',
  },
});
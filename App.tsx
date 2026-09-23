import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Custom component #1
// Displays my education and current area of study.
function Education() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.bodyText}>Point Park University</Text>
      <Text style={styles.detailText}>
        Applied Computer Science - Senior
      </Text>
      <Text style={styles.detailText}>
        Currently learning more about programming, data, and mobile development.
      </Text>
    </View>
  );
}

// Custom component #2
// Displays technical and professional skills.
function TechnicalSkills() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Technical Skills</Text>
      <Text style={styles.bodyText}>• HTML & CSS</Text>
      <Text style={styles.bodyText}>• JavaScript</Text>
      <Text style={styles.bodyText}>• SQL & Database Fundamentals</Text>
      <Text style={styles.bodyText}>• Data Quality & Validation</Text>
      <Text style={styles.bodyText}>• Microsoft Excel</Text>
      <Text style={styles.bodyText}>• GitHub</Text>
      <Text style={styles.bodyText}>• React Native (Learning)</Text>
    </View>
  );
}

// Custom component #3
// Displays my career interests and goals.
function CareerGoals() {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Career Goals</Text>
      <Text style={styles.bodyText}>
        My goal is to build a career where I can combine my interest in
        healthcare with data analytics and technology.
      </Text>
    </View>
  );
}

function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>

        {/* Profile Section */}
        <View style={styles.header}>
          <View style={styles.profileCircle}>
            <Text style={styles.initials}>PH</Text>
          </View>

          <Text style={styles.name}>Page Hayes</Text>
          <Text style={styles.subtitle}>
            Data Quality Monitor & Aspiring Data Analyst
          </Text>
        </View>

        {/* About Me Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>About Me</Text>

          <Text style={styles.bodyText}>
            I am passionate about the intersection of healthcare and data.
            I enjoy learning how information can be organized, understood,
            and transformed into meaningful insights.
          </Text>

          <Text style={styles.detailText}>
            My background has helped me develop strong communication,
            problem-solving, organization, and attention-to-detail skills.
          </Text>
        </View>

        {/* Custom components */}
        <Education />
        <TechnicalSkills />
        <CareerGoals />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },

  container: {
    padding: 20,
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  profileCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#315a8a',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  initials: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222222',
  },

  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginTop: 4,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#315a8a',
    marginBottom: 10,
  },

  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },

  detailText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#555555',
    marginTop: 8,
  },
});

export default App;
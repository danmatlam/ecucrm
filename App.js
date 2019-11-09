import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Contacts from './src/components/Contacts';
import ContactsPage from './src/pages/ContactsPage';
import { TextInput } from 'react-native-paper';
import ContactForm from './src/components/ContactForm';

export default function App() {
  return (
    <View style={styles.container}>
        <ContactForm/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop:60,
    flex: 1,
    backgroundColor: '#fff',
  },

  


});

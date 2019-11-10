import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ContactItem from './src/components/ContactItem';
import ContactsPage from './src/pages/ContactsPage';
import { TextInput } from 'react-native-paper';
import ContactForm from './src/components/ContactForm';
import IndexNavigation from './src/pages'
import TabsNavigation from './src/pages/TabsNavigation';

export default function App() {
  return (
    <View style={styles.container}>
        <IndexNavigation/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  


});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styles from './App.style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Puzzle Challenge - Carousel</Text>
      <StatusBar style="auto" />
    </View>
  );
}


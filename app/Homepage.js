import React from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Homepage({ route }) {
  const { name, dateOfBirth } = route.params;

  const openCamera = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Camera permissions are required to use the camera');
      return;
    }

    // Launch the camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      Alert.alert('Image captured', `URI: ${result.uri}`);
      // Here, you can handle the captured image, e.g., display it or upload it
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to the Home Page!</Text>
      <Text>Name: {name}</Text>
      <Text>Date of Birth: {dateOfBirth}</Text>
      <Button title="Open Camera" onPress={openCamera} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

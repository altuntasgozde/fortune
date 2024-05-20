import React from "react";
import { StyleSheet, Text, View, Alert, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function Homepage({ route }) {
  const { name, dateOfBirth, relationshipStatus } = route.params;

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
      <Text>Merhaba {name}!</Text>
      <TouchableOpacity onPress={openCamera} style={styles.button}>
        <Image source={require('../assets/camera-icon.png')} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    backgroundColor: '#0096FF',
    borderRadius: 50,
  },
  icon: {
    width: 40,
    height: 40,
  },
});

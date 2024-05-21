import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function Homepage({ route }) {
  const { name, dateOfBirth, relationshipStatus } = route.params;

  const openCamera = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Camera permissions are required to use the camera");
      return;
    }

    // Launch the camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      Alert.alert("Image captured", `URI: ${result.uri}`);
      // Here, you can handle the captured image, e.g., display it or upload it
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Merhaba {name}!</Text>
        <View style={styles.newItem}>
          <Text style={styles.badge}>New!</Text>
          <Text>21.05.2024</Text>
          <Text style={styles.itemText}>Donec lacus diam, pulvinar non dictum vel, pellentesque in odio. In venenatis facilisis dapibus. Cras dapibus faucibus ante id egestas.</Text>
        </View>
        <View style={styles.oldItem}>
          
          <Text>20.05.2024</Text>
          <Text style={styles.itemText}>Donec lacus diam, pulvinar non dictum vel, pellentesque in odio. In venenatis facilisis dapibus. Cras dapibus faucibus ante id egestas.</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={openCamera} style={styles.button}>
          <Image
            source={require("../assets/camera-icon.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal:20,
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "#0096FF",
    borderRadius: 50,
  },
  buttonContainer:{
    alignItems:"center"
  },
  icon: {
    width: 40,
    height: 40,
  },
  newItem: {
    borderWidth:1,
    borderLeftWidth:3,
    borderColor:"black",
    marginTop:30,
    padding:10,
    
  },
  oldItem: {
    borderWidth:1,
    borderColor:"black",
    marginTop:30,
    padding:10,
  },
  itemText:{
    fontStyle:"italic"
  },
  badge: {
    fontWeight:"bold"
  }
  
});

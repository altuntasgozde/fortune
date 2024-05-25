import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import blogPosts from './blogPosts.json';

export default function Homepage({ route, navigation }) {
  const { name } = route.params;

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Camera permissions are required to use the camera");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      Alert.alert("Image captured", `URI: ${result.uri}`);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('PostDetail', { post: item })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.date}</Text>
      <Text style={styles.content}>{item.content}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text>Merhaba {name}!</Text>
        <FlatList
          data={blogPosts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
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
    paddingHorizontal: 20,
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
  buttonContainer: {
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
  },
  item: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 30,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  content: {
    fontStyle: "italic",
    marginTop: 5,
  },
});

import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function EntryPage({ navigation }) {
  const [relationshipStatus, setRelationshipStatus] = useState("");

  const handleConfirm = () => {
    navigation.navigate("HomePage");
  };

  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <Text>Age</Text>
      <TextInput style={styles.input} keyboardType="numeric" placeholder="Age" />
      <Text>Relationship status</Text>
      <Picker
        selectedValue={relationshipStatus}
        style={{ height: 50, width: "80%", marginBottom: 20 }}
        onValueChange={(itemValue, itemIndex) => setRelationshipStatus(itemValue)}
      >
        <Picker.Item label="Select" value="" />
        <Picker.Item label="Single" value="Single" />
        <Picker.Item label="In a relationship" value="In a relationship" />
        <Picker.Item label="Engaged" value="Engaged" />
        <Picker.Item label="Married" value="Married" />
        <Picker.Item label="It's complicated" value="It's complicated" />
      </Picker>
      <Button title="Confirm" onPress={handleConfirm} />
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
  input: {
    height: 50,
    width: "80%",
    borderColor: "transparent",
    backgroundColor: "#E8EDF4",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});

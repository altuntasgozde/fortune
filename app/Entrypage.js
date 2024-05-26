import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
  Image
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";
import clover from "../assets/clover.png";

export default function Entrypage({ navigation }) {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [relationshipStatus, setRelationshipStatus] = useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDateOfBirth(date.toDateString());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      {/* Durum çubuğunu beyaz yap */}
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Clover Image */}
      <View style={styles.imageContainer}>
        <Image source={clover} style={styles.image} />
      </View>

      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text style={styles.label}>Birthday</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.input}>
            <Text style={{ color: dateOfBirth ? "black" : "gray" }}>
              {dateOfBirth ? dateOfBirth : "Select Date of Birth"}
            </Text>
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          contentContainerStyle={{ backgroundColor: "white" }}
          textColor="black"
        />
      </View>
      <View>
        <Text style={styles.label}>Relationship status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={relationshipStatus}
            onValueChange={(itemValue) => setRelationshipStatus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Relationship Status" value="" />
            <Picker.Item label="Single" value="Single" />
            <Picker.Item label="In a Relationship" value="In a Relationship" />
            <Picker.Item label="Engaged" value="Engaged" />
            <Picker.Item label="Married" value="Married" />
            <Picker.Item label="Divorced" value="Divorced" />
          </Picker>
        </View>
      </View>

      <Button
        title="Submit"
        onPress={() =>
          navigation.navigate("Homepage", {
            name,
            dateOfBirth,
            relationshipStatus,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1F1F",
    justifyContent: "center",
    padding: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 100,  // Adjust the width as needed
    height: 100, // Adjust the height as needed
    resizeMode: "contain",
  },
  label: {
    color: "white",
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    justifyContent: "center",
    backgroundColor: "white",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 12,
    backgroundColor: "white",
  },
  picker: {
    color: "black",
  },
});

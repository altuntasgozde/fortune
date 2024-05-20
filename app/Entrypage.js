import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-picker/picker";

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
      <View>
        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>
      <View>
        <Text>Birthday</Text>
        <TouchableOpacity onPress={showDatePicker}>
          <View style={styles.input}>
            <Text>{dateOfBirth ? dateOfBirth : "Select Date of Birth"}</Text>
          </View>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View>
        <Text>Relationship status</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={relationshipStatus}
            onValueChange={(itemValue) => setRelationshipStatus(itemValue)}
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
        title="Sent"
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
    backgroundColor: "#fff",

    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "gray",

    marginBottom: 12,
  },
});

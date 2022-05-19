import React, { useEffect, useState } from "react";
import {
  View,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { useSelector } from "react-redux";
import { Icon } from "react-native-elements";

// styles
import styles from "./College.styles";

const CollegeScreen = ({ navigation }) => {
  let colleges = useSelector((state) => state.college.colleges);
  const [input, setInput] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  // Display list items in the flat list
  const ListItem = ({ collegeName }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{collegeName}</Text>
      <Icon
        styles={styles.listItemIcon}
        type="font-awesome-5"
        name="heart"
        size={20}
        color="black"
      />
    </View>
  );

  const openModal = () => {
    setModalVisible(true);
  };

  const onSubmit = () => {
    // build the new object
    const newObj = {
      id: Math.floor(Math.random() * 1000),
      status: 1,
      collegeName: input,
      favorite: false,
    };
    colleges.push(newObj);
    setInput("");
    setModalVisible(false);
    console.log(input, "<<<< test");
    console.log(colleges, "new college list");
  };

  const inputModal = () => (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add a College</Text>
          <View>
            <TextInput
              placeholder="College Name"
              defaultValue={input}
              onChangeText={(newCollege) => setInput(newCollege)}
            />
          </View>
          <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Default List of Colleges</Text>
      <FlatList
        data={colleges}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListItem collegeName={item.collegeName} />}
      />
      {inputModal()}
      <View style={styles.button}>
        <TouchableOpacity onPress={openModal} style={styles.addButton}>
          <Icon type="font-awesome-5" name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { CollegeScreen };

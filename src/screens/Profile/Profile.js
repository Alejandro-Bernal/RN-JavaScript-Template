import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Text, Button, ScrollView, Image } from "react-native";

import styles from "./Profile.styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.profileImage}
          source={require("../../../assets/profile/invader_zim.jpeg")}
        />
        <Text style={styles.bioText}>
          My name is ZIM! I am an Irken invader trained to conquer Planets for
          the glory of the Irken Armada. I have trained for 6 years in the hives
          mind, an Artificial Intelligence that natures us since we are but a
          smeet. Since my training simulations the one I enjoyed the most was
          invading and conquering, therefore, I have chosen to pursue my career
          in being the best invader in my fleet.
        </Text>
      </View>
      <Text style={styles.detailsTitle}>My Details</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailItems}>Age: 160</Text>
        {/* <CircularProgress radius={90} titleColor="#222" value={60} /> */}

        <Text style={styles.detailItems}>Profession: INVADER</Text>

        <Text style={styles.detailItems}>Favorite color: PURPLE</Text>
        <Text style={styles.detailItems}>School: EARTH SKOOL</Text>

        <Text style={styles.detailItems}>Place of Birth: PLANET IRK</Text>
      </View>
      <Button
        icon={{
          type: "font-awesome-5",
          name: "sign-out-alt",
          size: 15,
          color: "white",
        }}
        title="Logout"
        onPress={() => navigation.navigate("Login")}
      />
    </ScrollView>
  );
};

export { ProfileScreen };

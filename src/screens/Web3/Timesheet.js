import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

const TimesheetScreen = ({ navigation }) => {
  const pressMe = () => {
    alert("You pressed me");
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>Sign in with your Metamask</Text>
      <Button onPress={pressMe} title="Connect your Wallet" color="#841584" />
    </View>
  );
};

export { TimesheetScreen };

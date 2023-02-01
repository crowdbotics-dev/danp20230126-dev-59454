import { useSelector } from "react-redux";
import { Pressable } from "react-native";
import { View } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = ({
  navigation
}) => {
  const UserDetails = useSelector(state => state.UserDetails);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => navigation.navigation.navigate("Untitled4", {
        "name": UserDetails.username,
        "surname": "palacios"
      })}><View style={styles.PdFFgUFL}></View></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  PdFFgUFL: {
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  }
});
export default Untitled3;
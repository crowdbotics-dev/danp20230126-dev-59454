import { TextInput } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  const UserDetails = useSelector(state => state.UserDetails);
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><TextInput style={styles.pnaCyRfb} value={UserDetails.username} defaultValue={UserDetails.username} placeholder={UserDetails.username}></TextInput></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  pnaCyRfb: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  }
});
export default Untitled2;
import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./src/components/Button";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons} />
      <Button onClick={() => {}} label="AC " />
      <Button onClick={() => {}} label="/ " />
      <Button onClick={() => {}} label="7" />
      <Button onClick={() => {}} label="8 " />
      <Button onClick={() => {}} label="9" />
      <Button onClick={() => {}} label="*" />
      <Button onClick={() => {}} label="4" />
      <Button onClick={() => {}} label="5" />
      <Button onClick={() => {}} label="6" />
      <Button onClick={() => {}} label="-" />
      <Button onClick={() => {}} label="1" />
      <Button onClick={() => {}} label="2" />
      <Button onClick={() => {}} label="3" />
      <Button onClick={() => {}} label="+" />
      <Button onClick={() => {}} label="0" />
      <Button onClick={() => {}} label="." />
      <Button onClick={() => {}} label="=" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
export default App;

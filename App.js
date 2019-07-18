import React from "react";
import { View } from "react-native";
import Button from "./src/components/Button";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons} />
      <Button onClick={() => {}} label="Teste " />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  buttons: {},
});

export default App;

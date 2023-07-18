import { View, StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import AnimatedLogo from "../components/animated-logo";
import { LOGO_CONTAINER, LOGO_HEIGHT, LOGO_WIDTH } from "../constants";

const SecondScreen = () => {
  return (
    <View style={styles.container}>
      <Animated.View sharedTransitionTag="logo" style={styles.logo}>
        <AnimatedLogo height={LOGO_HEIGHT} width={LOGO_WIDTH} />
      </Animated.View>
    </View>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    width: LOGO_CONTAINER,
    height: LOGO_CONTAINER,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: LOGO_HEIGHT,
  },
});

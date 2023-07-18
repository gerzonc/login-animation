import { View, Dimensions, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Image } from "expo-image";
import Animated, {
  Easing,
  FadeInDown,
  FadeInLeft,
  Keyframe,
} from "react-native-reanimated";

import AnimatedLogo from "../components/animated-logo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import {
  LOGO_CONTAINER,
  LOGO_HEIGHT,
  LOGO_WIDTH,
  NAVIGATION_TIMEOUT,
} from "../constants";

const { width, height } = Dimensions.get("window");
const background = require("../assets/background.png");
const image = require("../assets/image.png");

const EXImage = Animated.createAnimatedComponent(Image);

interface IProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "first">;
}

const FirstScreen = ({ navigation }: IProps) => {
  const enteringImage = new Keyframe({
    0: {
      originX: -50,
      opacity: 0,
    },
    45: {
      originX: 0,
      opacity: 0.5,
      easing: Easing.cubic,
    },
  }).duration(2500);

  const enteringLogo = new Keyframe({
    0: {
      originX: 1,
      originY: height / 3 + 80,
      opacity: 0,
      transform: [{ scale: 0.3 }, { rotate: "-420deg" }],
    },
    25: {
      originX: width / 3 + 20,
      originY: height / 3 - 100,
      opacity: 1,
      transform: [{ scale: 1 }, { rotate: "0deg" }],
    },
    // Duplicate so we have enough time to read "ZOOM TAN"
    45: {
      originX: width / 3 + 20,
      originY: height / 3 - 100,
      opacity: 1,
      transform: [{ scale: 1 }, { rotate: "0deg" }],
    },
    100: {
      originX: width / 3 + 20,
      originY: height / 2.28 - 80,
      opacity: 1,
      transform: [{ scale: 20 }, { rotate: "0deg" }],
    },
  }).delay(1000).duration(2000);

  const enteringTitleZOOM = new Keyframe({
    0: {
      originX: -15,
      originY: height / 3 + 80,
      opacity: 0,
      transform: [{ scale: 0.5 }],
    },
    25: {
      originX: width / 2 - 40,
      originY: height / 3,
      opacity: 1,
      transform: [{ scale: 1 }],
    },
  })
    .delay(1000)
    .duration(2000);

  const enteringTitleTAN = new Keyframe({
    0: {
      originX: -125,
      originY: height / 3 + 80,
      opacity: 0,
      transform: [{ scale: 0 }],
    },
    25: {
      originX: width / 2 - 25,
      originY: height / 3 + 25,
      opacity: 1,
      transform: [{ scale: 1 }],
    },
  })
    .delay(1000)
    .duration(2000);

  useEffect(() => {
    // Once the navigation finishes, navigate to the next screen
    setTimeout(() => navigation.navigate("second"), NAVIGATION_TIMEOUT);
  });

  return (
    <View style={styles.container}>
      <Image source={background} style={styles.image} />
      <EXImage entering={enteringImage} source={image} style={styles.image} />
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          paddingBottom: 160,
        }}
      >
        <Animated.View
          sharedTransitionTag="logo"
          entering={enteringLogo}
          style={styles.logoContainer}
        >
          <AnimatedLogo height={LOGO_HEIGHT} width={LOGO_WIDTH} />
        </Animated.View>
        <Animated.Text entering={enteringTitleZOOM} style={styles.text}>
          TICK
        </Animated.Text>
        <Animated.Text entering={enteringTitleTAN} style={styles.text}>
          TAC
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    position: "absolute",
    height: height * 1.5,
    width: width * 1.5,
    opacity: 0.5,
  },
  logoContainer: {
    width: LOGO_CONTAINER,
    height: LOGO_CONTAINER,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: LOGO_HEIGHT,
    zIndex: 2,
  },
  text: {
    fontSize: 25,
    letterSpacing: 3,
    fontWeight: "bold",
  },
});

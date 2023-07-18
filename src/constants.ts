import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const LOGO_HEIGHT = width * 0.27;
export const LOGO_WIDTH = LOGO_HEIGHT - 54;
export const LOGO_CONTAINER = LOGO_HEIGHT - 20;
export const NAVIGATION_TIMEOUT = 3000;

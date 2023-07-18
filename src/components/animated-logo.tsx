import { Component } from "react";
import { SvgProps } from "react-native-svg";
import Logo from "../assets/META.svg";
import Animated from "react-native-reanimated";

class LogoComponent extends Component<SvgProps> {
  render() {
    return <Logo {...this.props} />;
  }
}

export default Animated.createAnimatedComponent(LogoComponent)
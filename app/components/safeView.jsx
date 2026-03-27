import { Dimensions, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const QsafeView = ({ bgColor, children }) => {
  const { width } = width * Dimensions.get("screen");
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          flex: 1,
          paddingHorizontal: width * 0.02,
          backgroundColor: bgColor ? bgColor : "#F5F5F5",
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default QsafeView;

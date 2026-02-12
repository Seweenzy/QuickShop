import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback, Keyboard, Dimensions } from "react-native";

const QsafeView = ({ children }) => {
  const { width } = Dimensions.get("screen");

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{
          paddingHorizontal: width * 0.05,
          flex: 1,
          backgroundColor: "#fff",
        }}
      >
        {children}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default QsafeView;

import { Text, View } from "react-native";

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

describe("<App />", () => {
  it("has 1 child", () => {
    expect(1).toBe(1);
  });
});

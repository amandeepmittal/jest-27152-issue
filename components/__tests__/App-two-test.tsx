import { View, Text } from "react-native";
import React from "react";
import renderer from "react-test-renderer";

const App = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});

import Colors from "@/constants/Colors";
import { View, Text } from "./Themed";
import { GraphPoint, LineGraph } from "react-native-graph";
import timeseries from "@/../assets/data/timeseries.json";
import { useState } from "react";

const Graph = () => {
  const graphPoints: GraphPoint[] = timeseries.values.map((v) => ({
    date: new Date(v.datetime),
    value: Number.parseFloat(v.close),
  }));

  return (
    <View>
      <LineGraph
        points={graphPoints}
        animated={false}
        color="#017560"
        style={{ width: "100%", height: 300, padding: 20 }}
        gradientFillColors={["#0176505D", "#7476df00"]}
        enableFadeInMask
      />
    </View>
  );
};

export default Graph;

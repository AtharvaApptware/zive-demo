import React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const DonutChart: React.FC = () => {
  const data = [
    { name: "Common (CS) Stock", value: 91.3 },
    { name: "Other", value: 8.7 },
  ];
  const outerRingData = [
    { name: "Outer Ring - Placeholder", value: 91.3 },
    { name: "Other", value: 8.7 },
  ];

  const COLORS = ["#85c5e8", "#6694e2"];
  const OUTER_COLOR = ["#85c5e8", "white"];
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={110}
          outerRadius={150}
          fill="#8884d8"
          paddingAngle={5}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Pie
          data={outerRingData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={160}
          outerRadius={165}
          fill={OUTER_COLOR[0]}
          isAnimationActive={false}
          paddingAngle={5}
        >
          {outerRingData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={OUTER_COLOR[index % OUTER_COLOR.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "12px", fontWeight: "bold", color: "#333" }}>
          Common (CS) Stock : 16442833
        </div>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "bold",
            color: "#333",
            marginTop: "5px",
          }}
        >
          Distribution 91.30%
        </div>
      </div>
    </div>
  );
};

export default DonutChart;

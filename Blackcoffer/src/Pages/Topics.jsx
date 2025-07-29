

import React from "react";

import { PieChart, Pie, LabelList, Tooltip, ResponsiveContainer } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { browser: "Chrome", visitors: 275, fill: "#3b82f6" },
  { browser: "Safari", visitors: 200, fill: "#10b981" },
  { browser: "Firefox", visitors: 187, fill: "#f59e0b" },
  { browser: "Edge", visitors: 173, fill: "#8b5cf6" },
  { browser: "Other", visitors: 90, fill: "#f43f5e" },
];

const Topics = () => {
  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Topics - Pie Chart</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Tooltip />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              cx="50%"
              cy="31%"
              outerRadius={80}
              fill="#8884d8"
              labelLine={false}
            >
              <LabelList
                dataKey="browser"
                position="inside"
                fill="#ffffff"
                fontSize={12}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default Topics;

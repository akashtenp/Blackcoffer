"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const City = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>City Bar</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 2, right: 4, left: 2, bottom: 4 }}
          >
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <YAxis
              dataKey="month"
              type="category"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <XAxis type="number" hide />
            <Tooltip />
            <Bar dataKey="desktop" fill="#3b82f6" radius={4}>
              <LabelList
                dataKey="month"
                position="insideLeft"
                offset={4}
                fill="#ffffff"
                fontSize={5}
              />
              <LabelList
                dataKey="desktop"
                position="right"
                offset={4}
                fill="#000000"
                fontSize={5}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default City;

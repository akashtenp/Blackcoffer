"use client"
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
  ResponsiveContainer,
} from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const chartData = [
  { year: "2019", value: 120, fill: "#3b82f6" },
  { year: "2020", value: 150, fill: "#10b981" },
  { year: "2021", value: 180, fill: "#f59e0b" },
  { year: "2022", value: 220, fill: "#8b5cf6" },
  { year: "2023", value: 270, fill: "#f43f5e" },
  { year: "2024", value: 300, fill: "#0ea5e9" },
]

const Year = () => {
  return (
    <Card className="w-full h-full">
      <CardHeader>
        <CardTitle>Yearly Trends</CardTitle>
        <CardDescription>2019 - 2024 Overview</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <Tooltip />
            <Bar
              dataKey="value"
              radius={8}
              activeIndex={chartData.length - 1}
              fill="#3b82f6"
              activeBar={(props) => (
                <Rectangle
                  {...props}
                  fillOpacity={0.8}
                  stroke={props.payload.fill}
                  strokeDasharray="4"
                  strokeDashoffset={4}
                />
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default Year

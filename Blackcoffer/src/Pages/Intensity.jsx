import { TrendingUp } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { month: "January", Intensity: 186, Likelihood: 80, Relevance: 60 },
  { month: "February", Intensity: 305, Likelihood: 200, Relevance: 95 },
  { month: "March", Intensity: 237, Likelihood: 120, Relevance: 110 },
  { month: "April", Intensity: 73, Likelihood: 190, Relevance: 65 },
  { month: "May", Intensity: 209, Likelihood: 130, Relevance: 150 },
  { month: "June", Intensity: 214, Likelihood: 140, Relevance: 135 },
]

const Intensity = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Line Chart - Multiple</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="5 5" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={1}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Intensity"
              stroke="#3b82f6"
              strokeWidth={1}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Likelihood"
              stroke="#10b981"
              strokeWidth={1}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="Relevance"
              stroke="#f59e0b" // amber-500
              strokeWidth={1}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default Intensity

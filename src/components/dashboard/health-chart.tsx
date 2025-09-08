"use client";

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const healthData = [
  { name: "Jan", score: 78, tests: 1200, efficiency: 82 },
  { name: "Feb", score: 82, tests: 1150, efficiency: 85 },
  { name: "Mar", score: 85, tests: 1100, efficiency: 88 },
  { name: "Apr", score: 88, tests: 1050, efficiency: 90 },
  { name: "May", score: 91, tests: 1000, efficiency: 92 },
  { name: "Jun", score: 93, tests: 950, efficiency: 94 },
];

export function HealthChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={healthData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis 
            dataKey="name" 
            className="text-xs fill-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-xs fill-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background border rounded-lg shadow-lg p-3">
                    <p className="font-semibold text-sm mb-2">{label}</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-xs">Health Score: {payload[0]?.value}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-xs">Test Cases: {payload[1]?.value}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                        <span className="text-xs">Efficiency: {payload[2]?.value}%</span>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line 
            type="monotone" 
            dataKey="score" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: "#10b981", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: "#10b981" }}
          />
          <Line 
            type="monotone" 
            dataKey="tests" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: "#3b82f6", strokeWidth: 2, r: 3 }}
          />
          <Line 
            type="monotone" 
            dataKey="efficiency" 
            stroke="#8b5cf6" 
            strokeWidth={2}
            dot={{ fill: "#8b5cf6", strokeWidth: 2, r: 3 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex items-center justify-center gap-6 mt-4 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span>Health Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span>Test Cases</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
          <span>Efficiency %</span>
        </div>
      </div>
    </div>
  );
}
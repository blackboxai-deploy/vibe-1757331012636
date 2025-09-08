"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DatasetsPage() {
  const [selectedType, setSelectedType] = useState("all");

  const datasets = [
    {
      id: "DS001",
      name: "User Authentication Data",
      type: "Test Data",
      size: "2.1 GB",
      records: "125K",
      efficiency: 94,
      lastOptimized: "2024-01-14",
      duplicates: 1247,
      status: "optimized"
    },
    {
      id: "DS002", 
      name: "Payment Test Scenarios",
      type: "Test Cases",
      size: "856 MB",
      records: "45K",
      efficiency: 87,
      lastOptimized: "2024-01-12",
      duplicates: 543,
      status: "pending"
    },
    {
      id: "DS003",
      name: "API Response Mock Data",
      type: "Mock Data",
      size: "3.4 GB",
      records: "200K",
      efficiency: 78,
      lastOptimized: "2024-01-10",
      duplicates: 2134,
      status: "needs-optimization"
    },
    {
      id: "DS004",
      name: "User Profile Variations",
      type: "Test Data",
      size: "1.2 GB",
      records: "78K",
      efficiency: 96,
      lastOptimized: "2024-01-15",
      duplicates: 89,
      status: "optimized"
    }
  ];

  const filteredDatasets = selectedType === "all" 
    ? datasets 
    : datasets.filter(ds => ds.type === selectedType);

  const getEfficiencyBadge = (efficiency: number) => {
    if (efficiency >= 90) {
      return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
    } else if (efficiency >= 80) {
      return <Badge className="bg-yellow-100 text-yellow-800">Good</Badge>;
    } else {
      return <Badge variant="destructive">Needs Work</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "optimized":
        return <Badge className="bg-green-100 text-green-800">Optimized</Badge>;
      case "pending":
        return <Badge className="bg-blue-100 text-blue-800">Pending</Badge>;
      case "needs-optimization":
        return <Badge variant="destructive">Needs Optimization</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Smart Dataset Management</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered dataset optimization and intelligent data management
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            📊 Analytics Report
          </Button>
          <Button>
            🤖 Run AI Optimization
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Datasets</CardTitle>
            <Badge variant="outline">📁</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Across 3 data types
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Storage Saved</CardTitle>
            <Badge className="bg-green-100 text-green-800">💾</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3 GB</div>
            <p className="text-xs text-muted-foreground">
              Through deduplication
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">📈</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">88.7%</div>
            <p className="text-xs text-muted-foreground">
              Average optimization
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Duplicates Found</CardTitle>
            <Badge className="bg-orange-100 text-orange-800">🔍</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,013</div>
            <p className="text-xs text-muted-foreground">
              Ready for cleanup
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤖 AI Dataset Insights
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Live Analysis
            </Badge>
          </CardTitle>
          <CardDescription>
            Real-time AI analysis of your dataset patterns and optimization opportunities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Pattern Detection</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm">High duplicate rate in API mock data (15.8%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm">Payment scenarios have optimization potential</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">User profiles well-optimized (96% efficiency)</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Recommendations</h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium">Consolidate API Mock Data</div>
                  <div className="text-muted-foreground">
                    Save ~1.2GB by removing redundant API responses
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium">Optimize Payment Scenarios</div>
                  <div className="text-muted-foreground">
                    Normalize test data patterns for better efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="overview" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="optimization">Optimization</TabsTrigger>
            <TabsTrigger value="patterns">Patterns</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Input 
              placeholder="Search datasets..." 
              className="w-64"
            />
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Test Data">Test Data</SelectItem>
                <SelectItem value="Test Cases">Test Cases</SelectItem>
                <SelectItem value="Mock Data">Mock Data</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Dataset Overview</CardTitle>
              <CardDescription>
                Comprehensive view of all datasets with efficiency metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Table Header */}
                <div className="grid grid-cols-10 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
                  <div className="col-span-1">ID</div>
                  <div className="col-span-2">Name</div>
                  <div className="col-span-1">Type</div>
                  <div className="col-span-1">Size</div>
                  <div className="col-span-1">Records</div>
                  <div className="col-span-2">Efficiency</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1">Actions</div>
                </div>

                {/* Table Rows */}
                {filteredDatasets.map((dataset) => (
                  <div key={dataset.id} className="grid grid-cols-10 gap-4 text-sm py-3 border-b last:border-0">
                    <div className="col-span-1 font-mono text-xs">
                      {dataset.id}
                    </div>
                    <div className="col-span-2">
                      <div className="font-medium">{dataset.name}</div>
                      <div className="text-xs text-muted-foreground">
                        Last optimized: {dataset.lastOptimized}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <Badge variant="outline">{dataset.type}</Badge>
                    </div>
                    <div className="col-span-1 font-medium">
                      {dataset.size}
                    </div>
                    <div className="col-span-1 text-muted-foreground">
                      {dataset.records}
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <div className="flex justify-between text-xs mb-1">
                            <span>{dataset.efficiency}%</span>
                            <span>{dataset.duplicates} dupes</span>
                          </div>
                          <Progress value={dataset.efficiency} className="h-1" />
                        </div>
                        {getEfficiencyBadge(dataset.efficiency)}
                      </div>
                    </div>
                    <div className="col-span-1">
                      {getStatusBadge(dataset.status)}
                    </div>
                    <div className="col-span-1">
                      <Button variant="ghost" size="sm">
                        Optimize
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="optimization">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Active Optimizations</CardTitle>
                <CardDescription>Currently running dataset optimizations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium">API Mock Data Cleanup</div>
                      <Badge className="bg-blue-100 text-blue-800">Running</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} />
                      <div className="text-xs text-muted-foreground">
                        Analyzing 200K records for duplicate patterns...
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Optimization Queue</CardTitle>
                <CardDescription>Pending optimization tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Payment Test Scenarios - Normalize data patterns",
                    "User Auth Data - Remove expired records",
                    "Integration Data - Consolidate endpoints"
                  ].map((task, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <span className="text-sm">{task}</span>
                      <Button variant="outline" size="sm">
                        Start
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="patterns">
          <Card>
            <CardHeader>
              <CardTitle>AI Pattern Analysis</CardTitle>
              <CardDescription>
                Discovered patterns and anomalies in dataset structure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Data Distribution Patterns</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-lg font-bold text-blue-600">68%</div>
                      <div className="text-sm">Test Data</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-lg font-bold text-green-600">22%</div>
                      <div className="text-sm">Mock Data</div>
                    </div>
                    <div className="text-center p-4 bg-muted rounded-lg">
                      <div className="text-lg font-bold text-purple-600">10%</div>
                      <div className="text-sm">Test Cases</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Quality Insights</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>High-quality datasets</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800">75%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Medium-quality datasets</span>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">25%</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Low-quality datasets</span>
                      </div>
                      <Badge variant="destructive">0%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Optimization History</CardTitle>
              <CardDescription>
                Recent dataset optimization activities and results
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "2024-01-15",
                    action: "Optimized User Profile Variations",
                    result: "Efficiency improved from 89% to 96%",
                    savings: "180MB saved"
                  },
                  {
                    date: "2024-01-14", 
                    action: "Cleaned User Authentication Data",
                    result: "Removed 1,247 duplicate records",
                    savings: "420MB saved"
                  },
                  {
                    date: "2024-01-12",
                    action: "Normalized Payment Test Scenarios",
                    result: "Data patterns standardized",
                    savings: "156MB saved"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-muted-foreground">{item.result}</div>
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{item.savings}</div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        Completed
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MetricCard } from "@/components/dashboard/metric-card";
import { AIInsightPanel } from "@/components/dashboard/ai-insight-panel";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { HealthChart } from "@/components/dashboard/health-chart";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Test Automation Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Monitor and optimize your testing ecosystem with AI-powered insights
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            📊 Generate Report
          </Button>
          <Button>
            🚀 Run AI Optimization
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Test Cases"
          value="1,247"
          change="-12%"
          changeType="positive"
          description="Redundant cases removed"
        />
        <MetricCard
          title="Dataset Efficiency"
          value="94.2%"
          change="+8.5%"
          changeType="positive"
          description="Data optimization score"
        />
        <MetricCard
          title="Folder Health"
          value="89%"
          change="+15%"
          changeType="positive"
          description="Structure optimization"
        />
        <MetricCard
          title="Version Sync"
          value="99.9%"
          change="+0.1%"
          changeType="positive"
          description="Dev-Prod alignment"
        />
      </div>

      {/* AI Insights and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AIInsightPanel />
        <RecentActivity />
      </div>

      {/* Detailed Analytics */}
      <Tabs defaultValue="health" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="health">System Health</TabsTrigger>
          <TabsTrigger value="optimization">Optimization</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
        </TabsList>

        <TabsContent value="health" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  💚 Automation Health Score
                  <Badge variant="default">Excellent</Badge>
                </CardTitle>
                <CardDescription>
                  Overall health of your test automation ecosystem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <HealthChart />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
                <CardDescription>Real-time monitoring of key components</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Test Execution Engine</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">AI Optimization Service</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Processing</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Version Control Sync</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Synced</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dataset Manager</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Optimizing</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="optimization" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Case Cleanup</CardTitle>
                <CardDescription>AI-powered redundancy removal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>73%</span>
                  </div>
                  <Progress value={73} />
                  <p className="text-xs text-muted-foreground">
                    156 redundant test cases identified and removed
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dataset Optimization</CardTitle>
                <CardDescription>Smart data management</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Efficiency</span>
                    <span>94%</span>
                  </div>
                  <Progress value={94} />
                  <p className="text-xs text-muted-foreground">
                    Data patterns optimized, 2.3GB storage saved
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Folder Restructure</CardTitle>
                <CardDescription>Intelligent organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Completion</span>
                    <span>89%</span>
                  </div>
                  <Progress value={89} />
                  <p className="text-xs text-muted-foreground">
                    Folder hierarchy optimized for better navigation
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Test execution and system performance over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2.3s</div>
                  <div className="text-sm text-muted-foreground">Avg Test Time</div>
                  <div className="text-xs text-green-600">↓ 15% from last week</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">99.2%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                  <div className="text-xs text-blue-600">↑ 2.1% improvement</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">847</div>
                  <div className="text-sm text-muted-foreground">Tests/Hour</div>
                  <div className="text-xs text-purple-600">↑ 23% efficiency</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">12ms</div>
                  <div className="text-sm text-muted-foreground">AI Response</div>
                  <div className="text-xs text-orange-600">↓ 8ms improvement</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automation Trends</CardTitle>
              <CardDescription>Long-term patterns and predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold mb-3">This Month's Highlights</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Test case redundancy reduced by 24%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Dataset efficiency improved to 94.2%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Folder structure optimizations: 89%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Version sync accuracy: 99.9%</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Predicted Improvements</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• AI models predict 15% further test optimization potential</p>
                    <p>• Dataset patterns suggest 5% additional efficiency gains</p>
                    <p>• Folder structure analysis indicates 3 areas for improvement</p>
                    <p>• Version control patterns show opportunity for 99.95% sync rate</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
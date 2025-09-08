"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Analytics & Reporting</h1>
          <p className="text-muted-foreground mt-1">
            Comprehensive insights and ROI metrics from AI-powered automation ecosystem
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            📤 Export Dashboard
          </Button>
          <Button>
            📊 Generate Executive Report
          </Button>
        </div>
      </div>

      {/* Key ROI Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Time Saved</CardTitle>
            <Badge className="bg-green-100 text-green-800">⏰</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47.5h</div>
            <p className="text-xs text-muted-foreground">
              Per week across all optimizations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
            <Badge className="bg-green-100 text-green-800">💰</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$18,500</div>
            <p className="text-xs text-muted-foreground">
              Monthly operational savings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Efficiency Gain</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">📈</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34%</div>
            <p className="text-xs text-muted-foreground">
              Overall automation efficiency
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ROI</CardTitle>
            <Badge className="bg-purple-100 text-purple-800">💎</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">385%</div>
            <p className="text-xs text-muted-foreground">
              Return on AI investment
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Executive Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📋 Executive Summary
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Current Quarter
            </Badge>
          </CardTitle>
          <CardDescription>
            High-level overview of AI automation ecosystem performance and impact
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Key Achievements</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Reduced test redundancy by 24% (156 cases eliminated)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">Improved dataset efficiency to 94.2% average</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Optimized folder structures with 89% health score</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-sm">Achieved 99.9% dev-production sync accuracy</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Business Impact</h4>
              <div className="space-y-2">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium text-green-700">Cost Reduction</div>
                  <div className="text-sm text-muted-foreground">
                    $18,500 monthly savings in operational costs
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium text-blue-700">Team Productivity</div>
                  <div className="text-sm text-muted-foreground">
                    47.5 hours/week saved for strategic work
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium text-purple-700">Quality Improvement</div>
                  <div className="text-sm text-muted-foreground">
                    34% improvement in testing efficiency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Analytics */}
      <Tabs defaultValue="performance" className="space-y-4">
        <div className="flex items-center justify-between">
          <TabsList className="grid w-fit grid-cols-4">
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="roi">ROI Analysis</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
          </TabsList>
          
          <Select defaultValue="current-quarter">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select time period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-quarter">Current Quarter</SelectItem>
              <SelectItem value="last-quarter">Last Quarter</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="year-to-date">Year to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <TabsContent value="performance">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Test Case Optimization</CardTitle>
                <CardDescription>AI-powered test case management performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Redundancy Removal</span>
                    <div className="text-right">
                      <div className="font-bold">156 cases</div>
                      <div className="text-xs text-green-600">-24% redundancy</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Time Savings</span>
                    <div className="text-right">
                      <div className="font-bold">4.2h/week</div>
                      <div className="text-xs text-green-600">+15% efficiency</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Automation Coverage</span>
                    <div className="text-right">
                      <div className="font-bold">92%</div>
                      <div className="text-xs text-blue-600">+8% improvement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dataset Management</CardTitle>
                <CardDescription>Smart data optimization metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Storage Optimization</span>
                    <div className="text-right">
                      <div className="font-bold">2.3 GB</div>
                      <div className="text-xs text-green-600">Saved storage</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Efficiency Score</span>
                    <div className="text-right">
                      <div className="font-bold">94.2%</div>
                      <div className="text-xs text-green-600">+8.5% improvement</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Duplicates Removed</span>
                    <div className="text-right">
                      <div className="font-bold">4,013</div>
                      <div className="text-xs text-blue-600">Records cleaned</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Folder Structure Health</CardTitle>
                <CardDescription>Organization optimization metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Health Score</span>
                    <div className="text-right">
                      <div className="font-bold">89%</div>
                      <div className="text-xs text-green-600">+15% improvement</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Depth Optimization</span>
                    <div className="text-right">
                      <div className="font-bold">3.2</div>
                      <div className="text-xs text-green-600">Avg depth reduction</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Navigation Speed</span>
                    <div className="text-right">
                      <div className="font-bold">+40%</div>
                      <div className="text-xs text-blue-600">Faster access</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Version Control Sync</CardTitle>
                <CardDescription>Environment synchronization performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sync Accuracy</span>
                    <div className="text-right">
                      <div className="font-bold">99.9%</div>
                      <div className="text-xs text-green-600">+0.1% improvement</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Auto-Resolution Rate</span>
                    <div className="text-right">
                      <div className="font-bold">67%</div>
                      <div className="text-xs text-green-600">AI-resolved conflicts</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Deployment Success</span>
                    <div className="text-right">
                      <div className="font-bold">98.5%</div>
                      <div className="text-xs text-blue-600">Success rate</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roi">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>ROI Breakdown by Category</CardTitle>
                <CardDescription>
                  Detailed return on investment analysis across all optimization areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Cost Savings</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Test Case Optimization</div>
                          <div className="text-sm text-muted-foreground">Reduced manual effort</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">$8,200</div>
                          <div className="text-xs">monthly</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Dataset Management</div>
                          <div className="text-sm text-muted-foreground">Storage & processing</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">$4,100</div>
                          <div className="text-xs">monthly</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Infrastructure</div>
                          <div className="text-sm text-muted-foreground">Reduced resource usage</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">$3,800</div>
                          <div className="text-xs">monthly</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <div className="font-medium">Maintenance</div>
                          <div className="text-sm text-muted-foreground">Automated optimization</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">$2,400</div>
                          <div className="text-xs">monthly</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Investment vs Returns</h4>
                    <div className="space-y-3">
                      <div className="p-4 bg-red-50 rounded-lg">
                        <div className="font-semibold text-red-800">Total Investment</div>
                        <div className="text-2xl font-bold text-red-600">$48,000</div>
                        <div className="text-sm text-red-700">AI platform & implementation</div>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="font-semibold text-green-800">Monthly Returns</div>
                        <div className="text-2xl font-bold text-green-600">$18,500</div>
                        <div className="text-sm text-green-700">Operational savings</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="font-semibold text-blue-800">Payback Period</div>
                        <div className="text-2xl font-bold text-blue-600">2.6 months</div>
                        <div className="text-sm text-blue-700">Investment recovery time</div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="font-semibold text-purple-800">Annual ROI</div>
                        <div className="text-2xl font-bold text-purple-600">385%</div>
                        <div className="text-sm text-purple-700">Return on investment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="trends">
          <Card>
            <CardHeader>
              <CardTitle>Performance Trends</CardTitle>
              <CardDescription>
                Long-term analysis of automation ecosystem improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Efficiency Trends</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Test Case Efficiency</span>
                        <Badge className="bg-green-100 text-green-800">↗️ +24%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Consistent improvement over last 3 months
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Dataset Optimization</span>
                        <Badge className="bg-green-100 text-green-800">↗️ +18%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Steady growth in data management efficiency
                      </div>
                    </div>
                    <div className="p-3 bg-muted rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Folder Organization</span>
                        <Badge className="bg-green-100 text-green-800">↗️ +35%</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Significant structural improvements
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">Usage Patterns</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Peak Optimization Hours</span>
                      <Badge variant="outline">2-4 AM UTC</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Most Active Module</span>
                      <Badge variant="outline">Test Cases</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">AI Processing Time</span>
                      <Badge variant="outline">12ms avg</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">User Satisfaction</span>
                      <Badge className="bg-green-100 text-green-800">94%</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions">
          <Card>
            <CardHeader>
              <CardTitle>AI Predictions & Forecasts</CardTitle>
              <CardDescription>
                Machine learning-powered predictions for future optimization opportunities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Next Quarter Predictions</h4>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Test Case Optimization</div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Predicted additional 15% redundancy reduction
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">+6.2h/week saved</Badge>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Dataset Efficiency</div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Expected to reach 97% optimization score
                        </div>
                        <Badge className="bg-green-100 text-green-800">+1.2GB saved</Badge>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <div className="font-medium">Folder Structure</div>
                        <div className="text-sm text-muted-foreground mb-1">
                          Health score improvement to 95%
                        </div>
                        <Badge className="bg-purple-100 text-purple-800">+30% navigation</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">ROI Forecast</h4>
                    <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
                      <div className="text-3xl font-bold text-green-600 mb-2">$67,200</div>
                      <div className="text-sm text-muted-foreground mb-4">
                        Projected annual savings increase
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div className="text-center">
                          <div className="font-bold text-blue-600">485%</div>
                          <div>Projected ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-green-600">8.2 months</div>
                          <div>Break-even</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Recommended Actions</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">Immediate (1-2 weeks)</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        • Expand test case analysis to integration tests
                        • Implement advanced dataset pattern recognition
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">Short-term (1-3 months)</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        • Deploy AI to additional test environments
                        • Integrate with CI/CD pipeline optimization
                      </div>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="font-medium">Long-term (3-6 months)</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        • Expand to multi-project ecosystem management
                        • Implement predictive test failure analysis
                      </div>
                    </div>
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
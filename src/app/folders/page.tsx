"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function FoldersPage() {
  const [autoOptimize, setAutoOptimize] = useState(false);

  const folderStructure = [
    {
      path: "/tests/authentication",
      health: 95,
      depth: 3,
      files: 24,
      size: "2.1 MB",
      lastOptimized: "2024-01-15",
      issues: [],
      status: "excellent"
    },
    {
      path: "/tests/payment/validation",
      health: 67,
      depth: 5,
      files: 18,
      size: "1.8 MB", 
      lastOptimized: "2024-01-10",
      issues: ["deep nesting", "similar files"],
      status: "needs-improvement"
    },
    {
      path: "/tests/integration/api",
      health: 45,
      depth: 7,
      files: 32,
      size: "3.2 MB",
      lastOptimized: "2024-01-05",
      issues: ["excessive depth", "fragmented structure"],
      status: "critical"
    },
    {
      path: "/tests/user-management",
      health: 88,
      depth: 2,
      files: 15,
      size: "1.2 MB",
      lastOptimized: "2024-01-14",
      issues: [],
      status: "good"
    }
  ];

  const getHealthColor = (health: number) => {
    if (health >= 90) return "text-green-600";
    if (health >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return <Badge className="bg-green-100 text-green-800">Excellent</Badge>;
      case "good":
        return <Badge className="bg-blue-100 text-blue-800">Good</Badge>;
      case "needs-improvement":
        return <Badge className="bg-orange-100 text-orange-800">Needs Work</Badge>;
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Folder Structure Optimization</h1>
          <p className="text-muted-foreground mt-1">
            AI-powered analysis and optimization of test folder hierarchies
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            🗂️ Export Structure
          </Button>
          <Button>
            🤖 Optimize Structure
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Folders</CardTitle>
            <Badge variant="outline">📁</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Main test directories
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Health</CardTitle>
            <Badge className="bg-yellow-100 text-yellow-800">📊</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">74%</div>
            <p className="text-xs text-muted-foreground">
              Structure optimization score
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Max Depth</CardTitle>
            <Badge className="bg-red-100 text-red-800">⚠️</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">
              Exceeds recommended depth
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Issues Found</CardTitle>
            <Badge className="bg-orange-100 text-orange-800">🔍</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Structural improvements needed
            </p>
          </CardContent>
        </Card>
      </div>

      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🤖 AI Structure Analysis
            <Badge variant="outline" className="bg-blue-50 text-blue-700">
              Active
            </Badge>
          </CardTitle>
          <CardDescription>
            Intelligent recommendations for folder hierarchy optimization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Critical Issues</h4>
              <div className="space-y-3">
                <div className="p-3 border-l-4 border-red-500 bg-red-50">
                  <div className="font-medium text-red-800">Excessive Nesting Depth</div>
                  <div className="text-sm text-red-700">
                    /tests/integration/api has 7 levels (recommended: 3-4)
                  </div>
                  <Button size="sm" variant="outline" className="mt-2">
                    Fix Structure
                  </Button>
                </div>
                <div className="p-3 border-l-4 border-orange-500 bg-orange-50">
                  <div className="font-medium text-orange-800">Fragmented Organization</div>
                  <div className="text-sm text-orange-700">
                    Similar test types scattered across multiple folders
                  </div>
                  <Button size="sm" variant="outline" className="mt-2">
                    Consolidate
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Optimization Suggestions</h4>
              <div className="space-y-2">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium">Flatten API Test Structure</div>
                  <div className="text-sm text-muted-foreground">
                    Reduce from 7 to 4 levels, group by functionality
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    💰 15% faster navigation
                  </div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="font-medium">Group Payment Tests</div>
                  <div className="text-sm text-muted-foreground">
                    Consolidate validation tests into logical groups
                  </div>
                  <div className="text-xs text-green-600 mt-1">
                    💰 25% better organization
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-2">
              <Switch 
                checked={autoOptimize}
                onCheckedChange={setAutoOptimize}
                id="auto-optimize"
              />
              <label htmlFor="auto-optimize" className="text-sm">
                Enable auto-optimization
              </label>
            </div>
            <Button>
              Apply All Recommendations
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="structure" className="space-y-4">
        <TabsList className="grid w-fit grid-cols-4">
          <TabsTrigger value="structure">Structure</TabsTrigger>
          <TabsTrigger value="analysis">Analysis</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="structure">
          <Card>
            <CardHeader>
              <CardTitle>Current Folder Structure</CardTitle>
              <CardDescription>
                Detailed analysis of existing folder hierarchy and health metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {folderStructure.map((folder, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="font-mono text-sm bg-muted px-2 py-1 rounded">
                          {folder.path}
                        </div>
                        {getStatusBadge(folder.status)}
                      </div>
                      <Button variant="outline" size="sm">
                        🔧 Optimize
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-3">
                      <div className="text-center">
                        <div className={`text-lg font-bold ${getHealthColor(folder.health)}`}>
                          {folder.health}%
                        </div>
                        <div className="text-xs text-muted-foreground">Health</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{folder.depth}</div>
                        <div className="text-xs text-muted-foreground">Depth</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{folder.files}</div>
                        <div className="text-xs text-muted-foreground">Files</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold">{folder.size}</div>
                        <div className="text-xs text-muted-foreground">Size</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs font-medium">{folder.lastOptimized}</div>
                        <div className="text-xs text-muted-foreground">Last Optimized</div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground mb-1">Health Score:</div>
                        <Progress value={folder.health} className="h-2 w-32" />
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {folder.issues.length > 0 ? (
                          folder.issues.map((issue, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              ⚠️ {issue}
                            </Badge>
                          ))
                        ) : (
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            ✅ No issues
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Depth Analysis</CardTitle>
                <CardDescription>Folder depth distribution and recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Optimal (2-3 levels)</span>
                    <Badge className="bg-green-100 text-green-800">50%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Acceptable (4-5 levels)</span>
                    <Badge className="bg-yellow-100 text-yellow-800">25%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Problematic (6+ levels)</span>
                    <Badge variant="destructive">25%</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Naming Patterns</CardTitle>
                <CardDescription>Analysis of folder naming conventions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Consistent naming</span>
                    <Badge className="bg-green-100 text-green-800">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Descriptive names</span>
                    <Badge className="bg-green-100 text-green-800">Good</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Clear hierarchy</span>
                    <Badge className="bg-yellow-100 text-yellow-800">Needs Work</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>Optimization Preview</CardTitle>
              <CardDescription>
                Preview of recommended structural changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">Current Structure</h4>
                  <div className="space-y-2 text-sm font-mono bg-muted p-4 rounded-lg">
                    <div>/tests/integration/api/</div>
                    <div className="ml-4">/endpoints/</div>
                    <div className="ml-8">/user/</div>
                    <div className="ml-12">/auth/</div>
                    <div className="ml-16">/login/</div>
                    <div className="ml-20">login_test.js</div>
                    <div className="ml-20">validation_test.js</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">Optimized Structure</h4>
                  <div className="space-y-2 text-sm font-mono bg-muted p-4 rounded-lg">
                    <div>/tests/api/</div>
                    <div className="ml-4">/auth/</div>
                    <div className="ml-8">login_test.js</div>
                    <div className="ml-8">validation_test.js</div>
                    <div className="ml-4">/user/</div>
                    <div className="ml-8">profile_test.js</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">Optimization Benefits:</h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Reduced depth from 7 to 3 levels</div>
                  <div>• 40% faster file navigation</div>
                  <div>• Improved logical grouping</div>
                  <div>• Better maintainability</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button>
                  ✅ Apply Changes
                </Button>
                <Button variant="outline">
                  📋 Generate Migration Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Optimization History</CardTitle>
              <CardDescription>
                Recent folder structure optimizations and improvements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "2024-01-15",
                    action: "Optimized authentication folder structure",
                    result: "Health improved from 87% to 95%",
                    impact: "25% faster test discovery"
                  },
                  {
                    date: "2024-01-14",
                    action: "Reorganized user-management tests",
                    result: "Reduced depth from 4 to 2 levels",
                    impact: "30% improvement in navigation"
                  },
                  {
                    date: "2024-01-10",
                    action: "Consolidated payment validation tests",
                    result: "Merged 3 scattered folders into 1",
                    impact: "Improved maintainability"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-muted-foreground">{item.result}</div>
                      <div className="text-xs text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{item.impact}</div>
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
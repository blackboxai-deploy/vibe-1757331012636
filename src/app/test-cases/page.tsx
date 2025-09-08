"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TestCaseTable } from "@/components/test-cases/test-case-table";
import { RedundancyAnalysis } from "@/components/test-cases/redundancy-analysis";
import { CleanupActions } from "@/components/test-cases/cleanup-actions";

export default function TestCasesPage() {
  const [analysisProgress, setAnalysisProgress] = useState(73);
  const [selectedModule, setSelectedModule] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">AI Test Case Optimization</h1>
          <p className="text-muted-foreground mt-1">
            Identify and remove redundant test cases using AI-powered analysis
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            📊 Export Analysis
          </Button>
          <Button>
            🤖 Run AI Analysis
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Test Cases</CardTitle>
            <Badge variant="outline">📋</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              Across 8 modules
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Redundant Cases</CardTitle>
            <Badge variant="destructive">❌</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              12.5% reduction potential
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Similarity Score</CardTitle>
            <Badge className="bg-orange-100 text-orange-800" variant="secondary">⚠️</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">
              Average redundancy level
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time Saved</CardTitle>
            <Badge className="bg-green-100 text-green-800" variant="secondary">⏰</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2h</div>
            <p className="text-xs text-muted-foreground">
              Per week execution time
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Progress */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                🤖 AI Analysis in Progress
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  Running
                </Badge>
              </CardTitle>
              <CardDescription>
                Analyzing test cases for redundancy patterns and optimization opportunities
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              View Logs
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{analysisProgress}% Complete</span>
            </div>
            <Progress value={analysisProgress} className="h-2" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Authentication (Complete)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Payment (Complete)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>User Management (Processing)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                <span>API Tests (Pending)</span>
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
            <TabsTrigger value="redundancy">Redundancy</TabsTrigger>
            <TabsTrigger value="cleanup">Cleanup</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <div className="flex gap-2">
            <Input 
              placeholder="Search test cases..." 
              className="w-64"
            />
            <Select value={selectedModule} onValueChange={setSelectedModule}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by module" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="user">User Management</SelectItem>
                <SelectItem value="api">API Tests</SelectItem>
                <SelectItem value="integration">Integration</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <TabsContent value="overview">
          <TestCaseTable selectedModule={selectedModule} />
        </TabsContent>

        <TabsContent value="redundancy">
          <RedundancyAnalysis />
        </TabsContent>

        <TabsContent value="cleanup">
          <CleanupActions />
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Optimization History</CardTitle>
              <CardDescription>
                Track of previous AI-powered test case optimizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    date: "2024-01-15",
                    action: "Removed 23 duplicate authentication tests",
                    savings: "2.3 hours/week",
                    status: "completed"
                  },
                  {
                    date: "2024-01-10",
                    action: "Merged similar payment validation tests",
                    savings: "1.8 hours/week", 
                    status: "completed"
                  },
                  {
                    date: "2024-01-05",
                    action: "Optimized integration test structure",
                    savings: "3.1 hours/week",
                    status: "completed"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="font-medium">{item.action}</div>
                      <div className="text-sm text-muted-foreground">{item.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{item.savings}</div>
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        {item.status}
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
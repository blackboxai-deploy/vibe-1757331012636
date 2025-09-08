"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function VersionsPage() {
  const [autoSync, setAutoSync] = useState(true);

  const environments = [
    {
      name: "Development",
      version: "v2.1.5-dev",
      branch: "develop",
      testCases: 1247,
      lastSync: "2024-01-15 14:30",
      syncStatus: "synced",
      health: 94
    },
    {
      name: "Staging", 
      version: "v2.1.4",
      branch: "staging",
      testCases: 1201,
      lastSync: "2024-01-15 09:15", 
      syncStatus: "drift",
      health: 89
    },
    {
      name: "Production",
      version: "v2.1.4",
      branch: "main",
      testCases: 1185,
      lastSync: "2024-01-14 16:45",
      syncStatus: "synced", 
      health: 96
    }
  ];

  const conflicts = [
    {
      id: "CONF001",
      type: "test-case",
      description: "Authentication test case modified in both dev and staging",
      file: "/tests/auth/login_test.js",
      severity: "medium",
      autoResolve: true
    },
    {
      id: "CONF002", 
      type: "dataset",
      description: "User profile test data differs between environments",
      file: "/data/user_profiles.json",
      severity: "low",
      autoResolve: false
    },
    {
      id: "CONF003",
      type: "config",
      description: "Test configuration mismatch in API endpoints",
      file: "/config/test_config.yml",
      severity: "high",
      autoResolve: false
    }
  ];

  const getSyncStatusBadge = (status: string) => {
    switch (status) {
      case "synced":
        return <Badge className="bg-green-100 text-green-800">Synced</Badge>;
      case "drift":
        return <Badge className="bg-orange-100 text-orange-800">Drift</Badge>;
      case "conflict":
        return <Badge variant="destructive">Conflict</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "high":
        return <Badge variant="destructive">High</Badge>;
      case "medium":
        return <Badge className="bg-orange-100 text-orange-800">Medium</Badge>;
      case "low":
        return <Badge className="bg-blue-100 text-blue-800">Low</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Version Control & Track Management</h1>
          <p className="text-muted-foreground mt-1">
            Controlled synchronization between development and production environments
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            📊 Sync Report
          </Button>
          <Button>
            🔄 Force Sync
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sync Accuracy</CardTitle>
            <Badge className="bg-green-100 text-green-800">🎯</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">99.2%</div>
            <p className="text-xs text-muted-foreground">
              Dev-Prod alignment
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Conflicts</CardTitle>
            <Badge className="bg-orange-100 text-orange-800">⚠️</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Requiring attention
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Sync</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">🔄</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2 min</div>
            <p className="text-xs text-muted-foreground">
              Ago (automated)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Auto Resolution</CardTitle>
            <Badge className="bg-purple-100 text-purple-800">🤖</Badge>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">67%</div>
            <p className="text-xs text-muted-foreground">
              Conflicts resolved by AI
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Environment Status */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                🌍 Environment Status
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  All Monitored
                </Badge>
              </CardTitle>
              <CardDescription>
                Real-time synchronization status across all environments
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Switch 
                checked={autoSync}
                onCheckedChange={setAutoSync}
                id="auto-sync"
              />
              <label htmlFor="auto-sync" className="text-sm">
                Auto-sync enabled
              </label>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {environments.map((env, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-lg">{env.name}</div>
                    {getSyncStatusBadge(env.syncStatus)}
                    <Badge variant="outline" className="font-mono text-xs">
                      {env.version}
                    </Badge>
                  </div>
                  <Button variant="outline" size="sm">
                    🔄 Sync Now
                  </Button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-3">
                  <div>
                    <div className="text-sm text-muted-foreground">Branch</div>
                    <div className="font-medium">{env.branch}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Test Cases</div>
                    <div className="font-medium">{env.testCases.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Last Sync</div>
                    <div className="font-medium text-xs">{env.lastSync}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Health</div>
                    <div className="font-medium">{env.health}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Status</div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${env.syncStatus === 'synced' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                      <span className="text-sm capitalize">{env.syncStatus}</span>
                    </div>
                  </div>
                </div>

                <Progress value={env.health} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs defaultValue="conflicts" className="space-y-4">
        <TabsList className="grid w-fit grid-cols-4">
          <TabsTrigger value="conflicts">Conflicts</TabsTrigger>
          <TabsTrigger value="sync-log">Sync Log</TabsTrigger>
          <TabsTrigger value="deployment">Deployment</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="conflicts">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⚠️ Active Conflicts
                <Badge className="bg-orange-100 text-orange-800">3 Issues</Badge>
              </CardTitle>
              <CardDescription>
                AI-assisted conflict detection and resolution recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {conflicts.map((conflict) => (
                  <div key={conflict.id} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline" className="font-mono text-xs">
                          {conflict.id}
                        </Badge>
                        <div className="font-semibold">{conflict.type.replace('-', ' ').toUpperCase()}</div>
                        {getSeverityBadge(conflict.severity)}
                      </div>
                      <div className="flex gap-2">
                        {conflict.autoResolve && (
                          <Button size="sm">
                            🤖 Auto-Resolve
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          🔍 Review
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm">{conflict.description}</p>
                      <div className="font-mono text-xs bg-muted px-2 py-1 rounded">
                        {conflict.file}
                      </div>
                    </div>

                    {conflict.autoResolve && (
                      <div className="mt-3 p-3 bg-green-50 rounded-lg">
                        <div className="text-sm text-green-800">
                          🤖 AI Recommendation: This conflict can be automatically resolved using smart merge strategy
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="text-sm text-muted-foreground">
                    3 conflicts require attention
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      📋 Generate Report
                    </Button>
                    <Button size="sm">
                      🤖 Resolve All Auto
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sync-log">
          <Card>
            <CardHeader>
              <CardTitle>Synchronization Log</CardTitle>
              <CardDescription>
                Recent synchronization activities and their outcomes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    timestamp: "2024-01-15 14:30:15",
                    action: "Auto-sync: Development → Staging",
                    result: "Success",
                    details: "46 test cases synchronized",
                    user: "AI System"
                  },
                  {
                    timestamp: "2024-01-15 09:15:22", 
                    action: "Manual sync: Staging → Production",
                    result: "Success with conflicts",
                    details: "2 conflicts auto-resolved",
                    user: "john.doe@company.com"
                  },
                  {
                    timestamp: "2024-01-14 16:45:33",
                    action: "Scheduled sync: Production update",
                    result: "Success",
                    details: "Version v2.1.4 deployed",
                    user: "CI/CD Pipeline"
                  },
                  {
                    timestamp: "2024-01-14 12:20:11",
                    action: "Conflict resolution: Auth module",
                    result: "Manual resolution",
                    details: "Test case merge completed",
                    user: "jane.smith@company.com"
                  }
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">{log.action}</div>
                      <div className="text-sm text-muted-foreground">{log.details}</div>
                      <div className="text-xs text-muted-foreground">{log.timestamp} • {log.user}</div>
                    </div>
                    <Badge 
                      className={log.result.includes('Success') ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'}
                      variant="secondary"
                    >
                      {log.result}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deployment">
          <Card>
            <CardHeader>
              <CardTitle>Deployment Pipeline</CardTitle>
              <CardDescription>
                Controlled deployment flow with automated testing validation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Pipeline Visualization */}
                <div className="flex items-center gap-4 justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      🛠️
                    </div>
                    <div className="text-sm font-medium">Development</div>
                    <Badge className="bg-blue-100 text-blue-800 text-xs">v2.1.5-dev</Badge>
                  </div>
                  
                  <div className="flex-1 h-px bg-border"></div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-2">
                      🧪
                    </div>
                    <div className="text-sm font-medium">Staging</div>
                    <Badge className="bg-orange-100 text-orange-800 text-xs">v2.1.4</Badge>
                  </div>
                  
                  <div className="flex-1 h-px bg-border"></div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      🚀
                    </div>
                    <div className="text-sm font-medium">Production</div>
                    <Badge className="bg-green-100 text-green-800 text-xs">v2.1.4</Badge>
                  </div>
                </div>

                {/* Deployment Actions */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Ready for Staging</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Development v2.1.5-dev has 46 new test cases ready for promotion
                    </p>
                    <Button size="sm" className="w-full">
                      🧪 Deploy to Staging
                    </Button>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Production Deployment</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Staging v2.1.4 validated and ready for production release
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      🚀 Deploy to Production
                    </Button>
                  </div>
                </div>

                {/* Recent Deployments */}
                <div>
                  <h4 className="font-semibold mb-3">Recent Deployments</h4>
                  <div className="space-y-2">
                    {[
                      { version: "v2.1.4", env: "Production", date: "2024-01-14", status: "success" },
                      { version: "v2.1.4", env: "Staging", date: "2024-01-13", status: "success" },
                      { version: "v2.1.3", env: "Production", date: "2024-01-10", status: "success" }
                    ].map((deployment, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono text-xs">
                            {deployment.version}
                          </Badge>
                          <span className="text-sm">{deployment.env}</span>
                          <span className="text-xs text-muted-foreground">{deployment.date}</span>
                        </div>
                        <Badge className="bg-green-100 text-green-800">
                          {deployment.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Sync & Version Settings</CardTitle>
              <CardDescription>
                Configure automated synchronization and version control policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Automation Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Auto-sync development changes</div>
                        <div className="text-sm text-muted-foreground">
                          Automatically sync approved changes from dev to staging
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">AI conflict resolution</div>
                        <div className="text-sm text-muted-foreground">
                          Allow AI to automatically resolve low-risk conflicts
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Production deployment approval</div>
                        <div className="text-sm text-muted-foreground">
                          Require manual approval for production deployments
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Notification Settings</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Sync notifications</div>
                        <div className="text-sm text-muted-foreground">
                          Get notified about synchronization events
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Conflict alerts</div>
                        <div className="text-sm text-muted-foreground">
                          Immediate alerts for merge conflicts
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Deployment status</div>
                        <div className="text-sm text-muted-foreground">
                          Updates on deployment pipeline progress
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex gap-2">
                    <Button>
                      💾 Save Settings
                    </Button>
                    <Button variant="outline">
                      🔄 Reset to Defaults
                    </Button>
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
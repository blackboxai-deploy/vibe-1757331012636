import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export function CleanupActions() {
  const cleanupTasks = [
    {
      id: 1,
      title: "Remove Duplicate Login Tests",
      description: "Merge 3 similar authentication tests into one comprehensive test",
      impact: "High",
      timeSaving: "45 min/week",
      testsAffected: 3,
      status: "ready",
      autoApprove: true
    },
    {
      id: 2,
      title: "Consolidate Payment Validations",
      description: "Combine payment form validation tests with shared setup",
      impact: "Medium", 
      timeSaving: "32 min/week",
      testsAffected: 3,
      status: "ready",
      autoApprove: false
    },
    {
      id: 3,
      title: "Optimize User Profile Tests",
      description: "Merge profile update and validation tests",
      impact: "Medium",
      timeSaving: "28 min/week", 
      testsAffected: 2,
      status: "review",
      autoApprove: false
    },
    {
      id: 4,
      title: "Clean API Integration Tests",
      description: "Remove redundant API endpoint tests",
      impact: "Low",
      timeSaving: "15 min/week",
      testsAffected: 4,
      status: "pending",
      autoApprove: false
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-orange-100 text-orange-800";
      case "Low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ready":
        return <Badge className="bg-green-100 text-green-800">Ready</Badge>;
      case "review":
        return <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>;
      case "pending":
        return <Badge variant="outline">Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              🎯 Actions Ready
              <Badge className="bg-green-100 text-green-800">2</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">77 min</div>
            <p className="text-sm text-muted-foreground">
              Weekly time savings potential
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              👀 Needs Review
              <Badge className="bg-yellow-100 text-yellow-800">1</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28 min</div>
            <p className="text-sm text-muted-foreground">
              Additional potential savings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              ⏳ In Progress
              <Badge variant="outline">0</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0%</div>
            <p className="text-sm text-muted-foreground">
              Current cleanup progress
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Cleanup Actions List */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Automated Cleanup Actions</CardTitle>
              <CardDescription>
                AI-recommended optimizations ready for execution
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                📋 Preview Changes
              </Button>
              <Button>
                🚀 Execute All Ready
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {cleanupTasks.map((task) => (
              <div key={task.id} className="border rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <Checkbox className="mt-1" />
                  
                  <div className="flex-1 space-y-3">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{task.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {task.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusBadge(task.status)}
                        <Badge className={getImpactColor(task.impact)} variant="secondary">
                          {task.impact} Impact
                        </Badge>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Saves: {task.timeSaving}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Tests: {task.testsAffected}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Impact: {task.impact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch 
                          checked={task.autoApprove}
                          id={`auto-${task.id}`}
                        />
                        <label htmlFor={`auto-${task.id}`} className="text-xs">
                          Auto-approve
                        </label>
                      </div>
                    </div>

                    {/* Progress for ready tasks */}
                    {task.status === "ready" && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span>Ready to execute</span>
                          <span>100%</span>
                        </div>
                        <Progress value={100} className="h-1" />
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      {task.status === "ready" && (
                        <>
                          <Button size="sm">
                            ▶️ Execute
                          </Button>
                          <Button variant="outline" size="sm">
                            👁️ Preview
                          </Button>
                        </>
                      )}
                      {task.status === "review" && (
                        <>
                          <Button variant="outline" size="sm">
                            📋 Review
                          </Button>
                          <Button variant="outline" size="sm">
                            ✅ Approve
                          </Button>
                        </>
                      )}
                      {task.status === "pending" && (
                        <Button variant="outline" size="sm" disabled>
                          ⏳ Analyzing...
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bulk Actions */}
          <div className="flex items-center justify-between pt-4 border-t mt-6">
            <div className="text-sm text-muted-foreground">
              4 optimization actions available
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                📊 Generate Report
              </Button>
              <Button variant="outline" size="sm">
                📤 Export Plan
              </Button>
              <Button size="sm">
                🚀 Execute Selected
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Safety & Rollback */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🛡️ Safety & Rollback Options
          </CardTitle>
          <CardDescription>
            Backup and recovery options for cleanup operations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h5 className="font-semibold text-sm">Backup Settings</h5>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-backup before cleanup</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Version control integration</span>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Rollback on failure</span>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-sm">Recent Backups</h5>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• Backup_2024_01_15_14_30 (Pre-auth-cleanup)</div>
                <div>• Backup_2024_01_12_09_15 (Pre-payment-merge)</div>
                <div>• Backup_2024_01_10_16_45 (Pre-structure-opt)</div>
              </div>
              <Button variant="outline" size="sm" className="w-full">
                🗂️ Manage Backups
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
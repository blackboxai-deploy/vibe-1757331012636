import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "optimization",
      title: "AI Test Case Cleanup",
      description: "Removed 12 duplicate test cases from payment module",
      timestamp: "2 minutes ago",
      status: "completed"
    },
    {
      id: 2,
      type: "sync",
      title: "Version Synchronization",
      description: "Dev environment synced with production (v2.1.4)",
      timestamp: "8 minutes ago",
      status: "completed"
    },
    {
      id: 3,
      type: "dataset",
      title: "Dataset Optimization",
      description: "User profile data patterns analyzed and optimized",
      timestamp: "15 minutes ago",
      status: "completed"
    },
    {
      id: 4,
      type: "structure",
      title: "Folder Restructuring",
      description: "API test folders reorganized for better hierarchy",
      timestamp: "23 minutes ago",
      status: "in-progress"
    },
    {
      id: 5,
      type: "analysis",
      title: "Redundancy Analysis",
      description: "Scanning integration tests for potential duplicates",
      timestamp: "35 minutes ago",
      status: "in-progress"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "optimization": return "🎯";
      case "sync": return "🔄";
      case "dataset": return "📊";
      case "structure": return "🗂️";
      case "analysis": return "🔍";
      default: return "📋";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800" variant="secondary">Completed</Badge>;
      case "in-progress":
        return <Badge className="bg-blue-100 text-blue-800" variant="secondary">In Progress</Badge>;
      case "failed":
        return <Badge variant="destructive">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          📈 Recent Activity
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Live
          </Badge>
        </CardTitle>
        <CardDescription>
          Latest AI-powered optimizations and system activities
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div className="text-lg mt-0.5">
                {getTypeIcon(activity.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold">{activity.title}</h4>
                  {getStatusBadge(activity.status)}
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {activity.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">
                    {activity.timestamp}
                  </span>
                  {activity.status === "in-progress" && (
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-75"></div>
                      <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="pt-4 border-t">
          <button className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            View activity log →
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function AIInsightPanel() {
  const insights = [
    {
      type: "optimization",
      title: "Duplicate Test Cases Detected",
      description: "Found 23 test cases with 89% similarity in the authentication module",
      action: "Review & Merge",
      priority: "high"
    },
    {
      type: "efficiency",
      title: "Dataset Pattern Identified",
      description: "User data patterns suggest consolidation opportunity (Save 1.2GB)",
      action: "Optimize Now",
      priority: "medium"
    },
    {
      type: "structure",
      title: "Folder Hierarchy Improvement",
      description: "API tests folder structure can be optimized for 15% faster navigation",
      action: "Restructure",
      priority: "low"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "optimization": return "🎯";
      case "efficiency": return "⚡";
      case "structure": return "🏗️";
      default: return "💡";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          🤖 AI Insights
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            3 New
          </Badge>
        </CardTitle>
        <CardDescription>
          AI-powered recommendations for your test automation ecosystem
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {insights.map((insight, index) => (
          <div key={index}>
            <div className="flex items-start gap-3">
              <div className="text-lg mt-0.5">
                {getTypeIcon(insight.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold">{insight.title}</h4>
                  <Badge className={getPriorityColor(insight.priority)} variant="secondary">
                    {insight.priority}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-2">
                  {insight.description}
                </p>
                <Button size="sm" variant="outline" className="text-xs">
                  {insight.action}
                </Button>
              </div>
            </div>
            {index < insights.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
        
        <div className="pt-2">
          <Button variant="link" size="sm" className="text-xs text-muted-foreground p-0">
            View all insights →
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
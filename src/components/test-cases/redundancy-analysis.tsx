import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export function RedundancyAnalysis() {
  const redundancyGroups = [
    {
      id: 1,
      title: "Authentication Login Tests",
      similarity: 92,
      testCases: [
        { id: "TC001", name: "User Login Validation" },
        { id: "TC002", name: "Login Form Validation" },
        { id: "TC007", name: "Login Credential Check" }
      ],
      recommendation: "Merge into single comprehensive login test",
      timeSaved: "45 minutes/week"
    },
    {
      id: 2,
      title: "Payment Validation Suite",
      similarity: 78,
      testCases: [
        { id: "TC004", name: "Credit Card Validation" },
        { id: "TC008", name: "Payment Form Validation" },
        { id: "TC012", name: "Card Number Validation" }
      ],
      recommendation: "Consolidate validation logic",
      timeSaved: "32 minutes/week"
    },
    {
      id: 3,
      title: "User Profile Tests",
      similarity: 67,
      testCases: [
        { id: "TC006", name: "Profile Data Validation" },
        { id: "TC013", name: "User Info Update Test" }
      ],
      recommendation: "Combine with shared setup",
      timeSaved: "28 minutes/week"
    }
  ];

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 80) return "text-red-600 bg-red-100";
    if (similarity >= 60) return "text-orange-600 bg-orange-100";
    return "text-yellow-600 bg-yellow-100";
  };

  const getSimilarityLabel = (similarity: number) => {
    if (similarity >= 80) return "Critical";
    if (similarity >= 60) return "High";
    return "Medium";
  };

  return (
    <div className="space-y-6">
      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🎯 Redundancy Analysis Summary
            <Badge variant="outline" className="bg-red-50 text-red-700">
              3 Groups Found
            </Badge>
          </CardTitle>
          <CardDescription>
            AI-identified groups of similar test cases with optimization recommendations
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-red-600">156</div>
              <div className="text-sm text-muted-foreground">Redundant Tests</div>
              <div className="text-xs text-red-600">12.5% of total</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">4.2h</div>
              <div className="text-sm text-muted-foreground">Time Savings</div>
              <div className="text-xs text-green-600">Per week potential</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">79%</div>
              <div className="text-sm text-muted-foreground">Avg Similarity</div>
              <div className="text-xs text-blue-600">Confidence score</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Redundancy Groups */}
      <div className="space-y-4">
        {redundancyGroups.map((group) => (
          <Card key={group.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{group.title}</CardTitle>
                  <CardDescription>
                    {group.testCases.length} similar test cases identified
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={getSimilarityColor(group.similarity)}>
                    {getSimilarityLabel(group.similarity)} Risk
                  </Badge>
                  <Badge variant="outline">{group.similarity}% Similar</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Similarity Score */}
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Similarity Analysis</span>
                    <span>{group.similarity}%</span>
                  </div>
                  <Progress value={group.similarity} className="h-2" />
                </div>

                {/* Test Cases */}
                <div>
                  <h5 className="text-sm font-semibold mb-2">Affected Test Cases:</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {group.testCases.map((testCase) => (
                      <div key={testCase.id} className="flex items-center gap-2 p-2 bg-muted rounded">
                        <Badge variant="outline" className="text-xs">
                          {testCase.id}
                        </Badge>
                        <span className="text-sm truncate">{testCase.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Recommendation */}
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="text-sm font-semibold mb-1">AI Recommendation:</h5>
                    <p className="text-sm text-muted-foreground mb-2">
                      {group.recommendation}
                    </p>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800" variant="secondary">
                        💰 {group.timeSaved}
                      </Badge>
                      <Badge variant="outline">
                        📊 {group.testCases.length} tests affected
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      🔍 Analyze
                    </Button>
                    <Button size="sm">
                      🔗 Merge Tests
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Actions</CardTitle>
          <CardDescription>
            Recommended next steps for test case cleanup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                  🎯
                </div>
                <div>
                  <div className="font-medium">Merge Critical Redundancy Groups</div>
                  <div className="text-sm text-muted-foreground">
                    Address highest similarity matches first
                  </div>
                </div>
              </div>
              <Button size="sm">
                Start Merge
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  📊
                </div>
                <div>
                  <div className="font-medium">Review Medium Risk Cases</div>
                  <div className="text-sm text-muted-foreground">
                    Manual review recommended for 60-80% similarity
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Review
              </Button>
            </div>

            <div className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  📈
                </div>
                <div>
                  <div className="font-medium">Generate Optimization Report</div>
                  <div className="text-sm text-muted-foreground">
                    Document improvements and ROI metrics
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Generate
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
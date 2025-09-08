import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface TestCaseTableProps {
  selectedModule: string;
}

export function TestCaseTable({ selectedModule }: TestCaseTableProps) {
  const testCases = [
    {
      id: "TC001",
      name: "User Login Validation",
      module: "Authentication",
      similarity: 92,
      lastRun: "2024-01-15",
      status: "active",
      redundant: true
    },
    {
      id: "TC002", 
      name: "Login Form Validation",
      module: "Authentication",
      similarity: 89,
      lastRun: "2024-01-14",
      status: "active",
      redundant: true
    },
    {
      id: "TC003",
      name: "Payment Gateway Integration",
      module: "Payment",
      similarity: 15,
      lastRun: "2024-01-15",
      status: "active",
      redundant: false
    },
    {
      id: "TC004",
      name: "Credit Card Validation",
      module: "Payment",
      similarity: 78,
      lastRun: "2024-01-13",
      status: "active",
      redundant: true
    },
    {
      id: "TC005",
      name: "User Profile Update",
      module: "User Management",
      similarity: 23,
      lastRun: "2024-01-12",
      status: "active",
      redundant: false
    },
    {
      id: "TC006",
      name: "Profile Data Validation",
      module: "User Management", 
      similarity: 67,
      lastRun: "2024-01-11",
      status: "active",
      redundant: true
    }
  ];

  const filteredCases = selectedModule === "all" 
    ? testCases 
    : testCases.filter(tc => tc.module.toLowerCase().includes(selectedModule));

  const getSimilarityBadge = (similarity: number) => {
    if (similarity >= 80) {
      return <Badge variant="destructive">High Risk</Badge>;
    } else if (similarity >= 50) {
      return <Badge className="bg-orange-100 text-orange-800" variant="secondary">Medium</Badge>;
    } else {
      return <Badge className="bg-green-100 text-green-800" variant="secondary">Low</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Test Case Analysis</CardTitle>
        <CardDescription>
          AI-analyzed test cases with similarity scores and redundancy detection
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-muted-foreground border-b pb-2">
            <div className="col-span-1">
              <Checkbox />
            </div>
            <div className="col-span-2">Test ID</div>
            <div className="col-span-3">Name</div>
            <div className="col-span-2">Module</div>
            <div className="col-span-2">Similarity</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Table Rows */}
          {filteredCases.map((testCase) => (
            <div key={testCase.id} className="grid grid-cols-12 gap-4 text-sm py-3 border-b last:border-0">
              <div className="col-span-1">
                <Checkbox />
              </div>
              <div className="col-span-2 font-mono text-xs">
                {testCase.id}
              </div>
              <div className="col-span-3">
                <div className="font-medium">{testCase.name}</div>
                <div className="text-xs text-muted-foreground">
                  Last run: {testCase.lastRun}
                </div>
              </div>
              <div className="col-span-2">
                <Badge variant="outline">{testCase.module}</Badge>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{testCase.similarity}%</span>
                  {getSimilarityBadge(testCase.similarity)}
                </div>
              </div>
              <div className="col-span-1">
                <Badge 
                  variant={testCase.redundant ? "destructive" : "default"}
                  className={testCase.redundant ? "" : "bg-green-100 text-green-800"}
                >
                  {testCase.redundant ? "Redundant" : "Unique"}
                </Badge>
              </div>
              <div className="col-span-1">
                <Button variant="ghost" size="sm">
                  View
                </Button>
              </div>
            </div>
          ))}

          {filteredCases.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              No test cases found for the selected module.
            </div>
          )}

          {/* Bulk Actions */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Showing {filteredCases.length} of {testCases.length} test cases
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                🔗 Merge Selected
              </Button>
              <Button variant="outline" size="sm">
                🗑️ Remove Redundant
              </Button>
              <Button variant="outline" size="sm">
                📤 Export Selection
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
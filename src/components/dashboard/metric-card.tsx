import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  description: string;
}

export function MetricCard({ title, value, change, changeType, description }: MetricCardProps) {
  const isPositive = changeType === "positive";
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Badge 
          variant={isPositive ? "default" : "destructive"}
          className={cn(
            "text-xs",
            isPositive && "bg-green-100 text-green-800 hover:bg-green-100"
          )}
        >
          {change}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
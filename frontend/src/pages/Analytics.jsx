import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ActivityChart from "@/components/dashboard/ActivityChart";
import { Target, TrendingUp, Calendar, Plus, CheckCircle, Circle, ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const goals = [
  {
    id: 1,
    title: "Reach 1M Monthly Streams",
    target: 1000000,
    current: 847500,
    unit: "streams",
    deadline: "2024-06-30",
    category: "Streaming",
    status: "on-track",
  },
  {
    id: 2,
    title: "Release 4 Singles",
    target: 4,
    current: 2,
    unit: "singles",
    deadline: "2024-12-31",
    category: "Music",
    status: "on-track",
  },
  {
    id: 3,
    title: "Grow Follower Base to 500K",
    target: 500000,
    current: 387000,
    unit: "followers",
    deadline: "2024-12-31",
    category: "Growth",
    status: "behind",
  },
  {
    id: 4,
    title: "Generate $50K in Merch Sales",
    target: 50000,
    current: 42500,
    unit: "USD",
    deadline: "2024-12-31",
    category: "Revenue",
    status: "ahead",
  },
];

const projections = [
  { month: "Mar", streams: 890000, revenue: 8500 },
  { month: "Apr", streams: 950000, revenue: 9200 },
  { month: "May", streams: 1020000, revenue: 10100 },
  { month: "Jun", streams: 1100000, revenue: 11000 },
];

const getStatusColor = (status) => {
  switch (status) {
    case "ahead":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "on-track":
      return "bg-primary/20 text-primary border-primary/30";
    case "behind":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case "ahead":
      return <ArrowUp className="w-3 h-3" />;
    case "behind":
      return <ArrowDown className="w-3 h-3" />;
    default:
      return <TrendingUp className="w-3 h-3" />;
  }
};

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("yearly");

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
    if (num >= 1000) return (num / 1000).toFixed(0) + "K";
    return num.toString();
  };

  const calculateProgress = (current, target) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Analytics & Goals</h1>
            <p className="text-muted-foreground mt-1">Track your performance and set targets</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex rounded-xl bg-secondary p-1">
              <button
                onClick={() => setActiveTab("monthly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "monthly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setActiveTab("yearly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === "yearly" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        {/* Performance Chart */}
        <ActivityChart />

        {/* Goals Section */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {activeTab === "yearly" ? "2024" : "March"} Goals
                </h2>
                <p className="text-sm text-muted-foreground">Track progress towards your targets</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:glow-primary transition-all">
              <Plus className="w-4 h-4" />
              Add Goal
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {goals.map((goal) => {
              const progress = calculateProgress(goal.current, goal.target);
              return (
                <div
                  key={goal.id}
                  className="p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/30"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {progress >= 100 ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-muted-foreground" />
                      )}
                      <h3 className="font-semibold text-foreground">{goal.title}</h3>
                    </div>
                    <Badge variant="outline" className={getStatusColor(goal.status)}>
                      <span className="flex items-center gap-1">
                        {getStatusIcon(goal.status)}
                        {goal.status.replace("-", " ")}
                      </span>
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">{goal.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Due: {new Date(goal.deadline).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">
                        {formatNumber(goal.current)} / {formatNumber(goal.target)} {goal.unit}
                      </span>
                      <span className="text-primary font-medium">{progress}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-secondary overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          progress >= 100
                            ? "bg-green-500"
                            : "bg-gradient-to-r from-primary to-accent"
                        }`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projections Section */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/20">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Projections</h2>
              <p className="text-sm text-muted-foreground">Estimated growth for the coming months</p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {projections.map((proj, index) => (
              <div
                key={proj.month}
                className="p-5 rounded-xl border border-border/50 bg-card/30 text-center animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-sm text-muted-foreground mb-2">{proj.month} 2024</p>
                <p className="text-2xl font-bold text-foreground mb-1">
                  {formatNumber(proj.streams)}
                </p>
                <p className="text-xs text-muted-foreground mb-3">projected streams</p>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-lg font-semibold text-primary">
                    ${proj.revenue.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">est. revenue</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;

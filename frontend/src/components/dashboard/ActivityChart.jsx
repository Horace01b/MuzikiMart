import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", plays: 4000, revenue: 2400 },
  { name: "Feb", plays: 3000, revenue: 1398 },
  { name: "Mar", plays: 6000, revenue: 4800 },
  { name: "Apr", plays: 8780, revenue: 3908 },
  { name: "May", plays: 5890, revenue: 4800 },
  { name: "Jun", plays: 9390, revenue: 5800 },
  { name: "Jul", plays: 12490, revenue: 7300 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-3 border border-border/50">
        <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
        <p className="text-xs text-primary">
          Plays: {payload[0].value.toLocaleString()}
        </p>
        <p className="text-xs text-accent">
          Revenue: ${payload[1].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const ActivityChart = () => {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Performance Overview</h3>
          <p className="text-sm text-muted-foreground">Plays & Revenue this year</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs text-muted-foreground">Plays</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">Revenue</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorPlays" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(190, 95%, 50%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(190, 95%, 50%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(280, 85%, 65%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(280, 85%, 65%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false}
            tick={{ fill: "hsl(215, 20%, 55%)", fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="plays"
            stroke="hsl(190, 95%, 50%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorPlays)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="hsl(280, 85%, 65%)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;

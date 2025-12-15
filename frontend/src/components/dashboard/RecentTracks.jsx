import { Play, MoreVertical, TrendingUp } from "lucide-react";

const tracks = [
  { id: 1, title: "Midnight Dreams", plays: "124.5K", trend: "+12%", duration: "3:45", cover: "🎵" },
  { id: 2, title: "Summer Vibes", plays: "98.2K", trend: "+8%", duration: "4:12", cover: "🎶" },
  { id: 3, title: "City Lights", plays: "87.1K", trend: "+5%", duration: "3:28", cover: "🎸" },
  { id: 4, title: "Ocean Waves", plays: "76.4K", trend: "+3%", duration: "5:01", cover: "🎹" },
];

const RecentTracks = () => {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "300ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Top Tracks</h3>
          <p className="text-sm text-muted-foreground">Your most played songs</p>
        </div>
        <button className="text-sm text-primary hover:underline">View All</button>
      </div>
      
      <div className="space-y-3">
        {tracks.map((track, index) => (
          <div 
            key={track.id}
            className="group flex items-center gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-all duration-200"
          >
            <span className="w-6 text-center text-sm text-muted-foreground font-medium">
              {index + 1}
            </span>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
              {track.cover}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{track.title}</p>
              <p className="text-sm text-muted-foreground">{track.duration}</p>
            </div>
            <div className="text-right">
              <p className="font-medium text-foreground">{track.plays}</p>
              <p className="text-xs text-emerald-400 flex items-center justify-end gap-1">
                <TrendingUp className="w-3 h-3" />
                {track.trend}
              </p>
            </div>
            <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all">
              <Play className="w-4 h-4 text-primary" />
            </button>
            <button className="p-2 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all">
              <MoreVertical className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTracks;

import { Check, X, MessageSquare } from "lucide-react";

const requests = [
  {
    id: 1,
    artist: "Luna Rose",
    genre: "Pop/R&B",
    message: "Would love to collaborate on your next single!",
    followers: "125K",
    avatar: "🎤"
  },
  {
    id: 2,
    artist: "DJ Nexus",
    genre: "Electronic",
    message: "Let's create a remix together!",
    followers: "89K",
    avatar: "🎧"
  },
  {
    id: 3,
    artist: "The Velvet Keys",
    genre: "Indie Rock",
    message: "Interested in a crossover track?",
    followers: "56K",
    avatar: "🎹"
  },
];

const CollabRequests = () => {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "600ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Collaboration Requests</h3>
          <p className="text-sm text-muted-foreground">{requests.length} pending requests</p>
        </div>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div 
            key={request.id}
            className="p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl">
                {request.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-foreground">{request.artist}</h4>
                  <span className="px-2 py-0.5 rounded-full bg-secondary text-xs text-muted-foreground">
                    {request.genre}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{request.followers} followers</p>
                <p className="text-sm text-foreground/80 mt-2 italic">"{request.message}"</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:glow-primary transition-all">
                <Check className="w-4 h-4" />
                Accept
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-all">
                <MessageSquare className="w-4 h-4" />
                Message
              </button>
              <button className="p-2 rounded-lg hover:bg-destructive/20 text-destructive transition-all">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollabRequests;

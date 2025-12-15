import { Users, Clock, CheckCircle, XCircle } from "lucide-react";

const CollabRequests = () => {
  const requests = [
    {
      id: 1,
      artist: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      track: "Summer Vibes",
      type: "Feature Request",
      time: "2 hours ago",
      status: "pending"
    },
    {
      id: 2,
      artist: "Mike Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      track: "Electric Dreams",
      type: "Remix Request",
      time: "1 day ago",
      status: "pending"
    },
    {
      id: 3,
      artist: "Luna Park",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      track: "Neon Nights",
      type: "Collab Invite",
      time: "3 days ago",
      status: "accepted"
    }
  ];

  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-accent/20">
            <Users className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Collaboration Requests</h3>
        </div>
        <span className="text-sm text-muted-foreground">{requests.filter(r => r.status === 'pending').length} pending</span>
      </div>

      <div className="space-y-4">
        {requests.map((request) => (
          <div key={request.id} className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors">
            <img 
              src={request.avatar} 
              alt={request.artist}
              className="w-10 h-10 rounded-full object-cover"
            />
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-medium text-foreground truncate">{request.artist}</h4>
                {request.status === 'accepted' && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
              <p className="text-sm text-muted-foreground truncate">{request.track}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                  {request.type}
                </span>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {request.time}
                </div>
              </div>
            </div>

            {request.status === 'pending' && (
              <div className="flex gap-2">
                <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 transition-colors">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </button>
                <button className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 transition-colors">
                  <XCircle className="w-4 h-4 text-red-500" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-2.5 rounded-lg border border-border/50 text-muted-foreground hover:bg-secondary/50 transition-colors text-sm">
        View All Requests
      </button>
    </div>
  );
};

export default CollabRequests;
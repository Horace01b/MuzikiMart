import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Users, Music, Disc, Handshake, ExternalLink, Calendar, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const collaborations = [
  {
    id: 1,
    partner: "Luna Rose",
    type: "Single",
    title: "Midnight Dreams",
    status: "In Progress",
    startDate: "2024-01-15",
    releaseDate: "2024-02-28",
    genre: "Pop/R&B",
    avatar: "🎤",
    progress: 75,
  },
  {
    id: 2,
    partner: "DJ Nexus",
    type: "Remix",
    title: "Electric Pulse (Remix)",
    status: "Released",
    startDate: "2023-11-01",
    releaseDate: "2024-01-10",
    genre: "Electronic",
    avatar: "🎧",
    progress: 100,
  },
  {
    id: 3,
    partner: "The Velvet Keys",
    type: "Album Feature",
    title: "Crossroads",
    status: "Planning",
    startDate: "2024-02-01",
    releaseDate: "2024-06-15",
    genre: "Indie Rock",
    avatar: "🎹",
    progress: 20,
  },
];

const promotions = [
  {
    id: 1,
    brand: "SoundWave Headphones",
    type: "Brand Partnership",
    campaign: "Summer Beats Campaign",
    status: "Active",
    startDate: "2024-01-01",
    endDate: "2024-03-31",
    value: "$15,000",
    logo: "🎧",
  },
  {
    id: 2,
    brand: "Urban Streetwear Co.",
    type: "Merchandise Collab",
    campaign: "Limited Edition Merch Line",
    status: "Active",
    startDate: "2024-02-01",
    endDate: "2024-04-30",
    value: "$8,500",
    logo: "👕",
  },
  {
    id: 3,
    brand: "Festival Live",
    type: "Event Sponsorship",
    campaign: "Headline Performance Deal",
    status: "Upcoming",
    startDate: "2024-05-01",
    endDate: "2024-05-15",
    value: "$25,000",
    logo: "🎪",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
    case "Active":
      return "bg-primary/20 text-primary border-primary/30";
    case "Released":
    case "Completed":
      return "bg-green-500/20 text-green-400 border-green-500/30";
    case "Planning":
    case "Upcoming":
      return "bg-amber-500/20 text-amber-400 border-amber-500/30";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Collaborations = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Collaborations & Promotions</h1>
            <p className="text-muted-foreground mt-1">Manage your partnerships with artists and brands</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:glow-primary transition-all">
            <Handshake className="w-5 h-5" />
            New Collaboration
          </button>
        </div>

        {/* Artist Collaborations */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/20">
              <Music className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Artist Collaborations</h2>
              <p className="text-sm text-muted-foreground">Music projects with other artists</p>
            </div>
          </div>

          <div className="grid gap-4">
            {collaborations.map((collab) => (
              <div
                key={collab.id}
                className="p-5 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 bg-card/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl flex-shrink-0">
                    {collab.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="font-semibold text-foreground text-lg">{collab.title}</h3>
                        <Badge variant="outline" className={getStatusColor(collab.status)}>
                          {collab.status}
                        </Badge>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {collab.partner}
                      </span>
                      <span className="flex items-center gap-1">
                        <Disc className="w-4 h-4" />
                        {collab.type}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary text-xs">
                        {collab.genre}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Started: {new Date(collab.startDate).toLocaleDateString()}
                      </span>
                      <span>Release: {new Date(collab.releaseDate).toLocaleDateString()}</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="text-primary">{collab.progress}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                          style={{ width: `${collab.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Promotions */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-accent/20">
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">Brand Promotions & Sponsorships</h2>
              <p className="text-sm text-muted-foreground">Partnerships with brands and franchises</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="p-5 rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300 bg-card/30"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl">
                    {promo.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{promo.brand}</h3>
                    <p className="text-xs text-muted-foreground">{promo.type}</p>
                  </div>
                </div>
                <p className="text-sm text-foreground/80 mb-3">{promo.campaign}</p>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className={getStatusColor(promo.status)}>
                    {promo.status}
                  </Badge>
                  <span className="text-lg font-bold text-primary">{promo.value}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {new Date(promo.startDate).toLocaleDateString()} - {new Date(promo.endDate).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Collaborations;

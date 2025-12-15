import { Headphones, Users, DollarSign, TrendingUp, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import ActivityChart from "@/components/dashboard/ActivityChart";
import RecentTracks from "@/components/dashboard/RecentTracks";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import MerchSection from "@/components/dashboard/MerchSection";
import CollabRequests from "@/components/dashboard/CollabRequests";
import heroBanner from "@/assets/hero-banner.jpg";

const stats = [
  { icon: Headphones, label: "Total Plays", value: "2.4M", change: "+12.5%", positive: true },
  { icon: Users, label: "Followers", value: "156K", change: "+8.2%", positive: true },
  { icon: DollarSign, label: "Revenue", value: "$48.2K", change: "+23.1%", positive: true },
  { icon: TrendingUp, label: "Growth Rate", value: "18.3%", change: "+2.1%", positive: true },
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, <span className="gradient-text">John</span>
            </h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your music today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-64 transition-all"
              />
            </div>
            <button className="relative p-3 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary transition-colors">
              <Bell className="w-5 h-5 text-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-pulse" />
            </button>
          </div>
        </header>

        {/* Hero Banner */}
        <div className="relative h-48 rounded-2xl overflow-hidden mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <img 
            src={heroBanner} 
            alt="Music visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="absolute inset-0 flex items-center p-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Your music is trending! 🔥</h2>
              <p className="text-muted-foreground mb-4">"Midnight Dreams" reached 100K plays this week</p>
              <button 
                onClick={() => navigate('/analytics')}
                className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
              >
                View Analytics
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={stat.label} {...stat} delay={index * 100} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left Column - Chart & Tracks */}
          <div className="col-span-8 space-y-6">
            <ActivityChart />
            <div className="grid grid-cols-2 gap-6">
              <RecentTracks />
              <MerchSection />
            </div>
          </div>

          {/* Right Column - Events & Collabs */}
          <div className="col-span-4 space-y-6">
            <UpcomingEvents />
            <CollabRequests />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

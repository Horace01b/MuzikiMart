import { 
  LayoutDashboard, 
  Music, 
  Calendar, 
  ShoppingBag, 
  Users, 
  Image, 
  BarChart3, 
  Settings,
  Upload,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Music, label: "My Music", path: "/my-music" },
  { icon: Calendar, label: "Events", path: "/events" },
  { icon: ShoppingBag, label: "Merchandise", path: "/merchandise" },
  { icon: Users, label: "Collaborations", path: "/collaborations" },
  { icon: Image, label: "Gallery", path: "/gallery" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
];

const Sidebar = ({ isCollapsed, onToggle }) => {
  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen glass-card rounded-none border-r border-border/50 flex flex-col z-50 transition-all duration-300 ease-out",
      isCollapsed ? "w-20" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border/50 flex items-center justify-between overflow-hidden">
        <div className={cn(
          "transition-all duration-300 ease-out",
          isCollapsed ? "opacity-0 scale-95 w-0" : "opacity-100 scale-100 w-auto"
        )}>
          <h1 className="text-2xl font-bold whitespace-nowrap">
            <span className="gradient-text">Muziki</span>
            <span className="text-foreground">Mart</span>
          </h1>
          <p className="text-xs text-muted-foreground mt-1">Artist Dashboard</p>
        </div>
        <h1 className={cn(
          "text-2xl font-bold mx-auto transition-all duration-300 ease-out absolute left-1/2 -translate-x-1/2",
          isCollapsed ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}>
          <span className="gradient-text">M</span>
        </h1>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={onToggle}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                "nav-item border border-border/30 rounded-lg",
                isActive && "active border-primary/50",
                isCollapsed && "justify-center px-2"
              )
            }
            title={isCollapsed ? item.label : undefined}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className={cn(
              "font-medium transition-all duration-300 ease-out overflow-hidden whitespace-nowrap",
              isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
            )}>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Quick Upload Button */}
      <div className="p-4 border-t border-border/50">
        <button className={cn(
          "w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:glow-primary hover:scale-[1.02]",
          isCollapsed && "px-2"
        )}>
          <Upload className="w-5 h-5 flex-shrink-0" />
          <span className={cn(
            "transition-all duration-300 ease-out overflow-hidden whitespace-nowrap",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>Quick Upload</span>
        </button>
      </div>

      {/* User Profile */}
      <div className="p-4 border-t border-border/50">
        <div className={cn("flex items-center gap-3", isCollapsed && "justify-center")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
            JD
          </div>
          <div className={cn(
            "flex items-center gap-3 flex-1 min-w-0 transition-all duration-300 ease-out overflow-hidden",
            isCollapsed ? "w-0 opacity-0" : "w-auto opacity-100"
          )}>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm truncate whitespace-nowrap">John Doe</p>
              <p className="text-xs text-muted-foreground truncate whitespace-nowrap">Pro Artist</p>
            </div>
            <button className="p-2 rounded-lg hover:bg-secondary transition-colors flex-shrink-0">
              <Settings className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

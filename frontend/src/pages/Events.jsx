import { useState } from "react";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Plus, 
  Filter,
  Search,
  Edit,
  Trash2,
  MoreVertical,
  DollarSign,
  Ticket
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    date: "Aug 15, 2024",
    time: "7:00 PM",
    location: "Los Angeles, CA",
    venue: "Staples Center",
    capacity: 1250,
    ticketsSold: 892,
    ticketTiers: [
      { name: "General Admission", price: 75, sold: 650, available: 400 },
      { name: "VIP", price: 150, sold: 180, available: 70 },
      { name: "Backstage Pass", price: 300, sold: 62, available: 30 },
    ],
    status: "on-sale",
    image: "🎪"
  },
  {
    id: 2,
    title: "Album Launch Party",
    date: "Sep 3, 2024",
    time: "8:30 PM",
    location: "New York, NY",
    venue: "Madison Square Garden",
    capacity: 500,
    ticketsSold: 423,
    ticketTiers: [
      { name: "Standard", price: 120, sold: 320, available: 130 },
      { name: "Premium", price: 200, sold: 103, available: 47 },
    ],
    status: "on-sale",
    image: "🎉"
  },
  {
    id: 3,
    title: "Acoustic Session",
    date: "Sep 20, 2024",
    time: "6:00 PM",
    location: "Chicago, IL",
    venue: "House of Blues",
    capacity: 200,
    ticketsSold: 156,
    ticketTiers: [
      { name: "Entry", price: 45, sold: 156, available: 44 },
    ],
    status: "on-sale",
    image: "🎸"
  },
  {
    id: 4,
    title: "New Year's Eve Concert",
    date: "Dec 31, 2024",
    time: "10:00 PM",
    location: "Miami, FL",
    venue: "Bayfront Park",
    capacity: 5000,
    ticketsSold: 0,
    ticketTiers: [
      { name: "General Admission", price: 150, sold: 0, available: 3000 },
      { name: "VIP Lounge", price: 350, sold: 0, available: 1500 },
      { name: "Ultimate Experience", price: 500, sold: 0, available: 500 },
    ],
    status: "draft",
    image: "🎆"
  },
];

const calculateEventRevenue = (ticketTiers) => {
  return ticketTiers.reduce((acc, tier) => acc + (tier.price * tier.sold), 0);
};

const EventsPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filter, setFilter] = useState("all");

  const filteredEvents = events.filter(event => {
    if (filter === "all") return true;
    return event.status === filter;
  });

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Events & Tickets</h1>
            <p className="text-muted-foreground mt-1">Manage your performances and ticket sales</p>
          </div>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
          >
            <Plus className="w-5 h-5" />
            Create Event
          </button>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="stat-card animate-slide-up">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Upcoming Events</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{events.filter(e => e.status === "on-sale").length}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <Ticket className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Total Tickets Sold</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{events.reduce((acc, e) => acc + e.ticketsSold, 0).toLocaleString()}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm text-muted-foreground">Revenue</span>
            </div>
            <p className="text-3xl font-bold text-foreground">
              ${events.reduce((acc, e) => acc + calculateEventRevenue(e.ticketTiers), 0).toLocaleString()}
            </p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-sm text-muted-foreground">Total Capacity</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{events.reduce((acc, e) => acc + e.capacity, 0).toLocaleString()}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search events..."
                className="pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-72 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {["all", "on-sale", "draft", "completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className="glass-card p-6 animate-slide-up hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${500 + index * 100}ms` }}
            >
              <div className="flex items-center gap-6">
                {/* Event Image */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-4xl shrink-0">
                  {event.image}
                </div>

                {/* Event Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{event.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      event.status === "on-sale" 
                        ? "bg-emerald-500/10 text-emerald-400" 
                        : event.status === "draft"
                        ? "bg-orange-500/10 text-orange-400"
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {event.status === "on-sale" ? "On Sale" : event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {event.venue}, {event.location}
                    </span>
                  </div>
                </div>

                {/* Ticket Tiers */}
                <div className="px-6 border-l border-border/50">
                  <p className="text-xs text-muted-foreground mb-2">Ticket Tiers</p>
                  <div className="space-y-1">
                    {event.ticketTiers.slice(0, 2).map((tier, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs gap-4">
                        <span className="text-muted-foreground">{tier.name}</span>
                        <span className="text-foreground font-medium">${tier.price}</span>
                      </div>
                    ))}
                    {event.ticketTiers.length > 2 && (
                      <p className="text-xs text-primary">+{event.ticketTiers.length - 2} more</p>
                    )}
                  </div>
                </div>

                {/* Ticket Progress */}
                <div className="text-center px-6 border-l border-border/50">
                  <p className="text-2xl font-bold text-foreground">
                    {event.ticketsSold}/{event.capacity}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">tickets sold</p>
                  <div className="w-32 h-2 rounded-full bg-secondary overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                      style={{ width: `${(event.ticketsSold / event.capacity) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Revenue */}
                <div className="text-center px-6 border-l border-border/50">
                  <p className="text-2xl font-bold gradient-text">
                    ${calculateEventRevenue(event.ticketTiers).toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">revenue</p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pl-6 border-l border-border/50">
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <Edit className="w-5 h-5 text-muted-foreground" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-destructive/10 transition-colors">
                    <Trash2 className="w-5 h-5 text-destructive" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-secondary transition-colors">
                    <MoreVertical className="w-5 h-5 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Create Event Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
            <div className="glass-card p-8 w-full max-w-2xl mx-4 animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">Create New Event</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Event Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter event name..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Time</label>
                  <input 
                    type="time" 
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Venue</label>
                  <input 
                    type="text" 
                    placeholder="Venue name..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <input 
                    type="text" 
                    placeholder="City, State..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Capacity</label>
                  <input 
                    type="number" 
                    placeholder="Max attendees..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Ticket Price ($)</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Event description..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 mt-8">
                <button 
                  onClick={() => setShowCreateModal(false)}
                  className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all">
                  Create Event
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default EventsPage;

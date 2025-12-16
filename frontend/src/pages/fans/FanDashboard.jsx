// src/pages/fans/FanDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  Music, 
  ShoppingBag, 
  Calendar, 
  Bell, 
  Search, 
  Play,
  Heart,
  Share2,
  MoreVertical,
  TrendingUp,
  Users,
  Star,
  Download,
  ChevronRight,
  Filter,
  Mic,
  Headphones,
  Ticket,
  ShoppingCart
} from 'lucide-react';
import logo from '../../assets/muzikimart logo.jpeg';

const FanDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('feed');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const trendingArtists = [
    { id: 1, name: 'The Midnight Vibes', genre: 'Synthwave', followers: '1.2M', isFollowing: true },
    { id: 2, name: 'Luna Rivers', genre: 'Indie Pop', followers: '890K', isFollowing: false },
    { id: 3, name: 'DJ Pulse', genre: 'Electronic', followers: '2.1M', isFollowing: true },
    { id: 4, name: 'Soul Harmony', genre: 'R&B', followers: '540K', isFollowing: false },
  ];

  const recentReleases = [
    { id: 1, title: 'Neon Dreams', artist: 'The Midnight Vibes', duration: '3:45', plays: '2.4M', liked: true },
    { id: 2, title: 'Ocean Waves', artist: 'Luna Rivers', duration: '4:12', plays: '1.8M', liked: false },
    { id: 3, title: 'Electric Pulse', artist: 'DJ Pulse', duration: '5:20', plays: '3.1M', liked: true },
    { id: 4, title: 'Midnight Soul', artist: 'Soul Harmony', duration: '3:58', plays: '890K', liked: false },
  ];

  const upcomingEvents = [
    { id: 1, artist: 'The Midnight Vibes', date: 'Dec 15', venue: 'Downtown Arena', price: '$45', type: 'Concert' },
    { id: 2, artist: 'Luna Rivers', date: 'Dec 20', venue: 'Riverside Hall', price: '$35', type: 'Live Session' },
    { id: 3, artist: 'DJ Pulse', date: 'Jan 5', venue: 'Skyline Club', price: '$60', type: 'Festival' },
  ];

  const merchItems = [
    { id: 1, name: 'Midnight Hoodie', artist: 'The Midnight Vibes', price: '$45', image: '👕' },
    { id: 2, name: 'Neon Cap', artist: 'DJ Pulse', price: '$25', image: '🧢' },
    { id: 3, name: 'Soul T-Shirt', artist: 'Soul Harmony', price: '$30', image: '👚' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-lg border-b border-blue-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="MuzikiMart Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-md object-cover" />
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  MuzikiMart
                </span>
              </div>
              
              <div className="hidden md:flex space-x-6">
                {['Feed', 'Discover', 'Library', 'Events', 'Store'].map((item) => (
                  <button
                    key={item}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      activeTab === item.toLowerCase() 
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                        : 'hover:bg-gray-800/50 text-gray-300'
                    }`}
                    onClick={() => {
                      setActiveTab(item.toLowerCase());
                      if (item.toLowerCase() === 'discover') {
                        navigate('/discovery');
                      }
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search artists, songs, events..."
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-blue-800/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              
              <button className="p-2 hover:bg-gray-800/50 rounded-lg relative hidden md:block">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <div className="flex items-center space-x-2 bg-gray-800/50 p-2 rounded-xl">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="font-bold">JD</span>
                </div>
                <span className="hidden md:block">John Doe</span>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 hover:bg-gray-800/50 rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Feed', 'Discover', 'Library', 'Events', 'Store'].map((item) => (
                <button
                  key={item}
                  className={`w-full px-4 py-2 rounded-lg transition-all text-left ${
                    activeTab === item.toLowerCase() 
                      ? 'bg-blue-600 text-white' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setIsMobileMenuOpen(false);
                    if (item.toLowerCase() === 'discover') {
                      navigate('/discovery');
                    }
                  }}
                >
                  {item}
                </button>
              ))}
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-blue-800/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Trending */}
          <div className="lg:col-span-1 space-y-8">
            {/* User Profile Card */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    JD
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-gray-900"></div>
                </div>
                <div>
                  <h2 className="text-xl font-bold">John Doe</h2>
                  <p className="text-gray-400">Premium Fan</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm">2,450 Points</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-gray-400">Following</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-gray-400">Tracks</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-gray-400">Events</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 rounded-xl font-semibold transition-all transform hover:scale-[1.02] shadow-lg shadow-blue-500/25">
                View Full Profile
              </button>
            </div>

            {/* Trending Artists */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-400" />
                  Trending Artists
                </h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">See All</button>
              </div>
              
              <div className="space-y-4">
                {trendingArtists.map((artist) => (
                  <div key={artist.id} className="flex items-center justify-between p-3 hover:bg-gray-800/50 rounded-xl transition-all">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                        <Mic className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <div className="font-semibold">{artist.name}</div>
                        <div className="text-sm text-gray-400">{artist.genre}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button className={`px-4 py-1 rounded-lg text-sm ${
                        artist.isFollowing 
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                          : 'bg-blue-600 hover:bg-blue-700'
                      }`}>
                        {artist.isFollowing ? 'Following' : 'Follow'}
                      </button>
                      <MoreVertical className="w-5 h-5 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Music Feed */}
          <div className="lg:col-span-2 space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-900/40 via-purple-900/30 to-pink-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <h1 className="text-2xl font-bold mb-2">Welcome back, John! 🎵</h1>
              <p className="text-gray-300 mb-4">New music from your favorite artists has been released.</p>
              <div className="flex items-center space-x-4">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-2 rounded-xl font-semibold transition-all transform hover:scale-[1.02] flex items-center">
                  <Play className="w-4 h-4 mr-2" />
                  Start Listening
                </button>
                <button className="bg-gray-800/50 hover:bg-gray-700/50 px-6 py-2 rounded-xl font-semibold transition-all border border-gray-700">
                  Explore New
                </button>
              </div>
            </div>

            {/* Recent Releases */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold flex items-center">
                  <Music className="w-6 h-6 mr-2 text-blue-400" />
                  Recent Releases
                </h3>
                <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
              
              <div className="space-y-3">
                {recentReleases.map((track) => (
                  <div key={track.id} className="flex items-center justify-between p-4 hover:bg-gray-800/50 rounded-xl transition-all group">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center">
                          <Play className="w-6 h-6 text-blue-400" />
                        </div>
                        <button className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </button>
                      </div>
                      <div>
                        <div className="font-semibold">{track.title}</div>
                        <div className="text-sm text-gray-400">{track.artist}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 md:space-x-6">
                      <div className="text-sm text-gray-400 hidden md:block">{track.duration}</div>
                      <div className="hidden md:flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm">{track.plays}</span>
                      </div>
                      <div className="flex items-center space-x-1 md:space-x-3">
                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                          <Heart className={`w-5 h-5 ${track.liked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                        </button>
                        <button className="p-2 hover:bg-gray-800 rounded-lg hidden md:block">
                          <Share2 className="w-5 h-5 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-800 rounded-lg">
                          <MoreVertical className="w-5 h-5 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events & Merch Store */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                    Upcoming Events
                  </h3>
                  <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
                </div>
                
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{event.artist}</div>
                        <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-lg text-sm">
                          {event.type}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400 mb-3">{event.venue}</div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className="text-lg font-bold text-blue-400">{event.date}</span>
                          <span className="text-gray-300">{event.price}</span>
                        </div>
                        <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm font-semibold transition-all transform hover:scale-[1.05] flex items-center">
                          <Ticket className="w-4 h-4 mr-2" />
                          Get Ticket
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Merch Store */}
              <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold flex items-center">
                    <ShoppingBag className="w-5 h-5 mr-2 text-blue-400" />
                    Featured Merch
                  </h3>
                  <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                    Store <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  {merchItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all group">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg flex items-center justify-center text-2xl">
                          {item.image}
                        </div>
                        <div>
                          <div className="font-semibold">{item.name}</div>
                          <div className="text-sm text-gray-400">{item.artist}</div>
                          <div className="text-lg font-bold text-blue-400">{item.price}</div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all transform group-hover:scale-[1.05] flex items-center">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-blue-800/50 pb-safe">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4 flex-1">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm md:text-base truncate">Neon Dreams</div>
                <div className="text-xs md:text-sm text-gray-400 truncate">The Midnight Vibes</div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-full hidden md:block">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
            </div>
            
            <div className="flex items-center space-x-2 md:space-x-6">
              <button className="p-2 hover:bg-gray-800 rounded-full">
                <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
              <div className="hidden md:block w-64">
                <div className="h-1 bg-gray-700 rounded-full">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-1/3"></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1:20</span>
                  <span>3:45</span>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-800 rounded-full hidden md:block">
                <Download className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanDashboard;
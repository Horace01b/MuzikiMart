// src/pages/fans/Library.jsx
import React, { useState } from 'react';
import {
  BookOpen,
  Music,
  Headphones,
  ShoppingBag,
  Heart,
  Users,
  Calendar,
  Play,
  Pause,
  Download,
  Share2,
  MoreVertical,
  Filter,
  Search,
  Star,
  Clock,
  Check,
  Plus,
  X,
  Grid,
  List,
  Lock,
  Crown,
  Bookmark,
  ShoppingCart,
  Bell,
  Eye,
  EyeOff,
  ChevronRight,
  PlayCircle,
  Radio,
  Mic,
  Album,
  UserPlus,
  Home,
  Globe,
  Ticket
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom'; // ADD THIS IMPORT

const Library = () => {
  const location = useLocation(); // ADD THIS
  const [activeTab, setActiveTab] = useState('purchased');
  const [playingTrack, setPlayingTrack] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [showHidden, setShowHidden] = useState(false);
  
  // Mock data for purchased content
  const purchasedContent = [
    {
      id: 1,
      type: 'album',
      title: 'Neon Dreams',
      artist: 'The Midnight Vibes',
      genre: 'Synthwave',
      price: '$9.99',
      purchasedDate: '2024-11-15',
      downloaded: true,
      plays: 24,
      duration: '45 min'
    },
    {
      id: 2,
      type: 'single',
      title: 'Ocean Waves',
      artist: 'Luna Rivers',
      genre: 'Indie Pop',
      price: '$1.99',
      purchasedDate: '2024-11-10',
      downloaded: true,
      plays: 32,
      duration: '3:45'
    },
    {
      id: 3,
      type: 'concert',
      title: 'Midnight Live 2024',
      artist: 'DJ Pulse',
      genre: 'Electronic',
      price: '$24.99',
      purchasedDate: '2024-11-05',
      downloaded: false,
      plays: 1,
      duration: '2 hours'
    },
    {
      id: 4,
      type: 'merch',
      title: 'Neon Dreams Hoodie',
      artist: 'The Midnight Vibes',
      genre: 'Merchandise',
      price: '$49.99',
      purchasedDate: '2024-10-28',
      downloaded: false,
      plays: null,
      shipping: 'Delivered'
    },
    {
      id: 5,
      type: 'podcast',
      title: 'Music Theory Unlocked',
      host: 'Dr. Melody',
      genre: 'Education',
      price: 'Premium',
      purchasedDate: '2024-10-20',
      downloaded: true,
      plays: 8,
      episodes: 12
    }
  ];

  // Favorite artists and bands
  const favoriteArtists = [
    {
      id: 1,
      name: 'The Midnight Vibes',
      genre: 'Synthwave',
      followers: '1.2M',
      following: true,
      notifications: true,
      newContent: true,
      albums: 3,
      upcomingEvent: 'Dec 15'
    },
    {
      id: 2,
      name: 'Luna Rivers',
      genre: 'Indie Pop',
      followers: '890K',
      following: true,
      notifications: true,
      newContent: false,
      albums: 2,
      upcomingEvent: 'Dec 20'
    },
    {
      id: 3,
      name: 'DJ Pulse',
      genre: 'Electronic',
      followers: '2.1M',
      following: true,
      notifications: false,
      newContent: true,
      albums: 4,
      upcomingEvent: 'Jan 5'
    },
    {
      id: 4,
      name: 'Soul Harmony',
      genre: 'R&B',
      followers: '540K',
      following: true,
      notifications: true,
      newContent: true,
      albums: 1,
      upcomingEvent: null
    },
    {
      id: 5,
      name: 'Tokyo Pulse',
      genre: 'Synthwave',
      followers: '1.5M',
      following: false,
      notifications: false,
      newContent: true,
      albums: 2,
      upcomingEvent: 'Dec 25'
    }
  ];

  // Liked snippets and tracks
  const likedContent = [
    {
      id: 1,
      type: 'snippet',
      title: 'Neon Dreams - Preview',
      artist: 'The Midnight Vibes',
      duration: '0:45',
      likedDate: '2 days ago',
      snippet: true,
      source: 'Instagram'
    },
    {
      id: 2,
      type: 'track',
      title: 'Ocean Waves',
      artist: 'Luna Rivers',
      duration: '3:45',
      likedDate: '1 week ago',
      snippet: false,
      inPlaylist: 'Chill Vibes'
    },
    {
      id: 3,
      type: 'snippet',
      title: 'Midnight Groove - Teaser',
      artist: 'DJ Pulse',
      duration: '1:10',
      likedDate: '3 days ago',
      snippet: true,
      source: 'Twitter'
    },
    {
      id: 4,
      type: 'track',
      title: 'Summer Breeze',
      artist: 'Coastal Sounds',
      duration: '4:20',
      likedDate: '2 weeks ago',
      snippet: false,
      inPlaylist: 'Summer 2024'
    }
  ];

  // Subscribed podcasts
  const subscribedPodcasts = [
    {
      id: 1,
      title: 'Music Theory Unlocked',
      host: 'Dr. Melody',
      category: 'Education',
      subscribedDate: '2024-10-15',
      episodes: 128,
      unplayed: 3,
      notifications: true
    },
    {
      id: 2,
      title: 'Indie Spotlight',
      host: 'Luna Parker',
      category: 'Interview',
      subscribedDate: '2024-10-20',
      episodes: 94,
      unplayed: 0,
      notifications: true
    },
    {
      id: 3,
      title: 'Electronic Frontiers',
      host: 'DJ Circuit',
      category: 'Technology',
      subscribedDate: '2024-09-05',
      episodes: 156,
      unplayed: 12,
      notifications: false
    },
    {
      id: 4,
      title: 'Songwriting Secrets',
      host: 'Chord Masters',
      category: 'Creative',
      subscribedDate: '2024-11-01',
      episodes: 203,
      unplayed: 5,
      notifications: true
    }
  ];

  // Hidden/private content
  const hiddenContent = [
    {
      id: 1,
      title: 'Private Demo 2024',
      artist: 'My Project',
      type: 'demo',
      addedDate: '2024-11-20',
      hidden: true
    },
    {
      id: 2,
      title: 'Secret Playlist',
      artist: 'Personal',
      type: 'playlist',
      addedDate: '2024-11-18',
      hidden: true
    }
  ];

  // User stats
  const libraryStats = {
    totalItems: 156,
    purchased: 12,
    liked: 89,
    artists: 24,
    podcasts: 8,
    storageUsed: '4.2 GB',
    totalValue: '$287.50'
  };

  const handlePlayTrack = (id) => {
    setPlayingTrack(playingTrack === id ? null : id);
  };

  const handleSelectItem = (id) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const handleToggleFavorite = (artistId) => {
    // Toggle favorite status
    console.log('Toggle favorite:', artistId);
  };

  const handleToggleNotifications = (artistId) => {
    // Toggle notifications
    console.log('Toggle notifications:', artistId);
  };

  const handleDownloadItem = (itemId) => {
    // Handle download
    console.log('Download item:', itemId);
  };

  const handleShareItem = (itemId) => {
    // Handle share
    console.log('Share item:', itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/50 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-blue-800/30">
        <div className="container mx-auto px-6 py-6">
          {/* Main Navigation Bar - ADDED SECTION */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  MuzikiMart
                </span>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/fan-dashboard"
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    location.pathname === '/fan-dashboard' 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <Home className="w-4 h-4 mr-2" />
                  Feed
                </Link>
                <Link
                  to="/discovery"
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    location.pathname === '/discovery' 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Discover
                </Link>
                <Link
                  to="/library"
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    location.pathname === '/library' 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Library
                </Link>
                <Link
                  to="/events"
                  className={`px-4 py-2 rounded-lg transition-all flex items-center ${
                    location.pathname === '/events' 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25' 
                      : 'hover:bg-gray-800/50 text-gray-300'
                  }`}
                >
                  <Ticket className="w-4 h-4 mr-2" />
                  Events
                </Link>
              </div>
            </div>
            
            {/* Search and User Profile */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your library..."
                  className="pl-10 pr-4 py-2 bg-gray-800/50 border border-blue-800/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>
              
              <button className="p-2 hover:bg-gray-800/50 rounded-lg relative">
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
            </div>
          </div>

          {/* Library Page Header */}
          <div className="mt-6">
            <h1 className="text-3xl font-bold flex items-center">
              <BookOpen className="w-8 h-8 mr-3 text-blue-400" />
              My Library
            </h1>
            <p className="text-gray-400 mt-2">
              Your personal collection of purchased content, favorites, and subscriptions
            </p>
          </div>

          {/* Library Tabs */}
          <div className="mt-6 flex space-x-2 overflow-x-auto pb-2">
            {[
              { id: 'purchased', label: 'Purchased', icon: ShoppingBag, count: libraryStats.purchased },
              { id: 'artists', label: 'Favorite Artists', icon: Heart, count: libraryStats.artists },
              { id: 'liked', label: 'Liked Content', icon: Star, count: libraryStats.liked },
              { id: 'podcasts', label: 'Podcasts', icon: Headphones, count: libraryStats.podcasts },
              { id: 'playlists', label: 'Playlists', icon: Music, count: 8 },
              { id: 'events', label: 'My Events', icon: Calendar, count: 4 },
              { id: 'merch', label: 'Merchandise', icon: ShoppingCart, count: 5 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center relative ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/25'
                    : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300'
                }`}
              >
                <tab.icon className="w-5 h-5 mr-2" />
                {tab.label}
                {tab.count > 0 && (
                  <span className="ml-2 px-2 py-1 bg-gray-900/50 text-xs rounded-lg">
                    {tab.count}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30">
            <div className="text-3xl font-bold mb-2">{libraryStats.totalItems}</div>
            <div className="text-gray-400">Total Items</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30">
            <div className="text-3xl font-bold mb-2">{libraryStats.storageUsed}</div>
            <div className="text-gray-400">Storage Used</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30">
            <div className="text-3xl font-bold mb-2">{libraryStats.totalValue}</div>
            <div className="text-gray-400">Library Value</div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold mb-2">Premium</div>
                <div className="text-gray-400">Subscription</div>
              </div>
              <Crown className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Purchased Content */}
            {activeTab === 'purchased' && (
              <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-800/30 shadow-xl">
                <div className="p-6 border-b border-blue-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold flex items-center">
                      <ShoppingBag className="w-6 h-6 mr-3 text-blue-400" />
                      Purchased Content
                    </h2>
                    
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-blue-600' : 'bg-gray-800/50'}`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-blue-600' : 'bg-gray-800/50'}`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Check className="w-4 h-4 mr-1 text-green-500" />
                      {purchasedContent.filter(item => item.downloaded).length} Downloaded
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Last purchased: {purchasedContent[0].purchasedDate}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  {viewMode === 'list' ? (
                    <div className="space-y-4">
                      {purchasedContent.map((item) => (
                        <div key={item.id} className="group flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all">
                          <div className="flex items-center space-x-4 flex-1">
                            <div className="relative">
                              <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                                item.type === 'album' ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20' :
                                item.type === 'concert' ? 'bg-gradient-to-br from-orange-500/20 to-red-500/20' :
                                item.type === 'podcast' ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20' :
                                'bg-gradient-to-br from-gray-500/20 to-gray-600/20'
                              }`}>
                                {item.type === 'album' ? <Album className="w-7 h-7 text-blue-400" /> :
                                 item.type === 'concert' ? <Calendar className="w-7 h-7 text-orange-400" /> :
                                 item.type === 'podcast' ? <Radio className="w-7 h-7 text-green-400" /> :
                                 <ShoppingBag className="w-7 h-7 text-gray-400" />}
                              </div>
                              <button
                                onClick={() => handlePlayTrack(item.id)}
                                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center"
                              >
                                {playingTrack === item.id ? (
                                  <Pause className="w-8 h-8 text-white fill-white" />
                                ) : (
                                  <Play className="w-8 h-8 text-white fill-white" />
                                )}
                              </button>
                            </div>
                            
                            <div className="flex-1">
                              <div className="font-semibold">{item.title}</div>
                              <div className="text-sm text-gray-400">{item.artist}</div>
                              <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                                <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded">
                                  {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                                </span>
                                {item.plays && (
                                  <span className="flex items-center">
                                    <PlayCircle className="w-3 h-3 mr-1" />
                                    {item.plays} plays
                                  </span>
                                )}
                                {item.duration && (
                                  <span>{item.duration}</span>
                                )}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="font-bold">{item.price}</div>
                              <div className="text-xs text-gray-400">Purchased {item.purchasedDate}</div>
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              {item.downloaded ? (
                                <button className="p-2 hover:bg-gray-700 rounded-lg">
                                  <Check className="w-5 h-5 text-green-500" />
                                </button>
                              ) : (
                                <button 
                                  onClick={() => handleDownloadItem(item.id)}
                                  className="p-2 hover:bg-gray-700 rounded-lg"
                                >
                                  <Download className="w-5 h-5 text-gray-400" />
                                </button>
                              )}
                              
                              <button 
                                onClick={() => handleShareItem(item.id)}
                                className="p-2 hover:bg-gray-700 rounded-lg"
                              >
                                <Share2 className="w-5 h-5 text-gray-400" />
                              </button>
                              
                              <button className="p-2 hover:bg-gray-700 rounded-lg">
                                <MoreVertical className="w-5 h-5 text-gray-400" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {purchasedContent.map((item) => (
                        <div key={item.id} className="bg-gray-900/50 rounded-xl p-4 hover:bg-gray-800/50 transition-all group">
                          <div className="flex items-start justify-between mb-4">
                            <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                              item.type === 'album' ? 'bg-gradient-to-br from-blue-500/20 to-purple-600/20' :
                              'bg-gradient-to-br from-gray-500/20 to-gray-600/20'
                            }`}>
                              {item.type === 'album' ? <Album className="w-8 h-8 text-blue-400" /> :
                               <ShoppingBag className="w-8 h-8 text-gray-400" />}
                            </div>
                            <div className="text-right">
                              <div className="font-bold">{item.price}</div>
                              <div className="text-xs text-gray-400">{item.purchasedDate}</div>
                            </div>
                          </div>
                          
                          <div className="font-semibold mb-1">{item.title}</div>
                          <div className="text-sm text-gray-400 mb-3">{item.artist}</div>
                          
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs">
                              {item.type}
                            </span>
                            
                            <div className="flex items-center space-x-2">
                              <button 
                                onClick={() => handlePlayTrack(item.id)}
                                className="p-2 hover:bg-gray-700 rounded-lg"
                              >
                                {playingTrack === item.id ? (
                                  <Pause className="w-4 h-4" />
                                ) : (
                                  <Play className="w-4 h-4" />
                                )}
                              </button>
                              {item.downloaded ? (
                                <button className="p-2 hover:bg-gray-700 rounded-lg">
                                  <Check className="w-4 h-4 text-green-500" />
                                </button>
                              ) : (
                                <button className="p-2 hover:bg-gray-700 rounded-lg">
                                  <Download className="w-4 h-4" />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Favorite Artists */}
            {activeTab === 'artists' && (
              <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-800/30 shadow-xl">
                <div className="p-6 border-b border-blue-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Heart className="w-6 h-6 mr-3 text-red-500" />
                      Favorite Artists & Bands
                    </h2>
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold transition-all flex items-center">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Follow More
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {favoriteArtists.map((artist) => (
                      <div key={artist.id} className="bg-gray-900/50 rounded-xl p-4 hover:bg-gray-800/50 transition-all">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center text-2xl mr-4">
                              <Mic className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                              <div className="font-bold text-lg flex items-center">
                                {artist.name}
                                {artist.newContent && (
                                  <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                                )}
                              </div>
                              <div className="text-sm text-gray-400">{artist.genre}</div>
                              <div className="text-xs text-gray-500 flex items-center mt-1">
                                <Users className="w-3 h-3 mr-1" />
                                {artist.followers}
                              </div>
                            </div>
                          </div>
                          
                          {artist.following ? (
                            <button className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm">
                              Following
                            </button>
                          ) : (
                            <button className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg text-sm">
                              Follow
                            </button>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-300">
                            <Album className="w-4 h-4 inline mr-1" />
                            {artist.albums} albums
                            {artist.upcomingEvent && (
                              <>
                                <span className="mx-2">•</span>
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Event {artist.upcomingEvent}
                              </>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={() => handleToggleNotifications(artist.id)}
                              className={`p-2 rounded-lg ${artist.notifications ? 'bg-blue-600/20 text-blue-400' : 'bg-gray-800 text-gray-400'}`}
                            >
                              <Bell className="w-4 h-4" />
                            </button>
                            
                            <button className="p-2 hover:bg-gray-700 rounded-lg">
                              <Share2 className="w-4 h-4" />
                            </button>
                            
                            <button className="p-2 hover:bg-gray-700 rounded-lg">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Liked Content */}
            {activeTab === 'liked' && (
              <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-blue-800/30 shadow-xl">
                <div className="p-6 border-b border-blue-800/30">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Star className="w-6 h-6 mr-3 text-yellow-500" />
                      Liked Snippets & Tracks
                    </h2>
                    <div className="text-sm text-gray-400">{likedContent.length} items liked</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {likedContent.map((item) => (
                      <div key={item.id} className="group flex items-center justify-between p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all">
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center ${
                              item.snippet 
                                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' 
                                : 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
                            }`}>
                              {item.snippet ? (
                                <Bookmark className="w-7 h-7 text-yellow-400" />
                              ) : (
                                <Music className="w-7 h-7 text-green-400" />
                              )}
                            </div>
                            <button
                              onClick={() => handlePlayTrack(item.id)}
                              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity flex items-center justify-center"
                            >
                              {playingTrack === item.id ? (
                                <Pause className="w-8 h-8 text-white fill-white" />
                              ) : (
                                <Play className="w-8 h-8 text-white fill-white" />
                              )}
                            </button>
                          </div>
                          
                          <div>
                            <div className="font-semibold">{item.title}</div>
                            <div className="text-sm text-gray-400">{item.artist}</div>
                            <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                              <span className={`px-2 py-1 rounded ${
                                item.snippet 
                                  ? 'bg-yellow-900/30 text-yellow-400' 
                                  : 'bg-green-900/30 text-green-400'
                              }`}>
                                {item.snippet ? 'Snippet' : 'Full Track'}
                              </span>
                              <span>{item.duration}</span>
                              {item.source && (
                                <span>from {item.source}</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="text-sm text-gray-400">{item.likedDate}</div>
                            {item.inPlaylist && (
                              <div className="text-xs text-blue-400">In {item.inPlaylist}</div>
                            )}
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className="p-2 hover:bg-gray-700 rounded-lg">
                              <Heart className="w-5 h-5 text-red-500 fill-current" />
                            </button>
                            <button className="p-2 hover:bg-gray-700 rounded-lg">
                              <Share2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <PlayCircle className="w-6 h-6 mr-3 text-blue-400" />
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-4 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all">
                  <div className="flex items-center">
                    <Download className="w-5 h-5 mr-3 text-blue-400" />
                    <span>Download All</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all">
                  <div className="flex items-center">
                    <Share2 className="w-5 h-5 mr-3 text-green-400" />
                    <span>Share Library</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all">
                  <div className="flex items-center">
                    <Lock className="w-5 h-5 mr-3 text-yellow-400" />
                    <span>Privacy Settings</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                
                <button className="w-full flex items-center justify-between p-4 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all">
                  <div className="flex items-center">
                    <Plus className="w-5 h-5 mr-3 text-purple-400" />
                    <span>Add to Library</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Subscribed Podcasts */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold flex items-center">
                  <Radio className="w-6 h-6 mr-3 text-blue-400" />
                  Subscribed Podcasts
                </h3>
                <span className="text-sm text-gray-400">{subscribedPodcasts.length} total</span>
              </div>
              
              <div className="space-y-4">
                {subscribedPodcasts.map((podcast) => (
                  <div key={podcast.id} className="p-4 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all">
                    <div className="font-semibold mb-1">{podcast.title}</div>
                    <div className="text-sm text-gray-400 mb-2">{podcast.host}</div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-gray-800 rounded">{podcast.category}</span>
                      <span>{podcast.episodes} episodes</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-300">
                        {podcast.unplayed > 0 ? (
                          <span className="text-blue-400">{podcast.unplayed} new</span>
                        ) : (
                          <span className="text-gray-500">All caught up</span>
                        )}
                      </div>
                      
                      <button className={`p-1 rounded ${podcast.notifications ? 'bg-blue-600/20 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                        <Bell className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hidden Content */}
            {showHidden && (
              <div className="bg-gradient-to-br from-gray-800/50 to-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-800/30 shadow-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-red-400" />
                  Hidden Content
                </h3>
                
                <div className="space-y-3">
                  {hiddenContent.map((item) => (
                    <div key={item.id} className="p-3 bg-gray-900/50 rounded-xl">
                      <div className="font-semibold mb-1">{item.title}</div>
                      <div className="text-sm text-gray-400 mb-1">{item.artist}</div>
                      <div className="text-xs text-gray-500">{item.type} • Hidden on {item.addedDate}</div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 py-2 bg-gray-900/50 hover:bg-gray-800/50 rounded-xl transition-all text-sm">
                  <Eye className="w-4 h-4 inline mr-2" />
                  Show More Hidden Items
                </button>
              </div>
            )}

            {/* Storage Usage */}
            <div className="bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-800/30 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Storage Usage</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Music</span>
                    <span>2.8 GB</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full w-2/3"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Podcasts</span>
                    <span>1.1 GB</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full w-1/4"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Videos</span>
                    <span>0.3 GB</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full w-1/8"></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-900/50 rounded-xl">
                <div className="text-sm text-gray-400 mb-2">Available Storage</div>
                <div className="text-2xl font-bold">15.8 GB free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
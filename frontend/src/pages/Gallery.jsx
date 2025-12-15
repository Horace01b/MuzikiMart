import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Image, Upload, Grid, List, Download, Trash2, Eye, Plus, FolderOpen } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const mediaItems = [
  {
    id: 1,
    name: "Album Cover - Midnight Dreams",
    type: "Album Art",
    size: "2.4 MB",
    dimensions: "3000x3000",
    uploadDate: "2024-01-15",
    url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
  },
  {
    id: 2,
    name: "Press Photo - Studio Session",
    type: "Press Kit",
    size: "5.1 MB",
    dimensions: "4000x2667",
    uploadDate: "2024-01-10",
    url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400",
  },
  {
    id: 3,
    name: "Single Artwork - Electric Pulse",
    type: "Album Art",
    size: "1.8 MB",
    dimensions: "3000x3000",
    uploadDate: "2024-01-08",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400",
  },
  {
    id: 4,
    name: "Concert Photo - Summer Festival",
    type: "Live Performance",
    size: "3.2 MB",
    dimensions: "5472x3648",
    uploadDate: "2024-01-05",
    url: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400",
  },
  {
    id: 5,
    name: "Behind The Scenes - Music Video",
    type: "BTS",
    size: "4.7 MB",
    dimensions: "4000x2250",
    uploadDate: "2024-01-03",
    url: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400",
  },
  {
    id: 6,
    name: "Social Media Banner",
    type: "Social Media",
    size: "0.8 MB",
    dimensions: "1500x500",
    uploadDate: "2024-01-01",
    url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400",
  },
];

const categories = ["All", "Album Art", "Press Kit", "Live Performance", "BTS", "Social Media"];

const Gallery = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItems, setSelectedItems] = useState([]);

  const filteredItems = selectedCategory === "All" 
    ? mediaItems 
    : mediaItems.filter(item => item.type === selectedCategory);

  const toggleSelect = (id) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold gradient-text">Media Gallery</h1>
            <p className="text-muted-foreground mt-1">Manage your photos, artwork, and press materials</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:glow-primary transition-all">
            <Upload className="w-5 h-5" />
            Upload Media
          </button>
        </div>

        {/* Toolbar */}
        <div className="glass-card p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* View Toggle & Actions */}
            <div className="flex items-center gap-3">
              {selectedItems.length > 0 && (
                <div className="flex items-center gap-2 mr-4">
                  <span className="text-sm text-muted-foreground">{selectedItems.length} selected</span>
                  <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-destructive/20 text-destructive transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              )}
              <div className="flex rounded-lg bg-secondary p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Content */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Upload Card */}
            <div className="aspect-square rounded-xl border-2 border-dashed border-border/50 hover:border-primary/50 transition-all flex flex-col items-center justify-center gap-3 cursor-pointer group">
              <div className="p-4 rounded-full bg-secondary group-hover:bg-primary/20 transition-colors">
                <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Upload New
              </span>
            </div>

            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-square rounded-xl overflow-hidden border transition-all duration-300 animate-slide-up cursor-pointer ${
                  selectedItems.includes(item.id)
                    ? "border-primary ring-2 ring-primary/50"
                    : "border-border/50 hover:border-primary/30"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => toggleSelect(item.id)}
              >
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-sm font-medium text-foreground truncate">{item.name}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">{item.type}</span>
                      <div className="flex items-center gap-1">
                        <button 
                          className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary transition-colors"
                          onClick={(e) => { e.stopPropagation(); }}
                        >
                          <Eye className="w-3 h-3" />
                        </button>
                        <button 
                          className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary transition-colors"
                          onClick={(e) => { e.stopPropagation(); }}
                        >
                          <Download className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Selection Indicator */}
                <div className={`absolute top-2 left-2 w-5 h-5 rounded-full border-2 transition-all ${
                  selectedItems.includes(item.id)
                    ? "bg-primary border-primary"
                    : "border-foreground/30 group-hover:border-foreground/50"
                }`}>
                  {selectedItems.includes(item.id) && (
                    <svg className="w-full h-full text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-card overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Preview</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Name</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Dimensions</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Size</th>
                  <th className="text-left p-4 text-sm font-medium text-muted-foreground">Uploaded</th>
                  <th className="text-right p-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr 
                    key={item.id} 
                    className="border-b border-border/30 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="p-4">
                      <img src={item.url} alt={item.name} className="w-12 h-12 rounded-lg object-cover" />
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-foreground">{item.name}</p>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="bg-secondary/50">
                        {item.type}
                      </Badge>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground">{item.dimensions}</td>
                    <td className="p-4 text-sm text-muted-foreground">{item.size}</td>
                    <td className="p-4 text-sm text-muted-foreground">
                      {new Date(item.uploadDate).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg hover:bg-destructive/20 text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Storage Info */}
        <div className="glass-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/20">
              <FolderOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Storage Usage</h3>
              <p className="text-sm text-muted-foreground">18.0 MB of 5 GB used</p>
            </div>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <div className="h-full w-[0.36%] rounded-full bg-gradient-to-r from-primary to-accent" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Gallery;

import { useState } from "react";
import { 
  ShoppingBag, 
  Plus,
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  DollarSign,
  Package,
  TrendingUp,
  Eye,
  Star
} from "lucide-react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const merchandise = [
  {
    id: 1,
    name: "Neon Nights Tour T-Shirt",
    category: "Apparel",
    price: 35,
    sold: 342,
    inStock: 158,
    status: "selling",
    rating: 4.8,
    image: "👕"
  },
  {
    id: 2,
    name: "Limited Edition Vinyl",
    category: "Music",
    price: 45,
    sold: 189,
    inStock: 61,
    status: "selling",
    rating: 4.9,
    image: "💿"
  },
  {
    id: 3,
    name: "Signature Hoodie",
    category: "Apparel",
    price: 65,
    sold: 156,
    inStock: 94,
    status: "selling",
    rating: 4.7,
    image: "🧥"
  },
  {
    id: 4,
    name: "Tour Poster Bundle",
    category: "Collectibles",
    price: 25,
    sold: 423,
    inStock: 0,
    status: "sold-out",
    rating: 4.6,
    image: "🖼️"
  },
  {
    id: 5,
    name: "Autographed CD",
    category: "Music",
    price: 55,
    sold: 78,
    inStock: 22,
    status: "promoting",
    rating: 5.0,
    image: "📀"
  },
  {
    id: 6,
    name: "Fan Club Cap",
    category: "Apparel",
    price: 28,
    sold: 234,
    inStock: 166,
    status: "selling",
    rating: 4.5,
    image: "🧢"
  },
  {
    id: 7,
    name: "Summer Vibes Beach Towel",
    category: "Accessories",
    price: 40,
    sold: 0,
    inStock: 200,
    status: "promoting",
    rating: 0,
    image: "🏖️"
  },
  {
    id: 8,
    name: "Concert Wristband Set",
    category: "Accessories",
    price: 15,
    sold: 567,
    inStock: 433,
    status: "selling",
    rating: 4.4,
    image: "⌚"
  },
];

const MerchandisePage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [filter, setFilter] = useState("all");
  const [view, setView] = useState("grid");

  const filteredMerch = merchandise.filter(item => {
    if (filter === "all") return true;
    return item.status === filter;
  });

  const totalRevenue = merchandise.reduce((acc, m) => acc + (m.sold * m.price), 0);
  const totalSold = merchandise.reduce((acc, m) => acc + m.sold, 0);
  const totalInStock = merchandise.reduce((acc, m) => acc + m.inStock, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case "selling": return "bg-emerald-500/10 text-emerald-400";
      case "promoting": return "bg-primary/10 text-primary";
      case "sold-out": return "bg-rose-500/10 text-rose-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Merchandise</h1>
            <p className="text-muted-foreground mt-1">Manage your products and sales</p>
          </div>
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all"
          >
            <Plus className="w-5 h-5" />
            Add Product
          </button>
        </header>

        {/* Stats Overview */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <div className="stat-card animate-slide-up">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-primary/10">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-muted-foreground">Total Products</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{merchandise.length}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-emerald-500/10">
                <DollarSign className="w-6 h-6 text-emerald-400" />
              </div>
              <span className="text-sm text-muted-foreground">Total Revenue</span>
            </div>
            <p className="text-3xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-accent/10">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm text-muted-foreground">Items Sold</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{totalSold.toLocaleString()}</p>
          </div>
          <div className="stat-card animate-slide-up" style={{ animationDelay: "300ms" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 rounded-xl bg-orange-500/10">
                <Package className="w-6 h-6 text-orange-400" />
              </div>
              <span className="text-sm text-muted-foreground">In Stock</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{totalInStock.toLocaleString()}</p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..."
                className="pl-10 pr-4 py-2.5 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 w-72 transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              {["all", "selling", "promoting", "sold-out"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filter === f 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f === "sold-out" ? "Sold Out" : f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
            <Filter className="w-4 h-4" />
            More Filters
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-4 gap-6">
          {filteredMerch.map((item, index) => (
            <div 
              key={item.id}
              className="glass-card p-4 animate-slide-up hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${500 + index * 50}ms` }}
            >
              {/* Product Image */}
              <div className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl mb-4 overflow-hidden">
                {item.image}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button className="p-2 rounded-lg bg-primary text-primary-foreground">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-secondary text-foreground">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg bg-destructive text-destructive-foreground">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Status Badge */}
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${getStatusColor(item.status)}`}>
                {item.status === "sold-out" ? "Sold Out" : item.status.charAt(0).toUpperCase() + item.status.slice(1)}
              </span>

              {/* Product Info */}
              <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.category}</p>

              {/* Price & Stats */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold gradient-text">${item.price}</span>
                {item.rating > 0 && (
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {item.rating}
                  </div>
                )}
              </div>

              {/* Sales Stats */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-border/50">
                <div>
                  <p className="text-lg font-semibold text-foreground">{item.sold}</p>
                  <p className="text-xs text-muted-foreground">Sold</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground">{item.inStock}</p>
                  <p className="text-xs text-muted-foreground">In Stock</p>
                </div>
              </div>

              {/* Revenue */}
              <div className="mt-3 pt-3 border-t border-border/50">
                <p className="text-sm text-muted-foreground">Revenue</p>
                <p className="text-lg font-bold text-emerald-400">${(item.sold * item.price).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center animate-in fade-in duration-200">
            <div className="glass-card p-8 w-full max-w-2xl mx-4 animate-slide-up">
              <h2 className="text-2xl font-bold text-foreground mb-6">Add New Product</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter product name..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Category</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select category...</option>
                    <option value="apparel">Apparel</option>
                    <option value="music">Music</option>
                    <option value="collectibles">Collectibles</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Price ($)</label>
                  <input 
                    type="number" 
                    placeholder="0.00"
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Stock Quantity</label>
                  <input 
                    type="number" 
                    placeholder="Enter quantity..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="selling">Active - Selling</option>
                    <option value="promoting">Promoting</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Product Image</label>
                  <div className="border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <ShoppingBag className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
                    <p className="text-foreground font-medium">Drop product image here</p>
                    <p className="text-sm text-muted-foreground mt-1">or click to browse (PNG, JPG)</p>
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Product description..."
                    className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-4 mt-8">
                <button 
                  onClick={() => setShowAddModal(false)}
                  className="px-6 py-3 rounded-xl bg-secondary text-foreground font-medium hover:bg-secondary/80 transition-all"
                >
                  Cancel
                </button>
                <button className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all">
                  Add Product
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MerchandisePage;

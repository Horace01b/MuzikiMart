import { ShoppingBag, TrendingUp, Package } from "lucide-react";

const merchItems = [
  { id: 1, name: "Tour T-Shirt 2024", price: 35, sold: 245, stock: 55, emoji: "👕" },
  { id: 2, name: "Signed Vinyl Album", price: 50, sold: 123, stock: 27, emoji: "💿" },
  { id: 3, name: "Logo Hoodie", price: 65, sold: 89, stock: 111, emoji: "🧥" },
  { id: 4, name: "Concert Poster", price: 25, sold: 312, stock: 88, emoji: "🖼️" },
];

const MerchSection = () => {
  return (
    <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-foreground">Merchandise</h3>
          <p className="text-sm text-muted-foreground">Product performance</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
          <Package className="w-4 h-4" />
          Add Product
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {merchItems.map((item) => (
          <div 
            key={item.id}
            className="p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                <p className="text-lg font-bold text-primary">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                {item.sold} sold
              </span>
              <span>{item.stock} in stock</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Revenue</p>
            <p className="text-2xl font-bold text-foreground">$24,580</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-emerald-400 flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              +18% this month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchSection;

import { Heart, Code, Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-bg border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>&</span>
            <Code className="h-4 w-4 text-primary" />
            <span>by</span>
            <span className="font-semibold text-gradient">PRATHAMESH TANDALE</span>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Coffee className="h-4 w-4" />
            <span>Powered by AI Innovation & Endless Curiosity</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            © 2026 Prathamesh Tandale | Code with Purpose, Build with Precision.
          </div>
          
          <div className="pt-4">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
            "First, solve the problem. Then, write the code." — John Johnson
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { GraduationCap, Plus, User } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-mesh text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Left Spacer for balance */}
            <div className="w-24 hidden sm:block"></div>

            {/* Center Logo & Title */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                CollegeEventHub
              </h1>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-3 sm:w-24 justify-end">
              <Link
                href="/organize"
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  location === "/organize"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/50 text-foreground hover:bg-white hover:shadow-sm"
                }`}
              >
                <Plus className="w-5 h-5" />
              </Link>
              <Link
                href="/profile"
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  location === "/profile"
                    ? "bg-primary text-white shadow-md"
                    : "bg-white/50 text-foreground hover:bg-white hover:shadow-sm"
                }`}
              >
                <User className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}

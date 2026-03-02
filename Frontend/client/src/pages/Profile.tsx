import { Layout } from "@/components/Layout";
import { Mail, MapPin, BookOpen, Settings, Bell, Shield, LogOut } from "lucide-react";

export default function Profile() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        
        {/* Profile Header Card */}
        <div className="glass-card rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background blob */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shrink-0">
              JS
            </div>
            
            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground">John Student</h2>
              <p className="text-primary font-medium mt-1">Computer Science Major</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-4 text-sm text-muted-foreground">
                <div className="flex items-center bg-white/50 px-3 py-1.5 rounded-full border border-border/50">
                  <Mail className="w-4 h-4 mr-2 text-primary" />
                  john.student@college.edu
                </div>
                <div className="flex items-center bg-white/50 px-3 py-1.5 rounded-full border border-border/50">
                  <MapPin className="w-4 h-4 mr-2 text-accent" />
                  Campus Dorm B
                </div>
                <div className="flex items-center bg-white/50 px-3 py-1.5 rounded-full border border-border/50">
                  <BookOpen className="w-4 h-4 mr-2 text-primary" />
                  Class of '25
                </div>
              </div>
            </div>
            
            {/* Action */}
            <button className="px-6 py-2.5 rounded-xl bg-white border border-border text-foreground font-semibold shadow-sm hover:shadow-md hover:border-primary/30 transition-all flex items-center gap-2">
              <Settings className="w-4 h-4" /> Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-1">
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground font-medium">Events Registered</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground font-medium">Events Organized</div>
          </div>
          <div className="glass-card rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-foreground mb-2">5</div>
            <div className="text-muted-foreground font-medium">Upcoming</div>
          </div>
        </div>

        {/* Settings List */}
        <div className="glass-card rounded-[2rem] overflow-hidden stagger-2">
          <div className="p-6 border-b border-border/50 bg-white/40">
            <h3 className="text-lg font-bold text-foreground">Account Settings</h3>
          </div>
          <div className="divide-y divide-border/30">
            <button className="w-full flex items-center justify-between p-6 hover:bg-white/60 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Bell className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Notifications</div>
                  <div className="text-sm text-muted-foreground">Manage email and push alerts</div>
                </div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-6 hover:bg-white/60 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">Privacy & Security</div>
                  <div className="text-sm text-muted-foreground">Password, 2FA, data usage</div>
                </div>
              </div>
            </button>
            <button className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive group-hover:bg-destructive group-hover:text-white transition-colors">
                  <LogOut className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-destructive">Sign Out</div>
                  <div className="text-sm text-destructive/70">Log out of your account</div>
                </div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </Layout>
  );
}

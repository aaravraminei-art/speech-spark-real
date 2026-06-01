import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Shield, Briefcase, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfficersPage = () => {
  // ==========================================================
  // 👥 EDIT OR ADD OFFICER profiles HERE
  // ==========================================================
  const executiveBoard = [
    { name: "Akshay Chapuri", role: "President", image: "" },
    { name: "Nihal Boji", role: "Vice President", image: "" },
    { name: "Avi Varma", role: "Director of Education", image: "" },
    { name: "Gautham Sivaraj", role: "Director of Outreach", image: "" },
    { name: "Viren Darisi", role: "Director of Finance", image: "" },
    { name: "Arjun Shreyas Karthikeyan", role: "Director of Media", image: "" },
    { name: "Siddhu Surapeneni", role: "Director of Logistics", image: "" }
  ];

  const regionalManagers = [
    { name: "Aryan Kasagunti", role: "Ashburn Regional Manager", image: "" },
    { name: "Vyom Shah", role: "South Riding Regional Manager", image: "" },
    { name: "Nikhil Kanchinadam", role: "Chantilly Regional Manager", image: "" }
  ];

  // Helper calculation to generate clean user placeholder avatars when no image asset is available
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center border-b border-border/40">
        <div className="container px-4 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
            2026–2027 Leadership Core
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4 text-foreground">
            Meet the Officers
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The student leaders steering Speech Spark's curriculum development, financial strategy, and local school expansion programs.
          </p>
        </div>
      </section>

      {/* Main Content Renders */}
      <section className="py-16 md:py-20">
        <div className="container px-4 mx-auto max-w-5xl space-y-20">
          
          {/* BRACKET 1: Executive Team Framework */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <Shield className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold font-display tracking-tight text-foreground">
                  Executive Board
                </h2>
              </div>
              <span className="inline-block bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground border border-border/40 uppercase tracking-wider">
                Org-Wide Oversight
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {executiveBoard.map((officer, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-2xs group hover:border-border-hover hover:shadow-xs transition-all">
                  {/* Image Segment or Automatic Initials Fallback UI */}
                  <div className="h-48 w-full bg-muted/40 relative flex items-center justify-center border-b border-border/40 overflow-hidden">
                    {officer.image ? (
                      <img 
                        src={officer.image} 
                        alt={officer.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="font-display font-black text-3xl tracking-tight text-muted-foreground/60 select-none bg-gradient-to-br from-muted to-muted/20 w-full h-full flex items-center justify-center">
                        {getInitials(officer.name)}
                      </div>
                    )}
                  </div>
                  {/* Metadata labels info */}
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-bold text-accent tracking-widest uppercase block truncate">
                      {officer.role}
                    </span>
                    <h3 className="font-bold text-sm md:text-base text-foreground font-display leading-tight tracking-tight">
                      {officer.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BRACKET 2: Regional Managers Framework */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
              <div className="flex items-center gap-2.5">
                <Briefcase className="h-5 w-5 text-accent" />
                <h2 className="text-2xl font-bold font-display tracking-tight text-foreground">
                  Regional Managers
                </h2>
              </div>
              <span className="inline-block bg-muted px-3 py-1 rounded-md text-xs font-semibold text-muted-foreground border border-border/40 uppercase tracking-wider">
                Chapter Direction
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {regionalManagers.map((officer, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl overflow-hidden shadow-2xs group hover:border-border-hover hover:shadow-xs transition-all">
                  {/* Image Segment or Automatic Initials Fallback UI */}
                  <div className="h-48 w-full bg-muted/40 relative flex items-center justify-center border-b border-border/40 overflow-hidden">
                    {officer.image ? (
                      <img 
                        src={officer.image} 
                        alt={officer.name} 
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                      />
                    ) : (
                      <div className="font-display font-black text-3xl tracking-tight text-muted-foreground/60 select-none bg-gradient-to-br from-muted to-muted/20 w-full h-full flex items-center justify-center">
                        {getInitials(officer.name)}
                      </div>
                    )}
                  </div>
                  {/* Metadata labels info */}
                  <div className="p-4 space-y-1">
                    <span className="text-[10px] font-bold text-accent tracking-widest uppercase block truncate">
                      {officer.role}
                    </span>
                    <h3 className="font-bold text-sm md:text-base text-foreground font-display leading-tight tracking-tight">
                      {officer.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      </main>
      <Footer />
    </div>
  );
};

export default OfficersPage;

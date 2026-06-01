import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Layers, Award, PlusCircle, ArrowRight, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ChaptersPage = () => {
  // ==========================================
  // 📍 EDIT OR ADD REGIONAL CHAPTERS HERE
  // ==========================================
  const activeChapters = [
    {
      id: "01",
      name: "Rock Ridge",
      location: "Ashburn, Virginia",
      meetings: "Meets regularly during the school year. Sync with the central Events tracker for active alignment.",
      openTo: "All regional middle school students (Grades 6–8)",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"]
    },
    {
      id: "02",
      name: "South Riding",
      location: "South Riding, Virginia",
      meetings: "Meets regularly during the school year. Sync with the central Events tracker for active alignment.",
      openTo: "All regional middle school students (Grades 6–8)",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"]
    },
    {
      id: "03",
      name: "Chantilly",
      location: "Chantilly, Virginia",
      meetings: "Meets regularly during the school year. Sync with the central Events tracker for active alignment.",
      openTo: "All regional middle school students (Grades 6–8)",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"]
    },
    {
      id: "04",
      name: "McLean",
      location: "McLean, Virginia",
      meetings: "Meets regularly during the school year. Sync with the central Events tracker for active alignment.",
      openTo: "All regional middle school students (Grades 6–8)",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"]
    }
    // 💡 TO ADD A NEW CHAPTER:
    // Copy a bracket block above, paste it right here, add a comma, and update the values!
  ];

  // ==========================================
  // 🚀 EXPANSION WORKFLOW STEPS CONTEXT
  // ==========================================
  const stepsToLaunch = [
    {
      num: "1",
      title: "Submit Request",
      desc: "Complete our comprehensive intake form detailing your regional target profile and leadership core."
    },
    {
      num: "2",
      title: "Strategic Sync",
      desc: "Our board schedules an onboarding orientation to detail curriculum integration and administrative logistics."
    },
    {
      num: "3",
      title: "Deploy Workspace",
      desc: "Gain instant access to our standardized seminar manuals, branding assets, and cohort models."
    },
    {
      num: "4",
      title: "Scale Impact",
      desc: "Launch your introductory micro-workshops and systematically build out the localized pipeline."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center border-b border-border/40">
        <div className="container px-4 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
            Northern Virginia Core
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4 text-foreground">
            Our Regional Chapters
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Speech Spark deploys structured local networks across Northern Virginia. Explore active academic clusters driven by top circuit competitors.
          </p>
        </div>
      </section>

      {/* Chapters Grid Layout */}
      <section className="py-12 md:py-20">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeChapters.map((chapter) => (
              <div 
                key={chapter.id} 
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {/* Card Header styling */}
                <div className="bg-muted/30 px-6 py-6 border-b border-border">
                  <span className="text-xs font-bold text-accent uppercase tracking-widest block mb-1">
                    Chapter {chapter.id}
                  </span>
                  <h2 className="text-2xl font-extrabold font-display text-foreground tracking-tight">
                    {chapter.name}
                  </h2>
                </div>

                {/* Card Body Information details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 border-b border-border/50 pb-2.5 text-sm">
                      <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-foreground block">Location</span>
                        <span className="text-muted-foreground">{chapter.location}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-b border-border/50 pb-2.5 text-sm">
                      <Calendar className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-foreground block">Schedules</span>
                        <span className="text-muted-foreground">{chapter.meetings}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm">
                      <Users className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-foreground block">Eligibility</span>
                        <span className="text-muted-foreground">{chapter.openTo}</span>
                      </div>
                    </div>
                  </div>

                  {/* Filter / Tags segment */}
                  <div className="bg-muted/20 border border-border/60 p-4 rounded-xl space-y-2.5">
                    <h4 className="text-xs font-black tracking-wider text-foreground uppercase flex items-center gap-1.5">
                      <Layers className="h-3.5 w-3.5 text-accent" /> Program Offerings
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {chapter.activities.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="bg-background text-foreground border border-border px-2.5 py-0.5 rounded-full text-xs font-medium shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground text-center italic pt-2">
                    * Registration tracking and attendance metrics for this branch are synchronized via our primary schedules dashboard.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Expanded Chapter Incubation CTA */}
          <div className="mt-16 md:mt-24 border border-dashed border-accent/40 rounded-2xl bg-card p-8 md:p-12 text-center shadow-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold bg-accent/10 text-accent rounded-full mb-4 border border-accent/20">
              <PlusCircle className="h-3 w-3" /> Scale Our Network
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-foreground mb-3">
              Don't See Your Area Represented?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-10">
              Speech Spark scales through high-impact, peer-led expansion modules. If you are a high school varsity forensics competitor passionate about leadership, explore how to establish a curriculum anchor framework in your immediate district.
            </p>

            {/* Structured workflow steps layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
              {stepsToLaunch.map((step, index) => (
                <div key={index} className="bg-muted/30 border border-border/60 rounded-xl p-5 relative">
                  <div className="w-8 h-8 rounded-full bg-accent text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
                    {step.num}
                  </div>
                  <h4 className="text-sm font-bold text-foreground mb-1 font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="https://forms.gle/QuUSh2uAfCKc61mD6" target="_blank" rel="noopener noreferrer">
                <Button variant="accent" className="font-bold tracking-wide shadow-sm cursor-pointer">
                  Apply to Initialize a Chapter <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Global Page Footer */}
      <footer className="bg-muted/50 border-t border-border/60 py-12">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-6 space-y-3">
              <h3 className="text-xl font-bold font-display text-foreground">
                Speech<span className="text-accent">Spark</span>
              </h3>
              <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
                A student-led nonprofit empowering middle schoolers to discover the power of their voice through public speaking education.
              </p>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Get Involved</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://forms.gle/QuUSh2uAfCKc61mD6" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Start a Chapter</a></li>
                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSctVPQXMNjukjRq4yW74_3fAGznTeCJLipxUFQ9odL3Wd5j6Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Volunteer</a></li>
              </ul>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-foreground">Contact</h4>
              <a href="mailto:speechsparknova@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1.5">
                <Mail className="h-4 w-4" /> speechsparknova@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ChaptersPage;

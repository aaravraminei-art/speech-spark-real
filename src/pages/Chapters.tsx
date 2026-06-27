import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Users, Layers, PlusCircle, ArrowRight } from "lucide-react";
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
      meetings: "Meets regularly during the school year. Check the Events page for upcoming dates.",
      openTo: "Students in grades 4–9",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"],
      joinFormLink: "https://forms.gle/QuUSh2uAfCKc61mD6",
      members: [
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" }
      ]
    },
    {
      id: "02",
      name: "South Riding",
      location: "South Riding, Virginia",
      meetings: "Meets regularly during the school year. Check the Events page for upcoming dates.",
      openTo: "Students in grades 4–9",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"],
      joinFormLink: "https://forms.gle/QuUSh2uAfCKc61mD6",
      members: [
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" }
      ]
    },
    {
      id: "03",
      name: "Chantilly",
      location: "Chantilly, Virginia",
      meetings: "Meets regularly during the school year. Check the Events page for upcoming dates.",
      openTo: "Students in grades 4–9",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"],
      joinFormLink: "https://forms.gle/QuUSh2uAfCKc61mD6",
      members: [
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" }
      ]
    },
    {
      id: "04",
      name: "McLean",
      location: "McLean, Virginia",
      meetings: "Meets regularly during the school year. Check the Events page for upcoming dates.",
      openTo: "Students in grades 4–9",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"],
      joinFormLink: "https://forms.gle/QuUSh2uAfCKc61mD6",
      members: [
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" }
      ]
    },
    {
      id: "05",
      name: "Herndon",
      location: "Herndon, Virginia",
      meetings: "Meets regularly during the school year. Check the Events page for upcoming dates.",
      openTo: "Students in grades 4–9",
      activities: ["Speech Workshops", "Internal Showcases", "Peer Coaching", "Debate Practice", "Impromptu Speaking"],
      joinFormLink: "https://forms.gle/QuUSh2uAfCKc61mD6",
      members: [
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" },
        { name: "Member Name", image: "" }
      ]
    }
    // 💡 TO ADD A NEW CHAPTER: copy a block above, paste it here, add a comma, update values.
  ];

  // ==========================================
  // 🚀 ORIGINAL STEPS FROM THE OLD WEBSITE
  // ==========================================
  const stepsToLaunch = [
    {
      num: "1",
      title: "Apply",
      desc: "Fill out our chapter interest form with your school and vision."
    },
    {
      num: "2",
      title: "Connect",
      desc: "We'll schedule a call and walk you through the launch process."
    },
    {
      num: "3",
      title: "Launch",
      desc: "Get resources, support, and your first event planned."
    },
    {
      num: "4",
      title: "Grow",
      desc: "Build your chapter, host events, and make an impact."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center border-b border-border/40">
          <div className="container px-4 mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
              Northern Virginia
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4 text-foreground">
              Our Chapters
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Speech Spark currently operates four active chapters in Northern Virginia, with plans to grow.
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
                          <span className="font-bold text-foreground block">Meetings</span>
                          <span className="text-muted-foreground">{chapter.meetings}</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 text-sm">
                        <Users className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                        <div>
                          <span className="font-bold text-foreground block">Open To</span>
                          <span className="text-muted-foreground">{chapter.openTo}</span>
                        </div>
                      </div>
                    </div>

                    {/* Filter / Tags segment */}
                    <div className="bg-muted/20 border border-border/60 p-4 rounded-xl space-y-2.5">
                      <h4 className="text-xs font-black tracking-wider text-foreground uppercase flex items-center gap-1.5">
                        <Layers className="h-3.5 w-3.5 text-accent" /> Chapter Activities
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

                    {/* Members preview */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-black tracking-wider text-foreground uppercase flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5 text-accent" /> Chapter Members
                      </h4>
                      <div className="grid grid-cols-4 gap-3">
                        {chapter.members.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <div className="aspect-square rounded-full bg-muted border border-border overflow-hidden flex items-center justify-center mb-1.5">
                              {m.image ? (
                                <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xs font-bold text-muted-foreground/60">Photo</span>
                              )}
                            </div>
                            <span className="block text-[10px] text-muted-foreground truncate">{m.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-border/40">
                      <a href={chapter.joinFormLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="accent" size="sm" className="w-full font-bold">
                          Join this Chapter <ArrowRight className="ml-1.5 h-4 w-4" />
                        </Button>
                      </a>
                      <a href="/events" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full font-bold">
                          View Events
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 📋 RESTORED: Exact Bottom CTA text and 4 clean steps from the old website */}
            <div className="mt-16 md:mt-24 border-2 border-dashed border-accent rounded-2xl bg-card p-8 md:p-12 text-center shadow-xs">
              <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight text-accent mb-3">
                Don't See Your Area?
              </h3>
              <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base leading-relaxed mb-10">
                Speech Spark is growing! If you're a high schooler passionate about public speaking and want to bring a chapter to a school near you, we want to hear from you.
              </p>

              {/* Reverted Workflow Steps Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-8">
                {stepsToLaunch.map((step, index) => (
                  <div key={index} className="bg-muted/30 border border-border/60 rounded-xl p-5 text-center">
                    <div className="w-11 h-11 rounded-full bg-accent text-white font-black text-lg flex items-center justify-center mb-3 mx-auto shadow-xs">
                      {step.num}
                    </div>
                    <h4 className="text-sm font-extrabold text-foreground mb-1 font-display uppercase tracking-wide">
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
                    Apply to Start a Chapter <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ChaptersPage;

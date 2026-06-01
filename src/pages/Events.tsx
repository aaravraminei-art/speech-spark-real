import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, MapPin, Clock, Mail, CalendarDays, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // ==========================================
  // 📝 EDIT OR ADD UPCOMING EVENTS HERE
  // ==========================================
  const upcomingEvents = [
    {
      month: "JUN",
      day: "22–26",
      year: "2026",
      tag: "Summer Camp",
      title: "Debate Summer Camp",
      chapter: "Brambleton Library (Eagle Ridge Chapter)",
      time: "2:00 PM - 4:00 PM daily",
      description: "Five days of hands-on debate and public speaking at Brambleton Library, run by competitive student mentors from Thomas Jefferson High School for Science and Technology (TJHSST). Open to anyone in grades 6 through 8. No experience needed at all.",
      expectations: [
        "Public speaking fundamentals",
        "Debate formats & strategy",
        "Live rounds with structured feedback",
        "Confidence & leadership metrics"
      ],
      supplies: [
        "Notebook & writing utensil",
        "Water bottle & personal snacks",
        "A collaborative, open mindset"
      ],
      limit: "Limited to the first 40 student registrations.",
      formLink: "https://forms.gle/xDjkDfVY9oP1EBw5A"
    },
    {
      month: "JUN-JUL",
      day: "29–3",
      year: "2026",
      tag: "Summer Camp",
      title: "MUN Summer Camp & Regional Competition",
      chapter: "Brambleton Library (SHMS Chapter)",
      time: "Jun 29–Jul 2: 2–4 PM · Jul 3 (Competition Day): 12–6 PM",
      description: "Four intensive days of core Model United Nations training, culminating in an official, full-scale regional speech and diplomacy competition on July 3rd. Directed by varsity competitors from TJ and Rock Ridge High School. Open to ages 9 through 15.",
      expectations: [
        "MUN fundamentals & global diplomacy",
        "Mock committee simulations",
        "Advanced public speaking & persuasion",
        "Live tournament participation on Jul 3"
      ],
      supplies: [
        "Notebook & research folder",
        "Water bottle",
        "Ambition to negotiate and lead"
      ],
      limit: "Limited to the first 40 student registrations.",
      formLink: "https://forms.gle/usuSKcMeE1QNSQQ56"
    }
    // 💡 TO ADD A NEW EVENT: 
    // Copy one of the blocks above, paste it right here, add a comma after the previous closing bracket, and change the text!
  ];

  // ==========================================
  // 🕒 EDIT OR ADD PAST EVENTS HERE
  // ==========================================
  const pastEvents = [
    // Leave this empty for now just like the old site, or add items here later using the exact same format as above!
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 text-center border-b border-border/40">
        <div className="container px-4 mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
            What's Happening
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold font-display tracking-tight mb-4 text-foreground">
            Programs & Events
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Workshops, speech showcases, summer camps, and competitions. Discover upcoming academic accelerators run at Speech Spark chapters near you.
          </p>
        </div>
      </section>

      {/* Events Framework Section */}
      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          
          {/* Custom Tab Navigation */}
          <div className="flex gap-2 border-b-2 border-border mb-10">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-6 py-3 font-bold text-sm md:text-base border-b-3 transition-all -mb-[2px] bg-transparent cursor-pointer ${
                activeTab === "upcoming"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-6 py-3 font-bold text-sm md:text-base border-b-3 transition-all -mb-[2px] bg-transparent cursor-pointer ${
                activeTab === "past"
                  ? "border-accent text-accent"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Past Events
            </button>
          </div>

          {/* UPCOMING EVENTS TAB DISPLAY */}
          {activeTab === "upcoming" && (
            <div className="space-y-8">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event, idx) => (
                  <div 
                    key={idx} 
                    className="flex flex-col md:flex-row bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                  >
                    {/* Left Column: Date Callout Block */}
                    <div className="bg-muted/40 md:w-44 flex flex-col justify-center items-center p-6 text-center border-b md:border-b-0 md:border-r border-border min-w-[150px]">
                      <span className="text-xs font-black tracking-widest text-accent uppercase">{event.month}</span>
                      <span className="text-3xl font-black font-display tracking-tight text-foreground my-1">{event.day}</span>
                      <span className="text-xs font-semibold text-muted-foreground tracking-wider">{event.year}</span>
                    </div>

                    {/* Right Column: Event structural details */}
                    <div className="flex-1 p-6 md:p-8 space-y-4">
                      <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-2.5 py-0.5 rounded-md border border-accent/20">
                        {event.tag}
                      </span>
                      <h3 className="text-2xl font-bold font-display tracking-tight text-foreground">
                        {event.title}
                      </h3>
                      
                      {/* Meta Info */}
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent shrink-0" />
                          <span className="text-foreground font-medium">{event.chapter}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-accent shrink-0" />
                          <span>{event.time}</span>
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>

                      {/* What to Expect / What to Bring Grid Layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-border/60">
                        <div className="space-y-2">
                          <h5 className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                            <Sparkles className="h-3.5 w-3.5 text-accent" /> What to Expect
                          </h5>
                          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                            {event.expectations.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                            <BookOpen className="h-3.5 w-3.5 text-accent" /> What to Bring
                          </h5>
                          <ul className="list-disc pl-4 text-sm text-muted-foreground space-y-1">
                            {event.supplies.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                      </div>

                      {/* Footer Actions of card */}
                      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border/40">
                        <span className="text-xs text-muted-foreground italic">
                          * {event.limit} Questions? <a href="mailto:speechsparknova@gmail.com" className="text-accent underline hover:text-accent/80">speechsparknova@gmail.com</a>
                        </span>
                        <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                          <Button variant="accent" size="sm" className="font-bold tracking-wide">
                            Sign Up <ArrowRight className="ml-1.5 h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-border rounded-2xl p-12 text-center bg-card/40">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-1">No upcoming events</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    We are currently structuring our next seasonal cohort. Check back soon for registration open dates.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* PAST EVENTS TAB DISPLAY */}
          {activeTab === "past" && (
            <div className="space-y-8">
              {pastEvents.length > 0 ? (
                // Past events render exactly the same layout if added to the array
                pastEvents.map((event, idx) => (
                  <div key={idx} className="flex flex-col md:flex-row bg-card rounded-2xl border border-border shadow-sm overflow-hidden opacity-80">
                    <div className="bg-muted/40 md:w-44 flex flex-col justify-center items-center p-6 text-center border-b md:border-b-0 md:border-r border-border min-w-[150px]">
                      <span className="text-xs font-black text-muted-foreground uppercase">{event.month}</span>
                      <span className="text-3xl font-black font-display tracking-tight text-muted-foreground my-1">{event.day}</span>
                      <span className="text-xs font-semibold text-muted-foreground tracking-wider">{event.year}</span>
                    </div>
                    <div className="flex-1 p-6 md:p-8 space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="border border-dashed border-border rounded-2xl p-12 text-center bg-card/40">
                  <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <CalendarDays className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-foreground mb-1">Past events will appear here</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                    Check back after our summer cycles wrap up to view a full strategic history of Speech Spark cohort records.
                  </p>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30 border-t border-border/40">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <div className="bg-card border border-border p-8 md:p-10 rounded-2xl shadow-sm space-y-4">
            <h3 className="text-2xl font-bold font-display text-foreground">Want to Attend an Event?</h3>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base">
              Fill out our global registry tracking forms and we will guarantee your parents stay updated on all local micro-chapters, virtual workshops, and showcase sessions.
            </p>
            <div className="pt-2">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSctVPQXMNjukjRq4yW74_3fAGznTeCJLipxUFQ9odL3Wd5j6Q/viewform?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="font-bold shadow-sm cursor-pointer border-border hover:bg-muted">
                  Get Event Updates <ArrowRight className="ml-1.5 h-4 w-4" />
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

export default EventsPage;

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Landmark } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        
        {/* 1. Hero Section */}
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/40 overflow-hidden">
          <div className="container px-4 mx-auto text-center max-w-4xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-6 leading-tight">
              Empowering the Next Generation of Thinkers and Speakers
            </h1>
            <p className="text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto">
              A student-led academic nonprofit bridging the gap between early fundamentals and elite high school speech, debate, and diplomacy circuits.
            </p>
          </div>
        </section>

        {/* 2. Our Mission Block */}
        <section className="py-16 bg-muted/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="relative rounded-2xl p-8 md:p-12 bg-card border border-border shadow-md overflow-hidden before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-accent">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Speech Spark demystifies public speaking, making advanced forensics, debate, and model UN accessible to every student. By providing mentorship from competitive high school varsity debaters, we empower students to articulate complex concepts with precision, shifting public speaking from a source of anxiety to an exciting academic advantage.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* ⚡️ UPDATED: Replaced "Find Your Voice" text with your official flyer image */}
              <div className="lg:col-span-5 order-last lg:order-first flex justify-center">
                <div className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-md max-w-sm w-full transition-transform hover:scale-[1.01]">
                  <img 
                    src="/speech-spark-logo.jpg" 
                    alt="Speech Spark - Debate, Speech, Communication Logo Flyer" 
                    className="w-full h-auto object-cover display:block"
                  />
                </div>
              </div>

              {/* Story Text */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">
                    How Speech Spark Began
                  </h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Speech Spark was established by competitive forensics competitors who recognized a critical gap in early academic preparation. Remembering the intimidation of their own early presentations, they set out to build the supportive community that they wished had existed when they were in earlier school years.
                  </p>
                  <p>
                    What began as a localized after-school workshop has matured into an active nonprofit organization spanning major chapters across Northern Virginia. Every program we operate is entirely student-led, curriculum-driven, and completely free—built upon the core conviction that elite training shouldn't be gated behind high tuition fees.
                  </p>
                  <p>
                    Our programs train students in structural argumentation, cross-examination strategy, confident body language, nerve management, and spontaneous refutation. These are the exact skills that dictate success in high school speech circuits, academy admissions interviews, and future leadership roles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Values Grid */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border/40">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">
                What Drives Everything We Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-background border-l-4 border-l-accent border-y-border border-r-border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold font-display flex items-center gap-2.5">
                    <Users className="h-5 w-5 text-accent" /> Voice for All
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Introverted, extroverted, or completely new to forensics. We build a personalized path for every student to master self-expression.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-l-4 border-l-accent border-y-border border-r-border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold font-display flex items-center gap-2.5">
                    <Target className="h-5 w-5 text-accent" /> Growth Over Perfection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We don't expect polished performers on day one. We celebrate consistent individual improvement and confidence development.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-l-4 border-l-accent border-y-border border-r-border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold font-display flex items-center gap-2.5">
                    <Shield className="h-5 w-5 text-accent" /> Peer-Led Mentorship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our chapters are directed by high school varsity competitors who are actively competing on local and national circuits. This peer-to-peer alignment creates relatable, high-impact learning environments.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-l-4 border-l-accent border-y-border border-r-border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-bold font-display flex items-center gap-2.5">
                    <Landmark className="h-5 w-5 text-accent" /> Uncompromisingly Free
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    100% of our workshops, strategy seminars, and cohorts are entirely free. No hidden operational costs or material fees.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Interactive FAQ Accordion */}
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">
                Common Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-xl px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-base font-bold font-display hover:no-underline text-foreground py-4">
                  Who can join Speech Spark cohorts?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  Any student in grades 4 through 9 near an active chapter or joining our virtual sessions is welcome. Zero prior experience required.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-border rounded-xl px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-base font-bold font-display hover:no-underline text-foreground py-4">
                  Is there truly no cost to participate?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  Correct. All Speech Spark programs, resources, and evaluation sessions are entirely free. We are a community-backed nonprofit focused exclusively on educational access.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-border rounded-xl px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-base font-bold font-display hover:no-underline text-foreground py-4">
                  How frequently do chapters meet?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  Active regional chapters meet on structured weekly or bi-weekly schedules throughout the school year. Specific times can be viewed on our Chapters directory.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-border rounded-xl px-4 bg-card shadow-sm">
                <AccordionTrigger className="text-base font-bold font-display hover:no-underline text-foreground py-4">
                  How can high school students launch a new chapter?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  We are growing our network carefully! High school varsity speech and debate competitors looking to bring a chapter to their local schools can apply using our form on the Chapters page.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;

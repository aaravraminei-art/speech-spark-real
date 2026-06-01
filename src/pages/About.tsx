import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Users, Landmark, ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* 1. Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 border-b border-border/40 overflow-hidden">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
            About Speech Spark
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-foreground mb-6 leading-tight">
            Empowering the Next Generation of Thinkers and Speakers
          </h1>
          <p className="text-xl text-muted-foreground font-normal leading-relaxed max-w-2xl mx-auto">
            A student-led academic nonprofit bridging the gap between middle school fundamentals and elite high school speech, debate, and diplomacy circuits.
          </p>
        </div>
      </section>

      {/* 2. Our Mission Block */}
      <section className="py-16 bg-muted/20">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="relative rounded-2xl p-8 md:p-12 bg-card border border-border shadow-md overflow-hidden before:absolute before:top-0 before:left-0 before:w-1.5 before:h-full before:bg-accent">
            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-2 block">
              Core Objective
            </span>
            <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Speech Spark demystifies public speaking, making advanced forensics, debate, and model UN accessible to every middle school student. By providing elite mentorship from competitive high school varsity debaters, we empower students to articulate complex concepts with precision, shifting public speaking from a source of anxiety to an unfair academic advantage.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Bento/Placeholder block */}
            <div className="lg:col-span-5 order-last lg:order-first">
              <div className="relative rounded-2xl border border-border bg-gradient-to-br from-muted/50 to-muted p-8 text-center flex flex-col justify-center items-center min-h-[300px] shadow-sm">
                <div className="text-4xl md:text-5xl font-black tracking-tighter font-display text-foreground leading-none mb-4">
                  Find Your<br />Voice.
                </div>
                <div className="text-sm font-semibold text-muted-foreground bg-background px-4 py-1.5 rounded-full border border-border/60">
                  Student-led • Free • Northern Virginia
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-2">
                  Our Foundation
                </span>
                <h2 className="text-3xl font-bold font-display tracking-tight text-foreground">
                  How Speech Spark Began
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Speech Spark was established by competitive forensics competitors who recognized a critical gap in early academic preparation. Remembering the intimidation of their own early presentations, they set out to build an intensive, yet highly supportive incubator that they wished had existed when they were in middle school.
                </p>
                <p>
                  What began as a localized after-school workshop has matured into an active nonprofit organization spanning major chapters across Northern Virginia. Every program we operate is entirely student-led, curriculum-driven, and completely free—built upon the core conviction that elite training shouldn't be gated behind high tuition fees.
                </p>
                <p>
                  Our comprehensive modules train students in structural argumentation, cross-examination strategy, strategic eye contact, physiological nerve management, and spontaneous refutation. These are the exact skills that dictate success in high school speech circuits, magnet academy admissions interviews, and future leadership roles.
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
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-2">
              Our Values
            </span>
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
                  Introverted, extroverted, or completely new to forensics. We build a personalized trajectory for every student to master self-expression.
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
                  We don't expect polished performers on day one. We celebrate metrics of consistent strategic improvement and analytical development.
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
                  Our chapters are directed by high school varsity competitors who are actively winning on local and national circuits. This peer-to-peer alignment creates relatable, high-impact learning environments.
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
                  100% of our core workshops, strategy seminars, and cohorts are entirely free. No hidden operational costs, no equipment fees.
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
            <span className="text-xs font-bold tracking-widest text-accent uppercase block mb-2">
              FAQ
            </span>
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
                Any middle school student in grades 6 through 8 near an active chapter or joining our virtual intensives is welcome. Zero prior experience required.
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
                Active regional chapters sync on structured weekly or bi-weekly schedules throughout the academic calendar. Specific regional times can be viewed on our Chapters directory.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-xl px-4 bg-card shadow-sm">
              <AccordionTrigger className="text-base font-bold font-display hover:no-underline text-foreground py-4">
                How can high school students launch a new chapter?
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                We are scaling our network intentionally. High school varsity speech and debate competitors looking to deploy a chapter at their local middle schools can access our chapter framework onboarding portal below.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 6. Footer Integrations Component Context */}
      <footer className="bg-muted/50 border-t border-border/60 py-12">
        <div className="container px-4 mx-auto max-w-5xl">
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
                <li>
                  <a href="https://forms.gle/QuUSh2uAfCKc61mD6" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                    Start a Chapter <ArrowRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSctVPQXMNjukjRq4yW74_3fAGznTeCJLipxUFQ9odL3Wd5j6Q/viewform?usp=sharing&ouid=103474200287623671979" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1">
                    Volunteer <ArrowRight className="h-3 w-3" />
                  </a>
                </li>
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

export default AboutPage;

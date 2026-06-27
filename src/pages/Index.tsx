import { Link } from "react-router-dom";
import { GraduationCap, CreditCard, Phone, Mail, Instagram, ArrowRight, Heart } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  // 💡 Replace this link with your real payment URL (Venmo / Stripe / PayPal)
  const paymentLink = "https://venmo.com/";
  // 💡 Replace with your 1-on-1 tutoring signup Google Form
  const tutoringFormLink = "https://forms.gle/QuUSh2uAfCKc61mD6";

  const stats = [
    { stat: "250+", label: "Students Reached" },
    { stat: "5+", label: "Camps Hosted" },
    { stat: "30", label: "Active Members" },
    { stat: "5", label: "Chapters" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustBadges />

        {/* Mission Statement */}
        <section className="section-padding bg-muted/30 border-y border-border/40">
          <div className="container-custom max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
              <Heart className="h-3.5 w-3.5" /> Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mb-5 text-foreground">
              Empowering young voices, one student at a time.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Speech Spark is a student-led nonprofit dedicated to making competitive
              speech and debate accessible to every student in grades 4–9. Through free
              camps, weekly chapters, and one-on-one coaching, we help young speakers
              build the confidence and critical thinking skills that last a lifetime.
            </p>
          </div>
        </section>

        {/* Updated Stats */}
        <section className="section-padding">
          <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label} className="card-elevated p-8 card-hover">
                <div className="text-4xl md:text-5xl font-bold font-display text-accent mb-2">{s.stat}</div>
                <div className="text-muted-foreground font-medium text-sm md:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <ServicesSection />
        <WhyUsSection />
        <GallerySection />

        {/* 1-on-1 Tutoring + Payment */}
        <section className="section-padding bg-muted/20 border-y border-border/40">
          <div className="container-custom max-w-5xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tutoring sign-up */}
              <div className="card-elevated p-8 md:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">
                  One-on-One Tutoring
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  Want personalized coaching? Sign up for private 1-on-1 tutoring with one
                  of our experienced student coaches. We'll tailor sessions to your goals —
                  speech writing, delivery, debate strategy, and more.
                </p>
                <a href={tutoringFormLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="accent" className="w-full font-bold">
                    Sign Up for Tutoring <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* Payment */}
              <div className="card-elevated p-8 md:p-10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                  <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-extrabold font-display text-foreground mb-3">
                  Pay for Tutoring
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  Already signed up? Pay securely online for your tutoring sessions or
                  support Speech Spark with a contribution that helps keep our camps free.
                </p>
                <a href={paymentLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full font-bold">
                    Pay Now <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase bg-accent/10 text-accent rounded-full mb-6 border border-accent/20">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mb-4 text-foreground">
              Get in touch with Speech Spark
            </h2>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
              Questions about a chapter, camp, or tutoring? Reach out — we'd love to hear from you.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="tel:5713891747"
                className="card-elevated p-6 card-hover flex flex-col items-center gap-2"
              >
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Phone</span>
                <span className="font-semibold text-foreground">(571) 389-1747</span>
              </a>
              <a
                href="mailto:speechsparknova@gmail.com"
                className="card-elevated p-6 card-hover flex flex-col items-center gap-2"
              >
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</span>
                <span className="font-semibold text-foreground text-sm break-all">speechsparknova@gmail.com</span>
              </a>
              <a
                href="https://instagram.com/speechspark"
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated p-6 card-hover flex flex-col items-center gap-2"
              >
                <Instagram className="h-5 w-5 text-accent" />
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Instagram</span>
                <span className="font-semibold text-foreground">@speechspark</span>
              </a>
            </div>

            <div className="mt-10">
              <Link to="/chapters">
                <Button variant="ghost" className="font-bold">
                  Explore our chapters <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

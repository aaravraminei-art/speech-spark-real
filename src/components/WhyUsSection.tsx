import { CheckCircle, HeartHandshake, School, Sparkles, Trophy, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const reasons = [
  {
    icon: Wallet,
    title: "Completely Free",
    description: "Speech Spark is a non-profit student-led initiative. Families pay nothing: no tuition, no materials fee, no late charges."
  },
  {
    icon: School,
    title: "Student-Led by High Schoolers",
    description: "Our coaches are varsity debaters and Model UN delegates, so students get advice from people who are still actively competing."
  },
  {
    icon: Sparkles,
    title: "Relatable Coaching",
    description: "We remember being brand-new, confused, and nervous in round. That makes our explanations practical, accurate, and easier to follow."
  },
  {
    icon: Trophy,
    title: "Goated at Debate",
    description: "Our officers include state and national qualifiers who have placed locally and nationally in debate and Model UN spaces."
  },
  {
    icon: Users,
    title: "Small-Group Practice",
    description: "Students work in focused groups on speeches, flowing, cross-examination, refutation, research, and mock rounds."
  },
  {
    icon: HeartHandshake,
    title: "We Help Students Go Further",
    description: "We were once in their position, and our goal is to help students reach where we are now and go even further."
  }
];

const WhyUsSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4">WHY CHOOSE US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
            Why Speech Spark works
          </h2>
          <p className="text-lg text-primary-foreground/80">
            Debate should not cost thousands to learn. We bring clear, competitive, beginner-friendly coaching directly to schools.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4">
                <reason.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/75">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-primary-foreground/80 mb-4 text-lg">
            Ready to bring free debate coaching to your school?
          </p>
          <a href="#contact-form">
            <Button variant="hero" size="xl">
              <CheckCircle className="h-5 w-5" />
              Sign Up Here
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

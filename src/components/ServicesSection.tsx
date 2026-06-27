import { CircleCheck, Gavel, Globe2, Landmark, Scale, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Landmark,
    title: "Policy Debate",
    description: "Students learn plans, advantages, disadvantages, cross-examination, and how to build organized evidence-based speeches for a year-long topic.",
    features: ["1AC structure", "Flowing basics", "Evidence comparison"]
  },
  {
    icon: Users,
    title: "Public Forum",
    description: "A partner debate format focused on current events, clear speaking, weighing, rebuttal strategy, and judge persuasion.",
    features: ["Collaborative case writing", "Summary speeches", "Final focus drills"]
  },
  {
    icon: Scale,
    title: "Lincoln-Douglas",
    description: "A prestigious, one-on-one format centered on philosophy, values, and ethics. Teaches students how to construct deep logical frameworks and clash respectfully.",
    features: ["Philosophical frameworks", "Value-criterion debate", "Rebuttal strategy"]
  },
  {
    icon: Gavel,
    title: "Congressional Debate",
    description: "Congressional debate simulates the U.S. legislative process. Students act as senators and representatives, learning how to analyze legislation, cross-examine peers, and command a chamber room.",
    features: ["Legislation analysis", "Authorship speeches", "Parliamentary procedure"]
  },
  {
    icon: Globe2,
    title: "Model UN",
    description: "Delegates learn research, resolution writing, moderated caucuses, diplomacy, and public speaking for committees.",
    features: ["Position papers", "Caucus practice", "Resolution writing"]
  },
  {
    icon: Trophy,
    title: "Tournament Prep",
    description: "Mock rounds, feedback, ballot reading, speaking drills, and prep habits for students ready to compete.",
    features: ["Mock ballots", "Crossfire drills", "Round strategy"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold mb-4">OUR SERVICES</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-foreground mb-6">
            Debate formats we teach
          </h2>
          <p className="text-lg text-muted-foreground">
  Speech Spark brings elite speech and debate training to students. Led by competitive debaters from Thomas Jefferson High School for Science and Technology (TJHSST), we bridge the gap between early speaking confidence and high school academic readiness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-elevated card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground" />
              </div>
              
              <h3 className="text-xl font-bold font-display text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <CircleCheck className="h-4 w-4 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure where to start? We place beginners into small groups and build from the basics.
          </p>
          <a href="#contact-form">
            <Button variant="accent" size="lg">
              Sign Up Here
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import { Award, BookOpen, Clock, Mic2, School, Users } from "lucide-react";

const badges = [
  {
    icon: School,
    value: "4–9",
    label: "Grades",
    subtext: "Beginner-friendly"
  },
  {
    icon: Clock,
    value: "1-2 hr",
    label: "Camp Sessions",
    subtext: "In person"
  },
  {
    icon: Users,
    value: "Small",
    label: "Group Coaching",
    subtext: "Practice-heavy"
  },
  {
    icon: BookOpen,
    value: "6",
    label: "Formats",
    subtext: "Debate + MUN"
  },
  {
    icon: Award,
    value: "State",
    label: "Qualifiers",
    subtext: "National qualifiers too"
  },
  {
    icon: Mic2,
    value: "Free",
    label: "No Fees",
    subtext: "Volunteer coaches"
  }
];

const TrustBadges = () => {
  return (
    <section className="bg-secondary py-12 border-y border-border">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="text-center p-4 rounded-xl hover:bg-card transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent mb-3">
                <badge.icon className="h-6 w-6" />
              </div>
              <div className="text-2xl font-bold font-display text-foreground">
                {badge.value}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {badge.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;

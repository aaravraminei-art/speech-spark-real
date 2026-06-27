import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-accent text-accent-foreground relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-6">
              Bring Speech Spark to your school.
            </h2>
            <p className="text-xl text-accent-foreground/90 mb-8">
              We are planning free 1-2 hour in-person summer debate camps at partner schools, with small groups, mock rounds, and beginner-friendly coaching.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact-form">
                <Button 
                  size="xl" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg font-bold"
                >
                  Sign Up Here
                </Button>
              </a>
              <a href="tel:5713891747">
                <Button 
                  size="xl" 
                  variant="outline"
                  className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 bg-transparent"
                >
                  Call 5713891747
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="bg-primary/20 backdrop-blur-sm rounded-2xl p-8 border border-primary/30">
            <h3 className="text-2xl font-bold font-display mb-6">Program Contact</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">5713891747</p>
                  <p className="text-accent-foreground/75">Speech Spark contact number</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">FILL IN SCHOOL / CAMP SITE HERE</p>
                  <p className="text-accent-foreground/75">Partner schools across Northern Virginia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">FILL IN SUMMER CAMP DATES HERE</p>
                  <p className="text-accent-foreground/75">1-2 hour in-person sessions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-lg">FILL IN EMAIL HERE</p>
                  <p className="text-accent-foreground/75">For school, PTA, and family questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

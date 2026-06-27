import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding !py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-lg font-bold text-accent-foreground">S</span>
              </div>
              <div>
                <h3 className="font-bold font-display">Speech Spark</h3>
                <p className="text-xs text-primary-foreground/70">Free debate camps</p>
              </div>
            </div>
            <p className="text-primary-foreground/75 text-sm mb-4">
              A non-profit, student-led public speaking and debate program for students in grades 4 through 9.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-warning text-lg">★</span>
              <span className="font-semibold">Free</span>
              <span className="text-primary-foreground/60">student-led coaching</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-display mb-4">Debate Types</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li><a href="#services" className="hover:text-accent transition-colors">Policy Debate</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Public Forum</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Lincoln-Douglas</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Congressional Debate</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Model UN</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Tournament Prep</a></li>
            </ul>
          </div>

          {/* Program Info */}
          <div>
            <h4 className="font-bold font-display mb-4">Program Info</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/75">
              <li>Grades 4–9</li>
              <li>Free for families</li>
              <li>1-2 hour sessions</li>
              <li>Partner schools</li>
              <li>Small-group practice</li>
              <li>Beginner friendly</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold font-display mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:5713891747" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                5713891747
              </a>
              <a href="mailto:fill-in-email@example.com" className="flex items-center gap-3 text-sm hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                speechsparknova@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/75">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>FILL IN SCHOOL / CAMP SITE HERE<br />Partner schools</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Speech Spark. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

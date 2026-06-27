import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, CheckCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const heroImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80";

// Sample list of local schools (you can edit or add more names to this array)
const SCHOOL_OPTIONS = [
  "Longfellow Middle School",
  "Carson Middle School",
  "Kilmer Middle School",
  "Cooper Middle School",
  "Frost Middle School",
  "Thomas Jefferson High School (TJHSST)",
  "McLean High School",
  "Langley High School",
  "Oakton High School",
  "Marshall High School"
];

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    grade: "",       // Track selected grade
    school: "",      // Track selected school from dropdown
    customSchool: "",// Track custom school name if "Other" is picked
    inquiry: "",
    message: ""
  });

  const [isCustomSchool, setIsCustomSchool] = useState(false);

  const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, school: value });
    
    // If they click "Add School / Other", show the manual input field
    if (value === "other") {
      setIsCustomSchool(true);
    } else {
      setIsCustomSchool(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Determine the final school name to submit
    const finalSchool = isCustomSchool ? formData.customSchool : formData.school;
    
    console.log("Submitting Signup Data:", {
      ...formData,
      school: finalSchool
    });

    toast.success("Thanks! Speech Spark will follow up about camp details.");
    
    // Reset form
    setFormData({ name: "", phone: "", email: "", grade: "", school: "", customSchool: "", inquiry: "", message: "" });
    setIsCustomSchool(false);
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Students working together during a public speaking class" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className="text-primary-foreground animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Free in-person debate camps for grades 4–9</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight">
              Grades 4–9 debate, taught by{" "}
              <span className="text-accent">students who compete</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 max-w-xl">
              Speech Spark brings a free, in-person public speaking and debate program to schools, led by varsity debaters and Model UN delegates from TJHSST.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              {["Policy, PF, LD, Congress & MUN", "Beginner-friendly", "1-2 hour school sessions"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:5713891747">
                <Button variant="hero" size="xl">
                  <Phone className="h-5 w-5" />
                  571-389-1747
                </Button>
              </a>
              <a href="#services">
                <Button variant="hero-outline" size="xl">
                  Explore Debate Types
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div id="contact-form" className="card-elevated p-8 animate-fade-up bg-card rounded-2xl border border-border" style={{ animationDelay: "0.2s" }}>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-display text-foreground mb-2">
                Sign Up Here
              </h2>
              <p className="text-sm text-muted-foreground">
                Register your student or submit a school program inquiry
              </p>
            </div>

            <div className="space-y-4">
              {/* Official Google Sign In Button Container */}
              <div className="flex justify-center w-full [&_iframe]:w-full">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    if (credentialResponse.credential) {
                      const userData: any = jwtDecode(credentialResponse.credential);
                      const userEmail = userData.email;
                      const userName = userData.name;

                      setFormData((prev) => ({
                        ...prev,
                        name: userName || "",
                        email: userEmail || ""
                      }));

                      toast.success(`Hey ${userName}, successfully authenticated! We've filled out your name and email.`);
                    }
                  }}
                  onError={() => {
                    console.error("Google Sign-In failed");
                    toast.error("Authentication failed. Please try again.");
                  }}
                  theme="outline"
                  size="large"
                  shape="rectangular"
                  width="100%"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground py-1">
                <span className="h-px flex-1 bg-border" />
                <span>or fill out the form</span>
                <span className="h-px flex-1 bg-border" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Student Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  placeholder="Parent / Guardian Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
                
                {/* 🎓 New Grade Dropdown Selector */}
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  required
                  className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select Grade Level</option>
                  <option value="4th">4th Grade</option>
                  <option value="5th">5th Grade</option>
                  <option value="6th">6th Grade</option>
                  <option value="7th">7th Grade</option>
                  <option value="8th">8th Grade</option>
                  <option value="9th">9th Grade</option>
                  <option value="10th">10th Grade</option>
                  <option value="11th">11th Grade</option>
                  <option value="12th">12th Grade</option>
                </select>

                {/* 🏫 New School Dropdown Selector */}
                <select
                  value={formData.school}
                  onChange={handleSchoolChange}
                  required
                  className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select Middle or High School</option>
                  {SCHOOL_OPTIONS.map((school) => (
                    <option key={school} value={school}>{school}</option>
                  ))}
                  <option value="other">➕ Add School / Other</option>
                </select>

                {/* 📝 Hidden Text field that pops up ONLY if "Other" is chosen */}
                {isCustomSchool && (
                  <Input
                    placeholder="Type Name of School"
                    value={formData.customSchool}
                    onChange={(e) => setFormData({ ...formData, customSchool: e.target.value })}
                    required
                    className="h-12 border-accent/50 focus-visible:ring-accent animate-fade-in"
                  />
                )}

                <select
                  value={formData.inquiry}
                  onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                  required
                  className="h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select Inquiry Type</option>
                  <option value="student">Student / Family Signup</option>
                  <option value="school">School / Educator Inquiry</option>
                  <option value="pta">PTA / Partner Inquiry</option>
                </select>
                
                <Textarea
                  placeholder="Please describe any prior debate experience, preferred camp dates, or key questions."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                  required
                />
                
                <Button type="submit" variant="accent" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Submit Free Camp Interest
                </Button>
              </form>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              Free program. No tuition, no materials fee, no late charges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

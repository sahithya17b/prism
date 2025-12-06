import { Link } from "react-router-dom";
import { ArrowRight, Music, Lightbulb, Trophy, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import MemberCard from "@/components/MemberCard";
import EventCard from "@/components/EventCard";

import prismLogo from "@/assets/prism-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import eventMusic from "@/assets/event-music.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventInnovation from "@/assets/event-innovation.jpg";

const pillars = [
  { icon: Sparkles, label: "Recreation", color: "text-prism-amber", description: "Fun activities and team bonding" },
  { icon: Lightbulb, label: "Innovation", color: "text-prism-cyan", description: "Tech workshops and hackathons" },
  { icon: Trophy, label: "Sports", color: "text-prism-emerald", description: "Athletic events and tournaments" },
  { icon: Music, label: "Music", color: "text-prism-pink", description: "Concerts and talent shows" },
];

const upcomingEvents = [
  {
    title: "Rhythm Night 2024",
    date: "December 15, 2024",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "An evening of live music performances featuring campus bands and solo artists.",
    image: eventMusic,
    category: "Music",
  },
  {
    title: "Inter-College Sports Fest",
    date: "December 20, 2024",
    time: "9:00 AM",
    location: "Sports Complex",
    description: "Annual sports competition featuring basketball, volleyball, and athletics.",
    image: eventSports,
    category: "Sports",
  },
  {
    title: "Innovation Summit",
    date: "January 5, 2025",
    time: "10:00 AM",
    location: "Tech Hub, Block B",
    description: "24-hour hackathon with industry mentors and exciting prizes.",
    image: eventInnovation,
    category: "Innovation",
  },
];

const faculty = [
  {
    name: "Dr. Mallareddy",
    role: "Club Patron",
    image: faculty1,
    description: "Guiding PRISM with visionary leadership and unwavering support for student initiatives.",
  },
  {
    name: "Dr. Suresh Kumar",
    role: "Principal",
    image: faculty2,
    description: "Championing holistic development through extracurricular excellence.",
  },
  {
    name: "Prof. Rajesh Sharma",
    role: "Head of Department",
    image: faculty3,
    description: "Fostering innovation and creativity among students through PRISM activities.",
  },
  {
    name: "Ms. Priya Nair",
    role: "Faculty Coordinator",
    image: faculty4,
    description: "Bridging students and faculty to make every PRISM event a success.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="PRISM Hero" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-prism-violet/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-prism-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-prism-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-slide-up">
            <img src={prismLogo} alt="PRISM Logo" className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 animate-pulse-glow rounded-2xl" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">PRISM</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              People in Recreation, Innovation, Sports & Music
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Where passion meets potential. Join the most vibrant student community and discover your extraordinary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/events">
                <Button variant="hero" size="xl">
                  Explore Events <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/team">
                <Button variant="glass" size="xl">
                  Meet Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What is PRISM?"
            subtitle="Four pillars that define the spirit of our student community"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.label}
                className="prism-card text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center ${pillar.color}`}>
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{pillar.label}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Upcoming Events"
            subtitle="Don't miss out on the excitement! Here's what's happening next."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {upcomingEvents.map((event) => (
              <EventCard key={event.title} {...event} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/events">
              <Button variant="outline" size="lg">
                View All Events <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Guiding Stars"
            subtitle="The faculty members who inspire and support PRISM's mission"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((member, index) => (
              <div key={member.name} className="prism-card text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary/30"
                />
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-prism-violet/20 via-prism-cyan/10 to-prism-pink/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
            Ready to Join PRISM?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Be part of something extraordinary. Connect with like-minded students and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Get in Touch
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="glass" size="xl">
                Member Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

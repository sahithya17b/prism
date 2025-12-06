import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

import eventMusic from "@/assets/event-music.jpg";
import eventSports from "@/assets/event-sports.jpg";
import eventInnovation from "@/assets/event-innovation.jpg";
import eventCultural from "@/assets/event-cultural.jpg";

const allEvents = [
  {
    title: "Rhythm Night 2024",
    date: "December 15, 2024",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "An evening of live music performances featuring campus bands and solo artists. Experience the best of campus musical talent.",
    image: eventMusic,
    category: "Music",
    isPast: false,
  },
  {
    title: "Inter-College Sports Fest",
    date: "December 20, 2024",
    time: "9:00 AM",
    location: "Sports Complex",
    description: "Annual sports competition featuring basketball, volleyball, athletics, and more. Compete for glory!",
    image: eventSports,
    category: "Sports",
    isPast: false,
  },
  {
    title: "Innovation Summit 2025",
    date: "January 5, 2025",
    time: "10:00 AM",
    location: "Tech Hub, Block B",
    description: "24-hour hackathon with industry mentors, exciting prizes, and networking opportunities.",
    image: eventInnovation,
    category: "Innovation",
    isPast: false,
  },
  {
    title: "Cultural Fiesta",
    date: "January 15, 2025",
    time: "5:00 PM",
    location: "Open Air Theatre",
    description: "A celebration of diversity through dance, music, and art from various cultures.",
    image: eventCultural,
    category: "Cultural",
    isPast: false,
  },
  {
    title: "Battle of Bands",
    date: "October 20, 2024",
    time: "6:00 PM",
    location: "Main Auditorium",
    description: "Campus bands competed for the title of Best Band of the Year.",
    image: eventMusic,
    category: "Music",
    isPast: true,
  },
  {
    title: "Code Sprint 2024",
    date: "September 15, 2024",
    time: "9:00 AM",
    location: "Computer Lab",
    description: "Competitive programming event with algorithmic challenges.",
    image: eventInnovation,
    category: "Innovation",
    isPast: true,
  },
  {
    title: "Cricket Tournament",
    date: "August 25, 2024",
    time: "8:00 AM",
    location: "Cricket Ground",
    description: "Inter-department cricket tournament with exciting matches.",
    image: eventSports,
    category: "Sports",
    isPast: true,
  },
  {
    title: "Fresher's Welcome",
    date: "July 30, 2024",
    time: "4:00 PM",
    location: "Main Auditorium",
    description: "Welcome event for new students with performances and fun activities.",
    image: eventCultural,
    category: "Cultural",
    isPast: true,
  },
];

const categories = ["All", "Music", "Sports", "Innovation", "Cultural", "Recreation"];

const Events = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPast, setShowPast] = useState(false);

  const filteredEvents = allEvents.filter((event) => {
    const categoryMatch = activeCategory === "All" || event.category === activeCategory;
    const timeMatch = showPast ? event.isPast : !event.isPast;
    return categoryMatch && timeMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-prism-violet/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">PRISM Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From electrifying concerts to intense hackathons, discover events that ignite your passion and create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "hero" : "ghost"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Time Filter */}
            <div className="flex gap-2">
              <Button
                variant={!showPast ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowPast(false)}
              >
                Upcoming
              </Button>
              <Button
                variant={showPast ? "default" : "ghost"}
                size="sm"
                onClick={() => setShowPast(true)}
              >
                Past Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredEvents.map((event, index) => (
                <div
                  key={event.title + event.date}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No events found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Want to Organize an Event?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Have an idea for an exciting event? Reach out to the PRISM team and let's make it happen!
          </p>
          <Button variant="hero" size="lg">
            Propose an Event
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;

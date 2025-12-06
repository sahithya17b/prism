import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import MemberCard from "@/components/MemberCard";

import faculty1 from "@/assets/faculty-1.jpg";
import faculty2 from "@/assets/faculty-2.jpg";
import faculty3 from "@/assets/faculty-3.jpg";
import faculty4 from "@/assets/faculty-4.jpg";
import member1 from "@/assets/member-1.jpg";
import member2 from "@/assets/member-2.jpg";
import member3 from "@/assets/member-3.jpg";
import member4 from "@/assets/member-4.jpg";
import member5 from "@/assets/member-5.jpg";
import member6 from "@/assets/member-6.jpg";

const facultyMembers = [
  { name: "Dr. Mallareddy", role: "Club Patron", image: faculty1, color: "from-prism-violet to-prism-pink" },
  { name: "abc", role: "Principal", image: faculty2, color: "from-prism-cyan to-prism-emerald" },
  { name: "abc", role: "Head of Department", image: faculty3, color: "from-prism-amber to-prism-rose" },
  { name: "abc", role: "Faculty Coordinator", image: faculty4, color: "from-prism-pink to-prism-violet" },
];

const coreTeam = [
  { name: "abc", role: "President", image: member1, color: "from-prism-violet to-prism-cyan" },
  { name: "abc", role: "Vice President", image: member2, color: "from-prism-pink to-prism-rose" },
];

const teamLeads = [
  { name: "abc", role: "Innovation Lead", image: member3, color: "from-prism-cyan to-prism-emerald" },
  { name: "abc", role: "Cultural Lead", image: member4, color: "from-prism-pink to-prism-violet" },
  { name: "abc", role: "Sports Lead", image: member5, color: "from-prism-emerald to-prism-cyan" },
  { name: "abc", role: "Music Lead", image: member6, color: "from-prism-rose to-prism-pink" },
  { name: "abc", role: "Management Lead", image: member1, color: "from-prism-amber to-prism-rose" },
  { name: "abc", role: "PR & Media Lead", image: member2, color: "from-prism-violet to-prism-pink" },
];

const teamMembers = [
  { name: "Abc", role: "Tech Coordinator", image: member3, color: "from-prism-cyan to-prism-emerald" },
  { name: "abc", role: "Design Coordinator", image: member4, color: "from-prism-pink to-prism-violet" },
  { name: "abc", role: "Events Coordinator", image: member5, color: "from-prism-emerald to-prism-cyan" },
  { name: "abc", role: "Social Media Manager", image: member6, color: "from-prism-rose to-prism-pink" },
  { name: "abc", role: "Sports Coordinator", image: member1, color: "from-prism-amber to-prism-rose" },
  { name: "Abc", role: "Cultural Coordinator", image: member2, color: "from-prism-violet to-prism-cyan" },
  { name: "abc", role: "Music Coordinator", image: member3, color: "from-prism-cyan to-prism-pink" },
  { name: "abc", role: "Volunteer Coordinator", image: member4, color: "from-prism-pink to-prism-emerald" },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-prism-pink/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">Meet Our Team</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              The passionate individuals who make PRISM shine. From faculty advisors to student leaders, meet the people behind the magic.
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Guiding Stars"
            subtitle="The faculty members who inspire and support PRISM's mission"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemberCard {...member} colorClass={member.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Core Leadership"
            subtitle="The driving force behind PRISM's vision and initiatives"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {coreTeam.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemberCard {...member} colorClass={member.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Leads Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Team Leads"
            subtitle="Spearheading each vertical of PRISM activities"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamLeads.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemberCard {...member} colorClass={member.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Team Members"
            subtitle="The dedicated members who bring every event to life"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={member.name + index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <MemberCard {...member} colorClass={member.color} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-prism-violet/20 via-prism-cyan/10 to-prism-pink/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Want to Join the Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking for passionate individuals to join our family. Reach out and become part of something extraordinary.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-14 px-10 text-lg font-bold rounded-xl bg-gradient-to-r from-prism-violet to-prism-cyan text-white hover:shadow-2xl hover:shadow-prism-violet/40 hover:scale-105 transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award, ExternalLink, Code2 } from "lucide-react";
import MITAOElogo from "@/assets/MITAOElogo.png";

const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "MIT Academy of Engineering",
    year: "2025 - 2029",
    status: "In Progress",
    description: "Core focus: Full-Stack Development • Data Structures & Algorithms • AI/ML • Cloud & DevOps.",
    highlights: ["Dean's List", "AI Research Project", "Programming Excellence Award"],
    color: "primary",
    logo: MITAOElogo,
  },
  // {
  //   degree: "Minor Degree in Machine Learning", 
  //   institution: "MIT Academy of Engineering",
  //   year: "2024",
  //   status: "Completed",
  //   description: "Advanced coursework in statistical learning, optimization algorithms, and predictive modeling.",
  //   highlights: ["Research Publication", "Top 5% of Class", "ML Innovation Project"],
  //   color: "accent",
  //   logo: MITAOElogo,
  // },
  // {
  //   degree: "BS in Data Science",
  //   institution: "IIT Madras",
  //   year: "2026",
  //   status: "In Progress",
  //   description: "Comprehensive program covering statistical analysis, big data technologies, and data visualization.",
  //   highlights: ["Online Learning Excellence", "Capstone Project", "Industry Collaboration"],
  //   color: "secondary",
  //   logo: MITAOElogo,
  // },
  // {
  //   degree: "MS in Machine Learning",
  //   institution: "Stanford University",
  //   year: "2030",
  //   status: "Planned",
  //   description: "Advanced graduate program focusing on cutting-edge AI research and innovation.",
  //   highlights: ["Research Focus", "Industry Partnership", "Innovation Lab"],
  //   color: "neural",
  //   logo: MITAOElogo,
  // }
];

const certifications = [
  {
    name: "Certificate Link Placeholder-01",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
  {
    name: "Certificate Link Placeholder-02",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
  {
    name: "Certificate Link Placeholder-03",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
  {
    name: "Certificate Link Placeholder-04",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
  {
    name: "Certificate Link Placeholder-05",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
  {
    name: "Certificate Link Placeholder-06",
    url: "https://drive.google.com/file/d/1zP8KLmzwqj5gVADHbcyVFyY8AkmvCndp/view?usp=drive_link" // Replace with your actual certificate URL
  },
];

const codingProfiles = [
  {
    platform: "CodeChef",
    username: "pt1402",
    url: "https://www.codechef.com/users/pt1402",
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
    stats: "0★ Rating",
    color: "from-amber-900 to-orange-400"
  },
  {
    platform: "GeeksforGeeks",
    username: "prathameshtandale",
    url: "https://www.geeksforgeeks.org/profile/prathameshtandale?tab=activity",
    logo: "https://media.geeksforgeeks.org/wp-content/uploads/20200716222246/Path-219.png",
    stats: "0+ Problems Solved",
    color: "from-green-500 to-emerald-500"
  },
  {
    platform: "LeetCode",
    username: "prathameshtandale", // Replace with your username
    url: "https://leetcode.com/u/prathameshtandale/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    stats: "0+ Problems Solved",
    color: "from-orange-500 to-yellow-500"
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span> & Learning
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning is the foundation of excellence in AI and technology.
          </p>
        </div>

        {/* Education Timeline - Left Aligned */}
        <div className="relative mb-16">
          {/* Vertical line on the left */}
          <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot - Left side */}
                <div className="absolute left-0 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-primary flex-shrink-0 z-10"></div>
                
                {/* Full-width content card */}
                <div className="ml-12 w-full">
                  <Card className="bg-glass border-0 shadow-glass hover:shadow-primary transition-all duration-300 overflow-hidden">
                    {/* Card Header with Logo */}
                    <div className={`bg-ai-${edu.color} p-6 flex items-start gap-4`}>
                      {/* College Logo */}
                      <div className="bg-white p-3 rounded-xl shadow-lg flex-shrink-0">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      
                      {/* Degree Info */}
                      <div className="flex-1 text-white">
                        <Badge 
                          variant="secondary" 
                          className="bg-white/20 text-white border-0 backdrop-blur-sm mb-3"
                        >
                          {edu.status}
                        </Badge>
                        
                        <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                        <p className="text-white/90 font-semibold text-lg mb-2">{edu.institution}</p>
                        
                        <div className="flex items-center gap-2 text-white/80">
                          <Calendar className="h-4 w-4" />
                          <span>{edu.year}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {edu.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <Badge 
                            key={i} 
                            variant="outline" 
                            className="text-xs hover:bg-primary/10 transition-colors"
                          >
                            <Award className="h-3 w-3 mr-1 text-primary" />
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="bg-glass p-8 border-0 shadow-glass mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-primary/10 transition-smooth group cursor-pointer"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm group-hover:text-primary transition-colors flex-1">
                  {cert.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </Card>

        {/* Coding Profiles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-gradient">Problem</span> Solving
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="bg-glass border-0 shadow-glass hover:shadow-primary transition-all duration-300 overflow-hidden h-full">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-br ${profile.color} p-6 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      {/* Platform Logo */}
                      <div className="bg-white p-4 rounded-2xl shadow-xl mb-4 group-hover:scale-110 transition-transform">
                        <img 
                          src={profile.logo} 
                          alt={`${profile.platform} logo`}
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      
                      <h4 className="text-white font-bold text-xl mb-1">
                        {profile.platform}
                      </h4>
                      <p className="text-white/80 text-sm">@{profile.username}</p>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 text-center">
                    <div className="flex items-center justify-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                      <Code2 className="h-5 w-5" />
                      <span className="font-semibold">{profile.stats}</span>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-all">
                      <span>View Profile</span>
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
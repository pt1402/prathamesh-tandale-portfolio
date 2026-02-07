import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, GraduationCap, Award } from "lucide-react";

const educationData = [
  {
    degree: "B.Tech in Computer Engineering",
    institution: "MIT Academy of Engineering",
    year: "2025 - 2029",
    status: "In Progress",
    description: "Core focus: Full-Stack Development • Data Structures & Algorithms • AI/ML • Cloud & DevOps.",
    highlights: ["Dean's List", "AI Research Project", "Programming Excellence Award"],
    color: "neural"
  },
  // {
  //   degree: "Minor Degree in Machine Learning", 
  //   institution: "MIT Academy of Engineering",
  //   year: "2024",
  //   status: "Completed",
  //   description: "Advanced coursework in statistical learning, optimization algorithms, and predictive modeling.",
  //   highlights: ["Research Publication", "Top 5% of Class", "ML Innovation Project"],
  //   color: "accent"
  // },
  // {
  //   degree: "BS in Data Science",
  //   institution: "IIT Madras",
  //   year: "2026",
  //   status: "In Progress",
  //   description: "Comprehensive program covering statistical analysis, big data technologies, and data visualization.",
  //   highlights: ["Online Learning Excellence", "Capstone Project", "Industry Collaboration"],
  //   color: "secondary"
  // },
  // {
  //   degree: "MS in Machine Learning",
  //   institution: "Stanford University",
  //   year: "2030",
  //   status: "Planned",
  //   description: "Advanced graduate program focusing on cutting-edge AI research and innovation.",
  //   highlights: ["Research Focus", "Industry Partnership", "Innovation Lab"],
  //   color: "primary"
  // }
];

const certifications = [
  "IBM Certified Machine Learning Professional",
  "Cybersecurity Specialization - Coursera", 
  "Advanced Machine Learning - Udemy",
  "Deep Learning Specialization",
  "AI Ethics and Governance",
  "Cloud AI Architecture"
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

        {/* Education Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
          
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background shadow-primary"></div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <Card className="bg-glass p-6 border-0 shadow-glass hover:shadow-primary transition-all duration-300">
                    <div className="flex items-center gap-2 mb-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <Badge 
                        variant="secondary" 
                        className={`bg-ai-${edu.color} text-white border-0`}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <p className="text-primary font-semibold mb-1">{edu.institution}</p>
                    
                    <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.year}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          <Award className="h-3 w-3 mr-1" />
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <Card className="bg-glass p-8 border-0 shadow-glass">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Professional <span className="text-gradient">Certifications</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-primary/10 transition-smooth"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
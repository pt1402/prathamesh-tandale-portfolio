import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award, Users, ExternalLink } from "lucide-react";
import CompanyXlogo from "@/assets/CompanyXlogo.png";
import CompanyYlogo from "@/assets/CompanyYlogo.jpg";

const achievements = [
  {
    title: "Full Stack Developer at CompanyX",
    organization: "CompanyX",
    type: "Full-time Position",
    duration: "2029 - Future",
    description: "A placeholder for the Future",
    highlights: [
      "Highlight 1",
      "Highlight 2",
      "Highlight 3",
      "Highlight 4",
    ],
    icon: null,
    color: "primary",
    featured: true,
    logo: CompanyXlogo
  },
  {
    title: "Computer Science Intern at CompanyY",
    organization: "CompanyY",
    type: "Internship",
    duration: "M months",
    description: "A placeholder for the Future",
    highlights: [
      "Highlight 1",
      "Highlight 2",
      "Highlight 3",
      "Highlight 4",
    ],
    icon: null,
    color: "accent",
    logo: CompanyYlogo
  },
  // {
  //   title: "Data Scientist Intern",
  //   organization: "Airbus",
  //   type: "Internship",
  //   duration: "June 2023 - Jan 2024 (6 months)",
  //   description: "Worked on aerospace data analytics and machine learning solutions for aircraft performance optimization.",
  //   highlights: [
  //     "Aerospace ML applications",
  //     "Performance analytics",
  //     "Safety systems",
  //     "Big data processing"
  //   ],
  //   icon: Building,
  //   color: "secondary",
  //   logo: "https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_480x270/public/2021-10/Airbus-logo-3D-blue.png" // Replace with actual logo
  // },
  // {
  //   title: "Data Scientist Intern",
  //   organization: "Publicis Sapient",
  //   type: "Internship",
  //   duration: "2 months",
  //   description: "Developed client-focused data science solutions and contributed to digital transformation projects.",
  //   highlights: [
  //     "Client solutions",
  //     "Digital transformation",
  //     "Data visualization",
  //     "Business intelligence"
  //   ],
  //   icon: Users,
  //   color: "neural",
  //   logo: "https://example.com/publicis-sapient-logo.png" // Replace with actual logo
  // }
];

const recognitions = [
  {
    name: "Dean's List Recognition",
    url: "https://example.com/deans-list-certificate.pdf"
  },
  {
    name: "AI Innovation Excellence Award",
    url: "https://example.com/ai-innovation-award.pdf"
  },
  {
    name: "Best Research Project Award",
    url: "https://example.com/research-award.pdf"
  },
  {
    name: "Outstanding Intern Recognition",
    url: "https://example.com/intern-recognition.pdf"
  },
  {
    name: "Technical Leadership Award",
    url: "https://example.com/leadership-award.pdf"
  },
  {
    name: "Community Contribution Award",
    url: "https://example.com/community-award.pdf"
  }
];

export function Achievements() {
  // Helper function to render logo or placeholder
  const renderLogo = (achievement) => {
    if (achievement.logo) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-md mb-2 w-24 h-24 flex items-center justify-center">
          <img 
            src={achievement.logo} 
            alt={`${achievement.organization} logo`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      );
    } else {
      return (
        <div className={`bg-gradient-to-br from-ai-${achievement.color} to-ai-${achievement.color}/60 p-3 rounded-xl shadow-md mb-2 w-24 h-24 flex items-center justify-center`}>
          <span className="text-4xl font-bold text-white">
            {achievement.organization.charAt(0)}
          </span>
        </div>
      );
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Achievements</span> & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of impactful contributions across leading technology organizations.
          </p>
        </div>

        {/* Main Achievements */}
        <div className="space-y-8 mb-16">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={`bg-glass border-0 shadow-glass hover:shadow-primary transition-all duration-300 ${
                achievement.featured ? 'ring-2 ring-primary/20 shadow-primary' : ''
              }`}
            >
              <div className="p-8">
                <div className="grid lg:grid-cols-4 gap-6 items-start">
                  {/* Icon, Badge & Logo */}
                  <div className="flex flex-col items-center lg:items-start space-y-3">
                    {/* Organization Logo or Placeholder */}
                    {renderLogo(achievement)}
                    
                    {/* Icon - Only render if it exists */}
                    {achievement.icon && (
                      <div className={`p-3 rounded-full bg-ai-${achievement.color}/20`}>
                        <achievement.icon className={`h-8 w-8 text-ai-${achievement.color}`} />
                      </div>
                    )}
                    
                    <Badge 
                      variant="secondary" 
                      className={`bg-ai-${achievement.color} text-white border-0`}
                    >
                      {achievement.type}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                      <p className="text-primary font-semibold">{achievement.organization}</p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{achievement.duration}</span>
                    </div>
                    
                    <p className="text-muted-foreground">{achievement.description}</p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Contributions:</h4>
                    <div className="space-y-2">
                      {achievement.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Recognitions - Clickable */}
        <Card className="bg-glass p-8 border-0 shadow-glass">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Awards & <span className="text-gradient">Recognition</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recognitions.map((recognition, index) => (
              <a
                key={index}
                href={recognition.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-primary/10 transition-smooth group cursor-pointer"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-sm group-hover:text-primary transition-colors flex-1">
                  {recognition.name}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary opacity-0 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </Card>

        {/* Stats Section */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">1+</div>
            <div className="text-sm text-muted-foreground">Organizations</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">2+</div>
            <div className="text-sm text-muted-foreground">Months Experience</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">3+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </Card>
        </div>
      </div>
    </section>
  );
}

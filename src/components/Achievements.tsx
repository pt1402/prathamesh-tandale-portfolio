import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, Award, Users } from "lucide-react";

const achievements = [
  {
    title: "AI Engineer at Google",
    organization: "Google",
    type: "Full-time Position",
    duration: "2024 - Present",
    description: "Leading AI initiatives and developing next-generation machine learning solutions for global products.",
    highlights: [
      "Developing scalable ML models",
      "Cross-functional collaboration",
      "Innovation in AI research",
      "Production system optimization"
    ],
    icon: Building,
    color: "primary",
    featured: true
  },
  {
    title: "Data Scientist Intern",
    organization: "Sarvam AI",
    type: "Internship",
    duration: "6 months",
    description: "Contributed to cutting-edge AI research and development of large language models and conversational AI systems.",
    highlights: [
      "LLM fine-tuning",
      "Conversational AI",
      "Research publications",
      "Model optimization"
    ],
    icon: Award,
    color: "accent"
  },
  {
    title: "Data Scientist Intern",
    organization: "Airbus",
    type: "Internship", 
    duration: "June 2023 - Jan 2024 (6 months)",
    description: "Worked on aerospace data analytics and machine learning solutions for aircraft performance optimization.",
    highlights: [
      "Aerospace ML applications",
      "Performance analytics",
      "Safety systems",
      "Big data processing"
    ],
    icon: Building,
    color: "secondary"
  },
  {
    title: "Data Scientist Intern",
    organization: "Publicis Sapient",
    type: "Internship",
    duration: "2 months",
    description: "Developed client-focused data science solutions and contributed to digital transformation projects.",
    highlights: [
      "Client solutions",
      "Digital transformation",
      "Data visualization",
      "Business intelligence"
    ],
    icon: Users,
    color: "neural"
  }
];

const recognitions = [
  "Dean's List Recognition",
  "AI Innovation Excellence Award",
  "Best Research Project Award",
  "Outstanding Intern Recognition",
  "Technical Leadership Award",
  "Community Contribution Award"
];

export function Achievements() {
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
                  {/* Icon & Badge */}
                  <div className="flex flex-col items-center lg:items-start space-y-3">
                    <div className={`p-3 rounded-full bg-ai-${achievement.color}/20`}>
                      <achievement.icon className={`h-8 w-8 text-ai-${achievement.color}`} />
                    </div>
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

        {/* Additional Recognitions */}
        <Card className="bg-glass p-8 border-0 shadow-glass">
          <h3 className="text-2xl font-bold mb-6 text-center">
            Awards & <span className="text-gradient">Recognition</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recognitions.map((recognition, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 bg-muted/20 rounded-lg hover:bg-primary/10 transition-smooth"
              >
                <Award className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{recognition}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Stats Section */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">4+</div>
            <div className="text-sm text-muted-foreground">Organizations</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">14+</div>
            <div className="text-sm text-muted-foreground">Months Experience</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">6+</div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </Card>
          <Card className="bg-glass p-6 border-0 shadow-glass text-center">
            <div className="text-3xl font-bold text-gradient mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Projects</div>
          </Card>
        </div>
      </div>
    </section>
  );
}
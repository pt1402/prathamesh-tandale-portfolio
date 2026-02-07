import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Shield, Database, Cloud, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 95, description: "Advanced ML/AI development" },
      { name: "C++", level: 85, description: "Systems programming & optimization" },
      { name: "C", level: 80, description: "Low-level programming" },
      { name: "JavaScript", level: 75, description: "Full-stack development" },
    ],
    color: "primary"
  },
  {
    title: "Machine Learning & AI",
    icon: Brain,
    skills: [
      { name: "Deep Learning", level: 90, description: "Neural networks, CNNs, RNNs" },
      { name: "NLP", level: 85, description: "Language models, transformers" },
      { name: "Computer Vision", level: 80, description: "Image processing, recognition" },
      { name: "MLOps", level: 75, description: "Model deployment & monitoring" },
    ],
    color: "accent"
  },
  {
    title: "Frameworks & Tools",
    icon: Database,
    skills: [
      { name: "TensorFlow", level: 90, description: "Production ML models" },
      { name: "PyTorch", level: 85, description: "Research & prototyping" },
      { name: "Scikit-learn", level: 80, description: "Classical ML algorithms" },
      { name: "Docker", level: 75, description: "Containerization" },
    ],
    color: "secondary"
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: [
      { name: "Network Security", level: 70, description: "Security protocols & analysis" },
      { name: "Penetration Testing", level: 65, description: "Vulnerability assessment" },
      { name: "Cryptography", level: 68, description: "Encryption & security" },
      { name: "AI Security", level: 72, description: "ML model security" },
    ],
    color: "neural"
  }
];

const achievements = [
  {
    icon: Cloud,
    title: "IBM Certified ML Professional",
    description: "Advanced machine learning certification from IBM"
  },
  {
    icon: Shield,
    title: "Coursera Cybersecurity",
    description: "Comprehensive cybersecurity specialization"
  },
  {
    icon: Brain,
    title: "Udemy Advanced ML",
    description: "Advanced machine learning course completion"
  },
  {
    icon: Zap,
    title: "AI Innovation Award",
    description: "Recognition for innovative AI solutions"
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building next-generation AI solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-glass p-8 border-0 shadow-glass hover:shadow-primary transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-ai-${category.color}/20`}>
                  <category.icon className={`h-6 w-6 text-ai-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications & Awards */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Certifications & <span className="text-gradient">Awards</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="bg-glass p-6 border-0 shadow-glass hover:shadow-accent transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="mb-4 mx-auto w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center group-hover:shadow-accent transition-all">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-6">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face", 
              "AWS", "Docker", "Kubernetes", "Git", "Linux", "MongoDB", 
              "PostgreSQL", "React", "Node.js", "FastAPI"
            ].map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-muted/20 hover:bg-primary/20 transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
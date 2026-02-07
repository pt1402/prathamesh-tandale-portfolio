import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Layers, Database, Cloud, Zap, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C/C++", level: 50, description: "Systems programming & DSA" },
      { name: "Java", level: 10, description: "Object-oriented programming, DSA, & enterprise apps" },
      { name: "Python", level: 50, description: "AI/ML, data science, backend development & scripting" },
      { name: "JavaScript/TypeScript", level: 10, description: "Full-stack web development" },
    ],
    color: "primary"
  },
  {
    title: "Frontend Development",
    icon: Layers,
    skills: [
      { name: "React.js", level: 10, description: "Component-based UI development" },
      { name: "Next.js", level: 10, description: "Server-side rendering & SSG" },
      { name: "Bootstrap & TailwindCSS", level: 10, description: "Utility-first CSS framework" },
      { name: "HTML5 & CSS3", level: 50, description: "Modern web standards" },
    ],
    color: "accent"
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Node.js & Express", level: 10, description: "Backend frameworks" },
      { name: "REST / JSON", level: 10, description: "Application Programming Interfaces" },
      { name: "PostgreSQL", level: 25, description: "Relational database management" },
      { name: "MongoDB", level: 10, description: "NoSQL database" },
      { name: "Firebase / Redis / InfluxDB / Cassandra / Neo4j", level: 15, description: "Some other NoSQL databases" },
    ],
    color: "secondary"
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker & Kubernetes", level: 10, description: "Containerization & Orchestration" },
      { name: "AWS", level: 10, description: "Cloud infrastructure & services" },
      { name: "CI/CD Pipelines", level: 10, description: "Automated deployment workflows" },
      { name: "Terraform", level: 10, description: "Infrastructure as Code" },
      { name: "Git & GitHub", level: 50, description: "Version control and Collaboraton" },
    ],
    color: "neural"
  },
  {
    title: "Cross-Platform Development",
    icon: Zap,
    skills: [
      { name: "React-Native", level: 10, description: "Mobile cross-platform" },
      { name: "Electron", level: 10, description: "Desktop web apps" },
      { name: "Flutter", level: 20, description: "Mobile and desktop cross-platform" },
      { name: "Django", level: 10, description: "Python web framework" },
    ],
    color: "accent"
  },
  {
    title: "Data Structures & Algorithms",
    icon: Terminal,
    skills: [
      { name: "Arrays & Strings", level: 50, description: "Linear data structures" },
      { name: "Trees & Graphs", level: 10, description: "Non-linear data structures" },
      { name: "Dynamic Programming", level: 10, description: "Optimization techniques" },
      { name: "Algorithm Analysis", level: 10, description: "Time & space complexity" },
    ],
    color: "primary"
  },
  
];

const achievements = [
  {
    icon: Code,
    title: "Full-Stack Developer",
    description: "Building production-ready web applications"
  },
  {
    icon: Terminal,
    title: "Algorithm Expert",
    description: "Strong foundation in DSA across multiple languages"
  },
  {
    icon: Layers,
    title: "Polyglot Programmer",
    description: "Proficient in C/C++, Java, Python, JavaScript"
  },
  {
    icon: Cloud,
    title: "Cloud Enthusiast",
    description: "Learning AWS & modern DevOps practices"
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
            A comprehensive toolkit for building scalable, efficient, and modern software solutions.
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

        {/* Focus Areas */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">
            Current <span className="text-gradient">Focus Areas</span>
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
              // Programming Languages
              "C/C++", "Java", "Python", "JavaScript", "TypeScript",
              // Frontend
              "React", "Next.js", "Astro", "HTML5", "CSS3", "TailwindCSS", "Bootstrap", "Sass",
              // Backend
              "Node.js", "Express.js", "Django",
              // Databases
              "PostgreSQL", "MongoDB", "Redis",
              // DevOps & Cloud
              "Docker", "Kubernetes", "AWS", "Terraform", "CI/CD", "Ansible", "Nginx", "Kafka", "ElasticSearch",
              // Tools
              "Git", "GitHub", "JetBrains IDEs", "Windows", "Linux",
              // Other
              "RESTful APIs", "Webpack",  "npm", "Vite", "esbuild", "ESLint", "Prettier"
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

        {/* Learning Roadmap Note */}
        <div className="mt-12 text-center">
          <Card className="bg-glass p-6 border-0 shadow-glass max-w-3xl mx-auto">
            <p className="text-muted-foreground">
              <span className="font-semibold text-primary">Currently Learning:</span> Advanced System Design, 
              Microservices Architecture, AI/ML Fundamentals, Essentials of Data Science, and Cloud-Native Development. 
              Following structured roadmaps for Full-Stack Development and Polyglot Programming with DSA.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

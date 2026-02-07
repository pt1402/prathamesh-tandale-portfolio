import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap, Target } from "lucide-react";

export function AboutMe() {
  const highlights = [
    {
      icon: Brain,
      title: "Polyglot Programmer",
      description: "Learning multiple programming paradigms—C/C++ for performance, Java for enterprise, Python for versatility, JavaScript for the web"
    },
    {
      icon: Code,
      title: "Full-Stack Expertise", 
      description: "Learning to build end-to-end web solutions with React, Node.js, and cloud infrastructure—integrating AI capabilities into production applications"
    },
    {
      icon: Zap,
      title: "Performance Driven",
      description: "Learning to optimize algorithms and architectures for maximum efficiency and impact"
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "Learning to transform complex challenges into elegant solutions using algorithmic thinking, AI techniques, and scalable system design"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learning to Build, Optimize and Transform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <Card className="bg-glass p-8 border-0 shadow-glass">
              <h3 className="text-2xl font-semibold mb-4 text-gradient">My Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm a Computer Engineering freshman at MIT Academy of Engineering, Pune, 
                  with a deep passion for software development and computer science fundamentals. 
                  My journey spans from mastering core programming paradigms to building 
                  production-ready AI-powered solutions and Web applications.
                </p>
                <p>
                  I believe in building a strong foundation—which is why I'm pursuing polyglot 
                  programming expertise across C++, Java, and Python, while simultaneously 
                  developing full-stack web development skills. My approach combines rigorous 
                  algorithmic thinking with modern development practices, enabling me to create 
                  both efficient and scalable solutions.
                </p>
                <p>
                Currently, I'm focused on strengthening my data structures & algorithms 
                knowledge while building real-world projects using the MERN stack, exploring 
                DevOps practices, and learning system design principles. of what's possible.
                </p>
              </div>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-gradient-primary text-white border-0">
                AI
              </Badge>
              <Badge variant="secondary" className="bg-gradient-accent text-white border-0">
                C++
              </Badge>
              <Badge variant="secondary" className="bg-gradient-primary text-white border-0">
                Java
              </Badge>
              <Badge variant="secondary" className="bg-gradient-accent text-white border-0">
                Python
              </Badge>
              <Badge variant="secondary" className="bg-gradient-primary text-white border-0">
                Full-Stack Development
              </Badge>
              <Badge variant="secondary" className="bg-gradient-accent text-white border-0">
                DSA
              </Badge>
              <Badge variant="secondary" className="bg-gradient-primary text-white border-0">
                DevOps
              </Badge>
              <Badge variant="secondary" className="bg-gradient-accent text-white border-0">
                & more
              </Badge>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card 
                key={index} 
                className="bg-glass p-6 border-0 shadow-glass hover:shadow-primary transition-all duration-300 hover:scale-105 group"
              >
                <div className="mb-4">
                  <item.icon className="h-8 w-8 text-primary group-hover:text-primary-glow transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
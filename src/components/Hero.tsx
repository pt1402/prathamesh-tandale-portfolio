import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail, Linkedin } from "lucide-react";
import prathameshPortrait from "@/assets/prathamesh-portrait.jpg";
export function Hero() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Prathamesh Tandale";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-bg">
        <div className="absolute inset-0 opacity-30">
          {/* Floating AI Elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-ai-primary rounded-full animate-float" style={{
          animationDelay: "0s"
        }}></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-ai-secondary rounded-full animate-float" style={{
          animationDelay: "1s"
        }}></div>
          <div className="absolute bottom-20 left-20 w-5 h-5 bg-ai-accent rounded-full animate-float" style={{
          animationDelay: "2s"
        }}></div>
          <div className="absolute bottom-40 right-10 w-3 h-3 bg-ai-neural rounded-full animate-float" style={{
          animationDelay: "0.5s"
        }}></div>
          
          {/* Neural Network Lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--ai-primary))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--ai-secondary))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M 100 200 Q 400 100 800 300 T 1200 200" stroke="url(#neural-gradient)" strokeWidth="2" fill="none" className="animate-pulse" />
            <path d="M 200 400 Q 600 300 1000 500 T 1400 400" stroke="url(#neural-gradient)" strokeWidth="1.5" fill="none" className="animate-pulse" style={{
            animationDelay: "1s"
          }} />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="inline-block min-h-[1.2em] text-4xl">
                  {text}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gradient font-semibold animate-fadeInUp mb-3" style={{
              animationDelay: "3.5s"
            }}>
                Computer Engineering Freshman @ MITAOE
              </p>
              <h4 className="text-lg md:text-xl font-semibold animate-fadeInUp bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-3" 
                style={{ animationDelay: "4s" }}>
                  Aspiring Full-Stack Developer and Polyglot Programmer.
                </h4>
              <p className="text-lg text-muted-foreground max-w-2xl animate-fadeInUp mb-3" style={{
              animationDelay: "4.5s"
            }}>
                Passionate about <b>Artificial Intelligence</b>, <b>Full-Stack Development</b>, <b>Data Structures & Algorithms</b>, and <b>Modern Software Architecture</b>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{
            animationDelay: "5s"
          }}>
              <Button onClick={scrollToContact} className="bg-gradient-primary hover:shadow-primary transition-all duration-300 hover:scale-105">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button variant="outline" className="bg-glass hover:bg-primary/10 hover:text-primary transition-smooth">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button variant="outline" className="bg-glass hover:bg-primary/10 hover:text-primary transition-smooth" onClick={() => window.open("https://linkedin.com/in/prathamesh-tandale", "_blank")}>
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>

            <div className="animate-bounce mt-12">
              <ArrowDown className="h-6 w-6 mx-auto text-primary animate-pulse-glow" />
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse-glow"></div>
              <div className="relative w-full h-full bg-glass rounded-full p-4 border border-border/20">
                <img src={prathameshPortrait} alt="Prathamesh Tandale" className="w-full h-full object-cover rounded-full" />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-gradient-accent text-white px-3 py-1 rounded-full text-sm font-semibold animate-float">
                Computer Engineering
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold animate-float" style={{
              animationDelay: "1s"
            }}>
                FY B.Tech @ MITAOE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
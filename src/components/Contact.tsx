import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Heart, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export function Contact() {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLiking, setIsLiking] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  // API base URL - use environment variable or default to production
  const API_URL = import.meta.env.VITE_API_URL || '';

  // Load global likes count from API
  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const response = await fetch(`${API_URL}/api/likes`);
        const data = await response.json();
        setLikes(data.likes);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    fetchLikes();

    // Check if user has already liked
    const userHasLiked = localStorage.getItem('user_has_liked');
    if (userHasLiked === 'true') {
      setHasLiked(true);
    }

    // Optional: Poll for updates every 30 seconds
    const interval = setInterval(fetchLikes, 30000);
    return () => clearInterval(interval);
  }, [API_URL]);

  const handleLike = async () => {
    if (!hasLiked && !isLiking) {
      setIsLiking(true);
      
      try {
        const response = await fetch(`${API_URL}/api/like`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to increment likes');
        }

        const data = await response.json();
        setLikes(data.likes);
        setHasLiked(true);
        localStorage.setItem('user_has_liked', 'true');
        
        toast({
          title: "Thank you!",
          description: "Your appreciation means a lot to me! 🎉",
        });
      } catch (error) {
        console.error('Error liking:', error);
        toast({
          title: "Error",
          description: "Failed to register your like. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLiking(false);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_2bkqrh3',
        'template_9hg2uzs',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Prathamesh',
        },
        '9F5q2h7rNKXy4yIBY'
      );

      console.log('SUCCESS!', result.text);
      
      toast({
        title: "Message Sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('FAILED...', error);
      
      toast({
        title: "Error ❌",
        description: "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prathameshtandale724@gmail.com",
      href: "mailto:prathameshtandale724@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 7038383203",
      href: "tel:+917038383203"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prathamesh-tandale",
      href: "https://linkedin.com/in/prathamesh-tandale"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/pt1402",
      href: "https://github.com/pt1402"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on the next breakthrough. I'm always excited to discuss innovative projects and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-glass p-8 border-0 shadow-glass">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  className="bg-muted/20 border-border/20 focus:border-primary transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={15}
                  className="bg-muted/20 border-border/20 focus:border-primary transition-colors resize-none"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-primary transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Like Button */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-glass p-8 border-0 shadow-glass">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.label === "LinkedIn" || contact.label === "GitHub" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" || contact.label === "GitHub" ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg hover:bg-primary/10 transition-smooth group"
                  >
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                      <contact.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{contact.label}</div>
                      <div className="text-sm text-muted-foreground">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Like & Appreciation */}
            <Card className="bg-glass p-8 border-0 shadow-glass text-center">
              <h3 className="text-xl font-bold mb-4">Like My Portfolio?</h3>
              <p className="text-muted-foreground mb-6">
                If you enjoyed exploring my work, show some love!
              </p>
              <Button
                onClick={handleLike}
                disabled={hasLiked || isLiking}
                className={`${
                  hasLiked 
                    ? "bg-gradient-accent" 
                    : "bg-gradient-primary hover:shadow-primary"
                } transition-all duration-300 transform hover:scale-105`}
              >
                {isLiking ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Liking...
                  </>
                ) : (
                  <>
                    <Heart className={`mr-2 h-4 w-4 ${hasLiked ? "fill-current" : ""}`} />
                    {hasLiked ? "Loved!" : "Like"} ({likes})
                  </>
                )}
              </Button>
              <div className="mt-4 text-sm text-muted-foreground">
                Thank you for visiting! Your support motivates me to keep innovating.
              </div>
            </Card>

            {/* Quick Response Promise */}
            <Card className="bg-glass p-6 border-0 shadow-glass">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient mb-2">⚡ 24hr</div>
                <div className="text-sm text-muted-foreground">
                  Typical response time for new opportunities and collaborations
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

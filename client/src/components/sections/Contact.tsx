import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import AnimateOnScroll from "@/components/ui/animate-on-scroll";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedinIn, 
  FaPhone 
} from "react-icons/fa";
import { Mail, Send, Phone, MapPin, MessageSquare } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { toast } = useToast();
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/sairam356", 
      ariaLabel: "GitHub",
      color: "#333",
      hoverColor: "#2ea043"
    },
    { 
      icon: FaLinkedinIn, 
      href: "https://linkedin.com/in/venkata-sairam-gollamudi-b57064194", 
      ariaLabel: "LinkedIn",
      color: "#0077B5",
      hoverColor: "#0a66c2"
    }
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "sairamtechwork@gmail.com",
      link: "mailto:sairamtechwork@gmail.com",
      isLink: true
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      content: "Dubai, UAE",
      isLink: false
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      content: ["+971 564467258", "+91 9681717002"],
      isLink: false
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light/5 via-dark to-dark/90"></div>
      
      {/* Dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.2) 2px, transparent 0), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.2) 2px, transparent 0)',
          backgroundSize: '100px 100px',
        }}
      />
      
      {/* Spotlight effect that follows cursor */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-30 hidden md:block"
        style={{
          background: `radial-gradient(circle 200px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(20, 184, 166, 0.15), transparent 80%)`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-accent font-mono text-lg inline-block py-1 px-4 border border-accent/30 rounded-full bg-accent/5 mb-4">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-teal-300">Get In Touch</h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              I'm always interested in discussing new projects, innovative technologies, or potential collaborations.
              Feel free to reach out if you'd like to connect professionally or discuss opportunities.
            </p>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-10"
          >
            {/* Contact Information */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="bg-dark-light/5 backdrop-blur-sm border border-dark-light/10 rounded-2xl p-8 h-full shadow-xl hover:shadow-accent/5 transition-shadow duration-500">
                <h3 className="text-2xl font-bold mb-8 text-gradient-primary">Contact Information</h3>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-accent/10 p-3 rounded-xl text-accent group-hover:bg-accent/20 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-white mb-1">{item.title}</h4>
                        {Array.isArray(item.content) ? (
                          <div>
                            {item.content.map((line, i) => (
                              <p key={i} className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                {line}
                              </p>
                            ))}
                          </div>
                        ) : (
                          item.isLink ? (
                            <a 
                              href={item.link} 
                              className="text-gray-400 hover:text-accent transition-colors"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                              {item.content}
                            </p>
                          )
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12">
                  <h4 className="font-semibold text-lg text-white mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => {
                      const Icon = link.icon;
                      return (
                        <motion.a 
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.ariaLabel}
                          className={`text-gray-300 text-xl bg-dark-light/10 p-3 rounded-xl border border-dark-light/20 hover:border-accent/30 transition-all duration-300`}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: `${link.color}33`,
                            color: link.hoverColor,
                            boxShadow: `0 0 15px ${link.color}33`
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="bg-dark-light/5 backdrop-blur-sm border border-dark-light/10 rounded-2xl p-8 shadow-xl hover:shadow-accent/5 transition-shadow duration-500">
                <div className="flex items-center mb-8">
                  <MessageSquare className="text-accent mr-3 h-6 w-6" />
                  <h3 className="text-2xl font-bold text-gradient-primary">Send a Message</h3>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white mb-2 block">Name</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Your name" 
                                  className="bg-dark/80 border-dark-light/20 focus:border-accent rounded-xl pl-10 h-12 backdrop-blur-sm" 
                                  {...field} 
                                />
                                <div className="absolute left-3 top-3 text-gray-400">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white mb-2 block">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input 
                                  placeholder="Your email" 
                                  className="bg-dark/80 border-dark-light/20 focus:border-accent rounded-xl pl-10 h-12 backdrop-blur-sm" 
                                  {...field} 
                                />
                                <div className="absolute left-3 top-3 text-gray-400">
                                  <Mail className="h-5 w-5" />
                                </div>
                              </div>
                            </FormControl>
                            <FormMessage className="text-red-400" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white mb-2 block">Message</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Textarea 
                                placeholder="Your message" 
                                className="bg-dark/80 border-dark-light/20 focus:border-accent rounded-xl pl-10 pt-3 h-32 backdrop-blur-sm" 
                                {...field} 
                              />
                              <div className="absolute left-3 top-3 text-gray-400">
                                <MessageSquare className="h-5 w-5" />
                              </div>
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-accent to-teal-500 hover:from-accent/90 hover:to-teal-400 text-dark font-semibold rounded-xl py-6 relative overflow-hidden group"
                        disabled={isSubmitting}
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? "Sending..." : "Send Message"} 
                          <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Final Greeting */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-teal-300">
              Thanks for taking the time to visit my portfolio!
            </h3>
            <p className="text-gray-400 mt-2">Looking forward to connecting with you.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Contact;

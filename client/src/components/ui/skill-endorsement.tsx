import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X, ThumbsUp, Award, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

type SkillEndorsementProps = {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
};

// This schema defines the validation rules for the endorsement form
const endorsementSchema = z.object({
  message: z.string().min(5, { message: "Endorsement message must be at least 5 characters" }).max(250, {
    message: "Endorsement message must not exceed 250 characters",
  }),
});

type EndorsementValues = z.infer<typeof endorsementSchema>;

const SkillEndorsement = ({ isOpen, onClose, skillName }: SkillEndorsementProps) => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<"form" | "thanks">("form");
  const [endorsementLevel, setEndorsementLevel] = useState<number | null>(null);
  const { toast } = useToast();

  const form = useForm<EndorsementValues>({
    resolver: zodResolver(endorsementSchema),
    defaultValues: {
      message: "",
    },
  });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      // Reset the component state when it's closed
      setTimeout(() => {
        setStep("form");
        setEndorsementLevel(null);
        form.reset();
      }, 300);
    }
  }, [isOpen, form]);

  const handleEndorse = (data: EndorsementValues) => {
    if (endorsementLevel === null) {
      toast({
        title: "Please select an endorsement level",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the endorsement data to your backend
    console.log({
      skill: skillName,
      level: endorsementLevel,
      message: data.message,
    });

    // Show the thank you step
    setStep("thanks");
  };

  const endorsementLevels = [
    { value: 1, label: "Beginner", icon: <Clock className="h-5 w-5" />, color: "text-blue-400" },
    { value: 2, label: "Intermediate", icon: <ThumbsUp className="h-5 w-5" />, color: "text-green-400" },
    { value: 3, label: "Advanced", icon: <Award className="h-5 w-5" />, color: "text-yellow-400" },
    { value: 4, label: "Expert", icon: <Sparkles className="h-5 w-5" />, color: "text-purple-400" },
  ];

  if (!mounted) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-dark-light/30 backdrop-blur-lg border border-dark-light/30 shadow-lg shadow-accent/5 rounded-xl p-0 sm:max-w-[500px]">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-dark/60 rounded-xl -z-10"></div>
        
        <DialogHeader className="p-6 border-b border-dark-light/20">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-accent to-teal-300">
              {step === "form" ? "Endorse Skill" : "Thank You!"}
            </DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-gray-400 hover:text-white hover:bg-dark-light/30">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <AnimatePresence mode="wait">
          {step === "form" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="p-6">
                <div className="mb-6 text-center">
                  <div className="inline-block px-4 py-2 bg-accent/10 rounded-lg border border-accent/30 mb-3">
                    <span className="text-lg font-mono text-accent">{skillName}</span>
                  </div>
                  <p className="text-gray-300">
                    How would you rate your proficiency with {skillName}?
                  </p>
                </div>
                
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {endorsementLevels.map((level) => (
                    <motion.button
                      key={level.value}
                      type="button"
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all duration-200 ${
                        endorsementLevel === level.value
                          ? "bg-dark-light/50 border-accent shadow-lg shadow-accent/10"
                          : "bg-dark-light/10 border-dark-light/30 hover:bg-dark-light/30"
                      }`}
                      onClick={() => setEndorsementLevel(level.value)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`${level.color} mb-2`}>
                        {level.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300">
                        {level.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleEndorse)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="relative">
                              <Textarea
                                placeholder="Share your experience with this skill..."
                                className="bg-dark/80 border-dark-light/20 focus:border-accent rounded-xl pt-3 h-32 placeholder:text-gray-500"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400 text-sm" />
                        </FormItem>
                      )}
                    />
                    
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-accent to-teal-500 hover:from-accent/90 hover:to-teal-400 text-dark font-semibold rounded-xl py-6 relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          Submit Endorsement
                        </span>
                        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="thanks"
              className="p-6 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="bg-accent/20 rounded-full p-4 border border-accent/30"
                >
                  <CheckCircle2 className="h-12 w-12 text-accent" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">
                Thank you for your endorsement!
              </h3>
              <p className="text-gray-400 mb-6">
                Your skill endorsement for <span className="text-accent font-medium">{skillName}</span> has been recorded.
              </p>
              
              <Button
                variant="outline"
                onClick={onClose}
                className="border-accent/40 text-accent hover:border-accent hover:bg-accent/10 px-6"
              >
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default SkillEndorsement;
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { trackContactSubmission } from "../../lib/analytics";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        trackContactSubmission(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: "Error",
          description: data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
        trackContactSubmission(false);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      trackContactSubmission(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2.5">
        <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#49453e]">
          Name
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="h-12 rounded-none border-0 border-b border-[#837e73]/35 bg-transparent px-0 text-[13px] shadow-none transition-colors placeholder:text-[#68635b]/45 focus-visible:border-[#8f6848] focus-visible:ring-0"
          placeholder="Your name"
        />
      </div>

      <div className="space-y-2.5">
        <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#49453e]">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="h-12 rounded-none border-0 border-b border-[#837e73]/35 bg-transparent px-0 text-[13px] shadow-none transition-colors placeholder:text-[#68635b]/45 focus-visible:border-[#8f6848] focus-visible:ring-0"
          placeholder="your.email@example.com"
        />
      </div>

      <div className="space-y-2.5">
        <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#49453e]">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="resize-none rounded-none border-0 border-b border-[#837e73]/35 bg-transparent px-0 text-[13px] shadow-none transition-colors placeholder:text-[#68635b]/45 focus-visible:border-[#8f6848] focus-visible:ring-0"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        className="group flex h-[52px] w-full items-center justify-between bg-[#1e1f1b] px-6 text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[#8d6645]"
      >
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
      </button>
    </form>
  );
};

export default ContactForm;

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
    <form onSubmit={handleSubmit}>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="px-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#6c6257]">
            Name
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="h-11 rounded-[3px] border-0 border-b border-[#756e63]/40 bg-transparent px-3 text-[13px] font-light shadow-none transition-colors placeholder:text-[#68635b]/35 focus-visible:border-[#8f6848] focus-visible:bg-[#fffaf1]/28 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Jeevika Kiran"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="px-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#6c6257]">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="h-11 rounded-[3px] border-0 border-b border-[#756e63]/40 bg-transparent px-3 text-[13px] font-light shadow-none transition-colors placeholder:text-[#68635b]/35 focus-visible:border-[#8f6848] focus-visible:bg-[#fffaf1]/28 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-1.5 sm:col-span-2">
          <label htmlFor="message" className="px-3 text-[9px] font-medium uppercase tracking-[0.17em] text-[#6c6257]">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="resize-none rounded-[3px] border-0 border-b border-[#756e63]/40 bg-transparent px-3 py-3 text-[13px] font-light leading-6 shadow-none transition-colors placeholder:text-[#68635b]/35 focus-visible:border-[#8f6848] focus-visible:bg-[#fffaf1]/28 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Tell me a little about what you’re working on..."
          />
        </div>
      </div>

      <div className="mt-7 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10px] font-light tracking-[0.03em] text-[#5d574f]/60">
          All fields are required.
        </p>
        <button
          type="submit"
          className="glass-cta group flex h-[44px] w-full items-center justify-between px-5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white sm:w-[178px]"
        >
          Send message
          <Send className="h-[15px] w-[15px] transition-transform group-hover:translate-x-1" strokeWidth={1.4} />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

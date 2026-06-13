"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, useInView } from "framer-motion";
import { Send, Mail, CheckCircle2, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { personal } from "@/lib/data";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type FormData = z.infer<typeof schema>;

export default function ContactSection() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setError(null);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSent(true);
      reset();
      setTimeout(() => setSent(false), 5000);
    } else {
      const body = await res.json().catch(() => ({}));
      setError(body.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <p className="text-xs font-mono text-brand/70 tracking-widest uppercase">Contact</p>
          <h2 className="text-3xl font-bold">Let&apos;s Talk</h2>
          <p className="text-sm text-muted-foreground">
            Open to senior QA engineering and quality engineering lead roles.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-4 h-full min-h-[300px] rounded-xl border border-brand/20 bg-brand/[0.04]"
              >
                <CheckCircle2 size={36} className="text-brand" />
                <div className="text-center">
                  <p className="font-semibold">Message sent!</p>
                  <p className="text-sm text-muted-foreground mt-1">I&apos;ll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs font-mono text-muted-foreground/70">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name")}
                      className={`bg-muted/10 border-border/40 focus:border-brand/40 transition-colors ${errors.name ? "border-red-500/40" : ""}`}
                    />
                    {errors.name && <p className="text-xs text-red-400/80">{errors.name.message}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email" className="text-xs font-mono text-muted-foreground/70">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      {...register("email")}
                      className={`bg-muted/10 border-border/40 focus:border-brand/40 transition-colors ${errors.email ? "border-red-500/40" : ""}`}
                    />
                    {errors.email && <p className="text-xs text-red-400/80">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-xs font-mono text-muted-foreground/70">Subject *</Label>
                  <Select onValueChange={(v) => setValue("subject", v, { shouldValidate: true })}>
                    <SelectTrigger className={`bg-muted/10 border-border/40 focus:border-brand/40 transition-colors ${errors.subject ? "border-red-500/40" : ""}`}>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interview">Interview Inquiry</SelectItem>
                      <SelectItem value="collaboration">Project Collaboration</SelectItem>
                      <SelectItem value="consulting">QA Consulting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.subject && <p className="text-xs text-red-400/80">{errors.subject.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs font-mono text-muted-foreground/70">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about the role or project..."
                    rows={5}
                    {...register("message")}
                    className={`bg-muted/10 border-border/40 focus:border-brand/40 transition-colors resize-none ${errors.message ? "border-red-500/40" : ""}`}
                  />
                  {errors.message && <p className="text-xs text-red-400/80">{errors.message.message}</p>}
                </div>

                {error && (
                  <p className="text-xs text-red-400/80 text-center">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand text-background font-semibold text-sm hover:opacity-90 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send size={14} /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              <p className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">Connect</p>
              {[
                { icon: Mail,        label: "Email",    value: personal.email,    href: `mailto:${personal.email}` },
                { icon: LinkedinIcon, label: "LinkedIn", value: "kota-udaykiran", href: personal.linkedin },
                { icon: GithubIcon,  label: "GitHub",   value: "QAuday",          href: personal.github },
                { icon: MapPin,      label: "Location", value: personal.location, href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="p-2 rounded-lg border border-border/30 bg-muted/10 shrink-0">
                    <Icon size={13} className="text-brand/70" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground/50">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-foreground/80 hover:text-brand transition-colors font-mono break-all"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground/80 font-mono">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl border border-white/[0.07] bg-white/[0.02]">
              <p className="text-xs text-muted-foreground/60 leading-relaxed">
                <span className="text-brand font-mono">{">"}_</span>{" "}
                I typically respond within 24 hours. For interview inquiries, connect on LinkedIn directly.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

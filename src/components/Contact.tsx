"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Mail, Copy, Phone, MapPin, 
  Bold, Italic, Strikethrough, Link as LinkIcon, Heading, List, ListOrdered,
  Send, ChevronDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import toast from "react-hot-toast";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.662 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
  </svg>
);

const ContactItem = ({ title, value, icon, action, href }: any) => {
  const content = (
    <div className="bg-surface/40 backdrop-blur-md border border-primary/10 hover:border-primary/30 rounded-xl p-4 transition-all group relative overflow-hidden h-full">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors"></div>
      <div className="flex justify-between items-start relative z-10">
        <div>
          <div className="text-xs text-text-muted font-mono uppercase mb-1">{title}</div>
          <div className="text-sm font-medium text-text-main mb-3">{value}</div>
          {action && <div>{action}</div>}
        </div>
        <div className="w-10 h-10 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-surface border border-primary/30 flex items-center justify-center shadow-[0_0_10px_rgba(0,180,216,0.2)]">
          {icon}
        </div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block h-full">
      {content}
    </a>
  ) : (
    <div className="h-full">{content}</div>
  );
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("mrahmadbutt338@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase tracking-wide">PORTFOLIO</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Let's build something awesome together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-surface/30 backdrop-blur-2xl border border-primary/20 rounded-[2rem] p-4 lg:p-6 shadow-2xl relative"
        >
          {/* Top Bar Decoration (like the browser window in the image) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-primary/20 rounded-b-lg"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-4">
            
            {/* Left Column: Contact Cards */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <ContactItem 
                title="Email"
                value="mrahmadbutt338@gmail.com"
                icon={<Mail size={20} className="text-primary" />}
                action={
                  <button onClick={handleCopyEmail} className="flex items-center gap-2 px-3 py-1.5 bg-background/50 border border-primary/20 rounded-lg text-xs hover:bg-primary/20 hover:text-primary transition-all">
                    <span>Copy</span>
                    <Copy size={12} />
                  </button>
                }
              />
              <ContactItem 
                title="GitHub"
                value="mrahmadbutt338-stack"
                href="https://github.com/mrahmadbutt338-stack"
                icon={<GithubIcon size={20} className="text-primary" />}
              />
              <ContactItem 
                title="LinkedIn"
                value="Ahmad Asad"
                href="https://www.linkedin.com/in/ahmad-asad-b14606341/"
                icon={<LinkedinIcon size={20} className="text-primary" />}
              />
              <ContactItem 
                title="Phone"
                value="03223624954"
                href="tel:03223624954"
                icon={<Phone size={20} className="text-primary" />}
              />
              <ContactItem 
                title="Location"
                value="Lahore, Pakistan"
                icon={<MapPin size={20} className="text-primary" />}
              />
            </div>

            {/* Middle Column: Contact Form */}
            <div className="lg:col-span-2 bg-surface/40 backdrop-blur-md border border-primary/10 rounded-2xl p-6 flex flex-col">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Name" 
                    className="bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main placeholder:text-text-muted/50" 
                  />
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="Email Address" 
                    className="bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-text-main placeholder:text-text-muted/50" 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                  <div>
                    <label className="text-xs text-text-muted mb-2 block">Project Type</label>
                    <div className="relative">
                      <select className="w-full bg-background/50 border border-primary/20 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-primary transition-all text-text-main">
                        <option value="web">Web Development</option>
                        <option value="ui">UI/UX Design</option>
                        <option value="mobile">Mobile App</option>
                        <option value="other">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-text-muted mb-2 block flex justify-between">
                      <span>Budget Range</span>
                    </label>
                    <input 
                      type="range" 
                      className="w-full accent-primary h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer" 
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col min-h-[140px]">
                  <label className="text-xs text-text-muted mb-2 block">Message</label>
                  <div className="flex-1 bg-background/50 border border-primary/20 rounded-xl overflow-hidden flex flex-col focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <div className="border-b border-primary/20 p-2 flex gap-3 text-text-muted bg-surface/50">
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><Bold size={14}/></button>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><Italic size={14}/></button>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><Strikethrough size={14}/></button>
                      <div className="w-px h-4 bg-primary/20 self-center mx-1"></div>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><LinkIcon size={14}/></button>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><Heading size={14}/></button>
                      <div className="w-px h-4 bg-primary/20 self-center mx-1"></div>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><List size={14}/></button>
                      <button type="button" className="p-1.5 hover:text-primary hover:bg-primary/10 rounded-md transition-colors"><ListOrdered size={14}/></button>
                    </div>
                    <textarea 
                      name="message"
                      required
                      className="w-full flex-1 bg-transparent p-4 text-sm resize-none focus:outline-none text-text-main placeholder:text-text-muted/50"
                      placeholder="Type your message here..."
                    />
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-[#011627] font-medium py-3 px-6 rounded-xl flex items-center gap-2 transition-all group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Chat & Status */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              
              {/* Chat Links */}
              <div className="bg-surface/40 backdrop-blur-md border border-primary/10 rounded-2xl p-5 flex flex-col gap-4">
                <span className="text-[10px] text-text-muted font-mono uppercase text-center tracking-wider block border-b border-primary/10 pb-2">Connect Directly</span>
                <div className="flex justify-between gap-3 mt-1">
                  <a href="https://wa.me/923223624954" target="_blank" rel="noreferrer" className="flex-1 aspect-square bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 rounded-xl flex items-center justify-center text-[#25D366] transition-all hover:scale-105">
                    <WhatsAppIcon className="w-7 h-7" />
                  </a>
                  <a href="#" className="flex-1 aspect-square bg-[#0088cc]/10 border border-[#0088cc]/20 hover:bg-[#0088cc]/20 rounded-xl flex items-center justify-center text-[#0088cc] transition-all hover:scale-105">
                    <TelegramIcon className="w-7 h-7" />
                  </a>
                  <a href="#" className="flex-1 aspect-square bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 rounded-xl flex items-center justify-center text-[#5865F2] transition-all hover:scale-105">
                    <DiscordIcon className="w-7 h-7" />
                  </a>
                </div>
                <a href="https://wa.me/923223624954" target="_blank" rel="noreferrer" className="w-full py-2.5 bg-background/50 border border-primary/20 hover:border-primary/40 rounded-xl text-sm font-medium hover:bg-primary/10 transition-colors text-text-main text-center inline-block">
                  Let's chat directly
                </a>
              </div>

              {/* Location Status Map */}
              <div className="bg-surface/40 backdrop-blur-md border border-primary/10 rounded-2xl p-4 flex gap-4 items-center">
                <div className="w-20 h-20 shrink-0 bg-background/80 rounded-xl border border-primary/20 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Abstract Map Grid Background */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)', backgroundSize: '8px 8px' }}></div>
                  <MapPin className="text-primary relative z-10 mb-1" size={24} />
                  <span className="text-[9px] font-bold text-text-main relative z-10 tracking-wider">LAHORE</span>
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-text-muted font-mono uppercase mb-2 border-b border-primary/10 pb-1">Contact Status</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--primary)]"></div>
                      <span className="text-[11px] text-text-main">Message</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_var(--primary)]"></div>
                      <span className="text-[11px] text-text-main">Submitted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
                      <span className="text-[11px] text-text-muted">Message</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
                      <span className="text-[11px] text-text-muted">Delivered</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


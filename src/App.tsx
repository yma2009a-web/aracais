/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, Compass, Layers, Menu, X, ArrowRight, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    {
      title: 'Structural Analysis',
      description: 'Advanced computational modeling ensuring uncompromising stability and resilience for visionary architectures.',
      icon: <Layers className="w-8 h-8 text-gold" />,
    },
    {
      title: 'Parametric Design',
      description: 'Algorithmic generation of complex geometries, optimizing material usage and aesthetic fluidity.',
      icon: <Compass className="w-8 h-8 text-gold" />,
    },
    {
      title: 'Project Management',
      description: 'End-to-end execution with precision, aligning multi-disciplinary teams to deliver on time and beyond expectations.',
      icon: <Building2 className="w-8 h-8 text-gold" />,
    },
  ];

  const projects = [
    {
      title: 'Aura Tower',
      category: 'Skyscraper',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Vertex Residence',
      category: 'Luxury Villa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
    {
      title: 'Nexus Hub',
      category: 'Urban Infrastructure',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
    },
    {
      title: 'Echo Pavilion',
      category: 'Parametric Structure',
      image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-obsidian text-white selection:bg-gold selection:text-obsidian overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-4 h-4 bg-gold rounded-full pointer-events-none z-[100] mix-blend-difference"
        animate={{ 
          x: mousePosition.x - 8, 
          y: mousePosition.y - 8,
          scale: isHovering ? 3 : 1
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a 
            href="#" 
            className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className="text-gold">ARACADIS</span>
            <span className="text-white/70 text-sm font-normal tracking-widest uppercase hidden sm:inline-block">Engineering</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-gold transition-colors uppercase tracking-wider"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-sm font-medium uppercase tracking-wider"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Inquire
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-display font-light text-white/90 hover:text-gold transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-obsidian">
        <div className="absolute inset-0 z-0">
          <motion.img
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 30, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
            alt="Futuristic skyscraper at golden hour"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-grid opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/10 via-obsidian/60 to-obsidian"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="overflow-hidden mb-2">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter"
              >
                ENGINEERING
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter text-stroke-gold"
              >
                TOMORROW.
              </motion.h1>
            </div>
            
            <p className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mb-12 leading-relaxed border-l-2 border-gold pl-6 ml-2">
              Where structural integrity meets visionary design. We architect the impossible.
            </p>
            
            <div className="flex flex-wrap gap-4 ml-2">
              <a
                href="#projects"
                className="px-8 py-4 bg-gold text-obsidian font-medium uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-2"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#expertise"
                className="px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Our Expertise
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
        </motion.div>
      </section>

      {/* Marquee */}
      <div className="relative flex overflow-hidden whitespace-nowrap border-y border-white/10 py-6 bg-charcoal z-20">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
          className="flex gap-12 items-center"
        >
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">STRUCTURAL INTEGRITY</span>
              <span className="text-white/20 text-2xl">✦</span>
              <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">PARAMETRIC DESIGN</span>
              <span className="text-white/20 text-2xl">✦</span>
              <span className="font-display text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">VISIONARY ARCHITECTURE</span>
              <span className="text-white/20 text-2xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Vision Section */}
      <section id="vision" className="py-24 md:py-32 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-12 block">01 // The Vision</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Defying Gravity.<br />
                <span className="text-stroke">Defining Eras.</span>
              </h2>
              <div className="pl-6 border-l border-gold/30 space-y-6">
                <p className="text-white/70 text-xl leading-relaxed font-light">
                  At Aracadis, we don't just engineer buildings; we engineer legacies. Our approach fuses rigorous structural science with avant-garde architectural ambition.
                </p>
                <p className="text-white/50 text-lg leading-relaxed font-light">
                  By leveraging advanced computational modeling and sustainable material science, we push the boundaries of what is physically possible, creating structures that are as resilient as they are breathtaking.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                  alt="Architectural detail"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/10 m-4 z-10 pointer-events-none"></div>
                {/* Tech overlay */}
                <div className="absolute bottom-6 right-6 text-right z-20 mix-blend-difference hidden sm:block">
                  <span className="block font-mono text-xs text-gold">LAT: 40.7128° N</span>
                  <span className="block font-mono text-xs text-gold">LNG: 74.0060° W</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-gold -z-10 hidden sm:block"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 border-r-2 border-t-2 border-gold -z-10 hidden sm:block"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise / Services Section */}
      <section id="expertise" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
            <div>
              <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">02 // Our Disciplines</span>
              <h2 className="font-display text-5xl md:text-7xl font-bold">Engineering<br/>Excellence</h2>
            </div>
            <p className="text-white/50 max-w-sm text-right hidden md:block">
              Precision-driven methodologies for the modern built environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative p-8 md:p-10 bg-obsidian border border-white/5 hover:border-gold/50 transition-colors duration-500"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                <div className="mb-12 flex justify-between items-start">
                  <div className="p-4 bg-charcoal-light rounded-sm group-hover:bg-gold/10 transition-colors duration-500">
                    {service.icon}
                  </div>
                  <span className="font-mono text-white/20 text-4xl font-bold group-hover:text-gold/20 transition-colors">0{index + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/50 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Editorial List */}
      <section id="projects" className="py-24 md:py-32 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-4 block">03 // Selected Works</span>
          <h2 className="font-display text-5xl md:text-7xl font-bold">Featured Projects</h2>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="border-t border-white/10">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="group relative border-b border-white/10 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 md:gap-16 z-10">
                  <span className="font-mono text-gold text-xl md:text-2xl opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</span>
                  <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold group-hover:text-stroke transition-all duration-500">{project.title}</h3>
                </div>
                <span className="text-white/50 uppercase tracking-widest text-sm z-10 group-hover:text-gold transition-colors">{project.category}</span>
                
                {/* Hover Image Reveal (Desktop) */}
                <div className="hidden md:block absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] aspect-[4/3] opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-700 z-0 scale-90 group-hover:scale-100 overflow-hidden shadow-2xl shadow-black/50">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <span className="text-gold text-sm font-mono uppercase tracking-widest mb-12 block text-center">04 // Initiate</span>
          
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl font-bold mb-8">Let's Build the <span className="text-stroke">Extraordinary.</span></h2>
            <p className="text-white/50 text-xl font-light">
              Partner with Aracadis to bring your most ambitious architectural visions to structural reality.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            <div className="lg:col-span-4 flex flex-col justify-center space-y-12 lg:pr-12 lg:border-r border-white/10">
              <div className="group">
                <h4 className="font-mono text-gold text-sm mb-2">Global Headquarters</h4>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">100 Horizon Way, Suite 4500<br />Metropolis, NY 10001</p>
              </div>
              <div className="group">
                <h4 className="font-mono text-gold text-sm mb-2">Direct Inquiries</h4>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">vision@aracadis.engineering</p>
              </div>
              <div className="group">
                <h4 className="font-mono text-gold text-sm mb-2">Phone</h4>
                <p className="text-white/70 text-lg group-hover:text-white transition-colors">+1 (555) 888-9999</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8 lg:pl-12"
            >
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors peer"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="absolute left-0 top-4 text-white/50 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Name</label>
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors peer"
                      placeholder=" "
                    />
                    <label htmlFor="company" className="absolute left-0 top-4 text-white/50 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Company</label>
                  </div>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-white/50 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Email Address</label>
                </div>
                <div className="relative group">
                  <textarea
                    id="message"
                    rows={1}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-gold transition-colors peer resize-none"
                    placeholder=" "
                  ></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-white/50 font-mono text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">Project Details</label>
                </div>
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-8 py-4 font-mono font-bold text-obsidian bg-gold overflow-hidden transition-all hover:scale-105"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center gap-2">
                    SUBMIT INQUIRY <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-obsidian py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-display font-bold text-xl tracking-tighter flex items-center gap-2">
            <span className="text-gold">ARACADIS</span>
          </div>
          <div className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Aracadis Engineering. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>LinkedIn</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Instagram</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

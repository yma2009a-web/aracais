/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, Compass, Layers, Menu, X, ArrowRight, ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      title: 'The Vertex Residence',
      category: 'Luxury Villa',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    },
    {
      title: 'Nexus Transit Hub',
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
    <div className="min-h-screen bg-obsidian text-white selection:bg-gold selection:text-obsidian">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-obsidian/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="font-display font-bold text-2xl tracking-tighter flex items-center gap-2">
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
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2.5 border border-gold text-gold hover:bg-gold hover:text-obsidian transition-all duration-300 text-sm font-medium uppercase tracking-wider"
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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=2010&auto=format&fit=crop"
            alt="Futuristic skyscraper at golden hour"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/60 to-obsidian"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-6">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Skyline of Tomorrow
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 font-light max-w-2xl mb-10 leading-relaxed">
              Where structural integrity meets visionary design. We architect the impossible.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-8 py-4 bg-gold text-obsidian font-medium uppercase tracking-wider hover:bg-gold-light transition-colors flex items-center gap-2"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#expertise"
                className="px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider hover:border-gold hover:text-gold transition-colors"
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

      {/* Vision Section */}
      <section id="vision" className="py-24 md:py-32 bg-obsidian relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
                Defying Gravity.<br />Defining Eras.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                At Aracadis, we don't just engineer buildings; we engineer legacies. Our approach fuses rigorous structural science with avant-garde architectural ambition.
              </p>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                By leveraging advanced computational modeling and sustainable material science, we push the boundaries of what is physically possible, creating structures that are as resilient as they are breathtaking.
              </p>
              <a href="#about" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors uppercase tracking-wider text-sm font-medium">
                Read our manifesto <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1931&auto=format&fit=crop"
                  alt="Architectural detail"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 border border-white/10 m-4"></div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-gold/30 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise / Services Section */}
      <section id="expertise" className="py-24 md:py-32 bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16 md:mb-24">
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Our Disciplines</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Engineering Excellence</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group p-8 bg-obsidian border border-white/5 hover:border-gold/30 transition-colors duration-500"
              >
                <div className="mb-6 p-4 bg-charcoal-light inline-block rounded-sm group-hover:bg-gold/10 transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section id="projects" className="py-24 md:py-32 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Selected Works</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-white/70 hover:text-gold transition-colors uppercase tracking-wider text-sm font-medium">
            View all projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-12 max-w-[100rem] mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-xs font-medium uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        {/* Abstract background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-obsidian -skew-x-12 translate-x-32 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold text-sm font-medium uppercase tracking-widest mb-4 block">Initiate a Project</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Let's Build the<br />Extraordinary.</h2>
              <p className="text-white/60 text-lg mb-12 max-w-md">
                Partner with Aracadis to bring your most ambitious architectural visions to structural reality.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Global Headquarters</h4>
                    <p className="text-white/60">100 Horizon Way, Suite 4500<br />Metropolis, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gold shrink-0" />
                  <p className="text-white/60">vision@aracadis.engineering</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gold shrink-0" />
                  <p className="text-white/60">+1 (555) 888-9999</p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-obsidian p-8 md:p-10 border border-white/5"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-white/50">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-charcoal border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs uppercase tracking-widest text-white/50">Company</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full bg-charcoal border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                      placeholder="Organization"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/50">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/50">Project Details</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us about your vision..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gold text-obsidian font-medium uppercase tracking-wider py-4 hover:bg-gold-light transition-colors"
                >
                  Submit Inquiry
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
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Instagram</a>
            <a href="#" className="text-white/40 hover:text-gold transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

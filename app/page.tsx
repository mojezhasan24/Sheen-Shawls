'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journalEntries = [
  { slug: 'the-quiet-history-of-pashmina', title: 'The Quiet History of Pashmina', text: 'A meditation on softness, scarcity, and the cultural memory kept within each handwoven shawl.' },
  { slug: 'collecting-antique-textiles', title: 'Collecting Antique Textiles', text: 'How connoisseurs read provenance, patina, and restraint before they ever read a price.' },
  { slug: 'care-for-the-future', title: 'Care for the Future', text: 'A study in conservation, patience, and preserving the character of a piece through time.' },
];

const collections = [
  { slug: 'antique-pashmina', title: 'Antique Pashmina', subtitle: 'Museum-quality handwoven Pashmina preserved across generations.', img: '/images/collections/antique-pashmina-01.png' },
  { slug: 'sozni-embroidery', title: 'Sozni Embroidery', subtitle: 'Needlework so fine that every stitch disappears into poetry.', img: '/images/collections/sozni-collection-01.png' },
  { slug: 'kani-shawls', title: 'Kani Shawls', subtitle: 'Handwoven masterpieces created through thousands of coded wooden bobbins.', img: '/images/collections/kani-shawl-01.png' },
  { slug: 'jamawar-heritage', title: 'Jamawar Heritage', subtitle: 'Dense woven narratives once reserved for royalty and ceremonial occasions.', img: '/images/collections/jamawar-01.jpg' },
  { slug: 'antique-zari-shawls', title: 'Antique Zari Shawls', subtitle: 'Gold and silver woven heirlooms carrying the elegance of another century.', img: '/images/collections/antique-zari-01.png' },
  { slug: 'dorukha-reversible-shawls', title: 'Dorukha (Reversible) Shawls', subtitle: 'Two perfectly finished faces woven into a single extraordinary textile.', img: '/images/collections/dorukha-01.jpg' },
  { slug: 'tilla-embroidery', title: 'Tilla Embroidery', subtitle: 'Traditional metallic embroidery executed with remarkable patience and precision.', img: '/images/collections/tilla-01.jpg' },
  { slug: 'kalamkari-heritage-pieces', title: 'Kalamkari Heritage Pieces', subtitle: 'Where painted storytelling meets luxurious textile tradition.', img: '/images/collections/kalamkari-01.jpg' },
  { slug: 'bridal-heirloom-collection', title: 'Bridal Heirloom Collection', subtitle: 'Exceptional shawls preserved for weddings, family legacies, and ceremonial gifting.', img: '/images/collections/bridal-heirloom-01.jpg' },
  { slug: 'museum-restoration', title: 'Museum Restoration', subtitle: 'Before & after conservation projects showcasing invisible darning and heritage repair.', img: '/images/restoration/museum-restoration-01.jpg' },
  { slug: 'collectors-archive', title: "Collector's Archive", subtitle: 'Extremely rare one-of-one acquisitions available only through private consultation.', img: '/images/archive/collectors-archive-01.jpg' },
  { slug: 'bespoke-heritage-commissions', title: 'Bespoke Heritage Commissions', subtitle: 'Personal sourcing, restoration, and curation for collectors, designers, museums, and institutions.', img: '/images/collections/bespoke-heritage-01.jpg' },
];

const restorationMoments = [
  { n: 'I', text: 'Every repair begins with close reading — the weave, the fibre, the age of the dye, and the subtle shift in tone visible only in natural light. Nothing is assumed. Everything is observed.' },
  { n: 'II', text: 'Thread is selected by hand with the precision of matching a rare pigment: a shade reflecting not just the surface but the surrounding depth, lustre, and patina of the cloth.' },
  { n: 'III', text: 'The completed intervention is nearly imperceptible. Not invisible through concealment — invisible through understanding. The shawl continues to speak its own language.' },
];

const W = 'mx-auto max-w-[1320px] px-5 sm:px-8 md:px-12 lg:px-20';
const EYE = 'text-[9px] sm:text-[10px] uppercase tracking-[0.42em] sm:tracking-[0.46em] text-[#7B6A59]';
const DISP = 'font-display font-light leading-[0.96] sm:leading-[0.93] tracking-[-0.022em] text-[#1A1410]';
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.1 },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
});

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', enquiry: '' });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y < 60) {
        setShowHeader(true);
      } else if (y > lastScrollY + 6) {
        setShowHeader(false);
      } else if (y < lastScrollY - 6) {
        setShowHeader(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [mobileOpen]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sub = encodeURIComponent('Private Consultation Enquiry');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nEnquiry: ${form.enquiry}`);
    window.location.href = `mailto:sheenshawls@gmail.com?subject=${sub}&body=${body}`;
  };

  return (
    <main className="min-h-[100dvh] bg-[#F5F0E8] text-[#1A1410] overflow-x-hidden">

      {/* ── MOBILE OVERLAY DRAWER ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-[#F5F0E8] px-6 pt-safe pb-safe md:hidden overflow-y-auto"
          >
            <div className="flex h-16 shrink-0 items-center justify-between border-b border-[#C8BAA4]">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE7DA]">
                  <img src="/logo_bg_less.png" alt="Sheen Shawls" className="h-full w-full rounded-full object-cover" />
                </div>
                <span className="font-script text-[1.45rem] leading-none text-[#1A1410]">Sheen Shawls</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-full active:bg-[#EDE7DA] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className="mt-6 flex flex-col">
              {['collections','restoration','story','journal','contact'].map(s => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-[#DDD4C4] py-4.5 text-[11px] uppercase tracking-[0.42em] text-[#1A1410] transition-colors active:text-[#9E8060]"
                >
                  <span>{s}</span>
                  <span className="text-[10px] text-[#7B6A59]">→</span>
                </a>
              ))}
            </nav>

            <div className="mt-auto pt-8 pb-6 space-y-4 border-t border-[#C8BAA4]/60">
              <p className="text-[9px] uppercase tracking-[0.38em] text-[#7B6A59]">Heritage House · Delhi, India</p>
              <div className="flex flex-col gap-2 text-[12px] text-[#1A1410]">
                <a href="tel:+919528188433" className="tracking-wider hover:text-[#9E8060] transition-colors">+91 95281 88433</a>
                <a href="mailto:sheenshawls@gmail.com" className="tracking-wider hover:text-[#9E8060] transition-colors">sheenshawls@gmail.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FIXED HEADER ── */}
      <header className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-in-out pt-safe
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
        ${scrolled ? 'border-b border-[#C8BAA4]/50 bg-[#F5F0E8]/94 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
        
        {/* Top Banner */}
        <div className="flex h-7 items-center justify-between border-b border-[#C8BAA4]/40 bg-[#F5F0E8]/40 px-3 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#7B6A59] backdrop-blur-sm md:px-8">
          <span className="cursor-pointer select-none px-1 py-0.5 hover:text-[#1A1410]">&lt;</span>
          <a href="#contact" className="truncate px-2 text-center transition-colors hover:text-[#1A1410]">
            Request a Private Consultation In-House
          </a>
          <span className="cursor-pointer select-none px-1 py-0.5 hover:text-[#1A1410]">&gt;</span>
        </div>

        <div className="mx-auto flex max-w-[1320px] flex-col items-center px-4 pb-3 pt-3 sm:px-6 md:px-12 lg:px-20 md:pb-5 md:pt-4">
          
          {/* Logo Row */}
          <div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 pb-3 md:pb-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#EDE7DA] shadow-[0_0_0_1px_rgba(0,0,0,0.06)] md:h-11 md:w-11">
              <img src="/logo_bg_less.png" alt="Sheen Shawls" className="h-full w-full rounded-full object-cover" />
            </div>
            <p className="font-script text-[1.4rem] leading-none text-[#1A1410] sm:text-[1.65rem] md:text-[1.8rem]">Sheen Shawls</p>
          </div>

          {/* Navigation Row */}
          <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-12 lg:gap-16">
            
            {/* Left: Mobile Menu & Desktop Search */}
            <div className="flex items-center justify-start md:justify-end">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="flex items-center gap-2 rounded-full border border-[#C8BAA4]/60 px-3 py-1.5 text-[#1A1410] active:bg-[#EDE7DA] transition-colors md:border-none md:p-0"
              >
                <span className="flex flex-col gap-[4px]">
                  <span className="block h-[1px] w-4 bg-[#1A1410]" />
                  <span className="block h-[1px] w-2.5 bg-[#1A1410]" />
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] text-[#1A1410]">Menu</span>
              </button>
              
              <div className="hidden cursor-pointer items-center gap-2 text-[#1A1410] group md:flex">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span className="text-[10px] uppercase tracking-[0.2em] transition-colors group-hover:text-[#7B6A59]">Search</span>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden items-center justify-center gap-8 text-[10px] uppercase tracking-[0.35em] text-[#7B6A59] md:flex lg:gap-10">
              <a href="#collections" className="transition-colors duration-400 hover:text-[#1A1410]">Collections</a>
              <a href="#restoration" className="transition-colors duration-400 hover:text-[#1A1410]">Restoration</a>
              <a href="#story" className="transition-colors duration-400 hover:text-[#1A1410]">Story</a>
              <a href="#journal" className="transition-colors duration-400 hover:text-[#1A1410]">Journal</a>
              <a href="#contact" className="transition-colors duration-400 hover:text-[#1A1410]">Contact</a>
            </nav>

            {/* Right: Icons & CTA */}
            <div className="flex justify-end text-[#1A1410]">
              <div className="flex items-center gap-3 sm:gap-5">
                <a href="#contact" aria-label="Contact Us" className="cursor-pointer p-1 transition-transform hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </a>
                <a href="#collections" aria-label="View Collections" className="cursor-pointer p-1 transition-transform hover:scale-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </header>

      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[100dvh] overflow-hidden bg-[#F5F0E8]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-[0.38]"
            autoPlay
            muted
            loop
            playsInline
            webkit-playsinline="true"
            preload="metadata"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/65 via-[#F5F0E8]/25 to-[#F5F0E8]/75" />
        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1320px] flex-col px-5 pb-12 pt-28 sm:px-8 md:px-12 md:pb-24 md:pt-32 lg:px-20 lg:pb-32">

          {/* Hero content */}
          <div className="flex flex-1 flex-col justify-end lg:grid lg:grid-cols-[1fr_0.4fr] lg:items-end">
            <div>
              <motion.p className={EYE + ' mb-5 sm:mb-7'} {...fade(0)}>Luxury Heritage House · Delhi, India</motion.p>
              <h1 className={DISP + ' break-words'} style={{ fontSize: 'clamp(2.1rem, 7.2vw, 6.8rem)' }}>
                <motion.span className="block" {...fade(0.06)}>The softness of time,</motion.span>
                <motion.span className="block" {...fade(0.16)}>preserved by hand.</motion.span>
              </h1>
              <motion.p className="mt-6 sm:mt-9 max-w-[52ch] text-[0.95rem] leading-[1.85] text-[#5A4A40] sm:text-[1.05rem] sm:leading-[2]" {...fade(0.24)}>
                Antique Pashmina, Sozni embroidery, Kani shawls, and heritage restoration — presented with quiet confidence, restraint, and enduring care.
              </motion.p>
              <motion.div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-[10px] uppercase tracking-[0.42em]" {...fade(0.32)}>
                <a href="#collections" className="inline-block py-1 text-[#1A1410] underline underline-offset-[5px] decoration-[#C8BAA4] transition-all duration-500 hover:decoration-[#1A1410]">View the Collection</a>
                <a href="#contact" className="inline-block py-1 text-[#7B6A59] transition-colors duration-500 hover:text-[#1A1410]">Request a Private Viewing →</a>
              </motion.div>
            </div>
            <motion.div className="hidden lg:flex lg:flex-col lg:justify-end lg:pb-1 lg:pl-14" {...fade(0.38)}>
              <p className={EYE + ' mb-6'}>House of Textile Memory</p>
              <div className="space-y-5 border-l border-[#C8BAA4] pl-6">
                <p className="text-[0.8rem] leading-[1.95] text-[#5A4A40]">A family-owned heritage house, Delhi. Established 1990.</p>
                <p className="text-[0.8rem] leading-[1.95] text-[#5A4A40]">Three decades devoted to antique Pashmina, invisible darning, and the quiet preservation of a living textile tradition.</p>
                <p className="text-[0.8rem] leading-[1.95] text-[#5A4A40]">Every textile is treated as an object of cultural value, never a commercial product.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ── */}
      <section className="relative overflow-hidden border-t border-[#C8BAA4]">
        <div className={W + ' relative py-16 sm:py-24 md:py-36 lg:py-44'}>
          <span aria-hidden className="pointer-events-none absolute -top-2 right-0 select-none font-display font-light leading-none text-[#1A1410] opacity-[0.04]"
            style={{ fontSize: 'clamp(3.5rem, 15vw, 14rem)' }}>1990</span>
          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-24">
            <motion.h2 className={DISP} style={{ fontSize: 'clamp(1.75rem, 4vw, 3.8rem)' }} {...fade()}>
              A house where heritage<br />becomes atmosphere.
            </motion.h2>
            <motion.p className="max-w-[60ch] self-end text-[0.95rem] leading-[1.85] text-[#5A4A40] sm:text-[1.04rem] sm:leading-[2]" {...fade(0.1)}>
              Sheen Shawls is a family-owned heritage house in Delhi, preserving antique handmade Pashmina and exceptional Kashmiri craft through generations of patient restoration, invisible darning, and considered curation. Not a shop. A living archive.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ── */}
      <section id="collections" className="border-t border-[#C8BAA4]">
        <div className={W + ' py-16 sm:py-24 md:py-36 lg:py-44'}>
          <motion.div className="mb-12 sm:mb-16 lg:mb-24" {...fade()}>
            <p className={EYE + ' mb-4 sm:mb-5'}>Private Collection</p>
            <h2 className={DISP} style={{ fontSize: 'clamp(1.75rem, 4vw, 3.8rem)' }}>
              Not a catalogue of products.<br />A study in inherited craft.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-[60ch] text-[0.95rem] leading-[1.85] text-[#5A4A40] sm:text-[1rem] sm:leading-[2]">
              Every textile carries a history beyond its weave. Our archive is curated not by trends, but by rarity, provenance, artistry, and preservation.
            </p>
          </motion.div>
          <div className="grid gap-x-8 gap-y-14 sm:gap-y-20 md:grid-cols-2 lg:gap-x-14 lg:gap-y-28">
            {collections.map((item, i) => (
              <motion.div key={item.slug} {...fade(i % 2 === 0 ? 0 : 0.08)}>
                <Link href={`/archive/${item.slug}`} className="group block active:opacity-90 transition-opacity">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE7DA]">
                    <img src={item.img} alt={item.title}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 group-hover:opacity-85" />
                  </div>
                  <div className="mt-5 sm:mt-6 pl-px">
                    <h3 className="font-display font-light leading-[1.08] text-[#1A1410] transition-transform duration-500 group-hover:-translate-y-[2px]"
                      style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.85rem)' }}>{item.title}</h3>
                    <p className="mt-2 max-w-[44ch] text-[0.85rem] leading-[1.8] text-[#7B6A59]">{item.subtitle}</p>
                    <span className="mt-5 sm:mt-6 inline-block w-full sm:w-auto text-center border border-[#1A1410] px-5 py-2.5 text-[10px] uppercase tracking-[0.42em] text-[#1A1410] transition-all duration-500 group-hover:bg-[#1A1410] group-hover:text-[#F5F0E8]">
                      Private Viewing
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESTORATION ── */}
      <section id="restoration" className="border-t border-[#C8BAA4]">
        <div className="border-b border-[#C8BAA4] py-10 sm:py-14 md:py-20">
          <motion.p className="mx-auto max-w-[820px] px-5 text-center font-display font-light italic leading-[1.28] text-[#1A1410] sm:px-12"
            style={{ fontSize: 'clamp(1.3rem, 3vw, 2.5rem)' }} {...fade()}>
            "The aim is to make the intervention nearly imperceptible."
          </motion.p>
        </div>
        <div className={W + ' grid gap-10 py-16 sm:py-24 md:py-36 lg:grid-cols-[1fr_0.9fr] lg:gap-20 lg:py-44'}>
          <motion.div {...fade()}>
            <img src="/IMG.jpeg" alt="Thread selection for heritage restoration"
              loading="lazy"
              className="h-[60vw] sm:h-[50vh] w-full object-cover object-center lg:h-[78vh]" />
          </motion.div>
          <motion.div className="flex flex-col justify-center" {...fade(0.1)}>
            <p className={EYE + ' mb-4 sm:mb-5'}>Conservation Practice</p>
            <h2 className={DISP} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}>
              Restoration is the continuation of craft, not a replacement of it.
            </h2>
            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              {restorationMoments.map((m, i) => (
                <motion.div key={m.n} className="flex gap-4 sm:gap-6" {...fade(0.12 + i * 0.08)}>
                  <span className="mt-[3px] shrink-0 font-display text-[0.75rem] font-light italic text-[#9E8060]">{m.n}</span>
                  <p className="text-[0.9rem] sm:text-[0.95rem] leading-[1.85] sm:leading-[2] text-[#5A4A40]">{m.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section id="story" className="border-t border-[#C8BAA4]">
        <div className={W + ' grid gap-10 py-16 sm:py-24 md:py-36 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch lg:gap-20 lg:py-44'}>
          <motion.div className="min-h-[50vw] sm:min-h-[45vh] overflow-hidden lg:min-h-0" {...fade()}>
            <img src="/logo_bg_less.png" alt="Sheen Shawls heritage portrait" loading="lazy" className="h-full w-full object-cover" />
          </motion.div>
          <motion.div className="flex flex-col justify-center lg:pl-6" {...fade(0.12)}>
            <p className={EYE + ' mb-4 sm:mb-5'}>Our Story</p>
            <h2 className={DISP} style={{ fontSize: 'clamp(1.5rem, 3vw, 2.8rem)' }}>
              Since 1990, our family has quietly devoted itself to the preservation of a living textile tradition.
            </h2>
            <div className="mt-6 sm:mt-8 max-w-[60ch] space-y-4 sm:space-y-5 text-[0.95rem] leading-[1.85] sm:text-[1rem] sm:leading-[2] text-[#5A4A40]">
              <p>What began in Delhi as a specialist workshop for antique Pashmina restoration gradually became a trusted destination for collectors, families, designers, and heritage enthusiasts seeking expert conservation and invisible darning.</p>
              <p>Long before the creation of Sheen Shawls, our craftsmanship was already known through Shawls Darners — a name trusted for the care and restoration of antique Pashmina and heritage textiles.</p>
              <p>Today, Sheen Shawls continues that legacy with a refined collector-focused approach, devoted to preserving exceptional craftsmanship for future generations.</p>
            </div>
            <blockquote className="mt-8 sm:mt-10 border-l border-[#C8BAA4] pl-5 sm:pl-6 font-display font-light italic leading-[1.5] text-[#1A1410]"
              style={{ fontSize: 'clamp(0.98rem, 1.8vw, 1.45rem)' }}>
              "Before Sheen Shawls, there was Shawls Darners.<br />Before the name, there was the needle."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── JOURNAL ── */}
      <section id="journal" className="border-t border-[#C8BAA4]">
        <div className={W + ' py-16 sm:py-24 md:py-36 lg:py-44'}>
          <motion.div {...fade()}>
            <p className={EYE + ' mb-4 sm:mb-5'}>The Journal</p>
            <h2 className={DISP} style={{ fontSize: 'clamp(1.75rem, 4vw, 3.8rem)' }}>
              Essays for a slower,<br className="hidden md:block" /> more attentive way of looking.
            </h2>
          </motion.div>
          <motion.div className="mt-12 sm:mt-16 grid border-t border-[#C8BAA4] pt-8 sm:pt-12 lg:grid-cols-[0.32fr_1fr] lg:gap-16" {...fade(0.08)}>
            <p className={EYE + ' mb-4 lg:mb-0 lg:mt-1'}>Featured Essay</p>
            <div>
              <h3 className="font-display font-light leading-[1.08] text-[#1A1410]"
                style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2.7rem)' }}>{journalEntries[0].title}</h3>
              <p className="mt-3 sm:mt-4 max-w-[54ch] text-[0.95rem] leading-[1.85] text-[#5A4A40] sm:text-[1rem] sm:leading-[2]">{journalEntries[0].text}</p>
              <Link href={`/journal/${journalEntries[0].slug}`}
                className="mt-6 sm:mt-7 inline-block text-[10px] uppercase tracking-[0.42em] text-[#7B6A59] transition-colors duration-500 hover:text-[#1A1410]">
                Read the Essay →
              </Link>
            </div>
          </motion.div>
          <div className="grid border-t border-[#C8BAA4] md:grid-cols-2">
            {journalEntries.slice(1).map((entry, i) => (
              <motion.div key={entry.slug}
                className={`border-b border-[#C8BAA4] py-8 sm:py-10 ${i === 0 ? 'md:border-r md:pr-10' : 'md:pl-10'}`}
                {...fade(0.06 + i * 0.1)}>
                <p className={EYE + ' mb-3 sm:mb-4'}>Essay</p>
                <h3 className="font-display font-light leading-[1.1] text-[#1A1410]"
                  style={{ fontSize: 'clamp(1.15rem, 2vw, 1.75rem)' }}>{entry.title}</h3>
                <p className="mt-2 sm:mt-3 max-w-[44ch] text-[0.88rem] leading-[1.85] text-[#7B6A59]">{entry.text}</p>
                <Link href={`/journal/${entry.slug}`}
                  className="mt-5 sm:mt-6 inline-block text-[10px] uppercase tracking-[0.42em] text-[#7B6A59] transition-colors duration-500 hover:text-[#1A1410]">
                  Read the Essay →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-[#C8BAA4]">
        <div className={W + ' grid gap-12 py-16 sm:py-24 md:py-36 lg:grid-cols-[1.2fr_0.8fr] lg:gap-28 lg:py-44'}>
          <motion.div {...fade()}>
            <p className={EYE + ' mb-4 sm:mb-5'}>Private Consultation</p>
            <h2 className={DISP} style={{ fontSize: 'clamp(1.75rem, 4vw, 3.8rem)' }}>
              Request a<br />Private Viewing.
            </h2>
            <p className="mt-4 sm:mt-6 max-w-[52ch] text-[0.95rem] leading-[1.85] sm:text-[1rem] sm:leading-[2] text-[#5A4A40]">
              For collectors, families, and heritage enthusiasts seeking discreet guidance on restoration, identification, or acquisition.
            </p>
            <form className="mt-8 sm:mt-10 space-y-6 sm:space-y-7" onSubmit={handleSubmit}>
              <div className="grid gap-6 sm:gap-7 md:grid-cols-2">
                <label className="block">
                  <span className={EYE}>Name</span>
                  <input
                    type="text"
                    autoComplete="name"
                    className="mt-2 sm:mt-3 w-full border-b border-[#C8BAA4] bg-transparent pb-2 pt-1 text-[16px] text-[#1A1410] outline-none placeholder:text-[#B5A898] transition-colors duration-300 focus:border-[#9E8060]"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(c => ({ ...c, name: e.target.value }))}
                  />
                </label>
                <label className="block">
                  <span className={EYE}>Email</span>
                  <input
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    className="mt-2 sm:mt-3 w-full border-b border-[#C8BAA4] bg-transparent pb-2 pt-1 text-[16px] text-[#1A1410] outline-none placeholder:text-[#B5A898] transition-colors duration-300 focus:border-[#9E8060]"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(c => ({ ...c, email: e.target.value }))}
                  />
                </label>
              </div>
              <label className="block">
                <span className={EYE}>Enquiry</span>
                <textarea
                  className="mt-2 sm:mt-3 min-h-[120px] w-full border-b border-[#C8BAA4] bg-transparent pb-2 pt-1 text-[16px] text-[#1A1410] outline-none placeholder:text-[#B5A898] transition-colors duration-300 focus:border-[#9E8060]"
                  placeholder="Tell us about the textile, restoration need, or viewing request."
                  value={form.enquiry}
                  onChange={e => setForm(c => ({ ...c, enquiry: e.target.value }))}
                />
              </label>
              <button
                type="submit"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#1A1410] px-6 py-3 text-[10px] uppercase tracking-[0.42em] text-[#F5F0E8] transition-all duration-300 hover:bg-[#3D2E24] active:scale-[0.98]"
              >
                Submit Enquiry
              </button>
            </form>
          </motion.div>

          <motion.div className="space-y-8 sm:space-y-9 lg:pt-40" {...fade(0.12)}>
            <div className="border-b border-[#DDD4C4] pb-6 sm:pb-7">
              <p className={EYE}>Studio</p>
              <p className="mt-2 sm:mt-3 text-[0.95rem] tracking-[0.12em] text-[#1A1410]">Delhi, India</p>
            </div>

            <div className="border-b border-[#DDD4C4] pb-6 sm:pb-7">
              <p className={EYE}>By Appointment Only</p>
            </div>

            <div className="border-b border-[#DDD4C4] pb-6 sm:pb-7">
              <p className={EYE}>Telephone</p>
              <div className="mt-2 sm:mt-3 space-y-1">
                <a href="tel:+919528188433" className="block text-[0.95rem] tracking-[0.12em] text-[#1A1410] transition-colors duration-300 hover:text-[#9E8060]">
                  +91 95281 88433
                </a>
                <a href="tel:+919354259539" className="block text-[0.95rem] tracking-[0.12em] text-[#1A1410] transition-colors duration-300 hover:text-[#9E8060]">
                  +91 93542 59539
                </a>
              </div>
            </div>

            <div className="border-b border-[#DDD4C4] pb-6 sm:pb-7">
              <p className={EYE}>Correspondence</p>
              <a href="mailto:sheenshawls@gmail.com" className="mt-2 sm:mt-3 block text-[0.95rem] tracking-[0.12em] text-[#1A1410] transition-colors duration-300 hover:text-[#9E8060]">
                sheenshawls@gmail.com
              </a>
            </div>

            <div>
              <p className={EYE}>Facebook</p>
              <a
                href="https://www.facebook.com/shawls.darners/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 sm:mt-3 block text-[0.95rem] tracking-[0.12em] text-[#1A1410] transition-colors duration-500 hover:text-[#9E8060]"
              >
                shawls.darners ↗
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#C8BAA4] pb-safe">
        <div className={W + ' flex flex-col gap-3 py-8 text-center sm:text-left sm:flex-row sm:items-center sm:justify-between'}>
          <p className={EYE}>© Sheen Shawls by Shawls Darners · Delhi · Est. 1990</p>
          <a href="mailto:sheenshawls@gmail.com" className={EYE + ' transition-colors hover:text-[#1A1410]'}>
            sheenshawls@gmail.com
          </a>
        </div>
      </footer>

    </main>
  );
}

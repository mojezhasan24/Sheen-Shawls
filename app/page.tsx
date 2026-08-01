'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const journalEntries = [
  {
    title: 'The Quiet History of Pashmina',
    text: 'A meditation on softness, scarcity, and the cultural memory kept within each handwoven shawl.',
  },
  {
    title: 'Collecting Antique Textiles',
    text: 'How connoisseurs read provenance, patina, and restraint before they ever read a price.',
  },
  {
    title: 'Care for the Future',
    text: 'A study in conservation, patience, and preserving the character of a piece through time.',
  },
];

const highlights = [
  'Sheen Shawls is a family-owned heritage house based in Delhi, India.',
  'For over three decades, we have specialised in antique handmade Pashmina, Sozni embroidery, Kani shawls, invisible darning, heritage restoration, and textile preservation.',
  'Our work exists at the intersection of craftsmanship, conservation, and collecting.',
  'Every textile is treated as an object of cultural value rather than a commercial product, allowing centuries-old techniques to continue through careful restoration and responsible curation.',
];

export default function HomePage() {
  const [form, setForm] = useState({ name: '', email: '', enquiry: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent('Private Consultation Enquiry');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nEnquiry: ${form.enquiry}`,
    );

    window.location.href = `mailto:sheenshawls@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-[#f7f3ec] text-[#241b16]">
      <section className="relative min-h-screen overflow-hidden bg-[#f7f3ec]">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-[0.34]"
            autoPlay
            muted
            loop
            playsInline
            poster="/logo_bg_less.png"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ec]/70 via-[#f7f3ec]/45 to-[#f7f3ec]/80" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 pb-12 pt-6 md:px-10 lg:px-14">
          <header className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#efe5d5] p-1">
                <img src="/logo.jpg" alt="SHEEN SHAWLS logo" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <p className="font-serif text-[1.2rem] uppercase tracking-[0.35em] text-[#3f322a]">SHEEN SHAWLS</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#8d7154]">Delhi · Heritage House</p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-[11px] uppercase tracking-[0.4em] text-[#6d5645] md:flex">
              <a href="#collections">Collections</a>
              <a href="#restoration">Restoration</a>
              <a href="#story">Story</a>
              <a href="#journal">Journal</a>
              <a href="#contact">Contact</a>
            </nav>
          </header>

          <div className="grid flex-1 items-end gap-8 py-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <p className="mb-4 text-[11px] uppercase tracking-[0.48em] text-[#8d7154]">Luxury Heritage House · Delhi, India</p>
              <h1 className="font-serif text-5xl leading-[0.92] text-[#1e1813] sm:text-6xl lg:text-[7rem]">
                The softness of time,
                <br />
                preserved by hand.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#58483c] lg:text-[1.32rem]">
                Museum-quality antique Pashmina, Sozni embroidery, Kani shawls, and heritage restoration presented with quiet confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.38em]">
                <a href="#collections" className="bg-[#231b16] px-5 py-3 text-[#f4ede4] transition hover:bg-[#4a3a2f]">
                  View the Collection
                </a>
                <a href="#contact" className="border border-[#bca68b] px-5 py-3 text-[#46372d] transition hover:bg-[#ece1d0]">
                  Private Viewing
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: 'easeOut' }}
              className="max-w-md justify-self-end text-[#53463b]"
            >
              <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">House of Textile Memory</p>
              <div className="mt-6 space-y-5">
                {highlights.map((item) => (
                  <p key={item} className="border-b border-[#d6c8b5] pb-4 text-sm leading-7 last:border-b-0 last:pb-0">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">Introduction</p>
            <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[1.1] text-[#2b2119] sm:text-5xl">
              A house where heritage becomes atmosphere.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-[#5d4f43] lg:text-[1.18rem]">
            Sheen Shawls is a family-owned heritage house in Delhi, preserving antique handmade Pashmina and exceptional Kashmiri craft through generations of patient restoration, invisible darning, and considered curation.
          </p>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div className="relative min-h-[70vh] overflow-hidden">
            <img src="/115228.jpg" alt="Antique textile in quiet light" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b140f]/60 via-transparent to-[#f7f3ec]/10" />
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">Private Collection</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-[#2a211a] sm:text-5xl">
              Not a catalogue of products.
              <br />
              A study in inherited craft.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5c4c3f]">
              Antique Pashmina, Sozni embroidery, and Kani shawls are presented as objects of cultural memory. The language is restrained. The feeling is tactile. The experience is immersive.
            </p>
            <div className="mt-8 space-y-4 text-sm leading-7 text-[#4f4033]">
              <p>Antique Pashmina</p>
              <p>Sozni Collection</p>
              <p>Kani Collection</p>
              <p>Collector’s Archive</p>
            </div>
          </div>
        </div>
      </section>

      <section id="restoration" className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">Restoration</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-[#2a211a] sm:text-5xl">
              Restoration is the continuation of craft, not a replacement of it.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-9 text-[#5a4b40]">
              With invisible darning and heritage-led conservation, each textile is treated as an object of provenance and permanence. The work is careful, quiet, and deeply respectful of what came before.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img src="/drop01.png" alt="Detail of exquisite shawl craftsmanship" className="h-[70vh] w-full object-cover" />
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="min-h-[60vh] overflow-hidden">
            <img src="/logo.jpg" alt="SHEEN SHAWLS heritage portrait" className="h-full w-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-[#2a211a] sm:text-5xl">
              Since 1990, our family has quietly devoted itself to the preservation of a living textile tradition.
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-9 text-[#5a4b40]">
              <p>
                What began in Delhi as a specialist workshop for antique Pashmina restoration gradually became a trusted destination for collectors, families, designers, and heritage enthusiasts seeking expert conservation and invisible darning.
              </p>
              <p>
                Long before the creation of Sheen Shawls, our craftsmanship was already known through Shawls Darners, a name trusted for the care and restoration of antique Pashmina and heritage textiles.
              </p>
              <p>
                Today, Sheen Shawls continues that legacy with a refined collector-focused approach, devoted to preserving exceptional craftsmanship for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-[1500px] px-6 py-20 md:px-10 lg:px-14 lg:py-28">
        <div className="mb-10 max-w-4xl">
          <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">The Journal</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-[#2b2119] sm:text-5xl">
            Essays for a slower, more attentive way of looking.
          </h2>
        </div>

        <div className="space-y-6">
          {journalEntries.map((entry, index) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="grid gap-6 border-b border-[#d5c7b4] pb-6 pt-2 lg:grid-cols-[0.4fr_1fr]"
            >
              <p className="text-[11px] uppercase tracking-[0.4em] text-[#8d7154]">Essay {index + 1}</p>
              <div>
                <h3 className="font-serif text-3xl text-[#2a211a]">{entry.title}</h3>
                <p className="mt-3 max-w-3xl text-lg leading-8 text-[#5a4b40]">{entry.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1500px] px-6 py-8 md:px-10 lg:px-14 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.45em] text-[#8d7154]">Private Consultations</p>
            <h2 className="mt-4 font-serif text-4xl leading-[1.15] text-[#2b2119] sm:text-5xl">
              Request a private consultation.
            </h2>
            <p className="mt-6 text-lg leading-9 text-[#5a4b40]">
              For collectors, families, and heritage enthusiasts seeking discreet guidance on restoration, identification, or acquisition.
            </p>

            <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-[11px] uppercase tracking-[0.38em] text-[#6f5b4a]">
                  Name
                  <input
                    className="mt-2 w-full border-b border-[#bda88b] bg-transparent px-0 py-3 text-base text-[#241b16] outline-none placeholder:text-[#9b8264]"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  />
                </label>
                <label className="block text-[11px] uppercase tracking-[0.38em] text-[#6f5b4a]">
                  Email
                  <input
                    className="mt-2 w-full border-b border-[#bda88b] bg-transparent px-0 py-3 text-base text-[#241b16] outline-none placeholder:text-[#9b8264]"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  />
                </label>
              </div>
              <label className="block text-[11px] uppercase tracking-[0.38em] text-[#6f5b4a]">
                Enquiry
                <textarea
                  className="mt-2 min-h-[140px] w-full border-b border-[#bda88b] bg-transparent px-0 py-3 text-base text-[#241b16] outline-none placeholder:text-[#9b8264]"
                  placeholder="Tell us about the textile, restoration need, or private viewing request."
                  value={form.enquiry}
                  onChange={(event) => setForm((current) => ({ ...current, enquiry: event.target.value }))}
                />
              </label>
              <button type="submit" className="mt-2 text-[11px] uppercase tracking-[0.38em] text-[#32281f] transition hover:text-[#8d7154]">
                Submit Enquiry
              </button>
            </form>
          </div>

          <div className="space-y-8 text-[11px] uppercase tracking-[0.38em] text-[#6f5b4a]">
            <div>
              <p className="text-[#8d7154]">Studio</p>
              <p className="mt-3 text-base tracking-[0.25em] text-[#2b2119]">Delhi, India</p>
            </div>
            <div>
              <p className="text-[#8d7154]">By Appointment Only</p>
            </div>
            <div>
              <p className="text-[#8d7154]">Phone</p>
              <p className="mt-3 text-base tracking-[0.18em] text-[#2b2119]">+91 95281 88433</p>
              <p className="mt-2 text-base tracking-[0.18em] text-[#2b2119]">+91 93542 59539</p>
            </div>
            <div>
              <p className="text-[#8d7154]">Email</p>
              <p className="mt-3 text-base tracking-[0.18em] text-[#2b2119]">sheenshawls@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

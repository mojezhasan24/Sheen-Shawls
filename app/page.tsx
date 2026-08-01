'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const collections = [
  { title: 'Antique Pashmina', note: 'Residue of kings, softened by time.' },
  { title: 'Sozni Collection', note: 'Threaded with quiet precision and memory.' },
  { title: 'Kani Collection', note: 'An heirloom language of woven patience.' },
  { title: 'Collector’s Archive', note: 'One-of-one narrative pieces.' },
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
    <main className="min-h-screen bg-ivory text-charcoal">
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#f7f3ec]">
        <div className="absolute inset-0 bg-grain opacity-80" />
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-30"
            autoPlay
            muted
            loop
            playsInline
            poster="/logo_bg_less.png"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec]/95 via-[#f7f3ec]/70 to-[#f7f3ec]/40" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-14 lg:px-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d8cfbf] bg-[#efe5d5] p-1 shadow-sm">
                <img src="/logo.jpg" alt="SHEEN SHAWLS logo" className="h-full w-full rounded-full object-cover" />
              </div>
              <div>
                <p className="font-serif text-2xl tracking-[0.3em] text-walnut">SHEEN SHAWLS</p>
                <p className="text-[11px] uppercase tracking-[0.35em] text-bronze">Preserving Heritage. One Stitch at a Time.</p>
              </div>
            </div>
            <nav className="hidden gap-8 text-sm uppercase tracking-[0.25em] text-walnut md:flex">
              <a href="#collections">Collections</a>
              <a href="#restoration">Restoration</a>
              <a href="#story">Our Story</a>
              <a href="#journal">Journal</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>

          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="max-w-4xl"
            >
              <p className="mb-5 text-xs uppercase tracking-[0.45em] text-bronze">Luxury Heritage House · Delhi, India</p>
              <h1 className="font-serif text-5xl leading-[0.95] text-[#1f1814] sm:text-6xl lg:text-8xl">
                Preserving Heritage.
                <br />
                One Stitch at a Time.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-walnut">
                Discover museum-quality handcrafted Pashmina shawls, antique textiles, and restoration services created through generations of craftsmanship.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#collections" className="rounded-full border border-charcoal bg-charcoal px-7 py-3 text-sm uppercase tracking-[0.28em] text-ivory transition hover:bg-walnut">
                  Explore Collections
                </a>
                <a href="#contact" className="rounded-full border border-walnut px-7 py-3 text-sm uppercase tracking-[0.28em] text-walnut transition hover:bg-[#eadfcd]">
                  Book Private Viewing
                </a>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: 'easeOut' }}
              className="rounded-[2rem] border border-[#cbbca1] bg-[#fbf8f2]/90 p-6 shadow-luxe backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-bronze">House of Textile Memory</p>
              <div className="mt-6 space-y-5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 border-b border-[#d8cfbf] pb-4 last:border-b-0 last:pb-0">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-gold" />
                    <p className="text-sm leading-6 text-walnut">{item}</p>
                  </div>
                ))}
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Luxury Introduction</p>
            <h2 className="font-serif text-4xl leading-tight">A house where textile heritage becomes collectible memory.</h2>
          </div>
          <p className="max-w-3xl text-lg leading-9 text-walnut">
            SHEEN SHAWLS is a family-owned heritage house in Delhi, preserving antique handmade Pashmina shawls, museum pieces, Sozni embroidery, Kani shawls, and exquisite Kashmiri textiles through the patient artistry of invisible darning and conservation.
          </p>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Featured Collections</p>
            <h2 className="font-serif text-4xl">Auction Catalogue, not commerce.</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[1.5rem] border border-[#d8cfbf] bg-[#fbf8f2]"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={index === 0 ? '/115228.jpg' : index === 1 ? '/drop01.png' : index === 2 ? '/drop02.png' : '/logo.jpg'}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a17]/50 to-transparent" />
              </div>
              <div className="space-y-3 p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-bronze">Curated Piece</p>
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="text-sm leading-6 text-walnut">{item.note}</p>
                <a href="#contact" className="inline-block pt-2 text-xs uppercase tracking-[0.32em] text-walnut">Inquire</a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="restoration" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-[#efe7da] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Restoration Showcase</p>
            <h2 className="mt-4 font-serif text-4xl">Restoration is more than repair.</h2>
            <p className="mt-5 text-lg leading-8 text-walnut">
              It is the careful continuation of another artisan’s work. Using traditional invisible darning techniques developed over decades, we restore antique Pashmina while preserving its original character, weave, and artistic integrity.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Each project begins with a detailed assessment before every stitch is matched by hand to the surrounding fabric. The result is a restoration that honours history instead of replacing it.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-[#d8cfbf] bg-[#fbf8f2] p-6">
              <p className="text-xs uppercase tracking-[0.36em] text-bronze">Process</p>
              <h3 className="mt-3 font-serif text-2xl">Before & After</h3>
              <p className="mt-3 text-sm leading-6 text-walnut">A precise restoration narrative where loss becomes a respectful continuation.</p>
            </div>
            <div className="rounded-[1.5rem] border border-[#d8cfbf] bg-[#fbf8f2] p-6">
              <p className="text-xs uppercase tracking-[0.36em] text-bronze">Consultation</p>
              <h3 className="mt-3 font-serif text-2xl">Private Review</h3>
              <p className="mt-3 text-sm leading-6 text-walnut">For collectors, museums, designers, and families seeking discreet guidance.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] overflow-hidden">
            <img src="/logo.jpg" alt="SHEEN SHAWLS heritage portrait" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[2rem] bg-[#f4efe7] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Our Story</p>
            <h2 className="mt-4 font-serif text-4xl">Since 1990, our family has quietly devoted itself to preserving one of South Asia’s finest textile traditions.</h2>
            <p className="mt-5 text-lg leading-8 text-walnut">
              What began in Delhi as a specialist workshop for antique Pashmina restoration gradually became a trusted destination for collectors, families, designers, and heritage enthusiasts seeking expert conservation and invisible darning.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Long before the creation of Sheen Shawls, our craftsmanship was known through Shawls Darners, where every restoration was approached with patience, respect, and an understanding that each shawl carries memories beyond its threads.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Today, Sheen Shawls represents the next chapter of that journey. It is a curated heritage house dedicated not only to conserving historic textiles but also to presenting museum-quality Pashmina, Sozni embroidery, Kani shawls, and rare handcrafted pieces to collectors who value authenticity over fashion and craftsmanship over trends.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Every shawl entrusted to us carries a story. Some celebrate weddings. Some commemorate generations. Some have travelled across continents before finding their way back to careful hands.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Our responsibility is never simply to repair fabric. It is to preserve history, honour artisanship, and ensure these remarkable textiles continue their journey for generations to come.
            </p>
          </div>
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.4em] text-bronze">The Journal</p>
          <h2 className="font-serif text-4xl">A collection of essays exploring the world of heritage textiles, craftsmanship, collecting, restoration, and the cultural history of Pashmina.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-walnut">
            Written for collectors, designers, researchers, and anyone who believes that handmade objects deserve to be understood as much as admired.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {['History of Pashmina', 'Collecting Antique Textiles', 'Care Guide'].map((title) => (
            <article key={title} className="rounded-[1.5rem] border border-[#d8cfbf] bg-[#fbf8f2] p-6">
              <p className="text-xs uppercase tracking-[0.35em] text-bronze">Essay</p>
              <h3 className="mt-3 font-serif text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-walnut">A quiet editorial view into the world of textile connoisseurship and heritage preservation.</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="rounded-[2rem] bg-[#1f1814] px-8 py-10 text-ivory">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.42em] text-[#d0b38d]">Private Consultations</p>
              <h2 className="mt-4 font-serif text-4xl text-ivory">Request a Private Consultation</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#efe5d5]">
                Whether you are seeking a museum-quality Pashmina, advice on restoring a treasured family heirloom, or assistance identifying antique textiles, we welcome private enquiries by appointment.
              </p>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#f6ede2]">
                    Name
                    <input
                      className="mt-2 w-full rounded-full border border-[#bfa483] bg-[#f7f1e7] px-4 py-3 text-charcoal"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                    />
                  </label>
                  <label className="block text-sm uppercase tracking-[0.2em] text-[#f6ede2]">
                    Email
                    <input
                      className="mt-2 w-full rounded-full border border-[#bfa483] bg-[#f7f1e7] px-4 py-3 text-charcoal"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                    />
                  </label>
                </div>
                <label className="block text-sm uppercase tracking-[0.2em] text-[#f6ede2]">
                  Enquiry
                  <textarea
                    className="mt-2 min-h-[140px] w-full rounded-[1.5rem] border border-[#bfa483] bg-[#f7f1e7] px-4 py-3 text-charcoal"
                    placeholder="Tell us about the textile, restoration need, or private viewing request."
                    value={form.enquiry}
                    onChange={(event) => setForm((current) => ({ ...current, enquiry: event.target.value }))}
                  />
                </label>
                <button type="submit" className="rounded-full border border-[#d0b38d] px-6 py-3 text-xs uppercase tracking-[0.32em] text-[#f6ede2] transition hover:bg-[#d0b38d] hover:text-[#1f1814]">
                  Submit Enquiry
                </button>
              </form>
            </div>
            <div className="space-y-6 text-sm uppercase tracking-[0.2em] text-[#f6ede2]">
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#d0b38d]">Studio</p>
                <p className="mt-2 text-lg tracking-[0.18em]">Delhi, India</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#d0b38d]">By Appointment Only</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#d0b38d]">Phone</p>
                <p className="mt-2">+91 95281 88433</p>
                <p className="mt-2">+91 93542 59539</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-[#d0b38d]">Email</p>
                <p className="mt-2">sheenshawls@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] bg-[#f4efe7] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Our Heritage</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-walnut">Established</p>
                <h3 className="mt-2 font-serif text-3xl">1990</h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-walnut">Based In</p>
                <h3 className="mt-2 font-serif text-3xl">Delhi, India</h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-walnut">Legacy</p>
                <h3 className="mt-2 font-serif text-3xl">30+ Years of Craftsmanship</h3>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-walnut">Speciality</p>
                <h3 className="mt-2 font-serif text-3xl">Antique Pashmina Restoration</h3>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#efe7da] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-bronze">Legacy</p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              The craftsmanship behind Sheen Shawls has been trusted by collectors and families since 1990 through Shawls Darners, a name recognised for specialist antique Pashmina restoration and heritage textile conservation.
            </p>
            <p className="mt-4 text-lg leading-8 text-walnut">
              Sheen Shawls continues that legacy through a refined, collector-focused experience dedicated to preserving exceptional craftsmanship for future generations.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

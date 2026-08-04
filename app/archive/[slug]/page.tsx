import Link from 'next/link';
import { notFound } from 'next/navigation';

const archiveEntries = {
  'antique-pashmina': {
    title: 'Antique Pashmina', kicker: 'Curated Heritage Archive',
    intro: 'A study in softness, rarity, and inherited refinement — antique Pashmina presented with the restraint of a museum room and the elegance of a private salon.',
    body: ['These pieces carry the memory of Kashmir\'s most revered handcraft, where the finest wool is selected for warmth, lightness, and the extraordinary delicacy that has long defined luxury in the region.', 'Our antique Pashmina archive is assembled not around volume, but around rarity, provenance, and the quiet emotional resonance that comes from textile objects preserved across generations.', 'Each piece is approached with a collector\'s eye and a conservator\'s patience, ensuring the visual integrity of the shawl remains undisturbed while its story remains fully legible.'],
  },
  'sozni-embroidery': {
    title: 'Sozni Embroidery', kicker: 'Curated Heritage Archive',
    intro: 'Sozni embroidery is a language of patient precision, where a single shawl may hold decades of skilled handwork and an almost invisible sense of poetry.',
    body: ['The finest Sozni work is defined by subtlety — tonal harmony, restrained ornament, and a level of craftsmanship that reveals itself slowly to the eye rather than all at once.', 'At Sheen Shawls, these pieces are examined as both textile and testimony: a record of hand tradition, artistry, and an elegance that avoids excess.', 'They are collected for their refinement, preserved for their cultural significance, and presented as objects of calm distinction rather than decorative noise.'],
  },
  'kani-shawls': {
    title: 'Kani Shawls', kicker: 'Curated Heritage Archive',
    intro: 'Kani shawls are among the most complex expressions of woven craft, composed through a process that is as precise as it is deeply human.',
    body: ['Each design is built using a system of coded wooden bobbins, requiring patience, memory, and an astonishing level of accuracy in every sequence of the weave.', 'The resulting piece is not just a textile. It is a composite of structure, rhythm, and cultural continuity — rare in presence and remarkable in hand.', 'Our archive frames such work as heritage in motion: a living continuation of one of Kashmir\'s most celebrated textile languages.'],
  },
  'jamawar-heritage': {
    title: 'Jamawar Heritage', kicker: 'Curated Heritage Archive',
    intro: 'Jamawar speaks of density, richness, and ceremonial elegance — a textile vocabulary associated with heritage, stature, and enduring symbolism.',
    body: ['Its richness lies not merely in pattern but in the deliberate layering of tone, texture, and woven depth that creates a sense of weight without heaviness.', 'The pieces in this category carry the aura of occasion and inheritance, often preserving the visual language of a family or a cultural moment in a way that feels both exacting and deeply human.', 'These shawls are selected for their composure as well as their beauty — pieces that continue to define the language of handwoven luxury with exceptional clarity.'],
  },
  'antique-zari-shawls': {
    title: 'Antique Zari Shawls', kicker: 'Curated Heritage Archive',
    intro: 'Zari work introduces a gleam that is at once opulent and refined, revealing how heritage textiles preserve luminosity through entirely hand-led craft.',
    body: ['Antique zari shawls balance metallic thread with softness of structure, creating a sense of light that changes with movement and angle.', 'Their beauty is felt as much in the restraint of the composition as in the richness of the surface, making them especially compelling in a modern collection that values measured elegance.', 'In the archive, these pieces offer not only visual allure but a glimpse into how craftsmanship once translated wealth, occasion, and ceremonial value into tactile form.'],
  },
  'dorukha-reversible-shawls': {
    title: 'Dorukha (Reversible) Shawls', kicker: 'Curated Heritage Archive',
    intro: 'Reversible shawls are among the most intellectually elegant expressions of weaving, offering two finished faces in one continuous work of craft.',
    body: ['The value of such a piece lies in its equilibrium: a complete textile surface that feels coherent from either side, each face equally persuasive and refined.', 'In a heritage context, these works demonstrate not merely technical skill but a designer\'s instinct for structure, composition, and visual poise.', 'They remain especially treasured among collectors who value the quiet brilliance of symmetry and the discipline of handloom tradition.'],
  },
  'tilla-embroidery': {
    title: 'Tilla Embroidery', kicker: 'Curated Heritage Archive',
    intro: 'Tilla work elevates surface into ornament with remarkable delicacy, made by hand with precision that is at once visible and almost architectural in its control.',
    body: ['Traditional metallic embroidery is a language of light, where each thread contributes to a subtle, reflective rhythm that enriches the entire textile without overwhelming it.', 'The pieces we archive in this category are selected for the balance they strike between ornament and restraint — a rare quality that keeps the work sophisticated and enduring.', 'In entire collections, such shawls serve as luminous anchors, preserving a historically important craft in a contemporary editorial language.'],
  },
  'kalamkari-heritage-pieces': {
    title: 'Kalamkari Heritage Pieces', kicker: 'Curated Heritage Archive',
    intro: 'Kalamkari heritage pieces are distinguished by their narrative character, where painted storytelling and handloom structure co-exist in a deeply cultivated quiet.',
    body: ['The visual strength of these textiles comes from their sense of intention: drawn motifs, responsive linework, and a relationship between image and cloth that feels inherently ceremonial.', 'Such pieces appeal to collectors who are drawn to workmanship with a sense of narrative, where every surface carries a memory of practice, place, and ritual.', 'Their presentation within the Sheen archive emphasises not merely the visible image, but the craftsmanship that gives it its integrity.'],
  },
  'bridal-heirloom-collection': {
    title: 'Bridal Heirloom Collection', kicker: 'Curated Heritage Archive',
    intro: 'The bridal heirloom collection gathers exceptional shawls reserved for milestone moments — garments and keepsakes that carry stature, memory, and visual permanence.',
    body: ['Heritage bridal textiles are often admired for their presence, yet their true value lies in the emotional continuity they preserve: a family tradition, a ceremonial gesture, a lasting object of significance.', 'Each piece is selected for the way it communicates both luxury and inheritance, offering a strong sense of occasion without sacrificing restraint.', 'These pieces are curated as heirlooms in the fullest sense, preserving their emotional and material relevance for future generations.'],
  },
  'museum-restoration': {
    title: 'Museum Restoration', kicker: 'Curated Heritage Archive',
    intro: 'Our restoration archive speaks to the ethics of conservation: how to repair a textile so that its story remains intact, while its material life continues with dignity.',
    body: ['Restoration at Sheen Shawls begins with a close reading of the object in its own environment — understanding both the losses and the strengths of the weave before any intervention takes place.', 'When a shawl is damaged, our role is not to erase the evidence of age but to support the continuity of the object through selected, highly disciplined repair work.', 'The result is a piece that still feels deeply rooted in its own history, even as its future remains secure and beautifully preserved.'],
  },
  'collectors-archive': {
    title: "Collector's Archive", kicker: 'Curated Heritage Archive',
    intro: 'This is the rarest part of the collection — a private archive for exceptional one-of-one pieces, selected with a collector\'s understanding of provenance, artistry, and cultural value.',
    body: ['These textiles are not simply stored; they are considered, studied, and held in a spirit of quiet stewardship until the right private viewing can occur.', 'Our collector\'s archive exists for those who understand that heritage is measured not only in beauty, but in permanence, traceable lineage, and material truth.', 'This room is intended as a future-facing space — a place where extraordinary textiles remain available to the connoisseur, the institution, and those who value craftsmanship beyond trend.'],
  },
  'bespoke-heritage-commissions': {
    title: 'Bespoke Heritage Commissions', kicker: 'Curated Heritage Archive',
    intro: 'Where private sourcing, restoration, and curation intersect, bespoke heritage commissions offer a highly considered route to acquiring or preserving extraordinary textiles.',
    body: ['These commissions are shaped through dialogue, material understanding, and a careful respect for the history of each piece or family context involved.', 'Whether the purpose is acquisition, restoration, or long-term conservation, our approach remains rooted in preservation rather than spectacle.', 'Such engagements allow clients to participate in a deeply personal and intellectually serious form of heritage stewardship.'],
  },
} as const;

const EYE = 'text-[9px] sm:text-[10px] uppercase tracking-[0.42em] sm:tracking-[0.46em] text-[#7B6A59]';

export default function ArchiveDetailPage({ params }: { params: { slug: string } }) {
  const entry = archiveEntries[params.slug as keyof typeof archiveEntries];
  if (!entry) notFound();

  return (
    <main className="min-h-[100dvh] bg-[#F5F0E8] text-[#1A1410] overflow-x-hidden">
      <div className="relative min-h-[100dvh]">
        <div className="absolute inset-0">
          <img src="/img22.png" alt="" className="h-full w-full object-cover opacity-[0.38]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/68 via-[#F5F0E8]/52 to-[#F5F0E8]/72" />

        <div className="relative z-10 mx-auto flex min-h-[100dvh] max-w-[1320px] flex-col px-5 py-4 sm:px-8 sm:py-6 md:px-12 lg:px-20">
          <header className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-4 border-b border-[#C8BAA4] pb-4 sm:pb-5 pt-safe">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDE7DA] md:h-14 md:w-14">
                <img src="/logo_bg_less.png" alt="Sheen Shawls" className="h-full w-full rounded-full object-cover" />
              </div>
              <div className="leading-none">
                <p className="font-script text-[1.35rem] leading-none text-[#1A1410] sm:text-[1.5rem] md:text-[1.6rem]">Sheen Shawls</p>
                <p className="mt-1 sm:mt-1.5 text-[8px] uppercase tracking-[0.32em] sm:tracking-[0.36em] text-[#7B6A59]">Delhi · Heritage House · Est. 1990</p>
              </div>
            </div>
            <Link
              href="/"
              className="inline-flex min-h-[38px] items-center justify-center border border-[#1A1410] px-4 py-2 text-[9px] sm:text-[10px] uppercase tracking-[0.38em] text-[#1A1410] transition-all duration-300 hover:bg-[#1A1410] hover:text-[#F5F0E8] active:scale-[0.98]"
            >
              ← Return
            </Link>
          </header>

          <section className="flex flex-1 items-start py-8 sm:py-12 md:py-16 lg:py-20">
            <article className="grid w-full max-w-5xl gap-6 sm:gap-10 md:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              <div className="bg-[#EDE7DA] p-5 sm:p-6 lg:p-8">
                <p className={EYE + ' mb-3 sm:mb-4'}>{entry.kicker}</p>
                <h1 className="font-display font-light leading-[1.05] text-[#1A1410]"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>{entry.title}</h1>
                <div className="mt-6 sm:mt-8 aspect-[3/4] bg-[#F5F0E8]" />
              </div>
              <div className="flex flex-col justify-center bg-[#F5F0E8] p-5 sm:p-6 lg:p-10">
                <p className="text-[0.95rem] leading-[1.85] text-[#3D3028] sm:text-[1.05rem] sm:leading-[2]">{entry.intro}</p>
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">
                  {entry.body.map(p => (
                    <p key={p} className="text-[0.9rem] leading-[1.85] text-[#5A4A40] sm:text-[0.95rem] sm:leading-[2]">{p}</p>
                  ))}
                </div>
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-[10px] uppercase tracking-[0.4em]">
                  <a href="mailto:sheenshawls@gmail.com?subject=Private%20Viewing%20Enquiry"
                    className="inline-flex min-h-[44px] items-center justify-center bg-[#1A1410] px-6 py-3 text-center text-[#F5F0E8] transition-all duration-300 hover:bg-[#3D2E24] active:scale-[0.98]">
                    Request Private Viewing
                  </a>
                  <Link href="/"
                    className="inline-flex min-h-[44px] items-center justify-center border border-[#1A1410] px-6 py-3 text-center text-[#1A1410] transition-all duration-300 hover:bg-[#1A1410] hover:text-[#F5F0E8] active:scale-[0.98]">
                    ← All Collections
                  </Link>
                </div>
              </div>
            </article>
          </section>

          <footer className="mt-auto border-t border-[#C8BAA4] pt-4 pb-safe">
            <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.38em] sm:tracking-[0.42em] text-[#1A1410] text-center sm:text-left">
              Sheen Shawls by Shawls Darners · Heritage Restoration · Private Consultations
            </p>
          </footer>
        </div>
      </div>
    </main>
  );
}

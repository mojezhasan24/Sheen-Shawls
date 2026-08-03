'use client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const essays = {
  'the-quiet-history-of-pashmina': {
    title: 'The Quiet History of Pashmina',
    intro: 'Pashmina is often spoken of in terms of softness, but its true character is even richer: a fabric shaped by the movement of families, trade routes, and the patient care of hands that understood the value of restraint.',
    body: ['In the world of heritage textiles, softness is never an accident. It is the result of long preparation, careful spinning, and the disciplined rhythm of handloom craft. A shawl that feels light in the hand carries within it the memory of those who chose patience over haste.', 'To collect or wear such a textile is not simply to own an object. It is to enter a relationship with its cultural lineage: the high-altitude valleys, the knowledge passed from one generation to the next, the careful attention that allows a fabric to endure while preserving its subtle character.', 'At Sheen Shawls, we honour that quiet history by treating each piece as more than a garment. It is a document of craft, a surviving fragment of atmospheric beauty, and a living testament to the grace of handmade continuity.'],
  },
  'collecting-antique-textiles': {
    title: 'Collecting Antique Textiles',
    intro: 'Collecting antique textiles begins not with price, but with attention. The connoisseur learns to read the weave, the worn edge, the dye, and the recorded history that sits quietly in the cloth itself.',
    body: ['A handwoven shawl or antique textile communicates through signs that are easy to overlook. The way light settles across its surface, the faint variation in thread direction, the tenderness of a border worn by use over decades — all of these offer clues to provenance and value.', 'The most discerning collectors do not chase spectacle. They seek integrity: the presence of age that remains respectful, the evidence of careful handling, and the visual balance that gives a piece its presence without excess.', 'In this sense, collecting is an act of dialogue. Each textile asks for patience, and the collector responds with knowledge, restraint, and a deeper respect for what time has preserved.'],
  },
  'care-for-the-future': {
    title: 'Care for the Future',
    intro: 'Preservation is not merely about protection. It is about ensuring that the language of a textile continues to be understood, felt, and carried forward with integrity.',
    body: ['A heritage shawl lives through its material as much as its appearance. Fine fibres, delicate embroidery, and weathered edges all require considered care. The work of restoring a textile is therefore less about forcing it back to perfection than about allowing it to remain itself.', 'At Sheen Shawls, every intervention is guided by the same principle: the repair should never become louder than the object it serves. This is why our restoration practice is rooted in tonal matching, structural awareness, and patient craftsmanship.', 'In preserving these pieces for the future, we are not freezing them in time. We are helping them continue to speak, quietly and beautifully, across generations.'],
  },
} as const;

const EYE = 'text-[10px] uppercase tracking-[0.46em] text-[#7B6A59]';

export default function JournalEssayPage({ params }: { params: { slug: string } }) {
  const essay = essays[params.slug as keyof typeof essays];
  if (!essay) notFound();

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1A1410]">
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/img22.png" alt="" className="h-full w-full object-cover opacity-[0.38]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8]/68 via-[#F5F0E8]/52 to-[#F5F0E8]/72" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1320px] flex-col px-6 py-5 md:px-12 lg:px-20">
          <header className="flex items-center justify-between border-b border-[#C8BAA4] pb-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EDE7DA] md:h-14 md:w-14">
                <img src="/logo_bg_less.png" alt="Sheen Shawls" className="h-full w-full rounded-full object-cover" />
              </div>
              <div className="leading-none">
                <p className="font-script text-[1.4rem] leading-none text-[#1A1410] md:text-[1.6rem]">Sheen Shawls</p>
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.36em] text-[#7B6A59]">Delhi · Heritage House · Est. 1990</p>
              </div>
            </div>
            <Link href="/" className="inline-block border border-[#1A1410] px-5 py-2 text-[10px] uppercase tracking-[0.4em] text-[#1A1410] transition-all duration-500 hover:bg-[#1A1410] hover:text-[#F5F0E8]">← Return</Link>
          </header>

          <section className="flex flex-1 items-start py-12 md:py-16 lg:py-20">
            <article className="grid w-full max-w-5xl gap-10 md:grid-cols-[0.75fr_1.25fr] lg:gap-16">
              
              <div className="bg-[#EDE7DA] p-6 lg:p-8">
                <p className={EYE + ' mb-5'}>The Journal</p>
                <h1 className="font-display font-light leading-[1.02] text-[#1A1410]"
                  style={{ fontSize: 'clamp(1.9rem, 4vw, 3.5rem)' }}>{essay.title}</h1>
                <div className="mt-12 hidden aspect-[3/4] bg-[#F5F0E8] md:block" />
              </div>

              <div className="flex flex-col justify-center bg-[#F5F0E8] p-6 lg:p-10">
                <p className="text-[1.05rem] leading-[2] text-[#3D3028] md:text-[1.1rem]">{essay.intro}</p>
                <div className="mt-8 space-y-6">
                  {essay.body.map(p => (
                    <p key={p} className="text-[1rem] leading-[2.05] text-[#5A4A40]">{p}</p>
                  ))}
                </div>
                <div className="mt-12 border-t border-[#C8BAA4] pt-8">
                  <Link href="/"
                    className="inline-block border border-[#1A1410] px-6 py-3 text-[#1A1410] transition-all duration-500 hover:bg-[#1A1410] hover:text-[#F5F0E8]">
                    ← Return to Sheen Shawls
                  </Link>
                </div>
              </div>
              
            </article>
          </section>

          <footer className="mt-auto border-t border-[#C8BAA4] pt-5">
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#1A1410]">Sheen Shawls by Shawls Darners · Heritage Restoration · Private Consultations</p>
          </footer>
        </div>
      </div>
    </main>
  );
}

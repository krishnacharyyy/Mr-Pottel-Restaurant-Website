import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, MapPin, Phone, Mail, Flame, Leaf, Wheat } from 'lucide-react';

const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Mr+Pottel%2C+Sy+No+401+%26+402%2C+Bypass+Road%2C+Gopanpalle%2C+Kanteshwar%2C+Nizamabad';
const dishes = [
  { name: 'Pottel Jathara', note: 'A grand platter of hand-picked mutton cuts, grilled to perfection.', mark: '01' },
  { name: 'Pottel Pourusham', note: 'Authentic Telugu-style mutton, cooked slow, rich, and bold.', mark: '02' },
  { name: 'Haddi Thodd', note: 'Juicy, meaty indulgence for those who love deep flavors and generous portions.', mark: '03' },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <main className="site grain">
      <header className="fixed z-30 top-0 left-0 w-full border-b border-white/10 bg-[#171613]/90 text-[#f3ecdf] backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 md:px-10">
          <a href="#top" onClick={closeMenu} aria-label="Mr Pottel home" className="group leading-none">
            <span className="block serif text-[26px] tracking-[-.06em]">MR <span className="text-[#cb4831]">POTTEL</span></span>
            <span className="mt-1 block text-[8px] tracking-[.28em] text-[#bcb3a5]">TELUGU MUTTON HOUSE</span>
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[.16em] lg:flex" aria-label="Main navigation">
            <a className="nav-link" href="#story">Our story</a><a className="nav-link" href="#signatures">Signatures</a><a className="nav-link" href="#farm">The farm</a><a className="nav-link" href="#visit">Find us</a>
          </nav>
          <a href="tel:+917032267788" className="hidden items-center gap-2 border border-[#f3ecdf]/35 px-4 py-3 text-[10px] uppercase tracking-[.17em] transition hover:border-[#cb4831] hover:bg-[#cb4831] md:flex">Call the house <ArrowUpRight size={14}/></a>
          <button className="flex h-11 w-11 items-center justify-center border border-white/20 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen}>{menuOpen ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#171613] px-6 py-7 text-xs uppercase tracking-[.18em] lg:hidden"><a href="#story" onClick={closeMenu}>Our story</a><a href="#signatures" onClick={closeMenu}>Signatures</a><a href="#farm" onClick={closeMenu}>The farm</a><a href="#visit" onClick={closeMenu}>Find us</a><a href="tel:+917032267788" onClick={closeMenu} className="text-[#e16a4f]">Call +91 703 226 77 88</a></nav>}
      </header>

      <section id="top" className="relative flex min-h-[760px] items-end bg-[#171613] pt-[76px] text-[#f3ecdf] md:min-h-[850px]">
        <div className="absolute inset-0"><img src="/images/mutton-hero.jpg" alt="Illustrative image of a firelit mutton platter" className="h-full w-full object-cover object-[60%_center] md:object-center"/><div className="absolute inset-0 bg-gradient-to-r from-[#15130f]/95 via-[#15130f]/75 to-[#15130f]/10"/><div className="absolute inset-0 bg-gradient-to-t from-[#15130f]/75 via-transparent to-[#15130f]/30"/></div>
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-end gap-10 px-5 pb-14 pt-24 md:px-10 md:pb-20 lg:grid-cols-[1fr_auto]">
          <div className="max-w-[820px]">
            <div className="reveal mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.25em] text-[#df795e]"><span className="h-px w-9 bg-[#df795e]"/>Nizamabad · Raised at Unnati Farms</div>
            <h1 className="serif reveal delay-1 text-[clamp(3.6rem,9vw,8.25rem)] leading-[.91] tracking-[-.065em]">Rooted in the<br/><em className="font-medium text-[#d3543a]">land.</em> Raised by fire.</h1>
            <p className="reveal delay-2 mt-7 max-w-[460px] text-sm leading-7 text-[#ded6ca] md:text-base">Telugu mutton, with its roots close to home. Farm-raised lamb from Unnati Farms, brought to the table with warmth and fire.</p>
            <div className="reveal delay-3 mt-9 flex flex-wrap items-center gap-4"><a href="#signatures" className="group inline-flex items-center gap-5 bg-[#b93724] px-6 py-4 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:bg-[#d14a31]">Meet the signatures <ArrowRight size={16} className="transition-transform group-hover:translate-x-1"/></a><a href="#story" className="inline-flex items-center gap-2 px-3 py-4 text-[10px] uppercase tracking-[.18em] text-[#eee5d8]">Discover our story <ArrowDown size={14}/></a></div>
          </div>
          <div className="hidden items-center gap-3 pb-2 text-[9px] uppercase tracking-[.22em] text-[#d6cabb] lg:flex"><span className="h-12 w-px bg-[#d6cabb]/40"/><span className="[writing-mode:vertical-rl]">A table with a story</span></div>
        </div>
        <div className="absolute bottom-0 left-0 h-px w-full fire-line"/>
      </section>

      <section id="story" className="relative bg-[#eee9df] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div><span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#b63a27]">01 / The house</span><p className="serif mt-7 text-[clamp(2.5rem,5.5vw,5rem)] leading-[1.02] tracking-[-.055em]">Good food knows <em>where it comes from.</em></p></div>
          <div className="flex flex-col justify-end pb-2"><div className="mb-6 h-px w-14 bg-[#b63a27]"/><p className="max-w-[570px] text-[15px] leading-8 text-[#51483f]">Mr Pottel is a Telugu mutton restaurant built around a simple belief: the best meals begin long before the kitchen. Our lamb is raised at our own Unnati Farms, giving every plate a connection to the land behind it.</p><p className="mt-5 max-w-[570px] text-[15px] leading-8 text-[#51483f]">Then comes the fire, the craft, and the joy of sharing. Come as you are; there is room at our table.</p><a href="#farm" className="mt-8 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#aa3626]">Follow it back to the farm <ArrowRight size={15}/></a></div>
        </div>
        <div className="absolute right-[8%] top-12 hidden serif text-[190px] leading-none text-[#d9d0c2]/55 lg:block">“</div>
      </section>

      <section id="signatures" className="bg-[#201d19] px-5 py-24 text-[#f3ecdf] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><div><span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#df795e]">02 / House signatures</span><h2 className="serif mt-5 text-[clamp(3rem,7vw,6.3rem)] leading-[.95] tracking-[-.06em]">Names worth<br className="hidden md:block"/> remembering.</h2></div><p className="max-w-[310px] pb-2 text-sm leading-7 text-[#bdb4a8]">Some things need no introduction. These are the dishes that carry the name of the house.</p></div>
          <div className="mt-14 border-t border-[#f3ecdf]/20">{dishes.map((dish) => <article key={dish.mark} className="group grid grid-cols-[54px_1fr_auto] items-center gap-4 border-b border-[#f3ecdf]/20 py-7 transition-colors hover:bg-white/[.025] md:grid-cols-[90px_1fr_auto] md:py-9"><span className="serif text-lg italic text-[#df795e]">{dish.mark}</span><div><h3 className="serif text-[clamp(1.65rem,4vw,3.3rem)] tracking-[-.04em] transition-colors group-hover:text-[#e47559]">{dish.name}</h3><p className="mt-2 text-xs leading-6 text-[#bdb4a8] md:text-sm">{dish.note}</p></div><span className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 transition group-hover:rotate-45 group-hover:border-[#dc6247] group-hover:text-[#e47559] sm:flex"><ArrowUpRight size={16}/></span></article>)}</div>
          <p className="mt-6 text-[10px] uppercase tracking-[.14em] text-[#968d82]">Ask our team about the full menu when you visit.</p>
        </div>
      </section>

      <section id="farm" className="relative overflow-hidden bg-[#b43826] px-5 py-24 text-[#f6eee3] md:px-10 md:py-32">
        <div className="absolute -right-20 -top-20 h-[430px] w-[430px] rounded-full border border-white/10"/><div className="absolute -right-2 top-0 h-[280px] w-[280px] rounded-full border border-white/10"/>
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1fr_.8fr] lg:gap-28">
          <div><span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#f5c0a8]">03 / From our own ground</span><h2 className="serif mt-6 text-[clamp(3.3rem,7.5vw,7.2rem)] leading-[.92] tracking-[-.065em]">From Unnati<br/><em>to your table.</em></h2></div>
          <div><div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full border border-white/40"><Wheat size={21}/></div><p className="text-lg leading-8 text-[#f7e7dc]">Our lamb is raised at Unnati Farms, our own farm. That relationship matters to us: it keeps the beginning of the meal close, honest, and part of who we are.</p><div className="mt-8 flex items-center gap-3 border-t border-white/30 pt-6 text-[10px] font-semibold uppercase tracking-[.17em]"><Leaf size={15}/>Farm raised · House prepared</div></div>
        </div>
      </section>

      <section className="bg-[#d9d0c2] px-5 py-16 md:px-10 md:py-20"><div className="mx-auto flex max-w-[1240px] flex-col items-start justify-between gap-8 md:flex-row md:items-center"><div className="flex items-center gap-5"><div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#201d19] text-[#e36c50]"><Flame size={23}/></div><div><p className="serif text-2xl tracking-[-.03em]">A meal made to be shared.</p><p className="mt-1 text-xs text-[#6a6056]">Come hungry. Leave with a story.</p></div></div><a href="#visit" className="group inline-flex items-center gap-5 border-b border-[#201d19]/40 pb-2 text-[10px] font-semibold uppercase tracking-[.18em] transition hover:border-[#b43826] hover:text-[#b43826]">Make your way to us <ArrowRight size={15} className="transition-transform group-hover:translate-x-1"/></a></div></section>

      <section id="visit" className="bg-[#171613] px-5 py-24 text-[#f3ecdf] md:px-10 md:py-32">
        <div className="mx-auto max-w-[1240px]"><div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24"><div><span className="text-[10px] font-semibold uppercase tracking-[.25em] text-[#df795e]">04 / Find your way here</span><h2 className="serif mt-6 text-[clamp(3.2rem,7vw,6.7rem)] leading-[.92] tracking-[-.06em]">The table is<br/><em>in Nizamabad.</em></h2><a href={mapsUrl} target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-3 border-b border-[#df795e]/70 pb-3 text-[10px] font-semibold uppercase tracking-[.18em] text-[#f1dfd4] transition hover:text-[#df795e]">Open in Google Maps <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></a></div>
          <div className="grid gap-8 self-end border-t border-white/20 pt-8 sm:grid-cols-2 lg:gap-10"><div><span className="text-[9px] uppercase tracking-[.22em] text-[#a89f93]">Visit</span><a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-4 flex gap-3 text-sm leading-7 text-[#e7dfd4] hover:text-[#df795e]"><MapPin size={17} className="mt-1 shrink-0 text-[#df795e]"/><span>Sy No 401 &amp; 402, Bypass Road,<br/>Gopanpalle, Kanteshwar,<br/>Nizamabad</span></a></div><div><span className="text-[9px] uppercase tracking-[.22em] text-[#a89f93]">Get in touch</span><a className="mt-4 flex items-center gap-3 text-sm leading-7 text-[#e7dfd4] transition hover:text-[#df795e]" href="tel:+917032267788"><Phone size={16} className="text-[#df795e]"/>+91 703 226 77 88</a><a className="mt-2 flex items-center gap-3 break-all text-sm leading-7 text-[#e7dfd4] transition hover:text-[#df795e]" href="mailto:mrpottelresto@gmail.com"><Mail size={16} className="shrink-0 text-[#df795e]"/>mrpottelresto@gmail.com</a></div></div>
        </div><div className="mt-20 flex flex-col justify-between gap-5 border-t border-white/15 pt-7 text-[9px] uppercase tracking-[.19em] text-[#968d82] sm:flex-row"><span className="serif text-[17px] tracking-[-.04em] text-[#f3ecdf]">MR <span className="text-[#cb4831]">POTTEL</span></span><span>Telugu mutton. From our own farm.</span><a href="#top" className="inline-flex items-center gap-2 transition hover:text-[#f3ecdf]">Back to top <ArrowDown size={12} className="rotate-180"/></a></div></div>
      </section>
    </main>
  );
}
export default App;

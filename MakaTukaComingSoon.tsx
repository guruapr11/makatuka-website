export default function MakaTukaComingSoon() {
  const sneakPeeks = [
    {
      title: "Susegad FC",
      desc: "Football-inspired coastal streetwear with a laid-back Goa soul.",
      emoji: "⚽",
    },
    {
      title: "Oh Fish Collection",
      desc: "Bold art, fish parades, beach humour, and conversations starter prints.",
      emoji: "🐟",
    },
    {
      title: "Feni Vidi Vici",
      desc: "Cocktail culture meets vintage design and modern lifestyle aesthetics.",
      emoji: "🍹",
    },
    {
      title: "Fontainhas Stories",
      desc: "Art-inspired visuals influenced by Goa’s colorful streets and heritage.",
      emoji: "🎨",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-orange-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-pink-500/20 blur-3xl rounded-full" />
        <div className="absolute top-[30%] left-[50%] w-[250px] h-[250px] bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-14 py-6 border-b border-white/10 backdrop-blur-sm">
        <div className="text-2xl md:text-3xl font-black tracking-[0.25em] uppercase">
          MakaTuka
        </div>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white/70">
          <a href="#story" className="hover:text-white transition">
            Story
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#comingsoon" className="hover:text-white transition">
            Launch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 px-6 md:px-14 py-24 md:py-32 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Launching Soon
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight uppercase">
              Goa-Inspired
              <span className="block text-orange-400">Lifestyle</span>
              Brand
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl">
              MakaTuka is building a modern lifestyle brand inspired by Goa,
              coastal culture, football, art, music, street stories, and bold
              conversations.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform">
                Join The Waitlist
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition">
                Sneak Peek ↓
              </button>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <div className="text-3xl font-black">2026</div>
                <div className="text-white/60 text-sm uppercase tracking-widest mt-1">
                  Launch Era
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">10+</div>
                <div className="text-white/60 text-sm uppercase tracking-widest mt-1">
                  Creative Drops
                </div>
              </div>

              <div>
                <div className="text-3xl font-black">∞</div>
                <div className="text-white/60 text-sm uppercase tracking-widest mt-1">
                  Goa Energy
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-[320px] h-[520px] md:w-[420px] md:h-[620px] rounded-[3rem] border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]"></div>

              <div className="absolute top-10 left-8 right-8 bg-black/40 border border-white/10 rounded-3xl p-5 backdrop-blur-lg">
                <div className="text-xs uppercase tracking-[0.25em] text-orange-300 mb-3">
                  Upcoming Drop
                </div>
                <div className="text-3xl font-black leading-tight uppercase">
                  Susegad
                  <span className="block text-orange-400">FC</span>
                </div>
              </div>

              <div className="absolute bottom-10 left-8 right-8 space-y-4">
                <div className="bg-white/10 border border-white/10 rounded-3xl p-5 backdrop-blur-lg">
                  <div className="text-sm uppercase tracking-widest text-white/60 mb-2">
                    Vibe
                  </div>
                  <div className="text-2xl font-bold">
                    Art • Football • Coastal Life
                  </div>
                </div>

                <div className="bg-orange-500 rounded-3xl p-6 text-black">
                  <div className="text-sm uppercase tracking-widest font-semibold mb-2">
                    MakaTuka Manifesto
                  </div>
                  <div className="text-2xl font-black leading-tight uppercase">
                    Not Just Clothing.
                    <br />
                    A Lifestyle Mood.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section
        id="story"
        className="relative z-10 px-6 md:px-14 py-20 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm uppercase tracking-[0.3em] text-orange-300 mb-6">
              Our Story
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase">
              Built From
              <span className="block text-orange-400">Goa Culture</span>
            </h2>
          </div>

          <div className="text-lg text-white/70 leading-relaxed space-y-6">
            <p>
              MakaTuka blends coastal living, football culture, local humour,
              retro aesthetics, and modern streetwear into one creative
              universe.
            </p>

            <p>
              From typography-heavy statement pieces to artsy visuals inspired
              by Goa’s streets, cocktails, beaches, and conversations — every
              collection is designed to feel like a story.
            </p>
          </div>
        </div>
      </section>

      {/* Sneak Peeks */}
      <section
        id="projects"
        className="relative z-10 px-6 md:px-14 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-orange-300 mb-5">
                Sneak Peek
              </div>

              <h2 className="text-4xl md:text-6xl font-black uppercase leading-tight">
                Projects In
                <span className="block text-orange-400">The Works</span>
              </h2>
            </div>

            <div className="max-w-md text-white/60 text-lg leading-relaxed">
              A glimpse into the creative drops, collections, and experiments
              shaping the MakaTuka universe.
            </div>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {sneakPeeks.map((item, index) => (
              <div
                key={index}
                className="group border border-white/10 rounded-[2rem] p-8 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{item.emoji}</div>

                <h3 className="text-2xl font-black uppercase mb-4 group-hover:text-orange-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-white/65 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="relative z-10 border-y border-white/10 py-6 overflow-hidden bg-white/5 backdrop-blur-lg">
        <div className="flex whitespace-nowrap animate-[marquee_18s_linear_infinite] text-2xl md:text-4xl font-black uppercase tracking-[0.2em]">
          <span className="mx-8">Goa Culture</span>
          <span className="mx-8 text-orange-400">Streetwear</span>
          <span className="mx-8">Football</span>
          <span className="mx-8 text-orange-400">Art</span>
          <span className="mx-8">Coastal Lifestyle</span>
          <span className="mx-8 text-orange-400">Creative Drops</span>
        </div>
      </section>

      {/* Launch CTA */}
      <section
        id="comingsoon"
        className="relative z-10 px-6 md:px-14 py-28"
      >
        <div className="max-w-5xl mx-auto text-center border border-white/10 rounded-[3rem] bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-2xl p-10 md:p-20">
          <div className="text-sm uppercase tracking-[0.35em] text-orange-300 mb-6">
            The Countdown Begins
          </div>

          <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.95]">
            Something Big
            <span className="block text-orange-400">Is Coming</span>
          </h2>

          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            We’re crafting a lifestyle brand that feels bold, artistic, rooted,
            and unforgettable.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-black/40 border border-white/15 rounded-full px-6 py-4 min-w-[280px] outline-none focus:border-orange-400"
            />

            <button className="bg-orange-500 text-black px-8 py-4 rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform">
              Notify Me
            </button>
          </div>

          <div className="mt-10 text-white/40 text-sm uppercase tracking-[0.25em]">
            Follow The Journey • MakaTuka 2026
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 md:px-14 py-10 border-t border-white/10 flex flex-col md:flex-row justify-between gap-6 text-white/50 text-sm uppercase tracking-widest">
        <div>© 2026 MakaTuka Lifestyle</div>

        <div className="flex gap-6">
          <span>Instagram</span>
          <span>Goa</span>
          <span>India</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

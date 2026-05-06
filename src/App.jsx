import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ProjectModal from "./components/ProjectModal.jsx";
import Footer from "./components/Footer.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import ExperienceModal from "./components/ExperienceModal.jsx";
import ExperienceCarousel from "./components/ExperienceCarousel.jsx";
import AwardsWheel from "./components/AwardsWheel.jsx";
import { projects, experiences, awards } from "./content/portfolio.js";
import CursorSparkle from "./components/CursorSparkle.jsx";
import AwardCard from "./components/AwardCard.jsx";
import AwardModal from "./components/AwardModal.jsx";
import IntroSplash from "./components/IntroSplash.jsx";
import { initAnalytics, trackEvent } from "./lib/analytics";

export default function App() {
  const ref = useRef(null);

  const heroRef = useRef(null);
  const workRef = useRef(null);
  const experienceRef = useRef(null);
  const awardsRef = useRef(null);
  const contactRef = useRef(null);

  const [active, setActive] = useState(null);
  const bgUrl = `${import.meta.env.BASE_URL}media/images/bg3.png`;
  const [expOpen, setExpOpen] = useState(false);
  const [activeAward, setActiveAward] = useState(null);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowIntro(false);
    }, 2800);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    initAnalytics();

    const sections = [
      { name: "hero", ref: heroRef },
      { name: "projects", ref: workRef },
      { name: "experience", ref: experienceRef },
      { name: "awards", ref: awardsRef },
      { name: "contact", ref: contactRef },
    ];

    const seen = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionName = entry.target.getAttribute("data-section");

          if (entry.isIntersecting && sectionName && !seen.has(sectionName)) {
            seen.add(sectionName);
            trackEvent("section_view", {
              section_name: sectionName,
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach(({ name, ref }) => {
      if (ref.current) {
        ref.current.setAttribute("data-section", name);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <>
      <IntroSplash show={showIntro} />
        <CursorSparkle />

      <div
        ref={ref}
        className="min-h-screen glow"
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <Navbar />

        <main className="mx-auto max-w-6xl px-5 pb-16">
          <div ref={heroRef}>
            <Hero />
          </div>


            <section ref={experienceRef} className="mt-14">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-xl font-semibold tracking-tight">
                Work experience
              </h2>
              <p className="text-sm text-zinc">
                Recent experiences • click to open roadmap
              </p>
            </div>

            <div className="mt-5">
              <ExperienceCarousel
                experiences={experiences}
                onOpen={(e) => {
                  trackEvent("open_experience_roadmap", {
                    experience_id: e.id,
                    company: e.company,
                    role: e.role,
                  });
                  setExpOpen(true);
                }}
              />
            </div>
          </section>

          <section id="work" ref={workRef} className="mt-10">
  <div className="flex items-end justify-between gap-6">
    <h2 className="text-xl font-semibold tracking-tight">
      Consulting and Marketing Projects
    </h2>
    <p className="text-sm text-zinc">
      Click a project to view PDFs/videos.
    </p>
  </div>

  {/* featured row */}
  <div className="mt-6 grid gap-4">
    {projects[0] && (
      <div className="col-span-1">
        <ProjectCard
          project={projects[0]}
          onOpen={() => {
            const p = projects[0];
            trackEvent("open_project", {
              project_id: p.id,
              project_title: p.title,
              project_type: p.type,
            });
            setActive(p);
          }}
          variant="featured"
        />
      </div>
    )}
  </div>

  {/* secondary row */}
  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {projects.slice(1).map((p) => (
      <ProjectCard
        key={p.id}
        project={p}
        onOpen={() => {
          trackEvent("open_project", {
            project_id: p.id,
            project_title: p.title,
            project_type: p.type,
          });
          setActive(p);
        }}
        variant="secondary"
      />
    ))}
  </div>
</section>

          <ExperienceModal
            open={expOpen}
            onClose={() => setExpOpen(false)}
            experiences={experiences}
          />

          <section ref={awardsRef} className="mt-14">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-xl font-semibold tracking-tight">
                Awards and achievements
              </h2>
              <p className="text-sm text-zinc">
                Certificates, awards and recognitions
              </p>
            </div>

            <div className="mt-5">
              <AwardsWheel
                awards={awards}
                onOpen={(award) => setActiveAward(award)}
              />
            </div>
          </section>

          <AwardModal
            award={activeAward}
            onClose={() => setActiveAward(null)}
          />

          <section
            id="contact"
            ref={contactRef}
            className="mt-14 rounded-2xl hero-glass border border-white/10 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold">Contact</h3>

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-sm text-zinc hover:bg-white/15"
                onClick={async () => {
                  const text =
                    "Email: zeenath.sivakumar@edhec.com\n" +
                    "Mobile: +33 0755010477\n" +
                    "WhatsApp: +33 0755010477";
                  await navigator.clipboard.writeText(text);

                  trackEvent("copy_contact", {
                    contact_type: "all",
                  });
                }}
              >
                Copy all
              </button>
            </div>

            <div className="mt-4 grid gap-3 text-zinc-200/90">
              {[
                { label: "Email", value: "zeenath.sivakumar@edhec.com" },
                { label: "Mobile", value: "+33 0755010477" },
                { label: "WhatsApp", value: "+33 0755010477" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/10 backdrop-blur px-4 py-3"
                >
                  <div className="text-sm">
                    <span className="text-zinc">{item.label}:</span>{" "}
                    <span className="text-zinc">{item.value}</span>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-xs text-zinc hover:bg-white/15"
                    onClick={async () => {
                      await navigator.clipboard.writeText(item.value);

                      trackEvent("copy_contact", {
                        contact_type: item.label.toLowerCase(),
                      });
                    }}
                  >
                    Copy
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <ProjectModal project={active} onClose={() => setActive(null)} />
      </div>
    </>
  );
}

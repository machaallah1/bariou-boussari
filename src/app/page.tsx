"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SplitText,
  Magnetic,
  LineReveal,
  Marquee,
  MaskReveal,
  Stagger,
  StaggerItem,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  HeroVisual,
  FloatingElement,
  ConcentricCircles,
  WireframeGrid,
  AbstractBlob,
  StatBlock,
  DotsPattern,
  DesktopWireframe,
  WireframeMockup,
} from "@/components/visuals";

const processSteps = [
  { num: "01", title: "Compréhension", desc: "Identifier le problème réel derrière le brief. Aligner les parties prenantes sur ce qui doit être résolu — pas ce qui est demandé." },
  { num: "02", title: "Recherche", desc: "Construire une base de décision solide : personas, parcours, points de friction. La recherche définit les priorités avant que le design ne commence." },
  { num: "03", title: "Architecture", desc: "Concevoir la structure de l'expérience avant tout. Flux utilisateurs, hiérarchie de l'information, logique de navigation — tout se décide ici." },
  { num: "04", title: "Interface", desc: "Construire la couche visuelle avec rigueur : design system, composants, cohérence. Chaque décision a une raison fonctionnelle." },
  { num: "05", title: "Livraison", desc: "Collaborer avec les développeurs, valider la fidélité, itérer sur les retours réels. Le travail ne s'arrête pas au handoff." },
];

const strengths = [
  { num: "01", title: "Pensée produit", desc: "Le design part du problème métier, pas de la forme. Chaque interface traduit une logique de valeur et une intention produit explicite." },
  { num: "02", title: "Rigueur structurelle", desc: "L'architecture de l'information et les flux sont définis avant le pixel. La structure détermine l'expérience — pas l'inverse." },
  { num: "03", title: "Maîtrise visuelle", desc: "Typographie, densité, rythme d'espacement. La précision visuelle n'est pas esthétique — elle guide la lecture et réduit la charge cognitive." },
  { num: "04", title: "Collaboration terrain", desc: "Travail direct avec les équipes produit, tech et métier. Le design est un levier d'alignement, pas une prestation isolée." },
];

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 orb-1" />
      <div className="absolute inset-0 orb-2" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Hero abstract visual — right side */}
      <div className="absolute right-[-5%] top-[10%] w-[500px] h-[500px] hidden lg:block opacity-60">
        <HeroVisual />
      </div>

      {/* Floating blobs */}
      <FloatingElement className="absolute top-[15%] left-[5%] w-[200px] h-[200px] hidden lg:block" speed={20}>
        <AbstractBlob variant={1} className="w-full h-full opacity-40" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-[25%] right-[25%] w-[120px] h-[120px] hidden lg:block" speed={15} direction="down">
        <AbstractBlob variant={2} className="w-full h-full opacity-30" />
      </FloatingElement>

      {/* Decorative dots */}
      <div className="absolute top-[20%] right-[40%] hidden xl:block opacity-30">
        <DotsPattern cols={5} rows={5} />
      </div>

      {/* Rotating badge */}
      <div className="absolute top-[18%] right-[8%] hidden lg:block">
        <div className="spin-slow w-[120px] h-[120px] relative">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <path id="circle-text" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="none" />
              <text className="fill-[#C4A97D]/30 text-[11px] tracking-[0.35em] uppercase">
                <textPath href="#circle-text">DESIGNER UX/UI &#x2022; PORTFOLIO &#x2022; </textPath>
              </text>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glow-dot" />
          </div>
        </div>
      </div>

      <motion.div
        style={{ y: titleY, opacity }}
        className="max-w-[1400px] mx-auto px-6 md:px-10 w-full relative z-10"
      >
        {/* Top line */}
        <div className="mb-10 md:mb-14">
          <MaskReveal delay={0.2}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C4A97D]/40" />
                <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                  Bariou Boussari
                </span>
                <div className="w-12 h-[1px] bg-[#C4A97D]/40" />
                <span className="text-[#6B635A] text-xs tracking-[0.2em] uppercase hidden sm:inline">
                  Designer UX/UI
                </span>
            </div>
          </MaskReveal>
        </div>

        {/* Main title */}
          <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.92] tracking-[-0.03em] text-foreground">
              <SplitText delay={0.4} stagger={0.025} type="words">
                Designer de
              </SplitText>{" "}
              <span className="italic text-[#C4A97D]">
                <SplitText delay={0.6} stagger={0.025} type="words">
                  produit
                </SplitText>
              </span>
              <br className="hidden md:block" />{" "}
              <SplitText delay={0.7} stagger={0.025} type="words">
                qui pense
              </SplitText>{" "}
              <span className="italic text-[#C4A97D]">
                <SplitText delay={0.9} stagger={0.025} type="words">
                  structure
                </SplitText>
              </span>
              <br className="hidden md:block" />{" "}
              <SplitText delay={1.0} stagger={0.025} type="words">
                  avant de concevoir
              </SplitText>
            </h1>

        {/* Subtitle & CTAs */}
        <motion.div
          style={{ y: subtitleY }}
          className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <MaskReveal delay={1.2}>
              <p className="text-lg md:text-xl text-[#6B635A] max-w-md leading-relaxed">
                Projets, raisonnement et réflexion produit.
                <br />
                  <span className="text-[#8A817A]">Basé à Lomé — disponible à distance ou en présentiel partout en Afrique.</span>
              </p>
          </MaskReveal>

          <MaskReveal delay={1.4}>
            <div className="flex gap-4">
              <Magnetic>
                <Link
                  href="/work"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C4A97D] text-[#080808] text-sm font-medium tracking-[0.12em] uppercase overflow-hidden"
                >
                    <span className="relative z-10">Voir les projets</span>
                  <ArrowRight size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="absolute inset-0 bg-[#D4BC95] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-[#C4A97D]/20 text-foreground text-sm font-medium tracking-[0.12em] uppercase hover:border-[#C4A97D]/50 transition-all duration-500"
                >
                  Contact
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C4A97D]/50 group-hover:bg-[#C4A97D] transition-colors duration-300" />
                </Link>
              </Magnetic>
            </div>
          </MaskReveal>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-6 md:left-10 flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarqueeStrip() {
  const skills = ["Design UX", "Design UI", "Pensée produit", "Design Systems", "Recherche utilisateur", "Prototypage", "Architecture de l'information", "Direction visuelle"];

  return (
    <div className="py-8 border-t border-b border-[rgba(196,169,125,0.05)]">
      <Marquee speed={40}>
        <div className="flex items-center gap-12 mr-12">
          {skills.map((text) => (
            <span key={text} className="flex items-center gap-12">
              <span className="text-xs text-[#6B635A]/50 tracking-[0.2em] uppercase whitespace-nowrap">
                {text}
              </span>
              <span className="glow-dot !w-[4px] !h-[4px] !shadow-none opacity-30" />
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

/* Stats banner between sections */
function StatsStrip() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 cross-pattern opacity-20" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16">
            <StatBlock number="6+" label="Projets livrés" accent />
            <StatBlock number="5+" label="Secteurs couverts" />
            <StatBlock number="3" label="Ans d'expérience" accent />
            <StatBlock number="100%" label="Centré utilisateur" />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: (index % 2) * 0.15 }}
    >
      <Link href={`/work/${project.slug}`} className="group block project-card" data-cursor="Voir">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#111110] aspect-[4/3] rounded-sm">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover project-img transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

          {/* Number */}
          <div className="absolute top-4 left-4">
            <span className="text-[10px] text-white/25 tracking-[0.3em] font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Info overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[9px] text-[#C4A97D] tracking-[0.25em] uppercase font-medium">
                {project.type}
              </span>
              <span className="w-4 h-[1px] bg-[#C4A97D]/20" />
              <span className="text-[9px] text-white/40 tracking-[0.15em] uppercase">
                {project.sector}
              </span>
            </div>
            <p className="text-xs text-white/50 leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Arrow */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-[#C4A97D]/40 transition-all duration-500">
            <ArrowUpRight size={12} className="text-[#C4A97D]" />
          </div>
        </div>

        {/* Title below */}
        <div className="mt-4">
          <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-[#C4A97D] transition-colors duration-500">
            {project.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}

function SelectedWork() {
  const featured = projects.slice(0, 6);

  return (
    <section className="py-24 md:py-36 relative">
      {/* Floating decorative blobs */}
      <FloatingElement className="absolute top-20 right-[5%] w-[180px] h-[180px] hidden lg:block" speed={25}>
        <AbstractBlob variant={3} className="w-full h-full opacity-30" />
      </FloatingElement>
      <FloatingElement className="absolute bottom-40 left-[3%] w-[140px] h-[140px] hidden lg:block" speed={18} direction="down">
        <AbstractBlob variant={1} className="w-full h-full opacity-20" />
      </FloatingElement>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <MaskReveal>
                <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                  Portfolio
                </span>
              </MaskReveal>
              <div className="mt-3">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
                  <SplitText type="words" stagger={0.05}>Projets sélectionnés</SplitText>
                </h2>
            </div>
          </div>
          <Reveal>
            <Magnetic>
              <Link
                href="/work"
                className="hidden sm:inline-flex items-center gap-3 text-sm text-[#6B635A] hover:text-[#C4A97D] transition-colors duration-500 tracking-[0.12em] uppercase link-underline"
              >
                  Tous les projets
                    <ArrowUpRight size={14} />
                </Link>
              </Magnetic>
            </Reveal>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          {/* View all - mobile */}
          <div className="mt-12 sm:hidden text-center">
            <Magnetic>
              <Link
                href="/work"
                className="inline-flex items-center gap-3 text-sm text-[#6B635A] hover:text-[#C4A97D] transition-colors duration-500 tracking-[0.12em] uppercase"
              >
                Tous les projets
              <ArrowUpRight size={14} />
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}

/* Visual showcase between sections — Desktop & Mobile wireframes */
function DesignShowcase() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A09] to-transparent" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
        <div className="text-center mb-12 md:mb-16">
          <MaskReveal>
            <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                Du concept au livrable
              </span>
            </MaskReveal>
            <div className="mt-3">
              <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[0.95]">
                <SplitText type="words" stagger={0.05}>Du wireframe au pixel-perfect</SplitText>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Desktop wireframe */}
          <div className="relative">
            <DesktopWireframe className="w-full max-w-[700px] mx-auto" />
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 hidden lg:block opacity-40">
              <DotsPattern cols={4} rows={4} />
            </div>
          </div>

          {/* Mobile wireframe */}
          <div className="relative max-w-[240px] mx-auto lg:mx-0">
            <WireframeMockup className="w-full" />
            {/* Floating concentric circles */}
            <FloatingElement className="absolute -top-12 -right-12 w-[100px] h-[100px] hidden lg:block" speed={10}>
              <ConcentricCircles className="w-full h-full" rings={3} />
            </FloatingElement>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="py-32 md:py-48 relative">
      <div className="absolute inset-0 cross-pattern opacity-30" />

      {/* Floating wireframe grid decoration */}
      <FloatingElement className="absolute top-32 right-[5%] w-[280px] hidden xl:block opacity-40" speed={15}>
        <WireframeGrid />
      </FloatingElement>

      <LineReveal />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <MaskReveal>
              <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                Méthodologie
              </span>
            </MaskReveal>
            <div className="mt-4 mb-6">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground leading-[0.95]">
                <SplitText type="words" stagger={0.05}>Approche & méthodologie</SplitText>
              </h2>
            </div>
            <Reveal delay={0.3}>
              <p className="text-[#6B635A] leading-relaxed max-w-md">
                De la définition du problème à la livraison — chaque étape a une intention précise et un livrable attendu.
              </p>
            </Reveal>

            {/* Concentric circles illustration */}
            <div className="mt-10 hidden lg:block">
              <ConcentricCircles className="w-[200px] h-[200px] opacity-50" />
            </div>
          </div>

          <Stagger stagger={0.08} delay={0.2}>
            {processSteps.map((step) => (
              <StaggerItem key={step.num}>
                <div className="group flex items-start gap-8 md:gap-12 py-10 border-b border-[rgba(196,169,125,0.05)] hover:border-[#C4A97D]/20 transition-all duration-700">
                  <span className="text-[#C4A97D]/20 text-2xl md:text-3xl font-serif italic group-hover:text-[#C4A97D]/60 transition-colors duration-700 shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-foreground text-xl md:text-2xl font-serif mb-2 group-hover:text-[#C4A97D] transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#6B635A] leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                  <ArrowRight size={16} className="text-[#C4A97D]/0 group-hover:text-[#C4A97D]/50 transition-all duration-500 ml-auto mt-2 shrink-0" />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function StrengthsSection() {
  return (
    <section className="py-32 md:py-48 relative">
      {/* Floating abstract blob */}
      <FloatingElement className="absolute top-20 left-[8%] w-[250px] h-[250px] hidden lg:block" speed={20}>
        <AbstractBlob variant={2} className="w-full h-full opacity-25" />
      </FloatingElement>

      <LineReveal />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48">
        <div className="text-center mb-20 md:mb-28">
          <MaskReveal>
              <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                  Atouts
                </span>
            </MaskReveal>
            <div className="mt-4">
              <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground leading-[0.95]">
                <SplitText type="words" stagger={0.05}>Ce que j'apporte au projet</SplitText>
            </h2>
          </div>
        </div>

        <Stagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {strengths.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative p-10 md:p-14 border border-[rgba(196,169,125,0.05)] hover:border-[#C4A97D]/15 transition-all duration-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4A97D]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Decorative corner dots */}
                <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-[#C4A97D]/10 group-hover:bg-[#C4A97D]/30 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 w-1 h-1 rounded-full bg-[#C4A97D]/10 group-hover:bg-[#C4A97D]/30 transition-colors duration-500" />

                <div className="relative z-10">
                  <span className="text-[#C4A97D]/15 text-5xl md:text-6xl font-serif italic group-hover:text-[#C4A97D]/25 transition-colors duration-700">
                    {s.num}
                  </span>
                  <h3 className="text-foreground text-xl md:text-2xl font-serif mt-6 mb-4 group-hover:text-[#C4A97D] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="text-[#6B635A] leading-relaxed text-sm max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <section ref={ref} className="py-40 md:py-56 relative">
      <LineReveal />
      <motion.div
        style={{ scale }}
        className="max-w-[1400px] mx-auto px-6 md:px-10 pt-40 md:pt-56 text-center relative"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pulse-glow" />

        {/* Concentric circle decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] hidden md:block">
          <ConcentricCircles className="w-full h-full opacity-30" />
        </div>

        <MaskReveal>
          <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
            Me contacter
          </span>
        </MaskReveal>
          <div className="mt-6">
            <h2 className="font-serif text-[clamp(2.2rem,6vw,5.5rem)] text-foreground leading-[0.95] max-w-4xl mx-auto">
              <SplitText type="words" stagger={0.04}>Vous cherchez un designer qui</SplitText>{" "}
              <span className="italic text-[#C4A97D]">
                <SplitText type="words" delay={0.5} stagger={0.04}>comprend le produit</SplitText>
              </span>{" "}
              <SplitText type="words" delay={0.6} stagger={0.04}>avant de concevoir l'interface ?</SplitText>
            </h2>
          </div>

        <MaskReveal delay={0.8}>
          <div className="mt-14">
            <Magnetic>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-4 px-12 py-6 bg-[#C4A97D] text-[#080808] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
              >
                  <span className="relative z-10">Discutons</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-[#D4BC95] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>
            </Magnetic>
          </div>
        </MaskReveal>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <HeroSection />
      <MarqueeStrip />
      <StatsStrip />
      <SelectedWork />
      <DesignShowcase />
      <ProcessSection />
      <StrengthsSection />
      <CTASection />
    </div>
  );
}

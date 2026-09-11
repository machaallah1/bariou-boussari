"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";
import {
  SplitText,
  MaskReveal,
  LineReveal,
  Stagger,
  StaggerItem,
  PageTransition,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  AbstractBlob,
  FloatingElement,
  ConcentricCircles,
  WireframeGrid,
  DotsPattern,
  StatBlock,
  WireframeMockup,
  DesktopWireframe,
} from "@/components/visuals";
import Image from "next/image";

const skills = [
  {
    category: "Stratégie & recherche",
    items: [
      "Recherche utilisateur",
      "Personas & parcours",
      "Architecture info",
      "Wireframing & prototypage",
      "Tests d'utilisabilité",
      "Cadrage & ateliers",
    ],
  },
  {
    category: "Conception & interface",
    items: [
      "Design visuel",
      "Design systems",
      "Direction de design",
      "Typographie",
      "Responsive design",
      "Design d'interaction & micro-interactions",
    ],
  },
  {
    category: "Outils",
    items: ["Figma", "Adobe XD", "Sketch", "Miro", "Notion", "Adobe Illustrator"],
  },
  {
    category: "Soft Skills",
    items: ["Vision produit", "Collaboration", "Accessibilité", "Amélioration continue"],
  },
];

const experience = [
  {
    role: "UX/UI Designer",
    company: "Maono Togo",
    period: "Oct 2024 — Août 2026",
    desc: "Direction du design d'interfaces pour des solutions digitales B2B/B2C, collaboration étroite avec les équipes produit et développement, conception de design systems et composants réutilisables. Accompagnement d'entreprises de premier plan : Togotech, ARCEP, SPBI, BIASA, Pur Alpha, Alea Park, AS-ONE, Lomé Data Center, SIN, Ecom, Majestic, RAMCO.",
  },
  {
    role: "UX/UI Designer — freelance",
    company: "Konecty (France) · projet On se dit oui",
    period: "Oct 2025 — Avr 2026",
    desc: "Design et suivi du site en ligne du projet en collaboration à distance. Conception complète de l'interface de la plateforme de gestion événementielle.",
  },
  {
    role: "UX/UI Designer",
    company: "SLI Afrika",
    period: "Déc 2023 — Sept 2024",
    desc: "Conception d'expériences digitales adaptées aux contraintes du marché africain : accessibilité, simplicité d'utilisation, recherche utilisateur et tests d'utilisabilité.",
  },
  {
    role: "UX/UI Designer",
    company: "CADRECO",
    period: "Juin — Sept 2023",
    desc: "Réalisation de maquettes et prototypes haute fidélité, conception de parcours utilisateurs optimisés et amélioration des produits numériques existants.",
  },
  {
    role: "UX/UI Designer",
    company: "Upsilon Consulting",
    period: "Juil 2022 — Janv 2023",
    desc: "Conception et optimisation d'interfaces pour des projets clients variés avec application d'une méthodologie centrée utilisateur.",
  },
  {
    role: "UX Designer",
    company: "ORTA Service",
    period: "Juin — Juil 2022",
    desc: "Contribution à la conception d'interfaces utilisateur et amélioration de l'expérience utilisateur des produits digitaux.",
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32">
        <ScrollProgress />

        {/* Hero */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-16 right-[8%] w-[200px] h-[200px] hidden lg:block" speed={20}>
            <AbstractBlob variant={2} className="w-full h-full opacity-30" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-20 left-[3%] w-[160px] h-[160px] hidden lg:block" speed={15} direction="down">
            <ConcentricCircles className="w-full h-full opacity-25" rings={3} />
          </FloatingElement>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <MaskReveal>
              <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                À propos
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h1 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] text-foreground max-w-4xl">
                <SplitText type="words" stagger={0.04}>Un designer qui traduit la</SplitText>{" "}
                <span className="italic text-[#C4A97D]">
                  <SplitText type="words" delay={0.5} stagger={0.04}>complexité</SplitText>
                </span>
                <SplitText type="words" delay={0.6} stagger={0.04}> en expériences</SplitText>{" "}
                <span className="italic text-[#C4A97D]">
                  <SplitText type="words" delay={0.8} stagger={0.04}>lisibles</SplitText>
                </span>
                <SplitText type="words" delay={0.9} stagger={0.04}>.</SplitText>
              </h1>
            </div>

            <LineReveal />

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 mt-16 md:mt-24 items-start">
              {/* Photo area with visual richness */}
              <Reveal direction="left">
                <div className="relative">
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#111110]">
                    {/* Placeholder with profile image */}
                    <img src="/images/bariou.png" alt="Bariou Boussari" className="w-full h-full object-cover" />
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid-pattern opacity-30" />
                    {/* Border */}
                    <div className="absolute inset-0 border border-[rgba(196,169,125,0.06)]" />
                  </div>
                  {/* Offset decorative frame */}
                  <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C4A97D]/8 -z-10" />
                  <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-[#C4A97D]/10" />
                  {/* Dots pattern decoration */}
                  <div className="absolute -bottom-10 -left-10 hidden lg:block opacity-40">
                    <DotsPattern cols={5} rows={5} />
                  </div>
                </div>
              </Reveal>

              {/* Bio */}
              <div>
                  <MaskReveal delay={0.2}>
                    <p className="text-xl md:text-2xl text-foreground leading-[1.5] mb-10 font-serif">
                      Je suis Bariou Boussari, Senior UX/UI Designer basé à Lomé.
                      Avec 4 ans d&apos;expérience sur des produits digitaux B2B et B2C, je prends en charge le design de bout en bout.
                    </p>
                  </MaskReveal>

                  <MaskReveal delay={0.3}>
                    <p className="text-[#6B635A] leading-[1.9] mb-6">
                      Mon rôle est de transformer des besoins métier complexes en interfaces que les équipes peuvent livrer : cadrage et arbitrages, recherche utilisateur, architecture de l&apos;information, maquettes haute fidélité et design systems pérennes.
                    </p>
                  </MaskReveal>

                  <MaskReveal delay={0.4}>
                    <p className="text-[#6B635A] leading-[1.9] mb-10">
                      Je travaille en lien direct avec les équipes produit et développement, jusqu&apos;à la mise en production. Des solutions B2B aux plateformes B2C, j&apos;apporte la même exigence : parcours clarifiés, composants réutilisables et cohérence visuelle durable.
                    </p>
                  </MaskReveal>

                <MaskReveal delay={0.5}>
                  <div className="flex items-center gap-6 pt-6 border-t border-[rgba(196,169,125,0.05)]">
                    <StatBlock number="4" label="Ans d'exp." accent />
                    <div className="w-[1px] h-10 bg-[rgba(196,169,125,0.08)]" />
                    <StatBlock number="6+" label="Projets" />
                    <div className="w-[1px] h-10 bg-[rgba(196,169,125,0.08)]" />
                    <StatBlock number="Lomé" label="Basé" />
                  </div>
                </MaskReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Visual showcase */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A09] to-transparent" />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 relative">
            <div className="text-center mb-12">
              <MaskReveal>
                  <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                    Du wireframe au pixel
                  </span>
              </MaskReveal>
              <div className="mt-3">
                <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                  <SplitText type="words" stagger={0.05}>Structurés, fonctionnels, maintenables</SplitText>
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 md:gap-12 items-center">
              <DesktopWireframe className="w-full max-w-[600px] mx-auto" />
              <div className="relative max-w-[200px] mx-auto">
                <WireframeMockup className="w-full" />
                <FloatingElement className="absolute -top-8 -right-8 w-[80px] h-[80px] hidden lg:block" speed={8}>
                  <AbstractBlob variant={3} className="w-full h-full opacity-40" />
                </FloatingElement>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-24 md:py-40 relative">
          {/* Floating wireframe grid */}
          <FloatingElement className="absolute top-20 right-[5%] w-[250px] hidden xl:block opacity-30" speed={18}>
            <WireframeGrid />
          </FloatingElement>

          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
            <MaskReveal>
              <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                Parcours
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground">
                <SplitText type="words" stagger={0.05}>Expérience</SplitText>
              </h2>
            </div>

            <Stagger stagger={0.1}>
              {experience.map((exp) => (
                <StaggerItem key={exp.role + exp.period}>
                  <div className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-20 py-12 md:py-16 border-b border-[rgba(196,169,125,0.05)] hover:border-[#C4A97D]/15 transition-colors duration-700">
                    <span className="text-sm text-[#6B635A] font-mono tracking-wide">
                      {exp.period}
                    </span>
                    <div>
                      <h3 className="text-foreground font-serif text-xl md:text-2xl mb-2 group-hover:text-[#C4A97D] transition-colors duration-500">
                        {exp.role}
                      </h3>
                      <p className="text-[#C4A97D]/60 text-sm mb-5 tracking-wide">
                        {exp.company}
                      </p>
                      <p className="text-[#6B635A] leading-[1.8] max-w-2xl">
                        {exp.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CV CTA Banner */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <Reveal>
              <Link
                href="/cv"
                className="group relative block p-10 md:p-14 border border-[rgba(196,169,125,0.06)] hover:border-[#C4A97D]/20 transition-all duration-700 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#C4A97D]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t border-l border-[#C4A97D]/0 group-hover:border-[#C4A97D]/20 transition-colors duration-500" />
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b border-r border-[#C4A97D]/0 group-hover:border-[#C4A97D]/20 transition-colors duration-500" />

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 border border-[#C4A97D]/15 flex items-center justify-center group-hover:border-[#C4A97D]/30 group-hover:bg-[#C4A97D]/5 transition-all duration-500">
                      <FileText size={18} className="text-[#C4A97D]/60 group-hover:text-[#C4A97D] transition-colors duration-500" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-serif text-lg md:text-xl group-hover:text-[#C4A97D] transition-colors duration-500">
                        Consulter mon CV
                      </h3>
                        <p className="text-[#6B635A] text-sm mt-1">
                          Parcours détaillé, compétences et expériences — format A4
                        </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#C4A97D]/60 text-xs tracking-[0.2em] uppercase group-hover:text-[#C4A97D] transition-colors duration-500">
                    <span>Voir le CV</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Skills */}
        <section className="py-24 md:py-40 relative overflow-hidden">
          <FloatingElement className="absolute bottom-20 left-[5%] w-[200px] h-[200px] hidden lg:block" speed={20} direction="down">
            <AbstractBlob variant={1} className="w-full h-full opacity-20" />
          </FloatingElement>

          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-40">
            <MaskReveal>
              <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                Expertise
              </span>
            </MaskReveal>
            <div className="mt-4 mb-16 md:mb-24">
              <h2 className="font-serif text-4xl md:text-6xl text-foreground">
                <SplitText type="words" stagger={0.05}>Compétences & outils</SplitText>
              </h2>
            </div>

            <Stagger stagger={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              {skills.map((group) => (
                <StaggerItem key={group.category}>
                  <div className="p-8 md:p-10 border border-[rgba(196,169,125,0.04)] hover:border-[#C4A97D]/10 transition-all duration-700 h-full group relative overflow-hidden">
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#C4A97D]/0 group-hover:border-[#C4A97D]/15 transition-colors duration-500" />

                    <h3 className="text-[#C4A97D] text-[10px] tracking-[0.3em] uppercase font-medium mb-8 group-hover:tracking-[0.4em] transition-all duration-500">
                      {group.category}
                    </h3>
                    <ul className="space-y-4">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="text-[#6B635A] text-sm flex items-center gap-3 group-hover:text-[#8A817A] transition-colors duration-500"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#C4A97D]/20 group-hover:bg-[#C4A97D]/40 transition-colors duration-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          <LineReveal />
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-48">
            <div className="max-w-3xl mx-auto text-center relative">
              {/* Decorative concentric circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] hidden md:block">
                <ConcentricCircles className="w-full h-full opacity-20" rings={5} />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pulse-glow rounded-full" />

              <Reveal>
                  <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium block mb-8">
                    Philosophie
                  </span>
                  <div className="space-y-12 relative z-10">
                    <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-[1.3] italic">
                      &laquo; Le design ne règle pas les problèmes de surface.
                      Il révèle les problèmes de structure — et les résout depuis la racine. &raquo;
                    </blockquote>
                    <div className="w-12 h-[1px] bg-[#C4A97D]/20 mx-auto" />
                    <blockquote className="font-serif text-2xl md:text-4xl text-foreground leading-[1.3] italic">
                      &laquo; La simplicité n&apos;est pas l&apos;absence de complexité — c&apos;est le résultat de sa maîtrise. Le bon design rend le complexe naturel. &raquo;
                    </blockquote>
                  </div>
                </Reveal>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

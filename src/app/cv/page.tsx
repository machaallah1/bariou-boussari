"use client";

import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-wrapper min-h-screen pt-24 md:pt-32 pb-24 px-4 sm:px-6">
      {/* Action Bar (hidden on print) */}
      <div className="max-w-[820px] mx-auto mb-8 flex items-center justify-between print-hidden">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 text-[#8A817A] text-sm hover:text-[#C4A97D] transition-colors duration-300"
        >
          <ArrowLeft size={16} />
          <span>Retour au profil</span>
        </Link>
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C4A97D] text-[#080808] text-xs font-semibold tracking-[0.15em] uppercase hover:bg-[#D4BC95] transition-all duration-300 shadow-lg hover:shadow-[#C4A97D]/20 cursor-pointer"
        >
          <Download size={15} />
          Télécharger PDF
        </button>
      </div>

      <div className="flex flex-col items-center gap-12">
        {/* ══════════════════════════════════════════════
            PAGE 1 / 2
        ══════════════════════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="cv-sheet rounded-sm font-sans"
        >
          {/* Header Page 1 — Dark Banner */}
          <div className="bg-[#121211] text-[#EDEAE3] px-8 sm:px-12 pt-10 pb-9">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h1 className="font-serif text-3xl sm:text-4xl tracking-tight text-white leading-none">
                  Bariou<span className="text-[#C4A97D]">.</span>
                </h1>
                <div className="font-serif text-3xl sm:text-4xl tracking-tight text-white leading-none mt-1">
                  Boussari
                </div>
                <p className="mt-3 text-[10px] tracking-[0.28em] uppercase text-[#A69E92] font-medium">
                  DESIGNER UX / UI SENIOR
                </p>
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[11px] leading-tight text-right sm:text-right">
                <span className="text-[9px] tracking-[0.2em] uppercase text-[#857E74] font-medium self-center">
                  BASÉ À
                </span>
                <span className="text-[#EDEAE3]">Lomé, Togo</span>

                <span className="text-[9px] tracking-[0.2em] uppercase text-[#857E74] font-medium self-center">
                  EMAIL
                </span>
                <a
                  href="mailto:bariouboussari2@gmail.com"
                  className="text-[#EDEAE3] hover:text-[#C4A97D] transition-colors"
                >
                  bariouboussari2@gmail.com
                </a>

                <span className="text-[9px] tracking-[0.2em] uppercase text-[#857E74] font-medium self-center">
                  LINKEDIN
                </span>
                <a
                  href="https://linkedin.com/in/bariou-boussari-1a13a8302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDEAE3] hover:text-[#C4A97D] transition-colors"
                >
                  in/bariou-boussari-1a13a8302
                </a>

                <span className="text-[9px] tracking-[0.2em] uppercase text-[#857E74] font-medium self-center">
                  PORTFOLIO
                </span>
                <a
                  href="https://bariou-boussari.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#EDEAE3] hover:text-[#C4A97D] transition-colors"
                >
                  bariou-boussari.vercel.app
                </a>
              </div>
            </div>
          </div>

          {/* Body Page 1 — Warm Stone Grid */}
          <div className="grid grid-cols-1 md:grid-cols-[1.62fr_1fr] divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.08)]">
            {/* Left Main Column */}
            <div className="p-8 sm:p-11 space-y-8">
              {/* Profil */}
              <section>
                <div className="cv-label-heading">PROFIL</div>
                <p className="text-[#33312E] text-[12.5px] leading-[1.8] text-justify font-normal">
                  Designer UX/UI senior, 4 ans d&apos;expérience sur des produits digitaux B2B
                  et B2C. Je prends en charge le design de bout en bout : cadrage et
                  arbitrages, recherche utilisateur, architecture de l&apos;information,
                  maquettes haute fidélité et design systems. Mon rôle est de
                  transformer des besoins métier complexes en interfaces que les
                  équipes peuvent livrer : parcours clarifiés, composants réutilisables,
                  systèmes qui tiennent dans le temps. Je travaille en lien direct avec les
                  équipes produit et développement, jusqu&apos;à la mise en production.
                </p>
              </section>

              {/* Expérience Professionnelle */}
              <section className="space-y-6">
                <div className="cv-label-heading">EXPÉRIENCE PROFESSIONNELLE</div>

                {/* Role 1 — Maono */}
                <div className="space-y-2.5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-[13.5px] font-bold text-[#141413]">
                      UX/UI Designer
                    </h2>
                    <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                      Oct 2024 — Août 2026
                    </span>
                  </div>
                  <div className="text-[11.5px] text-[#59554E] font-medium">
                    Maono Togo
                  </div>

                  <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#807A70] shrink-0">—</span>
                      <span>Direction du design d&apos;interfaces pour des solutions digitales B2B/B2C</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#807A70] shrink-0">—</span>
                      <span>Collaboration étroite avec les équipes produit et développement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#807A70] shrink-0">—</span>
                      <span>Conception de design systems et composants réutilisables</span>
                    </li>
                  </ul>

                  {/* Entreprises accompagnées */}
                  <div className="mt-3.5 pl-3.5 border-l-2 border-[#C5BFB3] py-1 bg-[rgba(0,0,0,0.02)] rounded-r-sm">
                    <div className="text-[9px] tracking-[0.2em] uppercase font-semibold text-[#736D64] mb-1">
                      ENTREPRISES ACCOMPAGNÉES
                    </div>
                    <p className="text-[11px] text-[#423F3A] leading-relaxed">
                      Togotech, ARCEP, SPBI, BIASA, Pur Alpha, Alea Park, AS-ONE, Lomé Data Center, SIN, Ecom, Majestic, RAMCO
                    </p>
                  </div>
                </div>

                {/* Role 2 — Konecty freelance */}
                <div className="space-y-2.5 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                  <div className="flex items-baseline justify-between gap-4">
                    <h2 className="text-[13.5px] font-bold text-[#141413]">
                      UX/UI Designer — freelance
                    </h2>
                    <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                      Oct 2025 — Avr 2026
                    </span>
                  </div>
                  <div className="text-[11.5px] text-[#59554E] font-medium">
                    Konecty (France) · projet On se dit oui
                  </div>

                  <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                    <li className="flex items-start gap-2">
                      <span className="text-[#807A70] shrink-0">—</span>
                      <span>Design et suivi du site en ligne du projet, en collaboration à distance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#807A70] shrink-0">—</span>
                      <span>Conception de l&apos;interface de la plateforme de gestion</span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Right Aside Column */}
            <div className="p-8 sm:p-10 space-y-8 bg-[rgba(0,0,0,0.015)]">
              {/* Compétences */}
              <section className="space-y-6">
                <div className="cv-label-heading">COMPÉTENCES</div>

                {/* Stratégie & recherche */}
                <div>
                  <h3 className="text-[12.5px] font-bold text-[#141413] mb-3">
                    Stratégie & recherche
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Recherche utilisateur",
                      "Personas & parcours",
                      "Architecture info",
                      "Wireframing",
                      "Prototypage",
                      "Tests d'utilisabilité",
                      "Cadrage & ateliers",
                    ].map((item) => (
                      <span key={item} className="cv-tag-light">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Conception & interface */}
                <div>
                  <h3 className="text-[12.5px] font-bold text-[#141413] mb-3">
                    Conception & interface
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Design visuel",
                      "Design systems",
                      "Direction de design",
                      "Typographie",
                      "Responsive design",
                      "Design d'interaction",
                      "Micro-interactions",
                    ].map((item) => (
                      <span key={item} className="cv-tag-light">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Outils */}
              <section>
                <div className="cv-label-heading">OUTILS</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Figma",
                    "Adobe XD",
                    "Sketch",
                    "Miro",
                    "Notion",
                    "Adobe Illustrator",
                  ].map((tool) => (
                    <span key={tool} className="cv-tag-dark">
                      {tool}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </motion.article>

        {/* ══════════════════════════════════════════════
            PAGE 2 / 2
        ══════════════════════════════════════════════ */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="cv-sheet rounded-sm font-sans"
        >
          {/* Header Page 2 — Compact Dark Bar */}
          <div className="bg-[#121211] text-[#EDEAE3] px-8 sm:px-12 py-5">
            <div className="flex items-center justify-between">
              <span className="font-serif text-lg text-white font-medium">
                Bariou<span className="text-[#C4A97D]">.</span> Boussari
              </span>
              <span className="text-[10px] tracking-[0.24em] uppercase text-[#A69E92] font-medium">
                DESIGNER UX / UI SENIOR · PAGE 2 / 2
              </span>
            </div>
          </div>

          {/* Body Page 2 */}
          <div className="grid grid-cols-1 md:grid-cols-[1.62fr_1fr] divide-y md:divide-y-0 md:divide-x divide-[rgba(0,0,0,0.08)]">
            {/* Left Main Column (Suite Expérience) */}
            <div className="p-8 sm:p-11 space-y-7">
              <div className="cv-label-heading">EXPÉRIENCE PROFESSIONNELLE (SUITE)</div>

              {/* Role 3 — SLI Afrika */}
              <div className="space-y-2">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[13.5px] font-bold text-[#141413]">
                    UX/UI Designer
                  </h2>
                  <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                    Déc 2023 — Sept 2024
                  </span>
                </div>
                <div className="text-[11.5px] text-[#59554E] font-medium">
                  SLI Afrika
                </div>
                <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Conception d&apos;expériences digitales adaptées au marché africain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Focus sur l&apos;accessibilité et la simplicité d&apos;utilisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Recherche utilisateur et tests d&apos;utilisabilité</span>
                  </li>
                </ul>
              </div>

              {/* Role 4 — CADRECO */}
              <div className="space-y-2 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[13.5px] font-bold text-[#141413]">
                    UX/UI Designer
                  </h2>
                  <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                    Juin — Sept 2023
                  </span>
                </div>
                <div className="text-[11.5px] text-[#59554E] font-medium">
                  CADRECO
                </div>
                <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Réalisation de maquettes et prototypes haute fidélité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Conception de parcours utilisateurs optimisés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Amélioration des produits numériques existants</span>
                  </li>
                </ul>
              </div>

              {/* Role 5 — Upsilon Consulting */}
              <div className="space-y-2 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[13.5px] font-bold text-[#141413]">
                    UX/UI Designer
                  </h2>
                  <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                    Juil 2022 — Janv 2023
                  </span>
                </div>
                <div className="text-[11.5px] text-[#59554E] font-medium">
                  Upsilon Consulting
                </div>
                <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Conception et optimisation d&apos;interfaces pour des projets clients variés</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Application d&apos;une méthodologie centrée utilisateur</span>
                  </li>
                </ul>
              </div>

              {/* Role 6 — ORTA Service */}
              <div className="space-y-2 pt-4 border-t border-[rgba(0,0,0,0.06)]">
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[13.5px] font-bold text-[#141413]">
                    UX Designer
                  </h2>
                  <span className="text-[10px] tracking-wider text-[#736E67] font-medium whitespace-nowrap">
                    Juin — Juil 2022
                  </span>
                </div>
                <div className="text-[11.5px] text-[#59554E] font-medium">
                  ORTA Service
                </div>
                <ul className="space-y-1.5 pt-1 text-[12px] text-[#3A3733] leading-[1.6]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Contribution à la conception d&apos;interfaces utilisateur</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#807A70] shrink-0">—</span>
                    <span>Amélioration de l&apos;expérience utilisateur des produits digitaux</span>
                  </li>
                </ul>
              </div>

              {/* En Savoir Plus */}
              <section className="pt-4 border-t border-[rgba(0,0,0,0.08)]">
                <div className="cv-label-heading">EN SAVOIR PLUS</div>
                <p className="text-[12px] text-[#423F3A]">
                  Mes projets et maquettes sont en ligne sur{" "}
                  <a
                    href="https://bariou-boussari.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#111] underline underline-offset-2 hover:text-[#8C734B] transition-colors"
                  >
                    bariou-boussari.vercel.app
                  </a>
                </p>
              </section>
            </div>

            {/* Right Aside Column (Formation, Soft Skills, Langues, Centres d'intérêt) */}
            <div className="p-8 sm:p-10 space-y-7 bg-[rgba(0,0,0,0.015)]">
              {/* Formation */}
              <section className="space-y-2">
                <div className="cv-label-heading">FORMATION</div>
                <h3 className="text-[13px] font-bold text-[#141413] leading-snug">
                  Licence Professionnelle
                </h3>
                <div className="text-[12.5px] font-bold text-[#141413]">
                  Design UX/UI
                </div>
                <div className="text-[11.5px] text-[#59554E] mt-0.5">
                  Africa Design School
                </div>
                <div className="text-[10px] tracking-wider text-[#736E67] font-medium font-mono">
                  2021 — 2024
                </div>
              </section>

              {/* Soft Skills */}
              <section>
                <div className="cv-label-heading">SOFT SKILLS</div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Vision produit",
                    "Collaboration",
                    "Accessibilité",
                    "Amélioration continue",
                  ].map((skill) => (
                    <span key={skill} className="cv-tag-light">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Langues */}
              <section>
                <div className="cv-label-heading">LANGUES</div>
                <div className="space-y-2 text-[12px]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#141413]">Français</span>
                    <span className="text-[#69635A] text-[11px]">Natif</span>
                  </div>
                  <div className="h-[1px] bg-[rgba(0,0,0,0.06)]" />
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#141413]">Anglais</span>
                    <span className="text-[#69635A] text-[11px]">Débutant</span>
                  </div>
                </div>
              </section>

              {/* Centres d'intérêt */}
              <section>
                <div className="cv-label-heading">CENTRES D&apos;INTÉRÊT</div>
                <div className="space-y-1 text-[11.5px] text-[#3A3733] leading-relaxed">
                  <div>Design thinking · Typographie</div>
                  <div>Veille technologique · Art digital</div>
                </div>
              </section>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  );
}

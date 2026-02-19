"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  SplitText,
  MaskReveal,
  LineReveal,
  Magnetic,
  PageTransition,
  ScrollProgress,
} from "@/components/animations";
import { Reveal } from "@/components/reveal";
import {
  HeroVisual,
  FloatingElement,
  AbstractBlob,
  ConcentricCircles,
  DotsPattern,
} from "@/components/visuals";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 md:pt-32">
        <ScrollProgress />
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Floating decorative elements */}
          <FloatingElement className="absolute top-[10%] right-[5%] w-[300px] h-[300px] hidden lg:block" speed={15}>
            <HeroVisual className="w-full h-full opacity-20" />
          </FloatingElement>
          <FloatingElement className="absolute bottom-[20%] left-[3%] w-[150px] h-[150px] hidden lg:block" speed={12} direction="down">
            <AbstractBlob variant={2} className="w-full h-full opacity-30" />
          </FloatingElement>

          {/* Dots pattern */}
          <div className="absolute top-[15%] right-[35%] hidden xl:block opacity-20">
            <DotsPattern cols={4} rows={4} />
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24">
              {/* Left - Form */}
              <div>
                <MaskReveal>
                  <span className="text-[#C4A97D] text-xs tracking-[0.35em] uppercase font-medium">
                    Contact
                  </span>
                </MaskReveal>
                <div className="mt-4 mb-6">
                  <h1 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] text-foreground">
                    <SplitText type="words" stagger={0.04}>Un projet qui mérite</SplitText>{" "}
                    <span className="italic text-[#C4A97D]">
                      <SplitText type="words" delay={0.5} stagger={0.04}>un vrai</SplitText>
                    </span>{" "}
                    <SplitText type="words" delay={0.6} stagger={0.04}>travail de</SplitText>{" "}
                    <span className="italic text-[#C4A97D]">
                      <SplitText type="words" delay={0.7} stagger={0.04}>design</SplitText>
                    </span>
                    <SplitText type="words" delay={0.8} stagger={0.04}> ?</SplitText>
                  </h1>
                </div>

                <MaskReveal delay={0.3}>
                  <p className="text-[#6B635A] text-lg leading-relaxed mb-14 md:mb-20 max-w-md">
                    Partagez le contexte — je reviens avec des questions précises, pas des propositions génériques.
                  </p>
                </MaskReveal>

                <LineReveal delay={0.2} className="mb-14" />

                {submitted ? (
                  <Reveal>
                    <div className="py-20 relative">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] pulse-glow rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] hidden md:block">
                        <ConcentricCircles className="w-full h-full opacity-25" rings={3} />
                      </div>
                      <div className="w-16 h-[1px] bg-[#C4A97D]/40 mb-10" />
                      <h2 className="font-serif text-4xl text-foreground mb-5">
                          Message reçu.
                        </h2>
                        <p className="text-[#6B635A] leading-relaxed max-w-md">
                          Je vous répondrai dans les 48h avec une réponse construite — pas un accusé de réception automatique.
                        </p>
                    </div>
                  </Reveal>
                ) : (
                  <MaskReveal delay={0.4}>
                    <form onSubmit={handleSubmit} className="space-y-12">
                      <div className="group">
                        <label
                          htmlFor="name"
                          className="block text-[10px] font-medium text-[#C4A97D]/60 tracking-[0.3em] uppercase mb-4 group-focus-within:text-[#C4A97D] transition-colors duration-500"
                        >
                          Nom
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full bg-transparent border-b border-[rgba(196,169,125,0.08)] text-foreground placeholder:text-[#6B635A]/30 py-4 text-lg focus:outline-none focus:border-[#C4A97D]/40 transition-colors duration-500"
                          placeholder="Votre nom"
                        />
                      </div>

                      <div className="group">
                        <label
                          htmlFor="email"
                          className="block text-[10px] font-medium text-[#C4A97D]/60 tracking-[0.3em] uppercase mb-4 group-focus-within:text-[#C4A97D] transition-colors duration-500"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full bg-transparent border-b border-[rgba(196,169,125,0.08)] text-foreground placeholder:text-[#6B635A]/30 py-4 text-lg focus:outline-none focus:border-[#C4A97D]/40 transition-colors duration-500"
                          placeholder="votre@email.com"
                        />
                      </div>

                      <div className="group">
                        <label
                          htmlFor="message"
                          className="block text-[10px] font-medium text-[#C4A97D]/60 tracking-[0.3em] uppercase mb-4 group-focus-within:text-[#C4A97D] transition-colors duration-500"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          className="w-full bg-transparent border-b border-[rgba(196,169,125,0.08)] text-foreground placeholder:text-[#6B635A]/30 py-4 text-lg focus:outline-none focus:border-[#C4A97D]/40 transition-colors duration-500 resize-none"
                          placeholder="Parlez-moi de votre projet..."
                        />
                      </div>

                      <Magnetic>
                        <button
                          type="submit"
                          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#C4A97D] text-[#080808] text-sm font-semibold tracking-[0.15em] uppercase overflow-hidden"
                        >
                          <span className="relative z-10">Envoyer le message</span>
                          <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                          <span className="absolute inset-0 bg-[#D4BC95] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        </button>
                      </Magnetic>
                    </form>
                  </MaskReveal>
                )}
              </div>

              {/* Right – Info */}
              <div className="relative">
                <Reveal direction="right">
                  <div className="lg:sticky lg:top-40 space-y-16">
                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A97D]/60 font-medium block mb-5">
                        Email
                      </span>
                      <a
                        href="mailto:bariouboussari@gmail.com"
                        className="text-foreground text-lg link-underline"
                      >
                        bariouboussari@gmail.com
                      </a>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A97D]/60 font-medium block mb-5">
                        Réseaux
                      </span>
                      <div className="space-y-4">
                        <a
                          href="https://www.linkedin.com/in/bariou-boussari"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground block link-underline w-fit"
                        >
                          LinkedIn
                        </a>
                        <a
                          href="https://www.behance.net/bariouboussari"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground block link-underline w-fit"
                        >
                          Behance
                        </a>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A97D]/60 font-medium block mb-5">
                        Localisation
                      </span>
                      <p className="text-foreground">Lomé, TOGO</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

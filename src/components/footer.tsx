"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Magnetic } from "@/components/animations";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative">
      <div className="divider-line" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20 md:py-28">
        {/* Large CTA text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-20"
        >
          <Link href="/contact" className="group inline-block">
            <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground/80 group-hover:text-foreground transition-colors duration-500 leading-[1.05]">
                Créons quelque chose
                <br />
                <span className="italic text-[#C4A97D]/70 group-hover:text-[#C4A97D] transition-colors duration-500">
                  de significatif
                </span>
              <span className="inline-block ml-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                <ArrowUpRight size={32} className="text-[#C4A97D]" />
              </span>
            </h3>
          </Link>
        </motion.div>

        {/* Links row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          <div>
            <span className="text-[10px] text-[#6B635A] tracking-[0.3em] uppercase block mb-4">Navigation</span>
            <div className="flex flex-col gap-3">
              {[
                { label: "Accueil", href: "/" },
                { label: "Projets", href: "/work" },
                  { label: "Méthodologie", href: "/process" },
                { label: "À propos", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#8A817A] hover:text-foreground transition-colors duration-300 link-underline w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[10px] text-[#6B635A] tracking-[0.3em] uppercase block mb-4">Social</span>
            <div className="flex flex-col gap-3">
              <Magnetic strength={0.2}>
                <a
                  href="https://www.linkedin.com/in/bariou-boussari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8A817A] hover:text-[#C4A97D] transition-colors duration-300"
                >
                  LinkedIn <ArrowUpRight size={11} />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href="https://www.behance.net/bariouboussari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#8A817A] hover:text-[#C4A97D] transition-colors duration-300"
                >
                  Behance <ArrowUpRight size={11} />
                </a>
              </Magnetic>
            </div>
          </div>

          <div>
            <span className="text-[10px] text-[#6B635A] tracking-[0.3em] uppercase block mb-4">Contact</span>
            <Magnetic strength={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 text-sm text-[#C4A97D] hover:text-foreground transition-colors duration-300"
              >
                <span className="w-2 h-2 rounded-full bg-[#C4A97D]/40" />
                  Me contacter
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-[1px] bg-[rgba(196,169,125,0.05)] mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-serif text-lg text-foreground">
              B<span className="text-[#C4A97D]">.</span>
            </span>
            <span className="text-[10px] text-[#6B635A]/50 tracking-wider">
              &copy; {new Date().getFullYear()} Bariou Boussari
            </span>
          </div>
          <span className="text-[10px] text-[#6B635A]/30 tracking-[0.15em] uppercase">
            Conçu avec intention
          </span>
        </div>
      </div>
    </footer>
  );
}

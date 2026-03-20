'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import type { SectionLink } from '@/lib/content';

const PHASE_LABELS: Record<number, string> = {
  1: 'Foundation & Business Model',
  2: 'Financials & Forward Assessment',
  3: 'Risk, Stress Test & Assembly',
};

const PHASE_LABELS_MOBILE: Record<number, string> = {
  1: 'Foundation',
  2: 'Financials',
  3: 'Risk & Assembly',
};

export default function SectionNav({ links }: { links: SectionLink[] }) {
  const sectionsRef = useRef<HTMLDivElement>(null);
  const [activePhase, setActivePhase] = useState(1);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport for shorter phase labels
  useEffect(() => {
    const mql = window.matchMedia('(max-width: 640px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Build a map from section id → phase for quick lookup
  const phaseMap = useRef(new Map<string, number>());
  useEffect(() => {
    const map = new Map<string, number>();
    for (const link of links) {
      map.set(link.id, link.phase);
    }
    phaseMap.current = map;
  }, [links]);

  const filteredLinks = links.filter((l) => l.phase === activePhase);

  // Scroll-spy: watch all sections, update activePhase + activeSection
  useEffect(() => {
    const sectionEls = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const phase = phaseMap.current.get(id);
            if (phase) {
              setActivePhase(phase);
            }
            setActiveSection(id);
          }
        }
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 }
    );

    for (const section of sectionEls) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [links]);

  // Auto-scroll active section tab into view
  useEffect(() => {
    const inner = sectionsRef.current;
    if (!inner || !activeSection) return;
    const activeEl = inner.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
    if (!activeEl) return;
    const innerRect = inner.getBoundingClientRect();
    const aRect = activeEl.getBoundingClientRect();
    if (aRect.left < innerRect.left || aRect.right > innerRect.right) {
      activeEl.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
  }, [activeSection]);

  // Phase button click: just switch the visible section tabs
  const handlePhaseClick = useCallback(
    (phase: number) => {
      setActivePhase(phase);
    },
    []
  );

  return (
    <nav className="section-nav" aria-label="Section navigation">
      <div className="section-nav-inner">
        {/* Row 1: Phase tabs */}
        <div className="section-nav-phases">
          {[1, 2, 3].map((phase) => (
            <button
              key={phase}
              type="button"
              className={`section-nav-phase-btn${activePhase === phase ? ' active' : ''}`}
              onClick={() => handlePhaseClick(phase)}
            >
              {isMobile ? PHASE_LABELS_MOBILE[phase] : PHASE_LABELS[phase]}
            </button>
          ))}
        </div>

        {/* Row 2: Section tabs for active phase */}
        <div className="section-nav-sections" ref={sectionsRef}>
          {filteredLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`section-nav-btn${activeSection === link.id ? ' active' : ''}`}
            >
              <span className="section-nav-num">{link.label}</span>
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

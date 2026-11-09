"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Trophy, 
  ShieldCheck, 
  ExternalLink, 
  Award,
  Cloud,
  CheckCircle2,
  Calendar,
  Layers
} from "lucide-react";
import SectionLabel from "@/components/SectionLabel";

/* ─────────────────────────────────────────────────────────────────
   CREDENTIALS DATA (THE WALL OF PROOF // DESIGN.MD SPEC)
   ───────────────────────────────────────────────────────────────── */

const NATIONAL_HONORS = [
  {
    title: "4th Place & National Finalist",
    competition: "BMNC 2026 Business Case Competition",
    issuer: "Business Management Network (BMN) Institute & Forum Manajemen Indonesia, East Java",
    period: "Oct 2026",
    id: "BMNC-2026-FIN-04",
    summary:
      "Advanced to the national final as one of five finalist teams, presenting a national franchise expansion and global market-entry strategy for a 75-year-old automotive service brand.",
    highlights: [
      "Built multi-variable financial feasibility models (DCF, NPV/IRR, and sensitivity analysis).",
      "Defended corporate finance, logistics, and operational scaling strategies before an executive jury panel.",
      "Bridged deep systems engineering analysis with executive corporate strategy.",
    ],
    skills: ["DCF Financial Modeling", "NPV / IRR Analysis", "Franchise Scaling", "Operations Feasibility"],
    link: "https://www.linkedin.com/in/davinpfbrn/",
    image: "/images/project1.png",
  },
  {
    title: "National Finalist",
    competition: "Infinity Hackathon OJK 2025",
    issuer: "Financial Services Authority (Otoritas Jasa Keuangan / OJK)",
    period: "Oct 2025 – Dec 2025",
    id: "OJK-HACK-2025-ZYNTRA",
    summary:
      "Led blockchain engineering in a 2-person team (ZYNTRA) developing BatikChain, an on-chain anti-counterfeiting and provenance protocol for artisan batik heritage.",
    highlights: [
      "Engineered ERC-721 smart contracts on Ethereum for artwork registration and immutable lineage tracking.",
      "Conducted security audit adhering strictly to OWASP Smart Contract Top 10 vulnerabilities.",
      "Built direct wallet-to-contract consumer QR verification using Ethers.js.",
    ],
    skills: ["Ethereum", "Solidity", "ERC-721", "OWASP Top 10", "Ethers.js"],
    link: "https://github.com/VinLvy/BatikChain",
    image: "/images/project6.png",
  },
];

const CLOUD_BADGES = [
  {
    title: "Build Infrastructure with Terraform on Google Cloud",
    issuer: "Google Cloud",
    issued: "Jul 2026",
    credentialId: "25635936",
    url: "https://www.skills.google/public_profiles/cd5e642c-a588-40f4-a4b7-3adb46df7e1a/badges/25635936",
    skills: ["Terraform", "Google Cloud", "IaC Automation"],
  },
  {
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    credentialId: "26389216",
    url: "https://www.skills.google/public_profiles/cd5e642c-a588-40f4-a4b7-3adb46df7e1a/badges/26389216",
    skills: ["Docker", "Google Kubernetes Engine (GKE)", "DevOps"],
  },
  {
    title: "Implement CI/CD Pipelines on Google Cloud",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    credentialId: "27019561",
    url: "https://www.skills.google/public_profiles/cd5e642c-a588-40f4-a4b7-3adb46df7e1a/badges/27019561",
    skills: ["CI/CD", "Automated Pipelines", "Cloud Build"],
  },
  {
    title: "Deploy and Secure Serverless APIs with API Gateway",
    issuer: "Google Cloud",
    issued: "Aug 2026",
    credentialId: "27255590",
    url: "https://www.skills.google/public_profiles/cd5e642c-a588-40f4-a4b7-3adb46df7e1a/badges/27255590",
    skills: ["API Gateway", "Cloud Security", "Serverless"],
  },
  {
    title: "Architecting on AWS",
    issuer: "Dicoding Indonesia // AWS",
    issued: "Jul 2026 – Jul 2029",
    credentialId: "GRX5W5Q7YZ0M",
    url: "https://www.dicoding.com/certificates/GRX5W5Q7YZ0M",
    skills: ["AWS Core Services", "Cloud Architecture", "High Availability"],
  },
  {
    title: "AWS AI Academy 2026 - Intermediate Level",
    issuer: "Dicoding Indonesia // AWS",
    issued: "Sep 2026",
    credentialId: "AWS2026/L2-AI-0048",
    url: "https://www.linkedin.com/in/davinpfbrn/details/certifications/",
    skills: ["Machine Learning", "AI Workflows", "Cloud AI"],
  },
];

const DEV_ACCREDITATIONS = [
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    issued: "Feb 2026",
    credentialId: "acf040f00005",
    url: "https://www.hackerrank.com/certificates/iframe/acf040f00005",
    skills: ["Software Infrastructure", "Problem Solving", "Core Algorithms"],
  },
  {
    title: "SQL (Intermediate)",
    issuer: "HackerRank",
    issued: "Feb 2026",
    credentialId: "2ae4646f08cb",
    url: "https://www.hackerrank.com/certificates/iframe/2ae4646f08cb",
    skills: ["SQL", "Relational Schemas", "Query Optimization"],
  },
];

export default function CredentialsPage() {
  return (
    <div className="w-full">

      {/* ── Page Header ─────────────────────────────────────── */}
      <section className="section-block">
        <div className="space-y-4">
          <SectionLabel index={1} label="Wall of Proof &amp; Accreditations" />
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-primary)]">
            Verified Credentials &amp; Honors
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
            Tangible proof of execution across national case competitions, fintech hackathons, 
            and official cloud infrastructure certifications.
          </p>
        </div>
      </section>

      {/* ── Tier 1: National Honors & Hackathon Finalists ───── */}
      <section className="section-block">
        <div className="pb-6">
          <SectionLabel index={2} label="Tier 1 / National Competition Finalists" className="mb-2" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
            National Honours &amp; Podiums
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {NATIONAL_HONORS.map((honor) => (
            <div
              key={honor.id}
              className="precision-card flex flex-col justify-between space-y-5"
            >
              {/* Media Viewport */}
              <div className="relative w-full aspect-[16/10] bg-[var(--bg-canvas)] border border-[var(--border-subtle)] rounded-md overflow-hidden">
                <Image
                  src={honor.image}
                  alt={honor.competition}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover contrast-[1.04] saturate-[0.95]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,9,11,0.85)] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="badge-mono badge-award text-[11px]">
                    <Trophy size={12} />
                    <span>{honor.title}</span>
                  </span>
                  <span className="text-[var(--text-primary)] font-medium bg-[var(--bg-canvas)] px-2 py-0.5 rounded border border-[var(--border-subtle)]">
                    {honor.period}
                  </span>
                </div>
              </div>

              {/* Title & Body */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {honor.competition}
                  </h3>
                  <p className="text-xs font-mono text-[var(--text-muted)] mt-0.5">
                    Issued by: {honor.issuer}
                  </p>
                </div>

                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {honor.summary}
                </p>

                <div className="space-y-1 pt-1 font-mono text-[11px] text-[var(--text-muted)]">
                  {honor.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <span className="text-[var(--signal-award)]">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-dashed border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--text-muted)] text-[11px]">
                  ID: {honor.id}
                </span>
                <Link
                  href={honor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Verify Record</span>
                  <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tier 2: Cloud Infrastructure & SRE Badges ────────── */}
      <section className="section-block">
        <div className="pb-6">
          <SectionLabel index={3} label="Tier 2 / Cloud &amp; Infrastructure Certifications" className="mb-2" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
            Google Cloud &amp; AWS Accreditations
          </h2>
          <p className="text-xs font-mono text-[var(--text-muted)] mt-1">
            Independently verified skill badges and cloud architecture accreditations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CLOUD_BADGES.map((badge) => (
            <div
              key={badge.credentialId}
              className="precision-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                {/* Header Dot Matrix Pattern */}
                <div className="h-20 dot-matrix-bg border border-[var(--border-subtle)] rounded flex items-center justify-center p-3 relative">
                  <div className="px-3 py-1 rounded bg-[var(--bg-surface-1)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--signal-arch)] flex items-center gap-1.5">
                    <Cloud size={13} />
                    <span>{badge.issuer}</span>
                  </div>
                  <div className="absolute top-2 right-2 text-[10px] font-mono text-[var(--text-muted)]">
                    {badge.issued}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug">
                    {badge.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1 font-mono text-[10px]">
                  {badge.skills.map((s) => (
                    <span key={s} className="badge-mono text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--text-muted)] text-[11px]">
                  ID: {badge.credentialId}
                </span>
                <Link
                  href={badge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--accent-primary)] hover:underline"
                >
                  <span>Verify</span>
                  <ExternalLink size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tier 3: Core Engineering & Developer Certifications ─ */}
      <section className="section-block">
        <div className="pb-6">
          <SectionLabel index={4} label="Tier 3 / Software Engineering Standards" className="mb-2" />
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)] tracking-tight">
            Core Engineering &amp; SQL Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEV_ACCREDITATIONS.map((cert) => (
            <div
              key={cert.credentialId}
              className="precision-card flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>{cert.issuer}</span>
                  <span>{cert.issued}</span>
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {cert.title}
                </h3>
                <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px]">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="badge-mono text-[10px]">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between font-mono text-xs">
                <span className="text-[var(--text-muted)] text-[11px]">
                  ID: {cert.credentialId}
                </span>
                <Link
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--text-primary)] hover:text-[var(--accent-primary)] transition-colors"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink size={11} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="p-8 font-mono text-xs text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          &copy; {new Date().getFullYear()} Davin Putra Fibrian • The Wall of Proof
        </div>
        <div className="flex items-center gap-3">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            Overview
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[var(--text-primary)] transition-colors">
            Systems
          </Link>
        </div>
      </footer>

    </div>
  );
}

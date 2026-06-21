import type { ReactNode } from 'react'

/**
 * Curated icon registry. Elements reference an icon by key (`iconKey`) and the
 * CMS icon picker lists these keys. SVGs were extracted from the original
 * hand-built module so the data-driven render matches the source design.
 */
export const ICONS: Record<string, ReactNode> = {
  // --- Slide-title icons ---
  doc: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="5" width="22" height="18" rx="3" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
      <path d="M8 11h12M8 15h8M8 19h10" stroke="#0d9488" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  'check-circle': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.5" />
      <path d="M9 14l3 3 7-7" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  'question-circle': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="#eff6ff" stroke="#60a5fa" strokeWidth="1.5" />
      <path
        d="M10.5 11C10.5 8.5 12 7 14 7C16 7 17.5 8.5 17.5 10.5C17.5 12.5 16 13.5 14 15V17"
        stroke="#2563eb"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="14" cy="20.5" r="1.5" fill="#2563eb" />
    </svg>
  ),
  'warning-triangle': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M15 2L28 25H2L15 2Z" fill="#fde68a" stroke="#f59e0b" strokeWidth="2" strokeLinejoin="round" />
      <path d="M15 10V18" stroke="#92400e" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="15" cy="22" r="1.5" fill="#92400e" />
    </svg>
  ),
  'alert-circle': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="12" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.5" />
      <path d="M14 7v8M14 19v2" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),
  'eai-cross': (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="13" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.5" />
      <rect x="12" y="7" width="4" height="14" fill="#0f766e" />
      <rect x="7" y="12" width="14" height="4" fill="#0f766e" />
    </svg>
  ),
  medkit: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="8" width="22" height="17" rx="3" fill="#fef2f2" stroke="#f87171" strokeWidth="1.5" />
      <path d="M9 8V6a5 5 0 0110 0v2" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14 14v4M12 16h4" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  people: (
    <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="5" r="4.5" fill="#ccfbf1" stroke="#0d9488" strokeWidth="1.6" />
      <line x1="13" y1="9.5" x2="13" y2="21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="7" y1="14" x2="19" y2="14" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="21" x2="8" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="13" y1="21" x2="18" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="39" cy="5" r="4.5" fill="#f0fdfa" stroke="#0d9488" strokeWidth="1.6" />
      <line x1="39" y1="9.5" x2="39" y2="21" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="33" y1="14" x2="45" y2="14" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="39" y1="21" x2="34" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="39" y1="21" x2="44" y2="29" stroke="#0d9488" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  star: (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon
        points="14,3 17.5,10 25,11 19.5,16.5 21,24 14,20 7,24 8.5,16.5 3,11 10.5,10"
        fill="#fde68a"
        stroke="#f59e0b"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // --- Tag-row icons ---
  clock: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#0d9488" strokeWidth="1.2" />
      <path d="M6.5 3.5v3.5l2 2" stroke="#0d9488" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  ),
  sections: (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x="2" y="1.5" width="9" height="10" rx="1.5" stroke="#0d9488" strokeWidth="1.1" />
      <path d="M4 5h5M4 7h4M4 9h3" stroke="#0d9488" strokeWidth="1" strokeLinecap="round" />
    </svg>
  ),
  'question-mark': (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#0d9488" strokeWidth="1.1" />
      <path
        d="M5 5.5c0-1 .7-1.8 1.5-1.8s1.5.8 1.5 1.8c0 .7-.4 1.3-1 1.6L6.5 9"
        stroke="#0d9488"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="6.5" cy="10" r=".6" fill="#0d9488" />
    </svg>
  ),

  // --- Scenario label ---
  person: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="5" r="3" fill="#0d9488" />
      <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#0d9488" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),

  // --- Symptom cards ---
  'sym-breathing': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#e0f2fe" />
      <path d="M6 13 Q13 9 20 13 Q27 17 34 13" stroke="#0ea5e9" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M6 19 Q12 15 18 19 Q24 23 32 19" stroke="#38bdf8" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M6 25 Q11 21 17 25 Q23 29 30 25" stroke="#7dd3fc" strokeWidth="2.2" fill="none" strokeLinecap="round" />
    </svg>
  ),
  'sym-lips': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#fce7f3" />
      <path d="M7 19 Q12 12 19 14 Q26 12 31 19 Q26 28 19 26 Q12 28 7 19Z" fill="#f472b6" stroke="#db2777" strokeWidth="1.4" />
      <ellipse cx="15" cy="21" rx="3.5" ry="1.8" fill="#f9a8d4" opacity=".55" />
    </svg>
  ),
  'sym-hives': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#fef2f2" />
      <circle cx="12" cy="12" r="4" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="26" cy="11" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="20" cy="21" r="5" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="10" cy="24" r="3" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
      <circle cx="29" cy="24" r="3.5" fill="#fca5a5" stroke="#ef4444" strokeWidth="1.2" />
    </svg>
  ),
  'sym-dizzy': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#fef9c3" />
      <path
        d="M14 15 C14 11.5 16 9 19 9 C22 9 24 11.5 24 14 C24 16.5 22 18 19 20 C19 20 19 21 19 22"
        stroke="#ca8a04"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="19" cy="27" r="2.2" fill="#ca8a04" />
    </svg>
  ),
  'sym-nausea': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#dcfce7" />
      <circle cx="19" cy="20" r="12" fill="#86efac" stroke="#22c55e" strokeWidth="1.5" />
      <ellipse cx="15" cy="17" rx="2" ry="1.5" fill="#166534" />
      <ellipse cx="23" cy="17" rx="2" ry="1.5" fill="#166534" />
      <path d="M14 24 Q16 22 19 23 Q22 24 24 22" stroke="#166534" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  ),
  'sym-bluish': (
    <svg className="sicon" viewBox="0 0 38 38" fill="none">
      <rect width="38" height="38" rx="8" fill="#dbeafe" />
      <circle cx="19" cy="19" r="13" fill="#3b82f6" stroke="#1d4ed8" strokeWidth="1.5" />
    </svg>
  ),

  // --- Motto pills ---
  magnifier: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="#fff" strokeWidth="1.8" />
      <path d="M13 13l4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  ),
  syringe: (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <rect x="1" y="7.5" width="2" height="5" rx="1" fill="#fff" />
      <line x1="3" y1="10" x2="6" y2="10" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="6" y="7" width="9" height="6" rx="2" fill="rgba(255,255,255,0.25)" stroke="#fff" strokeWidth="1.4" />
      <rect x="15" y="8.5" width="2" height="3" rx=".5" fill="#fff" />
      <line x1="17" y1="10" x2="21" y2="10" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  phone: (
    <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
      <path
        d="M4 16 C4 17.2 5 18 6.2 18 L7.5 17.5 C8.3 17 8.3 16.2 7.8 15.3 L7 13.5 C8.3 11.3 10.5 9.5 13 8.2 L14.7 9 C15.6 9.5 16.5 9.4 17 8.6 L17.5 7.2 C17.9 6 17.2 5 16 5 C11 5 4 11 4 16Z"
        fill="rgba(255,255,255,0.25)"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),

  // --- Nurse highlight (white on orange) ---
  'nurse-cross': (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="10" y="3" width="6" height="20" rx="2" fill="white" />
      <rect x="3" y="10" width="20" height="6" rx="2" fill="white" />
    </svg>
  ),

  // --- Survey CTA ---
  'clipboard-check': (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <circle cx="22" cy="22" r="20" fill="#f0fdfa" stroke="#0d9488" strokeWidth="2" />
      <rect x="13" y="12" width="18" height="20" rx="3" fill="none" stroke="#0d9488" strokeWidth="1.5" />
      <path d="M17 18h10M17 22h10M17 26h6" stroke="#0d9488" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="32" cy="32" r="7" fill="#0f766e" />
      <path d="M29 32l2 2 4-4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  // --- Completion badges ---
  'badge-recognizer': (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#fff" strokeWidth="1.2" />
      <path d="M9 9l2.5 2.5" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  'badge-responder': (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="#fff" strokeWidth="1.1" />
      <path d="M6.5 3.5v4M6.5 9.5v.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  'badge-eai': (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x="5" y="1.5" width="3" height="10" fill="#fff" />
      <rect x="1.5" y="5" width="10" height="3" fill="#fff" />
    </svg>
  ),
  'badge-ally': (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path
        d="M6.5 11C4 8.5 1.5 7 1.5 4.5a3 3 0 015-2.2 3 3 0 015 2.2C11.5 7 9 8.5 6.5 11z"
        stroke="#fff"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  ),
}

export const ICON_KEYS = Object.keys(ICONS)

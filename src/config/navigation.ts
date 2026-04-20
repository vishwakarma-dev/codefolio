export const NAV_LINKS = [
  { label: "Home", sectionId: "home" },
  { label: "About", sectionId: "about" },
  { label: "Projects", sectionId: "projects" },
  { label: "Skills", sectionId: "skills" },
] as const;

export const CONTACT_LINK = {
  label: "Contact",
  sectionId: "contact",
} as const;

export const ALL_SECTION_LINKS = [...NAV_LINKS, CONTACT_LINK] as const;

export type SectionId = (typeof ALL_SECTION_LINKS)[number]["sectionId"];

export const DEFAULT_SECTION_ID: SectionId = "home";

export const getSectionHref = (sectionId: SectionId) => `/#${sectionId}`;

export const isSectionId = (value: string): value is SectionId =>
  ALL_SECTION_LINKS.some((link) => link.sectionId === value);

export interface SectionMeta {
  id: string;
  label: string;
}

export const sections: SectionMeta[] = [
  { id: "about", label: "About" },
  { id: "speaking", label: "Speaking" },
  { id: "projects", label: "Projects" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

import { loadTextContent } from "@/textContent";

export interface AccordionItem {
  id: string;
  text: string;
}

export interface AccordionData {
  id: string;
  title: string;
  items: AccordionItem[];
}

export interface AccordionSection {
  id: string;
  accordions: AccordionData[];
}

// Load accordion data from JSON
// Note: This is async, use loadAccordionData() in components
export let AccordionInfos: AccordionSection[] = [];

// Initialize with data from JSON
void Promise.all([
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  loadTextContent("courseModules"),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  loadTextContent("faq"),
]).then(([courseModules, faq]) => {
  AccordionInfos = [
    { id: "CourseModules", accordions: courseModules as AccordionData[] },
    { id: "FAC", accordions: faq as AccordionData[] },
  ];
});

// Helper function for components to load data
export async function loadAccordionData(): Promise<AccordionSection[]> {
  const [courseModules, faq] = await Promise.all([
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    loadTextContent("courseModules"),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    loadTextContent("faq"),
  ]);

  return [
    { id: "CourseModules", accordions: courseModules as AccordionData[] },
    { id: "FAC", accordions: faq as AccordionData[] },
  ];
}

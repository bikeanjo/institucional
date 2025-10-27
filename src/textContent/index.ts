// Text Content Loader
// Centralized function to load content from JSON files
// Future: Replace JSON imports with CMS API calls

export type ContentKey =
  | "ourStory"
  | "testimonials"
  | "partners"
  | "localOrg"
  | "media"
  | "faq"
  | "team"
  | "courseModules";

/**
 * Load text content from JSON file (public/data/)
 * @param key - Content identifier
 * @returns Promise with content data
 *
 * Usage:
 *   import { loadTextContent } from '@/textContent';
 *   const data = await loadTextContent('ourStory');
 *
 * Benefits:
 *   - JSON files can be updated without rebuild/deploy
 *   - Just upload new JSON to server's public/data/ folder
 *
 * Future CMS integration:
 *   Change base URL to: /api/cms/${key}
 */
export async function loadTextContent(key: ContentKey): Promise<unknown> {
  try {
    // Fetch JSON from public/data/ folder
    // Files are NOT bundled, so you can update them without rebuild!
    const response = await fetch(`/data/${key}.json`);

    if (!response.ok) {
      console.error(
        `❌ Failed to load content "${key}": ${response.statusText}`,
      );
      throw new Error(
        `Failed to load content "${key}": ${response.statusText}`,
      );
    }

    return response.json();
  } catch (error) {
    console.error(`❌ Error loading content "${key}":`, error);
    throw error;
  }
}

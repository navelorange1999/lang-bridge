export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const LANGUAGE_LABELS: Record<string, string> = {
  cpp: 'C++',
  typescript: 'TypeScript',
  javascript: 'JavaScript',
};

export function languageDisplayName(id: string): string {
  return LANGUAGE_LABELS[id] ?? capitalize(id);
}

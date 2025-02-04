interface ParseUrlResult {
  cid?: string;
}

export function parseUrl(url: string): ParseUrlResult {
  const [urlMain, urlParams] = url.split('?');
  const parts = urlMain.split('/');
  const result: Record<string, string> = {};
  for (const part of parts) {
    const [key, value] = part.split('=');
    if (!value) continue;
    result[key] = value;
  }
  return result;
}

/**
 * Pull FAQ pairs from blog HTML after an H2 that includes "FAQ".
 * Each following H3 is a question; following text until next H3/H2 is the answer.
 */
export function extractBlogFaqs(html = "") {
  if (!html || typeof html !== "string") return [];

  const h2Regex = /<h2\b[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  let faqStart = -1;
  let faqHeadingLength = 0;

  while ((match = h2Regex.exec(html)) !== null) {
    const headingText = match[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    if (/faq/i.test(headingText)) {
      faqStart = match.index;
      faqHeadingLength = match[0].length;
      break;
    }
  }

  if (faqStart === -1) return [];

  const fromFaq = html.slice(faqStart + faqHeadingLength);
  const nextH2 = fromFaq.search(/<h2\b/i);
  const section = nextH2 === -1 ? fromFaq : fromFaq.slice(0, nextH2);

  const h3Regex = /<h3\b[^>]*>([\s\S]*?)<\/h3>([\s\S]*?)(?=<h3\b|<h2\b|$)/gi;
  const faqs = [];
  let m;
  while ((m = h3Regex.exec(section)) !== null) {
    const question = m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const answer = m[2]
      .replace(/<li\b[^>]*>/gi, "• ")
      .replace(/<\/(p|li|div|h4)>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (question && answer && answer.length > 15) {
      faqs.push({ question, answer });
    }
  }

  return faqs.slice(0, 8);
}

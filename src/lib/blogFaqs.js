/**
 * Pull FAQ pairs from blog HTML: after an H2 whose text includes "FAQ",
 * each H3 is a question and the following block of <p>/<ul> is the answer.
 */
export function extractBlogFaqs(html = "") {
  if (!html || typeof html !== "string") return [];

  const faqHeading = /<h2[^>]*>[\s\S]*?FAQ[\s\S]*?<\/h2>/i.exec(html);
  if (!faqHeading) return [];

  const fromFaq = html.slice(faqHeading.index + faqHeading[0].length);
  const nextH2 = fromFaq.search(/<h2[\s>]/i);
  const section = nextH2 === -1 ? fromFaq : fromFaq.slice(0, nextH2);

  const parts = section.split(/<h3[^>]*>/i).slice(1);
  const faqs = [];

  for (const part of parts) {
    const close = part.indexOf("</h3>");
    if (close === -1) continue;
    const question = part
      .slice(0, close)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const answerHtml = part.slice(close + 5);
    const answer = answerHtml
      .replace(/<li[^>]*>/gi, "• ")
      .replace(/<\/(p|li|h3|h4)>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (question && answer && answer.length > 20) {
      faqs.push({ question, answer });
    }
  }

  return faqs.slice(0, 8);
}

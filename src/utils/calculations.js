// Calculation Utilities

export const formatCurrency = (amount, currency = "INR") => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0
  }).format(amount);
};

export const formatDate = (date) => {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
};

export const calculateDiscount = (originalPrice, discountedPrice) => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
  return Math.round(discount);
};

export const generateQuoteId = () => {
  return `QT-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

export const exportToPDF = async (data, filename = "quote.pdf") => {
  // This would use jsPDF to generate PDF
  // TODO: Implement PDF generation
  console.log("Exporting to PDF:", data, filename);
};

export const shareQuote = (quoteData) => {
  // Share quote via various methods
  if (navigator.share) {
    navigator.share({
      title: "Project Quote from TheTriFusion",
      text: `Your project quote: ₹${quoteData.totalPrice.toLocaleString()}`,
      url: window.location.href
    });
  } else {
    // Fallback: copy to clipboard
    const text = `Project Quote: ₹${quoteData.totalPrice.toLocaleString()}\n${window.location.href}`;
    navigator.clipboard.writeText(text);
    alert("Quote link copied to clipboard!");
  }
};


/**
 * Official organiser name → official site.
 * Keys are the organiser strings already stored on event posts.
 * Unknown names are omitted from JSON-LD rather than given a guessed URL.
 * offerUrl is the official ticket or official event page when that page is
 * the organiser site itself or a confirmed tickets listing.
 */
export const EVENT_ORGANIZERS = {
  UEFA: {
    url: "https://www.uefa.com",
    offerUrl: "https://www.uefa.com",
  },
  "Premier League": {
    url: "https://www.premierleague.com",
    offerUrl: "https://www.premierleague.com",
  },
  NFL: {
    url: "https://www.nfl.com",
    offerUrl: "https://www.nfl.com",
  },
  "National Football League": {
    url: "https://www.nfl.com",
    offerUrl: "https://www.nfl.com",
  },
  BCCI: {
    url: "https://www.bcci.tv",
    offerUrl: "https://www.bcci.tv",
  },
  "Board of Control for Cricket in India": {
    url: "https://www.bcci.tv",
    offerUrl: "https://www.bcci.tv",
  },
  ICC: {
    url: "https://www.icc-cricket.com",
    offerUrl: "https://www.icc-cricket.com",
  },
  "International Cricket Council": {
    url: "https://www.icc-cricket.com",
    offerUrl: "https://www.icc-cricket.com",
  },
  FIFA: {
    url: "https://www.fifa.com",
    offerUrl: "https://www.fifa.com",
  },
  "Busan International Film Festival": {
    url: "https://www.biff.kr",
    offerUrl: "https://www.biff.kr",
  },
  "Busan IFF": {
    url: "https://www.biff.kr",
    offerUrl: "https://www.biff.kr",
  },
  BIFF: {
    url: "https://www.biff.kr",
    offerUrl: "https://www.biff.kr",
  },
  RBI: {
    url: "https://www.rbi.org.in",
    offerUrl: "https://www.rbi.org.in",
  },
  "Reserve Bank of India": {
    url: "https://www.rbi.org.in",
    offerUrl: "https://www.rbi.org.in",
  },
  "Election Commission of India": {
    url: "https://www.eci.gov.in",
    offerUrl: "https://www.eci.gov.in",
  },
  "New Zealand Cricket": {
    url: "https://www.nzc.nz",
    offerUrl: "https://www.nzc.nz/international/matches-and-tickets/",
  },
  "Pakistan Cricket Board": {
    url: "https://www.pcb.com.pk",
    offerUrl: "https://www.pcb.com.pk",
  },
  "Formula 1": {
    url: "https://www.formula1.com",
    offerUrl: "https://www.formula1.com",
  },
  ATP: {
    url: "https://www.atptour.com",
    offerUrl: "https://www.atptour.com",
  },
  WTA: {
    url: "https://www.wtatennis.com",
    offerUrl: "https://www.wtatennis.com",
  },
  NBA: {
    url: "https://www.nba.com",
    offerUrl: "https://www.nba.com",
  },
  LaLiga: {
    url: "https://www.laliga.com",
    offerUrl: "https://www.laliga.com",
  },
  "Lega Serie A": {
    url: "https://www.legaseriea.it",
    offerUrl: "https://www.legaseriea.it",
  },
  Bundesliga: {
    url: "https://www.bundesliga.com",
    offerUrl: "https://www.bundesliga.com",
  },
  "All India Football Federation": {
    url: "https://www.the-aiff.com",
    offerUrl: "https://www.the-aiff.com",
  },
  Amazon: {
    url: "https://www.amazon.com",
    offerUrl: "https://www.amazon.com",
  },
  Flipkart: {
    url: "https://www.flipkart.com",
    offerUrl: "https://www.flipkart.com",
  },
  "Tribunal Superior Eleitoral": {
    url: "https://www.tse.jus.br",
    offerUrl: "https://www.tse.jus.br",
  },
  "Asian Games Aichi-Nagoya 2026": {
    url: "https://www.aichi-nagoya2026.org",
    offerUrl: "https://www.aichi-nagoya2026.org",
  },
  "Aichi-Nagoya 2026 Organising Committee": {
    url: "https://www.aichi-nagoya2026.org",
    offerUrl: "https://www.aichi-nagoya2026.org",
  },
  "Bank of America Chicago Marathon": {
    url: "https://www.chicagomarathon.com",
    offerUrl: "https://www.chicagomarathon.com",
  },
  "Central Election Commission of Bosnia and Herzegovina": {
    url: "https://www.izbori.ba",
    offerUrl: "https://www.izbori.ba",
  },
  "Central Elections Committee": {
    url: "https://bechirot.gov.il",
    offerUrl: "https://bechirot.gov.il",
  },
  "Central Election Commission of Bulgaria": {
    url: "https://www.cik.bg",
    offerUrl: "https://www.cik.bg",
  },
  "Ministry of the Interior of the Czech Republic": {
    url: "https://www.mvcr.cz",
    offerUrl: "https://www.mvcr.cz",
  },
  "Electoral Commission of New Zealand": {
    url: "https://elections.nz",
    offerUrl: "https://elections.nz",
  },
  "G20 host year, United States": {
    url: "https://www.g20.org",
    offerUrl: "https://www.g20.org",
  },
  UNFCCC: {
    url: "https://unfccc.int",
    offerUrl: "https://unfccc.int",
  },
  "International Monetary Fund and World Bank Group": {
    url: "https://www.imf.org",
    offerUrl: "https://www.imf.org",
  },
  "United Nations General Assembly": {
    url: "https://www.un.org",
    offerUrl: "https://www.un.org",
  },
  "Nobel Foundation": {
    url: "https://www.nobelprize.org",
    offerUrl: "https://www.nobelprize.org",
  },
  "Norwegian Nobel Committee": {
    url: "https://www.nobelprize.org",
    offerUrl: "https://www.nobelprize.org",
  },
  "Federal Open Market Committee": {
    url: "https://www.federalreserve.gov",
    offerUrl: "https://www.federalreserve.gov",
  },
  "Staff Selection Commission": {
    url: "https://ssc.gov.in",
    offerUrl: "https://ssc.gov.in",
  },
  "Indian Institutes of Management": {
    url: "https://iimcat.ac.in",
    offerUrl: "https://iimcat.ac.in",
  },
  "NASA and SpaceX": {
    url: "https://www.nasa.gov",
    offerUrl: "https://www.nasa.gov",
  },
  "Sun Pictures": {
    url: "https://www.sunpictures.in",
    offerUrl: "https://www.sunpictures.in",
  },
  "Warner Bros. Pictures": {
    url: "https://www.warnerbros.com",
    offerUrl: "https://www.warnerbros.com",
  },
  "Sony Pictures Releasing": {
    url: "https://www.sonypictures.com",
    offerUrl: "https://www.sonypictures.com",
  },
  "Prime Focus Studios / Sony Pictures Entertainment": {
    url: "https://www.sonypictures.com",
    offerUrl: "https://www.sonypictures.com",
  },
  Netflix: {
    url: "https://www.netflix.com",
    offerUrl: "https://www.netflix.com",
  },
  "Netflix / CD PROJEKT RED": {
    url: "https://www.netflix.com",
    offerUrl: "https://www.netflix.com",
  },
  "France Football and UEFA": {
    url: "https://www.francefootball.fr",
    offerUrl: "https://www.francefootball.fr",
  },
  "Guns N' Roses": {
    url: "https://www.gunsnroses.com",
    offerUrl: "https://www.gunsnroses.com",
  },
  "Rockstar Games": {
    url: "https://www.rockstargames.com",
    offerUrl: "https://www.rockstargames.com",
  },
  IGDC: {
    url: "https://indiagdc.com",
    offerUrl: "https://indiagdc.com",
  },
};

export function lookupOrganizer(name) {
  if (typeof name !== "string") return null;
  const key = name.trim();
  if (!key) return null;
  const row = EVENT_ORGANIZERS[key];
  if (!row || !row.url) return null;
  return {
    name: key,
    url: row.url,
    offerUrl: row.offerUrl || row.url,
  };
}

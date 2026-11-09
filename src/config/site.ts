/**
 * Centralna konfiguracja strony.
 * Większość treści (dane kontaktowe, cennik, certyfikaty) edytujesz TUTAJ,
 * a strony w src/pages tylko je wyświetlają.
 *
 * Wartości oznaczone "TODO" to placeholdery do podmiany na prawdziwe dane.
 */

export const site = {
  brand: 'Kobido Studio', // TODO: nazwa gabinetu
  owner: 'Agnieszka Kozłowska',
  ownerFirstName: 'Agnieszka',
  ownerPhoto: '/images/agnieszka.jpg', // used as hero + portrait until real studio photos exist
  tagline: 'Japoński lifting twarzy bez skalpela',
  description:
    'Masaż Kobido — tradycyjny japoński masaż twarzy, który naturalnie liftinguje, odpręża i przywraca skórze blask.',
  city: 'Sosnowiec',

  contact: {
    phone: '+48 796 460 550',
    phoneHref: '+48796460550', // ten sam numer bez spacji (do linku tel:)
    email: 'agnessiq@gmail.com',
    address: 'ul. Szkolna 4/28, 41-200 Sosnowiec',
    mapQuery: 'Szkolna 4, 41-200 Sosnowiec', // tekst wyszukiwania dla mapy Google (bez nr lokalu)
    // TODO: niedziela — not decided yet
    hours: [
      { days: 'Poniedziałek – Piątek', time: '9:00 – 21:00' },
      { days: 'Sobota', time: '9:00 – 14:00' },
    ],
  },

  social: {
    instagram: 'https://instagram.com/', // TODO
    facebook: 'https://facebook.com/', // TODO
  },

  /**
   * Google Calendar — "Harmonogram spotkań" (Appointment schedule).
   * Instrukcja: patrz CLAUDE.md → sekcja "Rezerwacje / Google Calendar".
   * Wklej tu URL z "Udostępnij → Umieść na stronie" (src z iframe), np.:
   * https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true
   * Pusty string = strona rezerwacji pokazuje fallback (telefon).
   */
  bookingUrl:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ21OmqNsOgt0igEbX8UfOo2Zi5ECjRS3vlhpHfdE9bciaQEVlPmJzakHA518AaHkqBgNEClC-JS?gv=true',
  /**
   * 'link'  = our own styled card + button that opens Google's booking page (default, cleaner look)
   * 'embed' = Google's calendar inlined as an iframe (Google styling + Google footer)
   */
  bookingMode: 'link' as 'link' | 'embed',

  nav: [
    { label: 'Strona główna', href: '/' },
    { label: 'O mnie', href: '/o-mnie' },
    { label: 'Oferta', href: '/#oferta' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
} as const;

export type Service = {
  name: string;
  duration: string;
  price: string;
  description: string;
  includes?: string[]; // short checklist shown on the pricing card
  featured?: boolean;
};

export const services: Service[] = [
  {
    name: 'Masaż liftingujący Kobido',
    duration: '60 min',
    price: '150 zł',
    description:
      'Pełny rytuał Kobido: twarz, szyja i dekolt. Naturalny lifting, rozluźnienie napięć i promienna cera — już po pierwszej wizycie.',
    includes: ['Krótka konsultacja i demakijaż', 'Masaż twarzy, szyi i dekoltu', 'Efekt widoczny po pierwszej wizycie'],
  },
];

/**
 * YouTube Shorts shown in the "Jak wygląda Kobido" section on the homepage.
 * Third-party demo videos for now — replace with Agnieszka's own clips when available.
 * id = the part after youtube.com/shorts/
 */
export const videos = [
  { id: 'fyJyrg9TvmU', title: 'Kobido — lifting i relaks', author: 'Face Concept' },
  { id: '3ewqtzzoW8Q', title: 'Japoński masaż twarzy Kobido', author: 'KOBIDO JAPAN' },
  { id: 'fu_bAOGd5Bc', title: 'Kobido w gabinecie', author: 'Asia ASMR' },
];

export type Certificate = {
  title: string;
  issuer?: string;
  year?: string;
  image?: string; // np. '/images/certyfikaty/kobido.jpg'
};

// TODO: uzupełnić wystawcę (issuer), rok (year) i skan (image) certyfikatu
export const certificates: Certificate[] = [
  { title: 'Kurs Japońskiego Masażu Twarzy' },
];

// TODO: prawdziwe opinie klientek (tylko za ich zgodą)
export const testimonials = [
  { name: 'Klientka', text: 'Miejsce na opinię klientki. Krótko, szczerze, 2–3 zdania.' },
  { name: 'Klientka', text: 'Miejsce na opinię klientki. Krótko, szczerze, 2–3 zdania.' },
  { name: 'Klientka', text: 'Miejsce na opinię klientki. Krótko, szczerze, 2–3 zdania.' },
];

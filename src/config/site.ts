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
  tagline: 'Japoński lifting twarzy bez skalpela',
  description:
    'Masaż Kobido — tradycyjny japoński masaż twarzy, który naturalnie liftinguje, odpręża i przywraca skórze blask.',
  city: 'Sosnowiec',

  contact: {
    phone: '+48 600 000 000', // TODO: numer wyświetlany
    phoneHref: '+48600000000', // TODO: ten sam numer bez spacji (do linku tel:)
    email: 'kontakt@kobido-studio.pl', // TODO
    address: 'ul. Szkolna 4/28, 41-200 Sosnowiec',
    mapQuery: 'Szkolna 4, 41-200 Sosnowiec', // tekst wyszukiwania dla mapy Google (bez nr lokalu)
    hours: [
      { days: 'Poniedziałek – Piątek', time: '10:00 – 19:00' },
      { days: 'Sobota', time: '9:00 – 14:00' },
      { days: 'Niedziela', time: 'nieczynne' },
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
  featured?: boolean;
};

// TODO: prawdziwy cennik
export const services: Service[] = [
  {
    name: 'Kobido — masaż klasyczny',
    duration: '60 min',
    price: '220 zł',
    description: 'Pełny rytuał Kobido: twarz, szyja i dekolt. Idealny na pierwszą wizytę.',
  },
  {
    name: 'Kobido z maską',
    duration: '90 min',
    price: '290 zł',
    description: 'Masaż Kobido połączony z odżywczą maską dobraną do potrzeb skóry.',
    featured: true,
  },
  {
    name: 'Pakiet 5 zabiegów',
    duration: '5 × 60 min',
    price: '990 zł',
    description: 'Seria zalecana dla trwałego efektu liftingu. Wizyty co 7–10 dni.',
  },
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

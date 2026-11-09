/**
 * Line-icon library (24×24, stroke = currentColor, no fill).
 * Rendered by <Icon> and <IconBadge>; also used by MotifMarquee.
 * Paths with an `ib__*` class are animated by IconBadge on hover.
 */
export const icons = {
  // ----- contact / utility -----
  phone:
    '<path class="ib__waves" d="M14.5 3.5a6 6 0 0 1 6 6M14.5 7a2.5 2.5 0 0 1 2.5 2.5"/>' +
    '<path d="M5.2 3.5h3l1.6 4.1-2 1.3a11 11 0 0 0 7.3 7.3l1.3-2 4.1 1.6v3a1.8 1.8 0 0 1-1.9 1.8A16.6 16.6 0 0 1 3.4 5.4a1.8 1.8 0 0 1 1.8-1.9z"/>',
  mail: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path class="ib__flap" d="m3.5 6.5 8.5 6.5 8.5-6.5"/>',
  pin: '<path d="M12 21.5s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9.5" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="8.5"/><path class="ib__hand" d="M12 7.5V12l3 2"/>',
  calendar: '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  'calendar-check':
    '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path class="ib__tick" d="m9 15 2 2 4-4"/>',
  'calendar-x':
    '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="m10 13.5 4 4m0-4-4 4"/>',
  wallet: '<rect x="3" y="6" width="18" height="13" rx="2.5"/><path d="M3 10.5h18M15.5 15h2.5"/>',
  chat:
    '<path d="M20.5 11.5a8 8 0 0 1-11.7 7.1L3.5 20l1.4-4.7a8 8 0 1 1 15.6-3.8z"/>' +
    '<path class="ib__dot" d="M8.5 11.5h.01"/><path class="ib__dot" d="M12 11.5h.01"/><path class="ib__dot" d="M15.5 11.5h.01"/>',
  shield: '<path d="M12 3.5 19.5 6v5.5c0 4.5-3.2 8-7.5 9-4.3-1-7.5-4.5-7.5-9V6z"/><path d="M12 8.5v4M12 15.8v.01"/>',
  shirt: '<path d="M8.5 3.5 4 6l-1.5 4.5 3 1.2v8.8h13v-8.8l3-1.2L20 6l-4.5-2.5a3.5 3.5 0 0 1-7 0z"/>',
  award: '<circle cx="12" cy="9" r="5.5"/><path d="m8.6 13.4-1.6 7.1 5-2.5 5 2.5-1.6-7.1"/><path d="m10 9 1.4 1.4L14 7.8"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  'arrow-right': '<path d="M5 12h14M13 6l6 6-6 6"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 19V7.5A1.5 1.5 0 0 1 5.5 6H10"/>',
  quote:
    '<path d="M10 6.5c-3 1-5 3.6-5 7.2v3.8h5v-5H7.3c.3-1.9 1.3-3.1 2.7-3.7zM19 6.5c-3 1-5 3.6-5 7.2v3.8h5v-5h-2.7c.3-1.9 1.3-3.1 2.7-3.7z"/>',
  instagram: '<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/>',
  facebook:
    '<path d="M14.5 21v-7.5h2.6l.4-3h-3V8.6c0-.9.3-1.6 1.6-1.6h1.6V4.3A21 21 0 0 0 15.3 4c-2.3 0-3.8 1.4-3.8 4v2.5H9v3h2.5V21"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M19.5 14.5A8 8 0 1 1 9.5 4.5a6.3 6.3 0 0 0 10 10z"/>',

  // ----- Kobido / wellness motifs -----
  lotus:
    '<path d="M12 20c-4.5 0-8.5-3-8.5-7.5 3.2 0 6.3 2 8.5 5 2.2-3 5.3-5 8.5-5 0 4.5-4 7.5-8.5 7.5z"/><path d="M12 17.5c-2.2-3.2-2.2-7.8 0-12 2.2 4.2 2.2 8.8 0 12z"/>',
  leaf: '<path d="M5 19C5 10.5 10 5 19 5c0 9-5.5 14-14 14z"/><path d="M5 19l8.5-8.5"/>',
  drop: '<path d="M12 3.5c-3.8 4.7-6 8-6 10.8a6 6 0 0 0 12 0c0-2.8-2.2-6.1-6-10.8z"/><path d="M9.2 14.5a2.8 2.8 0 0 0 2.3 2.6"/>',
  sakura:
    '<g transform="translate(12 12)"><ellipse rx="2.6" ry="4.6" cy="-4.8"/><ellipse rx="2.6" ry="4.6" cy="-4.8" transform="rotate(72)"/><ellipse rx="2.6" ry="4.6" cy="-4.8" transform="rotate(144)"/><ellipse rx="2.6" ry="4.6" cy="-4.8" transform="rotate(216)"/><ellipse rx="2.6" ry="4.6" cy="-4.8" transform="rotate(288)"/><circle r="1.2"/></g>',
  stones:
    '<ellipse cx="12" cy="18.5" rx="7.5" ry="2.5"/><ellipse cx="12" cy="13.2" rx="5.3" ry="2.1"/><ellipse cx="12" cy="8.6" rx="3.3" ry="1.7"/>',
  wave: '<path d="M2 11c3 0 3-3 6-3s3 3 6 3 3-3 6-3"/><path d="M2 16c3 0 3-3 6-3s3 3 6 3 3-3 6-3"/>',
  sparkle:
    '<path d="M12 3c.8 5 4 8.2 9 9-5 .8-8.2 4-9 9-.8-5-4-8.2-9-9 5-.8 8.2-4 9-9z"/><path class="ib__twinkle" d="M19 3v3M17.5 4.5h3"/>',
  heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>',
  hand:
    '<path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11M11 10.5V4.5a1.5 1.5 0 0 1 3 0V11M14 10.5V6a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 7-6.5 7-2.6 0-4.2-1.3-5.6-3.6L3.4 14a1.5 1.5 0 0 1 2.5-1.6L8 15"/>',
  face: '<circle cx="12" cy="12" r="8.5"/><path d="M8.8 10.2h.01M15.2 10.2h.01"/><path d="M8.8 14.6c1.8 1.5 4.6 1.5 6.4 0"/>',
} as const;

export type IconName = keyof typeof icons;

// Champs de suivi visiteur envoyés par aymen_tracker.js avec le formulaire de devis
// (window.AymenTracker.getPayload()). Liste blanche : seuls ces champs sont retenus,
// tronqués à la taille de leur colonne dans la table Quotes. Env TEST.

const STR = (max) => ({ kind: 'str', max });
const INT = { kind: 'int' };
const DATE = { kind: 'date' };
const JSON_TEXT = { kind: 'json' };
const TEXT = { kind: 'str', max: 2000 };

const TRACKING_FIELDS = {
  // 1er contact
  referrer_url: STR(500),
  landing_page_url: STR(500),
  utm_source: STR(150),
  utm_medium: STR(150),
  utm_campaign: STR(255),
  gclid: STR(255),
  fbclid: STR(255),
  page_uri: TEXT,
  // identité, visites, sessions
  visitor_id: STR(64),
  first_seen_at: DATE,
  visits_count: INT,
  session_id: STR(64),
  session_pageviews: INT,
  // dernier contact
  last_referrer_url: STR(500),
  last_landing_page_url: STR(500),
  last_utm_source: STR(150),
  last_utm_medium: STR(150),
  last_utm_campaign: STR(255),
  // appareil
  device_type: STR(20),
  screen: STR(20),
  viewport: STR(20),
  language: STR(20),
  timezone: STR(64),
  // navigation
  pages_count: INT,
  pages_visited: JSON_TEXT,
  total_seconds_on_site: INT,
  max_scroll_percent: INT,
  // clics clés
  key_clicks: JSON_TEXT,
  // formulaire
  form_started_at: DATE,
  form_fill_seconds: INT,
};

function clean(value, spec) {
  if (value === undefined || value === null || value === '') return null;
  switch (spec.kind) {
    case 'str':
      return String(value).slice(0, spec.max);
    case 'int': {
      const n = Math.round(Number(value));
      return Number.isFinite(n) ? n : null;
    }
    case 'date': {
      const d = new Date(value);
      return Number.isNaN(d.getTime()) ? null : d;
    }
    case 'json':
      return JSON.stringify(value).slice(0, 10000);
    default:
      return null;
  }
}

function extractTracking(body = {}) {
  const out = {};
  for (const [field, spec] of Object.entries(TRACKING_FIELDS)) {
    out[field] = clean(body[field], spec);
  }
  return out;
}

module.exports = { extractTracking, TRACKING_FIELDS };

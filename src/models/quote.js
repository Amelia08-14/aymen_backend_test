// models/quote.js
module.exports = (sequelize, DataTypes) => {
  const Quote = sequelize.define('Quote', {
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    firstName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: 'Algérie',
    },
    wilaya: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    budget: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    profession: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    financing: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    interest: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    locations: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contactDays: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contactTime: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    projectStatus: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    consent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    sourceProject: {
      type: DataTypes.STRING(150),
      allowNull: true,
    },

    // --- Suivi visiteur (aymen_tracker.js) : env TEST ---
    // 1er contact
    referrer_url: { type: DataTypes.STRING(500), allowNull: true },
    landing_page_url: { type: DataTypes.STRING(500), allowNull: true },
    utm_source: { type: DataTypes.STRING(150), allowNull: true },
    utm_medium: { type: DataTypes.STRING(150), allowNull: true },
    utm_campaign: { type: DataTypes.STRING(255), allowNull: true },
    gclid: { type: DataTypes.STRING(255), allowNull: true },
    fbclid: { type: DataTypes.STRING(255), allowNull: true },
    page_uri: { type: DataTypes.TEXT, allowNull: true },
    // identité, visites, sessions
    visitor_id: { type: DataTypes.STRING(64), allowNull: true },
    first_seen_at: { type: DataTypes.DATE, allowNull: true },
    visits_count: { type: DataTypes.INTEGER, allowNull: true },
    session_id: { type: DataTypes.STRING(64), allowNull: true },
    session_pageviews: { type: DataTypes.INTEGER, allowNull: true },
    // dernier contact
    last_referrer_url: { type: DataTypes.STRING(500), allowNull: true },
    last_landing_page_url: { type: DataTypes.STRING(500), allowNull: true },
    last_utm_source: { type: DataTypes.STRING(150), allowNull: true },
    last_utm_medium: { type: DataTypes.STRING(150), allowNull: true },
    last_utm_campaign: { type: DataTypes.STRING(255), allowNull: true },
    // appareil
    device_type: { type: DataTypes.STRING(20), allowNull: true },
    screen: { type: DataTypes.STRING(20), allowNull: true },
    viewport: { type: DataTypes.STRING(20), allowNull: true },
    language: { type: DataTypes.STRING(20), allowNull: true },
    timezone: { type: DataTypes.STRING(64), allowNull: true },
    // navigation
    pages_count: { type: DataTypes.INTEGER, allowNull: true },
    pages_visited: { type: DataTypes.TEXT, allowNull: true },
    total_seconds_on_site: { type: DataTypes.INTEGER, allowNull: true },
    max_scroll_percent: { type: DataTypes.INTEGER, allowNull: true },
    // clics clés
    key_clicks: { type: DataTypes.TEXT, allowNull: true },
    // formulaire
    form_started_at: { type: DataTypes.DATE, allowNull: true },
    form_fill_seconds: { type: DataTypes.INTEGER, allowNull: true },
    // lus côté serveur (pas envoyés par le navigateur)
    ip_address: { type: DataTypes.STRING(64), allowNull: true },
    user_agent: { type: DataTypes.STRING(500), allowNull: true },
  }, {
    
  });

  return Quote;
};
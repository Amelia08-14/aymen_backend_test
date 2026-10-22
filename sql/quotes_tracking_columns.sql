-- =============================================================================
-- COLONNES DE SUIVI VISITEUR SUR LA TABLE `Quotes` (env TEST)
--
-- Champs envoyés par aymen_tracker.js avec le formulaire de devis. `sync({ alter: false })`
-- n'ajoute jamais de colonne à une table déjà existante : à exécuter une fois dans
-- phpMyAdmin, sur la base de TEST uniquement (aymen_site_test).
--
-- Syntaxe MariaDB (`ADD COLUMN IF NOT EXISTS`) : relançable sans erreur « Duplicate column ».
-- Une base neuve (table Quotes absente) n'en a pas besoin : le backend la crée complète.
-- =============================================================================

ALTER TABLE `Quotes`
  -- 1er contact
  ADD COLUMN IF NOT EXISTS `referrer_url` VARCHAR(500) NULL,
  ADD COLUMN IF NOT EXISTS `landing_page_url` VARCHAR(500) NULL,
  ADD COLUMN IF NOT EXISTS `utm_source` VARCHAR(150) NULL,
  ADD COLUMN IF NOT EXISTS `utm_medium` VARCHAR(150) NULL,
  ADD COLUMN IF NOT EXISTS `utm_campaign` VARCHAR(255) NULL,
  ADD COLUMN IF NOT EXISTS `gclid` VARCHAR(255) NULL,
  ADD COLUMN IF NOT EXISTS `fbclid` VARCHAR(255) NULL,
  ADD COLUMN IF NOT EXISTS `page_uri` TEXT NULL,
  -- identité, visites, sessions
  ADD COLUMN IF NOT EXISTS `visitor_id` VARCHAR(64) NULL,
  ADD COLUMN IF NOT EXISTS `first_seen_at` DATETIME NULL,
  ADD COLUMN IF NOT EXISTS `visits_count` INT NULL,
  ADD COLUMN IF NOT EXISTS `session_id` VARCHAR(64) NULL,
  ADD COLUMN IF NOT EXISTS `session_pageviews` INT NULL,
  -- dernier contact
  ADD COLUMN IF NOT EXISTS `last_referrer_url` VARCHAR(500) NULL,
  ADD COLUMN IF NOT EXISTS `last_landing_page_url` VARCHAR(500) NULL,
  ADD COLUMN IF NOT EXISTS `last_utm_source` VARCHAR(150) NULL,
  ADD COLUMN IF NOT EXISTS `last_utm_medium` VARCHAR(150) NULL,
  ADD COLUMN IF NOT EXISTS `last_utm_campaign` VARCHAR(255) NULL,
  -- appareil
  ADD COLUMN IF NOT EXISTS `device_type` VARCHAR(20) NULL,
  ADD COLUMN IF NOT EXISTS `screen` VARCHAR(20) NULL,
  ADD COLUMN IF NOT EXISTS `viewport` VARCHAR(20) NULL,
  ADD COLUMN IF NOT EXISTS `language` VARCHAR(20) NULL,
  ADD COLUMN IF NOT EXISTS `timezone` VARCHAR(64) NULL,
  -- navigation
  ADD COLUMN IF NOT EXISTS `pages_count` INT NULL,
  ADD COLUMN IF NOT EXISTS `pages_visited` TEXT NULL,
  ADD COLUMN IF NOT EXISTS `total_seconds_on_site` INT NULL,
  ADD COLUMN IF NOT EXISTS `max_scroll_percent` INT NULL,
  -- clics clés
  ADD COLUMN IF NOT EXISTS `key_clicks` TEXT NULL,
  -- formulaire
  ADD COLUMN IF NOT EXISTS `form_started_at` DATETIME NULL,
  ADD COLUMN IF NOT EXISTS `form_fill_seconds` INT NULL,
  -- lus côté serveur (IP après proxy, navigateur)
  ADD COLUMN IF NOT EXISTS `ip_address` VARCHAR(64) NULL,
  ADD COLUMN IF NOT EXISTS `user_agent` VARCHAR(500) NULL;

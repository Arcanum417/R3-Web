<?php
// Rename this file to config.php

define('UNIT_NAME', 'Unit Name');

// Database details
define('DB_HOST', '127.0.0.1');
define('DB_USER', 'user');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'aar');

// Domain settings

// http://yourunit.com/aar
// Note the lack of trailing slash
define('WEB_PATH', 'http://r3.local');

// Locale settings, the timezone should match your database server
date_default_timezone_set('Europe/London');
define('US_DATE_FORMAT', FALSE);

define('FAVICON', WEB_PATH . '/assets/images/brand/favicon.png');

/*
    Add a password that users must enter to view the
    mission list and playbacks

    Leave blank to make all replays open to the public
 */
define('ACCESS_PASSWORD', '');

// Admin password
define('ADMIN_PASSWORD', 'changeme');

// Default event playback speed (5x 10x 30x)
define('DEFAULT_PLAYBACK_SPEED', 10);

/*
    Define the minimum mission time for an event
    to appear in the missions list. This prevents
    test missions from cluttering the list
 */
define('MIN_MISSION_TIME', 15);
define('MIN_PLAYER_COUNT', 5);

/*
    Minutes after last event received before playback can be viewed.
    This is designed to stop players watching playback mid game to see
    the enemy unit positions
 */
define('MINUTES_MISSION_END_BLOCK', 2);

/*
    Event cache json files take up disk space, lets auto clear them out
    after x hours. Use a value of 0 to disable this behaviour
 */
define('HOURS_EXPIRE_EVENT_CACHE_FILE', 5);

// Set this to FALSE if you are deploying
// to production server
define('DEBUG', TRUE);

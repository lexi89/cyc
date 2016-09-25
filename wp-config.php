<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'cyc');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Yx,f2x<%%jcqhkX2f!@r>P+nZ`u^0fa|CU?G7SmfSO5TXrrF$>GKCH%=t>uhp-+T');
define('SECURE_AUTH_KEY',  '?uMFW^nJKC-!@aFW9Jf c6lAzdY&{d`rDvBzUL@_M#u8@-o4ab$>mB@|ep?~Gt<D');
define('LOGGED_IN_KEY',    '-tpd<F<y016 loXJ7$p=>jCZ+9ON{Y0Kb8r#A+k^H9i*JcNhs$5*%B;5EhyOEXPy');
define('NONCE_KEY',        'iiD?o[m&[ua+tJpr?Qp{;4XyZ:q4|{B]0cvCj9-z:2k98[PA&&G$V(dX;_k#}NyW');
define('AUTH_SALT',        'txW<qe.nc%^O7T3w1}c>mJnv/;Qmfn4gvJX[8OJJ};q0Of>yP[oA962|r6OI,@g+');
define('SECURE_AUTH_SALT', ')4wSjR$7ywhS^x|mj1{V;$R%m,N+NyNZ8?Nk&%_Y9nAxBFj}kE&RLhZXMZW`@buP');
define('LOGGED_IN_SALT',   '[KV}RTOzDE3[ETqS:z9{a9ZX7J)CX]g4Zst%b{SSH Y^m(TRP)wa]MOk:Iryh@~4');
define('NONCE_SALT',       ' 3,[Q_1^cBMGYmmeI@$*WBhLDFF`JZDv}eTFQbzd]K|k+S$zQR^KpZkT1B-[n6{M');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'cyc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

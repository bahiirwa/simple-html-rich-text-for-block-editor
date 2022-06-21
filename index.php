<?php
/**
 * Plugin Name:       Simple HTML Rich Text for Block Editor
 * Plugin URI:        https://wordpress.org/plugins/simple-html-rich-text-for-block-editor/
 * Description:       Add semantic HTML for rich text such as Subscript, SuperScript, Cite, Small, Marked, Inserted and Deleted in the Block Editor.
 * Version:           1.2.1
 * Author:            Laurence Bahiirwa
 * Author URI:        https://omukiguy.com
 * License:           GPLv2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 5.0
 * Tested up to:      6.0
 * 
*/

// If this file is called firectly, abort!!!
defined( 'ABSPATH' ) || die( 'No Access!' );

// Add functionality to the Block Editor.
add_action( 'enqueue_block_editor_assets', function() {
	wp_enqueue_script(
		'simple-html-rich-text',
		plugins_url( 'dist/index.js', __FILE__ ),
		array(
			'wp-element',
			'wp-rich-text',
			'wp-format-library',
			'wp-i18n',
			'wp-editor',
			'wp-compose',
			'wp-components',
		),
		filemtime( dirname( __FILE__ ) . '/dist/index.js' ),
		true
	);
} );

<?php
/**
 * Plugin Name:       Simple HTML RichText for Block Editor
 * Plugin URI:        https://wordpress.org/plugins/simple-html-rich-text-for-block-editor/
 * Description:       Add Semantic HTML Markup to texts such as Cite, Small, Marked, Inserted and Deleted in the Block Editor.
 * Version:           1.3.2
 * Author:            Laurence Bahiirwa
 * Author URI:        https://omukiguy.com
 * License:           GPLv2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 6.0.0
 * Tested up to:      6.2.0
 *
 * @package Simple_HTML_RichText_for_Block_Editor
 */

// If this file is called firectly, abort!!!
defined( 'ABSPATH' ) || die( 'No Access!' );

/**
 * Registers new block types scripts.
 */
add_action(
	'enqueue_block_editor_assets',
	function() {
		$asset_file_path = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
		if ( file_exists( $asset_file_path ) ) {
			$assets = require_once $asset_file_path;
			wp_enqueue_script(
				'pre-publish-plugin-script',
				plugin_dir_url( __FILE__ ) . 'build/index.js',
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
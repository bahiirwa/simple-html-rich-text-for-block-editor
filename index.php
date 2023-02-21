<?php
/**
 * Plugin Name:       Simple HTML RichText for Block Editor
 * Plugin URI:        https://wordpress.org/plugins/simple-html-rich-text-for-block-editor/
 * Description:       Add Semantic HTML Markup to texts such as Cite, Small, Marked, Inserted and Deleted in the Block Editor.
 * Version:           1.3.0
 * Author:            Laurence Bahiirwa
 * Author URI:        https://omukiguy.com
 * License:           GPLv2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 * Requires at least: 6.0
 * Tested up to:      6.2.0
 *
 * @package Simple_HTML_RichText_for_Block_Editor
 */

// If this file is called firectly, abort!!!
defined( 'ABSPATH' ) || die( 'No Access!' );

/**
 * Registers new block types scripts.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function simple_html_rich_text_for_block_editor_scripts_init() {
	register_block_type( __DIR__ . '/build' );
}

add_action( 'init', 'simple_html_rich_text_for_block_editor_scripts_init' );

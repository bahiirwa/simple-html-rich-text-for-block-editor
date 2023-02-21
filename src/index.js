/**
 * Internal dependencies
*/
import { registerFormatType, toggleFormat, unregisterFormatType } from '@wordpress/rich-text';
import { RichTextToolbarButton } from '@wordpress/block-editor';

const buttons = [
	{ name: "small", title: "Small", character: "/", icon: "minus" },
	{ name: "mark", title: "Marked", character: "=", icon: "tag" },
	{ name: "ins", title: "Inserted", character: "+", icon: "yes" },
	{ name: "del", title: "Deleted", character: "-", icon: "dismiss" },
	{ name: "cite", title: "Cite", character: "2", icon: "sticky" }
];

buttons.forEach( button => {
	const MyCustomButton = ( { isActive, onChange, value } ) => {
		return (
			<RichTextToolbarButton
				icon={button.icon}
				title={button.title}
				onClick={ () => {
					onChange(
						toggleFormat( value, {
							type: 'simple-html-rich-text-for-block-editor/' + button.name
						})
					);
				} }
				isActive = {isActive}
			/>
		);
	};

	/**
	 * Registers Format Type.
	 *
	 * @see https://developer.wordpress.org/block-editor/how-to-guides/format-api/
	 */
	registerFormatType( 'simple-html-rich-text-for-block-editor/' + button.name, {
		title: button.title,
		tagName: button.name,
		className: null,
		edit: MyCustomButton
	} );

});

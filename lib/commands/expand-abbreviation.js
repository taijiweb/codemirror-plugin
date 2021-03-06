'use strict';

import getAbbreviation, { clearMarkers } from '../abbreviation';

/**
 * Expand abbreviation command
 * @param {CodeMirror.Editor} editor
 * @param {Boolean} contextAware
 */
export default function(editor, contextAware) {
	if (editor.somethingSelected()) {
		return editor.constructor.Pass;
	}

	const abbr = getAbbreviation(editor, editor.getCursor(), contextAware);

	if (abbr) {
		abbr.insert(editor);
		clearMarkers(editor);
		return true;
	}

	// If no abbreviation was expanded, allow editor to handle different
	// action for keyboard shortcut (Tab key mostly)
	return editor.constructor.Pass;
}

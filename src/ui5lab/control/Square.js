sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/Control'
], function(jQuery, Control) {
	"use strict";

	/**
	 * Constructor for a new Square control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Squares are awesome geometrical shapes that are underepresented in today's modern UIs
	 * @extends sap.ui.core.Control
	 *
	 * @public
	 * @alias ui5lab.geometry.Square
	 */
	var oSquare = Control.extend("ui5lab.control.Square", {
		/**
		 * Control API
		 */
		metadata: {
			properties: {
				/**
				 * Sets the size (width/height) for the square
				 */
				size: {type: "int", defaultValue: "50"},
				/**
				 * Sets the text inside the square
				 */
				text: {type: "string", defaultValue: ""}
			}
		},

		/**
		 * Lifecycle hook to initialize the control
		 */
		init: function () {
			// nothing yet
		},

		/**
		 * Renders the HTML for the control, using the provided {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm RenderManager object
		 * @param {sap.ui.core.Control} oControl An object representation of the control that will be rendered
		 */
		renderer: function (oRm, oControl) {
			oRm.write("<div");
			oRm.writeControlData(oControl);

			oRm.addClass("ui5labSquare");
			oRm.writeClasses();

			oRm.addStyle("width", oControl.getSize() + "px");
			oRm.addStyle("height", oControl.getSize() + "px");
			oRm.writeStyles();

			oRm.write(">");

			oRm.writeEscaped(oControl.getText());

			oRm.write("</div>");
		}
	});

	return oSquare;
});
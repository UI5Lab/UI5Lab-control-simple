sap.ui.require([
	"ui5lab/control/Square"
], function(Square) {
	"use strict";

	QUnit.test("Should instantiate the control with defaults", function (assert) {
		var oSquare = new Square();
		assert.strictEqual(oSquare.getSize(), "50");
		assert.strictEqual(oSquare.getText(), "");
	})
});
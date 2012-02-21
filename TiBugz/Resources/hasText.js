/**
 * @author Jon Ege Ronnenberg
 */
function createHasTextBug() {
	var win = Ti.UI.createWindow({ backgroundColor: '#eee', title: 'hasText bug'});
	var containerView = Ti.UI.createView({
		height:30,
		width : 100
	});
	var textField = Ti.UI.createTextField({
		height:30,
		color: '#000',
		font: {fontFamily:'Helvetica Neue', fontSize:12, fontWeight:'bold'},
		clearButtonMode: Ti.UI.INPUT_BUTTONMODE_ALWAYS,
		appearance:Ti.UI.KEYBOARD_APPEARANCE_ALERT,
		returnKeyType:Ti.UI.RETURNKEY_DONE, //DONE // NEXT // SEND
		suppressReturn:true,
		borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		width : 70
	});
	textField.addEventListener('change', function(e) {
		try {
		/*	if(textField.hasText) {
				Ti.API.log("No bug!");
			}
		*/
			if(textField.hasText()) {
				Ti.API.log("No bug!");
			}
		}
		catch(e) {
			Ti.API.warn(e.message);
		}
	});
	// hide the keyboard when a user click out-side the field
	win.addEventListener('click', function() {
		textField.blur();
	})
	
	containerView.add(textField);
	win.add(containerView)
	return win
}
module.exports.createHasTextBug = createHasTextBug
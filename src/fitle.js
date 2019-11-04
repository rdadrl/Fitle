/**
 *			   __ _ _   _      
 *			  / _(_) | | |     
 *			 | |_ _| |_| | ___ 
 *			 |  _| | __| |/ _ \
 *			 | | | | |_| |  __/
 *			 |_| |_|\__|_|\___|
 *
 * Bringing functionalities to webpage titles.
 *
 * @link   https://github.com/rdadrl/Fitle
 * @file   fitle.js
 * @author Arda Ntourali.
 * @github rdadrl
 * @since  1.0.0
 */
 
const Fitle = {
	intervalInstance: null,
	intervalDuration: 300,

	originalTitle: null,
	lastTitle: null,

	/* - - - Title Text Effects - - - */
	currentEffect: null,
	shiftTitle: function(defT, lastT) {
		var a = lastT.slice(1,lastT.length);
		var b = lastT.slice(0, 1);
		return a + b;
	},

	/* - - - Fitle Actions and Events - - - */
	fitleAction: function() {
		Fitle.onAction();
		Fitle.lastTitle = Fitle.currentEffect(Fitle.originalTitle, Fitle.lastTitle);

		document.title = Fitle.lastTitle;
	},
	onAction: function () {},

	/* - - - Custom Effects Loader/Handler - - - */
	loadEffect: function(fxObj) {
		this.currentEffect = fxObj;
	},

	/* - - - Default Fitle Constructor - - - */
	initialize: function(title = document.title, interval = this.intervalDuration, fx = this.shiftTitle) {
		this.originalTitle = title;
		this.lastTitle = this.originalTitle + " ";

		this.currentEffect = fx;

		this.intervalDuration = interval;
		this.intervalInstance = setInterval(this.fitleAction, this.intervalDuration);
	}
};
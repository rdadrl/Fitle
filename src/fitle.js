const Fitle = {
	intervalInstance: null,
	intervalDuration: 300,

	originalTitle: null,
	lastTitle: null,

	/* - - - Title Text Effects - - - */
	currentEffect: null,
	shiftTitle: function() {
		var a = Fitle.lastTitle.slice(1, Fitle.lastTitle.length);
		var b = Fitle.lastTitle.slice(0, 1);
		return a + b;
	},

	/* - - - Fitle Actions and Events - - - */
	fitleAction: function() {
		Fitle.onAction();
		Fitle.lastTitle = Fitle.currentEffect();

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
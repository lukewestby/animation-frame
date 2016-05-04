var _elm_lang$animation_frame$Native_AnimationFrame = function()
{

var rAF = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	var id = requestAnimationFrame(function(time) {
		var now = Date.now();
		var yieldedTime = time ?
			(time < now ? (performance.timing.navigationStart + time) : time) :
			now;
		
		callback(_elm_lang$core$Native_Scheduler.succeed(yieldedTime));
	});

	return function() {
		cancelAnimationFrame(id);
	};
});

return {
	rAF: rAF
};

}();

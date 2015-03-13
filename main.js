window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 2000,
        easing: 'easeInOut',
        strokeWidth: 5,
        trailColor: '#1a294e',
    	trailWidth: 5,
    });

    circle.animate(1);
};


function to_arr_numb(n) {
    return [parseInt(n/10),n%10];
}

var clock = Snap(".clock");

var hours = [];
hours.push( new ClockGroup(clock, 1) );
hours.push( new ClockGroup(clock, 131) );

var minutes = [];
minutes.push( new ClockGroup(clock, 281) );
minutes.push( new ClockGroup(clock, 411) );

var seconds = [];
seconds.push( new ClockGroup(clock, 561) );
seconds.push( new ClockGroup(clock, 691) );



function update() {
    var d = new Date();
    var s = to_arr_numb( d.getSeconds() );
    var m = to_arr_numb( d.getMinutes() );
    var h = to_arr_numb( d.getHours() );

    for (var i = 0; i < 2; i++) {
        hours[i].setTime( h[i] );
        minutes[i].setTime( m[i] );
        seconds[i].setTime( s[i] );
    }
}
function randomRotate() {
    var d = new Date();
    var s = to_arr_numb( d.getSeconds() );
    var m = to_arr_numb( d.getMinutes() );
    var arr = Array(6).fill(s)
    var midarr = Array(6).fill(s.map(a=>a*2%9))
    var rightarr = Array(6).fill(s.map(a=>a*3%9))
    for (var i = 0; i < 2; i++) {
        hours[i].setCustom( arr );
        minutes[i].setCustom( midarr);
        seconds[i].setCustom( rightarr );
    }
}
setInterval(update, 1000);

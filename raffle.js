var host = 'http://csgorage.com';
var curUrl = window.location.pathname;

function getSlots() {
	var slotsH = $('div.row#slots');
	var slotsAvail = slotsH.children('div.slots');
	if(slotsAvail.length > 0){
		var slot = slotsAvail[0];
		var button = $('button.getbutton');
		$(slot).trigger('click');

		if(button.is(':visible')){
			button.trigger('click');
		}

		setTimeout(function(){
			window.location = host+'/free-raffles';
		},5000);
	}else{
		window.scrollTo(0,document.body.scrollHeight);
		setTimeout(getSlots, 1000);
	}
}

if(curUrl == '/'){
	window.location = host+'/free-raffles';
}

if(curUrl == '/free-raffles'){
	var riffle = $('body.pg_free-raffles div.container div.row div.main div.row:not(:first,.category,.past_raffle)');
	riffle.each(function(index, value){
		var row = $(value);
		console.log(row.find('a div.ribbon').length);
		if(row.find('a div.ribbon').length === 0){
			var href = row.find('a').attr('href');
			window.location = host+href;
		}
	});
}

if(curUrl.indexOf('raffle') === 1){
	getSlots();
}

setTimeout(function(){
	window.location = host+'/free-raffles';
},30000);

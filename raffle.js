var url   = window.location.hostname,
	slash = window.location.pathname,
	botAlert = '<div class="effer_bots" style="background-color: red;text-align: center;position: fixed; width: 100%; top:0px;z-index:9999;">BOT ON!1!!!</div>';

// csgorage.com
if(url == 'csgorage.com'){
	if(slash == '/free-raffles'){
		$('body').append(botAlert);
		var raffles = $('body.pg_free-raffles div.container div.row div.main div.row:not(.category,.past_raffle)').slice(2);
		raffles.each(function(index, value){
			var row = $(value);
			if(row.find('a div.ribbon').length === 0){
				var href = row.find('a').attr('href');
				if(href !== undefined){
					window.location = 'http://'+url+href;
				}
			}
		});
		setTimeout(function(){
			window.location = 'http://'+url+'/free-raffles';
		},30000);
	}
	if(slash.indexOf('raffles') === -1 && slash.indexOf('raffle') === 1){
		getSlots();
	}
	function getSlots() {
		var slotsH = $('div.row#slots');
		var slotsAvail = slotsH.children('div.slots');
		var button = $('button.getbutton');
		if(!button.is(':visible')){
		    window.location = 'http://'+url+'/free-raffles';
		}
		if(slotsAvail.length > 0){

			var max = 0,
				min = slotsAvail.length,
				selectedSlot = Math.floor(Math.random() * (max - min) + min);

			//var slot = slotsAvail[0];
			var slot = slotsAvail[selectedSlot];
			$(slot).trigger('click');

			if(button.is(':visible')){
				button.trigger('click');
			}

			setTimeout(function(){
				window.location = 'http://'+url+'/free-raffles';
			},5000);
		}else{
			window.scrollTo(0,document.body.scrollHeight);
			setTimeout(getSlots, 1000);
		}
	}
}

// csgoprizes.com
if(url == 'csgoprizes.com'){
	if(slash == '/'){
		//window.location = 'http://'+url+'/get-tickets';
	}
	if(slash == '/get-tickets'){
		// when site is down
		if(document.getElementById('compt') === null){
			var frame = document.getElementsByTagName('iframe')[0];
				frame.parentNode.removeChild(frame);
			setTimeout(function(){
				window.location = 'http://'+url+'/get-tickets';
			}, 60000);
		}
		$('body').append(botAlert);
		$('iframe').eq(0)[0].remove();
		setInterval(function(){
			if($('p#compt span').html() == '0'){
				$('div.bouton_get_tickets a').eq(0)[0].click();
			}
		},5000);
	}
}

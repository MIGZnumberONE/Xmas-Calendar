$(document).ready(function() {
    // when document loaded:

    //Open Doors Color
    stringoffenedoor = localStorage.getItem('Opended Doors');
    if (stringoffenedoor != null) {	
       listeoffenedoor = stringoffenedoor.split(",");
       for(var i = 0; i < listeoffenedoor.length; i++) {
                  $('#door' + listeoffenedoor[i]).css('backgroundColor','black');
       }
	}

    //When Door was klicked
    $(".door").mouseup(function() {
        let zeichen = $(this).html();
		let vzeichenvergleich = zeichen.toString();
        $(this).css('backgroundColor','orange');
	    //remenber which door was open
	    let arrayoffenedoor = "";
	    arrayoffenedoor = localStorage.getItem('Opended Doors');	  
		   if (arrayoffenedoor == null) {
			   arrayoffenedoor = zeichen;
		   } else {if (arrayoffenedoor.includes(vzeichenvergleich) == false){	
					 arrayoffenedoor = arrayoffenedoor + ',' + vzeichenvergleich; 
					 ake(zeichen); 
              }					
			};
		localStorage.setItem('Opended Doors', arrayoffenedoor);	
		ake(zeichen); 
    });
});

function ake(zeichen){
	if (zeichen == 1){
		alert("Freue mich auch dieses Jahr, es geht wieder los mit dem Adventskalender. Gibt es was passenderes als WHAM zu Weihnachten?");
		window.open("https://www.youtube.com/watch?v=E8gmARGvPlI");
	} else
	if (zeichen == 2){
		window.open("https://www.youtube.com/watch?v=N8NcQzMQN_U");
	} else
	if (zeichen == 3){
		window.open("https://www.youtube.com/watch?v=PWF37F2fbak");
	} else
	if (zeichen == 4){
		alert("Kennst du Jingle Bell Rock?")
		window.open("https://www.youtube.com/watch?v=Z0ajuTaHBtM");
	} else
	if (zeichen == 5){
		alert("Was, morgen kommt der Nikolaus?");
        window.open("https://www.noradsanta.org/de/");		
	} else
	if (zeichen == 6){
		alert("We Wish You a Merry Christmas");
		 window.open("https://www.youtube.com/watch?v=EFB7S8zX6rk");		
	} else
	if (zeichen == 7){
		window.open("https://www.youtube.com/watch?v=fRyhqobl0sk");		
	} else
	if (zeichen == 8){
		window.open("https://www.youtube.com/watch?v=O1x-hOOrl5E");		
	} else
	if (zeichen == 9){
		window.open("https://www.youtube.com/watch?v=tZmY4L4cfus");		
	} else
	if (zeichen == 10){
		window.open("https://www.youtube.com/watch?v=zA96AZVwvrk");	
	} else
	if (zeichen == 11){
		window.open("https://www.youtube.com/watch?v=fGFNmEOntFA");	
	} else
	if (zeichen == 12){
		window.open("https://www.youtube.com/watch?v=SWOg4ccw-1M");	
	} else
	if (zeichen == 13){
		window.open("https://www.youtube.com/watch?v=-w7jyVHocTk");	
	} else
	if (zeichen == 14){
		window.open("https://www.youtube.com/watch?v=zv9bLSxeFGI");	
	} else
	if (zeichen == 15){
		window.open("https://www.youtube.com/watch?v=2TEAh5SHZGs");	
	} else
	if (zeichen == 16){
		window.open("https://www.youtube.com/watch?v=O1x-hOOrl5E");	
	} else
	if (zeichen == 17){
		window.open("https://www.youtube.com/watch?v=hTL3lUL5_PY&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=3");	
	} else
	if (zeichen == 18){
		window.open("https://www.youtube.com/watch?v=T0T9GyM28tg&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=4");
	} else
	if (zeichen == 19){
		window.open("https://www.youtube.com/watch?v=2pPhuG_VJgA&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=5");
	} else
	if (zeichen == 20){
		window.open("https://www.youtube.com/watch?v=6VeAkhy_9y0&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=6");
	} else
	if (zeichen == 21){
		window.open("https://www.youtube.com/watch?v=UBEr3z-n2f0&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=7");
	} else
	if (zeichen == 22){
		window.open("https://www.youtube.com/watch?v=azYH2VeHsjE&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=8");
	} else
	if (zeichen == 23){
		window.open("https://www.youtube.com/watch?v=lgR3dpfun68&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=9");
	} else
	if (zeichen == 24){
		alert("Zoran wünscht euch allen ein frohes und besinnliches Weihnachtsfest!");
		window.open("https://www.youtube.com/watch?v=755eNcwjpMU&list=PLzLmKWYW3AHd1uGgcDg98om9Bx48AtQEG&index=10");
	}
}
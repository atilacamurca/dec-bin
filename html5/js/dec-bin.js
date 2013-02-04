
$(function() {
   $("#com").select();
   
   $("#com").keyup(function(event) {
      
      switch (event.keyCode) {
      case 13: // Enter
         if ( parse($(this).val()) ) {
            $(this).select();
         }
         break;
      }
      
   });
   
});

function parse(value) {
   var regexdec = /^dec[ \t]{1}[0-1]+$/;
   var regexbin = /^bin[ \t]{1}[0-9]+$/;
   if (regexdec.test(value)) {
      bin2dec(value);
   } else if (regexbin.test(value)) {
      dec2bin(value);
   } else if ('clear' == value) {
      $("#out").html('');
   } else if ("4 8 15 16 23 42" == value) {
		lost();
   } else {
      mostrarMensagem('#error', "Erro ao executar comando.");
      return false;
   }
   return true;
}

function bin2dec(value) {
   var sNumber = get_number(value);
   var result = 0;
   /*
    * var result = parseInt(sNumber, 2);
    */
   for (var i = 0, j = sNumber.length - 1; i < sNumber.length; i++, j--) {
      var n = parseInt(sNumber[i]);
      if (n == 1) {
         result += Math.pow(2, j);
      }
   }
   output(sNumber, result);
}

function dec2bin(value) {
   var iNumber = parseInt(get_number(value));
   /*
    * var result = iNumber.toString(2);
    */
   var result = [];
   var aux = iNumber;
   while (aux) {
      result.unshift( (aux & 1 ? "1" : "0") );
      aux>>=1;
   }
   
   output(iNumber, result.join(""));
}

function output(input, result) {
   $("<li>&gt; dec " + input + " = " + result + "</li>")
      .hide().prependTo("#out").slideDown("fast");
}

function lost() {
	$("<li>&gt;&gt; 108 - Just saving the world, brother.</li>")
      .hide().prependTo("#out").slideDown("fast");
}

function get_number(value) {
   var intRegex = /\d+$/;
   return intRegex.exec(value)[0];
}

function mostrarMensagem( id, msg ) {
   var aux = (msg != null) ? msg : "Erro desconhecido.";
   $(id).html( aux ).show( "blind", null, 500, esconderMensagem(id) );
}

function esconderMensagem(id) {
   setTimeout(function() {
				$( id + ":visible" ).fadeOut();
	}, 2000 );
}
document.oncontextmenu = function(){return false;}
document.onselectstart=new Function ("return false")
function disabletext(e){return false}
function reEnable(){return true}
if (window.sidebar){
	document.onmousedown=disabletext
	document.onclick=reEnable
}

function obtener_valor(variable) {
	var remplaza = /\+/gi; 
	var url = window.location.href;
	url = unescape(url);
	url = url.replace(remplaza, " ");
	var variable_may = variable;
	var variable_pos = url.indexOf(variable);

	if (variable_pos != -1)
	{
		var pos_separador = url.indexOf("&", variable_pos);
		if (pos_separador != -1) 
		{
			return url.substring(variable_pos + variable_may.length + 1, pos_separador);
		}
		else
		{
			return url.substring(variable_pos + variable_may.length + 1, url.length);
		}
	}
	//else
	//{
		//return "CONTENIDO";
	//}
}

window.onload = function() {
	document.getElementById("LED_BUILTIN_1").innerHTML = obtener_valor("LED_BUILTIN");
	document.getElementById("LED_BUILTIN_2").innerHTML = obtener_valor("LED_BUILTIN");
	document.getElementById("LED_BUILTIN_3").innerHTML = obtener_valor("LED_BUILTIN");
	document.getElementById("pin_SCK").innerHTML = obtener_valor("pin_SCK");
	document.getElementById("pin_SDA").innerHTML = obtener_valor("pin_SDA");
}

function getDocHeight(doc) {
	doc = doc || document;
	// stackoverflow.com/questions/1145850/
	var body = doc.body, html = doc.documentElement;
	var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
	return height;
}

setInterval(function() {
				var x = document.getElementsByTagName("iframe");
				for (var i = 0; i < x.length; i++) {
					var ifrm = document.getElementById(x[i].id);
					var doc = ifrm.contentDocument ? ifrm.contentDocument:ifrm.contentWindow.document;
					ifrm.style.height = getDocHeight( doc ) + "px";
					var style = document.getElementById(x[i].id).style;
					style.webkitTransform = style.webkitTransform ? "" : "scale(1)";
				}
			},500);
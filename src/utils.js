export function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
export function replaceI18NValuesWithRegex(i18nStr,values)
{
	if(typeof values !== "undefined")
	{
		if(Array.isArray(values)){
			for(var i=0;i< values.length;i++){
				i18nStr = i18nStr.replace( new RegExp( "\\{"+i+"\\}","g") ,values[i]);
			}
		}
		else {
			i18nStr = i18nStr.replace( new RegExp( "\\{0\\}","g") ,values);
		}
	}
	return i18nStr;
}

export function unescapeUnicode(str)
{
    return str.replace( /\\u([a-fA-F0-9]{4})/g, function(g, m1) {
         return String.fromCharCode(parseInt(m1, 16));
    });
}	
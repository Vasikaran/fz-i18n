import moment from "moment-timezone";

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
export function getValues(params=[],diff){
        return params.map((param)=>{
            return diff[param];
        })
    }
export function getI18NValue(i18n){
		if(typeof i18n === "undefined"){
			return (key)=>key;
		}
		return (key,values)=>{

			var i18nStr = i18n[key];
			if(i18nStr === undefined){
				return key;
			}
			i18nStr = replaceI18NValuesWithRegex(i18nStr,values);
			return unescapeUnicode(i18nStr);
		}
}
export function userDateFormat(getI18NValue,userTimeZone){
	return (to,{today,yesterday,tomorrow,others},ago,later,isSuffixEnable=false) =>{
		var currentTime =  new Date();
		var currentTimeUTCString = currentTime.toISOString();
		let fromDateObj = moment(currentTimeUTCString).tz(userTimeZone);
        let toDateObj = moment(to).tz(userTimeZone);
         let suffix;
        if(toDateObj.isBefore(fromDateObj)){
            suffix=ago || ''
        }else if(toDateObj.isAfter(fromDateObj)){
            suffix=later || ''
        }else{
            suffix=''
        }
        let diff = moment.duration(Math.abs(toDateObj.diff(fromDateObj)));
        var diffObj = {
            hh:pad(diff.get('h'),2),
            mm:pad(diff.get('m'),2),
            ss:pad(diff.get('s'),2),
            MM:pad(diff.get('M'),2),
            yy:pad(diff.get('y'),2),
            dd:pad(diff.get('d'),2),
        }
        var diffObj1 = {
            hours:diff.get('h'),
            minutes:diff.get('m'),
            seconds:diff.get('s'),
            Months:diff.get('M'),
            years:diff.get('y'),
            days:diff.get('d'),
        }
        var daysDiff = toDateObj.diff(fromDateObj, 'days');

        var key="";
        var values=[];
        if(daysDiff < -1){
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                key=toDateObj.format(value);
            }

        }else if(daysDiff < 0){
            if(typeof yesterday == 'object'){
                key=yesterday.key;
                values=getValues(yesterday.params,diffObj);
            }else if(typeof yesterday == 'string'){
                key=toDateObj.format(yesterday);
            }

        }else if(daysDiff < 1){
            if(typeof today == 'object'){
                key=today.key;
                values=getValues(today.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof today == 'string'){
                key=toDateObj.format(today);
            }
            
        }else if(daysDiff < 2){
            key=tomorrow.key;
            values=getValues(tomorrow.params,diffObj);
        } else {
            var value = others(diffObj1)
            if(typeof value == 'object'){
                key=value.key;
                values=getValues(value.params,diffObj);
                isSuffixEnable=true;
            }else if(typeof value == 'string'){
                key=toDateObj.format(value);
            }

        } 
		return getI18NValue(key,values)+(isSuffixEnable?" "+getI18NValue(suffix):"");
	}
}
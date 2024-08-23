function getUrlParameterValue(url, parameter) {
     
    let queryString = url.split('?')[1];
    
    
    let params = queryString.split('&');
    
    
    for (let i = 0; i < params.length; i++) {
        let pair = params[i].split('=');
        
        
        if (pair[0] === parameter) {
            return pair[1];
        }
    }
    
    
    return null;
}
 
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_medium"));  
console.log(getUrlParameterValue(url, "utm_campaign"));  

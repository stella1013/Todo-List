export function isElementVisible(element:HTMLElement):boolean{
    
	let isVisible = false;
    if(element){
		if(element.hasAttribute('style')){
			if(element.getAttribute('style') === 'display:none'){
				isVisible =  false;
			}else{
				isVisible =  true;
			}
		}else{
			isVisible = true;
		}
		
    }
	return isVisible;
}

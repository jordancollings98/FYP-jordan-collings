$(document).ready(function(){
	function getRadioVal(form, name) {
    var val;
    // get list of radio buttons with specified name
    var selections = form.elements[name];
    
    // loop through list of radio buttons
		for (var i=0, len=selections.length; i<len; i++) {
			if ( selections[i].checked ) { // radio checked?
				val = selections[i].value; // if so, hold its value in val
				break; // and break out of for loop
			}
		}
		return val; // return value of checked radio or undefined if none checked
	}
	
	$('#myForm').submit(function(){
		
		var val = getRadioVal(this, 'selection');
		
		String(val);
		
		//alert (val);
		
	});
});
var addRowBtn = document.getElementById('addRow'),
		tBody = document.getElementsByTagName('tbody')[0];

addRowBtn.addEventListener('click', addRow, false);

function addRow() { // Добавляет новую строку
		var newRow = document.createElement('tr'),
				firstRow = tBody.firstChild;
		newRow.innerHTML = '<td></td><td></td><td></td>';
		tBody.insertBefore(newRow, firstRow);

}
	tBody.onclick = function(event) {
		var target = event.target;
		
		if (target.id !== 'addRow'){
			var text = target.innerText;
			target.innerHTML = '<input type="text" onblur="focusOut(event);"  value="' + text + '">';
        
			var input = target.getElementsByTagName('input')[0];  //var input = target.firstChild; можно и так
			input.focus();
			
			
		}
}
    
tBody.onkeydown = function(event) {
  if (event.keyCode == 13){
    focusOut(event);
  }
}
	
function focusOut(event){
	var target = event.target;
	target.parentNode.innerHTML = target.value;

}	
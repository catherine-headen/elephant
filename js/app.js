/* debugging strategies
debugging level 1 => check if JS syntax is correct (check console)
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> salert("here"); inside the function)
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert alert(VALUE-NAME); inside the function)
*/

/*add list item*/

function addListItem() {
alert("here");
}

/*mark the item which are not bought and move it to the bottom list*/
function makeComplete() {

}
/*mark the bought items and move it to the top list*/
function addCheck(){

}
/*delete the bought items one by one*/
function removeItem(){

}
/*clear list item*/
function clearAll(){

}

$(document).ready(function() {
/* on click of text input field, start addListItem function*/
$('#addItem').on('click', addListItem);
});



$(document).on('click', '.removeItem', removeItem);


/*on ENTER add item */
	$(document).on('keypress', function(key) {
        if (key.keyCode == 13) {
            addListItem();
        }
	});
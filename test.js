var cardlist_original = [
["org0"],["org1"],["org2"],["org3"],["org4"],["org5"],["org6"],["org7"],["org8"],["org9"],
["org10"],["org11"],["org12"],["org13"],["org14"],["org15"],["org16"],["org17"],["org18"],["org19"],
["org20"],["org21"],["org22"],["org23"],["org24"],["org25"],["org26"],["org27"],["org28"],["org29"]
];
for(var i=0;i<cardlist_original.length;i++) cardlist_original[i].push("original");

var cardlist_fareast = [
["fe0"],["fe1"],["fe2"],["fe3"],["fe4"],["fe5"],["fe6"],["fe7"],["fe8"],["fe9"],["fe10"],["fe11"],["fe12"]
];
for(var i=0;i<cardlist_fareast.length;i++) cardlist_fareast[i].push("fareast");

var cardlist_witch = [
["wi0"],["wi1"],["wi2"],["wi3"],["wi4"],["wi5"],["wi6"],["wi7"],["wi8"],["wi9"],["wi10"],["wi11"],["wi12"],["wi13"]
];
for(var i=0;i<cardlist_witch.length;i++) cardlist_witch[i].push("witch");

function arrayShuffle(oldArray) {
    var newArray = oldArray.slice();
    var len = newArray.length;
    var i = len;
    while (i--) {
        var p = parseInt(Math.random()*len);
        var t = newArray[i];
        newArray[i] = newArray[p];
        newArray[p] = t;
    }
    return newArray;
};

function expansion_type(str_expansion){
	switch(str_expansion){
		case "original": return "기본판";
		case "fareast": return "극동 변방령";
		case "witch": return "북방의 마녀";
	}
}

function select_cards(){
	checked_expansion = document.getElementsByName("cb_expansion");
	//alert(checked_expansion.length);
	var cardlist = new Array;
	if(!(checked_expansion[0].checked||checked_expansion[1].checked||checked_expansion[2].checked)){
		alert("최소 한 개의 게임을 선택해주세요.");
		return;
	}
	if(checked_expansion[0].checked){
		for(var i=0; i<cardlist_original.length; i++)
			cardlist.push(cardlist_original[i]);
	}
	if(checked_expansion[1].checked){
		for(var i=0; i<cardlist_fareast.length; i++)
			cardlist.push(cardlist_fareast[i]);
	}
	if(checked_expansion[2].checked){
		for(var i=0; i<cardlist_witch.length; i++)
			cardlist.push(cardlist_witch[i]);
	}
	var shuffledcard = arrayShuffle(cardlist);
	
	var table_selected = "<table><tbody>";
	for(var i=1;i<=10;i++){
		table_selected += "<tr><td>"+i+"</td><td>"+shuffledcard[i-1][0]+"</td><td>"+expansion_type(shuffledcard[i-1][1])+"</td></tr>";
	}
	table_selected += "</tbody></table>";
	document.getElementById('table_selected').innerHTML = table_selected;
}
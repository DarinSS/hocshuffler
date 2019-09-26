var cardlist_original = [
["저주의 마녀"],["모험가"],["연금술사"],["소문내는 공작부인"],["매료술의 마녀"],["근위기사단"],["은행"],["어용상인"],["황실 영토"],["시노비"],
["대금업자"],["도서관"],["점성술 마녀"],["도시 개발"],["보병대대"],["보급부대"],["정찰"],["소집 영장"],["화전 농업"],["은신처"],
["교역선"],["파성추"],["매수공작"],["마법의 부적"],["묻혀있는 보물"],["내몰린 마수"],["성벽"],["소원의 샘"],["파발마"],["기부"]
];
for(var i=0;i<cardlist_original.length;i++) cardlist_original[i].push("a_original");

var cardlist_fareast = [
["욕심쟁이 요정"],["전서구"],["과세"],["무역 상인"],["궁병대"],["견습 마녀"],["쿠노이치"],["항구 도시"],["사무라이"],["광산 도시"],["동맹"],["부절"]
];
for(var i=0;i<cardlist_fareast.length;i++) cardlist_fareast[i].push("b_fareast");

var cardlist_witch = [
["고양이 요정 카트시"],["행운의 은화"],["세례"],["저주받은 인형"],["명마"],["엘프 저격수"],["궁정 암투"],["드워프 보석 장인"],["귀족의 외동딸"],["거상"],["지방 관리"],["공업 도시"],["독점"]
];
for(var i=0;i<cardlist_witch.length;i++) cardlist_witch[i].push("c_witch");

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
		case "a_original": return "기본판";
		case "b_fareast": return "극동 변방령";
		case "c_witch": return "북방의 마녀";
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
	shuffledcard = shuffledcard.slice(0,10);
	shuffledcard.sort(function(a,b){
		if(a[0]>b[0]) return 1;
		if(a[0]<b[0]) return -1;
		return 0;
	});
	shuffledcard.sort(function(a,b){
		if(a[1]>b[1]) return 1;
		if(a[1]<b[1]) return -1;
		return 0;
	});

	var table_selected = "<table><tbody>";
	for(var i=1;i<=10;i++){
		table_selected += "<tr><td>"+i+"</td><td>"+shuffledcard[i-1][0]+"</td><td>"+expansion_type(shuffledcard[i-1][1])+"</td></tr>";
	}
	table_selected += "</tbody></table>";
	document.getElementById('table_selected').innerHTML = table_selected;
}


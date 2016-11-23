(function(){



	window.onload = function () {
		document.getElementById('calculate').onclick = calcRange;
	};

// math.floor = round down
// math.ceil = round up
// math.round = round

	function calcRange () {
		finalUpperRange();
		//lowerRange();
		//document.getElementById('upperRange').innerHTML = ;
	}

	// final upper range
	// includes % damage from hyper damage and link skills (DA/kanna)
	function finalUpperRange() {
		// hyper stat % damage
		var initUpRange = initialUpperRange();
		var hyperDmg = parseInt(document.getElementById('hyperDmg').value);
		var upRangeFinal = Math.floor(initUpRange * (1 + hyperDmg/100));
		document.getElementById('upperRange').innerHTML = upRangeFinal;
	}

	// the inital upper range before any % damage or % attack
	function initialUpperRange () {
		var statValue = statVal();
		var totalAtt = totalATT();
		var className = document.getElementById('class').value;
		var wepType = classWep[className];
		var multiplier = wepMult[wepType];
		var initUpRange = multiplier * statValue * totalAtt / 100;
		return initUpRange;
	}

	// calculate the lowerRange
	/*
	function lowerRange () {
		var className = document.getElementById('class').value;
		var upRange = upperRange();
		var masteryValue = masteryData[className];
		var downRangeFinal = Math.ceil(upRange * masteryValue);
		document.getElementById('lowerRange').innerHTML = downRangeFinal;
	} 

	//writing
	function linkSkillpDmg () {
		var totalpDmg = 0;
		if (document.getElementById('DA1')) {
			totalpDmg = 0;
		}
	} */

	// calculate the stat value
	function statVal () {
		var mainstat = parseInt(document.getElementById('mainstat').value);
		var substat = parseInt(document.getElementById('substat').value);
		var statValue = (mainstat * 4) + substat;
		return statValue;
	}

	// calculate the total m/attack from equips, set bonuses and other sources
	function totalATT () {
		var totalATT = 0;
		var totalPercentATT = 0;

		// attack from equips, set bonuses, other sources 
		var equipAtt = document.getElementById('equipAtt');
		var equipName = equipAtt.getElementsByTagName('input');
		for (var i = 0; i < equipName.length; i++) {
			totalATT += parseInt(equipName[i].value);
		}
		var setBonusAtt = document.getElementById('setbonusAtt');
		var setBonus = setBonusAtt.getElementsByTagName('input');
		for (var i = 0; i < setBonus.length; i++) {
			totalATT += parseInt(setBonus[i].value);
		}
		var otherAtt = document.getElementById('otherAtt');
		var att = otherAtt.getElementsByTagName('input');
		for (var i = 0; i < att.length; i++) {
			totalATT += parseInt(att[i].value);
		}
		// total % att (emblem/secondary/weapon);
		var percentAtt = document.getElementById('percentAtt');	
		var pAtt = percentAtt.getElementsByTagName('input');
		for (var i =0; i < pAtt.length; i++) {
			totalPercentATT += parseInt(pAtt[i].value);
		}

		// hayato link
		if (document.getElementById('H1').checked) {
			totalATT += 5;
		}
		// round down
		var totalWA = Math.floor((totalATT * (1 + totalPercentATT / 100)));
		return totalWA;
	}

})();
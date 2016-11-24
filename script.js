(function(){

	window.onload = function () {
		document.getElementById('calculate').onclick = calcRange;
	};

// math.floor = round down
// math.ceil = round up
// math.round = round

	function calcRange () {
		var upRange = upperRange();
		var lowRange = lowerRange();
		//var onepercent = percentStat();
		//document.getElementById('resultRange').innerHTML = lowRange + " ~ " + upRange;
		document.getElementById('oneper').innerHTML = onepercent;
	}

	// the inital upper range before any % damage or % attack
	function upperRange () {
		var statValue = statVal();
		var totalAtt = totalATT();
		var totalDmg = totalDMG();

		var className = document.getElementById('class').value;
		var wepType = classWep[className];
		var multiplier = wepMult[wepType];
		var initUpRange = Math.round(multiplier * statValue * totalAtt / 100);
		return Math.floor(initUpRange * (1+totalDmg/100));
	}

	// calculate the lowerRange
	function lowerRange () {
		var className = document.getElementById('class').value;
		var upRange = upperRange();
		var masteryValue = masteryData[className];
		var lowerRangeFinal = Math.round(upRange * masteryValue); //NOT SURE ABOUT ROUNDING
		return lowerRangeFinal;
	} 

	// calculate the stat value
	function statVal () {
		var mainstat = parseInt(document.getElementById('mainstat').value);
		var substat = parseInt(document.getElementById('substat').value);
		var statValue = (mainstat * 4) + substat;
		return statValue;
	}

	// 1% of your stat = 
	// calculate from the base? not from total
	function percentStat () {
		var mainstat = parseInt(document.getElementById('mainstat').value);
		return (0.01 * mainstat);
	}

	// calculate the total m/attack from equips, set bonuses and other sources
	function totalATT () {
		var totalATT = 0;
		var totalPercentATT = 0;

		// attack from equips, set bonuses, other sources 
		var equipAtt = document.getElementById('equipAtt');
		var equipName = equipAtt.getElementsByTagName('input');
		for (var i = 0; i < equipName.length; i++) {
			totalATT = totalATT + parseInt(equipName[i].value);
		}

		var setBonusAtt = document.getElementById('setbonusAtt');
		var setBonus = setBonusAtt.getElementsByTagName('input');
		for (var i = 0; i < setBonus.length; i++) {
			totalATT = totalATT + parseInt(setBonus[i].value);
		}

		// total % att (emblem/secondary/weapon);
		var percentAtt = document.getElementById('percentAtt');	
		var pAtt = percentAtt.getElementsByTagName('input');
		for (var i = 0; i < pAtt.length; i++) {
			totalPercentATT = totalPercentATT + parseInt(pAtt[i].value);
		}

		// class passive skill %att
		totalPercentATT = totalPercentATT + passiveStat[document.getElementById('class').value].pAtt;

		// class passive skill att
		totalATT = totalATT + passiveStat[document.getElementById('class').value].att;

		// Inner Ability
		totalATT = totalATT + parseInt(document.getElementById('innerAbility').value);	

		// Att per 10 level
		totalATT = totalATT + Math.floor(parseInt(document.getElementById('charLevel').value)/10) * parseInt(document.getElementById('attPer10').value);

		// Will of the Alliance
		if (document.getElementById('alliance').checked) {
			totalATT = totalATT + 5;
		}

		// Blessing
		totalATT = totalATT + parseInt(document.getElementById('blessing').value);	
		
		// Other
		totalATT = totalATT + parseInt(document.getElementById('other').value);	

		// hayato link
		if (document.getElementById('H1').checked) {
			totalATT = totalATT + 5;
		}

		// hidden reboot att
		totalATT = totalATT + (5 * parseInt(document.querySelector('input[name = "reboot"]:checked').value)); 

		// round down
		var totalWA = Math.floor((totalATT * (1 + totalPercentATT / 100)));
		
		return totalWA;
	}

	// grabs link, equip, hyper, and reboot (if checked) damage and returns the sum.
	function totalDMG(){
		var linkDmg = 0;
		var equipDmg = 0;
		var hyperDmg = 0;
		var passiveSkillDmg = 0;
		var rebootDmg = 0;

		hyperDmg = parseInt(document.getElementById('hyperDmg').value);

		passiveSkillDmg = passiveStat[document.getElementById('class').value].pDmg;

		var DAlink = parseInt(document.querySelector('input[name = "DAlink"]:checked').value);
		var Kannalink = parseInt(document.querySelector('input[name = "Kannalink"]:checked').value);
		linkDmg = linkDmg + linkSkills["demonAvenger" + DAlink].pDmg + linkSkills["kanna" + Kannalink].pDmg;
		
		var equips = document.getElementById('equippDmg').getElementsByTagName('input');	
		for (var i =0; i < equips.length; i++) {
			equipDmg = equipDmg + parseInt(equips[i].value);
		}

		rebootDmg = Math.floor((parseInt(document.getElementById('charLevel').value / 2)) * parseInt(document.querySelector('input[name = "reboot"]:checked').value));
		
		return linkDmg + equipDmg + hyperDmg + passiveSkillDmg + rebootDmg;
	}

})();
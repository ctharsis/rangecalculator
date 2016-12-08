(function(){

// math.floor = round down
// math.ceil = round up
// math.round = round
	
	// Calculates AD
	function actualDamage(){
		var statVal = statValue();
		var totalAtt = totalAttack();
		
		var className = document.getElementById('class').value;
		var wepType = classWep[className];
		var multiplier = wepMult[wepType];
		
		return Math.round(multiplier * statVal * totalAtt / 100);
	}

	function bossAndCritDamage(actualdamage, totaldamage){
		return Math.floor(actualdamage*(1+totaldamage/100+parseInt(document.getElementById('bossDmg').value)/100)*(1+((parseInt(document.getElementById('critRate').value)/100)*((parseInt(document.getElementById('critDmg').value) + 35)/100))));
	}

	function calcRange () {
		var ad = actualDamage();
		var td = totalDamage();
		var upRange = upperRange(ad, td);
		var lowRange = lowerRange(upRange);
		var upCritRange = critDamage(ad, td);
		var lowCritRange = lowerRange(upCritRange);
		var upBossRange = bossAndCritDamage(ad, td);
		var lowBossRange = lowerRange(upBossRange);
		//var onepercent = percentStat();
		document.getElementById('resultRange').innerHTML = finalDamage(lowRange) + " ~ " + finalDamage(upRange);
		document.getElementById('critRange').innerHTML = finalDamage(lowCritRange) + " ~ " + finalDamage(upCritRange);
		document.getElementById('bossRange').innerHTML = finalDamage(lowBossRange) + " ~ " + finalDamage(upBossRange);
		//document.getElementById('oneper').innerHTML = onepercent;
	}

	// getting xenon stat value stuff
	function changeClass () {
		var classSelection = document.getElementById('class').value;
		var regularStat = document.getElementById('regularStat');
		var xenonStat = document.getElementById('xenonStat');
		regularStat.style.display = "none";
		xenonStat.style.display = "none";
		if (classSelection == 'xenon'){
			xenonStat.style.display = "";
		} else {
			regularStat.style.display = "";
		}
	}

	function critDamage(actualdamage, totaldamage){
		return Math.floor(actualdamage*(1+totaldamage/100)*(1+((parseInt(document.getElementById('critRate').value)/100)*((parseInt(document.getElementById('critDmg').value) + 35)/100))));
	}

	// include final damage
	function finalDamage(range){
		var fDmg = parseFloat(document.getElementById('finalDmg').value);
		return Math.ceil(range * (1 + fDmg/100));
	}

	// calculate the lowerRange
	function lowerRange (upRange) {
		var className = document.getElementById('class').value;
		var masteryValue = masteryData[className];
		return Math.ceil(upRange * masteryValue); //NOT SURE ABOUT ROUNDING
	} 

	// 1% of your stat = 
	// calculate from the base? not from total
	function percentStat () {
		var mainstat = parseInt(document.getElementById('mainstat').value);
		return (0.01 * mainstat);
	}

	// calculate the stat value
	function statValue () {
		if(document.getElementById('class').value == 'xenon'){
			var xS = document.getElementById('xenonStat').getElementsByTagName('input');
			return 4 * (parseInt(xS[0].value) + parseInt(xS[1].value) + parseInt(xS[2].value));
		}
		var mainstat = parseInt(document.getElementById('mainstat').value);
		var substat = parseInt(document.getElementById('substat').value);
		var statValue = (mainstat * 4) + substat;
		return statValue;
	}

	// calculate the total m/attack from equips, set bonuses and other sources
	function totalAttack () {
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
	function totalDamage(){
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
		
		if(document.getElementById('class').value == 'xenon'){
			return xenonMultilateral[parseInt(document.getElementById('xenonMultilateralSelect').value)] + linkDmg + equipDmg + hyperDmg + passiveSkillDmg + rebootDmg;
		}

		return linkDmg + equipDmg + hyperDmg + passiveSkillDmg + rebootDmg;
	}

	// the inital upper range before any % damage or % attack
	function upperRange (actualdamage, totalDmg) {
		return Math.floor(actualdamage * (1+totalDmg/100));
	}

	window.onload = function () {
		document.getElementById('calculate').onclick = calcRange;
		document.getElementById('class').onchange = changeClass;
	};

})();
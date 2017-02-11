(function(){

// math.floor = round down
// math.ceil = round up
// math.round = round

	// Calculates AD
	function actualDamage(range){
		if (range === "current"){
			var statVal = statValue();
		} else if (range === "estimated"){
			var statVal = xPercentStat(1);
		}
		
		var totalAtt = totalAttack();
		
		var className = document.getElementById('class').value;
		var wepType = classWep[className];
		var multiplier = wepMult[wepType];
		
		return Math.round(multiplier * statVal * totalAtt / 100);
	}

	function bossAndCritDamage(actualdamage, totaldamage){
		return Math.floor(actualdamage * (1 + totaldamage / 100 + parseInt(document.getElementById('bossDmg').value)/100) *
			(1 + ((parseInt(document.getElementById('critRate').value) / 100) * ((parseInt(document.getElementById('critDmg').value) + 35) / 100))));
	}

	function calcRange () {
		var ad = actualDamage("current");
		var ade = actualDamage("estimated");
		var td = totalDamage();
		var upRange = upperRange(ad, td);
		var upRangeEst = upperRange(ade, td);
		var lowRange = lowerRange(upRange);
		var upBossRange = bossAndCritDamage(ad, td);
		var upBossRangeEst = bossAndCritDamage(ade, td);
		var lowBossRange = lowerRange(upBossRange);

		document.getElementById('resultRange').innerHTML = finalDamage(lowRange) + " ~ " + finalDamage(upRange);
		document.getElementById('bossRange').innerHTML = finalDamage(lowBossRange) + " ~ " + finalDamage(upBossRange);
		document.getElementById('oneper').innerHTML = finalDamage(upRangeEst - upRange);
		document.getElementById('oneperboss').innerHTML = finalDamage(upBossRangeEst - upBossRange);
		document.getElementById('oneperstat').innerHTML = Math.floor(parseInt(document.getElementById('estmainstat').value) * 0.01);
		
	}

	// getting xenon stat value stuff
	function changeClass () {
		var classSelection = document.getElementById('class').value;
		var regularStat = document.getElementById('regularStat');
		var xenonStat = document.getElementById('xenonStat');
		var kocExpert = document.getElementById('kocExpert');
		var kocExpertLabel = document.getElementById('kocLabel');
		//regularStat.style.display = "none";
		//xenonStat.style.display = "none";
		kocExpert.style.display = "none";
		kocExpertLabel.style.display = "none";
		if (classSelection == 'xenon'){
			//xenonStat.style.display = "";
		} else if (classSelection == 'blazewizstaff' || classSelection == 'blazewizwand' ||
			classSelection == 'dawnwarrior1hs' || classSelection == 'dawnwarrior2hs' || classSelection == 'mihile' ||
			classSelection == 'nightwalker' || classSelection == 'thunderbreaker' || classSelection == 'windarcher') {
			kocExpertLabel.style.display = "";
			kocExpert.style.display = "";
			//regularStat.style.display = "";
		} else {	
			//regularStat.style.display = "";
		}
	}


	function divToInputArray(array){
		var resultArray = [];
		array = Array.prototype.slice.call(array, 0);
		for(var i = 0; i<array.length; i++){
			resultArray = resultArray.concat(Array.prototype.slice.call(array[i].getElementsByTagName('input'), 0));
		}
		return resultArray;
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

	//populate dropdowns
	function populateMenus(){
		var allLines = [document.getElementById('weaponLines'), document.getElementById('secondaryLines'),
			document.getElementById('emblemLines'), document.getElementById('gloveLines'), document.getElementById("innerability")];
		var inputLines = [wepsecLines, wepsecLines, wepsecLines, gloveLines, iaLines];

		for(var i = 0; i < allLines.length; i++){
			var currentLines = allLines[i].getElementsByTagName('select');
			var currentInput = inputLines[i];
			for(var j = 0; j < currentLines.length; j++){
				var currentLine = currentLines[j];
				for(var k = 0; k < currentInput.length; k++){
					currentLine.options[currentLine.options.length] = new Option(currentInput[k][0], currentInput[k][1]);
				}
			}
		}
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
		var wepLines = document.getElementById("weaponLines").getElementsByTagName("select");
		var secLines = document.getElementById("secondaryLines").getElementsByTagName("select");
		var embLines = document.getElementById("emblemLines").getElementsByTagName("select");
		var iaLines = document.getElementById("innerability").getElementsByTagName("select");

		// attack from equips, set bonuses, other sources 
		var equipAtt = document.getElementById('equipAtt');
		var equipAttDiv = equipAtt.getElementsByTagName('div');
		var equipName = divToInputArray(equipAttDiv);
		for (var i = 0; i < equipName.length; i++) {
			totalATT = totalATT + parseInt(equipName[i].value);
		}
		
		var setBonusAtt = document.getElementById('setbonusAtt');
		var setBonusDiv = setBonusAtt.getElementsByTagName('div');
		var setBonus = divToInputArray(setBonusDiv);
		for (var i = 0; i < setBonus.length; i++) {
			if(setBonus[i].type == "number"){
				totalATT = totalATT + parseInt(setBonus[i].value);
			}
		}
		
		// elemental expert (cygnus)
		// + 10 because 10%
		if (document.getElementById('kocExpert').checked) {
			totalPercentATT = totalPercentATT + 10;
		}
		
		// class passive skill %att
		totalPercentATT = totalPercentATT + passiveStat[document.getElementById('class').value].pAtt;
		
		for (var i = 0; i< wepLines.length; i++){
			if(wepLines[i].value === "pAtt"){
				totalPercentATT = totalPercentATT + parseInt(document.getElementById("wepLineInput" + (i + 1)).value);
			}
		}
		for (var i = 0; i< secLines.length; i++){
			if(secLines[i].value === "pAtt"){
				totalPercentATT = totalPercentATT + parseInt(document.getElementById("secLineInput" + (i + 1)).value);
			}
		}
		for (var i = 0; i< embLines.length; i++){
			if(embLines[i].value === "pAtt"){
				totalPercentATT = totalPercentATT + parseInt(document.getElementById("embLineInput" + (i + 1)).value);
			}
		}
		
		// class passive skill att
		totalATT = totalATT + passiveStat[document.getElementById('class').value].att;

		// Inner Ability
		for (var i = 0; i< iaLines.length; i++){
			if(iaLines[i].value === "att"){
				totalATT = totalATT + parseInt(document.getElementById("IALineInput" + (i + 1)).value);
			}
		}

		// Att per 10 level
		var attPerTen = 0;
		for (var i = 0; i< wepLines.length; i++){
			if(wepLines[i].value === "attp10"){
				attPerTen++;
			}
		}
		for (var i = 0; i< secLines.length; i++){
			if(secLines[i].value === "attp10"){
				attPerTen++;
			}
		}
		for (var i = 0; i< embLines.length; i++){
			if(embLines[i].value === "attp10"){
				attPerTen++;
			}
		}
		totalATT = totalATT + Math.floor(parseInt(document.getElementById('charLevel').value)/10) * attPerTen;
		
		// Will of the Alliance
		if (document.getElementById('alliance').checked) {
			totalATT = totalATT + 5;
		}

		// Blessing
		totalATT = totalATT + parseInt(document.getElementById('blessing').value);	
		
		// Other
		//totalATT = totalATT + parseInt(document.getElementById('other').value);	

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

	// calculates total base stat before % is included
	function totalBaseStat () {
		var totalPStat = totalPercentStat();

		// attack from equips, set bonuses, other sources 
		var mainstat = parseInt(document.getElementById('mainstat').value);
		var arcanestat = parseInt(document.getElementById('arcane').value); 
		
		return Math.ceil((mainstat-arcanestat)/(1+(totalPStat/100)));
	}

	// grabs link, equip, hyper, and reboot (if checked) damage and returns the sum.
	function totalDamage(){
		var linkDmg = 0;
		var equipDmg = 0;
		var hyperDmg = 0;
		var passiveSkillDmg = 0;
		var rebootDmg = 0;

		var wepLines = document.getElementById("weaponLines").getElementsByTagName("select");
		var secLines = document.getElementById("secondaryLines").getElementsByTagName("select");
		var embLines = document.getElementById("emblemLines").getElementsByTagName("select");

		hyperDmg = parseInt(document.getElementById('hyperDmg').value);

		passiveSkillDmg = passiveStat[document.getElementById('class').value].pDmg;

		var DAlink = parseInt(document.querySelector('input[name = "DAlink"]:checked').value);
		var Kannalink = parseInt(document.querySelector('input[name = "Kannalink"]:checked').value);
		linkDmg = linkDmg + linkSkills["demonAvenger" + DAlink].pDmg + linkSkills["kanna" + Kannalink].pDmg;
		

		for (var i = 0; i< wepLines.length; i++){
			if(wepLines[i].value === "pDmg"){
				equipDmg = equipDmg + parseInt(document.getElementById("wepLineInput" + (i + 1)).value);
			}
		}
		for (var i = 0; i< secLines.length; i++){
			if(secLines[i].value === "pDmg"){
				equipDmg = equipDmg + parseInt(document.getElementById("secLineInput" + (i + 1)).value);
			}
		}
		for (var i = 0; i< embLines.length; i++){
			if(embLines[i].value === "pDmg"){
				equipDmg = equipDmg + parseInt(document.getElementById("embLineInput" + (i + 1)).value);
			}
		}

		rebootDmg = Math.floor((parseInt(document.getElementById('charLevel').value / 2)) * parseInt(document.querySelector('input[name = "reboot"]:checked').value));
		
		if(document.getElementById('class').value == 'xenon'){
			return xenonMultilateral[parseInt(document.getElementById('xenonMultilateralSelect').value)] + linkDmg + equipDmg + hyperDmg + passiveSkillDmg + rebootDmg;
		}
		return linkDmg + equipDmg + hyperDmg + passiveSkillDmg + rebootDmg;
	}

	function totalPercentStat(){
		var totalPStat = 0;
		var equipPStat = document.getElementById('equipPStat');
		var equipPStatDiv = equipPStat.getElementsByTagName('div');
		var equipName = divToInputArray(equipPStatDiv);

		for (var i = 0; i < equipName.length; i++) {
			totalPStat = totalPStat + parseInt(equipName[i].value);
		}
		var xenonlink = parseInt(document.querySelector('input[name = "Xenonlink"]:checked').value);

		totalPStat = totalPStat + (xenonlink * 5);
		return totalPStat;
	}

	// the inital upper range before any % damage or % attack
	function upperRange (actualdamage, totalDmg) {
		return Math.floor(actualdamage * (1+totalDmg/100));
	}

	// 1% of your stat = 
	// calculate from the base? not from total
	function xPercentStat (x) {
		var result = 0;
		var estmainstat = parseInt(document.getElementById('estmainstat').value);
		var substat = parseInt(document.getElementById('substat').value);
		var percentStat = totalPercentStat();
		var mainstat = Math.floor(estmainstat * (1 + ((parseInt(percentStat) + parseInt(x)) / 100)));
		var arcanestat = parseInt(document.getElementById('arcane').value); 

		result = ((mainstat + arcanestat) * 4) + substat;
		return result;
	}

	window.onload = function () {
		document.getElementById('calculate').onclick = calcRange;
		document.getElementById('class').onchange = changeClass;
		document.getElementById('mainstat').onchange = function(){
			document.getElementById('estmainstat').value = totalBaseStat();
		}
		document.getElementById('arcane').onchange = function(){
			document.getElementById('estmainstat').value = totalBaseStat();
		}
		populateMenus();
	};

})();
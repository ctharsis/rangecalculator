// weapon multiplier values
// tl;dr explorer warrior and mages have an increased multipliers
// 2h axe original multiplier 1.34 
var wepMult = new Object();
wepMult["oneHandSword"] = 1.2; // regular one hand sword
wepMult["oneHandSwordExplorer"] = 1.30; // <--- explorer multiplier
wepMult["twoHandSword"] = 1.34;
wepMult["twoHandSwordExplorer"] = 1.44;
wepMult["oneHandAxe"] = 1.20;
wepMult["oneHandAxeExplorer"] = 1.30;
wepMult["twoHandAxe"] = 1.44;  // <--- explorer multiplier (?)
wepMult["oneHandBlunt"] = 1.20;
wepMult["twoHandBlunt"] = 1.34;
wepMult["spear"] = 1.49;
wepMult["polearm"] = 1.49; // <--- explorer multiplier (?)
wepMult["wand"] = 1.00;
wepMult["staff"] = 1.00;
wepMult["wandExplorer"] = 1.20;
wepMult["staffExplorer"] = 1.20;
wepMult["bow"] = 1.30;
wepMult["crossbow"] = 1.35;
wepMult["claw"] = 1.75;
wepMult["dagger"] = 1.30;
wepMult["gun"] = 1.50;
wepMult["knuckle"] = 1.70;
wepMult["katara"] = 1.30;
wepMult["cane"] = 1.30;
wepMult["whipBlade"] = 1.3125;
wepMult["desperado"] = 1.30;
wepMult["shiningRod"] = 1.20;
wepMult["cannon"] = 1.80;
wepMult["soulShooter"] = 1.70;
wepMult["katana"] = 1.25;
wepMult["fan"] = 1.35;
wepMult["longSword"] = 1.34;
wepMult["greatSword"] = 1.49;
wepMult["bowgun"] = 1.30;
wepMult["psylimiter"] = 1.20;

// weapons that the classes use
var classWep = new Object();
classWep["dreanbuster"] = "soulShooter"; // angelic buster hue hue hue
classWep["aran"] = "polearm";
classWep["bishopstaff"] = "staffExplorer";
classWep["bishopwand"] = "wandExplorer";
classWep["bowmaster"] = "bow";
classWep["blazewizstaff"] = "staffExplorer"; // BW uses the explorer multiplier /shrug
classWep["blazewizwand"] = "wandExplorer"; // BW uses the explorer multiplier /shrug
classWep["darkknightpolearm"] = "polearm";
classWep["darkknightspear"] = "spear";
classWep["dawnwarrior1hs"] = "oneHandSword"; 
classWep["dawnwarrior2hs"] = "twoHandSword"; 
classWep["demonslayer1ha"] = "oneHandAxe";
classWep["demonslayer1hb"] = "oneHandBlunt";
classWep["evanstaff"] = "staff";
classWep["evanwand"] = "wand";
classWep["firepoisonstaff"] = "staffExplorer";
classWep["firepoisonwand"] = "wandExplorer";
classWep["hayato"] = "katana";
classWep["hero1ha"] = "oneHandAxeExplorer";
classWep["hero2ha"] ="twoHandAxe"; 
classWep["hero1hs"] = "oneHandSwordExplorer";
classWep["hero2hs"] ="twoHandSwordExplorer";
classWep["icelightningstaff"] = "staffExplorer";
classWep["icelightningwand"] = "wandExplorer";
classWep["kaiser"] = "twoHandSword";
classWep["kanna"] = "fan";
classWep["kinesis"] = "psylimiter";
classWep["luminous"] = "shiningRod";
classWep["mercedes"] = "bowgun";
classWep["mihile"] = "oneHandSword";
classWep["nightlord"] = "claw";
classWep["nightwalker"] = "claw";
classWep["phantom"] = "cane";
classWep["shade"] = "knuckle";
classWep["thunderbreaker"] = "knuckle";
classWep["windarcher"] = "bow";
classWep["xenon"] = "whipBlade";

//access other stats by linkSkills[""].att etc.
var linkSkills = new Object();
linkSkills["demonAvenger0"] = {att:0, pDmg:0};
linkSkills["demonAvenger1"] = {att:0, pDmg:5};
linkSkills["demonAvenger2"] = {att:0, pDmg:10};	
linkSkills["demonAvenger3"] = {att:0, pDmg:15};
linkSkills["kanna0"] = {att:0, pDmg:0};
linkSkills["kanna1"] = {att:0, pDmg:5};
linkSkills["kanna2"] = {att:0, pDmg:10};
linkSkills["hayato"] = {att:5, pDmg:0};

//access other stats by passiveStat[""].att etc.
//passiveStat[""] = {att:0, fDmg:0, pAtt:0, pDmg:0};
// maybe take out fDmg?
var passiveStat = new Object();
passiveStat["dreanbuster"] = {att:90, pAtt:0, pDmg:35}; // ab was +80k, mutliplier?
passiveStat["aran"] = {att:80, pAtt:0, pDmg:20};
passiveStat["bishopstaff"] = {att:40, pAtt:0, pDmg:0};
passiveStat["bishopwand"] = {att:40, pAtt:0, pDmg:0};
passiveStat["bowmaster"] = {att:80,	 pAtt:25, pDmg:0};
passiveStat["blazewizstaff"] = {att:20, pAtt:10, pDmg:0}; 
passiveStat["blazewizwand"] = {att:20, pAtt:10, pDmg:0};
passiveStat["darkknightpolearm"] = {att:30, pAtt:0, pDmg:0};
passiveStat["darkknightspear"] = {att:30, pAtt:0, pDmg:5};
passiveStat["dawnwarrior1hs"] = {att:120, pAtt:0, pDmg:0};
passiveStat["dawnwarrior2hs"] = {att:120, pAtt:0, pDmg:0};
passiveStat["demonslayer1ha"] = {att:100, pAtt:0, pDmg:40};
passiveStat["demonslayer1hb"] = {att:100, pAtt:0, pDmg:40};
passiveStat["evanstaff"] = {att:60, pAtt:35, pDmg:0};
passiveStat["evanwand"] = {att:60, pAtt:35, pDmg:0};
passiveStat["firepoisonstaff"] = {att:40, pAtt:50, pDmg:0};
passiveStat["firepoisonwand"] = {att:40, pAtt:50, pDmg:0};
passiveStat["hayato"] = {att:0, pAtt:0, pDmg:30};
passiveStat["hero1ha"] = {att:30, pAtt:0, pDmg:5};
passiveStat["hero2ha"] = {att:30, pAtt:0, pDmg:5};
passiveStat["hero1hs"] = {att:30, pAtt:0, pDmg:0};
passiveStat["hero2hs"] = {att:30, pAtt:0, pDmg:0};
passiveStat["icelightningstaff"] = {att:40, pAtt:50, pDmg:0};
passiveStat["icelightningwand"] = {att:40, pAtt:50, pDmg:0};
passiveStat["kaiser"] = {att:50, pAtt:30, pDmg:0};
passiveStat["kanna"] = {att:30, pAtt:0, pDmg:60};
passiveStat["kinesis"] = {att:50, pAtt:0, pDmg:0};
passiveStat["luminous"] = {att:40, pAtt:0, pDmg:0};
passiveStat["mihile"] = {att:80, pAtt:10, pDmg:60};
passiveStat["mercedes"] = {att:50, pAtt:0, pDmg:50}
passiveStat["nightlord"] = {att:70, pAtt:0, pDmg:0};
passiveStat["nightwalker"] = {att:60, pAtt:0, pDmg:20};
passiveStat["phantom"] = {att:40, pAtt:0, pDmg:0};
passiveStat["shade"] = {att:20, pAtt:0, pDmg:20};
passiveStat["thunderbreaker"] = {att:80, pAtt:0, pDmg:5};
passiveStat["windarcher"] = {att:50, pAtt:0, pDmg:0};
passiveStat["xenon"] = {att:50, pAtt:0, pDmg:0};

var xenonMultilateral = new Object();
xenonMultilateral[0] = 0;
xenonMultilateral[1] = 3;
xenonMultilateral[2] = 8;
xenonMultilateral[3] = 15;
xenonMultilateral[4] = 25;
xenonMultilateral[5] = 35;
xenonMultilateral[6] = 40;

// Weapon and Secondary Lines
wepsecLines = [["%M/Attack", "pAtt"], ["%IED", "IED"], ["%Boss", "Boss"], ["%Damage", "pDmg"], ["%Crit", "critRate"], ["Other", "Other"]];
gloveLines = [["%Critical Damage", "critDmg"], ["%Allstat", "pAllStat"], ["%Stat", "pStat"], ["Other", "Other"]];
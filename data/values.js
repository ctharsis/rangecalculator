// weapon multiplier values
var wepMult = new Object();
wepMult["oneHandSword"] = 1.30; //Maplewikia is wrong, at least for hero.
wepMult["twoHandSword"] = 1.34;
wepMult["oneHandAxe"] = 1.20;
wepMult["twoHandAxe"] = 1.34;
wepMult["oneHandBlut"] = 1.20;
wepMult["twoHandBlunt"] = 1.34;
wepMult["spear"] = 1.49;
wepMult["polearm"] = 1.00;
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
wepMult["whipBlade"] = 1.125;
wepMult["desperado"] = 1.30;
wepMult["shiningRod"] = 1.20;
wepMult["cannon"] = 1.80;
wepMult["soulShooter"] = 1.80;
wepMult["katana"] = 1.25;
wepMult["fan"] = 1.35;
wepMult["longSword"] = 1.34;
wepMult["greatSword"] = 1.49;
wepMult["bowgun"] = 1.32;
wepMult["psylimiter"] = 1.20;

// weapons that the classes use
var classWep = new Object();
classWep["bishopstaff"] = "staffExplorer"
classWep["bishopwand"] = "wandExplorer"
classWep["evanstaff"] = "staff";
classWep["evanwand"] = "wand";
classWep["firepoisonstaff"] = "staffExplorer"
classWep["firepoisonwand"] = "wandExplorer"
classWep["hero1ha"] = "oneHandAxe";
classWep["hero2ha"] ="twoHandAxe"; 
classWep["hero1hs"] = "oneHandSword";
classWep["hero2hs"] ="twoHandSword";
classWep["icelightningstaff"] = "staffExplorer"
classWep["icelightningwand"] = "wandExplorer"
classWep["kanna"] = "fan";
classWep["kinesis"] = "psylimiter";
classWep["luminous"] = "shiningRod";
classWep["nightlord"] = "claw";
classWep["phantom"] = "cane";
classWep["shade"] = "knuckle";

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
var passiveStat = new Object();
passiveStat["bishopstaff"] = {att:40, pAtt:0, pDmg:0};
passiveStat["bishopwand"] = {att:40, pAtt:0, pDmg:0};
passiveStat["evanstaff"] = {att:70, pAtt:35, pDmg:0};
passiveStat["evanwand"] = {att:70, pAtt:35, pDmg:0};
passiveStat["firepoisonstaff"] = {att:40, pAtt:50, pDmg:0};
passiveStat["firepoisonwand"] = {att:40, pAtt:50, pDmg:0};
passiveStat["hero1ha"] = {att:30, pAtt:0, pDmg:5};
passiveStat["hero2ha"] = {att:30, pAtt:0, pDmg:5};
passiveStat["hero1hs"] = {att:30, pAtt:0, pDmg:0};
passiveStat["hero2hs"] = {att:30, pAtt:0, pDmg:0};
passiveStat["icelightningstaff"] = {att:40, pAtt:50, pDmg:0};
passiveStat["icelightningwand"] = {att:40, pAtt:50, pDmg:0};
passiveStat["kanna"] = {att:30, pAtt:0, pDmg:60};
passiveStat["kinesis"] = {att:50, pAtt:0, pDmg:0};
passiveStat["luminous"] = {att:40, pAtt:0, pDmg:0};
passiveStat["nightlord"] = {att:70, pAtt:0, pDmg:0};
passiveStat["phantom"] = {att:40, pAtt:0, pDmg:0};
passiveStat["shade"] = {att:20, pAtt:0, pDmg:20};

//passiveStat[""] = {att:0, pAtt:0, pDmg:0};
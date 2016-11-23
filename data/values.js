// weapon multiplier values
var wepMult = new Object();
wepMult["oneHandSword"] = 1.30; //Maplewikia is wrong
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
classWep["hero1hs"] = "oneHandSword";
classWep["hero2hs"] ="twoHandSword"; // test
classWep["kinesis"] = "psylimiter";
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
passiveStat["hero1ha"] = {att:30, pDmg:5};
passiveStat["hero2ha"] = {att:30, pDmg:5};
passiveStat["hero1hs"] = {att:30, pDmg:0};
passiveStat["hero2hs"] = {att:30, pDmg:0};

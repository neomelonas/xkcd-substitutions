
var XkcdSubstitution = function() {
};

XkcdSubstitution.prototype.traverse = function(node) {
  var child, next;

  switch (node.nodeType)  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        this.traverse(child);
        child = next;
      }
      break;

    case 3: // Text node
      node.nodeValue = this.transformText(node.nodeValue);
      break;
  }
};

var substitutions = {

  "witness": function(text){
    text = text.replace(/\b(the )?witness\b/g, "this dude I know");
    text = text.replace(/\b(The )?witness\b/g, "This dude I know");
    text = text.replace(/\b(The )?Witness\b/g, "This Dude I Know");
    text = text.replace(/\b(THE )?WITNESS\b/g, "THIS DUDE I KNOW");
  },
  "witnesses": function(text){
    text = text.replace(/\b(the )?witnesses\b/g, "these dudes I know");
    text = text.replace(/\bThe witnesses\b/g, "These dudes I know");
    text = text.replace(/\bThe Witnesses\b/g, "These Dudes I Know");
    text = text.replace(/\bWitnesses\b/g, "These dudes I know");
    text = text.replace(/\b(THE )?WITNESSES\b/g, "THESE DUDES I KNOW");
  },
  "allegedly": function(text){
    text = text.replace(/\ballegedly\b/g, "kinda probably");
    text = text.replace(/\bAllegedly\b/g, "Kinda probably");
    text = text.replace(/\bALLEGEDLY\b/g, "KINDA PROBABLY");
  },
  "new study": function(text){
    text = text.replace(/\bnew study\b/g, "tumblr post");
    text = text.replace(/\bNew study\b/g, "Tumblr post");
    text = text.replace(/\bNew Study\b/g, "Tumblr Post");
    text = text.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
    text = text.replace(/\bnew studies\b/g, "tumblr posts");
    text = text.replace(/\bNew studies\b/g, "Tumblr posts");
    text = text.replace(/\bNew Studies\b/g, "Tumblr Posts");
    text = text.replace(/\bNEW STUDIES\b/g, "TUMBLR POSTS");
  },
  "rebuild": function(text){
    text = text.replace(/\brebuild\b/g, "avenge");
    text = text.replace(/\bRebuild\b/g, "Avenge");
    text = text.replace(/\bREBUILD\b/g, "AVENGE");
  },
  "rebuilds": function(text){
    text = text.replace(/\brebuilds\b/g, "avenges");
    text = text.replace(/\bRebuilds\b/g, "Avenges");
    text = text.replace(/\bREBUILDs\b/g, "AVENGES");
  },
  "rebuilding": function(text){
    text = text.replace(/\brebuilding\b/g, "avenging");
    text = text.replace(/\bRebuilding\b/g, "Avenging");
    text = text.replace(/\bREBUILDING\b/g, "AVENGING");
  },
  "space": function(text){
    text = text.replace(/\bspace\b/g, "spaaace");
    text = text.replace(/\bSpace\b/g, "Spaaace");
    text = text.replace(/\bSPACE\b/g, "SPAAACE");
  },
  "google glass": function(text){
    text = text.replace(/\bgoogle glass\b/g, "virtual boy");
    text = text.replace(/\bGoogle Glass\b/g, "Virtual Boy");
    text = text.replace(/\bGOOGLE GLASS\b/g, "VIRTUAL BOY");
    text = text.replace(/\bgoogle glasses\b/g, "virtual boys");
    text = text.replace(/\bGoogle Glasses\b/g, "Virtual Boys");
    text = text.replace(/\bGOOGLE GLASSES\b/g, "VIRTUAL BOYS");
  },
  "smart phone": function(text){
    text = text.replace(/\bsmart[- ]?phone\b/g, "pok\xE9dex");
    text = text.replace(/\bSmart[- ]?phone\b/g, "Pok\xE9dex");
    text = text.replace(/\bSMART[- ]?PHONE\b/g, "POK\xC9DEX");

    text = text.replace(/\bsmart[- ]?phones\b/g, "pok\xE9dexes");
    text = text.replace(/\bSmart[- ]?phones\b/g, "Pok\xE9dexes");
    text = text.replace(/\bSMART[- ]?PHONES\b/g, "POK\xC9DEXES");
  },
  "electric": function(text){
    text = text.replace(/\belectric\b/g, "atomic");
    text = text.replace(/\bElectric\b/g, "Atomic");
    text = text.replace(/\bELECTRIC\b/g, "ATOMIC");
  },
  "senator": function(text){
    text = text.replace(/\bsenator\b/g, "elf-lord");
    text = text.replace(/\bSenator\b/g, "Elf-Lord");
    text = text.replace(/\bSENATOR\b/g, "ELF-LORD");
    text = text.replace(/\bsenators\b/g, "elf-lords");
    text = text.replace(/\bSenators\b/g, "Elf-Lords");
    text = text.replace(/\bSENATORS\b/g, "ELF-LORDS");
  },
  "representative": function(text){
    text = text.replace(/\brepresentative\b/g, "dwarf-lord");
    text = text.replace(/\bRepresentative\b/g, "Dwarf-Lord");
    text = text.replace(/\bREPRESENTATIVE\b/g, "DWARF-LORD");
    text = text.replace(/\brepresentatives\b/g, "dwarf-lords");
    text = text.replace(/\bRepresentatives\b/g, "Dwarf-Lords");
    text = text.replace(/\bREPRESENTATIVES\b/g, "DWARF-LORDS");
  },
  "car": function(text){
    text = text.replace(/\bcar\b/g, "cat");
    text = text.replace(/\bcars\b/g, "cats");
    text = text.replace(/\bCar\b/g, "Cat");
    text = text.replace(/\bCars\b/g, "Cats");
    text = text.replace(/\bCAR\b/g, "CAT");
    text = text.replace(/\bCARS\b/g, "CATS");
  },
  "election": function(text){
    text = text.replace(/\belection\b/g, "pokébattle");
    text = text.replace(/\bElection\b/g, "Pokébattle");
    text = text.replace(/\bELECTION\b/g, "POKÉBATTLE");
    text = text.replace(/\belections\b/g, "pokébattles");
    text = text.replace(/\bElections\b/g, "Pokébattles");
    text = text.replace(/\bELECTIONS\b/g, "POKÉBATTLES");
  },
  "congressional leaders": function(text){
    text = text.replace(/congressional leaders/g, "river spirits");
    text = text.replace(/Congressional leaders/g, "River spirits");
    text = text.replace(/Congressional Leaders/g, "River Spirits");
    text = text.replace(/CONGRESSIONAL LEADERS/g, "RIVER SPIRITS");
  },
  "homeland security": function(text){
    text = text.replace(/Homeland Security/g, "Homestar Runner");
    text = text.replace(/HOMELAND SECURITY/g, "HOMESTAR RUNNER");
  },
  "no comment": function(text){
    text = text.replace(/could not be reached for comment/g, "is guilty and everyone knows it");
    text = text.replace(/Could Not Be Reached For Comment/g, "Is Guilty And Everyone Knows It");
    text = text.replace(/COULD NOT BE REACHED FOR COMMENT/g, "IS GUILTY AND EVERYONE KNOWS IT");
  },
  "gun": function(text){
    text = text.replace(/\bgun\b/g, "magic wand");
    text = text.replace(/\bGun\b/g, "Magic Wand");
    text = text.replace(/\bGUN\b/g, "MAGIC WAND");
    text = text.replace(/\bguns\b/g, "magic wands");
    text = text.replace(/\bGuns\b/g, "Magic Wands");
    text = text.replace(/\bGUNS\b/g, "MAGIC WANDS");
  },
  "soldier": function(text){
    text = text.replace(/\bsoldier\b/g, "warlock");
    text = text.replace(/\bSoldier\b/g, "Warlock");
    text = text.replace(/\bSOLDIER\b/g, "WARLOCK");
    text = text.replace(/\bsoldiers\b/g, "warlocks");
    text = text.replace(/\bSoldiers\b/g, "Warlocks");
    text = text.replace(/\bSOLDIERS\b/g, "WARLOCKS");
  },
  "federal judges": function(text){
    text = text.replace(/\bfederal judge\b/g, "very powerful wizard");
    text = text.replace(/\bfederal judges\b/g, "very powerful wizards");
    text = text.replace(/\bFederal judge\b/g, "Very powerful wizard");
    text = text.replace(/\bFederal judges\b/g, "very powerful wizards");
    text = text.replace(/\bFEDERAL JUDGE\b/g, "VERY POWERFUL WIZARD");
    text = text.replace(/\bFEDERAL JUDGES\b/g, "VERY POWERFUL WIZARDS");
  },
  "supreme court": function(text){
    text = text.replace(/\bsupreme court\b/g, "space wizard");
    text = text.replace(/\bsupreme courts\b/g, "space wizards");
    text = text.replace(/\bSupreme Court\b/g, "Space Wizard");
    text = text.replace(/\bSupreme Courts\b/g, "Space Wizards");
    text = text.replace(/\bSUPREME COURT\b/g, "SPACE WIZARD");
    text = text.replace(/\bSUPREME COURTS\b/g, "SPACE WIZARDS");
  },
  "entrepreneur": function(text){
    text = text.replace(/\bentrepreneur\b/g, "ultra-gnome");
    text = text.replace(/\bentrepreneurs\b/g, "ultra-gnomes");
    text = text.replace(/\bEntrepreneur\b/g, "Ultra-Gnome");
    text = text.replace(/\bEntrepreneurs\b/g, "Ultra-Gnomes");
    text = text.replace(/\bENTREPRENEUR\b/g, "ULTRA-GNOME");
    text = text.replace(/\bENTREPRENEURS\b/g, "ULTRA-GNOMES");
  },
  "hacker": function(text){
    text = text.replace(/\bhacker\b/g, "unicorn princess");
    text = text.replace(/\bhackers\b/g, "unicorn princesses");
    text = text.replace(/\bHacker\b/g, "Unicorn princess");
    text = text.replace(/\bHackers\b/g, "Unicorn princesses");
    text = text.replace(/\bHACKER\b/g, "UNICORN PRINCESS");
    text = text.replace(/\bHACKERS\b/g, "UNICORN PRINCESSES");
  },
  "debate": function(text){
    text = text.replace(/\bdebate\b/g,  "dance-off");
    text = text.replace(/\bdebates\b/g, "dance-offs");
    text = text.replace(/\bDebate\b/g,  "Dance-off");
    text = text.replace(/\bDebates\b/g, "Dance-offs");
    text = text.replace(/\bDEBATE\b/g,  "DANCE-OFF");
    text = text.replace(/\bDEBATES\b/g, "DANCE-OFFS");
  },
  "self driving": function(text){
    text = text.replace(/\bself[ -]driving\b/g,  "uncontrollably swerving");
    text = text.replace(/\bSelf[ -]driving\b/g,  "Uncontrollably swerving");
    text = text.replace(/\bSELF[ -]DRIVING\b/g,  "UNCONTROLLABLY SWERVING");
  },
  "poll": function(text){
    text = text.replace(/\bpoll\b/g,  "psychic reading");
    text = text.replace(/\bpolls\b/g, "psychic readings");
    text = text.replace(/\bPoll\b/g,  "Psychic reading");
    text = text.replace(/\bPolls\b/g, "Psychic readings");
    text = text.replace(/\bPOLL\b/g,  "PSYCHIC READING");
    text = text.replace(/\bPOLLS\b/g, "PSYCHIC READINGS");
  },
  "candidate": function(text){
    text = text.replace(/\bcandidate\b/g,  "airbender");
    text = text.replace(/\bcandidates\b/g, "airbenders");
    text = text.replace(/\bCandidate\b/g,  "Airbender");
    text = text.replace(/\bCandidates\b/g, "Airbenders");
    text = text.replace(/\bCANDIDATE\b/g,  "AIRBENDER");
    text = text.replace(/\bCANDIDATES\b/g, "AIRBENDERS");
  },
  "drone": function(text){
    text = text.replace(/\bdrone\b/g,  "dog");
    text = text.replace(/\bdrones\b/g, "dogs");
    text = text.replace(/\bDrone\b/g,  "Dog");
    text = text.replace(/\bDrones\b/g, "Dogs");
    text = text.replace(/\bDRONE\b/g,  "DOG");
    text = text.replace(/\bDRONES\b/g, "DOGS");
  },
  "vows to": function(text){
    text = text.replace(/\bvows to\b/g,  "probably won't");
    text = text.replace(/\bVows to\b/g,  "Probably won't");
    text = text.replace(/\bVOWS TO\b/g,  "PROBABLY WON'T");
  },
  "at large": function(text){
    text = text.replace(/\bat large\b/g,  "very large");
    text = text.replace(/\bAt large\b/g,  "Very large");
    text = text.replace(/\bAT LARGE\b/g,  "VERY LARGE");
  },
  "successfully": function(text){
    text = text.replace(/\bsuccessfully\b/g,  "suddenly");
    text = text.replace(/\bSuccessfully\b/g,  "Suddenly");
    text = text.replace(/\bSUCCESSFULLY\b/g,  "SUDDENLY");
  },
  "expands": function(text){
    text = text.replace(/\bexpands\b/g,  "physically expands");
    text = text.replace(/\bExpands\b/g,  "Physically expands");
    text = text.replace(/\bEXPANDS\b/g,  "PHYSICALLY EXPANDS");
  },
  "nth degree": function(text){
    text = text.replace(/\b(first)[- ]?degree\b/g,  "friggin' awful");
    text = text.replace(/\b(First)[- ]?degree\b/g,  "Friggin' awful");
    text = text.replace(/\b(FIRST)[- ]?DEGREE\b/g,  "FRIGGIN' AWFUL");
    text = text.replace(/\b(second)[- ]?degree\b/g,  "friggin' awful");
    text = text.replace(/\b(Second)[- ]?degree\b/g,  "Friggin' awful");
    text = text.replace(/\b(SECOND)[- ]?DEGREE\b/g,  "FRIGGIN' AWFUL");
    text = text.replace(/\b(third)[- ]?degree\b/g,  "friggin' awful");
    text = text.replace(/\b(Third)[- ]?degree\b/g,  "Friggin' awful");
    text = text.replace(/\b(THIRD)[- ]?DEGREE\b/g,  "FRIGGIN' AWFUL");
  },
  "an unknown number": function(text){
    text = text.replace(/\ban unknown number\b/g,  "like hundreds");
    text = text.replace(/\bAn unknown number\b/g,  "Like hundreds");
    text = text.replace(/\bAN UNKNOWN NUMBER\b/g,  "LIKE HUNDREDS");
  },
  "front runner": function(text){
    text = text.replace(/\bfront runner\b/g,   "blade runner");
    text = text.replace(/\bfront runners\b/g,  "blade runners");
    text = text.replace(/\bFront runner\b/g,   "Blade runner");
    text = text.replace(/\bFront runners\b/g,  "Blade runners");
    text = text.replace(/\bFRONT RUNNER\b/g,   "BLADE RUNNER");
    text = text.replace(/\bFRONT RUNNERS\b/g,  "PHYSICALLY EXPANDS");
  },
  "global": function(text){
    text = text.replace(/\bglobal\b/g,  "spherical");
    text = text.replace(/\bGlobal\b/g,  "Spherical");
    text = text.replace(/\bGLOBAL\b/g,  "SPHERICAL");
  },
  "years": function(text){
    text = text.replace(/\byears\b/g,  "minutes");
    text = text.replace(/\bYears\b/g,  "Minutes");
    text = text.replace(/\bYEARS\b/g,  "MINUTES");
  },
  "minutes": function(text){
    text = text.replace(/\bminutes\b/g,  "years");
    text = text.replace(/\bMinutes\b/g,  "Years");
    text = text.replace(/\bMINUTES\b/g,  "YEARS");
  },
  "no indication": function(text){
    text = text.replace(/\bno indication\b/g,  "lots of signs");
    text = text.replace(/\bNo indication\b/g,  "Lots of signs");
    text = text.replace(/\bNO INDICATION\b/g,  "LOTS OF SIGNS");
  },
  "urged restraint": function(text){
    text = text.replace(/\burged restraint by\b/g,  "drunkenly egged on");
    text = text.replace(/\bUrged restraint by\b/g,  "Drunkenly egged on");
    text = text.replace(/\bURGED RESTRAINT BY\b/g,  "DRUNKENLY EGGED ON");
  },
  "horsepower": function(text){
    text = text.replace(/\bhorsepower\b/g,  "tons of horsemeat");
    text = text.replace(/\bHorsepower\b/g,  "Tons of horsemeat");
    text = text.replace(/\bHORSEPOWER\b/g,  "TONS OF HORSEMEAT");
  }
};

XkcdSubstitution.prototype.transformText = function(text) {
  for (var phrase in substitutions) {
    if (substitutions.hasOwnProperty(phrase)) {
      text = substitutions[phrase](text);
    }
  }
  return text;
};

if (typeof module !== 'undefined') {
  module.exports = XkcdSubstitution;
}


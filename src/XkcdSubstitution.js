
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

XkcdSubstitution.prototype.transformText = function(text) {

  text = text.replace(/\b(the )?witness\b/g, "this dude I know");
  text = text.replace(/\b(The )?witness\b/g, "This dude I know");
  text = text.replace(/\b(The )?Witness\b/g, "This Dude I Know");
  text = text.replace(/\b(THE )?WITNESS\b/g, "THIS DUDE I KNOW");

  text = text.replace(/\b(the )?witnesses\b/g, "these dudes I know");
  text = text.replace(/\bThe witnesses\b/g, "These dudes I know");
  text = text.replace(/\bThe Witnesses\b/g, "These Dudes I Know");
  text = text.replace(/\bWitnesses\b/g, "These dudes I know");
  text = text.replace(/\b(THE )?WITNESSES\b/g, "THESE DUDES I KNOW");

  text = text.replace(/\ballegedly\b/g, "kinda probably");
  text = text.replace(/\bAllegedly\b/g, "Kinda probably");
  text = text.replace(/\bALLEGEDLY\b/g, "KINDA PROBABLY");

  text = text.replace(/\bnew study\b/g, "tumblr post");
  text = text.replace(/\bNew study\b/g, "Tumblr post");
  text = text.replace(/\bNew Study\b/g, "Tumblr Post");
  text = text.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
  text = text.replace(/\bnew studies\b/g, "tumblr posts");
  text = text.replace(/\bNew studies\b/g, "Tumblr posts");
  text = text.replace(/\bNew Studies\b/g, "Tumblr Posts");
  text = text.replace(/\bNEW STUDIES\b/g, "TUMBLR POSTS");

  text = text.replace(/\brebuild\b/g, "avenge");
  text = text.replace(/\bRebuild\b/g, "Avenge");
  text = text.replace(/\bREBUILD\b/g, "AVENGE");

  text = text.replace(/\brebuilds\b/g, "avenges");
  text = text.replace(/\bRebuilds\b/g, "Avenges");
  text = text.replace(/\bREBUILDs\b/g, "AVENGES");

  text = text.replace(/\brebuilding\b/g, "avenging");
  text = text.replace(/\bRebuilding\b/g, "Avenging");
  text = text.replace(/\bREBUILDING\b/g, "AVENGING");

  text = text.replace(/\bspace\b/g, "spaaace");
  text = text.replace(/\bSpace\b/g, "Spaaace");
  text = text.replace(/\bSPACE\b/g, "SPAAACE");

  text = text.replace(/\bgoogle glass\b/g, "virtual boy");
  text = text.replace(/\bGoogle Glass\b/g, "Virtual Boy");
  text = text.replace(/\bGOOGLE GLASS\b/g, "VIRTUAL BOY");
  text = text.replace(/\bgoogle glasses\b/g, "virtual boys");
  text = text.replace(/\bGoogle Glasses\b/g, "Virtual Boys");
  text = text.replace(/\bGOOGLE GLASSES\b/g, "VIRTUAL BOYS");

  text = text.replace(/\bsmart[- ]?phone\b/g, "pokédex");
  text = text.replace(/\bSmart[- ]?phone\b/g, "Pokédex");
  text = text.replace(/\bSMART[- ]?PHONE\b/g, "POKÉDEX");

  text = text.replace(/\bsmart[- ]?phones\b/g, "pokédexes");
  text = text.replace(/\bSmart[- ]?phones\b/g, "Pokédexes");
  text = text.replace(/\bSMART[- ]?PHONES\b/g, "POKÉDEXES");

  text = text.replace(/\belectric\b/g, "atomic");
  text = text.replace(/\bElectric\b/g, "Atomic");
  text = text.replace(/\bELECTRIC\b/g, "ATOMIC");

  text = text.replace(/\bsenator\b/g, "elf-lord");
  text = text.replace(/\bSenator\b/g, "Elf-Lord");
  text = text.replace(/\bSENATOR\b/g, "ELF-LORD");
  text = text.replace(/\bsenators\b/g, "elf-lords");
  text = text.replace(/\bSenators\b/g, "Elf-Lords");
  text = text.replace(/\bSENATORS\b/g, "ELF-LORDS");

  text = text.replace(/\brepresentative\b/g, "dwarf-lord");
  text = text.replace(/\bRepresentative\b/g, "Dwarf-Lord");
  text = text.replace(/\bREPRESENTATIVE\b/g, "DWARF-LORD");
  text = text.replace(/\brepresentatives\b/g, "dwarf-lords");
  text = text.replace(/\bRepresentatives\b/g, "Dwarf-Lords");
  text = text.replace(/\bREPRESENTATIVES\b/g, "DWARF-LORDS");

  text = text.replace(/\bcar\b/g, "cat");
  text = text.replace(/\bcars\b/g, "cats");
  text = text.replace(/\bCar\b/g, "Cat");
  text = text.replace(/\bCars\b/g, "Cats");
  text = text.replace(/\bCAR\b/g, "CAT");
  text = text.replace(/\bCARS\b/g, "CATS");

  text = text.replace(/\belection\b/g, "pokébattle");
  text = text.replace(/\bElection\b/g, "Pokébattle");
  text = text.replace(/\bELECTION\b/g, "POKÉBATTLE");
  text = text.replace(/\belections\b/g, "pokébattles");
  text = text.replace(/\bElections\b/g, "Pokébattles");
  text = text.replace(/\bELECTIONS\b/g, "POKÉBATTLES");

  text = text.replace(/congressional leaders/g, "river spirits");
  text = text.replace(/Congressional leaders/g, "River spirits");
  text = text.replace(/Congressional Leaders/g, "River Spirits");
  text = text.replace(/CONGRESSIONAL LEADERS/g, "RIVER SPIRITS");

  text = text.replace(/Homeland security/g, "Homestar runner");
  text = text.replace(/Homeland Security/g, "Homestar Runner");
  text = text.replace(/HOMELAND SECURITY/g, "HOMESTAR RUNNER");

  text = text.replace(/could not be reached for comment/g, "is guilty and everyone knows it");
  text = text.replace(/Could Not Be Reached For Comment/g, "Is Guilty And Everyone Knows It");
  text = text.replace(/COULD NOT BE REACHED FOR COMMENT/g, "IS GUILTY AND EVERYONE KNOWS IT");

  text = text.replace(/\bgun\b/g, "magic wand");
  text = text.replace(/\bGun\b/g, "Magic Wand");
  text = text.replace(/\bGUN\b/g, "MAGIC WAND");
  text = text.replace(/\bguns\b/g, "magic wands");
  text = text.replace(/\bGuns\b/g, "Magic Wands");
  text = text.replace(/\bGUNS\b/g, "MAGIC WANDS");

  text = text.replace(/\bsoldier\b/g, "warlock");
  text = text.replace(/\bSoldier\b/g, "Warlock");
  text = text.replace(/\bSOLDIER\b/g, "WARLOCK");
  text = text.replace(/\bsoldiers\b/g, "warlocks");
  text = text.replace(/\bSoldiers\b/g, "Warlocks");
  text = text.replace(/\bSOLDIERS\b/g, "WARLOCKS");

  text = text.replace(/\bfederal judge\b/g, "very powerful wizard");
  text = text.replace(/\bfederal judges\b/g, "very powerful wizards");
  text = text.replace(/\bFederal judge\b/g, "Very powerful wizard");
  text = text.replace(/\bFederal judges\b/g, "very powerful wizards");
  text = text.replace(/\bFEDERAL JUDGE\b/g, "VERY POWERFUL WIZARD");
  text = text.replace(/\bFEDERAL JUDGES\b/g, "VERY POWERFUL WIZARDS");

  text = text.replace(/\bsupreme court\b/g, "space wizard");
  text = text.replace(/\bsupreme courts\b/g, "space wizards");
  text = text.replace(/\bSupreme Court\b/g, "Space Wizard");
  text = text.replace(/\bSupreme Courts\b/g, "Space Wizards");
  text = text.replace(/\bSUPREME COURT\b/g, "SPACE WIZARD");
  text = text.replace(/\bSUPREME COURTS\b/g, "SPACE WIZARDS");

  text = text.replace(/\bentrepreneur\b/g, "ultra-gnome");
  text = text.replace(/\bentrepreneurs\b/g, "ultra-gnomes");
  text = text.replace(/\bEntrepreneur\b/g, "Ultra-Gnome");
  text = text.replace(/\bEntrepreneurs\b/g, "Ultra-Gnomes");
  text = text.replace(/\bENTREPRENEUR\b/g, "ULTRA-GNOME");
  text = text.replace(/\bENTREPRENEURS\b/g, "ULTRA-GNOMES");

  text = text.replace(/\bhacker\b/g, "unicorn princess");
  text = text.replace(/\bhackers\b/g, "unicorn princesses");
  text = text.replace(/\bHacker\b/g, "Unicorn princess");
  text = text.replace(/\bHackers\b/g, "Unicorn princesses");
  text = text.replace(/\bHACKER\b/g, "UNICORN PRINCESS");
  text = text.replace(/\bHACKERS\b/g, "UNICORN PRINCESSES");

  return text;
};

if (typeof module !== 'undefined') {
  module.exports = XkcdSubstitution;
}


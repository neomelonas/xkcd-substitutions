var assert = require('assert');
var should = require('should');
var $ = require('jquery');
var jsdom = require('jsdom');
var XkcdSubstitution = require('../src/XkcdSubstitution.js');

if (process.env.COVERAGE) {
  XkcdSubstitution = require('../tmp/src-cov/XkcdSubstitution.js');
}

describe('XkcdSubstitution', function() {

  var substitution = new XkcdSubstitution;

  describe("#traverse", function () {

    var document;

    beforeEach(function (done) {
      jsdom.env(
        '<h1>Electric Toothbrush</h1>',
        [],
        function (errors, window) {
          document = window.document;
          substitution.traverse(document);
          done();
        }
      );
    });

    it("transforms text nodes", function () {
      $(document).find('h1').text().should.equal('Atomic Toothbrush');
    });

  });

  describe("#transformText", function() {

    it("converts 'witness'", function() {
      substitution
        .transformText("But according to the witness, Mongeon wasn't the one who owed money.")
        .should.equal("But according to this dude I know, Mongeon wasn't the one who owed money.");
    });

    it("converts 'Witnesses'", function() {
      substitution
        .transformText("Witnesses saw a white van leaving the scene")
        .should.equal("These dudes I know saw a white van leaving the scene");
    });

    it("converts 'witnesses'", function() {
      substitution
        .transformText("Police have appealed for witnesses to contact them")
        .should.equal("Police have appealed for these dudes I know to contact them");
    });

    it("CONVERTS 'WITNESSES'", function() {
      substitution
        .transformText("POLICE HAVE APPEALED FOR WITNESSES TO CONTACT THEM")
        .should.equal("POLICE HAVE APPEALED FOR THESE DUDES I KNOW TO CONTACT THEM");
    });

    it("converts 'the witnesses'", function() {
      substitution
        .transformText("According to the witnesses, the gunman left-handed.")
        .should.equal("According to these dudes I know, the gunman left-handed.");
    });

    it("converts 'allegedly'", function() {
      substitution
        .transformText("The offense allegedly occured")
        .should.equal("The offense kinda probably occured");
    });

    it("converts 'ALLEGEDLY'", function() {
      substitution
        .transformText("THE OFFENSE ALLEGEDLY OCCURED")
        .should.equal("THE OFFENSE KINDA PROBABLY OCCURED");
    });

    it("converts 'new study'", function() {
      substitution
        .transformText("A new study has caused a stir in Parliament")
        .should.equal("A tumblr post has caused a stir in Parliament");
    });

    it("converts 'New Studies'", function() {
      substitution
        .transformText("New Studies Show Numerous Health Benefits of Tea")
        .should.equal("Tumblr Posts Show Numerous Health Benefits of Tea");
    });

    it("converts 'NEW STUDY'", function() {
      substitution
        .transformText("A NEW STUDY HAS CAUSED A STIR IN PARLIAMENT")
        .should.equal("A TUMBLR POST HAS CAUSED A STIR IN PARLIAMENT");
    });

    it("converts 'rebuild'", function() {
      substitution
        .transformText("New plans to rebuild the World Trade Center")
        .should.equal("New plans to avenge the World Trade Center");
    });

    it("converts 'Rebuilds'", function() {
      substitution
        .transformText("Restaurant Rebuilds Pier After Sandy's Destruction")
        .should.equal("Restaurant Avenges Pier After Sandy's Destruction");
    });

    it("converts 'rebuilding'", function() {
      substitution
        .transformText("Major oyster reef rebuilding begins on Texas coast")
        .should.equal("Major oyster reef avenging begins on Texas coast");
    });

    it("converts 'REBUILD'", function() {
      substitution
        .transformText("NEW PLANS TO REBUILD THE WORLD TRADE CENTER")
        .should.equal("NEW PLANS TO AVENGE THE WORLD TRADE CENTER");
    });

    it("converts 'space'", function() {
      substitution
        .transformText("Space, the final frontier")
        .should.equal("Spaaace, the final frontier");
    });

    it("converts 'SPACE'", function() {
      substitution
        .transformText("SPACE, THE FINAL FRONTIER")
        .should.equal("SPAAACE, THE FINAL FRONTIER");
    });

    it("converts 'google glass'", function() {
      substitution
        .transformText("Ticket issued to driver wearing Google Glass")
        .should.equal("Ticket issued to driver wearing Virtual Boy");
    });

    it("converts 'Google Glasses'", function() {
      substitution
        .transformText("For example, prescription Google Glasses could complicate the enforcement of traffic laws.")
        .should.equal("For example, prescription Virtual Boys could complicate the enforcement of traffic laws.");
    });

    it("converts 'GOOGLE GLASS'", function() {
      substitution
        .transformText("TICKET ISSUED TO DRIVER WEARING GOOGLE GLASS")
        .should.equal("TICKET ISSUED TO DRIVER WEARING VIRTUAL BOY");
    });

    it("converts 'Smartphone'", function() {
      substitution
        .transformText("Smartphone patent war intensifies")
        .should.equal("Pokédex patent war intensifies");
    });

    it("converts 'smart phone'", function() {
      substitution
        .transformText("Stores tap into smart phone Wi-Fi signals to track shoppers")
        .should.equal("Stores tap into pokédex Wi-Fi signals to track shoppers");
    });

    it("converts 'smart-phone'", function() {
      substitution
        .transformText("Stores tap into smart-phone Wi-Fi signals to track shoppers")
        .should.equal("Stores tap into pokédex Wi-Fi signals to track shoppers");
    });

    it("converts 'smartphones'", function() {
      substitution
        .transformText("What is the next major breakthrough for smartphones?")
        .should.equal("What is the next major breakthrough for pokédexes?");
    });

    it("converts 'SMARTPHONE'", function() {
      substitution
        .transformText("SMARTPHONE PATENT WAR INTENSIFIES")
        .should.equal("POKÉDEX PATENT WAR INTENSIFIES");
    });

    it("converts 'electric'", function() {
      substitution
        .transformText("Bad news for electric toothbrush manufacturers")
        .should.equal("Bad news for atomic toothbrush manufacturers");
    });

    it("converts 'ELECTRIC'", function() {
      substitution
        .transformText("BAD NEWS FOR ELECTRIC TOOTHBRUSH MANUFACTURERS")
        .should.equal("BAD NEWS FOR ATOMIC TOOTHBRUSH MANUFACTURERS");
    });

    it("converts 'senator'", function() {
      substitution
        .transformText("U.S. budget talks hit snag, Republican senator says")
        .should.equal("U.S. budget talks hit snag, Republican elf-lord says");
    });

    it("converts 'Senators'", function() {
      substitution
        .transformText("10 GOP Senators Urge Obama To Fire Sebelius")
        .should.equal("10 GOP Elf-Lords Urge Obama To Fire Sebelius");
    });

    it("converts 'SENATORS'", function() {
      substitution
        .transformText("10 GOP SENATORS URGE OBAMA TO FIRE SEBELIUS")
        .should.equal("10 GOP ELF-LORDS URGE OBAMA TO FIRE SEBELIUS");
    });

    it("converts 'Car'", function() {
      substitution
        .transformText("Rounds Fired As Armed Police Stop Car")
        .should.equal("Rounds Fired As Armed Police Stop Cat");
    });

    it("converts 'CAR'", function() {
      substitution
        .transformText("ROUNDS FIRED AS ARMED POLICE STOP CAR")
        .should.equal("ROUNDS FIRED AS ARMED POLICE STOP CAT");
    });

    it("converts 'cars'", function() {
      substitution
        .transformText("Driverless cars set for Britain's streets")
        .should.equal("Driverless cats set for Britain's streets");
    });

    it("converts 'election'", function() {
      substitution
        .transformText("Australian election enters final stage")
        .should.equal("Australian pokébattle enters final stage");
    });

    it("converts 'Elections'", function() {
      substitution
        .transformText("Scottish Health Board Elections Abandoned")
        .should.equal("Scottish Health Board Pokébattles Abandoned");
    });

    it("converts 'ELECTIONS'", function() {
      substitution
        .transformText("SCOTTISH HEALTH BOARD ELECTIONS ABANDONED")
        .should.equal("SCOTTISH HEALTH BOARD POKÉBATTLES ABANDONED");
    });

    it("converts 'Congressional leaders'", function() {
      substitution
        .transformText("Congressional leaders dismiss clemency for Snowden")
        .should.equal("River spirits dismiss clemency for Snowden");
    });

    it("converts 'Congressional Leaders'", function() {
      substitution
        .transformText("Congressional Leaders Dismiss Clemency For Snowden")
        .should.equal("River Spirits Dismiss Clemency For Snowden");
    });

    it("converts 'CONGRESSIONAL LEADERS'", function() {
      substitution
        .transformText("CONGRESSIONAL LEADERS DISMISS CLEMENCY FOR SNOWDEN")
        .should.equal("RIVER SPIRITS DISMISS CLEMENCY FOR SNOWDEN");
    });

    it("converts 'Homeland Security'", function() {
      substitution
        .transformText("Former Pentagon Official to Be Chosen as Homeland Security Chief")
        .should.equal("Former Pentagon Official to Be Chosen as Homestar Runner Chief");
    });

    it("converts 'Homeland security'", function() {
      substitution
        .transformText("Homeland security has also recently taken off as an up-and-coming academic field.")
        .should.equal("Homestar runner has also recently taken off as an up-and-coming academic field.");
    });

    it("converts 'HOMELAND SECURITY'", function() {
      substitution
        .transformText("HOMELAND SECURITY HAS ALSO RECENTLY TAKEN OFF AS AN UP-AND-COMING ACADEMIC FIELD.")
        .should.equal("HOMESTAR RUNNER HAS ALSO RECENTLY TAKEN OFF AS AN UP-AND-COMING ACADEMIC FIELD.");
    });

    it("converts 'could not be reached for comment'", function() {
      substitution
        .transformText("Roman Polanski Could Not Be Reached For Comment")
        .should.equal("Roman Polanski Is Guilty And Everyone Knows It");
    });

    it("converts 'COULD NOT BE REACHED FOR COMMENT'", function() {
      substitution
        .transformText("ROMAN POLANSKI COULD NOT BE REACHED FOR COMMENT")
        .should.equal("ROMAN POLANSKI IS GUILTY AND EVERYONE KNOWS IT");
    });

  });
});


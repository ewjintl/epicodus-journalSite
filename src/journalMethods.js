
export function JournalLog() {
  this.journals = [];
  this.currentId = 0;
}
export function Journal(title, body) {
  this.title = title;
  this.body = body;
}      

JournalLog.prototype.addJournal = function(journal) {
  journal.id = this.assignId();
  this.journals.push(journal);
};

JournalLog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Journal.prototype.wordCount = function() {
  return this.body.split(" ").length;
};

Journal.prototype.vowelCount = function() {
  var totalLetters = this.body.split("");
  var vow = ["a", "i", "u", "e", "o"];
  var totalVows = [];
  for(var i = 0; i <= totalLetters.length-1; i++) {
    if (vow.includes(totalLetters[i])) {
      totalVows.push("-")
    }
  }
  return  totalVows.length;
};
Journal.prototype.consoCount = function() {
  var totalVowels =  this.body.split("");
  for (var i=0; i < totalVowels.length; i++){
    if (!["a", "i", "u", "e", "o", "."].includes(totalVowels[i])) {
      return totalVowels[i].length; 
    }
  }
};
Journal.prototype.getTeaser = function() {
  return this.body.split(" ").splice(0, 7);
};
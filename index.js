function theBeatlesPlay(musicians, instruments) {
  musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
  instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  theBeatlesPlay = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
   theBeatlesPlay[i] =musicians[i] + 'plays' + instruments[i]
      }
      return theBeatlesPlay
}

function johnLennonFacts (facts){
  facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"];
  var i;
  newFacts = [];
  while (i < facts.lenght){
    newFacts[i] = facts[i]
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
    var love = [];
    do {
        love.push("I love the Beatles!");
        num++;
    } while (num < 15);

    return love;
}


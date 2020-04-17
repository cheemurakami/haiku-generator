export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.line1Array = null;
    this.line2Array = null;
    this.line3Array = null;
    this.array = [];
  }

  stringBreaker() {
    this.line1Array = (this.line1.split(" "));
    this.line2Array = (this.line2.split(" "));
    this.line3Array = (this.line3.split(" "));
    return true;
  }

  syllableChecker(passedWord) {
    let word = passedWord.toLowerCase();
      if (word.length <= 3) {
        this.array.push(1);
        console.log(this.array);
      } else {
        word = word.replace(/([^laeiouy]es|ed)$/i, '');
        word = word.replace(/([.!?:;])$/i, '');
        word = word.replace(/^y/i, '');
        this.array.push(word.match(/[aeiouy]{1,2}/gi).length);
        console.log(typeof(this.array[0]));
      }
      console.log(this.numOfSyllable(this.array));
      
  }

  numOfSyllable(){
    let sumOfSyllable = 0
    this.array.forEach(function(){
      sumOfSyllable = this.array++;
    })
    return sumOfSyllable;
  }

  solver() {
    this.stringBreaker();
    console.log("Solver called line1array: ", this.line1Array);
    console.log("Solver called line2Array: ", this.line2Array);
    console.log("Solver called line3Array: ", this.line3Array);
    this.line1Array.forEach(myword => {
      this.syllableChecker(myword);
    });
    // this.line2Array.forEach(myword => {
    //   this.syllableChecker(myword);

    // });
    // this.line3Array.forEach(myword => {
    //   this.syllableChecker(myword);
      
    // });
  } 
}

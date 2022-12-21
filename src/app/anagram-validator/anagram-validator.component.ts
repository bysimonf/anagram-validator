import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram-validator',
  templateUrl: './anagram-validator.component.html',
  styleUrls: ['./anagram-validator.component.css']
})
export class AnagramValidatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  firstEnteredWord = ''
  secondEnteredWord = ''

  firstWordSorted = ''
  secondWordSorted = ''

  anagramFeedback = ''

  // 1. compare the length of two words
  // 2. sort each word alphabetically 
  // 3. compare the sorted words for strict equality

  compareLength = () => {
    if (this.firstEnteredWord.length === this.secondEnteredWord.length) {
      this.firstWordSorted = this.sortWord(this.firstEnteredWord)
      this.secondWordSorted = this.sortWord(this.secondEnteredWord)
      console.log(`First word sorted: ${this.firstWordSorted}`)
      console.log(`Second word sorted: ${this.secondWordSorted}`)
      this.compareWords()
    }
    else {
      this.anagramFeedback = 'this is not an anagram!'
    }
  }

  sortWord = (word: string): string => {
    for (let i = 0; i < word.length - 1; i++) { // first loop iterates through each character
      for (let j = 0; j < word.length - 1 - i; j++) { // second loop compares characters (the one adjacent to each other)
        if (word[j] > word[j + 1]) {
          let wordSorted = [...word] // using spread operator to convert string into array which is necessary
          const temp = word[j]
          wordSorted[j] = word[j + 1]
          wordSorted[j + 1] = temp
          word = wordSorted.join('') // convert array back to string        
        }
      }
    }
  
    return word
  }

  compareWords = () => {
    if (this.firstWordSorted === this.secondWordSorted) {
      this.anagramFeedback = 'this is an anagram!!!'
    }
    else {
      this.anagramFeedback = 'this is not an anagram!'
    }
  }

}

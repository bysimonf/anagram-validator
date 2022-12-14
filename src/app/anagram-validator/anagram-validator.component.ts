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

  // 1. compare the length
  // 2. sort alphabetically
  // 3. compare the sorted words

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
    let wordSorted = [...word] // using spread operator to convert string into array
    let temporaryLetterStorage = ''

    const compareCharacters = () => {
    
      for (let i = 0; i < wordSorted.length - 1; i++) {
        
        if (wordSorted[i] < wordSorted[i + 1] || wordSorted[i] === wordSorted[i + 1]) {
          console.log('letter already ordered')
        }
        else {
          temporaryLetterStorage = wordSorted[i + 1]
          wordSorted[i + 1] = wordSorted[i]
          wordSorted[i] = temporaryLetterStorage 
          
          compareCharacters() // using recursion to repeat the alphabetical sorting until complete
        }
      }
    }

    compareCharacters()
    
    let wordSortedString = wordSorted.join('') // convert array back to string
    return wordSortedString 
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

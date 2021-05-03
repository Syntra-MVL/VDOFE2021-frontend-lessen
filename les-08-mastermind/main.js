const app = new Vue({
  el: '#app',
  data() {
    return {
      maxGuesses: 2,
      colorArray: ['wit', 'geel', 'oranje', 'rood', 'paars', 'blauw', 'groen'],
      codeLength: 6,
      guessCount: 0,
      gameOver: false,
      won: false,
      solution: [],
      currentGuess: [],
      history: [],
    };
  },
  computed: {
    message() {
      if (!this.gameOver) {
        return '';
      }

      if (this.won) {
        return 'You won';
      }

      return 'You lost, try again';
    },
  },
  created() {
    this.solution = this.genAiCode();
  },
  methods: {
    chooseColor(index) {
      if (this.currentGuess.length === this.codeLength) {
        return;
      }

      this.currentGuess.push(index);
    },
    undoColor() {
      this.currentGuess.pop();
    },
    submit() {
      if (this.codeLength !== this.currentGuess.length) {
        return;
      }

      this.guessCount++;

      const correctNumberAndPlace = this.checkCorrectNumberAndPlace();
      const correctNumber = this.checkCorrectNumber(correctNumberAndPlace);
      this.history.push({
        guess: this.currentGuess,
        correctNumber,
        correctNumberAndPlace,
      });

      if (correctNumberAndPlace === this.codeLength) {
        this.gameOver = true;
        this.won = true;
      } else if (this.guessCount === this.maxGuesses) {
        this.gameOver = true;
        this.won = false;
      }

      this.currentGuess = [];
    },
    checkCorrectNumberAndPlace() {
      let correctNumberAndPlace = 0;

      for (let i = 0; i < this.codeLength; i++) {
        if (this.solution[i] === this.currentGuess[i]) {
          correctNumberAndPlace++;
        }
      }

      return correctNumberAndPlace;
    },
    checkCorrectNumber(correctNumberAndPlace) {
      let correctNumber = 0;

      let solCount = [0, 0, 0, 0, 0, 0, 0];
      let guessCount = [0, 0, 0, 0, 0, 0, 0];

      for (let i = 0; i < this.colorArray.length; i++) {
        for (let j = 0; j < this.codeLength; j++) {
          if (this.currentGuess[j] === i) {
            guessCount[i]++;
          }

          if (this.solution[j] === i) {
            solCount[i]++;
          }
        }

        correctNumber += Math.min(solCount[i], guessCount[i]);
      }

      return correctNumber - correctNumberAndPlace;
    },
    resetState() {
      this.guessCount = 0;
      this.gameOver = false;
      this.won = false;
      this.solution = this.genAiCode();
      this.currentGuess = [];
      this.history = [];
    },
    genAiCode() {
      let aiCode = [];
      for (let i = 0; i < this.codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * this.colorArray.length);
        aiCode.push(randomIndex);
      }
      return aiCode;
    },
  },
});

interface PlayerType {
  first: string;
  last: string;
  readonly fullName: string;
  getScore: number;
  setScore: number;
}

class Player implements PlayerType {
  protected _score = 0;
  constructor(
    public first: string,
    public last: string
  ) {}

  get fullName(): string {
    return `player's name: ${this.first} ${this.last}`;
  }

  get getScore() {
    return this._score;
  }

  set setScore(newScore: number) {
    if (newScore < 0) throw new Error("wrong number");
    this._score = newScore;
  }
}
class AdminPlayer extends Player implements PlayerType {
  public isAdmin = true;
  maxScore() {
    this._score = 99999;
  }
}

const player1 = new Player("namya", "Yamagata");
player1.fullName;
player1.setScore = 55;
player1.getScore;

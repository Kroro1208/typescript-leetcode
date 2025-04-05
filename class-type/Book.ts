interface BookType {
  readonly title: string;
  author: string;
}

class Book implements BookType {
  private checkoutStatus = false;
  constructor(
    readonly title: string,
    public author: string
  ) {}

  private set checkOut(checkout: boolean) {
    this.checkoutStatus = checkout;
  }

  public get checkOut() {
    return this.checkoutStatus;
  }

  public printCheckout() {
    this.checkOut = true; // setter使用
    return `Book's Info:  ${this.title} by ${this.author}`;
  }

  //   public checkOut() {
  //     this.checkout = this.toggleCheckout();
  //   }

  //   public isCheckout() {
  //     return this.checkout;
  //   }

  //   private toggleCheckout() {
  //     return !this.checkout;
  //   }
}

const bookInfo = new Book("Habit", "naoya");
bookInfo.printCheckout();

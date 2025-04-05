abstract class Employee {
  constructor(
    public first: string,
    public last: string
  ) {}
  abstract getPay(): number;
  greet() {
    console.log("Hello");
  }
}

class FullTimeEmpolyee extends Employee {
  constructor(
    first: string,
    last: string,
    private salary: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourRate: number,
    private hourWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourRate * this.hourWorked;
  }
}

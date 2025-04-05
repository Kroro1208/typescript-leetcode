interface EmployeeType {
  first: string;
  last: string;
  getPay(): number;
  greet(): void;
}

abstract class Employee implements EmployeeType {
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
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const naoya = new FullTimeEmpolyee("naoya", "yamagata", 5000);
const akira = new PartTimeEmployee("akira", "yamagata", 1200, 5);

console.log(naoya.getPay());
console.log(akira.getPay());

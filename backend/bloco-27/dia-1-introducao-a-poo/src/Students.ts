export default class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string, examsGrades: number[], worksGrades: number[]) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = examsGrades;
    this._worksGrades = worksGrades;
  };

  getName(): string {
    return this._name;
  }

  setName(newName: string): void {
    this._name = newName;
  }

  getEnrollment() {
    return this._enrollment;
  }

  setEnrollment(newEnrollment: string): void {
    this._enrollment = newEnrollment;
  }

  getExamsGrades() {
    return this._examsGrades;
  }

  setExamsGrades(newGrades: number[]): void {
    if (newGrades.length > 4) {
      throw new Error ('MAX 4 EXAMS GRADES ALLOWED');
    }
    
    this._examsGrades = newGrades;
  }

  getWorkGrades() {
    return this._worksGrades;
  }

  setWorksGrades(newGrades: number[]): void {
    if (newGrades.length > 2) {
      throw new Error ('MAX 2 WORKS GRADES ALLOWED');
    }

    this._worksGrades = newGrades;
  }

  sumGrades(): number {
    const grades = [... this._examsGrades, ... this._worksGrades];
    let totalGrades = 0;
    grades.forEach((grade) => totalGrades += grade);

    return totalGrades;
  }

  avgGrades(): number {
    const grades = this.sumGrades();
    const gradesAmount = this._examsGrades.length + this._worksGrades.length;
    const avgGrades = grades / gradesAmount;

    return avgGrades;
  }
}

const personOne = new Student('202001011', 'Maria da Silva', [25, 20, 23, 23], [45, 45]);

console.log(personOne.avgGrades());

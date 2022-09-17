export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(newDate: Date) {
    this._birthDate = newDate;
  }

  private validateName(name: string): void {
    if (name.length < 3) {
      throw new Error('INVALID_NAME');
    }
  }

  private validateDate(date: Date): void {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('INVALID_DATE');
    }
  }
}
export class FieldValidator {
  static isNotEmpty(val: string) {
    return !!val;
  }
  static isEmail(val: string) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
  }

  static isLength(min: number = 0, max: number = 100000) {
    return (val: string) => val.length > min && val.length < max;
  }
}

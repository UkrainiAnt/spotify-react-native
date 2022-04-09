export class FieldValidator {
	static isNotEmpty(val: string) {
		return !!val;
	}
	static isEmail(val: string) {
		// eslint-disable-next-line no-useless-escape
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val);
	}

	static isLength(min = 0, max = 100000) {
		return (val: string) => val.length > min && val.length < max;
	}
}

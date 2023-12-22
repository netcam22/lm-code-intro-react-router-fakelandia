export const validateInput = 
(title: string, regex: Array<RegExp>, value: string, message: Array<string>): Array<string> => {

	const errorArray : Array<string> = [];
	if (value === "") {
		errorArray.push(`${title} required`);
	}
	else {
		for (let i = 0; i< regex.length; i++) {
			if (!value.match(regex[i])) {
				errorArray.push(message[i]);
			}
		}
	}
	return errorArray;
};
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
export const round = (number, precision) => {
    let shift = (number, precision, reverseShift) => {
        if (reverseShift) {
            precision = -precision;
        }
        let numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
    };
    return shift(Math.round(shift(number, precision, false)), precision, true);
};

export const stringifyXp = (xp) => {
    return `${xp}xp`;
};

export function upperCaseFirstCharacter(string) {
    return string[0].toUpperCase() + string.substr(1);
}
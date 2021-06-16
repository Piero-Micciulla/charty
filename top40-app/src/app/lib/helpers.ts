export function generateArrayOfYears() {
    var max = new Date().getFullYear();
    var min = 1965;
    var years = [];
    for (var i = max; i >= min; i--) {
        years.push(i);
    }
    return years;
}

export function generateArrayOfWeeks() {
    var min = 1;
    var max = 53;
    var weeks = [];
    for (let i = min; i <= max; i++) {
        weeks.push(i);
    }
    return weeks;
}

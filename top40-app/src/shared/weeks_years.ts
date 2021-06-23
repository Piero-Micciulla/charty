export function createYears(): number[] {
    const max = new Date().getFullYear();
    const min = 1965;
    const years = [];
    for (let i = max; i >= min; i--) {
        years.push(i);
    }
    return years;
}

export function createWeeks(): number[] {
    const min = 1;
    const max = 53;
    const weeks = [];
    for (let i = min; i <= max; i++) {
        weeks.push(i);
    }
    return weeks;
}

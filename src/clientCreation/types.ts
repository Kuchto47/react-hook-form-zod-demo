// eslint-disable-next-line @typescript-eslint/no-unused-vars
type MonthOriginal = [`${number}`, Capitalize<string>];

export type Month = [MonthValue, MonthLabel];

type MonthValue = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

type MonthLabel = 'January' | 'February' | 'March' | 'April' | 'May' | 'June' | 'July' | 'August' | 'September' | 'October' | 'November' | 'December';
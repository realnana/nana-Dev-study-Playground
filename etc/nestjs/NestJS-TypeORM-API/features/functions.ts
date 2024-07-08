const add = (a: number,b: number): number => {
    return a+b;
};

const subtract = (a: number, b: number): number => {
    return a-b;
};

// 익명 함수
function divide(a: number, b: number): number {
    return a/b;
}

const multiply = function(a: number, b: number): number {
    return a*b;
}


// void 와 never: 특수타입
const logger = (message: string): void => {
    console.log(message);
    return null;
    // return undefined;
};

const throwError = (message: string): never => {
    throw new Error(message);
};

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

const logWeather = (forecast: {date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
};

logWeather(todaysWeather);


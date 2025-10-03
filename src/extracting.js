import { currCondition, daysCondition,hoursCondition } from "./objects";

export async function extractCurrentData(data){

    const address = await data.address;
    const current = await data.currentConditions;
    const condition = await current.conditions;
    const dateTime = await current.datetime;
    const description = await data.description;
    const feelsLike = await current.feelslike;
    const snow = await current.snow;
    const sunrise = await current.sunrise;
    const sunset = await current.sunset;
    const temp = await current.temp;
    const windSpeed = await current.windspeed;
    const cloudCover = await current.cloudcover;
    const currConditions = currCondition(address,condition,dateTime,description
                                        ,feelsLike,snow,sunrise,
                                         sunset,temp,
                                        windSpeed,cloudCover);
    //console.log(currConditions);
    return currConditions;
}
let dayCondition = [];

export async function extractFifteenDaysData(data){
    for(let i = 0; i < 15; i++){
        const days = await data.days[i];
        const condition = await days.conditions;
        const dateTime = await days.datetime;
        const description = await days.description;
        const feelsLike = await days.feelslike;
        const hours = await extracthourlyData(days);
        const snow = await days.snow;
        const sunrise = await days.sunrise;
        const sunset = await days.sunset;
        const temp = await days.temp;
        const windSpeed = await days.windspeed;
        const cloudCover = await days.cloudcover;
        const tempMax = await days.tempmax;
        const tempMin = await days.tempmin;
        dayCondition[i] = daysCondition(condition,dateTime,description,
                                feelsLike,hours,snow,sunrise,sunset,temp,windSpeed,
                                cloudCover,tempMax,tempMin)
    }
    console.log("condition",dayCondition);
    return dayCondition;
}

let hourCondition = [];

export async function extracthourlyData(day){
    for(let i = 0; i < 24; i++){
        const hour = await day.hours[i];
        const condition = await hour.conditions;
        const dateTime = await hour.datetime;
        const description = await hour.description;
        const feelsLike = await hour.feelslike;
        const snow = await hour.snow;
        const temp = await hour.temp;
        const windSpeed = await hour.windspeed;
        const cloudCover = await hour.cloudcover;
        hourCondition[i] = hoursCondition(condition,dateTime,description,
                                        feelsLike,snow,temp,windSpeed,cloudCover)
    }
    return hourCondition;
}
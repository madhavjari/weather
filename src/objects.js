export function currCondition(condition,dateTime,description,feelsLike,snow,sunrise,sunset,temp,windSpeed,cloudCover){
    return {condition,
            dateTime,
            description,
            feelsLike,
            snow,
            sunrise,
            sunset,
            temp,
            windSpeed,
            cloudCover};
}

export function daysCondition(condition,dateTime,description,
                                feelsLike,hours,snow,sunrise,sunset,temp,windSpeed,
                                cloudCover,tempMax,tempMin){
    return {condition,
            dateTime,
            description,
            feelsLike,
            hours,
            snow,
            sunrise,
            sunset,
            temp,
            windSpeed,
            cloudCover,
            tempMax,
            tempMin};
}

export function hoursCondition(condition,dateTime,description,
                            feelsLike,snow,temp,windSpeed,cloudCover){
    return  {condition,
            dateTime,
            description,
            feelsLike,
            snow,
            temp,
            windSpeed,
            cloudCover
    }
}
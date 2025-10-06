export function currCondition(address,condition,dateTime,description,feelsLike,snow,sunrise,sunset,temp,icon,windSpeed,cloudCover){
    return {address,
            condition,
            dateTime,
            description,
            feelsLike,
            snow,
            sunrise,
            sunset,
            temp,
            icon,
            windSpeed,
            cloudCover};
}

export function daysCondition(condition,dateTime,description,
                                feelsLike,hours,icon,snow,sunrise,sunset,temp,windSpeed,
                                cloudCover,tempMax,tempMin){
    return {condition,
            dateTime,
            description,
            feelsLike,
            hours,
            icon,
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
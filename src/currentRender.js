import { extractCurrentData } from "./extracting";

export async function currentDisplay(data){

    const currCondition = await extractCurrentData(data);

    const article = document.querySelector('article');

    const currCard = document.createElement('div');
    currCard.classList.add('card');
    article.appendChild(currCard);

    const articleHeader = document.createElement('div');
    articleHeader.classList.add('curr-header');

    const articleMain = document.createElement('div');
    articleMain.classList.add('curr-main');

    const articleDetail = document.createElement('div');
    articleDetail.classList.add('curr-detail');

    currCard.append(articleHeader,articleMain,articleDetail);

    // const currConditions = currCondition(address,condition,dateTime,description
    //                                         ,feelsLike,snow,sunrise,
    //                                          sunset,temp,
    //                                         windSpeed,cloudCover)

    const currHeader = document.createElement('div');
    currHeader.textContent = 'Current Condition';

    const timeDisplay = document.createElement('div');
    timeDisplay.textContent = await currCondition.dateTime;;

    articleHeader.append(currHeader,timeDisplay);

    const iconName = await currCondition.icon;
    const imageURL = await import(`../img/WeatherIcons-main/${iconName}.png`);
    const weatherImage = document.createElement('img');
    weatherImage.src = await imageURL.default;

    const currTemp = document.createElement('div');
    currTemp.textContent = await currCondition.temp;

    const feelTemp = document.createElement('div');
    feelTemp.textContent = 'Real feel '+await currCondition.feelsLike;

    const currDes = document.createElement('div');
    currDes.textContent = await currCondition.condition;

    articleMain.append(weatherImage,currTemp,feelTemp,currDes);

    const windSpeed = document.createElement('div');
    windSpeed.textContent = 'Windspeed: ' + await currCondition.windSpeed;

    const sunrise = document.createElement('div');
    sunrise.textContent = 'Sunrise: '  + await currCondition.sunrise;

    const sunset = document.createElement('div');
    sunset.textContent = 'Sunset: ' + await currCondition.sunset;

    const cloudCover = document.createElement('div');
    cloudCover.textContent = 'Cloud Cover: ' + await currCondition.cloudCover;

    articleDetail.append(windSpeed,sunrise,sunset,cloudCover);
}
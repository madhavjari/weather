import { extractCurrentData, extractFifteenDaysData } from "./extracting";
import firstLetterCapital from "./correctCase";

export async function currentDisplay(data){

    const currCondition = await extractCurrentData(data);

    const article = document.querySelector('article');

    const cityName = document.createElement('h2');
    cityName.textContent = firstLetterCapital(currCondition.address);

    const currCard = document.createElement('div');
    currCard.classList.add('card');
    article.append(cityName,currCard);

    const articleHeader = document.createElement('div');
    articleHeader.classList.add('curr-header');

    const articleMain = document.createElement('div');
    articleMain.classList.add('curr-main');

    const articleDetail = document.createElement('div');
    articleDetail.classList.add('curr-detail');

    currCard.append(articleHeader,articleMain,articleDetail);

    const currHeader = document.createElement('div');
    currHeader.textContent = 'Current Condition';

    const timeDisplay = document.createElement('div');
    timeDisplay.textContent = await currCondition.dateTime;

    articleHeader.append(currHeader,timeDisplay);

    const iconName = await currCondition.icon;
    const imageURL = await import(`../img/WeatherIcons-main/${iconName}.png`);
    const weatherImage = document.createElement('img');
    weatherImage.src = await imageURL.default;

    const currTemp = document.createElement('div');
    currTemp.textContent = await currCondition.temp + '\u00B0'+ 'C';

    const feelTemp = document.createElement('div');
    feelTemp.textContent = 'Real feel '+await currCondition.feelsLike +'\u00B0'+ 'C';

    const currDes = document.createElement('div');
    currDes.textContent = await currCondition.condition;

    articleMain.append(weatherImage,currTemp,feelTemp,currDes);

    const windSpeed = document.createElement('div');
    const sunrise = document.createElement('div');
    const sunset = document.createElement('div');
    const cloudCover = document.createElement('div');
    articleDetail.append(windSpeed,sunrise,sunset,cloudCover);

    const windSpeed1 = document.createElement('div');
    const windSpeed2 = document.createElement('div');
    windSpeed1.textContent = 'Windspeed:';
    windSpeed2.textContent = await currCondition.windSpeed + ' km/hr';    

    const sunrise1 = document.createElement('div');
    const sunrise2 = document.createElement('div');
    sunrise1.textContent = 'Sunrise:';
    sunrise2.textContent = await currCondition.sunrise;

    const sunset1 = document.createElement('div');
    const sunset2 = document.createElement('div');
    sunset1.textContent = 'Sunset:';
    sunset2.textContent = await currCondition.sunset;

    const cloudCover1 = document.createElement('div');
    const cloudCover2 = document.createElement('div');
    cloudCover1.textContent = 'Cloud Cover:'
    cloudCover2.textContent = await currCondition.cloudCover;

    windSpeed.append(windSpeed1,windSpeed2);
    sunrise.append(sunrise1,sunrise2);
    sunset.append(sunset1,sunset2);
    cloudCover.append(cloudCover1,cloudCover2);
    
}

export async function nextDays(data){

    const fifteenDaysData = await extractFifteenDaysData(data);

    const nextCard = document.createElement('div');
    nextCard.classList.add('next-card');

    const nextInfo = document.createElement('h2');
    nextInfo.textContent = 'Weather for Next 15 days';

    const article = document.querySelector('article');
    article.appendChild(nextCard);

    nextCard.appendChild(nextInfo);

    for(const day of fifteenDaysData){

        const card = document.createElement('div');
        card.classList.add('card');
        nextCard.appendChild(card);

        const articleHeader = document.createElement('div');
        articleHeader.classList.add('curr-header');

        const articleMain = document.createElement('div');
        articleMain.classList.add('curr-main');

        const articleDetail = document.createElement('div');
        articleDetail.classList.add('curr-detail');

        card.append(articleHeader,articleMain,articleDetail);

        const currHeader = document.createElement('div');
        currHeader.textContent = 'Date';

        const timeDisplay = document.createElement('div');
        timeDisplay.textContent = await day.dateTime;

        articleHeader.append(currHeader,timeDisplay);

        const iconName = await day.icon;
        const imageURL = await import(`../img/WeatherIcons-main/${iconName}.png`);
        const weatherImage = document.createElement('img');
        weatherImage.src = await imageURL.default;

        const maxTemp = document.createElement('div');
        maxTemp.textContent = await day.tempMax +'\u00B0'+ 'C';

        const minTemp = document.createElement('div');
        minTemp.textContent = await day.tempMin + '\u00B0'+ 'C';

        const des = document.createElement('div');
        des.textContent = await day.condition;

        articleMain.append(weatherImage,maxTemp,minTemp,des);

        const windSpeed = document.createElement('div');
        const sunrise = document.createElement('div');
        const sunset = document.createElement('div');
        const cloudCover = document.createElement('div');
        articleDetail.append(windSpeed,sunrise,sunset,cloudCover);

        const windSpeed1 = document.createElement('div');
        const windSpeed2 = document.createElement('div');
        windSpeed1.textContent = 'Windspeed:';
        windSpeed2.textContent = await day.windSpeed + ' km/hr';    

        const sunrise1 = document.createElement('div');
        const sunrise2 = document.createElement('div');
        sunrise1.textContent = 'Sunrise:';
        sunrise2.textContent = await day.sunrise;

        const sunset1 = document.createElement('div');
        const sunset2 = document.createElement('div');
        sunset1.textContent = 'Sunset:';
        sunset2.textContent = await day.sunset;

        const cloudCover1 = document.createElement('div');
        const cloudCover2 = document.createElement('div');
        cloudCover1.textContent = 'Cloud Cover:'
        cloudCover2.textContent = await day.cloudCover;

        windSpeed.append(windSpeed1,windSpeed2);
        sunrise.append(sunrise1,sunrise2);
        sunset.append(sunset1,sunset2);
        cloudCover.append(cloudCover1,cloudCover2);
    }
}
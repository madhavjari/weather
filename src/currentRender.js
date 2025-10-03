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

    const time = await currCondition.dateTime;

    const currHeader = document.createElement('div');
    currHeader.textContent = 'Current Condition';

    const timeDisplay = document.createElement('div');
    timeDisplay.textContent = time;

    articleHeader.append(currHeader,timeDisplay);

}
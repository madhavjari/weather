import { extractCurrentData, extractFifteenDaysData} from "./extracting";
import fetchApi from "./fetch";
import './style.css';
import { currentDisplay } from "./render";
import { nextDays } from "./render";

const form = document.querySelector('form');

form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const article = document.querySelector('article');
    article.innerHTML = '';
    const cityName = document.getElementById('city');
    const location = cityName.value;

    const data = await fetchApi(location);
    console.log(data);

    if(data){
        extractCurrentData(data);
        extractFifteenDaysData(data);
        currentDisplay(data);
        nextDays(data);
    }
    else alert('No such city found');
    
    form.reset();
})
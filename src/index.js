import { extractCurrentData, extractFifteenDaysData} from "./extracting";
import fetchApi from "./fetch";
import './style.css';
import { currentDisplay } from "./currentRender";

const form = document.querySelector('form');

form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const cityName = document.getElementById('city');
    const location = cityName.value;

    const data = await fetchApi(location);
    console.log(data);

    if(data){
        extractCurrentData(data);
        extractFifteenDaysData(data);
        currentDisplay(data);
    }
    else alert('No such city found');
    
    form.reset();
})
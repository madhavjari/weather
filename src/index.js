import { extractCurrentData, extractFifteenDaysData} from "./extracting";
import fetchApi from "./fetch";
import './style.css';

const form = document.querySelector('form');

form.addEventListener('submit', async(e) =>{
    e.preventDefault();
    const cityName = document.getElementById('city');
    const location = cityName.value;
    const data = await fetchApi(location);
    if(data){
        extractCurrentData(data);
        extractFifteenDaysData(data);
    }
    else alert('No such city found');
    
    form.reset();
})
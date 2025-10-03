const apiKey = '5JMTCTA9S9ETG6LGGPETLMZAK';

export default async function fetchApi(location){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${apiKey}`);
        const data = await response.json();
        // if (data.address === 'undefined'){
        //     console.log("No such city found");
        //     return;
        // }
        return data;
    }
    catch{
        console.log("No such city found");
    }
}

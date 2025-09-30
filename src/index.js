const apiKey = '5JMTCTA9S9ETG6LGGPETLMZAK';

async function fetchApi(location = 'surat'){
    try{
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&contentType=json&key=${apiKey}`);
        const data = await response.json();
        console.log(data);
        console.log(data.resolvedAddress);
        return data;
    }
    catch{
        throw Error ('No such city');
    }
}

fetchApi();




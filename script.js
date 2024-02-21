let selectedTicker;
let nyse_tickers_data;
let nasdaq_tickers_data;

document.addEventListener("DOMContentLoaded", async ()=>{
    await fetchNYSETickerData();
    await fetchNasdaqTickerData();
    renderNYSETicker();
    renderNasdaqTicker();
    renderNYSETicker2();
    renderNasdaqTicker2();
    renderDataType();
    await fetchPriceData1();
    await fetchPriceData2();
    transformData1();
    transformData2();
    renderChart(1);
    renderChart(2);

})

async function fetchNYSETickerData(){
    let response = await axios.get("./nyse_ticker.json");
    nyse_tickers_data = response.data;
}

async function fetchNasdaqTickerData(){
    let response = await axios.get("./nasdaq_ticker.json");
    nasdaq_tickers_data = response.data;
}

function renderNYSETicker(){
    for (let nyse_ticker of nyse_tickers_data){
        let tickerHTML = document.createElement("option");
        tickerHTML.value = nyse_ticker;
        tickerHTML.innerText = nyse_ticker;
        document.querySelector("#ticker-option1").appendChild(tickerHTML);
    }
}

function renderNYSETicker2(){
    for (let nyse_ticker of nyse_tickers_data){
        let tickerHTML = document.createElement("option");
        tickerHTML.value = nyse_ticker;
        tickerHTML.innerText = nyse_ticker;
        document.querySelector("#ticker-option3").appendChild(tickerHTML);
    }
}

function renderNasdaqTicker(){
    for (let nasdaq_ticker of nasdaq_tickers_data){
        let tickerHTML = document.createElement("option");
        tickerHTML.value = nasdaq_ticker;
        tickerHTML.innerText = nasdaq_ticker;
        document.querySelector("#ticker-option2").appendChild(tickerHTML);
    }
}

function renderNasdaqTicker2(){
    for (let nasdaq_ticker of nasdaq_tickers_data){
        let tickerHTML = document.createElement("option");
        tickerHTML.value = nasdaq_ticker;
        tickerHTML.innerText = nasdaq_ticker;
        document.querySelector("#ticker-option4").appendChild(tickerHTML);
    }
}

function renderDataType(){
    for (let dataType of timeSeriesDataType){
        let dataTypeHTML = document.createElement("option");
        dataTypeHTML.value = dataType;
        dataTypeHTML.innerText = dataType;
        document.querySelector("#data-type-select").appendChild(dataTypeHTML);
    }
}

// Event listeners

let chosen1 = document.querySelector("#ticker-option1");
let chosen2 = document.querySelector("#ticker-option2");
let chosen3 = document.querySelector("#ticker-option3");
let chosen4 = document.querySelector("#ticker-option4");
let chosenDataType = document.querySelector("#data-type-select")

chosen1.addEventListener("change", changeTargetStock1);
chosen2.addEventListener("change", changeTargetStock1);
chosen3.addEventListener("change", changeTargetStock2);
chosen4.addEventListener("change", changeTargetStock2);
chosenDataType.addEventListener("change", changeDataTargetType);

function changeTargetStock1(event){
    tickerSymbol1= event.target.value;
    console.log(tickerSymbol1);
    fetchPriceData1()
    transformData1();
    updateChart(1)
}

function changeTargetStock2(event){
    tickerSymbol2= event.target.value;
    console.log(tickerSymbol2);
    fetchPriceData2()
    transformData2();
    updateChart(2)
}

function changeDataTargetType(event){
    targetDataType= event.target.value;
    console.log(targetDataType);
    fetchPriceData1();
    fetchPriceData2();
    transformData1();
    transformData2();
    updateChart(1)
    updateChart(2)    
}



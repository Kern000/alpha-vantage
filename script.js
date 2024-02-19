let selectedTicker;
let nyse_tickers_data;
let nasdaq_tickers_data;

document.addEventListener("DOMContentLoaded", async ()=>{
    await fetchNYSEData();
    await fetchNasdaqData();
    renderNYSETicker();
    renderNasdaqTicker();
    renderNYSETicker2();
    renderNasdaqTicker2();
    fetchDataTesting();
})

async function fetchNYSEData(){
    let response = await axios.get("./nyse_ticker.json");
    nyse_tickers_data = response.data;
}

async function fetchNasdaqData(){
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


}
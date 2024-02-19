// <!-- NASDAQ Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nasdaq/nasdaq_tickers.json -->
// <!-- NYSE Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nyse/nyse_tickers.json -->
// <!-- Last update 17/02/2024 -->

let BASE_URL="https://www.alphavantage.co/"
let API_KEY="SDB2MSLQTZB1X61K"

let tickerSymbol1="A";
let tickerSymbol2="A";
let timeSeriesType1="TIME_SERIES_DAILY";

let timeSeriesDataType = ["TIME_SERIES_DAILY","TIME_SERIES_DAILY_ADJUSTED", "TIME_SERIES_WEEKLY", "TIME_SERIES_WEEKLY_ADJUSTED", "TIME_SERIES_MONTHLY", "TIME_SERIES_MONTHLY_ADJUSTED"];

let query1 = `query?function=${timeSeriesType1}&symbol=${tickerSymbol1}&apikey=`
let query2 = `query?function=${timeSeriesType1}&symbol=${tickerSymbol2}&apikey=`

let fetchDataTesting = async () => {
 
    let response = await axios.get(BASE_URL + query1 + API_KEY);
    console.log(response.data);
    
};






// <!-- NASDAQ Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nasdaq/nasdaq_tickers.json -->
// <!-- NYSE Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nyse/nyse_tickers.json -->
// <!-- Last update 17/02/2024 -->

let BASE_URL="https://www.alphavantage.co/"
let API_KEY="WUVCJQQAP6M609Y3"

let tickerSymbol1="A";
let tickerSymbol2="A";
let timeSeriesType1="TIME_SERIES_DAILY";

let timeSeriesDataType = ["TIME_SERIES_DAILY","TIME_SERIES_DAILY_ADJUSTED", "TIME_SERIES_WEEKLY", "TIME_SERIES_WEEKLY_ADJUSTED", "TIME_SERIES_MONTHLY", "TIME_SERIES_MONTHLY_ADJUSTED"];

let query1 = `query?function=${timeSeriesType1}&symbol=${tickerSymbol1}&apikey=`
let query2 = `query?function=${timeSeriesType1}&symbol=${tickerSymbol2}&apikey=`

let fetchedDailyData;
let transformedData = [];
let volumes = [];
let timeStamps = [];
let combinedVolumesTimeStamps=[];

let fetchDataTestingDaily = async () => {
 
    let response = await axios.get(BASE_URL + query1 + API_KEY);
    console.log(response.data);
    fetchedDailyData = response.data["Time Series (Daily)"];
};

var dummyData = {
    "Meta Data": {
      "1. Information": "Daily Prices (open, high, low, close) and Volumes",
      "2. Symbol": "AAPL",
      "3. Last Refreshed": "2024-02-20",
      "4. Output Size": "Compact",
      "5. Time Zone": "US/Eastern"
    },
    "Time Series (Daily)": {
      "2024-02-20": {
        "1. open": "174.60",
        "2. high": "176.45",
        "3. low": "174.17",
        "4. close": "175.80",
        "5. volume": "38944787"
      },
      "2024-02-19": {
        "1. open": "172.40",
        "2. high": "175.45",
        "3. low": "172.10",
        "4. close": "175.30",
        "5. volume": "43282437"
      },
      "2024-02-18": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "170.10",
        "4. close": "172.30",
        "5. volume": "43283000"
      },
      "2024-02-17": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "169.10",
        "4. close": "169.30",
        "5. volume": "43283000"
      },
      "2024-02-20": {
        "1. open": "174.60",
        "2. high": "176.45",
        "3. low": "174.17",
        "4. close": "175.80",
        "5. volume": "38944787"
      },
      "2024-02-19": {
        "1. open": "172.40",
        "2. high": "175.45",
        "3. low": "172.10",
        "4. close": "175.30",
        "5. volume": "43282437"
      },
      "2024-02-18": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "170.10",
        "4. close": "172.30",
        "5. volume": "43283000"
      },
      "2024-02-17": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "169.10",
        "4. close": "169.30",
        "5. volume": "43283000"
      },
      "2024-02-16": {
        "1. open": "174.60",
        "2. high": "176.45",
        "3. low": "174.17",
        "4. close": "175.80",
        "5. volume": "38944787"
      },
      "2024-02-15": {
        "1. open": "172.40",
        "2. high": "175.45",
        "3. low": "172.10",
        "4. close": "175.30",
        "5. volume": "43282437"
      },
      "2024-02-14": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "170.10",
        "4. close": "172.30",
        "5. volume": "43283000"
      },
      "2024-02-13": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "169.10",
        "4. close": "169.30",
        "5. volume": "43283000"
      },
      "2024-02-12": {
        "1. open": "174.60",
        "2. high": "176.45",
        "3. low": "174.17",
        "4. close": "175.80",
        "5. volume": "38944787"
      },
      "2024-02-11": {
        "1. open": "172.40",
        "2. high": "175.45",
        "3. low": "172.10",
        "4. close": "175.30",
        "5. volume": "43282437"
      },
      "2024-02-10": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "170.10",
        "4. close": "172.30",
        "5. volume": "43283000"
      },
      "2024-02-09": {
        "1. open": "171.40",
        "2. high": "172.45",
        "3. low": "169.10",
        "4. close": "169.30",
        "5. volume": "43283000"
      }
  }
}

let sortedFetchedDailyKeys;
let fetchedDailyKeys;

function transformData(){

    fetchedDailyKeys = Object.keys(fetchedDailyData);

    // let fetchedDailyKeys = Object.keys(dummyData["Time Series (Daily)"]);
    sortedFetchedDailyKeys = fetchedDailyKeys.sort();  
    // fetchedDailyData = dummyData["Time Series (Daily)"];
    

    for (let i=0; i< fetchedDailyKeys.length; i++){

        let dataPointTempHolder = [];
        let pricePointTempHolder = [];

        let convertedTimeStamp = new Date(sortedFetchedDailyKeys[i]).getTime();
        dataPointTempHolder.push(convertedTimeStamp);
        
        pricePointTempHolder.push(fetchedDailyData[sortedFetchedDailyKeys[i]]["1. open"]);
        pricePointTempHolder.push(fetchedDailyData[sortedFetchedDailyKeys[i]]["2. high"]);
        pricePointTempHolder.push(fetchedDailyData[sortedFetchedDailyKeys[i]]["3. low"]);
        pricePointTempHolder.push(fetchedDailyData[sortedFetchedDailyKeys[i]]["4. close"]);
        volumes.push(parseInt(fetchedDailyData[sortedFetchedDailyKeys[i]]["5. volume"]));

        dataPointTempHolder.push(pricePointTempHolder);
        transformedData.push(dataPointTempHolder);
        timeStamps.push(convertedTimeStamp);

        let volumesTimeSeries = [convertedTimeStamp, parseInt(fetchedDailyData[sortedFetchedDailyKeys[i]]["5. volume"])]
        combinedVolumesTimeStamps.push(volumesTimeSeries);
    }
}

function renderChart(chartNumber){

    let options = {
        "series":[{
            "data": transformedData
        }],
        "chart":{
            "type": "candlestick",
            "height": "250px",
            "id":`candles${chartNumber}`,
            "toolbar":{
                "autoSelected":"pan",
                "show": false
            },
            "zoom":{
                "enabled":true,
                "type": "x",
            }
        },
        "xaxis": {
            "type":"datetime"
        }
    }

    let optionsVolumeBar = {
        "series": [
            {
                "name":'volume',
                "data": combinedVolumesTimeStamps
            }
        ],
        "chart": {
            "height": "150px",
            "type": "bar",
            "brush": {              //brush syncs to target chart id
                "enabled": true,    //portion selection allowed
                "target": `candles${chartNumber}`
            },
            "toolbar":{
                "show": false
            },
            "selection":{
                "enabled": true,
                "xaxis":{
                            "min": (new Date(sortedFetchedDailyKeys[0]).getTime()),
                            "max": (new Date(sortedFetchedDailyKeys[sortedFetchedDailyKeys.length-1]).getTime()),
                        },
                "fill":{
                    "color":"#ccc",
                    "opacity": 0.4
                },
                "stroke":{
                    "color": '#0D47A1'
                }
            }
        },
        "plotOptions":{
            "bar":{
                "columnWidth": "80%",
                "colors": {
                    "ranges": [
                        {
                            "from": 0,
                            "to": 10000000000000,
                            "color": '#007FFF'
                        }
                    ]
                }

            }
        },
        "stroke":{
            "width":0   //remove bar border
        },
        "xaxis":{
            "type":"datetime"
        },
        "yaxis":{
            "labels":{
                "show": true,
                "maxWidth": 50,
                "offsetX": 10
            }
        }
    }

    let targetElement = document.querySelector(`#chart${chartNumber}`);
    let targetBarElement = document.querySelector(`#chart-bar${chartNumber}`);
    
    console.log(targetBarElement);

    let chart = new ApexCharts(targetElement, options);
    chart.render();
    let chartBar = new ApexCharts(targetBarElement, optionsVolumeBar);
    chartBar.render();
}












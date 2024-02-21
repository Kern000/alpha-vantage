// <!-- NASDAQ Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nasdaq/nasdaq_tickers.json -->
// <!-- NYSE Ticker credits https://github.com/rreichel3/US-Stock-Symbols/blob/main/nyse/nyse_tickers.json -->
// <!-- Last update 17/02/2024 -->

let BASE_URL="https://www.alphavantage.co/"
let API_KEY="FNMFR3MCCVB5LUWP"

let tickerSymbol1="A";
let tickerSymbol2="A";

let timeSeriesDataType = ["TIME_SERIES_DAILY",
                          "TIME_SERIES_WEEKLY", 
                          "TIME_SERIES_WEEKLY_ADJUSTED", 
                          "TIME_SERIES_MONTHLY", 
                          "TIME_SERIES_MONTHLY_ADJUSTED"];

let timeSeriesPairing = {
  "TIME_SERIES_DAILY": "Time Series (Daily)",
  "TIME_SERIES_WEEKLY": "Weekly Time Series",
  "TIME_SERIES_WEEKLY_ADJUSTED": "Weekly Adjusted Time Series",
  "TIME_SERIES_MONTHLY": "Monthly Time Series",
  "TIME_SERIES_MONTHLY_ADJUSTED": "Monthly Adjusted Time Series"
}

let targetDataType="TIME_SERIES_DAILY";

function findDataTypeIndex(targetedDataType){
  let index = timeSeriesDataType.findIndex((element)=> element === targetedDataType);
  console.log(index);
  return index;
}

let fetchedPriceData1;
let fetchedPriceData2;
let transformedData1 = [];
let transformedData2 = [];
let volumes1 = [];
let volumes2 = [];
let timeStamps1 = [];
let timeStamps2 = [];
let combinedVolumesTimeStamps1=[];
let combinedVolumesTimeStamps2=[];

let fetchPriceData1 = async () => {

    console.log("fetch data point 1 hit")
    console.log(findDataTypeIndex(targetDataType));
    let query1 = `query?function=${timeSeriesDataType[findDataTypeIndex(targetDataType)]}&symbol=${tickerSymbol1}&apikey=`
    console.log("after fetch data point 1 hit")
    let response = await axios.get(BASE_URL + query1 + API_KEY);
    console.log(response.data);
    fetchedPriceData1 = response.data[timeSeriesPairing[targetDataType]];
    console.log("fetchedPriceData1");
};

let fetchPriceData2 = async () => {

  let query2 = `query?function=${timeSeriesDataType[findDataTypeIndex(targetDataType)]}&symbol=${tickerSymbol2}&apikey=`
  let response = await axios.get(BASE_URL + query2 + API_KEY);
  console.log(response.data);
  fetchedPriceData2 = response.data[timeSeriesPairing[targetDataType]];
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

let sortedFetchedKeys1;
let sortedFetchedKeys2;
let fetchedKeys1;
let fetchedKeys2;

function transformData1(){

    fetchedKeys1 = Object.keys(fetchedPriceData1);
    console.log("fetchedKeys1 in transformData", fetchedKeys1)

    sortedFetchedKeys1 = fetchedKeys1.sort();     
    transformedData1 = [];
    volumes1 = [];
    timeStamps1 = [];
    combinedVolumesTimeStamps1 = [];

    for (let i=0; i< fetchedKeys1.length; i++){

        let dataPointTempHolder1 = [];
        let pricePointTempHolder1 = [];

        let convertedTimeStamp1 = new Date(sortedFetchedKeys1[i]).getTime();
        dataPointTempHolder1.push(convertedTimeStamp1);
        
        pricePointTempHolder1.push(fetchedPriceData1[sortedFetchedKeys1[i]]["1. open"]);
        pricePointTempHolder1.push(fetchedPriceData1[sortedFetchedKeys1[i]]["2. high"]);
        pricePointTempHolder1.push(fetchedPriceData1[sortedFetchedKeys1[i]]["3. low"]);
        if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
          pricePointTempHolder1.push(fetchedPriceData1[sortedFetchedKeys1[i]]["5. adjusted close"]);
        } else {
          pricePointTempHolder1.push(fetchedPriceData1[sortedFetchedKeys1[i]]["4. close"]);
        }
  
        if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
          volumes1.push(parseInt(fetchedPriceData1[sortedFetchedKeys1[i]]["6. volume"]));  
        } else {
          volumes1.push(parseInt(fetchedPriceData1[sortedFetchedKeys1[i]]["5. volume"]));
        } 

        dataPointTempHolder1.push(pricePointTempHolder1);
        transformedData1.push(dataPointTempHolder1);
        timeStamps1.push(convertedTimeStamp1);

        let volumesTimeSeries1;
        if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
          volumesTimeSeries1 = [convertedTimeStamp1, parseInt(fetchedPriceData1[sortedFetchedKeys1[i]]["6. volume"])]
        } else {
          volumesTimeSeries1 = [convertedTimeStamp1, parseInt(fetchedPriceData1[sortedFetchedKeys1[i]]["5. volume"])]
        } 

        combinedVolumesTimeStamps1.push(volumesTimeSeries1);
    }
}

function transformData2(){

  fetchedKeys2 = Object.keys(fetchedPriceData2);
  console.log("transform data 2here ->", fetchedKeys2);

  sortedFetchedKeys2 = fetchedKeys2.sort();     
  transformedData2 = [];
  volumes2 = [];
  timeStamps2 = [];
  combinedVolumesTimeStamps2 = [];

  for (let i=0; i< fetchedKeys2.length; i++){

      let dataPointTempHolder2 = [];
      let pricePointTempHolder2 = [];

      let convertedTimeStamp2 = new Date(sortedFetchedKeys2[i]).getTime();
      dataPointTempHolder2.push(convertedTimeStamp2);
      
      pricePointTempHolder2.push(fetchedPriceData2[sortedFetchedKeys2[i]]["1. open"]);
      pricePointTempHolder2.push(fetchedPriceData2[sortedFetchedKeys2[i]]["2. high"]);
      pricePointTempHolder2.push(fetchedPriceData2[sortedFetchedKeys2[i]]["3. low"]);     
      if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
        pricePointTempHolder2.push(fetchedPriceData2[sortedFetchedKeys2[i]]["5. adjusted close"]);  
      } else {
        pricePointTempHolder2.push(fetchedPriceData2[sortedFetchedKeys2[i]]["4. close"]);
      }

      if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
        volumes2.push(parseInt(fetchedPriceData2[sortedFetchedKeys2[i]]["6. volume"]));  
      } else {
        volumes2.push(parseInt(fetchedPriceData2[sortedFetchedKeys2[i]]["5. volume"]));
      }
      dataPointTempHolder2.push(pricePointTempHolder2);
      transformedData2.push(dataPointTempHolder2);
      timeStamps2.push(convertedTimeStamp2);

      let volumesTimeSeries2;
      if (targetDataType === "TIME_SERIES_WEEKLY_ADJUSTED" || targetDataType ==="TIME_SERIES_MONTHLY_ADJUSTED"){
        volumesTimeSeries2 = [convertedTimeStamp2, parseInt(fetchedPriceData2[sortedFetchedKeys2[i]]["6. volume"])]
      } else {
        volumesTimeSeries2 = [convertedTimeStamp2, parseInt(fetchedPriceData2[sortedFetchedKeys2[i]]["5. volume"])]
      } 
      combinedVolumesTimeStamps2.push(volumesTimeSeries2);  
    }
    console.log(transformedData2)
}

let chart1;
let chart2;
let chartBar1;
let chartBar2;

function updateChart(chartNumber){

  let chartTracking = chartNumber;

  if (chartTracking === 1){

      console.log("update chart here 1", transformedData1)
      chart1.updateSeries([{
        "data": transformedData1
      }])
      chartBar1.updateSeries([{
        "name":'volume',
        "data": combinedVolumesTimeStamps1
      }])

  } else if (chartTracking === 2){
    console.log("update chart here 2", transformedData2)

    chart2.updateSeries([{
      "data": transformedData2
    }])
    chartBar2.updateSeries([{
      "name":'volume',
      "data": combinedVolumesTimeStamps2
    }])
  }
}

function renderChart(chartNumber){

  let chartTracking = chartNumber;
  
  console.log("renderChart here 1", transformedData1)
  console.log("renderChart here 2", transformedData2)


  if (chartTracking === 1){
      let options = {
          "series":[{
              "data": transformedData1
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
                  "data": combinedVolumesTimeStamps1
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
                              "min": (new Date(sortedFetchedKeys1[0]).getTime()),
                              "max": (new Date(sortedFetchedKeys1[sortedFetchedKeys1.length-1]).getTime()),
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
      
      targetElement.innerHTML = "";
      targetBarElement.innerHTML ="";
      
      chart1 = new ApexCharts(targetElement, options);
      chart1.render();
      chartBar1 = new ApexCharts(targetBarElement, optionsVolumeBar);
      chartBar1.render();

    } else if (chartTracking === 2){
        let options = {
          "series":[{
              "data": transformedData2
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
                  "data": combinedVolumesTimeStamps2
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
                              "min": (new Date(sortedFetchedKeys2[0]).getTime()),
                              "max": (new Date(sortedFetchedKeys2[sortedFetchedKeys2.length-1]).getTime()),
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

      targetElement.innerHTML = "";
      targetBarElement.innerHTML ="";

      chart2 = new ApexCharts(targetElement, options);
      chart2.render();
      chartBar2 = new ApexCharts(targetBarElement, optionsVolumeBar);
      chartBar2.render();
    }
  }












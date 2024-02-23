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
    await fetchAllFundamentals();
    renderAllFundamentals();
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

async function changeTargetStock1(event){
    tickerSymbol1= event.target.value;
    console.log(tickerSymbol1);
    await fetchPriceData1()
    transformData1();
    updateChart(1)
    updateQUery3aTO6b();
    await fetchUpdatedFundamentals(1);
    renderFundamentalViews(overviewTarget, overviewBody1, overview1);
    renderFundamentalViews(incomeTarget, incomeBody1, income1["annualReports"][0]);
    renderFundamentalViews(cashFlowTarget, cashFlowBody1, cashflow1["annualReports"][0]);
    renderFundamentalViews(balanceSheetTarget, balanceSheetBody1, balanceSheet1["annualReports"][0]);
}


async function changeTargetStock2(event){
    tickerSymbol2= event.target.value;
    console.log(tickerSymbol2);
    await fetchPriceData2()
    transformData2();
    updateChart(2);
    updateQUery3aTO6b();
    await fetchUpdatedFundamentals(2);
    renderFundamentalViews(overviewTarget, overviewBody2, overview2);
    renderFundamentalViews(incomeTarget, incomeBody2, income2["annualReports"][0]);
    renderFundamentalViews(cashFlowTarget, cashFlowBody2, cashflow2["annualReports"][0]);
    renderFundamentalViews(balanceSheetTarget, balanceSheetBody2, balanceSheet2["annualReports"][0]);
}

async function changeDataTargetType(event){
    targetDataType= event.target.value;
    console.log(targetDataType);
    await fetchPriceData1();
    await fetchPriceData2();
    transformData1();
    transformData2();
    updateChart(1)
    updateChart(2)    
}

let coyOverviewH3 = document.querySelectorAll(".coy-stats");
let incomeH3 = document.querySelectorAll(".income-stats");
let cashH3 = document.querySelectorAll(".cash-stats");
let balanceH3 = document.querySelectorAll(".balance-stats");

let coyTable1 = document.querySelector("#coy-table1");
let coyTable2 = document.querySelector("#coy-table2");
let incomeTable1 = document.querySelector("#income-table1");
let incomeTable2 = document.querySelector("#income-table2");
let cashTable1 = document.querySelector("#cash-table1");
let cashTable2 = document.querySelector("#cash-table2");
let balanceTable1 = document.querySelector("#balance-table1");
let balanceTable2 = document.querySelector("#balance-table2");

let coyToggleStatus = false;
let incomeToggleStatus = false;
let cashToggleStatus = false;
let balanceToggleStatus = false;

for (let i=0; i < coyOverviewH3.length; i++){
    coyOverviewH3[i].addEventListener("click",function(){
        coyToggleStatus = !coyToggleStatus;
        coyTable1.style.display = coyToggleStatus? "table" : "none";        
        coyTable2.style.display = coyToggleStatus? "table" : "none"; 
    })
}

for (let i=0; i < incomeH3.length; i++){
    incomeH3[i].addEventListener("click",function(){
        incomeToggleStatus = !incomeToggleStatus;
        incomeTable1.style.display = incomeToggleStatus? "table" : "none";        
        incomeTable2.style.display = incomeToggleStatus? "table" : "none"; 
    })
}

for (let i=0; i < cashH3.length; i++){
    cashH3[i].addEventListener("click",function(){
        cashToggleStatus = !cashToggleStatus;
        cashTable1.style.display = cashToggleStatus? "table" : "none";        
        cashTable2.style.display = cashToggleStatus? "table" : "none"; 
    })
}

for (let i=0; i < balanceH3.length; i++){
    balanceH3[i].addEventListener("click",function(){
        balanceToggleStatus = !balanceToggleStatus;
        balanceTable1.style.display = balanceToggleStatus? "table" : "none";        
        balanceTable2.style.display = balanceToggleStatus? "table" : "none"; 
    })
}



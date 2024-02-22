
// https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=IBM&apikey=demo

// will have the corresponding value soon once see the response.data structure
let queryPairing = [
                        "OVERVIEW",
                        "INCOME_STATEMENT",
                        "CASH_FLOW",
                        "BALANCE_SHEET",
                    ];

let query3a = `query?function=${queryPairing[0]}&symbol=${tickerSymbol1}&apikey=`
let query3b = `query?function=${queryPairing[0]}&symbol=${tickerSymbol2}&apikey=`

let query4a = `query?function=${queryPairing[1]}&symbol=${tickerSymbol1}&apikey=`
let query4b = `query?function=${queryPairing[1]}&symbol=${tickerSymbol2}&apikey=`

let query5a = `query?function=${queryPairing[2]}&symbol=${tickerSymbol1}&apikey=`
let query5b = `query?function=${queryPairing[2]}&symbol=${tickerSymbol2}&apikey=`

let query6a = `query?function=${queryPairing[3]}&symbol=${tickerSymbol1}&apikey=`
let query6b = `query?function=${queryPairing[3]}&symbol=${tickerSymbol2}&apikey=`

let overview1;
let overview2;
let income1;
let income2;
let cashflow1;
let cashflow2;
let balanceSheet1;
let balanceSheet2;

async function fetchAllFundamentals(){
    await fetchOverview();
    await fetchIncomeStatement();
    await fetchCashFlowStatement();
    await fetchBalanceSheet();
}



async function fetchOverview(){
    let response1 = await axios.get(BASE_URL + query3a + API_KEY);
    overview1 = response1.data;
    console.log("overview1 here =>", overview1);
    
    let response2 = await axios.get(BASE_URL + query3b + API_KEY);
    overview2 = response2.data;
    console.log("overview2 here =>", overview2);
}

async function fetchIncomeStatement(){
    let response1 = await axios.get(BASE_URL + query4a + API_KEY);
    income1 = response1.data;
    console.log("income1 here =>", income1);
    
    let response2 = await axios.get(BASE_URL + query4b + API_KEY);
    income2 = response2.data;
    console.log("income2 here =>", income2);
}

async function fetchCashFlowStatement(){
    let response1 = await axios.get(BASE_URL + query5a + API_KEY);
    cashflow1 = response1.data;
    console.log("cashflow1 here =>", cashflow1);
    
    let response2 = await axios.get(BASE_URL + query5b + API_KEY);
    cashflow2 = response2.data;
    console.log("cashflow2 here =>", cashflow2);
}

async function fetchBalanceSheet(){
    let response1 = await axios.get(BASE_URL + query6a + API_KEY);
    balanceSheet1 = response1.data;
    console.log("balancesheet1 here =>", balanceSheet1);
    
    let response2 = await axios.get(BASE_URL + query6b + API_KEY);
    balanceSheet2 = response2.data;
    console.log("balancesheet2 here =>", balanceSheet2);
}

async function fetchUpdatedFundamentals(updateTarget){
    
    console.log("fetch all fundamentals here")

    let target = updateTarget;

    if (target === 1){
        let response1 = await axios.get(BASE_URL + query3a + API_KEY);
        overview1 = response1.data;

        response1 = await axios.get(BASE_URL + query4a + API_KEY);
        income1 = response1.data;

        response1 = await axios.get(BASE_URL + query5a + API_KEY);
        cashflow1 = response1.data;
    
        response1 = await axios.get(BASE_URL + query6a + API_KEY);
        balanceSheet1 = response1.data;

        console.log(overview1);
        console.log(income1);
        console.log(cashflow1);
        console.log(balanceSheet1);        
    }
    else if (target === 2){
        let response2 = await axios.get(BASE_URL + query3b + API_KEY);
        overview2 = response2.data;
        
        response2 = await axios.get(BASE_URL + query4b + API_KEY);
        income2 = response2.data;
        
        response2 = await axios.get(BASE_URL + query5b + API_KEY);
        cashflow2 = response2.data;
        
        response2 = await axios.get(BASE_URL + query6b + API_KEY);
        balanceSheet2 = response2.data;        

        console.log(overview2);
        console.log(income2);
        console.log(cashflow2);
        console.log(balanceSheet2);
    }

}

function renderAllFundamentals(){
    renderFundamentalViews(overviewTarget, overviewBody1, overview1);
    renderFundamentalViews(overviewTarget, overviewBody2, overview2);
    renderFundamentalViews(incomeTarget, incomeBody1, income1["annualReports"][0]);
    renderFundamentalViews(incomeTarget, incomeBody2, income2["annualReports"][0]);
    renderFundamentalViews(cashFlowTarget, cashFlowBody1, cashflow1["annualReports"][0]);
    renderFundamentalViews(cashFlowTarget, cashFlowBody2, cashflow2["annualReports"][0]);
    renderFundamentalViews(balanceSheetTarget, balanceSheetBody1, balanceSheet1["annualReports"][0]);
    renderFundamentalViews(balanceSheetTarget, balanceSheetBody2, balanceSheet2["annualReports"][0]);
}

let overviewTarget = [
    "Industry",
    "Sector",
    "LatestQuarter",
    "52WeekHigh",
    "52WeekLow",
    "FiscalYearEnd",
    "SharesOutstanding",
    "Beta",
    "BookValue",
    "DilutedEPSTTM",
    "DividendDate",
    "DividendPerShare",
    "DividendYield",
    "EBITDA",
    "EPS",
    "MarketCapitalization",
    "PERatio",
    "TrailingPE",
    "PriceToBookRatio",
    "PriceToSalesRatioTTM",
    "ProfitMargin",
    "QuarterlyEarningsGrowthYOY",
    "ReturnOnAssetsTTM",
    "ReturnOnEquityTTM"
]

let overviewBody1 = document.querySelector("#overview1-body");
let overviewBody2 = document.querySelector("#overview2-body");

let incomeTarget = [
    "totalRevenue",
    "costOfRevenue",
    "costofGoodsAndServicesSold",
    "grossProfit",
    "ebit",
    "interestExpense",
    "interestAndDebtExpense",
    "interestIncome",
    "netInterestIncome",
    "investmentIncomeNet",
    "depreciationAndAmortization",   
    "researchAndDevelopment",
    "sellingGeneralAndAdministrative",
    "netIncome",
    "netIncomeFromContinuingOperations",
    "comprehensiveIncomeNetOfTax",
    "operatingIncome",
    "operatingExpenses",
    "otherNonOperatingIncome"    
]

let incomeBody1 = document.querySelector("#income1-body");
let incomeBody2 = document.querySelector("#income2-body");

let cashFlowTarget = [
    "operatingCashflow",
    "paymentsForOperatingActivities",
    "changeInInventory",
    "changeInOperatingAssets",
    "changeInOperatingLiabilities",
    "changeInReceivables",
    "cashflowFromInvestment",
    "capitalExpenditures",                
    "cashflowFromFinancing",
    "paymentsForRepurchaseOfCommonStock",
    "paymentsForRepurchaseOfEquity",
    "paymentsForRepurchaseOfPreferredStock",
    "proceedsFromIssuanceOfCommonStock",
    "proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet",
    "proceedsFromIssuanceOfPreferredStock",
    "proceedsFromOperatingActivities",
    "proceedsFromRepaymentsOfShortTermDebt",
    "proceedsFromRepurchaseOfEquity",
    "proceedsFromSaleOfTreasuryStock",
    "dividendPayout",
    "dividendPayoutCommonStock",
    "dividendPayoutPreferredStock"
]

let cashFlowBody1 = document.querySelector("#cashflow1-body");
let cashFlowBody2 = document.querySelector("#cashflow2-body");

let balanceSheetTarget = [
    "cashAndCashEquivalentsAtCarryingValue",
    "cashAndShortTermInvestments",
    "currentNetReceivables",
    "shortTermInvestments",
    "inventory",
    "goodwill",
    "otherCurrentAssets",
    "totalCurrentAssets",
    "intangibleAssets",
    "intangibleAssetsExcludingGoodwill",
    "investments",
    "longTermInvestments",
    "propertyPlantEquipment",
    "accumulatedDepreciationAmortizationPPE",
    "otherNonCurrentAssets",
    "totalNonCurrentAssets",
    "totalAssets",
    "currentAccountsPayable",
    "currentDebt",
    "shortTermDebt",
    "currentLongTermDebt",
    "otherCurrentLiabilities",
    "capitalLeaseObligations",
    "deferredRevenue",
    "longTermDebt",
    "longTermDebtNoncurrent",
    "otherNonCurrentLiabilities",
    "totalCurrentLiabilities",
    "totalNonCurrentLiabilities",
    "totalLiabilities",
    "shortLongTermDebtTotal",
    "commonStock",
    "commonStockSharesOutstanding",
    "retainedEarnings",
    "treasuryStock",
    "totalShareholderEquity"
]

let balanceSheetBody1 = document.querySelector("#balance-sheet1-body");
let balanceSheetBody2 = document.querySelector("#balance-sheet2-body");

function renderFundamentalViews(target, selector, fetchedData){

    let propertySetTarget = target;
    let dataHTMLContainer1 = selector;
    dataHTMLContainer1.innerHTML = "";
    let fetchedDataSet = fetchedData;

    for (let item of propertySetTarget){

        const tableDataItem = document.createElement("tr");

        const rowData1 = document.createElement("td");
        rowData1.innerHTML = `${item}`

        const rowData2 = document.createElement("td");
        rowData2.innerHTML = `${fetchedDataSet[item]}`

        tableDataItem.appendChild(rowData1);
        tableDataItem.appendChild(rowData2);

        dataHTMLContainer1.appendChild(tableDataItem);
    }
}

function updateFundamentals(){

}








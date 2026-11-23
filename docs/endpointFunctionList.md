
# Endpoint maps

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

Each REST client is a JavaScript class, which provides functions individually mapped to each endpoint available in the exchange's API offering. 

The following table shows all methods available in each REST client, whether the method requires authentication (automatically handled if API keys are provided), as well as the exact endpoint each method is connected to.

This can be used to easily find which method to call, once you have [found which endpoint you're looking to use](https://github.com/sieblyio/awesome-crypto-examples/wiki/How-to-find-SDK-functions-that-match-API-docs-endpoint).

All REST clients are in the [src](/src) folder. For usage examples, make sure to check the [examples](/examples) folder.

List of clients:
- [rest-client](#rest-clientts)
- [websocket-api-client](#websocket-api-clientts)


If anything is missing or wrong, please open an issue or let us know in our [Node.js Traders](https://t.me/nodetraders) telegram group!

## How to use table

Table consists of 4 parts:

- Function name
- AUTH
- HTTP Method
- Endpoint

**Function name** is the name of the function that can be called through the SDK. Check examples folder in the repo for more help on how to use them!

**AUTH** is a boolean value that indicates if the function requires authentication - which means you need to pass your API key and secret to the SDK.

**HTTP Method** shows HTTP method that the function uses to call the endpoint. Sometimes endpoints can have same URL, but different HTTP method so you can use this column to differentiate between them.

**Endpoint** is the URL that the function uses to call the endpoint. Best way to find exact function you need for the endpoint is to search for URL in this table and find corresponding function name.


# rest-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [rest-client.ts](/src/rest-client.ts). 

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [getAccountInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L518) | :closed_lock_with_key:  | GET | `/api/v5/account/instruments` |
| [getBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L524) | :closed_lock_with_key:  | GET | `/api/v5/account/balance` |
| [getPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L528) | :closed_lock_with_key:  | GET | `/api/v5/account/positions` |
| [getPositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L532) | :closed_lock_with_key:  | GET | `/api/v5/account/positions-history` |
| [getAccountPositionRisk()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L538) | :closed_lock_with_key:  | GET | `/api/v5/account/account-position-risk` |
| [getBills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L545) | :closed_lock_with_key:  | GET | `/api/v5/account/bills` |
| [getBillsArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L550) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-archive` |
| [getAccountBillSubtypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L558) | :closed_lock_with_key:  | GET | `/api/v5/account/subtypes` |
| [requestBillsHistoryDownloadLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L572) | :closed_lock_with_key:  | POST | `/api/v5/account/bills-history-archive` |
| [getRequestedBillsHistoryLink()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L581) | :closed_lock_with_key:  | GET | `/api/v5/account/bills-history-archive` |
| [getAccountConfiguration()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L587) | :closed_lock_with_key:  | GET | `/api/v5/account/config` |
| [setPositionMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L591) | :closed_lock_with_key:  | POST | `/api/v5/account/set-position-mode` |
| [setSettleCurrency()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L597) | :closed_lock_with_key:  | POST | `/api/v5/account/set-settle-currency` |
| [setFeeType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L603) | :closed_lock_with_key:  | POST | `/api/v5/account/set-fee-type` |
| [setLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L607) | :closed_lock_with_key:  | POST | `/api/v5/account/set-leverage` |
| [getMaxBuySellAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L612) | :closed_lock_with_key:  | GET | `/api/v5/account/max-size` |
| [getMaxAvailableTradableAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L625) | :closed_lock_with_key:  | GET | `/api/v5/account/max-avail-size` |
| [changePositionMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L635) | :closed_lock_with_key:  | POST | `/api/v5/account/position/margin-balance` |
| [movePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L646) | :closed_lock_with_key:  | POST | `/api/v5/account/move-positions` |
| [getMovePositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L654) | :closed_lock_with_key:  | GET | `/api/v5/account/move-positions-history` |
| [getLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L660) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageV2()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L672) | :closed_lock_with_key:  | GET | `/api/v5/account/leverage-info` |
| [getLeverageEstimatedInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L680) | :closed_lock_with_key:  | GET | `/api/v5/account/adjust-leverage-info` |
| [getMaxLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L691) | :closed_lock_with_key:  | GET | `/api/v5/account/max-loan` |
| [getFeeRates()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L700) | :closed_lock_with_key:  | GET | `/api/v5/account/trade-fee` |
| [getInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L711) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-accrued` |
| [getInterestRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L723) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-rate` |
| [setGreeksDisplayType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L727) | :closed_lock_with_key:  | POST | `/api/v5/account/set-greeks` |
| [setIsolatedMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L731) | :closed_lock_with_key:  | POST | `/api/v5/account/set-isolated-mode` |
| [getMaxWithdrawals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L738) | :closed_lock_with_key:  | GET | `/api/v5/account/max-withdrawal` |
| [getAccountRiskState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L742) | :closed_lock_with_key:  | GET | `/api/v5/account/risk-state` |
| [setAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L746) | :closed_lock_with_key:  | POST | `/api/v5/account/set-collateral-assets` |
| [getAccountCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L760) | :closed_lock_with_key:  | GET | `/api/v5/account/collateral-assets` |
| [submitQuickMarginBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L772) | :closed_lock_with_key:  | POST | `/api/v5/account/quick-margin-borrow-repay` |
| [getQuickMarginBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L781) | :closed_lock_with_key:  | GET | `/api/v5/account/quick-margin-borrow-repay-history` |
| [borrowRepayVIPLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L790) | :closed_lock_with_key:  | POST | `/api/v5/account/borrow-repay` |
| [getVIPLoanBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L799) | :closed_lock_with_key:  | GET | `/api/v5/account/borrow-repay-history` |
| [getVIPInterestAccrued()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L803) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-accrued` |
| [getVIPInterestDeducted()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L807) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-interest-deducted` |
| [getVIPLoanOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L813) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-list` |
| [getVIPLoanOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L819) | :closed_lock_with_key:  | GET | `/api/v5/account/vip-loan-order-detail` |
| [getBorrowInterestLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L825) | :closed_lock_with_key:  | GET | `/api/v5/account/interest-limits` |
| [getFixedLoanBorrowLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L832) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-limit` |
| [getFixedLoanBorrowQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L836) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-quote` |
| [submitFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L845) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/borrowing-order` |
| [updateFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L858) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/amend-borrowing-order` |
| [manualRenewFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L871) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/manual-reborrow` |
| [repayFixedLoanBorrowOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L885) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/repay-borrowing-order` |
| [convertFixedLoanToMarketLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L896) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/convert-to-market-loan` |
| [reduceFixedLoanLiabilities()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L907) | :closed_lock_with_key:  | POST | `/api/v5/account/fixed-loan/reduce-liabilities` |
| [getFixedLoanBorrowOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L922) | :closed_lock_with_key:  | GET | `/api/v5/account/fixed-loan/borrowing-orders-list` |
| [manualBorrowRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L931) | :closed_lock_with_key:  | POST | `/api/v5/account/spot-manual-borrow-repay` |
| [setAutoRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L945) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-repay` |
| [getBorrowRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L953) | :closed_lock_with_key:  | GET | `/api/v5/account/spot-borrow-repay-history` |
| [positionBuilder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L959) | :closed_lock_with_key:  | POST | `/api/v5/account/position-builder` |
| [updateRiskOffsetAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L963) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-amt` |
| [getGreeks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L975) | :closed_lock_with_key:  | GET | `/api/v5/account/greeks` |
| [getPMLimitation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L979) | :closed_lock_with_key:  | GET | `/api/v5/account/position-tiers` |
| [updateRiskOffsetType()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L987) | :closed_lock_with_key:  | POST | `/api/v5/account/set-riskOffset-type` |
| [activateOption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L995) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-option` |
| [activateFeature()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1008) | :closed_lock_with_key:  | POST | `/api/v5/account/activate-feature` |
| [setAutoLoan()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1014) | :closed_lock_with_key:  | POST | `/api/v5/account/set-auto-loan` |
| [presetAccountLevelSwitch()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1018) | :closed_lock_with_key:  | POST | `/api/v5/account/account-level-switch-preset` |
| [getAccountSwitchPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1029) | :closed_lock_with_key:  | GET | `/api/v5/account/set-account-switch-precheck` |
| [setAccountMode()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1038) | :closed_lock_with_key:  | POST | `/api/v5/account/set-account-level` |
| [resetMMPStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1044) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-reset` |
| [setMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1052) | :closed_lock_with_key:  | POST | `/api/v5/account/mmp-config` |
| [getMMPConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1056) | :closed_lock_with_key:  | GET | `/api/v5/account/mmp-config` |
| [setTradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1060) | :closed_lock_with_key:  | POST | `/api/v5/account/set-trading-config` |
| [precheckSetDeltaNeutral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1066) | :closed_lock_with_key:  | GET | `/api/v5/account/precheck-set-delta-neutral` |
| [submitOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1081) | :closed_lock_with_key:  | POST | `/api/v5/trade/order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1085) | :closed_lock_with_key:  | POST | `/api/v5/trade/batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1089) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1093) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-batch-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1099) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1103) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-batch-orders` |
| [closePositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1107) | :closed_lock_with_key:  | POST | `/api/v5/trade/close-position` |
| [getOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1111) | :closed_lock_with_key:  | GET | `/api/v5/trade/order` |
| [getOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1115) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-pending` |
| [getOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1122) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history` |
| [getOrderHistoryArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1129) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-history-archive` |
| [getFills()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1138) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills` |
| [getFillsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1145) | :closed_lock_with_key:  | GET | `/api/v5/trade/fills-history` |
| [getEasyConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1150) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-currency-list` |
| [submitEasyConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1163) | :closed_lock_with_key:  | POST | `/api/v5/trade/easy-convert` |
| [getEasyConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1170) | :closed_lock_with_key:  | GET | `/api/v5/trade/easy-convert-history` |
| [getOneClickRepayCurrencyList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1179) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-currency-list` |
| [submitOneClickRepay()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1194) | :closed_lock_with_key:  | POST | `/api/v5/trade/one-click-repay` |
| [getOneClickRepayHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1201) | :closed_lock_with_key:  | GET | `/api/v5/trade/one-click-repay-history` |
| [cancelMassOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1205) | :closed_lock_with_key:  | POST | `/api/v5/trade/mass-cancel` |
| [cancelAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1217) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-all-after` |
| [getAccountRateLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1224) | :closed_lock_with_key:  | GET | `/api/v5/trade/account-rate-limit` |
| [submitOrderPrecheck()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1228) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-precheck` |
| [placeAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1238) | :closed_lock_with_key:  | POST | `/api/v5/trade/order-algo` |
| [cancelAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1242) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-algos` |
| [amendAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1248) | :closed_lock_with_key:  | POST | `/api/v5/trade/amend-algos` |
| [cancelAdvanceAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1254) | :closed_lock_with_key:  | POST | `/api/v5/trade/cancel-advance-algos` |
| [getAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1260) | :closed_lock_with_key:  | GET | `/api/v5/trade/order-algo` |
| [getAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1266) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-pending` |
| [getAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1272) | :closed_lock_with_key:  | GET | `/api/v5/trade/orders-algo-history` |
| [placeGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1284) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-algo` |
| [amendGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1288) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/amend-order-algo` |
| [stopGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1305) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/stop-order-algo` |
| [closeGridContractPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1309) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/close-position` |
| [cancelGridContractCloseOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1315) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/cancel-close-order` |
| [instantTriggerGridAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1325) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/order-instant-trigger` |
| [getGridAlgoOrderList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1337) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-pending` |
| [getGridAlgoOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1344) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-history` |
| [getGridAlgoOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1351) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/orders-algo-details` |
| [getGridAlgoSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1361) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/sub-orders` |
| [getGridAlgoOrderPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1373) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/grid/positions` |
| [spotGridWithdrawIncome()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1380) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/withdraw-income` |
| [computeGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1384) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/compute-margin-balance` |
| [adjustGridMarginBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1395) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/margin-balance` |
| [adjustGridInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1404) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/grid/adjust-investment` |
| [getGridAIParameter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1415) |  | GET | `/api/v5/tradingBot/grid/ai-param` |
| [computeGridMinInvestment()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1424) |  | POST | `/api/v5/tradingBot/grid/min-investment` |
| [getRSIBackTesting()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1431) |  | GET | `/api/v5/tradingBot/public/rsi-back-testing` |
| [getMaxGridQuantity()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1439) |  | GET | `/api/v5/tradingBot/grid/grid-quantity` |
| [createSignal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1453) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/create-signal` |
| [getSignals()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1457) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/signals` |
| [createSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1461) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/order-algo` |
| [cancelSignalBots()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1467) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/stop-order-algo` |
| [updateSignalMargin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1476) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/margin-balance` |
| [updateSignalTPSL()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1484) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/amendTPSL` |
| [setSignalInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1492) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/set-instruments` |
| [getSignalBotOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1503) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getActiveSignalBot()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1513) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-details` |
| [getSignalBotHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1520) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/orders-algo-history` |
| [getSignalBotPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1527) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions` |
| [getSignalBotPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1534) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/positions-history` |
| [closeSignalBotPosition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1543) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/close-position` |
| [placeSignalBotSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1551) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/sub-order` |
| [cancelSubOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1555) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/signal/cancel-sub-order` |
| [getSignalBotSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1562) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/sub-orders` |
| [getSignalBotEventHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1566) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/signal/event-history` |
| [submitRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1578) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/order-algo` |
| [amendRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1584) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/amend-order-algo` |
| [stopRecurringBuyOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1593) | :closed_lock_with_key:  | POST | `/api/v5/tradingBot/recurring/stop-order-algo` |
| [getRecurringBuyOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1602) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-pending` |
| [getRecurringBuyOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1611) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-history` |
| [getRecurringBuyOrderDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1620) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/orders-algo-details` |
| [getRecurringBuySubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1629) | :closed_lock_with_key:  | GET | `/api/v5/tradingBot/recurring/sub-orders` |
| [getCopytradingSubpositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1641) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-subpositions` |
| [getCopytradingSubpositionsHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1647) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/subpositions-history` |
| [submitCopytradingAlgoOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1653) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/algo-order` |
| [closeCopytradingSubposition()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1659) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/close-subposition` |
| [getCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1668) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/instruments` |
| [setCopytradingInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1677) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/set-instruments` |
| [getCopytradingProfitDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1689) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/profit-sharing-details` |
| [getCopytradingTotalProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1698) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-profit-sharing` |
| [getCopytradingUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1704) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/unrealized-profit-sharing-details` |
| [getCopytradingTotalUnrealizedProfit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1713) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/total-unrealized-profit-sharing` |
| [applyCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1725) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/apply-lead-trading` |
| [stopCopytradingLeadTrading()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1736) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-lead-trading` |
| [updateCopytradingProfitSharing()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1744) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-profit-sharing-ratio` |
| [getCopytradingAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1758) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/config` |
| [setCopytradingFirstCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1762) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/first-copy-settings` |
| [updateCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1770) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/amend-copy-settings` |
| [stopCopytradingCopy()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1778) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/stop-copy-trading` |
| [getCopytradingCopySettings()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1790) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-settings` |
| [getCopytradingBatchLeverageInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1797) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/batch-leverage-info` |
| [setCopytradingBatchLeverage()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1803) | :closed_lock_with_key:  | POST | `/api/v5/copytrading/batch-set-leverage` |
| [getCopytradingMyLeadTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1809) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/current-lead-traders` |
| [getCopytradingLeadTradersHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1815) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders-history` |
| [getCopytradingConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1821) |  | GET | `/api/v5/copytrading/public-config` |
| [getCopytradingLeadRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1827) |  | GET | `/api/v5/copytrading/public-lead-traders` |
| [getCopytradingLeadWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1833) |  | GET | `/api/v5/copytrading/public-weekly-pnl` |
| [getCopytradingLeadDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1840) |  | GET | `/api/v5/copytrading/public-pnl` |
| [getCopytradingLeadStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1846) |  | GET | `/api/v5/copytrading/public-stats` |
| [getCopytradingLeadPreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1852) |  | GET | `/api/v5/copytrading/public-preference-currency` |
| [getCopytradingLeadOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1859) |  | GET | `/api/v5/copytrading/public-current-subpositions` |
| [getCopytradingLeadPositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1865) |  | GET | `/api/v5/copytrading/public-subpositions-history` |
| [getCopyTraders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1871) |  | GET | `/api/v5/copytrading/public-copy-traders` |
| [getCopytradingLeadPrivateRanks()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1877) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/lead-traders` |
| [getCopytradingLeadPrivateWeeklyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1883) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/weekly-pnl` |
| [getCopytradingPLeadPrivateDailyPnl()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1890) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/pnl` |
| [geCopytradingLeadPrivateStats()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1896) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/stats` |
| [getCopytradingLeadPrivatePreferences()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1902) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/preference-currency` |
| [getCopytradingLeadPrivateOpenPositions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1909) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-current-subpositions` |
| [getCopytradingLeadPrivatePositionHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1918) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/performance-subpositions-history` |
| [getCopyTradersPrivate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1927) | :closed_lock_with_key:  | GET | `/api/v5/copytrading/copy-traders` |
| [getTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1939) |  | GET | `/api/v5/market/tickers` |
| [getTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1947) |  | GET | `/api/v5/market/ticker` |
| [getOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1951) |  | GET | `/api/v5/market/books` |
| [getRpiOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1958) |  | GET | `/api/v5/market/books-rpi` |
| [getFullOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1965) |  | GET | `/api/v5/market/books-full` |
| [getCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1972) |  | GET | `/api/v5/market/candles` |
| [getHistoricCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1976) |  | GET | `/api/v5/market/history-candles` |
| [getTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1980) |  | GET | `/api/v5/market/trades` |
| [getHistoricTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1984) |  | GET | `/api/v5/market/history-trades` |
| [getOptionTradesByInstrument()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L1994) |  | GET | `/api/v5/market/option/instrument-family-trades` |
| [getOptionTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2000) |  | GET | `/api/v5/public/option-trades` |
| [get24hrTotalVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2004) |  | GET | `/api/v5/market/platform-24-volume` |
| [getBlockCounterParties()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2014) | :closed_lock_with_key:  | GET | `/api/v5/rfq/counterparties` |
| [createBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2018) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-rfq` |
| [cancelBlockRFQ()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2022) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-rfq` |
| [cancelMultipleBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2028) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-rfqs` |
| [cancelAllRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2034) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-rfqs` |
| [executeBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2038) | :closed_lock_with_key:  | POST | `/api/v5/rfq/execute-quote` |
| [getQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2044) | :closed_lock_with_key:  | GET | `/api/v5/rfq/maker-instrument-settings` |
| [updateBlockQuoteProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2048) | :closed_lock_with_key:  | POST | `/api/v5/rfq/maker-instrument-settings` |
| [resetBlockMmp()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2056) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-reset` |
| [updateBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2064) | :closed_lock_with_key:  | POST | `/api/v5/rfq/mmp-config` |
| [getBlockMmpConfig()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2070) | :closed_lock_with_key:  | GET | `/api/v5/rfq/mmp-config` |
| [createBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2074) | :closed_lock_with_key:  | POST | `/api/v5/rfq/create-quote` |
| [cancelBlockQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2080) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-quote` |
| [cancelMultipleBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2086) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-batch-quotes` |
| [cancelAllBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2092) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-quotes` |
| [cancelAllBlockAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2096) | :closed_lock_with_key:  | POST | `/api/v5/rfq/cancel-all-after` |
| [getBlockRFQs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2105) | :closed_lock_with_key:  | GET | `/api/v5/rfq/rfqs` |
| [getBlockQuotes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2109) | :closed_lock_with_key:  | GET | `/api/v5/rfq/quotes` |
| [getBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2113) | :closed_lock_with_key:  | GET | `/api/v5/rfq/trades` |
| [getPublicRFQBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2117) |  | GET | `/api/v5/rfq/public-trades` |
| [getBlockTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2121) |  | GET | `/api/v5/market/block-tickers` |
| [getBlockTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2128) |  | GET | `/api/v5/market/block-ticker` |
| [getBlockPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2132) |  | GET | `/api/v5/public/block-trades` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2144) | :closed_lock_with_key:  | POST | `/api/v5/sprd/order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2150) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-order` |
| [cancelAllSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2157) | :closed_lock_with_key:  | POST | `/api/v5/sprd/mass-cancel` |
| [updateSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2165) | :closed_lock_with_key:  | POST | `/api/v5/sprd/amend-order` |
| [getSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2171) | :closed_lock_with_key:  | GET | `/api/v5/sprd/order` |
| [getSpreadActiveOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2178) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-pending` |
| [getSpreadOrdersRecent()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2184) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history` |
| [getSpreadOrdersArchive()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2190) | :closed_lock_with_key:  | GET | `/api/v5/sprd/orders-history-archive` |
| [getSpreadTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2196) | :closed_lock_with_key:  | GET | `/api/v5/sprd/trades` |
| [getSpreads()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2200) |  | GET | `/api/v5/sprd/spreads` |
| [getSpreadOrderBook()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2204) |  | GET | `/api/v5/sprd/books` |
| [getSpreadTicker()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2211) |  | GET | `/api/v5/market/sprd-ticker` |
| [getSpreadPublicTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2215) |  | GET | `/api/v5/sprd/public-trades` |
| [getSpreadCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2221) |  | GET | `/api/v5/market/sprd-candles` |
| [getSpreadHistoryCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2225) |  | GET | `/api/v5/market/sprd-history-candles` |
| [cancelSpreadAllAfter()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2231) | :closed_lock_with_key:  | POST | `/api/v5/sprd/cancel-all-after` |
| [getInstruments()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2246) |  | GET | `/api/v5/public/instruments` |
| [getEventContractSeries()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2254) |  | GET | `/api/v5/public/event-contract/series` |
| [getEventContractEvents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2264) |  | GET | `/api/v5/public/event-contract/events` |
| [getCorporateActions()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2274) |  | GET | `/api/v5/public/corporate-actions` |
| [getEventContractMarkets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2284) |  | GET | `/api/v5/public/event-contract/markets` |
| [getDeliveryExerciseHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2290) |  | GET | `/api/v5/public/delivery-exercise-history` |
| [getOpenInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2294) |  | GET | `/api/v5/public/open-interest` |
| [getFundingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2298) |  | GET | `/api/v5/public/funding-rate` |
| [getFundingRateHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2302) |  | GET | `/api/v5/public/funding-rate-history` |
| [getMinMaxLimitPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2308) |  | GET | `/api/v5/public/price-limit` |
| [getOptionMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2312) |  | GET | `/api/v5/public/opt-summary` |
| [getEstimatedDeliveryExercisePrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2320) |  | GET | `/api/v5/public/estimated-price` |
| [getDiscountRateAndInterestFreeQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2326) |  | GET | `/api/v5/public/discount-rate-interest-free-quota` |
| [getSystemTime()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2330) |  | GET | `/api/v5/public/time` |
| [getHistoricalMarketData()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2334) |  | GET | `/api/v5/public/market-data-history` |
| [getMarkPrice()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2340) |  | GET | `/api/v5/public/mark-price` |
| [getPositionTiers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2344) |  | GET | `/api/v5/public/position-tiers` |
| [getInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2348) |  | GET | `/api/v5/public/interest-rate-loan-quota` |
| [getVIPInterestRateAndLoanQuota()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2352) |  | GET | `/api/v5/public/vip-interest-rate-loan-quota` |
| [getUnderlying()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2356) |  | GET | `/api/v5/public/underlying` |
| [getInsuranceFund()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2360) |  | GET | `/api/v5/public/insurance-fund` |
| [getMmInstrumentTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2364) |  | GET | `/api/v5/public/mm-instrument-types` |
| [getDeltaHedgeCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2371) |  | GET | `/api/v5/public/delta-hedge-currencies` |
| [getUnitConvert()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2377) |  | GET | `/api/v5/public/convert-contract-coin` |
| [getOptionTickBands()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2381) |  | GET | `/api/v5/public/instrument-tick-bands` |
| [getPremiumHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2388) |  | GET | `/api/v5/public/premium-history` |
| [getIndexTickers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2392) |  | GET | `/api/v5/market/index-tickers` |
| [getIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2399) |  | GET | `/api/v5/market/index-candles` |
| [getHistoricIndexCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2403) |  | GET | `/api/v5/market/history-index-candles` |
| [getMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2407) |  | GET | `/api/v5/market/mark-price-candles` |
| [getHistoricMarkPriceCandles()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2411) |  | GET | `/api/v5/market/history-mark-price-candles` |
| [getOracle()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2417) |  | GET | `/api/v5/market/open-oracle` |
| [getExchangeRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2421) |  | GET | `/api/v5/market/exchange-rate` |
| [getIndexComponents()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2425) |  | GET | `/api/v5/market/index-components` |
| [getEconomicCalendar()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2429) | :closed_lock_with_key:  | GET | `/api/v5/public/economic-calendar` |
| [getPublicBlockTrades()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2435) |  | GET | `/api/v5/market/block-trades` |
| [getSupportCoin()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2445) |  | GET | `/api/v5/rubik/stat/trading-data/support-coin` |
| [getOpenInterestHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2449) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-history` |
| [getTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2458) |  | GET | `/api/v5/rubik/stat/taker-volume` |
| [getContractTakerVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2468) |  | GET | `/api/v5/rubik/stat/taker-volume-contract` |
| [getMarginLendingRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2474) |  | GET | `/api/v5/rubik/stat/margin/loan-ratio` |
| [getTopTradersAccountRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2483) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader` |
| [getTopTradersContractPositionRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2492) |  | GET | `/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader` |
| [getLongShortContractRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2501) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio-contract` |
| [getLongShortRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2510) |  | GET | `/api/v5/rubik/stat/contracts/long-short-account-ratio` |
| [getContractsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2522) |  | GET | `/api/v5/rubik/stat/contracts/open-interest-volume` |
| [getOptionsOpenInterestAndVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2534) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume` |
| [getPutCallRatio()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2541) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-ratio` |
| [getOpenInterestAndVolumeExpiry()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2551) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-expiry` |
| [getOpenInterestAndVolumeStrike()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2561) |  | GET | `/api/v5/rubik/stat/option/open-interest-volume-strike` |
| [getTakerFlow()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2572) |  | GET | `/api/v5/rubik/stat/option/taker-block-volume` |
| [getCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2582) | :closed_lock_with_key:  | GET | `/api/v5/asset/currencies` |
| [getBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2586) | :closed_lock_with_key:  | GET | `/api/v5/asset/balances` |
| [getNonTradableAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2590) | :closed_lock_with_key:  | GET | `/api/v5/asset/non-tradable-assets` |
| [getAccountAssetValuation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2594) | :closed_lock_with_key:  | GET | `/api/v5/asset/asset-valuation` |
| [fundsTransfer()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2600) | :closed_lock_with_key:  | POST | `/api/v5/asset/transfer` |
| [getFundsTransferState()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2605) | :closed_lock_with_key:  | GET | `/api/v5/asset/transfer-state` |
| [getAssetBillsDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2616) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills` |
| [getAssetBillsHistoric()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2638) | :closed_lock_with_key:  | GET | `/api/v5/asset/bills-history` |
| [getLightningDeposits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2652) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-lightning` |
| [getDepositAddress()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2660) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-address` |
| [getDepositHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2664) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-history` |
| [getLockedTravelRuleDeposits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2674) | :closed_lock_with_key:  | GET | `/api/v5/asset/travel-rule/get-locked` |
| [unlockTravelRuleDeposit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2682) | :closed_lock_with_key:  | POST | `/api/v5/asset/travel-rule/unlock` |
| [submitWithdraw()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2688) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal` |
| [submitWithdrawLightning()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2692) | :closed_lock_with_key:  | POST | `/api/v5/asset/withdrawal-lightning` |
| [cancelWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2700) | :closed_lock_with_key:  | POST | `/api/v5/asset/cancel-withdrawal` |
| [getWithdrawalHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2704) | :closed_lock_with_key:  | GET | `/api/v5/asset/withdrawal-history` |
| [getDepositWithdrawStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2708) | :closed_lock_with_key:  | GET | `/api/v5/asset/deposit-withdraw-status` |
| [getExchanges()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2714) |  | GET | `/api/v5/asset/exchange-list` |
| [applyForMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2718) | :closed_lock_with_key:  | POST | `/api/v5/asset/monthly-statement` |
| [getMonthlyStatement()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2722) | :closed_lock_with_key:  | GET | `/api/v5/asset/monthly-statement` |
| [getConvertCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2726) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currencies` |
| [getConvertCurrencyPair()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2730) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/currency-pair` |
| [estimateConvertQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2739) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/estimate-quote` |
| [convertTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2743) | :closed_lock_with_key:  | POST | `/api/v5/asset/convert/trade` |
| [getConvertHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2747) | :closed_lock_with_key:  | GET | `/api/v5/asset/convert/history` |
| [getSubAccountList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2758) | :closed_lock_with_key:  | GET | `/api/v5/users/subaccount/list` |
| [resetSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2762) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/modify-apikey` |
| [getSubAccountBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2772) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/balances` |
| [getSubAccountFundingBalances()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2778) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/balances` |
| [getSubAccountMaxWithdrawal()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2785) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/max-withdrawal` |
| [getSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2792) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/bills` |
| [getManagedSubAccountTransferHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2803) | :closed_lock_with_key:  | GET | `/api/v5/asset/subaccount/managed-subaccount-bills` |
| [transferSubAccountBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2813) | :closed_lock_with_key:  | POST | `/api/v5/asset/subaccount/transfer` |
| [setSubAccountTransferOutPermission()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2819) | :closed_lock_with_key:  | POST | `/api/v5/users/subaccount/set-transfer-out` |
| [getSubAccountCustodyTradingList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2829) | :closed_lock_with_key:  | GET | `/api/v5/users/entrust-subaccount-list` |
| [setSubAccountLoanAllocation()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2835) | :closed_lock_with_key:  | POST | `/api/v5/account/subaccount/set-loan-allocation` |
| [getSubAccountBorrowInterestAndLimit()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2848) | :closed_lock_with_key:  | GET | `/api/v5/account/subaccount/interest-limits` |
| [getStakingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2865) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/offers` |
| [submitStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2873) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/purchase` |
| [redeemStake()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2884) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/redeem` |
| [cancelStakingRequest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2892) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/cancel` |
| [getActiveStakingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2900) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-active` |
| [getStakingOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2913) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/orders-history` |
| [getETHStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2933) |  | GET | `/api/v5/finance/staking-defi/eth/product-info` |
| [getSOLStakingProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2937) |  | GET | `/api/v5/finance/staking-defi/sol/product-info` |
| [purchaseETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2941) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/purchase` |
| [redeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2948) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/redeem` |
| [getETHStakingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2952) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/balance` |
| [getETHStakingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2956) | :closed_lock_with_key:  | GET | `/api/v5/finance/staking-defi/eth/purchase-redeem-history` |
| [cancelRedeemETHStaking()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2969) | :closed_lock_with_key:  | POST | `/api/v5/finance/staking-defi/eth/cancel-redeem` |
| [getAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2980) |  | GET | `/api/v5/finance/staking-defi/eth/apy-history` |
| [getSavingBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2990) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/balance` |
| [savingsPurchaseRedemption()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L2994) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/purchase-redempt` |
| [setLendingRate()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3003) | :closed_lock_with_key:  | POST | `/api/v5/finance/savings/set-lending-rate` |
| [getLendingHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3010) | :closed_lock_with_key:  | GET | `/api/v5/finance/savings/lending-history` |
| [getPublicBorrowInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3014) |  | GET | `/api/v5/finance/savings/lending-rate-summary` |
| [getPublicBorrowHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3018) |  | GET | `/api/v5/finance/savings/lending-rate-history` |
| [getLendingOffers()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3030) |  | GET | `/api/v5/finance/fixed-loan/lending-offers` |
| [getLendingAPYHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3034) |  | GET | `/api/v5/finance/fixed-loan/lending-apy-history` |
| [getLendingVolume()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3038) |  | GET | `/api/v5/finance/fixed-loan/pending-lending-volume` |
| [placeLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3045) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/lending-order` |
| [amendLendingOrder()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3049) | :closed_lock_with_key:  | POST | `/api/v5/finance/fixed-loan/amend-lending-order` |
| [getLendingOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3056) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-orders-list` |
| [getLendingSubOrders()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3063) | :closed_lock_with_key:  | GET | `/api/v5/finance/fixed-loan/lending-sub-orders` |
| [getBorrowableCurrencies()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3076) |  | GET | `/api/v5/finance/flexible-loan/borrow-currencies` |
| [getCollateralAssets()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3084) |  | GET | `/api/v5/finance/flexible-loan/collateral-assets` |
| [getMaxLoanAmount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3090) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/max-loan` |
| [adjustCollateral()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3094) | :closed_lock_with_key:  | POST | `/api/v5/finance/flexible-loan/adjust-collateral` |
| [getLoanInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3101) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-info` |
| [getLoanHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3105) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/loan-history` |
| [getAccruedInterest()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3112) | :closed_lock_with_key:  | GET | `/api/v5/finance/flexible-loan/interest-accrued` |
| [getDcdCurrencyPairs()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3128) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/currency-pair` |
| [getDcdProducts()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3132) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/products` |
| [requestDcdQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3136) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/quote` |
| [submitDcdTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3140) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/trade` |
| [requestDcdRedeemQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3144) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem-quote` |
| [submitDcdRedeem()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3150) | :closed_lock_with_key:  | POST | `/api/v5/finance/sfp/dcd/redeem` |
| [getDcdOrderStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3154) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-status` |
| [getDcdOrderHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3160) | :closed_lock_with_key:  | GET | `/api/v5/finance/sfp/dcd/order-history` |
| [getStableRewardsProductInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3173) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/product-info` |
| [requestStableRewardsQuote()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3183) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/quote` |
| [submitStableRewardsTrade()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3190) | :closed_lock_with_key:  | POST | `/api/v5/finance/stable-rewards/trade` |
| [getStableRewardsBalance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3196) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/balance` |
| [getStableRewardsApyHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3202) |  | GET | `/api/v5/finance/stable-rewards/apy-history` |
| [getStableRewardsSubscribeRedeemHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3209) | :closed_lock_with_key:  | GET | `/api/v5/finance/stable-rewards/subscribe-redeem-history` |
| [getOkusdLimits()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3224) | :closed_lock_with_key:  | GET | `/api/v5/finance/okusd/limits` |
| [subscribeOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3228) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/subscribe` |
| [redeemOkusd()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3234) | :closed_lock_with_key:  | POST | `/api/v5/finance/okusd/redeem` |
| [getGlpTodayPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3244) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/today-performance` |
| [getGlpHistoricalPerformance()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3248) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/historical-performance` |
| [getGlpV2Overview()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3266) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/v2/overview` |
| [getGlpV2AssessmentDetails()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3275) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/v2/details` |
| [getGlpV2PerformanceHistory()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3286) | :closed_lock_with_key:  | GET | `/api/v5/users/glp/v2/history/performance` |
| [getAffiliatePerformanceSummary()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3299) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/performance/summary` |
| [getInviteeDetail()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3305) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/detail` |
| [getAffiliateInviteeList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3309) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/invitee/list` |
| [getAffiliateLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3315) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/link/list` |
| [getAffiliateCoInviterLinkList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3321) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/co-inviter/list` |
| [getAffiliateSubAffiliateList()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3327) | :closed_lock_with_key:  | GET | `/api/v5/affiliate/sub-affiliate/list` |
| [getAffiliateRebateInfo()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3333) | :closed_lock_with_key:  | GET | `/api/v5/users/partner/if-rebate` |
| [getSystemStatus()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3343) |  | GET | `/api/v5/system/status` |
| [getAnnouncements()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3355) |  | GET | `/api/v5/support/announcements` |
| [getAnnouncementTypes()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3364) |  | GET | `/api/v5/support/announcement-types` |
| [createSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3379) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/create-subaccount` |
| [deleteSubAccount()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3388) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/delete-subaccount` |
| [createSubAccountAPIKey()](https://github.com/sieblyio/okx-api/blob/master/src/rest-client.ts#L3392) | :closed_lock_with_key:  | POST | `/api/v5/broker/nd/subaccount/apikey` |

# websocket-api-client.ts

This table includes all endpoints from the official Exchange API docs and corresponding SDK functions for each endpoint that are found in [websocket-api-client.ts](/src/websocket-api-client.ts). 

This client provides WebSocket API endpoints which allow for faster interactions with the OKX API via a WebSocket connection.

| Function | AUTH | HTTP Method | Endpoint |
| -------- | :------: | :------: | -------- |
| [submitNewOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L89) | :closed_lock_with_key:  | WS | `order` |
| [submitMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L104) | :closed_lock_with_key:  | WS | `batch-orders` |
| [cancelOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L119) | :closed_lock_with_key:  | WS | `cancel-order` |
| [cancelMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L134) | :closed_lock_with_key:  | WS | `batch-cancel-orders` |
| [amendOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L149) | :closed_lock_with_key:  | WS | `amend-order` |
| [amendMultipleOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L164) | :closed_lock_with_key:  | WS | `batch-amend-orders` |
| [massCancelOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L179) | :closed_lock_with_key:  | WS | `mass-cancel` |
| [submitSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L194) | :closed_lock_with_key:  | WS | `sprd-order` |
| [amendSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L209) | :closed_lock_with_key:  | WS | `sprd-amend-order` |
| [cancelSpreadOrder()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L226) | :closed_lock_with_key:  | WS | `sprd-cancel-order` |
| [massCancelSpreadOrders()](https://github.com/sieblyio/okx-api/blob/master/src/websocket-api-client.ts#L243) | :closed_lock_with_key:  | WS | `sprd-mass-cancel` |
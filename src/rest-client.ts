import { ASSET_BILL_TYPE } from './constants/funding.js';
import {
  ActivateFeatureRequest,
  BillsHistoryArchiveRequest,
  ChangePositionMarginRequest,
  GetAccountBillSubtypesRequest,
  GetBorrowRepayHistoryRequest,
  GetFixedLoanBorrowingOrdersListRequest,
  GetFixedLoanBorrowQuoteRequest,
  GetHistoricPositionParams,
  GetInstrumentsRequest,
  GetMovePositionsHistoryRequest,
  GetPositionsParams,
  GetQuickMarginBorrowRepayHistoryRequest,
  GetVIPInterestRequest,
  GetVIPLoanOrderDetailRequest,
  GetVIPLoanOrderListRequest,
  MovePositionsRequest,
  PositionBuilderRequest,
  PrecheckSetDeltaNeutralRequest,
  QuickMarginBorrowRepayRequest,
  SetFeeTypeRequest,
  SetLeverageRequest,
  SetMMPConfigRequest,
  SetSettleCurrencyRequest,
  SetTradingConfigRequest,
  SubmitFixedLoanBorrowingOrderRequest,
  UpdateFixedLoanBorrowingOrderRequest,
  WithdrawalHistoryRequest,
} from './types/rest/request/account.js';
import {
  GetAffiliateCoInviterLinkListRequest,
  GetAffiliateInviteeListRequest,
  GetAffiliateLinkListRequest,
  GetAffiliatePerformanceSummaryRequest,
  GetAffiliateSubAffiliateListRequest,
  GetInviteeDetailRequest,
} from './types/rest/request/affiliate.js';
import {
  CancelBlockQuoteRequest,
  CancelBlockRFQRequest,
  CancelMultipleBlockQuoteRequest,
  CancelMultipleBlockRFQRequest,
  CreateBlockQuoteRequest,
  CreateBlockRFQRequest,
  ExecuteBlockQuoteRequest,
  GetBlockQuoteParams,
  GetBlockRFQSParams,
  SetMmpConfigRequest,
  SetQuoteProductsRequest,
} from './types/rest/request/block-trading.js';
import {
  ConvertQuoteEstimateRequest,
  ConvertTradeRequest,
} from './types/rest/request/convert.js';
import {
  CloseSubpositionRequest,
  CopySettingsRequest,
  GetCopyTradersRequest,
  GetCTBatchLeverageInfoRequest,
  GetCTHistoryLeadTradersRequest,
  GetCTProfitDetailsRequest,
  GetCurrentSubpositionsRequest,
  GetLeadTraderPositionsRequest,
  GetLeadTraderRanksRequest,
  GetLeadTraderStatsRequest,
  GetPrivateLeadTraderRanksRequest,
  GetSubpositionsHistoryRequest,
  PlaceCTAlgoOrderRequest,
  SetCTBatchLeverageRequest,
} from './types/rest/request/copy-trading.js';
import {
  GetDcdOrderHistoryRequest,
  GetDcdOrderStatusRequest,
  GetDcdProductsRequest,
  RequestDcdQuoteRequest,
  RequestDcdRedeemQuoteRequest,
  SubmitDcdRedeemRequest,
  SubmitDcdTradeRequest,
} from './types/rest/request/dual-investment.js';
import {
  FundingRateRequest,
  FundsTransferRequest,
  GetDepositHistoryRequest,
  GetDepositWithdrawStatusRequest,
  GetFundingRateRequest,
  WithdrawRequest,
} from './types/rest/request/funding.js';
import {
  GetGlpHistoricalPerformanceRequest,
  GetGlpV2AssessmentDetailsRequest,
  GetGlpV2PerformanceHistoryRequest,
} from './types/rest/request/glp.js';
import {
  CloseContractGridPositionRequest,
  GetGridAlgoOrdersRequest,
  GetRSIBackTestingRequest,
  GridAlgoOrderRequest,
  GridAlgoOrderType,
  MaxGridQuantityRequest,
  StopGridAlgoOrderRequest,
} from './types/rest/request/grid-trading.js';
import {
  RedeemOkusdRequest,
  SubscribeOkusdRequest,
} from './types/rest/request/okusd.js';
import {
  CandleRequest,
  EconomicCalendarRequest,
  GetContractOpenInterestHistoryRequest,
  GetContractTakerVolumeRequest,
  GetCorporateActionsRequest,
  GetEventContractEventsRequest,
  GetEventContractMarketsRequest,
  GetEventContractSeriesRequest,
  GetHistoricalMarketDataRequest,
  GetInsuranceFundRequest,
  GetOptionTradesRequest,
  GetPremiumHistoryRequest,
  GetTopTradersContractLongShortRatioRequest,
  UnitConvertRequest,
} from './types/rest/request/public.js';
import {
  AmendRecurringBuyOrderRequest,
  GetRecurringBuyOrderListRequest,
  PlaceRecurringBuyOrderRequest,
} from './types/rest/request/recurring-buy.js';
import { PaginatedSymbolRequest } from './types/rest/request/shared.js';
import {
  AdjustMarginBalanceRequest,
  AmendTPSLRequest,
  CancelSubOrderRequest,
  CreateSignalBotRequest,
  CreateSignalRequest,
  GetSignalBotEventHistoryRequest,
  GetSignalBotPositionHistoryRequest,
  GetSignalBotRequest,
  GetSignalBotSubOrdersRequest,
  GetSignalsRequest,
  PlaceSubOrderRequest,
  SetSignalInstrumentsRequest,
} from './types/rest/request/signal-bot.js';
import {
  GetLendingOrderListRequest,
  GetLendingSubOrderListRequest,
  LendingOrder,
} from './types/rest/request/simple-earn.js';
import {
  GetActiveSpreadOrdersRequest,
  GetSpreadCandlesRequest,
  GetSpreadOrderHistoryArchiveRequest,
  GetSpreadOrderHistoryRequest,
  GetSpreadsRequest,
  GetSpreadTradesRequest,
  PlaceSpreadOrderRequest,
  UpdateSpreadOrderRequest,
} from './types/rest/request/spread-trading.js';
import {
  GetStableRewardsApyHistoryRequest,
  GetStableRewardsBalanceRequest,
  GetStableRewardsProductInfoRequest,
  GetStableRewardsSubscribeRedeemHistoryRequest,
  RequestStableRewardsQuoteRequest,
  SubmitStableRewardsTradeRequest,
} from './types/rest/request/stable-rewards.js';
import {
  GetManagedSubAccountTransferHistoryRequest,
  GetSubAccountMaxWithdrawalsRequest,
  SetSubAccountLoanAllocationRequest,
  SubAccountTransferRequest,
} from './types/rest/request/subaccount.js';
import {
  AlgoLongHistoryRequest,
  AlgoOrderDetailsRequest,
  AlgoOrderRequest,
  AlgoRecentHistoryRequest,
  AmendAlgoOrderRequest,
  AmendOrderRequest,
  CancelAlgoOrderRequest,
  ClosePositionRequest,
  FillsHistoryRequest,
  OrderHistoryRequest,
  OrderIdRequest,
  OrderPrecheckRequest,
  OrderRequest,
  SubmitEasyConvertRequest,
  SubmitOneClickRepayRequest,
} from './types/rest/request/trade.js';
import {
  AccountBalance,
  AccountBill,
  AccountBillTypeDefinition,
  AccountChangeMarginResult,
  AccountConfiguration,
  AccountFeeRate,
  AccountHistoryBill,
  AccountInstrument,
  AccountIsolatedMode,
  AccountLeverage,
  AccountLeverageResult,
  AccountMaxLoan,
  AccountMaxOrderAmount,
  AccountMaxTradableAmount,
  AccountModeResult,
  AccountPosition,
  AccountPositionModeResult,
  AccountPositionRisk,
  AccountRiskState,
  AdjustLeverageInfo,
  AutoLoanResult,
  BorrowRepayHistoryItem,
  FixedLoanBorrowingLimit,
  FixedLoanBorrowQuote,
  Greeks,
  HistoricAccountPosition,
  InterestAccrued,
  InterestRate,
  MaxWithdrawal,
  MMPConfig,
  MovePositionsResult,
  PrecheckSetDeltaNeutralResult,
  QuickMarginBorrowRepayRecord,
  QuickMarginBorrowRepayResult,
  SetFeeTypeResult,
  SetMMPConfigResult,
  SetSettleCurrencyResult,
  SetTradingConfigResult,
  VIPInterest,
  VIPLoanOrder,
  VIPLoanOrderDetail,
} from './types/rest/response/private-account.js';
import {
  AffiliateCoInviterLinkListItem,
  AffiliateInviteeListItem,
  AffiliateLinkListItem,
  AffiliatePerformanceSummary,
  AffiliateSubAffiliateListItem,
  InviteeDetail,
} from './types/rest/response/private-affiliate.js';
import {
  BlockCounterParty,
  BlockMakerInstrumentSettings,
  BlockMMPConfig,
  BlockRFQResult,
  BlockTradeResult,
  CancelBlockQuoteResult,
  CancelBlockRFQResult,
  CreateBlockQuoteResult,
  CreateRFQResult,
  ExecuteBlockQuoteResult,
  GetBlockQuoteResult,
  PublicBlockTrade,
  SetMmpConfigResult,
} from './types/rest/response/private-block-trading.js';
import {
  CurrentSubposition,
  GetAccountConfigurationResult,
  GetCopySettingsResult,
  GetCopyTradersResult,
  GetCopyTradingConfigResult,
  GetCTBatchLeverageInfoResult,
  GetCTHistoryLeadTradersResult,
  GetCTMyLeadTradersResult,
  GetCTProfitDetailsResult,
  GetCTTotalProfitResult,
  GetCTUnrealizedProfitResult,
  GetLeadTraderRanksResult,
  GetPrivateLeadTraderRanksResult,
  LeadTraderCurrentPosition,
  LeadTraderPnl,
  LeadTraderPositionHistory,
  LeadTraderPreference,
  LeadTraderStats,
  PlaceCTAlgoOrderResult,
  SetCTBatchLeverageResult,
  SubpositionsHistory,
} from './types/rest/response/private-copy-trading.js';
import {
  DcdCurrencyPair,
  DcdOrderHistoryItem,
  DcdOrderStatus,
  DcdProduct,
  DcdQuote,
  DcdRedeemQuote,
  DcdRedeemResult,
  DcdTradeResult,
} from './types/rest/response/private-dual-investment.js';
import {
  AccruedInterestItem,
  AccruedInterestRequest,
  AdjustCollateralRequest,
  CollateralAssetsResponse,
  GetFlexibleLoanCollateralAssetsRequest,
  GetLoanInfoRequest,
  LoanHistoryItem,
  LoanHistoryRequest,
  LoanInfo,
  MaxLoanRequest,
  MaxLoanResponse,
} from './types/rest/response/private-flexible-loan.js';
import {
  AccountAssetValuation,
  AssetBillDetails,
  DepositHistory,
  FundingBalance,
  FundingCurrency,
  FundTransferResult,
  FundTransferState,
  NonTradableAsset,
  WithdrawResponse,
} from './types/rest/response/private-funding.js';
import {
  GlpHistoricalPerformanceItem,
  GlpTodayPerformance,
  GlpV2AssessmentDetails,
  GlpV2Overview,
  GlpV2PerformanceHistory,
} from './types/rest/response/private-glp.js';
import {
  OkusdLimits,
  OkusdRedeemResult,
  OkusdSubscribeResult,
} from './types/rest/response/private-okusd.js';
import {
  RecurringBuyOrder,
  RecurringBuyOrderResult,
  RecurringBuySubOrder,
} from './types/rest/response/private-recurring-buy.js';
import {
  CancelSignalBotsResult,
  CreateSignalBotResult,
  CreateSignalResult,
  GetSignalsResult,
} from './types/rest/response/private-signal-bot.js';
import {
  CancelSpreadOrderResponse,
  PlaceSpreadOrderResponse,
  PublicSpreadTrade,
  SpreadCandle,
  SpreadDetails,
  SpreadOrder,
  SpreadOrderBook,
  SpreadTicker,
  SpreadTrade,
  UpdateSpreadOrderResponse,
} from './types/rest/response/private-spread-trading.js';
import {
  StableRewardsApyHistoryItem,
  StableRewardsBalance,
  StableRewardsProductInfo,
  StableRewardsQuote,
  StableRewardsSubscribeRedeemHistoryItem,
  StableRewardsTradeResult,
} from './types/rest/response/private-stable-rewards.js';
import {
  ManagedSubAccountTransfer,
  SubAccount,
  SubAccountAPIReset,
  SubAccountBalances,
  SubAccountMaxWithdrawal,
  SubAccountTransferResult,
} from './types/rest/response/private-subaccount.js';
import {
  AlgoOrderDetailsResult,
  AlgoOrderListItem,
  AlgoOrderResult,
  AmendAlgoOrderResult,
  AmendedOrder,
  CancelAllAfterResponse,
  CancelledOrderResult,
  ClosedPositions,
  HistoricAlgoOrder,
  HistoricOrder,
  OrderDetails,
  OrderFill,
  OrderListItem,
  OrderResult,
} from './types/rest/response/private-trade.js';
import {
  Announcement,
  Candle,
  CandleNoVolume,
  CorporateAction,
  DeltaHedgeCurrency,
  EconomicCalendarData,
  EstimatedDeliveryExercisePrice,
  EthStakingProductInfo,
  EventContractEvent,
  EventContractMarket,
  EventContractSeries,
  FundingRateHistory,
  IndexTicker,
  Instrument,
  InsuranceFund,
  InterestRateAndLoanQuota,
  MarketDataHistoryResult,
  MmInstrumentType,
  OptionTrade,
  OptionTrades,
  OrderBook,
  OrderBookRpi,
  PublicBorrowHistoryRecord,
  PublicFundingRate,
  SolStakingProductInfo,
  SystemTime,
  Ticker,
  Trade,
  UnitConvertData,
} from './types/rest/response/public-data.js';
import {
  AccountLevel,
  APIResponse,
  ContractGridDirection,
  GridAlgoSubOrderType,
  InstrumentType,
  MarginMode,
  numberInString,
  Pagination,
  PositionSide,
  PosMode,
  TimestampObject,
} from './types/rest/shared.js';
import BaseRestClient from './util/BaseRestClient.js';

export class RestClient extends BaseRestClient {
  /**
   *
   * Custom SDK functions
   *
   */

  /**
   * This method is used to get the latency and time sync between the client and the server.
   * This is not official API endpoint and is only used for internal testing purposes.
   * Use this method to check the latency and time sync between the client and the server.
   * Final values might vary slightly, but it should be within few ms difference.
   * If you have any suggestions or improvements to this measurement, please create an issue or pull request on GitHub.
   */
  async fetchLatencySummary(): Promise<any> {
    const clientTimeReqStart = Date.now();
    const serverTime = await this.getServerTime();
    const clientTimeReqEnd = Date.now();
    console.log('serverTime', serverTime);

    const serverTimeMs = serverTime;
    const roundTripTime = clientTimeReqEnd - clientTimeReqStart;
    const estimatedOneWayLatency = Math.floor(roundTripTime / 2);

    // Adjust server time by adding estimated one-way latency
    const adjustedServerTime = serverTimeMs + estimatedOneWayLatency;

    // Calculate time difference between adjusted server time and local time
    const timeDifference = adjustedServerTime - clientTimeReqEnd;

    const result = {
      localTime: clientTimeReqEnd,
      serverTime: serverTimeMs,
      roundTripTime,
      estimatedOneWayLatency,
      adjustedServerTime,
      timeDifference,
    };

    console.log('Time synchronization results:');
    console.log(result);

    console.log(
      `Your approximate latency to exchange server:
      One way: ${estimatedOneWayLatency}ms.
      Round trip: ${roundTripTime}ms.
      `,
    );

    if (timeDifference > 500) {
      console.warn(
        `WARNING! Time difference between server and client clock is greater than 500ms. It is currently ${timeDifference}ms.
        Consider adjusting your system clock to avoid unwanted clock sync errors!
        Visit https://github.com/tiagosiebler/awesome-crypto-examples/wiki/Timestamp-for-this-request-is-outside-of-the-recvWindow for more information`,
      );
    } else {
      console.log(
        `Time difference between server and client clock is within acceptable range of 500ms. It is currently ${timeDifference}ms.`,
      );
    }

    return result;
  }

  /**
   *
   * OKX misc endpoints
   *
   */

  async getServerTime(): Promise<number> {
    const response = await this.get('/api/v5/public/time');

    const timestamp = Array.isArray(response) ? Number(response[0]?.ts) : NaN;
    if (
      !Array.isArray(response) ||
      isNaN(timestamp) ||
      typeof timestamp !== 'number'
    ) {
      throw response;
    }
    return timestamp;
  }

  /**
   *
   * Trading account endpoints
   *
   */

  getAccountInstruments(
    params: GetInstrumentsRequest,
  ): Promise<AccountInstrument[]> {
    return this.getPrivate('/api/v5/account/instruments', params);
  }

  getBalance(params?: { ccy?: string }): Promise<AccountBalance[]> {
    return this.getPrivate('/api/v5/account/balance', params);
  }

  getPositions(params?: GetPositionsParams): Promise<AccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions', params);
  }

  getPositionsHistory(
    params?: GetHistoricPositionParams,
  ): Promise<HistoricAccountPosition[]> {
    return this.getPrivate('/api/v5/account/positions-history', params);
  }

  getAccountPositionRisk(params?: {
    instType?: Omit<'SPOT', InstrumentType>;
  }): Promise<AccountPositionRisk[]> {
    return this.getPrivate('/api/v5/account/account-position-risk', params);
  }

  /** Up to last 7 days */
  getBills(params?: any): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills', params);
  }

  /** Last 3 months */
  getBillsArchive(params?: any): Promise<AccountBill[]> {
    return this.getPrivate('/api/v5/account/bills-archive', params);
  }

  /**
   * Bill type ids and subTypes (unified account bill CSV columns reference `type` / `subType`).
   * @see GET /api/v5/account/subtypes
   */
  getAccountBillSubtypes(
    params?: GetAccountBillSubtypesRequest,
  ): Promise<AccountBillTypeDefinition[]> {
    return this.getPrivate('/api/v5/account/subtypes', params);
  }

  /**
   * Apply for bill data since 1 February, 2021 except for the current quarter.
   * Check the "Get bills details (since 2021)" endpoint in about 2 hours for the download link; in peak load it may take longer, and if still missing after 3 hours contact support.
   * It is only applicable to the data from the unified account.
   *
   * This endpoint submits a request for bill data. You can then use getRequestedBillsHistoryLink to get the link to the bill data.
   * It may take some time to generate the data.
   */
  requestBillsHistoryDownloadLink(
    params: BillsHistoryArchiveRequest,
  ): Promise<AccountHistoryBill[]> {
    return this.postPrivate('/api/v5/account/bills-history-archive', params);
  }

  /**
   * This endpoint returns the link to the bill data which you can request using requestBillsHistoryDownloadLink.
   */
  getRequestedBillsHistoryLink(
    params: BillsHistoryArchiveRequest,
  ): Promise<AccountHistoryBill[]> {
    return this.getPrivate('/api/v5/account/bills-history-archive', params);
  }

  getAccountConfiguration(): Promise<AccountConfiguration[]> {
    return this.getPrivate('/api/v5/account/config');
  }

  setPositionMode(params: {
    posMode: PosMode;
  }): Promise<AccountPositionModeResult[]> {
    return this.postPrivate('/api/v5/account/set-position-mode', params);
  }

  setSettleCurrency(
    params: SetSettleCurrencyRequest,
  ): Promise<SetSettleCurrencyResult[]> {
    return this.postPrivate('/api/v5/account/set-settle-currency', params);
  }

  setFeeType(params: SetFeeTypeRequest): Promise<SetFeeTypeResult[]> {
    return this.postPrivate('/api/v5/account/set-fee-type', params);
  }

  setLeverage(params: SetLeverageRequest): Promise<AccountLeverageResult[]> {
    return this.postPrivate('/api/v5/account/set-leverage', params);
  }

  /** Max buy/sell amount or open amount */
  getMaxBuySellAmount(params: {
    instId: string;
    tdMode: 'cross' | 'isolated' | 'cash';
    ccy?: string;
    px?: string;
    leverage?: string;
    unSpotOffset?: boolean;
    /** EVENTS: `yes` / `no` (required for max size when applicable). */
    outcome?: string;
  }): Promise<AccountMaxOrderAmount[]> {
    return this.getPrivate('/api/v5/account/max-size', params);
  }

  getMaxAvailableTradableAmount(params: {
    instId: string;
    ccy?: string;
    tdMode: 'cross' | 'isolated' | 'cash';
    reduceOnly?: boolean;
    unSpotOffset?: boolean;
  }): Promise<AccountMaxTradableAmount[]> {
    return this.getPrivate('/api/v5/account/max-avail-size', params);
  }

  changePositionMargin(
    params: ChangePositionMarginRequest,
  ): Promise<AccountChangeMarginResult[]> {
    return this.postPrivate('/api/v5/account/position/margin-balance', params);
  }

  /**
   * Move positions between accounts under the same master account (VIP6+).
   * TradeFi positions are not supported (error 70004).
   * @see POST /api/v5/account/move-positions — 2026-05-15 changelog
   */
  movePositions(params: MovePositionsRequest): Promise<MovePositionsResult[]> {
    return this.postPrivate('/api/v5/account/move-positions', params);
  }

  /**
   * Move position history for the last 3 days (VIP6+).
   * @see GET /api/v5/account/move-positions-history
   */
  getMovePositionsHistory(
    params?: GetMovePositionsHistoryRequest,
  ): Promise<MovePositionsResult[]> {
    return this.getPrivate('/api/v5/account/move-positions-history', params);
  }

  getLeverage(params: {
    instId?: string;
    ccy?: string;
    mgnMode: MarginMode;
  }): Promise<AccountLeverage[]> {
    return this.getPrivate('/api/v5/account/leverage-info', params);
  }

  /**
   * @deprecated - will be removed in next major release
   * Use getLeverage() instead
   */
  getLeverageV2(params: {
    instId?: string;
    ccy?: string;
    mgnMode: MarginMode;
  }): Promise<AccountLeverage[]> {
    return this.getPrivate('/api/v5/account/leverage-info', params);
  }

  getLeverageEstimatedInfo(params: {
    instType: string;
    mgnMode: MarginMode;
    lever: string;
    instId?: string;
    ccy?: string;
    posSide: PositionSide;
  }): Promise<AdjustLeverageInfo[]> {
    return this.getPrivate('/api/v5/account/adjust-leverage-info', params);
  }

  getMaxLoan(params: {
    instId: string;
    mgnMode: MarginMode;
    mgnCcy?: string;
    ccy?: string;
  }): Promise<AccountMaxLoan[]> {
    return this.getPrivate('/api/v5/account/max-loan', params);
  }

  getFeeRates(params: {
    instType: InstrumentType;
    instId?: string;
    uly?: string;
    instFamily?: string;
    groupId?: string;
    ruleType?: string;
  }): Promise<AccountFeeRate[]> {
    return this.getPrivate('/api/v5/account/trade-fee', params);
  }

  getInterestAccrued(params?: {
    type?: '1' | '2';
    ccy?: string;
    instId?: string;
    mgnMode?: MarginMode;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<InterestAccrued[]> {
    return this.getPrivate('/api/v5/account/interest-accrued', params);
  }

  getInterestRate(params?: { ccy?: string }): Promise<InterestRate[]> {
    return this.getPrivate('/api/v5/account/interest-rate', params);
  }

  setGreeksDisplayType(params: { greeksType: 'PA' | 'BS' }): Promise<Greeks[]> {
    return this.postPrivate('/api/v5/account/set-greeks', params);
  }

  setIsolatedMode(params: {
    isoMode: 'automatic' | 'autonomy';
    type: 'MARGIN' | 'CONTRACTS';
  }): Promise<AccountIsolatedMode[]> {
    return this.postPrivate('/api/v5/account/set-isolated-mode', params);
  }

  getMaxWithdrawals(params?: { ccy?: string }): Promise<MaxWithdrawal[]> {
    return this.getPrivate('/api/v5/account/max-withdrawal', params);
  }

  getAccountRiskState(): Promise<AccountRiskState[]> {
    return this.getPrivate('/api/v5/account/risk-state');
  }

  setAccountCollateralAssets(params: {
    type: 'all' | 'custom';
    collateralEnabled: boolean;
    ccyList?: string[];
  }): Promise<
    {
      type: string;
      ccyList: string[];
      collateralEnabled: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-collateral-assets', params);
  }

  getAccountCollateralAssets(params?: {
    ccy?: string;
    collateralEnabled?: boolean;
  }): Promise<
    {
      ccy: string;
      collateralEnabled: boolean;
    }[]
  > {
    return this.getPrivate('/api/v5/account/collateral-assets', params);
  }

  submitQuickMarginBorrowRepay(
    params: QuickMarginBorrowRepayRequest,
  ): Promise<QuickMarginBorrowRepayResult[]> {
    return this.postPrivate(
      '/api/v5/account/quick-margin-borrow-repay',
      params,
    );
  }

  getQuickMarginBorrowRepayHistory(
    params: GetQuickMarginBorrowRepayHistoryRequest,
  ): Promise<QuickMarginBorrowRepayRecord[]> {
    return this.getPrivate(
      '/api/v5/account/quick-margin-borrow-repay-history',
      params,
    );
  }

  borrowRepayVIPLoan(params: {
    ccy: string;
    side: 'borrow' | 'repay';
    amt: numberInString;
    ordId?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/account/borrow-repay', params);
  }

  getVIPLoanBorrowRepayHistory(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/account/borrow-repay-history', params);
  }

  getVIPInterestAccrued(params: GetVIPInterestRequest): Promise<VIPInterest[]> {
    return this.getPrivate('/api/v5/account/vip-interest-accrued', params);
  }

  getVIPInterestDeducted(
    params: GetVIPInterestRequest,
  ): Promise<VIPInterest[]> {
    return this.getPrivate('/api/v5/account/vip-interest-deducted', params);
  }

  getVIPLoanOrders(
    params: GetVIPLoanOrderListRequest,
  ): Promise<VIPLoanOrder[]> {
    return this.getPrivate('/api/v5/account/vip-loan-order-list', params);
  }

  getVIPLoanOrder(
    params: GetVIPLoanOrderDetailRequest,
  ): Promise<VIPLoanOrderDetail[]> {
    return this.getPrivate('/api/v5/account/vip-loan-order-detail', params);
  }

  getBorrowInterestLimits(params?: {
    type?: '1' | '2';
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/interest-limits', params);
  }

  getFixedLoanBorrowLimit(): Promise<FixedLoanBorrowingLimit[]> {
    return this.getPrivate('/api/v5/account/fixed-loan/borrowing-limit');
  }

  getFixedLoanBorrowQuote(
    params: GetFixedLoanBorrowQuoteRequest,
  ): Promise<FixedLoanBorrowQuote[]> {
    return this.getPrivate(
      '/api/v5/account/fixed-loan/borrowing-quote',
      params,
    );
  }

  submitFixedLoanBorrowOrder(
    params: SubmitFixedLoanBorrowingOrderRequest,
  ): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/borrowing-order',
      params,
    );
  }

  updateFixedLoanBorrowOrder(
    params: UpdateFixedLoanBorrowingOrderRequest,
  ): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/amend-borrowing-order',
      params,
    );
  }

  manualRenewFixedLoanBorrowOrder(params: {
    ordId: string;
    maxRate: string;
  }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/manual-reborrow',
      params,
    );
  }

  repayFixedLoanBorrowOrder(params: { ordId: string }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/repay-borrowing-order',
      params,
    );
  }

  convertFixedLoanToMarketLoan(params: { ordId: string }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/convert-to-market-loan',
      params,
    );
  }

  reduceFixedLoanLiabilities(params: {
    ordId: string;
    pendingRepay: boolean;
  }): Promise<
    {
      ordId: string;
      pendingRepay: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/fixed-loan/reduce-liabilities',
      params,
    );
  }

  getFixedLoanBorrowOrders(
    params: GetFixedLoanBorrowingOrdersListRequest,
  ): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/fixed-loan/borrowing-orders-list',
      params,
    );
  }

  manualBorrowRepay(params: {
    ccy: string;
    side: 'borrow' | 'repay';
    amt: string;
  }): Promise<
    {
      ccy: string;
      side: 'borrow' | 'repay';
      amt: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/spot-manual-borrow-repay', params);
  }

  setAutoRepay(params: { autoRepay: boolean }): Promise<
    {
      autoRepay: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-auto-repay', params);
  }

  getBorrowRepayHistory(
    params?: GetBorrowRepayHistoryRequest,
  ): Promise<BorrowRepayHistoryItem[]> {
    return this.getPrivate('/api/v5/account/spot-borrow-repay-history', params);
  }

  positionBuilder(params: PositionBuilderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/account/position-builder', params);
  }

  updateRiskOffsetAmount(params: {
    ccy: string;
    clSpotInUseAmt: string;
  }): Promise<
    {
      ccy: string;
      clSpotInUseAmt: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-riskOffset-amt', params);
  }

  getGreeks(params?: { ccy?: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/greeks', params);
  }

  getPMLimitation(params: {
    instType: 'SWAP' | 'FUTURES' | 'OPTION';
    uly?: string;
    instFamily?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/account/position-tiers', params);
  }

  updateRiskOffsetType(params: { type: '1' | '2' | '3' | '4' }): Promise<
    {
      type: '1' | '2' | '3' | '4';
    }[]
  > {
    return this.postPrivate('/api/v5/account/set-riskOffset-type', params);
  }

  activateOption(): Promise<
    {
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/account/activate-option');
  }

  /**
   * Activate USDC order book trading after place order returns error 54109.
   * Shared by the master account and its sub-accounts; one successful call is enough.
   * Error 51773 means this activation is not supported for the account.
   */
  activateFeature(
    params: ActivateFeatureRequest,
  ): Promise<Record<string, never>[]> {
    return this.postPrivate('/api/v5/account/activate-feature', params);
  }

  setAutoLoan(params: { autoLoan: boolean }): Promise<AutoLoanResult[]> {
    return this.postPrivate('/api/v5/account/set-auto-loan', params);
  }

  presetAccountLevelSwitch(params: {
    acctLv: '2' | '3' | '4';
    lever?: string;
    riskOffsetType?: '1' | '2' | '3' | '4';
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/account/account-level-switch-preset',
      params,
    );
  }

  getAccountSwitchPrecheck(params: {
    acctLv: '1' | '2' | '3' | '4';
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/set-account-switch-precheck',
      params,
    );
  }

  setAccountMode(params: {
    acctLv: AccountLevel;
  }): Promise<AccountModeResult[]> {
    return this.postPrivate('/api/v5/account/set-account-level', params);
  }

  resetMMPStatus(params: { instType?: 'OPTION'; instFamily: string }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/account/mmp-reset', params);
  }

  setMMPConfig(params: SetMMPConfigRequest): Promise<SetMMPConfigResult[]> {
    return this.postPrivate('/api/v5/account/mmp-config', params);
  }

  getMMPConfig(params?: { instFamily?: string }): Promise<MMPConfig[]> {
    return this.getPrivate('/api/v5/account/mmp-config', params);
  }

  setTradingConfig(
    params: SetTradingConfigRequest,
  ): Promise<SetTradingConfigResult[]> {
    return this.postPrivate('/api/v5/account/set-trading-config', params);
  }

  precheckSetDeltaNeutral(
    params: PrecheckSetDeltaNeutralRequest,
  ): Promise<PrecheckSetDeltaNeutralResult[]> {
    return this.getPrivate(
      '/api/v5/account/precheck-set-delta-neutral',
      params,
    );
  }

  /**
   *
   * Orderbook trading - trade endpoints
   *
   */

  submitOrder(params: OrderRequest): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/order', params);
  }

  submitMultipleOrders(params: OrderRequest[]): Promise<OrderResult[]> {
    return this.postPrivate('/api/v5/trade/batch-orders', params);
  }

  cancelOrder(params: OrderIdRequest): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-order', params);
  }

  cancelMultipleOrders(
    params: OrderIdRequest[],
  ): Promise<CancelledOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-batch-orders', params);
  }

  amendOrder(params: AmendOrderRequest): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-order', params);
  }

  amendMultipleOrders(params: AmendOrderRequest[]): Promise<AmendedOrder[]> {
    return this.postPrivate('/api/v5/trade/amend-batch-orders', params);
  }

  closePositions(params: ClosePositionRequest): Promise<ClosedPositions[]> {
    return this.postPrivate('/api/v5/trade/close-position', params);
  }

  getOrderDetails(params: OrderIdRequest): Promise<OrderDetails[]> {
    return this.getPrivate('/api/v5/trade/order', params);
  }

  getOrderList(params?: OrderHistoryRequest): Promise<OrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-pending', params);
  }

  /**
   * Get history for last 7 days
   */
  getOrderHistory(params: OrderHistoryRequest): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history', params);
  }

  /**
   * Get history for last 3 months
   */
  getOrderHistoryArchive(
    params: OrderHistoryRequest,
  ): Promise<HistoricOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-history-archive', params);
  }

  /**
   * Get history for last 7 days
   */
  getFills(params?: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills', params);
  }

  /**
   * Get history for last 3 months
   */
  getFillsHistory(params: FillsHistoryRequest): Promise<OrderFill[]> {
    return this.getPrivate('/api/v5/trade/fills-history', params);
  }

  /** Get easy convert currency list */
  getEasyConvertCurrencies(params?: { source?: string }): Promise<any> {
    return this.getPrivate('/api/v5/trade/easy-convert-currency-list', params);
  }

  /**
   *
   * Place easy convert : Convert small currencies to mainstream currencies.
   * Only applicable to the crypto balance less than $10.
   *
   * Maximum 5 currencies can be selected in one order.
   * Supply currencies as an array in the "fromCcy" field.
   *
   */
  submitEasyConvert(
    params: SubmitEasyConvertRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v5/trade/easy-convert', params);
  }

  /** Get easy convert history : Get the history and status of easy convert trades. */
  getEasyConvertHistory(params?: Pagination): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v5/trade/easy-convert-history', params);
  }

  /**
   *
   * Get one-click repay currency list : Get list of debt currency data and repay currencies.
   * Debt currencies include both cross and isolated debts.
   */
  getOneClickRepayCurrencyList(params?: {
    debtType?: 'cross' | 'isolated';
  }): Promise<APIResponse<any>> {
    return this.getPrivate(
      '/api/v5/trade/one-click-repay-currency-list',
      params,
    );
  }

  /**
   * Trade one-click repay to repay cross debts.
   * Isolated debts are not applicable.
   * The maximum repayment amount is based on the remaining available balance of funding and trading accounts.
   * Supply debt currencies as an array in the "debtCcy" field.
   */
  submitOneClickRepay(
    params: SubmitOneClickRepayRequest,
  ): Promise<APIResponse<any>> {
    return this.postPrivate('/api/v5/trade/one-click-repay', params);
  }

  /** Get the history and status of one-click repay trades. */
  getOneClickRepayHistory(params?: Pagination): Promise<APIResponse<any>> {
    return this.getPrivate('/api/v5/trade/one-click-repay-history', params);
  }

  cancelMassOrder(params: {
    instType: string;
    instFamily: string;
    lockInterval?: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/trade/mass-cancel', params);
  }

  cancelAllAfter(params: {
    timeOut: string;
    tag?: string;
  }): Promise<CancelAllAfterResponse[]> {
    return this.postPrivate('/api/v5/trade/cancel-all-after', params);
  }

  getAccountRateLimit(): Promise<any[]> {
    return this.getPrivate('/api/v5/trade/account-rate-limit');
  }

  submitOrderPrecheck(params: OrderPrecheckRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/trade/order-precheck', params);
  }

  /**
   *
   * Orderbook trading - Algo trading endpoints
   *
   */

  placeAlgoOrder(params: AlgoOrderRequest): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/order-algo', params);
  }

  cancelAlgoOrder(
    params: CancelAlgoOrderRequest[],
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-algos', params);
  }

  amendAlgoOrder(
    params: AmendAlgoOrderRequest,
  ): Promise<AmendAlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/amend-algos', params);
  }

  cancelAdvanceAlgoOrder(
    params: CancelAlgoOrderRequest[],
  ): Promise<AlgoOrderResult[]> {
    return this.postPrivate('/api/v5/trade/cancel-advance-algos', params);
  }

  getAlgoOrderDetails(
    params: AlgoOrderDetailsRequest,
  ): Promise<AlgoOrderDetailsResult[]> {
    return this.getPrivate('/api/v5/trade/order-algo', params);
  }

  getAlgoOrderList(
    params: AlgoRecentHistoryRequest,
  ): Promise<AlgoOrderListItem[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-pending', params);
  }

  getAlgoOrderHistory(
    params: AlgoLongHistoryRequest,
  ): Promise<HistoricAlgoOrder[]> {
    return this.getPrivate('/api/v5/trade/orders-algo-history', params);
  }

  /**
   *
   * Orderbook trading - Grid trading endpoints
   *
   */

  placeGridAlgoOrder(params: GridAlgoOrderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/order-algo', params);
  }

  amendGridAlgoOrder(params: {
    algoId: string;
    instId: string;
    slTriggerPx?: string;
    tpTriggerPx?: string;
    tpRatio?: string;
    slRatio?: string;
    triggerParams?: {
      triggerAction?: string;
      triggerStrategy?: string;
      triggerPx?: string;
      stopType?: string;
    }[];
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/amend-order-algo', params);
  }

  stopGridAlgoOrder(orders: StopGridAlgoOrderRequest[]): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/stop-order-algo', orders);
  }

  closeGridContractPosition(
    params: CloseContractGridPositionRequest,
  ): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/close-position', params);
  }

  cancelGridContractCloseOrder(params: {
    algoId: string;
    ordId: string;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/cancel-close-order',
      params,
    );
  }

  instantTriggerGridAlgoOrder(params: { algoId: string }): Promise<
    {
      algoId: string;
      algoClOrdId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/order-instant-trigger',
      params,
    );
  }

  getGridAlgoOrderList(params: GetGridAlgoOrdersRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-pending',
      params,
    );
  }

  getGridAlgoOrderHistory(params: GetGridAlgoOrdersRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-history',
      params,
    );
  }

  getGridAlgoOrderDetails(params: {
    algoOrdType: GridAlgoOrderType;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/grid/orders-algo-details',
      params,
    );
  }

  getGridAlgoSubOrders(params: {
    algoOrdType: GridAlgoOrderType;
    algoId: string;
    type: GridAlgoSubOrderType;
    groupId?: string;
    after?: numberInString;
    before?: numberInString;
    limit?: number;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/sub-orders', params);
  }

  getGridAlgoOrderPositions(params: {
    algoOrdType: 'contract_grid';
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/grid/positions', params);
  }

  spotGridWithdrawIncome(params: { algoId: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/withdraw-income', params);
  }

  computeGridMarginBalance(params: {
    algoId: string;
    type: 'add' | 'reduce';
    amt?: numberInString;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/compute-margin-balance',
      params,
    );
  }

  adjustGridMarginBalance(params: {
    algoId: string;
    type: 'add' | 'reduce';
    amt?: numberInString;
    percent?: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/grid/margin-balance', params);
  }

  adjustGridInvestment(params: { algoId: string; amt: string }): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/grid/adjust-investment',
      params,
    );
  }

  getGridAIParameter(params: {
    algoOrdType: GridAlgoOrderType;
    instId: string;
    direction: ContractGridDirection;
    duration?: '7D' | '30D' | '180D';
  }): Promise<any[]> {
    return this.get('/api/v5/tradingBot/grid/ai-param', params);
  }

  computeGridMinInvestment(params: {
    amt: string;
    ccy: string;
  }): Promise<any[]> {
    return this.post('/api/v5/tradingBot/grid/min-investment', params);
  }

  getRSIBackTesting(params: GetRSIBackTestingRequest): Promise<
    {
      triggerNum: string;
    }[]
  > {
    return this.get('/api/v5/tradingBot/public/rsi-back-testing', params);
  }

  getMaxGridQuantity(params: MaxGridQuantityRequest): Promise<
    {
      maxGridQty: string;
    }[]
  > {
    return this.get('/api/v5/tradingBot/grid/grid-quantity', params);
  }

  /**
   *
   * Orderbook trading - Signal bot trading endpoints
   *
   */

  createSignal(params: CreateSignalRequest): Promise<CreateSignalResult[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/create-signal', params);
  }

  getSignals(params: GetSignalsRequest): Promise<GetSignalsResult[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/signals', params);
  }

  createSignalBot(
    params: CreateSignalBotRequest,
  ): Promise<CreateSignalBotResult[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/order-algo', params);
  }

  cancelSignalBots(params: {
    algoId: string;
  }): Promise<CancelSignalBotsResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/stop-order-algo',
      params,
    );
  }

  updateSignalMargin(params: AdjustMarginBalanceRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/margin-balance', params);
  }

  updateSignalTPSL(params: AmendTPSLRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/amendTPSL', params);
  }

  setSignalInstruments(params: SetSignalInstrumentsRequest): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/set-instruments',
      params,
    );
  }

  getSignalBotOrder(params: {
    algoOrdType: string;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-details',
      params,
    );
  }

  getActiveSignalBot(params: GetSignalBotRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-details',
      params,
    );
  }

  getSignalBotHistory(params: GetSignalBotRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/orders-algo-history',
      params,
    );
  }

  getSignalBotPositions(params: {
    algoOrdType: string;
    algoId: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/positions', params);
  }

  getSignalBotPositionHistory(
    params: GetSignalBotPositionHistoryRequest,
  ): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/signal/positions-history',
      params,
    );
  }

  closeSignalBotPosition(params: { algoId: string; instId: string }): Promise<
    {
      algoId: string;
    }[]
  > {
    return this.postPrivate('/api/v5/tradingBot/signal/close-position', params);
  }

  placeSignalBotSubOrder(params: PlaceSubOrderRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/tradingBot/signal/sub-order', params);
  }

  cancelSubOrder(params: CancelSubOrderRequest): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/signal/cancel-sub-order',
      params,
    );
  }

  getSignalBotSubOrders(params: GetSignalBotSubOrdersRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/sub-orders', params);
  }

  getSignalBotEventHistory(
    params: GetSignalBotEventHistoryRequest,
  ): Promise<any[]> {
    return this.getPrivate('/api/v5/tradingBot/signal/event-history', params);
  }

  /**
   *
   * Orderbook trading - Recurring buy endpoints
   *
   */

  submitRecurringBuyOrder(
    params: PlaceRecurringBuyOrderRequest,
  ): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate('/api/v5/tradingBot/recurring/order-algo', params);
  }

  amendRecurringBuyOrder(
    params: AmendRecurringBuyOrderRequest,
  ): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/recurring/amend-order-algo',
      params,
    );
  }

  stopRecurringBuyOrder(params: {
    algoId: string;
  }): Promise<RecurringBuyOrderResult[]> {
    return this.postPrivate(
      '/api/v5/tradingBot/recurring/stop-order-algo',
      params,
    );
  }

  getRecurringBuyOrders(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-pending',
      params,
    );
  }

  getRecurringBuyOrderHistory(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-history',
      params,
    );
  }

  getRecurringBuyOrderDetails(params: {
    algoId: string;
  }): Promise<RecurringBuyOrder[]> {
    return this.getPrivate(
      '/api/v5/tradingBot/recurring/orders-algo-details',
      params,
    );
  }

  getRecurringBuySubOrders(
    params: GetRecurringBuyOrderListRequest,
  ): Promise<RecurringBuySubOrder[]> {
    return this.getPrivate('/api/v5/tradingBot/recurring/sub-orders', params);
  }

  /**
   *
   * Orderbook trading - Copy trading endpoints
   *
   */

  getCopytradingSubpositions(
    params?: GetCurrentSubpositionsRequest,
  ): Promise<CurrentSubposition[]> {
    return this.getPrivate('/api/v5/copytrading/current-subpositions', params);
  }

  getCopytradingSubpositionsHistory(
    params?: GetSubpositionsHistoryRequest,
  ): Promise<SubpositionsHistory[]> {
    return this.getPrivate('/api/v5/copytrading/subpositions-history', params);
  }

  submitCopytradingAlgoOrder(
    params: PlaceCTAlgoOrderRequest,
  ): Promise<PlaceCTAlgoOrderResult[]> {
    return this.postPrivate('/api/v5/copytrading/algo-order', params);
  }

  closeCopytradingSubposition(params: CloseSubpositionRequest): Promise<
    {
      subPosId: string;
      tag: string;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/close-subposition', params);
  }

  getCopytradingInstruments(params?: { instType?: 'SPOT' | 'SWAP' }): Promise<
    {
      instId: string;
      enabled: boolean;
    }[]
  > {
    return this.getPrivate('/api/v5/copytrading/instruments', params);
  }

  setCopytradingInstruments(params: {
    instType?: 'SPOT' | 'SWAP';
    instId: string;
  }): Promise<
    {
      instId: string;
      enabled: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/set-instruments', params);
  }

  getCopytradingProfitDetails(
    params?: GetCTProfitDetailsRequest,
  ): Promise<GetCTProfitDetailsResult[]> {
    return this.getPrivate(
      '/api/v5/copytrading/profit-sharing-details',
      params,
    );
  }

  getCopytradingTotalProfit(params?: {
    instType?: 'SPOT' | 'SWAP';
  }): Promise<GetCTTotalProfitResult[]> {
    return this.getPrivate('/api/v5/copytrading/total-profit-sharing', params);
  }

  getCopytradingUnrealizedProfit(params?: {
    instType?: 'SPOT' | 'SWAP';
  }): Promise<GetCTUnrealizedProfitResult[]> {
    return this.getPrivate(
      '/api/v5/copytrading/unrealized-profit-sharing-details',
      params,
    );
  }

  getCopytradingTotalUnrealizedProfit(params?: { instType?: 'SWAP' }): Promise<
    {
      instType?: 'SWAP';
      instId: string;
    }[]
  > {
    return this.getPrivate(
      '/api/v5/copytrading/total-unrealized-profit-sharing',
      params,
    );
  }

  applyCopytradingLeadTrading(params: {
    profitSharingTs: string;
    totalUnrealizedProfitSharingAmt: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/apply-lead-trading', params);
  }

  stopCopytradingLeadTrading(params?: { instType?: 'SWAP' }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/stop-lead-trading', params);
  }

  updateCopytradingProfitSharing(params: {
    instType?: 'SWAP';
    profitSharingRatio: string;
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/copytrading/amend-profit-sharing-ratio',
      params,
    );
  }

  getCopytradingAccount(): Promise<GetAccountConfigurationResult[]> {
    return this.getPrivate('/api/v5/copytrading/config');
  }

  setCopytradingFirstCopy(params: CopySettingsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/first-copy-settings', params);
  }

  updateCopytradingCopySettings(params: CopySettingsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/amend-copy-settings', params);
  }

  stopCopytradingCopy(params: {
    instType?: 'SWAP';
    uniqueCode: string;
    subPosCloseType: 'market_close' | 'copy_close' | 'manual_close';
  }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/copytrading/stop-copy-trading', params);
  }

  getCopytradingCopySettings(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<GetCopySettingsResult[]> {
    return this.getPrivate('/api/v5/copytrading/copy-settings', params);
  }

  getCopytradingBatchLeverageInfo(
    params: GetCTBatchLeverageInfoRequest,
  ): Promise<GetCTBatchLeverageInfoResult[]> {
    return this.getPrivate('/api/v5/copytrading/batch-leverage-info', params);
  }

  setCopytradingBatchLeverage(
    params: SetCTBatchLeverageRequest,
  ): Promise<SetCTBatchLeverageResult[]> {
    return this.postPrivate('/api/v5/copytrading/batch-set-leverage', params);
  }

  getCopytradingMyLeadTraders(params?: {
    instType?: 'SWAP';
  }): Promise<GetCTMyLeadTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/current-lead-traders', params);
  }

  getCopytradingLeadTradersHistory(
    params?: GetCTHistoryLeadTradersRequest,
  ): Promise<GetCTHistoryLeadTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/lead-traders-history', params);
  }

  getCopytradingConfig(params?: {
    instType?: 'SWAP';
  }): Promise<GetCopyTradingConfigResult[]> {
    return this.get('/api/v5/copytrading/public-config', params);
  }

  getCopytradingLeadRanks(
    params?: GetLeadTraderRanksRequest,
  ): Promise<GetLeadTraderRanksResult[]> {
    return this.get('/api/v5/copytrading/public-lead-traders', params);
  }

  getCopytradingLeadWeeklyPnl(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPnl[]> {
    return this.get('/api/v5/copytrading/public-weekly-pnl', params);
  }

  getCopytradingLeadDailyPnl(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderPnl[]> {
    return this.get('/api/v5/copytrading/public-pnl', params);
  }

  getCopytradingLeadStats(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderStats[]> {
    return this.get('/api/v5/copytrading/public-stats', params);
  }

  getCopytradingLeadPreferences(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPreference[]> {
    return this.get('/api/v5/copytrading/public-preference-currency', params);
  }

  getCopytradingLeadOpenPositions(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderCurrentPosition[]> {
    return this.get('/api/v5/copytrading/public-current-subpositions', params);
  }

  getCopytradingLeadPositionHistory(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderPositionHistory[]> {
    return this.get('/api/v5/copytrading/public-subpositions-history', params);
  }

  getCopyTraders(
    params: GetCopyTradersRequest,
  ): Promise<GetCopyTradersResult[]> {
    return this.get('/api/v5/copytrading/public-copy-traders', params);
  }

  getCopytradingLeadPrivateRanks(
    params?: GetPrivateLeadTraderRanksRequest,
  ): Promise<GetPrivateLeadTraderRanksResult[]> {
    return this.getPrivate('/api/v5/copytrading/lead-traders', params);
  }

  getCopytradingLeadPrivateWeeklyPnl(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPnl[]> {
    return this.getPrivate('/api/v5/copytrading/weekly-pnl', params);
  }

  getCopytradingPLeadPrivateDailyPnl(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderPnl[]> {
    return this.getPrivate('/api/v5/copytrading/pnl', params);
  }

  geCopytradingLeadPrivateStats(
    params: GetLeadTraderStatsRequest,
  ): Promise<LeadTraderStats[]> {
    return this.getPrivate('/api/v5/copytrading/stats', params);
  }

  getCopytradingLeadPrivatePreferences(params: {
    instType?: 'SWAP';
    uniqueCode: string;
  }): Promise<LeadTraderPreference[]> {
    return this.getPrivate('/api/v5/copytrading/preference-currency', params);
  }

  getCopytradingLeadPrivateOpenPositions(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderCurrentPosition[]> {
    return this.getPrivate(
      '/api/v5/copytrading/performance-current-subpositions',
      params,
    );
  }

  getCopytradingLeadPrivatePositionHistory(
    params: GetLeadTraderPositionsRequest,
  ): Promise<LeadTraderPositionHistory[]> {
    return this.getPrivate(
      '/api/v5/copytrading/performance-subpositions-history',
      params,
    );
  }

  getCopyTradersPrivate(
    params: GetCopyTradersRequest,
  ): Promise<GetCopyTradersResult[]> {
    return this.getPrivate('/api/v5/copytrading/copy-traders', params);
  }

  /**
   *
   * Orderbook trading - Market data endpoints
   *
   */

  getTickers(params: {
    instType: InstrumentType;
    uly?: string;
    instFamily?: string;
  }): Promise<Ticker[]> {
    return this.get('/api/v5/market/tickers', params);
  }

  getTicker(params: { instId: string }): Promise<Ticker[]> {
    return this.get('/api/v5/market/ticker', params);
  }

  getOrderBook(params: {
    instId: string;
    sz?: numberInString;
  }): Promise<OrderBook[]> {
    return this.get('/api/v5/market/books', params);
  }

  getRpiOrderBook(params: {
    instId: string;
    sz?: numberInString;
  }): Promise<OrderBookRpi[]> {
    return this.get('/api/v5/market/books-rpi', params);
  }

  getFullOrderBook(params: {
    instId: string;
    sz?: string;
  }): Promise<OrderBook[]> {
    return this.get('/api/v5/market/books-full', params);
  }

  getCandles(params: CandleRequest): Promise<Candle[]> {
    return this.get('/api/v5/market/candles', params);
  }

  getHistoricCandles(params: CandleRequest): Promise<Candle[]> {
    return this.get('/api/v5/market/history-candles', params);
  }

  getTrades(params: { instId: string; limit?: number }): Promise<Trade[]> {
    return this.get('/api/v5/market/trades', params);
  }

  getHistoricTrades(params: {
    instId: string;
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
    type?: '1' | '2';
  }): Promise<Trade[]> {
    return this.get('/api/v5/market/history-trades', params);
  }

  getOptionTradesByInstrument(params: {
    instFamily: string;
  }): Promise<OptionTrade[]> {
    return this.get('/api/v5/market/option/instrument-family-trades', params);
  }

  getOptionTrades(params: GetOptionTradesRequest): Promise<OptionTrades[]> {
    return this.get('/api/v5/public/option-trades', params);
  }

  get24hrTotalVolume(): Promise<any[]> {
    return this.get('/api/v5/market/platform-24-volume');
  }

  /**
   *
   * Block trading - REST endpoints
   *
   */

  getBlockCounterParties(): Promise<BlockCounterParty[]> {
    return this.getPrivate('/api/v5/rfq/counterparties');
  }

  createBlockRFQ(params: CreateBlockRFQRequest): Promise<CreateRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/create-rfq', params);
  }

  cancelBlockRFQ(
    params: CancelBlockRFQRequest,
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-rfq', params);
  }

  cancelMultipleBlockRFQs(
    params: CancelMultipleBlockRFQRequest,
  ): Promise<CancelBlockRFQResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-rfqs', params);
  }

  cancelAllRFQs(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-rfqs');
  }

  executeBlockQuote(
    params: ExecuteBlockQuoteRequest,
  ): Promise<ExecuteBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/execute-quote', params);
  }

  getQuoteProducts(): Promise<BlockMakerInstrumentSettings[]> {
    return this.getPrivate('/api/v5/rfq/maker-instrument-settings');
  }

  updateBlockQuoteProducts(params: SetQuoteProductsRequest): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/maker-instrument-settings', params);
  }

  resetBlockMmp(): Promise<
    {
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/mmp-reset');
  }

  updateBlockMmpConfig(
    params: SetMmpConfigRequest,
  ): Promise<SetMmpConfigResult[]> {
    return this.postPrivate('/api/v5/rfq/mmp-config', params);
  }

  getBlockMmpConfig(): Promise<BlockMMPConfig[]> {
    return this.getPrivate('/api/v5/rfq/mmp-config');
  }

  createBlockQuote(
    params: CreateBlockQuoteRequest,
  ): Promise<CreateBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/create-quote', params);
  }

  cancelBlockQuote(
    params: CancelBlockQuoteRequest,
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-quote', params);
  }

  cancelMultipleBlockQuotes(
    params: CancelMultipleBlockQuoteRequest,
  ): Promise<CancelBlockQuoteResult[]> {
    return this.postPrivate('/api/v5/rfq/cancel-batch-quotes', params);
  }

  cancelAllBlockQuotes(): Promise<TimestampObject[]> {
    return this.postPrivate('/api/v5/rfq/cancel-all-quotes');
  }

  cancelAllBlockAfter(params: { timeOut: string }): Promise<
    {
      triggerTime: string;
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/rfq/cancel-all-after', params);
  }

  getBlockRFQs(params?: GetBlockRFQSParams): Promise<BlockRFQResult[]> {
    return this.getPrivate('/api/v5/rfq/rfqs', params);
  }

  getBlockQuotes(params?: GetBlockQuoteParams): Promise<GetBlockQuoteResult[]> {
    return this.getPrivate('/api/v5/rfq/quotes', params);
  }

  getBlockTrades(params?: any): Promise<BlockTradeResult[]> {
    return this.getPrivate('/api/v5/rfq/trades', params);
  }

  getPublicRFQBlockTrades(params?: any): Promise<PublicBlockTrade[]> {
    return this.get('/api/v5/rfq/public-trades', params);
  }

  getBlockTickers(params: {
    instType: InstrumentType;
    uly?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/market/block-tickers', params);
  }

  getBlockTicker(params: { instId: string }): Promise<any[]> {
    return this.get('/api/v5/market/block-ticker', params);
  }

  getBlockPublicTrades(params: {
    instId: string;
  }): Promise<PublicBlockTrade[]> {
    return this.get('/api/v5/public/block-trades', params);
  }

  /**
   *
   * Spread trading - REST endpoints
   *
   */

  submitSpreadOrder(
    params: PlaceSpreadOrderRequest,
  ): Promise<PlaceSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/order', params);
  }

  cancelSpreadOrder(params?: {
    ordId?: string;
    clOrdId?: string;
  }): Promise<CancelSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/cancel-order', params);
  }

  cancelAllSpreadOrders(params?: { sprdId?: string }): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate('/api/v5/sprd/mass-cancel', params);
  }

  updateSpreadOrder(
    params: UpdateSpreadOrderRequest,
  ): Promise<UpdateSpreadOrderResponse[]> {
    return this.postPrivate('/api/v5/sprd/amend-order', params);
  }

  getSpreadOrder(params: {
    ordId?: string;
    clOrdId?: string;
  }): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/order', params);
  }

  getSpreadActiveOrders(
    params?: GetActiveSpreadOrdersRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-pending', params);
  }

  getSpreadOrdersRecent(
    params?: GetSpreadOrderHistoryRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-history', params);
  }

  getSpreadOrdersArchive(
    params?: GetSpreadOrderHistoryArchiveRequest,
  ): Promise<SpreadOrder[]> {
    return this.getPrivate('/api/v5/sprd/orders-history-archive', params);
  }

  getSpreadTrades(params?: GetSpreadTradesRequest): Promise<SpreadTrade[]> {
    return this.getPrivate('/api/v5/sprd/trades', params);
  }

  getSpreads(params?: GetSpreadsRequest): Promise<SpreadDetails[]> {
    return this.get('/api/v5/sprd/spreads', params);
  }

  getSpreadOrderBook(params: {
    sprdId: string;
    sz?: string;
  }): Promise<SpreadOrderBook[]> {
    return this.get('/api/v5/sprd/books', params);
  }

  getSpreadTicker(params: { sprdId: string }): Promise<SpreadTicker[]> {
    return this.get('/api/v5/market/sprd-ticker', params);
  }

  getSpreadPublicTrades(params?: {
    sprdId?: string;
  }): Promise<PublicSpreadTrade[]> {
    return this.get('/api/v5/sprd/public-trades', params);
  }

  getSpreadCandles(params: GetSpreadCandlesRequest): Promise<SpreadCandle[]> {
    return this.get('/api/v5/market/sprd-candles', params);
  }

  getSpreadHistoryCandles(
    params: GetSpreadCandlesRequest,
  ): Promise<SpreadCandle[]> {
    return this.get('/api/v5/market/sprd-history-candles', params);
  }

  cancelSpreadAllAfter(params: { timeOut: string }): Promise<
    {
      triggerTime: string;
      ts: string;
    }[]
  > {
    return this.postPrivate('/api/v5/sprd/cancel-all-after', params);
  }

  /**
   *
   * Public data - rest endpoints
   *
   */

  getInstruments(params: GetInstrumentsRequest): Promise<Instrument[]> {
    return this.get('/api/v5/public/instruments', params);
  }

  /**
   * Prediction / event contract series. Public (no auth required since 2026-05-19).
   * @see GET /api/v5/public/event-contract/series
   */
  getEventContractSeries(
    params?: GetEventContractSeriesRequest,
  ): Promise<EventContractSeries[]> {
    return this.get('/api/v5/public/event-contract/series', params);
  }

  /**
   * Events for a series. Public (no auth required since 2026-05-19).
   * @see GET /api/v5/public/event-contract/events
   */
  getEventContractEvents(
    params: GetEventContractEventsRequest,
  ): Promise<EventContractEvent[]> {
    return this.get('/api/v5/public/event-contract/events', params);
  }

  /**
   * Corporate actions for underlying stocks and affected OKX instruments.
   * @see GET /api/v5/public/corporate-actions
   */
  getCorporateActions(
    params?: GetCorporateActionsRequest,
  ): Promise<CorporateAction[]> {
    return this.get('/api/v5/public/corporate-actions', params);
  }

  /**
   * Markets for events. Public (no auth required since 2026-05-19).
   * @see GET /api/v5/public/event-contract/markets
   */
  getEventContractMarkets(
    params: GetEventContractMarketsRequest,
  ): Promise<EventContractMarket[]> {
    return this.get('/api/v5/public/event-contract/markets', params);
  }

  getDeliveryExerciseHistory(params: any): Promise<any[]> {
    return this.get('/api/v5/public/delivery-exercise-history', params);
  }

  getOpenInterest(params: any): Promise<any[]> {
    return this.get('/api/v5/public/open-interest', params);
  }

  getFundingRate(params: GetFundingRateRequest): Promise<PublicFundingRate[]> {
    return this.get('/api/v5/public/funding-rate', params);
  }

  getFundingRateHistory(
    params: FundingRateRequest,
  ): Promise<FundingRateHistory[]> {
    return this.get('/api/v5/public/funding-rate-history', params);
  }

  getMinMaxLimitPrice(params: any): Promise<any[]> {
    return this.get('/api/v5/public/price-limit', params);
  }

  getOptionMarketData(params: any): Promise<any[]> {
    return this.get('/api/v5/public/opt-summary', params);
  }

  /**
   * Estimated delivery or exercise price (FUTURES / OPTION / EVENTS; REST returns one row with `settlePx`).
   * The value is only meaningful shortly before delivery/exercise. The window used for the index mean is 30 minutes (since 2026-03-18; 200ms sampling).
   */
  getEstimatedDeliveryExercisePrice(params: {
    instId: string;
  }): Promise<EstimatedDeliveryExercisePrice[]> {
    return this.get('/api/v5/public/estimated-price', params);
  }

  getDiscountRateAndInterestFreeQuota(params: any): Promise<any[]> {
    return this.get('/api/v5/public/discount-rate-interest-free-quota', params);
  }

  getSystemTime(params: any): Promise<SystemTime[]> {
    return this.get('/api/v5/public/time', params);
  }

  getHistoricalMarketData(
    params: GetHistoricalMarketDataRequest,
  ): Promise<MarketDataHistoryResult[]> {
    return this.get('/api/v5/public/market-data-history', params);
  }

  getMarkPrice(params: any): Promise<any[]> {
    return this.get('/api/v5/public/mark-price', params);
  }

  getPositionTiers(params: any): Promise<any[]> {
    return this.get('/api/v5/public/position-tiers', params);
  }

  getInterestRateAndLoanQuota(): Promise<InterestRateAndLoanQuota[]> {
    return this.get('/api/v5/public/interest-rate-loan-quota');
  }

  getVIPInterestRateAndLoanQuota(params: any): Promise<any[]> {
    return this.get('/api/v5/public/vip-interest-rate-loan-quota', params);
  }

  getUnderlying(params: any): Promise<any[]> {
    return this.get('/api/v5/public/underlying', params);
  }

  getInsuranceFund(params?: GetInsuranceFundRequest): Promise<InsuranceFund[]> {
    return this.get('/api/v5/public/insurance-fund', params);
  }

  getMmInstrumentTypes(params?: {
    instType?: 'SPOT' | 'SWAP';
    instId?: string;
  }): Promise<MmInstrumentType[]> {
    return this.get('/api/v5/public/mm-instrument-types', params);
  }

  getDeltaHedgeCurrencies(params?: {
    ccy?: string;
  }): Promise<DeltaHedgeCurrency[]> {
    return this.get('/api/v5/public/delta-hedge-currencies', params);
  }

  getUnitConvert(params: UnitConvertRequest): Promise<UnitConvertData[]> {
    return this.get('/api/v5/public/convert-contract-coin', params);
  }

  getOptionTickBands(params: {
    instType: string;
    instFamily?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/public/instrument-tick-bands', params);
  }

  getPremiumHistory(params: GetPremiumHistoryRequest): Promise<any[]> {
    return this.get('/api/v5/public/premium-history', params);
  }

  getIndexTickers(params?: {
    quoteCcy?: string;
    instId?: string;
  }): Promise<IndexTicker[]> {
    return this.get('/api/v5/market/index-tickers', params);
  }

  getIndexCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/index-candles', params);
  }

  getHistoricIndexCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/history-index-candles', params);
  }

  getMarkPriceCandles(params: CandleRequest): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/mark-price-candles', params);
  }

  getHistoricMarkPriceCandles(
    params: CandleRequest,
  ): Promise<CandleNoVolume[]> {
    return this.get('/api/v5/market/history-mark-price-candles', params);
  }

  getOracle(): Promise<any[]> {
    return this.get('/api/v5/market/open-oracle');
  }

  getExchangeRate(): Promise<any[]> {
    return this.get('/api/v5/market/exchange-rate');
  }

  getIndexComponents(params: { index: string }): Promise<any[]> {
    return this.get('/api/v5/market/index-components', params);
  }

  getEconomicCalendar(
    params: EconomicCalendarRequest,
  ): Promise<EconomicCalendarData[]> {
    return this.getPrivate('/api/v5/public/economic-calendar', params);
  }

  getPublicBlockTrades(params: { instId: string }): Promise<any[]> {
    return this.get('/api/v5/market/block-trades', params);
  }

  /**
   *
   * Trading statistics - REST endpoints
   *
   */

  getSupportCoin(): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/trading-data/support-coin');
  }

  getOpenInterestHistory(
    params: GetContractOpenInterestHistoryRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/open-interest-history',
      params,
    );
  }

  getTakerVolume(params: {
    instType: string;
    ccy: string;
    period?: string;
    end?: string;
    begin?: string;
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/taker-volume', params);
  }

  getContractTakerVolume(
    params: GetContractTakerVolumeRequest,
  ): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/taker-volume-contract', params);
  }

  getMarginLendingRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/margin/loan-ratio', params);
  }

  getTopTradersAccountRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio-contract-top-trader',
      params,
    );
  }

  getTopTradersContractPositionRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-position-ratio-contract-top-trader',
      params,
    );
  }

  getLongShortContractRatio(
    params: GetTopTradersContractLongShortRatioRequest,
  ): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio-contract',
      params,
    );
  }

  getLongShortRatio(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/long-short-account-ratio',
      params,
    );
  }

  getContractsOpenInterestAndVolume(params: {
    ccy: string;
    begin?: numberInString;
    end?: numberInString;
    period: '5m' | '1H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/contracts/open-interest-volume',
      params,
    );
  }

  getOptionsOpenInterestAndVolume(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/option/open-interest-volume', params);
  }

  getPutCallRatio(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-ratio',
      params,
    );
  }

  getOpenInterestAndVolumeExpiry(params: {
    ccy: string;
    period: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-expiry',
      params,
    );
  }

  getOpenInterestAndVolumeStrike(params: {
    ccy: string;
    expTime: string;
    period?: '8H' | '1D';
  }): Promise<any[]> {
    return this.get(
      '/api/v5/rubik/stat/option/open-interest-volume-strike',
      params,
    );
  }

  getTakerFlow(params: { ccy: string; period: '8H' | '1D' }): Promise<any[]> {
    return this.get('/api/v5/rubik/stat/option/taker-block-volume', params);
  }

  /**
   *
   * Funding account - REST endpoints
   *
   */

  getCurrencies(params?: { ccy?: string }): Promise<FundingCurrency[]> {
    return this.getPrivate('/api/v5/asset/currencies', params);
  }

  getBalances(params?: { ccy?: string }): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/balances', params);
  }

  getNonTradableAssets(params?: { ccy?: string }): Promise<NonTradableAsset[]> {
    return this.getPrivate('/api/v5/asset/non-tradable-assets', params);
  }

  getAccountAssetValuation(params?: {
    ccy?: string;
  }): Promise<AccountAssetValuation[]> {
    return this.getPrivate('/api/v5/asset/asset-valuation', params);
  }

  fundsTransfer(params: FundsTransferRequest): Promise<FundTransferResult[]> {
    return this.postPrivate('/api/v5/asset/transfer', params);
  }

  /** Either parameter transId or clientId is required. */
  getFundsTransferState(params?: {
    transId?: string;
    clientId?: string;
    type?: '0' | '1' | '2';
  }): Promise<FundTransferState[]> {
    return this.getPrivate('/api/v5/asset/transfer-state', params);
  }

  /**
   * Query the billing record in the past month.
   */
  getAssetBillsDetails(params?: {
    ccy?: string;
    type?: `${ASSET_BILL_TYPE}`;
    clientId?: string;
    /** Third-party custody type. Defaults to 1 (Copper) if not specified. */
    thirdPartyType?: '1' | '2' | '5' | '6';
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
  }): Promise<AssetBillDetails[]> {
    return this.getPrivate('/api/v5/asset/bills', params);
  }

  /**
   * Query the billing records of all time since 1 February, 2021.
   *
   *  ⚠️ IMPORTANT: Data updates occur every 30 seconds. Update frequency may vary based on data volume - please be aware of potential delays during high-traffic periods.
   *
   * Rate Limit: 1 Requests per second
   * @param params
   * @returns
   */
  getAssetBillsHistoric(params?: {
    ccy?: string;
    type?: `${ASSET_BILL_TYPE}`;
    clientId?: string;
    /** Third-party custody type. Defaults to 1 (Copper) if not specified. @see 2026-06-05 changelog */
    thirdPartyType?: '1' | '2' | '5' | '6';
    after?: numberInString;
    before?: numberInString;
    limit?: numberInString;
    pagingType?: '0' | '1';
  }): Promise<AssetBillDetails[]> {
    return this.getPrivate('/api/v5/asset/bills-history', params);
  }

  getLightningDeposits(params: {
    ccy: string;
    amt: numberInString;
    to?: '6' | '18';
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-lightning', params);
  }

  getDepositAddress(params: { ccy: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-address', params);
  }

  getDepositHistory(
    params?: GetDepositHistoryRequest,
  ): Promise<DepositHistory[]> {
    return this.getPrivate('/api/v5/asset/deposit-history', params);
  }

  submitWithdraw(params: WithdrawRequest): Promise<WithdrawResponse[]> {
    return this.postPrivate('/api/v5/asset/withdrawal', params);
  }

  submitWithdrawLightning(params: {
    ccy: string;
    invoice: string;
    memo?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/withdrawal-lightning', params);
  }

  cancelWithdrawal(params: { wdId: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/cancel-withdrawal', params);
  }

  getWithdrawalHistory(params?: WithdrawalHistoryRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/withdrawal-history', params);
  }

  getDepositWithdrawStatus(
    params: GetDepositWithdrawStatusRequest,
  ): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/deposit-withdraw-status', params);
  }

  getExchanges(): Promise<any[]> {
    return this.get('/api/v5/asset/exchange-list');
  }

  applyForMonthlyStatement(params?: { month?: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/monthly-statement', params);
  }

  getMonthlyStatement(params: { month: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/monthly-statement', params);
  }

  getConvertCurrencies(): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/currencies');
  }

  getConvertCurrencyPair(params: {
    fromCcy: string;
    toCcy: string;
    /** 0: standard convert (default), 1: large order convert for VIP */
    convertMode?: '0' | '1';
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/currency-pair', params);
  }

  estimateConvertQuote(params: ConvertQuoteEstimateRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/convert/estimate-quote', params);
  }

  convertTrade(params: ConvertTradeRequest): Promise<any[]> {
    return this.postPrivate('/api/v5/asset/convert/trade', params);
  }

  getConvertHistory(params?: any): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/convert/history', params);
  }

  /**
   *
   * Subaccount - REST endpoints
   *
   */

  /** View sub-account list */
  getSubAccountList(params?: any): Promise<SubAccount[]> {
    return this.getPrivate('/api/v5/users/subaccount/list', params);
  }

  resetSubAccountAPIKey(params: {
    subAcct: string;
    apiKey: string;
    label?: string;
    perm?: string;
    ip?: string;
  }): Promise<SubAccountAPIReset[]> {
    return this.postPrivate('/api/v5/users/subaccount/modify-apikey', params);
  }

  getSubAccountBalances(params: {
    subAcct: string;
  }): Promise<SubAccountBalances[]> {
    return this.getPrivate('/api/v5/account/subaccount/balances', params);
  }

  getSubAccountFundingBalances(params: {
    subAcct: string;
    ccy?: string;
  }): Promise<FundingBalance[]> {
    return this.getPrivate('/api/v5/asset/subaccount/balances', params);
  }

  getSubAccountMaxWithdrawal(
    params: GetSubAccountMaxWithdrawalsRequest,
  ): Promise<SubAccountMaxWithdrawal[]> {
    return this.getPrivate('/api/v5/account/subaccount/max-withdrawal', params);
  }

  /** History of sub-account transfer */
  getSubAccountTransferHistory(params?: {
    ccy?: string;
    type?: '0' | '1';
    subAcct?: string;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/asset/subaccount/bills', params);
  }

  getManagedSubAccountTransferHistory(
    params: GetManagedSubAccountTransferHistoryRequest,
  ): Promise<ManagedSubAccountTransfer[]> {
    return this.getPrivate(
      '/api/v5/asset/subaccount/managed-subaccount-bills',
      params,
    );
  }

  /** Master accounts manage the transfers between sub-accounts */
  transferSubAccountBalance(
    params: SubAccountTransferRequest,
  ): Promise<SubAccountTransferResult[]> {
    return this.postPrivate('/api/v5/asset/subaccount/transfer', params);
  }

  setSubAccountTransferOutPermission(params: {
    subAcct: string;
    canTransOut: boolean;
  }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/users/subaccount/set-transfer-out',
      params,
    );
  }

  getSubAccountCustodyTradingList(params?: {
    subAcct?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/users/entrust-subaccount-list', params);
  }

  setSubAccountLoanAllocation(
    params: SetSubAccountLoanAllocationRequest,
  ): Promise<
    {
      result: boolean;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/account/subaccount/set-loan-allocation',
      params,
    );
  }

  getSubAccountBorrowInterestAndLimit(params: {
    subAcct: string;
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/account/subaccount/interest-limits',
      params,
    );
  }

  /**
   *
   * Financial product - on chain earn endpoints
   *
   */

  /** Get earn offers */
  getStakingOffers(params?: {
    productId?: string;
    protocolType?: 'staking' | 'defi';
    ccy?: string;
  }): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/staking-defi/offers', params);
  }

  submitStake(params: {
    productId: string;
    investData: {
      ccy: string;
      amt: string;
    }[];
    term?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/purchase', params);
  }

  redeemStake(params: {
    ordId: string;
    protocolType: 'staking' | 'defi';
    allowEarlyRedeem?: boolean;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/redeem', params);
  }

  cancelStakingRequest(params: {
    ordId: string;
    protocolType: 'staking' | 'defi';
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/cancel', params);
  }

  /** Earn/staking get active orders */
  getActiveStakingOrders(params?: {
    productId?: string;
    protocolType?: 'staking' | 'defi';
    ccy?: string;
    state?: '8' | '13' | '9' | '1' | '2';
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/orders-active',
      params,
    );
  }

  /** Earn/staking get order history */
  getStakingOrderHistory(params?: {
    productId?: string;
    protocolType?: string;
    ccy?: string;
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/orders-history',
      params,
    );
  }

  /**
   *
   * Financial product - ETH staking endpoints
   *
   */

  getETHStakingProductInfo(): Promise<EthStakingProductInfo[]> {
    return this.get('/api/v5/finance/staking-defi/eth/product-info');
  }

  getSOLStakingProductInfo(): Promise<SolStakingProductInfo> {
    return this.get('/api/v5/finance/staking-defi/sol/product-info');
  }

  purchaseETHStaking(params: { amt: string }): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/finance/staking-defi/eth/purchase',
      params,
    );
  }

  redeemETHStaking(params: { amt: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/staking-defi/eth/redeem', params);
  }

  getETHStakingBalance(): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/staking-defi/eth/balance');
  }

  getETHStakingHistory(params: {
    type?: 'purchase' | 'redeem';
    status?: 'pending' | 'success' | 'failed' | 'cancelled';
    after?: string;
    before?: string;
    limit?: string;
  }): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/staking-defi/eth/purchase-redeem-history',
      params,
    );
  }

  cancelRedeemETHStaking(params: { ordId: string }): Promise<
    {
      ordId: string;
    }[]
  > {
    return this.postPrivate(
      '/api/v5/finance/staking-defi/eth/cancel-redeem',
      params,
    );
  }

  getAPYHistory(params: { days: string }): Promise<any[]> {
    return this.get('/api/v5/finance/staking-defi/eth/apy-history', params);
  }

  /**
   *
   * Financial product - simple earn flexible endpoints
   *
   */

  getSavingBalance(params?: { ccy?: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/savings/balance', params);
  }

  savingsPurchaseRedemption(params: {
    ccy: string;
    amt: numberInString;
    side: 'purchase' | 'redempt';
    rate: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/savings/purchase-redempt', params);
  }

  setLendingRate(params: {
    ccy: string;
    rate: numberInString;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/savings/set-lending-rate', params);
  }

  getLendingHistory(params?: PaginatedSymbolRequest): Promise<any[]> {
    return this.getPrivate('/api/v5/finance/savings/lending-history', params);
  }

  getPublicBorrowInfo(params?: { ccy?: string }): Promise<any[]> {
    return this.get('/api/v5/finance/savings/lending-rate-summary', params);
  }

  getPublicBorrowHistory(
    params?: PaginatedSymbolRequest,
  ): Promise<PublicBorrowHistoryRecord[]> {
    return this.get('/api/v5/finance/savings/lending-rate-history', params);
  }

  /**
   *
   * Financial product - simple earn fixed endpoints
   *
   */

  getLendingOffers(params?: { ccy?: string; term?: string }): Promise<any[]> {
    return this.get('/api/v5/finance/fixed-loan/lending-offers', params);
  }

  getLendingAPYHistory(params: { ccy: string; term: string }): Promise<any[]> {
    return this.get('/api/v5/finance/fixed-loan/lending-apy-history', params);
  }

  getLendingVolume(params: { ccy: string; term: string }): Promise<any[]> {
    return this.get(
      '/api/v5/finance/fixed-loan/pending-lending-volume',
      params,
    );
  }

  placeLendingOrder(params: LendingOrder): Promise<any[]> {
    return this.postPrivate('/api/v5/finance/fixed-loan/lending-order', params);
  }

  amendLendingOrder(params: LendingOrder): Promise<any[]> {
    return this.postPrivate(
      '/api/v5/finance/fixed-loan/amend-lending-order',
      params,
    );
  }

  getLendingOrders(params: GetLendingOrderListRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/fixed-loan/lending-orders-list',
      params,
    );
  }

  getLendingSubOrders(params: GetLendingSubOrderListRequest): Promise<any[]> {
    return this.getPrivate(
      '/api/v5/finance/fixed-loan/lending-sub-orders',
      params,
    );
  }

  /**
   *
   * Financial product - Flexible loan endpoints
   *
   */

  getBorrowableCurrencies(): Promise<
    {
      borrowCcy: string;
    }[]
  > {
    return this.get('/api/v5/finance/flexible-loan/borrow-currencies');
  }

  getCollateralAssets(
    params?: GetFlexibleLoanCollateralAssetsRequest,
  ): Promise<CollateralAssetsResponse[]> {
    return this.get('/api/v5/finance/flexible-loan/collateral-assets', params);
  }

  getMaxLoanAmount(params: MaxLoanRequest): Promise<MaxLoanResponse[]> {
    return this.postPrivate('/api/v5/finance/flexible-loan/max-loan', params);
  }

  adjustCollateral(params: AdjustCollateralRequest): Promise<[]> {
    return this.postPrivate(
      '/api/v5/finance/flexible-loan/adjust-collateral',
      params,
    );
  }

  getLoanInfo(params?: GetLoanInfoRequest): Promise<LoanInfo[]> {
    return this.getPrivate('/api/v5/finance/flexible-loan/loan-info', params);
  }

  getLoanHistory(params?: LoanHistoryRequest): Promise<LoanHistoryItem[]> {
    return this.getPrivate(
      '/api/v5/finance/flexible-loan/loan-history',
      params,
    );
  }

  getAccruedInterest(
    params?: AccruedInterestRequest,
  ): Promise<AccruedInterestItem[]> {
    return this.getPrivate(
      '/api/v5/finance/flexible-loan/interest-accrued',
      params,
    );
  }

  /**
   *
   * Financial product — dual investment (DCD) endpoints
   * @see https://www.okx.com/docs-v5/en/ (2026-03-13 release)
   *
   */

  getDcdCurrencyPairs(): Promise<DcdCurrencyPair[]> {
    return this.getPrivate('/api/v5/finance/sfp/dcd/currency-pair');
  }

  getDcdProducts(params: GetDcdProductsRequest): Promise<DcdProduct[]> {
    return this.getPrivate('/api/v5/finance/sfp/dcd/products', params);
  }

  requestDcdQuote(params: RequestDcdQuoteRequest): Promise<DcdQuote[]> {
    return this.postPrivate('/api/v5/finance/sfp/dcd/quote', params);
  }

  submitDcdTrade(params: SubmitDcdTradeRequest): Promise<DcdTradeResult[]> {
    return this.postPrivate('/api/v5/finance/sfp/dcd/trade', params);
  }

  requestDcdRedeemQuote(
    params: RequestDcdRedeemQuoteRequest,
  ): Promise<DcdRedeemQuote[]> {
    return this.postPrivate('/api/v5/finance/sfp/dcd/redeem-quote', params);
  }

  submitDcdRedeem(params: SubmitDcdRedeemRequest): Promise<DcdRedeemResult[]> {
    return this.postPrivate('/api/v5/finance/sfp/dcd/redeem', params);
  }

  getDcdOrderStatus(
    params: GetDcdOrderStatusRequest,
  ): Promise<DcdOrderStatus[]> {
    return this.getPrivate('/api/v5/finance/sfp/dcd/order-status', params);
  }

  getDcdOrderHistory(
    params?: GetDcdOrderHistoryRequest,
  ): Promise<DcdOrderHistoryItem[]> {
    return this.getPrivate('/api/v5/finance/sfp/dcd/order-history', params);
  }

  /**
   *
   * Financial product — stable rewards endpoints
   * @see https://www.okx.com/docs-v5/en/ (2026-04-24 release)
   *
   */

  getStableRewardsProductInfo(
    params: GetStableRewardsProductInfoRequest,
  ): Promise<StableRewardsProductInfo[]> {
    return this.getPrivate(
      '/api/v5/finance/stable-rewards/product-info',
      params,
    );
  }

  /** @deprecated Decommissioned 2026-07-14. Use order book trading APIs. */
  requestStableRewardsQuote(
    params: RequestStableRewardsQuoteRequest,
  ): Promise<StableRewardsQuote[]> {
    return this.postPrivate('/api/v5/finance/stable-rewards/quote', params);
  }

  /** @deprecated Decommissioned 2026-07-14. Use order book trading APIs. */
  submitStableRewardsTrade(
    params: SubmitStableRewardsTradeRequest,
  ): Promise<StableRewardsTradeResult[]> {
    return this.postPrivate('/api/v5/finance/stable-rewards/trade', params);
  }

  getStableRewardsBalance(
    params?: GetStableRewardsBalanceRequest,
  ): Promise<StableRewardsBalance[]> {
    return this.getPrivate('/api/v5/finance/stable-rewards/balance', params);
  }

  getStableRewardsApyHistory(
    params: GetStableRewardsApyHistoryRequest,
  ): Promise<StableRewardsApyHistoryItem[]> {
    return this.get('/api/v5/finance/stable-rewards/apy-history', params);
  }

  /** @deprecated Decommissioned 2026-07-14. Use order book trading APIs. */
  getStableRewardsSubscribeRedeemHistory(
    params: GetStableRewardsSubscribeRedeemHistoryRequest,
  ): Promise<StableRewardsSubscribeRedeemHistoryItem[]> {
    return this.getPrivate(
      '/api/v5/finance/stable-rewards/subscribe-redeem-history',
      params,
    );
  }

  /**
   *
   * Financial product — OKUSD endpoints
   *
   */

  getOkusdLimits(): Promise<OkusdLimits[]> {
    return this.getPrivate('/api/v5/finance/okusd/limits');
  }

  subscribeOkusd(
    params: SubscribeOkusdRequest,
  ): Promise<OkusdSubscribeResult[]> {
    return this.postPrivate('/api/v5/finance/okusd/subscribe', params);
  }

  redeemOkusd(params: RedeemOkusdRequest): Promise<OkusdRedeemResult[]> {
    return this.postPrivate('/api/v5/finance/okusd/redeem', params);
  }

  /**
   *
   * GLP performance endpoints (market makers)
   *
   */

  getGlpTodayPerformance(): Promise<GlpTodayPerformance[]> {
    return this.getPrivate('/api/v5/users/glp/today-performance');
  }

  getGlpHistoricalPerformance(
    params: GetGlpHistoricalPerformanceRequest,
  ): Promise<GlpHistoricalPerformanceItem[]> {
    return this.getPrivate('/api/v5/users/glp/historical-performance', params);
  }

  /**
   *
   * GLP API v2
   * @see https://www.okx.com/docs-v5/en/ (2026-09-29)
   *
   */

  /**
   * Active GLP enrollments, current and estimated tiers, tier requirements, and week-to-date performance.
   * A sub-account API key returns the master account's GLP data. No request parameters.
   * @see GET /api/v5/users/glp/v2/overview
   */
  getGlpV2Overview(): Promise<GlpV2Overview[]> {
    return this.getPrivate('/api/v5/users/glp/v2/overview');
  }

  /**
   * Daily and week-to-date performance for one GLP product and trading side in the current assessment period.
   * A sub-account API key returns the master account's GLP data.
   * @see GET /api/v5/users/glp/v2/details
   */
  getGlpV2AssessmentDetails(
    params: GetGlpV2AssessmentDetailsRequest,
  ): Promise<GlpV2AssessmentDetails[]> {
    return this.getPrivate('/api/v5/users/glp/v2/details', params);
  }

  /**
   * Weekly assessment results, tier outcomes, and performance for one GLP product and trading side.
   * A sub-account API key returns the master account's GLP data.
   * @see GET /api/v5/users/glp/v2/history/performance
   */
  getGlpV2PerformanceHistory(
    params: GetGlpV2PerformanceHistoryRequest,
  ): Promise<GlpV2PerformanceHistory[]> {
    return this.getPrivate('/api/v5/users/glp/v2/history/performance', params);
  }

  /**
   *
   * Affiliate endpoints
   * @see https://www.okx.com/docs-v5/en/ (2026-05-08 release)
   *
   */

  getAffiliatePerformanceSummary(
    params?: GetAffiliatePerformanceSummaryRequest,
  ): Promise<AffiliatePerformanceSummary[]> {
    return this.getPrivate('/api/v5/affiliate/performance/summary', params);
  }

  getInviteeDetail(params: GetInviteeDetailRequest): Promise<InviteeDetail[]> {
    return this.getPrivate('/api/v5/affiliate/invitee/detail', params);
  }

  getAffiliateInviteeList(
    params?: GetAffiliateInviteeListRequest,
  ): Promise<AffiliateInviteeListItem[]> {
    return this.getPrivate('/api/v5/affiliate/invitee/list', params);
  }

  getAffiliateLinkList(
    params?: GetAffiliateLinkListRequest,
  ): Promise<AffiliateLinkListItem[]> {
    return this.getPrivate('/api/v5/affiliate/link/list', params);
  }

  getAffiliateCoInviterLinkList(
    params?: GetAffiliateCoInviterLinkListRequest,
  ): Promise<AffiliateCoInviterLinkListItem[]> {
    return this.getPrivate('/api/v5/affiliate/co-inviter/list', params);
  }

  getAffiliateSubAffiliateList(
    params?: GetAffiliateSubAffiliateListRequest,
  ): Promise<AffiliateSubAffiliateListItem[]> {
    return this.getPrivate('/api/v5/affiliate/sub-affiliate/list', params);
  }

  getAffiliateRebateInfo(params: { apiKey: string }): Promise<any[]> {
    return this.getPrivate('/api/v5/users/partner/if-rebate', params);
  }

  /**
   *
   * Status endpoints (public)
   *
   */

  getSystemStatus(params: {
    state?: 'scheduled' | 'ongoing' | 'pre_open' | 'completed' | 'canceled';
  }): Promise<any[]> {
    return this.get('/api/v5/system/status', params);
  }

  /**
   *
   * Announcement endpoints
   *
   */

  getAnnouncements(params?: { annType?: string; page?: string }): Promise<
    {
      totalPage: string;
      details: Announcement[];
    }[]
  > {
    return this.get('/api/v5/support/announcements', params);
  }

  getAnnouncementTypes(): Promise<
    {
      annType: string;
      annTypeDesc: string;
    }[]
  > {
    return this.get('/api/v5/support/announcement-types');
  }

  /**
   *
   * Broker endpoints (private)
   *
   */

  createSubAccount(params: {
    subAcct: string;
    label?: string;
    clientIP?: string;
    mainAcct: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/create-subaccount', params);
  }

  deleteSubAccount(params: { subAcct: string }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/delete-subaccount', params);
  }

  createSubAccountAPIKey(params: {
    subAcct: string;
    label: string;
    passphrase: string;
    ip?: string;
    perm?: string;
  }): Promise<any[]> {
    return this.postPrivate('/api/v5/broker/nd/subaccount/apikey', params);
  }
}

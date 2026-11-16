import { InstrumentType, numberInString } from '../shared.js';

export interface Ticker {
  instType: InstrumentType;
  instId: string;
  last: numberInString;
  lastSz: numberInString;
  askPx: numberInString;
  askSz: numberInString;
  bidPx: numberInString;
  bidSz: numberInString;
  open24h: numberInString;
  high24h: numberInString;
  low24h: numberInString;
  volCcy24h: numberInString;
  vol24h: numberInString;
  sodUtc0: numberInString;
  sodUtc8: numberInString;
  ts: numberInString;
}

export interface IndexTicker {
  instId: string;
  idxPx: string;
  high24h: string;
  sodUtc0: string;
  open24h: string;
  low24h: string;
  sodUtc8: string;
  ts: string;
}

type OBPrice = string;
type OBAssetQty = string;
type OBOrderCount = string;
type OrderBookLevel = [OBPrice, OBAssetQty, '0', OBOrderCount];

export interface OrderBook {
  asks: OrderBookLevel[];
  bids: OrderBookLevel[];
  ts: string;
}

/** RPI consolidated book level: [price, totalQty, nonRpiQty, count] */
type OrderBookRpiLevel = [string, string, string, string];

export interface OrderBookRpi {
  asks: OrderBookRpiLevel[];
  bids: OrderBookRpiLevel[];
  ts: string;
  seqId: number;
}

type timestamp = string;
type openPrice = string;
type highPrice = string;
type lowPrice = string;
type closePrice = string;
type vol = string;
type volCcy = string;
type volCcyQuote = string;
type confirm = string;

export type Candle = [
  timestamp,
  openPrice,
  highPrice,
  lowPrice,
  closePrice,
  vol,
  volCcy,
  volCcyQuote,
  confirm,
];

export type CandleNoVolume = [
  timestamp,
  openPrice,
  highPrice,
  lowPrice,
  closePrice,
];

export interface Trade {
  instId: string;
  side: string;
  sz: string;
  px: string;
  tradeId: string;
  ts: string;
  source?: string;
}

export interface InstrumentUpcomingParamChange {
  param: 'tickSz' | 'minSz' | 'maxMktSz' | string;
  newValue: string;
  effTime: string;
}

export interface Instrument {
  instType: InstrumentType;
  /** Series id for EVENTS, e.g. BTC-ABOVE-DAILY. */
  seriesId?: string;
  instId: string;
  uly: string;
  instFamily: string;
  category: string;
  baseCcy: string;
  quoteCcy: string;
  settleCcy: string;
  ctVal: string;
  ctMult: string;
  ctValCcy: string;
  optType: string;
  stk: string;
  listTime: string;
  contTdSwTime?: string; // Continuous trading switch time. The switch time from call auction/prequote to continuous trading. Unix timestamp format in milliseconds.
  preMktSwTime?: string; // The time a pre-market instrument switches to normal trading, Unix ms. Applicable to pre-market SWAP and Pre-market X-Perp FUTURES.
  expTime: string;
  lever: string;
  tickSz: string;
  lotSz: string;
  minSz: string;
  ctType: string;
  /**
   * FUTURES contract label (deprecated — prefer `expTime` for delivery time; removal planned).
   * Includes `this_five_years` / `next_five_years` (X-Perps / 5Y-style contracts).
   */
  alias: string;
  /**
   * Instrument status: live, suspend, rebase (SWAP only), post_only (SWAP only), preopen, test, expired, settling (EVENTS), …
   */
  state: string;
  openType?: string; // Open type: fix_price (fix price opening), pre_quote (pre-quote), call_auction (call auction). Only applicable to SPOT/MARGIN.
  maxLmtSz: string;
  maxLmtAmt?: string; // Max USD amount for a single limit order
  maxMktSz: string;
  maxMktAmt?: string; // Max USD amount for a single market order. Only applicable to SPOT/MARGIN.
  maxTwapSz: string;
  maxIcebergSz: string;
  maxTriggerSz: string;
  maxStopSz: string;
  /**
   * e.g. `normal`, `pre_market` (incl. Pre-market X-Perp FUTURES), `rebase_contract`, `xperp` (after Pre-market X-Perp converts).
   */
  ruleType: string;
  auctionEndTime: string;
  futureSettlement?: boolean; // Whether daily settlement for expiry feature is enabled. Applicable to FUTURES cross.
  tradeQuoteCcyList?: string[]; // List of quote currencies available for trading, e.g. ["USD", "USDC"]
  instIdCode?: number; // Instrument ID code. For simple binary encoding, must use instIdCode instead of instId.
  /**
   * Asset category of the instrument's base asset (first segment of `instId`). E.g. BTC-USDT-SWAP → category of BTC.
   * 1: Crypto, 3: Stocks, 4: Commodities, 5: Forex, 6: Bonds, "": not available
   */
  instCategory?: string;
  posLmtAmt?: string; // Maximum position value (USD) for this instrument at the user level. Applicable to SWAP/FUTURES.
  posLmtPct?: string; // Maximum position ratio (e.g., 30 for 30%) a user may hold relative to platform's current total position value. Applicable to SWAP/FUTURES.
  longPosRemainingQuota?: string;
  shortPosRemainingQuota?: string;
  maxPlatOILmt?: string; // Platform-wide maximum position value (USD) for this instrument. Applicable to SWAP/FUTURES.
  groupId?: string; // Instrument trading fee group ID
  /** Minimum spacing between RPI bid and RPI ask, in organic price levels. Default 4; 0 for Event Contracts. */
  rpiMinLevel?: string;
  /** Minimum distance from opposite-side organic best price for RPI spacing, in bps. */
  rpiMinPxBand?: string;
  upcChg?: InstrumentUpcomingParamChange[];
}

export interface EconomicCalendarData {
  calendarId: string;
  date: string;
  region: string;
  category: string;
  event: string;
  refDate: string;
  actual: string;
  previous: string;
  forecast: string;
  dateSpan: string;
  importance: string;
  uTime: string;
  prevInitial: string;
  ccy: string;
  unit: string;
}

export interface UnitConvertData {
  type: '1' | '2';
  instId: string;
  px: string;
  sz: string;
  unit: 'coin' | 'usds';
}

/**
 * @see GET /api/v5/public/funding-rate
 * `instType` is `SWAP` (perp) or `FUTURES` (X-Perp) when applicable.
 */
export interface PublicFundingRate {
  instType: string;
  instId: string;
  method: string;
  formulaType: string;
  fundingRate: string;
  nextFundingRate: string;
  fundingTime: string;
  nextFundingTime: string;
  minFundingRate: string;
  maxFundingRate: string;
  interestRate: string;
  impactValue: string;
  settState: string;
  settFundingRate: string;
  premium: string;
  ts: string;
}

export interface InsuranceFundDetail {
  ccy?: string;
  bal?: string;
  amt?: string;
  type?: string;
  maxBal?: string;
  maxBalTs?: string;
  decRate?: string;
  adlType?: string;
  adlBal?: string;
  adlRecBal?: string;
  /** @deprecated Returns "" per 2026-06-09 changelog */
  adlRate?: string;
  /** @deprecated Returns "" per 2026-06-09 changelog */
  adlRecRate?: string;
}

export interface InsuranceFund {
  instType?: string;
  details: InsuranceFundDetail[];
}

export interface FundingRateHistory {
  /** Perpetual (`SWAP`) or X-Perp (`FUTURES`). */
  instType: string;
  instId: string;
  fundingRate: string;
  realizedRate: string;
  fundingTime: string;
  method: string;
  formulaType?: string;
}

export interface SystemTime {
  ts: string;
}

/**
 * @see GET /api/v5/public/estimated-price
 */
export interface EstimatedDeliveryExercisePrice {
  instType: string;
  instId: string;
  settlePx: string;
  ts: string;
}

export interface OptionsTradeInfo {
  instId: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  ts: string;
}

export interface OptionTrade {
  vol24h: string;
  optType: 'C' | 'P';
  tradeInfo: OptionsTradeInfo[];
}

export interface OptionTrades {
  instId: string;
  instFamily: string;
  tradeId: string;
  px: string;
  sz: string;
  side: 'buy' | 'sell';
  optType: 'C' | 'P';
  fillVol: string;
  fwdPx: string;
  idxPx: string;
  markPx: string;
  ts: string;
}

export interface Announcement {
  annType: string;
  pTime: string; // The actual time the announcement was first published. Unix timestamp format in milliseconds, e.g. 1597026383085
  businessPTime: string; // The time displayed on the announcement page for user reference. Unix timestamp format in milliseconds, e.g. 1597026383085
  title: string;
  url: string;
}

/** Public borrow history record (GET /api/v5/finance/savings/lending-rate-history) */
export interface PublicBorrowHistoryRecord {
  ccy: string; // Currency, e.g. BTC
  amt: string; // Lending amount (deprecated)
  rate: string; // Annual borrowing interest rate
  lendingRate: string; // Annual lending interest rate
  ts: string; // Unix timestamp format in milliseconds
}

export interface BasicInterestRate {
  ccy: string; // Currency
  rate: string; // Daily borrowing rate
  quota: string; // Max borrow
}

export interface VIPInterestInfo {
  level: string; // VIP Level, e.g. VIP1
  loanQuotaCoef: string; // Loan quota coefficient. Loan quota = quota * level
  irDiscount: string; // Interest rate discount (Deprecated)
}

export interface RegularUserInterestInfo {
  level: string; // Regular user Level, e.g. Lv1
  loanQuotaCoef: string; // Loan quota coefficient. Loan quota = quota * level
  irDiscount: string; // Interest rate discount (Deprecated)
}

export interface ConfigCcyItem {
  ccy: string; // Currency
  rate: string; // Daily rate
}

export interface LoanQuotaConfig {
  ccy: string; // Currency
  stgyType: string; // Strategy type: 0=general strategy, 1=delta neutral strategy. If only 0 is returned, loan quota is shared between strategies
  quota: string; // Loan quota in absolute value
  level: string; // VIP level
}

export interface InterestRateAndLoanQuota {
  basic: BasicInterestRate[];
  vip: VIPInterestInfo[];
  regular: RegularUserInterestInfo[];
  configCcyList: ConfigCcyItem[]; // Currencies that have loan quota configured using customized absolute value
  config: LoanQuotaConfig[]; // The currency details of loan quota configured using customized absolute value
}

/**
 * @see GET /api/v5/public/market-data-history
 */
export interface MarketDataHistoryFileGroup {
  dateTs: string;
  filename: string;
  sizeMB: string;
  url: string;
}

export interface MarketDataHistoryGroupDetail {
  instId: string;
  instFamily: string;
  instType: string;
  dateRangeStart: string;
  dateRangeEnd: string;
  groupSizeMB: string;
  groupDetails: MarketDataHistoryFileGroup[];
}

export interface MarketDataHistoryResult {
  dateAggrType: string;
  details: MarketDataHistoryGroupDetail[];
  totalSizeMB: string;
  ts: string;
}

/** @see GET /api/v5/finance/staking-defi/eth/product-info */
export interface EthStakingProductInfo {
  fastRedemptionDailyLimit: string;
  rate: string;
  redemptDays: string;
  minAmt: string;
}

/** @see GET /api/v5/finance/staking-defi/sol/product-info */
export interface SolStakingProductInfo {
  fastRedemptionAvail: string;
  fastRedemptionDailyLimit: string;
  rate: string;
  redemptDays: string;
  minAmt: string;
}

/**
 * @see GET /api/v5/public/event-contract/series
 */
export interface EventContractSettlement {
  method: string;
  closeEarly: boolean;
  srcName: string;
  underlying: string;
}

export interface EventContractSeries {
  seriesId: string;
  freq: string;
  title: string;
  category: string;
  settlement: EventContractSettlement;
}

/**
 * @see GET /api/v5/public/event-contract/events
 */
export interface EventContractEvent {
  seriesId: string;
  eventId: string;
  expTime: string;
  state: string;
  fixTime?: string;
}

/**
 * @see GET /api/v5/public/event-contract/markets
 */
export interface EventContractMarket {
  seriesId: string;
  eventId: string;
  instId: string;
  listTime: string;
  expTime: string;
  state: string;
  fixTime: string;
  outcome: string;
  floorStrike: string;
  /** Max expiration value for YES on `between` method. "INF" = no upper bound. "" for non-between. */
  capStrike?: string;
  /** Hit direction when method is `hit`: up | dn | "". */
  hitDir?: string;
  settleValue: string;
  disputed: boolean;
}

/**
 * @see GET /api/v5/public/corporate-actions
 */
export interface CorporateAction {
  caEventId: string;
  eventVersion: string;
  ticker: string;
  bbGlobalId: string;
  exchange: string;
  /** CASH_DIVIDEND | STOCK_SPLIT | REVERSE_STOCK_SPLIT | STOCK_DIVIDEND | SPINOFF */
  actionType: string;
  /** PREDICTABLE | UNPREDICTABLE */
  caClass: string;
  /** PENDING | SMALL | MEDIUM | LARGE. Only applicable to cash dividends. */
  dividendSize: string;
  /** Only present for cash dividends. Dates are Unix timestamps in milliseconds. */
  cashDividend?: {
    gross: string;
    net: string;
    ccy: string;
    exDate: string;
    recordDate: string;
    paymentDate: string;
  };
  /** Source ratio for stock splits. Empty string otherwise. */
  ratioFrom: string;
  /** Target ratio for stock splits. Empty string otherwise. */
  ratioTo: string;
  /** upcoming | scheduled | preparing | pre_pause | progressing | completed */
  status: string;
  /** Planned cutover time, Unix timestamp in milliseconds. */
  cutoverTime: string;
  instruments: {
    instId: string;
    /** live | rebase | post_only | suspend */
    state: string;
  }[];
}

export interface MmInstrumentType {
  instId: string;
  instType: string;
  /** A | B-Crypto | B-TradFi */
  pairType: string;
}

export interface DeltaHedgeCurrency {
  ccy: string;
  hedgeCcy: string[];
}

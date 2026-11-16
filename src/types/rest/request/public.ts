export interface EconomicCalendarRequest {
  region?: string;
  importance?: '1' | '2' | '3';
  before?: string;
  after?: string;
  limit?: string;
}

export interface UnitConvertRequest {
  type?: '1' | '2';
  instId: string;
  sz: string;
  px?: string;
  unit?: 'coin' | 'usds';
  opType: 'open' | 'close';
}

export interface CandleRequest {
  instId: string;
  after?: string;
  before?: string;
  bar?: string;
  limit?: string;
}

export interface GetPremiumHistoryRequest {
  instId: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface GetContractOpenInterestHistoryRequest {
  instId: string;
  period?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetContractTakerVolumeRequest {
  instId: string;
  period?: string;
  unit?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetTopTradersContractLongShortRatioRequest {
  instId: string;
  period?: string;
  end?: string;
  begin?: string;
  limit?: string;
}

export interface GetOptionTradesRequest {
  instId?: string;
  instFamily?: string;
  optType?: 'C' | 'P';
}

/**
 * @see GET /api/v5/public/market-data-history
 * Module 11: borrowing rate (T+2 typical, UTC+8 for timestamp parsing).
 * Max query range (2026-08-06): 10 days for daily, 10 months for monthly (was 20).
 */
export interface GetHistoricalMarketDataRequest {
  /**
   * 1: trades, 2: 1m candles, 3: funding rate, 4: 400-level book, 5: 5000-level, 6: 50-level (use 4/5), 11: borrowing rate
   */
  module: string;
  instType: 'SPOT' | 'FUTURES' | 'SWAP' | 'OPTION';
  instIdList?: string;
  instFamilyList?: string;
  dateAggrType: 'daily' | 'monthly';
  begin: string;
  end: string;
}

/**
 * @see GET /api/v5/public/event-contract/series
 */
export interface GetEventContractSeriesRequest {
  seriesId?: string;
}

/**
 * @see GET /api/v5/public/event-contract/events
 */
export interface GetEventContractEventsRequest {
  seriesId: string;
  eventId?: string;
  state?: 'preopen' | 'live' | 'settling' | 'expired' | string;
  limit?: string;
  before?: string;
  after?: string;
}

/**
 * @see GET /api/v5/public/event-contract/markets
 */
export interface GetEventContractMarketsRequest {
  seriesId: string;
  eventId?: string;
  instId?: string;
  state?: 'preopen' | 'live' | 'settling' | 'expired' | string;
  limit?: string;
  before?: string;
  after?: string;
}

/**
 * @see GET /api/v5/public/corporate-actions
 */
export interface GetCorporateActionsRequest {
  /** Underlying stock ticker. Mutually exclusive with instId. */
  ticker?: string;
  /** Instrument ID. Mutually exclusive with ticker. */
  instId?: string;
  /** Maximum 100. Default 20. */
  limit?: string;
  /** Return records with caEventId earlier than this value, exclusive. */
  after?: string;
  /** Return records with caEventId newer than this value, exclusive. */
  before?: string;
}

export interface GetInsuranceFundRequest {
  instType?: string;
  type?:
    | 'liquidation_balance_deposit'
    | 'bankruptcy_loss'
    | 'platform_revenue'
    | 'adl';
  instFamily?: string;
  ccy?: string;
  before?: string;
  after?: string;
  limit?: string;
}

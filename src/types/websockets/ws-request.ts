import type { InstrumentType } from '../rest/shared.js';

export interface WsAuthRequestArg {
  apiKey: string;
  passphrase: string;
  timestamp: string;
  sign: string;
}

export type WsTradeOp =
  | 'order'
  | 'batch-orders'
  | 'cancel-order'
  | 'batch-cancel-orders'
  | 'amend-order'
  | 'batch-amend-order';

export type WsPrivateChannel =
  | 'account'
  | 'positions'
  | 'balance_and_position'
  | 'orders'
  | 'orders-algo'
  | 'algo-advance'
  | 'liquidation-warning'
  | 'adl-warning'
  | 'account-greeks'
  | 'grid-orders-spot'
  | 'grid-orders-contract'
  | 'grid-orders-moon'
  | 'grid-positions'
  | 'grid-sub-orders';

export type WsPublicKlineChannel =
  | 'candle1Y'
  | 'candle6M'
  | 'candle3M'
  | 'candle1M'
  | 'candle1W'
  | 'candle1D'
  | 'candle2D'
  | 'candle3D'
  | 'candle5D'
  | 'candle12H'
  | 'candle6H'
  | 'candle4H'
  | 'candle2H'
  | 'candle1H'
  | 'candle30m'
  | 'candle15m'
  | 'candle5m'
  | 'candle3m'
  | 'candle1m'
  | 'candle1s'
  | 'candle1Yutc'
  | 'candle3Mutc'
  | 'candle1Mutc'
  | 'candle1Wutc'
  | 'candle1Dutc'
  | 'candle2Dutc'
  | 'candle3Dutc'
  | 'candle5Dutc'
  | 'candle12Hutc'
  | 'candle6Hutc';

export type WsPublicMarkPriceKlineChannel =
  | 'mark-price-candle1Y'
  | 'mark-price-candle6M'
  | 'mark-price-candle3M'
  | 'mark-price-candle1M'
  | 'mark-price-candle1W'
  | 'mark-price-candle1D'
  | 'mark-price-candle2D'
  | 'mark-price-candle3D'
  | 'mark-price-candle5D'
  | 'mark-price-candle12H'
  | 'mark-price-candle6H'
  | 'mark-price-candle4H'
  | 'mark-price-candle2H'
  | 'mark-price-candle1H'
  | 'mark-price-candle30m'
  | 'mark-price-candle15m'
  | 'mark-price-candle5m'
  | 'mark-price-candle3m'
  | 'mark-price-candle1m'
  | 'mark-price-candle1Yutc'
  | 'mark-price-candle3Mutc'
  | 'mark-price-candle1Mutc'
  | 'mark-price-candle1Wutc'
  | 'mark-price-candle1Dutc'
  | 'mark-price-candle2Dutc'
  | 'mark-price-candle3Dutc'
  | 'mark-price-candle5Dutc'
  | 'mark-price-candle12Hutc'
  | 'mark-price-candle6Hutc';

export type WsPublicIndexKlineChannel =
  | 'index-candle1Y'
  | 'index-candle6M'
  | 'index-candle3M'
  | 'index-candle1M'
  | 'index-candle1W'
  | 'index-candle1D'
  | 'index-candle2D'
  | 'index-candle3D'
  | 'index-candle5D'
  | 'index-candle12H'
  | 'index-candle6H'
  | 'index-candle4H index -candle2H'
  | 'index-candle1H'
  | 'index-candle30m'
  | 'index-candle15m'
  | 'index-candle5m'
  | 'index-candle3m'
  | 'index-candle1m'
  | 'index-candle1Yutc'
  | 'index-candle3Mutc'
  | 'index-candle1Mutc'
  | 'index-candle1Wutc'
  | 'index-candle1Dutc'
  | 'index-candle2Dutc'
  | 'index-candle3Dutc'
  | 'index-candle5Dutc'
  | 'index-candle12Hutc'
  | 'index-candle6Hutc';

export type WsPublicOrderBooksChannel =
  | 'books'
  | 'books5'
  | 'bbo-tbt'
  | 'bbo-rpi-tbt'
  | 'books-l2-tbt'
  | 'books50-l2-tpt'
  /** @deprecated Use `books-rpi`. ELP-only book; retired after 2026-10-31. */
  | 'books-elp'
  /** Consolidated organic + RPI depth (replaces books-elp). */
  | 'books-rpi';

export type WsPublicChannel =
  | 'instruments'
  | 'tickers'
  | 'open-interest'
  | WsPublicKlineChannel
  | WsPublicMarkPriceKlineChannel
  | WsPublicIndexKlineChannel
  | 'trades'
  | 'estimated-price'
  | 'mark-price'
  | 'price-limit'
  | WsPublicOrderBooksChannel
  | 'opt-summary'
  | 'funding-rate'
  | 'index-tickers'
  | 'status'
  | 'liquidation-orders'
  | 'event-contract-markets';

export type WsBusinessPrivateChannel =
  | 'orders-algo'
  | 'algo-advance'
  | 'deposit-info'
  | 'withdrawal-info'
  | 'grid-orders-spot'
  | 'grid-orders-contract'
  | 'grid-orders-moon'
  | 'grid-positions'
  | 'grid-sub-orders'
  | 'algo-recurring-buy';

export type WsBusinessPublicChannel =
  | WsPublicKlineChannel
  | WsPublicMarkPriceKlineChannel
  | WsPublicIndexKlineChannel;

export type WsBusinessChannel =
  | WsBusinessPrivateChannel
  | WsBusinessPublicChannel;

export type WsChannel = WsPublicChannel | WsPrivateChannel | WsBusinessChannel;

/** Used to trigger order actions over websockets (e.g. placing & cancelling orders) */
export interface WsTradeBaseRequest {
  op: WsTradeOp;
  id: string;
  args: any[];
}

export interface WsBaseRequestArg {
  channel: WsChannel;
}

/**
 *
 * Args to be sent with top level requests
 *
 */

export interface WsPrivateChannelArgTickers extends WsBaseRequestArg {
  channel: 'tickers';
  instId: string;
}

export interface WsPrivateChannelArgWithCcy extends WsBaseRequestArg {
  channel: 'account' | 'account-greeks' | 'withdrawal-info';
  ccy?: string;
}

/** `ANY` is used by some private subscription args; instruments channel uses `EVENTS` for event contracts. */
export type WsChannelArgInstType = InstrumentType | 'ANY';

export interface WsPrivateChannelArgWithInstFamily extends WsBaseRequestArg {
  channel: 'positions' | 'orders' | 'orders-algo' | 'liquidation-warning';
  instType: WsChannelArgInstType;
  instFamily?: string;
  instId?: string;
}

export interface WsPrivateChannelArgAlgo extends WsBaseRequestArg {
  channel: 'algo-advance';
  instType: WsChannelArgInstType;
  instId?: string;
  algoId?: string;
}

export interface WsPrivateChannelArgBalanceAndPosition
  extends WsBaseRequestArg {
  channel: 'balance_and_position';
}

export interface WsPrivateChannelArgGridOrders extends WsBaseRequestArg {
  channel: 'grid-orders-spot' | 'grid-orders-contract' | 'grid-orders-moon';
  instType: 'SPOT' | 'ANY';
  instId?: string;
  algoId?: string;
}

export interface WsPrivateChannelArgGridOther extends WsBaseRequestArg {
  channel: 'grid-positions' | 'grid-sub-orders';
  algoId: string;
}

/**
 * Pushes can be incremental: only instruments whose data changed.
 * Merge the local cache by `instId`. Do not treat each push as the full set.
 */
export interface WsPublicChannelArgInstType extends WsBaseRequestArg {
  channel: 'instruments';
  instType: WsChannelArgInstType;
}

export interface WsPublicChannelArgInstId extends WsBaseRequestArg {
  channel:
    | 'tickers'
    | 'open-interest'
    | WsPublicKlineChannel
    | WsPublicMarkPriceKlineChannel
    | WsPublicIndexKlineChannel
    | 'trades'
    | 'mark-price'
    | 'price-limit'
    | WsPublicOrderBooksChannel
    | 'funding-rate'
    | 'index-tickers';
  instId: string;
}

export type WsPublicChannelArgInstIdOrFamily = {
  channel: 'estimated-price';
  instType: 'OPTION' | 'FUTURES' | 'SWAP' | 'EVENTS';
} & (
  | {
      instId: string;
    }
  | {
      instFamily: string;
    }
);

export interface WsPublicChannelArgOptionSummary extends WsBaseRequestArg {
  channel: 'opt-summary';
  instFamily: string;
}

export interface WsPublicChannelArgStatus extends WsBaseRequestArg {
  channel: 'status';
}

export interface WsPublicChannelArgLiquidationOrders extends WsBaseRequestArg {
  channel: 'liquidation-orders';
  instType: 'SWAP' | 'FUTURES';
}

/** Event contract market status & floor strikes. @see public WS `event-contract-markets` */
export interface WsPublicChannelArgEventContractMarkets
  extends WsBaseRequestArg {
  channel: 'event-contract-markets';
  instType: 'EVENTS';
}

export type WsChannelSubUnSubRequestArg =
  | WsPrivateChannelArgTickers
  | WsPrivateChannelArgWithCcy
  | WsPrivateChannelArgWithInstFamily
  | WsPrivateChannelArgAlgo
  | WsPrivateChannelArgBalanceAndPosition
  | WsPrivateChannelArgGridOrders
  | WsPrivateChannelArgGridOther
  | WsPublicChannelArgInstType
  | WsPublicChannelArgInstId
  | WsPublicChannelArgInstIdOrFamily
  | WsPublicChannelArgOptionSummary
  | WsPublicChannelArgStatus
  | WsPublicChannelArgLiquidationOrders
  | WsPublicChannelArgEventContractMarkets;

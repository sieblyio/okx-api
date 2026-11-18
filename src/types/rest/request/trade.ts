import {
  AlgoOrderState,
  AlgoOrderType,
  AlgoPositionSide,
  InstrumentType,
  MarginMode,
  numberInString,
  OrderSide,
  OrderType,
  PositionSide,
  PriceTriggerType,
  TradeMode,
} from '../shared.js';

export interface AlgoRecentHistoryRequest {
  ordType: AlgoOrderType;
  algoId?: string;
  instType?: InstrumentType;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

export interface AlgoLongHistoryRequest {
  ordType: AlgoOrderType;
  state?: AlgoOrderState;
  algoId?: string;
  instType?: InstrumentType;
  instId?: string;
  after?: string;
  before?: string;
  limit?: string;
}

/**
 * When amending an attached trailing stop via amend algo / attach block (2026-04-13).
 * Only one of newCallbackRatio or newCallbackSpread.
 */
export interface AmendAttachedTrailingStop {
  newCallbackRatio?: string;
  newCallbackSpread?: string;
  newActivePx?: string;
}

interface AlgoTriggerOrder {
  newTpTriggerPx?: string;
  newTpTriggerPxType?: 'last' | 'index' | 'mark';
  newTpOrdPx?: string;
  newSlTriggerPx?: string;
  newSlTriggerPxType?: 'last' | 'index' | 'mark';
  newSlOrdPx?: string;
  newCallbackRatio?: string;
  newCallbackSpread?: string;
  newActivePx?: string;
}

/**
 * TP/SL and trailing (move_order_stop) attached to a parent `order` (2026-04-13: callbackRatio | callbackSpread, activePx).
 */
export interface AttachAlgoOrdRequest {
  attachAlgoClOrdId?: string;
  tpTriggerPx?: string;
  /** Only one of tpTriggerPx and tpTriggerRatio (FUTURES/SWAP). */
  tpTriggerRatio?: string;
  tpOrdPx?: string;
  tpOrdKind?: 'condition' | 'limit';
  slTriggerPx?: string;
  slTriggerRatio?: string;
  slOrdPx?: string;
  tpTriggerPxType?: 'last' | 'index' | 'mark';
  slTriggerPxType?: 'last' | 'index' | 'mark';
  sz?: string;
  amendPxOnTriggerType?: '0' | '1';
  /**
   * Trailing stop: one of `callbackRatio` or `callbackSpread` when attached ordType is `move_order_stop`.
   * e.g. 0.05 = 5%
   */
  callbackRatio?: string;
  /** Trailing: price distance (alternative to callbackRatio). */
  callbackSpread?: string;
  /** Trailing: activation; omit = activate immediately. */
  activePx?: string;
}

export interface AdvChaseParams {
  chaseType?: string;
  chaseVal?: string;
  maxChaseType?: string;
  maxChaseVal?: string;
}

export interface AdvChaseAmendParams {
  newChaseVal?: string;
  newMaxChaseVal?: string;
}

export interface AlgoOrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  side: OrderSide;
  posSide?: AlgoPositionSide;
  ordType: AlgoOrderType;
  algoClOrdId?: string;
  sz: numberInString;
  tag?: string;
  reduceOnly?: boolean;
  tgtCcy?: string;
  tpTriggerPx?: numberInString;
  tpTriggerPxType?: PriceTriggerType;
  tpOrdPx?: numberInString;
  tpOrdKind?: string;
  slTriggerPx?: numberInString;
  slTriggerPxType?: PriceTriggerType;
  slOrdPx?: numberInString;
  cxlOnClosePos?: boolean;
  triggerPx?: numberInString;
  triggerPxType?: PriceTriggerType;
  orderPx?: numberInString;
  chaseType?: string;
  chaseVal?: numberInString;
  maxChaseType?: string;
  maxChaseVal?: numberInString;
  callbackRatio?: numberInString;
  callbackSpread?: numberInString;
  activePx?: numberInString;
  pxVar?: numberInString;
  pxSpread?: numberInString;
  szLimit?: numberInString;
  pxLimit?: numberInString;
  timeInterval?: string;
  quickMgnType?: string;
  closeFraction?: numberInString;
  advanceOrdType?: 'fok' | 'ioc' | 'chase' | '';
  /** Required when advanceOrdType is `chase` (FUTURES/SWAP trigger). */
  advChaseParams?: AdvChaseParams[];
  attachAlgoOrds?: AttachAlgoOrdRequest[];
}

export interface AmendOrderRequest {
  instId: string;
  cxlOnFail?: boolean;
  ordId?: string;
  clOrdId?: string;
  reqId?: string;
  newSz?: string;
  newPx?: string;
  /**
   * EVENTS: `"1"` for non-`post_only` amends when applicable.
   * Ignored since 2026-07-24 (event-contract speed bump removed).
   */
  speedBump?: string;
  /** RPI taker access. Not inherited on amend - omit = false. Alias: isElpTakerAccess until 2026-10-31. */
  rpiTakerAccess?: boolean;
  /** @deprecated Use `rpiTakerAccess`. Alias until 2026-10-31. */
  isElpTakerAccess?: boolean;
  /** RPI maker spacing: auto-round price when true. Only for ordType rpi. */
  rpiPxRound?: boolean;
  /**
   * Amend attached trailing stop (or related attach algo) — only one of newCallbackRatio / newCallbackSpread per item (2026-04-13).
   */
  attachAlgoOrds?: AmendAttachedTrailingStop[];
}

export type AlgoOrderDetailsRequest =
  | {
      algoId: string;
    }
  | {
      algoClOrdId: string;
    };

export interface AmendAlgoOrderRequest {
  instId: string;
  algoId?: string;
  algoClOrdId?: string;
  cxlOnFail?: boolean;
  reqId?: string;
  newSz?: string;
  newTpTriggerPx?: string;
  newTpOrdPx?: string;
  newSlTriggerPx?: string;
  newSlOrdPx?: string;
  newTpTriggerPxType?: 'last' | 'index' | 'mark';
  newSlTriggerPxType?: 'last' | 'index' | 'mark';
  newTriggerPx?: string;
  newOrdPx?: string;
  newTriggerPxType?: 'last' | 'index' | 'mark';
  /** Amend chase values on a pending trigger+chase order (pre-trigger). */
  advChaseParams?: AdvChaseAmendParams[];
  attachAlgoOrds?: AlgoTriggerOrder[];
}

export interface CancelAlgoOrderRequest {
  instId: string;
  algoId?: string;
  algoClOrdId?: string;
}

export interface ClosePositionRequest {
  instId: string;
  posSide?: PositionSide;
  mgnMode: MarginMode;
  ccy?: string;
  autoCxl?: boolean;
  clOrdId?: string;
  tag?: string;
}

export interface FillsHistoryRequest {
  instType?: InstrumentType;
  uly?: string;
  instId?: string;
  ordId?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface OrderIdRequest {
  /**
   * REST: use as in trade docs. WebSocket `cancel-order` / `batch-cancel-orders`: deprecated (2026-04-07) — if sent, ignored; use
   * `ordId` or `clOrdId`. Optional `instIdCode` may still be used to map the instrument.
   */
  instId?: string;
  /**
   * Where supported, may take precedence over `instId` if both are present. Get instruments to map.
   */
  instIdCode?: number;
  ordId?: string;
  clOrdId?: string;
}

export interface OrderHistoryRequest {
  instType: InstrumentType;
  uly?: string;
  instId?: string;
  ordType?: OrderType;
  state?: string;
  category?: string;
  after?: string;
  before?: string;
  begin?: string;
  end?: string;
  limit?: string;
}

export interface OrderRequest {
  instId: string;
  tdMode: TradeMode;
  ccy?: string;
  clOrdId?: string;
  tag?: string;
  side: OrderSide;
  posSide?: PositionSide;
  ordType: OrderType;
  /** Quantity to buy or sell */
  sz: numberInString;
  px?: string;
  /** Place options orders in USD. Only applicable to options. One of px/pxUsd/pxVol must be filled for option orders */
  pxUsd?: string;
  /** Place options orders based on implied volatility, where 1 represents 100%. Only applicable to options */
  pxVol?: string;
  reduceOnly?: boolean;
  /** A spot buy on BTC-USDT with "base_ccy" would mean the QTY (sz) is in USDT */
  tgtCcy?: 'base_ccy' | 'quote_ccy';
  /**
   * Maximum acceptable slippage for spot and spot margin market-side orders, where tgtCcy is the received currency (base_ccy for buy, quote_ccy for sell).
   * Range: 0 to 0.05 (0% to 5%, inclusive). Up to 2 decimal places, e.g. 0.01 (1%) and 0.0123 (1.23%). Defaults to 0.00% if not specified.
   * Only applicable to SPOT and SPOT margin market orders. Cannot be amended on an existing order.
   */
  slippagePct?: string;
  banAmend?: boolean;
  /** Price amendment type: "0" = do not allow amendment, "1" = allow amendment within price limit. Default is "0" */
  pxAmendType?: '0' | '1';
  /** Quote currency used for trading. Only applicable to SPOT. Default is quote currency of instId */
  tradeQuoteCcy?: string;
  /** Self trade prevention mode: cancel_maker, cancel_taker, cancel_both. Default is cancel_maker */
  stpMode?: 'cancel_maker' | 'cancel_taker' | 'cancel_both';
  /**
   * RPI taker access for limit/market/fok/ioc. Default false. Speedbump when true.
   * Alias `isElpTakerAccess` accepted until 2026-10-31.
   */
  rpiTakerAccess?: boolean;
  /** @deprecated Use `rpiTakerAccess`. Alias until 2026-10-31. */
  isElpTakerAccess?: boolean;
  /** RPI maker spacing: auto-round price when true. Only for ordType rpi. */
  rpiPxRound?: boolean;
  /**
   * EVENTS: set to `"1"` for non-`post_only` orders. Error 54086 if missing when required.
   * Ignored since 2026-07-24 (event-contract speed bump removed).
   */
  speedBump?: string;
  /** EVENTS: `yes` or `no`. */
  outcome?: string;
  /** Take Profit & Stop Loss params */
  tpTriggerPx?: string;
  tpOrdPx?: string;
  slTriggerPx?: string;
  slOrdPx?: string;
  tpTriggerPxType?: PriceTriggerType;
  slTriggerPxType?: PriceTriggerType;
  /** TP/SL / trailing (attach) when placing the parent order */
  attachAlgoOrds?: AttachAlgoOrdRequest[];
  /** Quick margin type */
  quickMgnType?: 'manual' | 'auto_borrow' | 'auto_repay';
}

export interface SubmitEasyConvertRequest {
  fromCcy: string[];
  toCcy: string;
  source?: string;
}

export interface SubmitOneClickRepayRequest {
  debtCcy: string[];
  repayCcy: string;
}

export interface GetTransactionDetailsArchiveRequest {
  year: string;
  quarter: 'Q1' | 'Q2' | 'Q3' | 'Q4';
}

export interface OrderPrecheckRequest {
  instId: string;
  tdMode: string;
  side: string;
  posSide?: string;
  ordType: string;
  sz: string;
  px?: string;
  reduceOnly?: boolean;
  tgtCcy?: string;
  /** EVENTS: `yes` / `no`. */
  outcome?: string;
  attachAlgoOrds?: AttachAlgoOrdRequest[];
}

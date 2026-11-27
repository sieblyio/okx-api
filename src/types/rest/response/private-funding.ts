import { ASSET_BILL_TYPE } from '../../../constants/funding.js';

export interface FundingCurrency {
  ccy: string; // Currency code (e.g., "BTC")
  name: string; // Currency name
  logoLink: string; // Currency logo URL
  chain: string; // Chain name (e.g., "BTC-Bitcoin")
  ctAddr: string; // Contract address
  canDep: boolean; // Deposit availability
  canWd: boolean; // Withdrawal availability
  canInternal: boolean; // Internal transfer availability
  depEstOpenTime: string; // Estimated deposit opening time (timestamp)
  wdEstOpenTime: string; // Estimated withdrawal opening time (timestamp)
  minDep: string; // Minimum deposit amount
  minWd: string; // Minimum withdrawal amount
  minInternal: string; // Minimum internal transfer amount
  maxWd: string; // Maximum withdrawal amount per transaction
  wdTickSz: string; // Withdrawal precision (decimal places)
  wdQuota: string; // 24h withdrawal limit in USD
  usedWdQuota: string; // Used withdrawal quota in USD
  fee: string; // Fixed withdrawal fee
  minFee: string; // Minimum withdrawal fee (deprecated)
  maxFee: string; // Maximum withdrawal fee (deprecated)
  minFeeForCtAddr: string; // Minimum contract address withdrawal fee (deprecated)
  maxFeeForCtAddr: string; // Maximum contract address withdrawal fee (deprecated)
  burningFeeRate: string; // Burning fee rate (e.g., "0.05" for 5%)
  mainNet: boolean; // Is main network
  needTag: boolean; // Requires tag/memo for withdrawal
  minDepArrivalConfirm: string; // Min confirmations for deposit credit
  minWdUnlockConfirm: string; // Min confirmations for withdrawal unlock
  depQuotaFixed: string; // Fixed deposit limit in USD
  usedDepQuotaFixed: string; // Used fixed deposit quota in USD
  depQuoteDailyLayer2: string; // Layer2 daily deposit limit
}

export interface FundingBalance {
  availBal: string;
  bal: string;
  ccy: string;
  frozenBal: string;
}

export interface AccountAssetValuation {
  details: {
    classic: string;
    earn: string;
    funding: string;
    trading: string;
  };
  totalBal: string;
  ts: string;
}

export interface FundTransferResult {
  transId: string;
  ccy: string;
  clientId: string;
  from: string;
  amt: string;
  to: string;
}
export interface FundTransferState {
  amt: string;
  ccy: string;
  clientId: string;
  from: string;
  instId: never; // deprecated
  state: string;
  subAcct: string;
  to: string;
  toInstId: never; // deprecated
  transId: string;
  type: string;
}

export interface AssetBillDetails {
  billId: string;
  ccy: string;
  clientId: string;
  balChg: string;
  bal: string;
  type: `${ASSET_BILL_TYPE}`;
  notes: string;
  ts: string;
}

export interface WithdrawResponse {
  ccy: string;
  chain: string;
  amt: string;
  wdId: string;
  clientId: string;
}

export interface NonTradableAsset {
  ccy: string;
  name: string;
  logoLink: string;
  bal: string;
  canWd: boolean;
  chain: string;
  minWd: string;
  wdAll: boolean;
  fee: string;
  ctAddr: string;
  wdTickSz: string;
  needTag: boolean;
  burningFeeRate: string;
  feeCcy: string;
}

export interface DepositHistory {
  ccy: string; // Currency, e.g. BTC
  chain: string; // Chain name
  amt: string; // Deposit amount
  from: string; // Deposit account. If the deposit comes from internal transfer, displays account info (phone/email, masked). Returns "" otherwise.
  areaCodeFrom: string; // If from is a phone number, this parameter returns area code of the phone number
  to: string; // Deposit address. If the deposit comes from on-chain, displays the on-chain address. Returns "" otherwise.
  txId: string; // Hash record of the deposit
  ts: string; // Timestamp that the deposit record is created, Unix timestamp format in milliseconds, e.g. 1655251200000
  state: string; // Status of deposit: 0=waiting for confirmation, 1=deposit credited, 2=deposit successful, 8=pending due to temp suspension, 11=match blacklist, 12=account/deposit frozen, 13=sub-account deposit interception, 14=KYC limit
  depId: string; // Deposit ID
  fromWdId: string; // Internal transfer initiator's withdrawal ID. If deposit comes from internal transfer, displays the withdrawal ID, returns "" otherwise
  actualDepBlkConfirm: string; // The actual amount of blockchain confirmed in a single deposit
}

export interface LockedTravelRuleDeposit {
  depId: string;
  txId: string;
  addr: string;
  ccy: string; // Empty string if currency lookup fails
  chain: string; // Empty string if chain lookup fails
  amt: string;
  ts: string; // Data generation time, Unix timestamp in milliseconds
}

export interface UnlockTravelRuleDepositResponse {
  result: boolean; // true: deposit released or already unlocked; an empty data array indicates failure
}

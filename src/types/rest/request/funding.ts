export interface FundsTransferRequest {
  ccy: string;
  amt: string;
  from: '6' | '18';
  to: '6' | '18';
  subAcct?: string;
  type?: '0' | '1' | '2' | '3' | '4';
  loanTrans?: boolean;
  clientId?: string;
  omitPosRisk?: string;
}

export interface WithdrawRequest {
  ccy: string;
  amt: string;
  dest: '3' | '4';
  toAddr: string;
  /**
   * Address type:
   * - 1: wallet address, email, phone, or login account name
   * - 2: UID (only for whitelisted users; applicable only when dest=3)
   */
  toAddrType?: '1' | '2';
  chain?: string;
  areaCode?: string;
  clientId?: string;
  // Recipient information for specific entity users doing on-chain/lightning withdrawal
  rcvrInfo?: {
    // Required: 'exchange' for exchange wallet, 'private' for private wallet
    walletType: 'exchange' | 'private';
    // Exchange ID (required if walletType = 'exchange'). Use '0' if exchange not in list
    exchId?: string;
    // Receiver's first name (required if walletType = 'exchange')
    rcvrFirstName?: string;
    // Receiver's last name (required if walletType = 'exchange')
    rcvrLastName?: string;
    // Recipient's country - English name or ISO 3166-1 two-letter code
    rcvrCountry?: string;
    // State/Province of the recipient
    rcvrCountrySubDivision?: string;
    // Town/city where the recipient is located
    rcvrTownName?: string;
    // Recipient's street address
    rcvrStreetName?: string;
  };
}

/**
 * @see GET /api/v5/public/funding-rate
 * `instId` may be a specific instrument, or the literal `ANY` for all perpetuals and X-Perp (FUTURES) contracts.
 */
export interface GetFundingRateRequest {
  instId: string;
}

export interface FundingRateRequest {
  /** Perpetual or X-Perp FUTURES instrument id (not `ANY` on this route). */
  instId: string;
  before?: string;
  after?: string;
  limit?: string;
}

export interface GetDepositWithdrawStatusRequest {
  wdId?: string;
  txId?: string;
  ccy?: string;
  to?: string;
  chain?: string;
}

export interface GetDepositHistoryRequest {
  ccy?: string; // Currency, e.g. BTC
  depId?: string; // Deposit ID
  fromWdId?: string; // Internal transfer initiator's withdrawal ID
  txId?: string; // Hash record of the deposit
  type?: '3' | '4'; // Deposit Type: 3=internal transfer, 4=deposit from chain
  state?: '0' | '1' | '2' | '8' | '11' | '12' | '13' | '14' | '17'; // Status of deposit
  after?: string; // Pagination of data to return records earlier than the requested ts (Unix timestamp in milliseconds)
  before?: string; // Pagination of data to return records newer than the requested ts (Unix timestamp in milliseconds)
  limit?: string; // Number of results per request. Max is 100; default is 100
}

export interface UnlockTravelRuleDepositRequest {
  depId: string;
  // Required originator information depends on the user's entity.
  questionnaire: {
    personType: '1' | '2'; // 1: self, 2: third party
    walletType: 'exchange' | 'private';
    exchId?: string; // Required for exchange wallets; use '0' if not listed
    exchName?: string; // Required when exchId = '0'
    origFirstName?: string; // Required for a natural person without origCompanyName
    origLastName?: string; // Required for a natural person without origCompanyName
    origCompanyName?: string; // Required for a legal entity without origFirstName and origLastName
    origCountry?: string; // Country of residence or registration, ISO 3166-1 alpha-2
    origGeoAddress?: string; // Full address on one line
    origDob?: string; // Date of birth or incorporation / registration, YYYY-MM-DD
    origPob?: string; // Place of birth or country of registration, ISO 3166-1 alpha-2
    origNationality?: string; // Required for a natural person, ISO 3166-1 alpha-2
    brazilClassificationCode?: string; // Transfer purpose: Annex I below USD 50,000, Annex II otherwise; currently optional for OKX Brazil
  };
}

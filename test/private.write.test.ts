import { RestClient, RFQLeg } from '../src/index.js';
import {
  errorResponseObject,
  permissionErrorResponse,
  successResponseList,
} from './response.util.js';

// These tests primarily check auth is working by expecting permission, balance or order not found style errors
describe('Private REST API Endpoints (POST)', () => {
  const API_KEY = process.env.API_KEY_COM;
  const API_SECRET = process.env.API_SECRET_COM;
  const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

  const api = new RestClient({
    apiKey: API_KEY!,
    apiSecret: API_SECRET!,
    apiPass: API_PASSPHRASE!,
  });

  const instrumentId = 'BTC-USDT';

  it('should have api credentials to use', () => {
    expect(API_KEY).toStrictEqual(expect.any(String));
    expect(API_SECRET).toStrictEqual(expect.any(String));
    expect(API_PASSPHRASE).toStrictEqual(expect.any(String));
  });

  describe('Trade Endpoints', () => {
    it('submitOrder()', async () => {
      try {
        expect(
          await api.submitOrder({
            instId: instrumentId,
            tdMode: 'cash',
            side: 'buy',
            ordType: 'market',
            sz: '1000000',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('submitMultipleOrders()', async () => {
      try {
        expect(
          await api.submitMultipleOrders([
            {
              instId: instrumentId,
              tdMode: 'cash',
              side: 'buy',
              ordType: 'market',
              sz: '1000000',
            },
            {
              instId: instrumentId,
              tdMode: 'cash',
              side: 'buy',
              ordType: 'market',
              sz: '1000000',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelOrder()', async () => {
      try {
        expect(
          await api.cancelOrder({
            instId: instrumentId,
            ordId: '12313123123',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelMultipleOrders()', async () => {
      try {
        expect(
          await api.cancelMultipleOrders([
            {
              instId: instrumentId,
              ordId: '12313123123',
            },
            {
              instId: instrumentId,
              ordId: '12313123124',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('amendOrder()', async () => {
      try {
        expect(
          await api.amendOrder({
            instId: instrumentId,
            ordId: '12313123123',
            newSz: '500000',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('amendMultipleOrders()', async () => {
      try {
        expect(
          await api.amendMultipleOrders([
            {
              instId: instrumentId,
              ordId: '12313123123',
              newSz: '500000',
            },
            {
              instId: instrumentId,
              ordId: '12313123124',
              newSz: '500000',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('closePositions()', async () => {
      try {
        expect(
          await api.closePositions({
            instId: instrumentId,
            mgnMode: 'isolated',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('placeAlgoOrder()', async () => {
      try {
        expect(
          await api.placeAlgoOrder({
            instId: instrumentId,
            tdMode: 'cash',
            side: 'buy',
            ordType: 'twap',
            sz: '50000',
            szLimit: '50000',
            pxLimit: '50000',
            pxVar: '0.5',
            timeInterval: '20',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelAlgoOrder()', async () => {
      try {
        expect(
          await api.cancelAlgoOrder([
            {
              instId: instrumentId,
              algoId: '123123123',
            },
            {
              instId: instrumentId,
              algoId: '123123124',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelAdvanceAlgoOrder()', async () => {
      //const errorMatcher = /already stopped/gim;

      try {
        expect(
          await api.cancelAdvanceAlgoOrder([
            {
              instId: instrumentId,
              algoId: '123123123',
            },
            {
              instId: instrumentId,
              algoId: '123123124',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it.skip('submitEasyConvert()', async () => {
      try {
        expect(
          await api.submitEasyConvert({
            fromCcy: ['BTC'],
            toCcy: 'USDT',
          }),
        ).toBeFalsy();
      } catch (e) {
        // currently failing. Asked OKX.
        // {"code": "50013", "data": [], "msg": "System busy, please try again later."}
        expect(e).toBe('');
        // .toMatchObject(
        //   errorResponseObject('1', [{ lkml: true }], 'Operation failed.')
        // );
      }
    });

    it('submitOneClickRepay()', async () => {
      try {
        expect(
          await api.submitOneClickRepay({
            debtCcy: ['BTC'],
            repayCcy: 'USDT',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });
  });

  describe('Block Trading Endpoints', () => {
    const instId = 'ETH-USDT';
    const rfqLeg: RFQLeg = {
      instId,
      sz: '25',
      side: 'buy',
    };

    // const errorCode = '70015';
    // Block trading is only available for OKX users who have completed identity verification level 2 or above
    // const errorMatch = expect.any(String);
    // const errorMatch = expect.stringMatching(/level 2 or above/gim);

    it('createBlockRFQ()', async () => {
      try {
        expect(
          await api.createBlockRFQ({
            counterparties: ['Trader1'],
            legs: [rfqLeg],
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelBlockRFQ()', async () => {
      try {
        expect(await api.cancelBlockRFQ({ rfqId: 'fakeId1' })).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelMultipleBlockRFQs()', async () => {
      try {
        expect(
          await api.cancelMultipleBlockRFQs({ rfqIds: ['fakeId1'] }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelAllRFQs()', async () => {
      try {
        expect(await api.cancelAllRFQs()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('executeBlockQuote()', async () => {
      try {
        expect(
          await api.executeBlockQuote({
            quoteId: 'fakeQuoteId',
            rfqId: 'fkeId1',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('createBlockQuote()', async () => {
      try {
        expect(
          await api.createBlockQuote({
            rfqId: 'fakeId1',
            legs: [
              {
                instId,
                px: '10000',
                side: 'buy',
                sz: '100',
              },
            ],
            quoteSide: 'buy',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelBlockQuote()', async () => {
      try {
        expect(
          await api.cancelBlockQuote({
            quoteId: 'fakeId1',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelMultipleBlockQuotes()', async () => {
      try {
        expect(
          await api.cancelMultipleBlockQuotes({
            quoteIds: ['10123'],
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('cancelAllBlockQuotes()', async () => {
      try {
        expect(await api.cancelAllBlockQuotes()).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });
  });

  describe('Funding Endpoints', () => {
    it('fundsTransfer()', async () => {
      try {
        expect(
          await api.fundsTransfer({
            ccy: 'USDT',
            amt: '1.5',
            from: '18',
            to: '6',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('savingsPurchaseRedemption()', async () => {
      try {
        expect(
          await api.savingsPurchaseRedemption({
            ccy: 'BTC',
            amt: '1',
            side: 'redempt',
            rate: '1',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('setLendingRate()', async () => {
      try {
        expect(
          await api.setLendingRate({ ccy: 'USDT', rate: '1' }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });
  });

  // Currently not working. OKX working on a fix server-side
  describe.skip('Convert Endpoints', () => {
    it('estimateConvertQuote()', async () => {
      try {
        expect(
          await api.estimateConvertQuote({
            baseCcy: 'ETH',
            quoteCcy: 'USDT',
            side: 'buy',
            rfqSz: '30',
            rfqSzCcy: 'USDT',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });

    it('convertTrade()', async () => {
      try {
        expect(
          await api.convertTrade({
            baseCcy: 'ETH',
            quoteCcy: 'USDT',
            side: 'buy',
            sz: '30',
            szCcy: 'USDT',
            quoteId: 'quoterETH-USDT16461885104612381',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toBeFalsy();
      }
    });
  });

  describe('Account Endpoints', () => {
    it('setPositionMode()', async () => {
      try {
        expect(
          await api.setPositionMode({ posMode: 'long_short_mode' }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('setLeverage()', async () => {
      try {
        expect(
          await api.setLeverage({
            lever: '5',
            instId: 'BTC-USDT',
            mgnMode: 'cross',
          }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('changePositionMargin()', async () => {
      try {
        expect(
          await api.changePositionMargin({
            instId: 'BTC-USDT',
            posSide: 'long',
            type: 'add',
            amt: '1',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('setGreeksDisplayType()', async () => {
      try {
        expect(
          await api.setGreeksDisplayType({ greeksType: 'PA' }),
        ).toMatchObject(successResponseList());
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('setIsolatedMode()', async () => {
      try {
        expect(
          await api.setIsolatedMode({
            isoMode: 'automatic',
            type: 'MARGIN',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('borrowRepayVIPLoan()', async () => {
      try {
        expect(
          await api.borrowRepayVIPLoan({
            ccy: 'BTC',
            side: 'repay',
            amt: '1',
            ordId: '123123123123',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(
          errorResponseObject(
            '59305',
            [],
            expect.stringMatching(/VIP loan/gim),
          ),
        );
      }
    });
  });

  describe('SubAccount Endpoints', () => {
    it('resetSubAccountAPIKey()', async () => {
      try {
        expect(
          await api.resetSubAccountAPIKey({
            subAcct: 'fakeSubAcc',
            apiKey: 'fakeApiKey',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('transferSubAccountBalance()', async () => {
      try {
        expect(
          await api.transferSubAccountBalance({
            ccy: 'USDT',
            amt: '1.5',
            from: '6',
            to: '6',
            fromSubAccount: 'test-1',
            toSubAccount: 'test-2',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('setSubAccountTransferOutPermission()', async () => {
      try {
        expect(
          await api.setSubAccountTransferOutPermission({
            subAcct: 'test-1',
            canTransOut: true,
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });
  });

  describe('Grid Trading Endpoints', () => {
    const algoId = 'fakeAlgoId';
    const instId = 'BTC-USDT';

    it('placeGridAlgoOrder()', async () => {
      try {
        expect(
          await api.placeGridAlgoOrder({
            instId: 'BTC-USDT',
            algoOrdType: 'moon_grid',
            maxPx: '5000',
            minPx: '400',
            gridNum: '10',
            runType: '2',
            quoteSz: '25',
          }),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('amendGridAlgoOrder()', async () => {
      try {
        expect(
          await api.amendGridAlgoOrder({
            algoId,
            instId,
            tpTriggerPx: '10',
          }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('stopGridAlgoOrder()', async () => {
      try {
        expect(
          await api.stopGridAlgoOrder([
            {
              algoId,
              instId,
              algoOrdType: 'moon_grid',
              stopType: '1',
            },
          ]),
        ).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('spotGridWithdrawIncome()', async () => {
      try {
        expect(await api.spotGridWithdrawIncome({ algoId })).toBeFalsy();
      } catch (e) {
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('computeGridMarginBalance()', async () => {
      try {
        expect(
          await api.computeGridMarginBalance({ algoId, type: 'reduce' }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('adjustGridMarginBalance()', async () => {
      try {
        expect(
          await api.adjustGridMarginBalance({
            algoId,
            type: 'reduce',
            percent: '50',
          }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });
  });

  describe('Staking Endpoints', () => {
    const productId = '1234';

    it('submitStake()', async () => {
      try {
        expect(
          await api.submitStake({
            productId,
            investData: [{ ccy: 'ZIL', amt: '100' }],
            term: '30',
          }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it('redeemStake()', async () => {
      try {
        expect(
          await api.redeemStake({
            ordId: 'fakeOrderId',
            protocolType: 'staking',
          }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(permissionErrorResponse());
      }
    });

    it.skip('cancelStakingRequest()', async () => {
      try {
        expect(
          await api.cancelStakingRequest({
            ordId: 'fakeOrderId',
            protocolType: 'staking',
          }),
        ).toBeFalsy();
      } catch (e) {
        // expect(e).toBeFalsy();
        expect(e).toMatchObject(
          errorResponseObject('50026', [], expect.stringMatching(/System/gim)),
        );
      }
    });
  });
});

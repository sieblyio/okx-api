import {
  DefaultLogger,
  getWsKeyForTopicChannel,
  MessageEventLike,
  WebsocketClient,
  WsChannelSubUnSubRequestArg,
  WsKey,
  WsPublicOrderBooksChannel,
} from '../src/index.js';

class TestWebsocketClient extends WebsocketClient {
  public getWsUrl(wsKey: WsKey) {
    return super.getWsUrl(wsKey);
  }

  public resolveEmittableEvents(wsKey: WsKey, event: MessageEventLike) {
    return super.resolveEmittableEvents(wsKey, event);
  }
}

describe('WebsocketClient', () => {
  it('routes a typed bbo-rpi-tbt subscription to the public connection', () => {
    const channel: WsPublicOrderBooksChannel = 'bbo-rpi-tbt';
    const topic: WsChannelSubUnSubRequestArg = {
      channel,
      instId: 'BTC-USDT',
    };

    expect(getWsKeyForTopicChannel('GLOBAL', topic.channel)).toBe('prodPublic');
  });

  it.each([false, true])(
    'defaults to port 443 with demoTrading=%s',
    async (demoTrading) => {
      const client = new TestWebsocketClient({ demoTrading });
      const url = await client.getWsUrl('prodPublic');

      expect(url).toBe(
        demoTrading
          ? 'wss://wspap.okx.com/ws/v5/public'
          : 'wss://ws.okx.com/ws/v5/public',
      );
    },
  );

  it('forwards notice 64010 without reconnecting', () => {
    const logger = { ...DefaultLogger, info: jest.fn() };
    const client = new TestWebsocketClient({}, logger);
    const reconnect = jest
      .spyOn(client, 'executeReconnectableClose')
      .mockImplementation(() => {});
    const notice = {
      event: 'notice',
      code: '64010',
      msg: 'WebSocket port 8443 will be retired soon. Please migrate to port 443.',
    };
    const event: MessageEventLike = {
      target: {} as WebSocket,
      type: 'message',
      data: JSON.stringify(notice),
    };

    expect(client.resolveEmittableEvents('prodPublic', event)).toStrictEqual([
      { eventType: 'update', event: { ...notice, wsKey: 'prodPublic' } },
    ]);
    expect(reconnect).not.toHaveBeenCalled();
  });
});

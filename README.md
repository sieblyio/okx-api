# Node.js & Typescript OKX (OKEX) API & WebSocket SDK

[![E2E Tests](https://github.com/sieblyio/okx-api/actions/workflows/e2etest.yml/badge.svg?branch=master)](https://github.com/sieblyio/okx-api/actions/workflows/e2etest.yml)
[![OKX Tutorial](https://img.shields.io/badge/OKX%20Tutorial-siebly.io-blue)](https://siebly.io/sdk/okx/javascript/tutorial)
[![npm downloads](https://img.shields.io/npm/dt/okx-api)][1]
[![npm version](https://img.shields.io/npm/v/okx-api)][1]
[![npm size](https://img.shields.io/bundlephobia/min/okx-api/latest)][1]
[![last commit](https://img.shields.io/github/last-commit/sieblyio/okx-api)][1]
[![CodeFactor](https://www.codefactor.io/repository/github/sieblyio/okx-api/badge)](https://www.codefactor.io/repository/github/sieblyio/okx-api)

<p align="center">
  <a href="https://www.npmjs.com/package/okx-api">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoDarkMode2.svg?raw=true#gh-dark-mode-only">
      <img alt="SDK Logo" src="https://github.com/sieblyio/okx-api/blob/master/docs/images/logoBrightMode2.svg?raw=true#gh-light-mode-only">
    </picture>
  </a>
</p>

[1]: https://www.npmjs.com/package/okx-api

> [!TIP]
> Upcoming change: As part of the [Siebly.io](https://siebly.io/?ref=ghokx) brand, this SDK is now hosted under our [Siebly.io GitHub organisation](https://github.com/sieblyio). The migration is seamless and requires no user changes.

Complete, updated & performant Node.js SDK for the OKX(OKEX) APIs and WebSockets.

Take a look at our dedicated [OKX API quickstart guides for major frameworks and JavaScript runtimes](#frameworks--quickstart-guides).

- Complete integration with OKX REST APIs, WebSockets & WebSocket APIs.
- TypeScript support (with type declarations for most API requests & responses).
- Over 100 end-to-end tests making real API calls & WebSocket connections, validating any changes before they reach npm.
- Supports all available OKX regions:
  - OKX Global (www.okx.com), by default.
  - OKX EEA (my.okx.com), by setting `market: 'EEA'`.
  - OKX US (app.okx.com), by setting `market: 'US'`.
- Actively maintained with a modern, promise-driven interface.
- Robust WebSocket integration
  - Configurable connection heartbeats (automatically detect failing connections).
  - Automatic reconnect then resubscribe workflows.
  - Automatic authentication and heartbeat handling.
- Supports WebSocket API in all supported regions & product groups:
  - Use the WebsocketClient's event-driven `sendWSAPIRequest()` method, or;
  - Use the WebsocketAPIClient for a REST-like experience.
    - Use the WebSocket API like a REST API!
    - Automatic routing to business vs private WebSocket endpoints.
    - End to end types.
    - See [examples/ws-api-client.ts](./examples/ws-api-client.ts) for a demonstration.
- Browser support (via webpack bundle - see "Browser Usage" below).
- QuickStart Guide: https://siebly.io/sdk/okx/javascript
- OKX JavaScript Tutorial: https://siebly.io/sdk/okx/javascript/tutorial

## Table of Contents

- [Installation](#installation)
  - [Frameworks & Quickstart Guides](#frameworks--quickstart-guides)
- [Issues & Discussion](#issues--discussion)
- [Related Projects](#related-projects)
- [Documentation](#documentation)
- [Contributions & Thanks](#contributions--thanks)
- [Structure](#structure)
- [Usage](#usage)
  - [REST Client](#rest-client)
    - [Requests & Responses](#requests--responses)
    - [Example](#example)
  - [WebSockets](#websockets)
    - [Sending Orders via WebSockets](#sending-orders-via-websockets)
    - [Receiving Realtime Data](#receiving-realtime-data)
    - [Public Events](#public-events)
    - [Private Events](#private-events)
- [Browser/Frontend Usage](#browserfrontend-usage)
  - [Vite and React](#vite-and-react)
  - [Next.js and server-side requests](#nextjs-and-server-side-requests)
  - [React Native and Expo](#react-native-and-expo)
  - [Standalone Webpack bundle](#standalone-webpack-bundle)
- [Use with LLMs & AI](#use-with-llms--ai)
- [Contributions & Pull Requests](#contributions--pull-requests)
- [Used By](#used-by)
- [Star History](#star-history)

## Installation

```bash
npm install okx-api
```

### Frameworks & Quickstart Guides

Our complete OKX SDK supports all the major JavaScript runtimes. For maximum convenience, we've included guides to quickly get you started with the most popular runtimes. If you're not sure how to use this SDK with a runtime or framework not listed here, feel free to [open an issue on GitHub](https://github.com/sieblyio/okx-api/issues).

| Runtime                    | Details                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Backend (trading bots)     | Using [Node.js and JavaScript](https://sieblyio.github.io/docs/okx/environments/node.html), [Node.js and TypeScript](https://sieblyio.github.io/docs/okx/environments/typescript.html), [Bun](https://sieblyio.github.io/docs/okx/environments/bun.html), or [Deno](https://sieblyio.github.io/docs/okx/environments/deno.html). This is the recommendation for algorithmic trading systems. |
| Frontend / Web Development | Using [React with Vite](https://sieblyio.github.io/docs/okx/environments/react.html) or [Vite with plain JavaScript](https://sieblyio.github.io/docs/okx/environments/vite.html). Display REST and WebSocket prices in the browser.                                                                                                                                                          |
| Next.js App Router         | Using the [Next.js App Router](https://sieblyio.github.io/docs/okx/environments/next.html) to serve the price from a Route Handler running on Node.js.                                                                                                                                                                                                                                       |
| Mobile (iOS & Android)     | Using [React Native with Expo for iOS and Android](https://sieblyio.github.io/docs/okx/environments/expo.html). The example guides you to display the current BTC-USDT price from OKX and stream updates over WebSockets.                                                                                                                                                                    |
| Cloudflare Workers         | [Cloudflare Workers](https://sieblyio.github.io/docs/okx/environments/cloudflare-workers.html). Return a public price from a Worker, with a separate example for authenticated orders.                                                                                                                                                                                                       |

Refer to [runtime setup](https://sieblyio.github.io/docs/okx/compatibility.html) for installation commands, project configuration, and public price examples.

## Issues & Discussion

- Issues? Check the [issues tab](https://github.com/sieblyio/okx-api/issues).
- Discuss & collaborate with other node devs? Join our [Node.js Algo Traders](https://t.me/nodetraders) engineering community on telegram.
- Follow our announcement channel for real-time updates on [X/Twitter](https://x.com/sieblyio)

<!-- template_related_projects -->

## Related Projects

Check out our JavaScript/TypeScript/Node.js SDKs & Projects:

- Visit our website: [https://Siebly.io](https://siebly.io/)
- Try our REST API & WebSocket SDKs published on npmjs:
  - [Bybit JavaScript SDK: bybit-api](https://www.npmjs.com/package/bybit-api)
  - [Kraken JavaScript SDK: @siebly/kraken-api](https://www.npmjs.com/package/@siebly/kraken-api)
  - [OKX JavaScript SDK: okx-api](https://www.npmjs.com/package/okx-api)
  - [Binance JavaScript SDK: binance](https://www.npmjs.com/package/binance)
  - [Gate (gate.com) JavaScript SDK: gateio-api](https://www.npmjs.com/package/gateio-api)
  - [Bitget JavaScript SDK: bitget-api](https://www.npmjs.com/package/bitget-api)
  - [Kucoin JavaScript SDK: kucoin-api](https://www.npmjs.com/package/kucoin-api)
  - [Coinbase JavaScript SDK: coinbase-api](https://www.npmjs.com/package/coinbase-api)
  - [HTX JavaScript SDK: @siebly/htx-api](https://www.npmjs.com/package/@siebly/htx-api)
- Try my misc utilities:
  - [OrderBooks Node.js: orderbooks](https://www.npmjs.com/package/orderbooks)
  - [Crypto Exchange Account State Cache: accountstate](https://www.npmjs.com/package/accountstate)
- Check out my examples:
  - [awesome-crypto-examples Node.js](https://github.com/sieblyio/awesome-crypto-examples)
  <!-- template_related_projects_end -->

## Documentation

The [OKX SDK documentation](https://sieblyio.github.io/docs/okx/) covers installation, client setup, public market data, authenticated trading, and WebSocket subscriptions.

Most methods accept JS objects. These can be populated using parameters specified by okx's API documentation, or check the type definition in the rest-client class methods.

- [RestClient](src/rest-client.ts)
- [OKX exchange API reference](https://www.okx.com/docs-v5/en/#rest-api)
- [REST Endpoint Function List](./docs/endpointFunctionList.md)

## Contributions & Thanks

Support my efforts to make algo trading accessible to all - register with my referral links:

- [Bybit](https://www.bybit.com/en-US/register?affiliate_id=9410&language=en-US&group_id=0&group_type=1)
- [Binance](https://www.binance.com/en/register?ref=20983262)
- [OKX](https://www.okx.com/join/18504944)

For more ways to give thanks & support my efforts, visit [Contributions & Thanks](https://github.com/sieblyio/awesome-crypto-examples/wiki/Contributions-&-Thanks)!

## Structure

This project uses typescript. Resources are stored in 3 key structures:

- [src](./src) - the whole connector written in typescript
- [lib](./lib) - the javascript version of the project (compiled from typescript). This should not be edited directly, as it will be overwritten with each release. This is also the version published to npm.
- [dist](./dist) - the packed bundle of the project for use in browser environments (manual, using webpack).
- [examples](./examples) - some implementation examples & demonstrations. Contributions are welcome!

---

## Usage

Create API credentials at okx

- [OKX/account/API](https://www.okx.com/account/my-api)

## REST Client

### Requests & Responses

- If your IDE doesn't have IntelliSense, check the [rest-client.ts](./src/rest-client.ts) for a list of methods, params & return types.
- Requests follow the same ordering and format as the categories in the [API docs](https://www.okx.com/docs-v5/en/#rest-api).
- Responses are parsed automatically for less nesting. Error responses are thrown in full:
  - If the response looks successful (HTTP 200 and "code" in the response body === "0"), only the `data` property is directly (without the `code`, `data` & `msg` properties).
  - If the response looks like an error (HTTP error OR the "code" property in the response does not equal "0"), the full response is thrown (including `code` and `msg` properties). See the interface for [APIResponse<T>](./src/types/rest/shared.ts).

### Example

```ts
import { RestClient } from 'okx-api';

const client = new RestClient({
  apiKey: 'apiKeyHere',
  apiSecret: 'apiSecretHere',
  apiPass: 'apiPassHere',
  // For Global users (www.okx.com), you don't need to set the market.
  // It will use global by default.
  // Not needed: market: 'GLOBAL',

  // For EEA users (my.okx.com), set market to "EEA":
  // market: 'EEA',

  // For US users (app.okx.com), set market to "US":
  // market: 'US',
});

// Submit a buy and sell market order
(async () => {
  try {
    const allBalances = await client.getBalance();
    console.log('All balances: ', allBalances);

    const buyResult = await client.submitOrder({
      instId: 'BTC-USDT',
      ordType: 'market',
      side: 'buy',
      sz: '0.1',
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    });
    console.log('buy order result: ', buyResult);

    const sellResult = await client.submitOrder({
      instId: 'BTC-USDT',
      ordType: 'market',
      side: 'sell',
      sz: '0.1',
      tdMode: 'cash',
      tgtCcy: 'base_ccy',
    });
    console.log('Sell order result: ', sellResult);
  } catch (e) {
    console.error('request failed: ', e);
  }
})();
```

## WebSockets

This connector includes a high-performance Node.js, TypeScript & JavaScript WebSocket client for the OKX public & private WebSocket, including the OKX WebSocket API for order placement. API credentials are optional unless private streams will be used (such as account order updates).

- If your IDE doesn't have IntelliSense, check the [websocket-client.ts](./src/websocket-client.ts) for a list of methods, params & return types.
- When subscribing to channels, only the "args" should be passed as an object or array when calling the websocket client subcribe() function: [API docs](https://www.okx.com/docs-v5/en/#websocket-api-subscribe).
- TypeScript recommended (but it is not required) for a richer experience:
  ![typescript-subscribe](./docs/images/subscribe-with-typescript.gif)
- The ws client will automatically open connections as needed when subscribing to a channel.
- If the connection is lost for any reason, the ws client will detect this (via the connection heartbeats). It will then:
  - Automatically teardown the dead connection.
  - Automatically respawn a fresh connection.
  - Automatically reauthenticate, if using private channels.
  - Automatically resubscribe to previously subscribed topics.
  - Resume producing events as before, without extra handling needed in your logic.
- The ws client will automatically authenticate if accounts are provided and a private channel is subscribed to.
- Up to 100 accounts are supported on the private connection, as per the [API docs](https://www.okx.com/docs-v5/en/#websocket-api-login). Authentication is automatic if accounts are provided.
- For examples in using the websocket client, check the examples in the repo:
  - Private channels (account data): [examples/ws-private.ts](./examples/ws-private.ts)
  - Public chanels (market data): [examples/ws-public.ts](./examples/ws-public.ts)
  - These examples are written in TypeScript, so can be executed with ts-node for easy testing:
    `ts-node examples/ws-private.ts`
  - Or convert them to javascript:
    - Change the `import { ... } from 'okx-api'` to `const { ... } = require('okx-api');`
    - Rename the file to `ws-private.js`
    - And execute with node: `node examples/ws-private.js`

### Sending orders via WebSockets

OKX supports some order management capabilities via a persisted WebSocket connection. This SDK supports this with two convenient approaches.

The recommended route is to use the dedicated WebsocketAPIClient class, included with this SDK:

- Dedicated functions for every available WebSocket API operation
- Fully typed requests and responses
- Asynchronous promisified wrapper around WS API commands.

It looks & feels like a REST API client, but uses WebSockets, via the WebsocketClient's sendWSAPIRequest method (which you can use directly if you prefer).

A simple example is below but for a more thorough example, check the example here: [./examples/ws-api-client.ts](./examples/ws-api-client.ts).

```typescript
import { WebsocketAPIClient } from 'okx-api';
// or if you prefer require:
// const { WebsocketAPIClient } = require("okx-api");

// For private events, all 3 of the following are required (per account):
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

// If running from CLI in unix, you can pass env vars as such:
// API_KEY_COM='lkm12n3-2ba3-1mxf-fn13-lkm12n3a' API_SECRET_COM='035B2B9637E1BDFFEE2646BFBDDB8CE4' API_PASSPHRASE_COM='ComplexPa$$!23$5^' ts-node examples/ws-private.ts

const wsClient = new WebsocketAPIClient({
  // For Global users (www.okx.com), you don't need to set the market.
  // It will use global by default.
  // Not needed: market: 'GLOBAL',

  // For EEA users (my.okx.com), set market to "EEA":
  // market: 'EEA',

  // For US users (app.okx.com), set market to "US":
  // market: 'US',

  accounts: [
    {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      apiPass: API_PASSPHRASE,
    },
  ],
});

async function start() {
  // Optional: prepare the WebSocket API connection in advance.
  // This happens automatically but you can do this early before making any API calls, to prevent delays from a cold start.
  // await wsClient.connectWSAPI();

  /**
   * OKX's WebSocket API be used like a REST API, through this SDK's WebsocketAPIClient. The WebsocketAPIClient is a utility class wrapped around WebsocketClient's sendWSAPIRequest() capabilities.
   *
   * Each request sent via the WebsocketAPIClient will automatically:
   * - route via the active WS API connection
   * - return a Promise, which automatically resolves/rejects when a matching response is received
   */

  /**
   * Place Order
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-order
   */
  try {
    const res = await wsClient.submitNewOrder({
      instId: 'BTC-USDT',
      tdMode: 'cash',
      side: 'buy',
      ordType: 'market',
      sz: '100',
    });
    /**
      const res = {
        id: '2',
        op: 'order',
        code: '1',
        msg: '',
        data: [
          {
            tag: '159881cb7207BCDE',
            ts: '1753714603721',
            ordId: '',
            clOrdId: '',
            sCode: '51008',
            sMsg: 'Order failed. Insufficient USDT balance in account.'
          }
        ],
        inTime: '1753714603720755',
        outTime: '1753714603721942',
        wsKey: 'prodPrivate',
        isWSAPIResponse: false
      }

      const res =  {
        id: '2',
        op: 'order',
        code: '1',
        msg: '',
        data: [
          {
            tag: '159881cb7207BCDE',
            ts: '1753714567149',
            ordId: '',
            clOrdId: '',
            sCode: '51010',
            sMsg: "You can't complete this request under your current account mode."
          }
        ],
        inTime: '1753714567149196',
        outTime: '1753714567149913',
        wsKey: 'prodPrivate',
        isWSAPIResponse: false
      }
     */

    console.log(new Date(), 'WS API "submitNewOrder()" result: ', res);
  } catch (e) {
    console.error(new Date(), 'Exception with WS API "submitNewOrder()": ', e);
  }

  /**
   * Submit multiple orders in a batch
   * https://www.okx.com/docs-v5/en/#order-book-trading-trade-ws-place-multiple-orders
   */
  try {
    const res = await wsClient.submitMultipleOrders([
      {
        instId: 'BTC-USDT',
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '100',
      },
      {
        instId: 'BTC-USDT',
        tdMode: 'cash',
        side: 'buy',
        ordType: 'market',
        sz: '50',
      },
    ]);
    console.log(new Date(), 'WS API "submitMultipleOrders()" result: ', res);
  } catch (e) {
    console.error(
      new Date(),
      'Exception with WS API "submitMultipleOrders()": ',
      e,
    );
  }
}

start();
```

### Receiving realtime data

The below example demonstrates connecting as a consumer, to receive WebSocket events from OKX, using the included WebsocketClient:

```javascript
import { WebsocketClient } from 'okx-api';
// or if you prefer require:
// const { WebsocketClient } = require("okx-api");

// For private events, all 3 of the following are required (per account):
const API_KEY = process.env.API_KEY_COM;
const API_SECRET = process.env.API_SECRET_COM;
const API_PASSPHRASE = process.env.API_PASSPHRASE_COM;

// If running from CLI in unix, you can pass env vars as such:
// API_KEY_COM='lkm12n3-2ba3-1mxf-fn13-lkm12n3a' API_SECRET_COM='035B2B9637E1BDFFEE2646BFBDDB8CE4' API_PASSPHRASE_COM='ComplexPa$$!23$5^' ts-node examples/ws-private.ts

// Note the single quotes, preventing special characters such as $ from being incorrectly passed

const wsClient = new WebsocketClient({
  // For Global users (www.okx.com), you don't need to set the market.
  // It will use global by default.
  // Not needed: market: 'GLOBAL',

  // For EEA users (my.okx.com), set market to "EEA":
  // market: 'EEA',

  // For US users (app.okx.com), set market to "US":
  // market: 'US',

  accounts: [
    // For private topics, include one or more accounts in an array. Otherwise only public topics will work
    {
      apiKey: API_KEY,
      apiSecret: API_SECRET,
      apiPass: API_PASSPHRASE,
    },
    // {
    //   apiKey: 'yourApiKeyHere',
    //   apiSecret: 'yourApiSecretHere',
    //   apiPass: 'yourApiPassHere',
    // },
    // {
    //   apiKey: 'anotherAccountKey',
    //   apiSecret: 'anotherAccountSecret',
    //   apiPass: 'anotherAccountPass',
    // },
  ],
});

// Raw data will arrive on the 'update' event
wsClient.on('update', (data) => {
  console.log('ws update (raw data received)', JSON.stringify(data));
});

wsClient.on('open', (data) => {
  console.log('connection opened open:', data.wsKey);
});

// Replies (e.g. authenticating or subscribing to channels) will arrive on the 'response' event
wsClient.on('response', (data) => {
  // console.log('ws response: ', JSON.stringify(data, null, 2));
  console.log('ws response: ', JSON.stringify(data));
});

wsClient.on('reconnect', ({ wsKey }) => {
  console.log('ws automatically reconnecting.... ', wsKey);
});
wsClient.on('reconnected', (data) => {
  console.log('ws has reconnected ', data?.wsKey);
});
wsClient.on('exception', (data) => {
  console.error('ws exception: ', data);
});

/**
 * Simply call subscribe to request the channels that you're interested in.
 *
 * If authentication is required, the WSClient will automatically authenticate with the available credentials.
 */

// Subscribe one event at a time:
wsClient.subscribe({
  channel: 'account',
});

// OR, combine multiple subscription events into one request using an array instead of an object:
wsClient.subscribe([
  {
    channel: 'account',
  },
  {
    channel: 'positions',
    instType: 'ANY',
  },
]);

// Public topics, for comparison. These do not require authentication / api keys:
wsClient.subscribe([
  {
    channel: 'instruments',
    instType: 'SPOT',
  },
  {
    channel: 'instruments',
    instType: 'FUTURES',
  },
  {
    channel: 'tickers',
    instId: 'LTC-BTC',
  },
]);
```

#### Public Events

See [examples/ws-public.ts](./examples/ws-public.ts) for a full example:

![typescript-events-public](./docs/images/subscribe-events-public.gif)

#### Private Events

See [examples/ws-private.ts](./examples/ws-private.ts) for a full example:

![typescript-events](./docs/images/subscribe-events.gif)

## Browser/Frontend Usage

The npm package includes ES module and CommonJS builds. You do not need to build the SDK's standalone Webpack bundle to use it in a frontend project. Choose the setup for your application below.

### Vite and React

Use the [Vite guide](https://sieblyio.github.io/docs/okx/environments/vite.html) or [React guide](https://sieblyio.github.io/docs/okx/environments/react.html) for a complete public market-data project that imports `okx-api` from npm.

Keep the supplied bundler configuration with the example: it provides EventEmitter and replaces the SDK's Node-only HTTPS agent with a helper that rejects unsupported use. Browsers manage connections, so omit `keepAlive`. These browser examples use public OKX market data. Keep API credentials in a secure server-side environment and make authenticated calls there.

Browser REST requests also depend on OKX's CORS policy. If a request is blocked, call the SDK through your application's server route instead. A development proxy does not solve CORS for a deployed application.

### Next.js and server-side requests

The [Next.js guide](https://sieblyio.github.io/docs/okx/environments/next.html) runs the SDK in a Node.js Route Handler and returns the result to the frontend. Use this pattern when requests need credentials or cannot be made directly from the browser.

### React Native and Expo

Follow the [Expo guide](https://sieblyio.github.io/docs/okx/environments/expo.html) for its Metro configuration and required HTTP, HTTPS and URL polyfills. Browser bundler configuration is not interchangeable with Metro configuration. The example uses public OKX market data; keep authenticated operations on your server.

### Standalone Webpack bundle

If you need a standalone UMD bundle rather than npm imports in your application, the SDK repository includes a [Webpack configuration](./webpack/webpack.config.cjs). From a checkout of this repository:

```sh
npm install
npm run build
npm run pack
```

The configuration writes `dist/okxapi.js` with the `okxapi` global name. This is a separate packaging option, not a required step for the framework guides above. Browser-specific configuration and API access restrictions still apply.

The older browser setup used `crypto-browserify` and `stream-browserify` to polyfill Node's `crypto` and `stream` modules. The current SDK uses Web Crypto for signing, and the supplied Webpack configuration disables Node's `http` and `https` modules; it does not configure those legacy polyfills.

## Use with LLMs & AI

This SDK includes a bundled `llms.txt` file in the root of the repository. If you're developing with LLMs, use the included `llms.txt` with your LLM - it will significantly improve the LLMs understanding of how to correctly use this SDK.

This file contains AI optimised structure of all the functions in this package, and their parameters for easier use with any learning models or artificial intelligence.

---

<!-- template_contributions -->

### Contributions & Thanks

Have my projects helped you? Share the love, there are many ways you can show your thanks:

- Star & share my projects.
- Are my projects useful? Sponsor me on Github and support my effort to maintain & improve them: https://github.com/sponsors/tiagosiebler
- Have an interesting project? Get in touch & invite me to it.
- Or buy me all the coffee:
  - ETH(ERC20): `0xA3Bda8BecaB4DCdA539Dc16F9C54a592553Be06C` <!-- metamask -->
- Sign up with my referral links:
  - OKX (receive a 20% fee discount!): https://www.okx.com/join/42013004
  - Binance (receive a 20% fee discount!): https://accounts.binance.com/register?ref=OKFFGIJJ
  - HyperLiquid (receive a 4% fee discount!): https://app.hyperliquid.xyz/join/SIEBLY
  - Gate: https://www.gate.io/signup/NODESDKS?ref_type=103

<!---
old ones:
  - BTC: `1C6GWZL1XW3jrjpPTS863XtZiXL1aTK7Jk`
  - BTC(SegWit): `bc1ql64wr9z3khp2gy7dqlmqw7cp6h0lcusz0zjtls`
  - ETH(ERC20): `0xe0bbbc805e0e83341fadc210d6202f4022e50992`
  - USDT(TRC20): `TA18VUywcNEM9ahh3TTWF3sFpt9rkLnnQa
  - gate: https://www.gate.io/signup/AVNNU1WK?ref_type=103

-->
<!-- template_contributions_end -->

## Contributions & Pull Requests

Contributions are encouraged, I will review any incoming pull requests. See the issues tab for todo items.

## Used By

The following represents some of the known public projects that use this SDK on GitHub:

[![Repository Users Preview Image](https://dependents.info/sieblyio/okx-api/image)](https://github.com/sieblyio/okx-api/network/dependents)

<!-- template_star_history -->

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sieblyio/bybit-api,sieblyio/okx-api,sieblyio/binance,sieblyio/bitget-api,sieblyio/bitmart-api,sieblyio/gateio-api,sieblyio/kucoin-api,sieblyio/coinbase-api,sieblyio/orderbooks,sieblyio/accountstate,sieblyio/awesome-crypto-examples&type=Date)](https://star-history.com/#sieblyio/bybit-api&sieblyio/okx-api&sieblyio/binance&sieblyio/bitget-api&sieblyio/bitmart-api&sieblyio/gateio-api&sieblyio/kucoin-api&sieblyio/coinbase-api&sieblyio/orderbooks&sieblyio/accountstate&sieblyio/awesome-crypto-examples&Date)

<!-- template_star_history_end -->

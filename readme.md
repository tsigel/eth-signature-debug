# ETH sig test

The aim of the project is to correctly sign an Order given below in a EIP-712 way using signTypedData both in JS and RS.

- reference JS implementation will provide target signature values and intermediate hash values
- using values from JS implementation, validate a Rust implementation using alloy library

### Test Private Key

For testing purposes only, never use in production:
`0x4f3edf983ac636a65a842ce7c78d9aa706d3b113bce9c46f30d7d21715b23b1d`

## EIP-712 type schema

```js
const CROSS_MARGIN_CFD_ORDER_TYPES_V2 = {
  CFDOrderV2: [
    { name: "senderAddress", type: "address" },
    { name: "price", type: "uint80" },
    { name: "instrumentIndex", type: "uint16" },
    { name: "matcherAddress", type: "address" },
    { name: "price2", type: "uint80" },
    { name: "buySide", type: "uint8" },
    { name: "amount", type: "uint96" },
    { name: "matcherFee", type: "uint64" },
    { name: "expiration", type: "uint64" },
    { name: "orderType", type: "uint8" },
    { name: "signerChainId", type: "uint64" },
  ],
};
```

## EIP-712 Domain variables

```js
const DOMAIN = {
  name: "Electra",
  version: 1,
  salt: "0x5792f7333c35db190e30acc144f049fd15b24f552c0010b8b3e06f9105c37c5a",
  chainId: 56,
};
```

## JSON Order

Below is the order we will sign in both RS and JS impl

```json
{
  "senderAddress": "0xe9d66F0Ef74D8fDd136EeAD7Abdc0bD701C1645d",
  "price": 4164001,
  "instrumentIndex": 22,
  "matcherAddress": "0x7ff4354a433803d5c40a66a57fc0b81e64ed93e6",
  "price2": 0,
  "amount": "3115100000000",
  "matcherFee": 51885106,
  "expiration": 1773899383302,
  "buySide": 0,
  "leverage": "100",
  "isPersonalSign": false,
  "isFromDelegate": false,
  "signerChainId": 56,
  "orderType": 1,
  "id": "0x48e1260440ef0a499fccff797bc7c948e17f9c44d94cda1fab4a5010babbf712",
  "signature": "0x57830a7d85a5ed42f93880fdcad2042ba717444a36f4f44114927a7ea932cd1e135c6e46a573865109ccd31e0ebadafbf34613a20e92a3b8d86040c7e9918e3c1b"
}
```

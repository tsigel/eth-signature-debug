import { Order } from './types';
import { Signer } from 'ethers';
import { CROSS_MARGIN_CFD_ORDER_TYPES_V2, DOMAIN } from './constants';

// {
//     "domain": {
//         "name": "Electra",
//         "version": "1",
//         "salt": "0x5792f7333c35db190e30acc144f049fd15b24f552c0010b8b3e06f9105c37c5a",
//         "chainId": 56
//     },
//     "value": {
//         "senderAddress": "0xC8FFcaA8a824BDA830996C3d3705b4BeC0614ec4",
//         "price": 4164001,
//         "instrumentIndex": 22,
//         "matcherAddress": "0x7ff4354a433803d5c40a66a57fc0b81e64ed93e6",
//         "price2": 0,
//         "buySide": 0,
//         "amount": 3115100000000,
//         "matcherFee": 51885106,
//         "expiration": 1773899383302,
//         "orderType": 1,
//         "signerChainId": 56
//     }
// }

// static encode(domain, types, value) {
//         return (0, index_js_4.concat)([
//             "0x1901",
//             TypedDataEncoder.hashDomain(domain),
//             TypedDataEncoder.from(types).hash(value)
//         ]);
//     }

// const domainFieldTypes = {
//     name: "string",
//     version: "string",
//     chainId: "uint256",
//     verifyingContract: "address",
//     salt: "bytes32"
// };

export const sign = (order: Order, wallet: Signer) => {
    debugger;
    return wallet.signTypedData(DOMAIN, CROSS_MARGIN_CFD_ORDER_TYPES_V2, order);
};
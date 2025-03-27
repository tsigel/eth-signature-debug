import { Wallet } from "ethers";
import { sign } from "./sign";
import { OrderType } from "./types";
import { DOMAIN } from "./constants";

const wallet = new Wallet(
  "0x787b20e1db097b0a27357f234892ed59e49fd9c23ab5778c8b13700a40c621e1"
);

console.log(`Private: ${wallet.privateKey}`);
console.log(`Address: ${wallet.address}`);

// DOMAIN_HASH = '0xfc3af2f88ca81b56a2f4accf86678b2159d1326fa0e1158083b8995d709ec0c9';
// VALUE_HASH = '0xa5d596fd5144826e4b9e5cc8c9b97d8a5c9a445ee7b09479d2468d0d4c0f6bca';
// CONSTANT_PREFIX_HASH = '0x1901';
// BEFORE_SIGN_HASH = '0x1901fc3af2f88ca81b56a2f4accf86678b2159d1326fa0e1158083b8995d709ec0c9a5d596fd5144826e4b9e5cc8c9b97d8a5c9a445ee7b09479d2468d0d4c0f6bca'

// /**
//  *  Returns a [[DataHexString]] by concatenating all values
//  *  within %%data%%.
//  */
// export function concat(datas: ReadonlyArray<BytesLike>): string {
//     return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
// }


sign(
  {
    instrumentIndex: 22,
    buySide: 0,
    leverage: 100,
    stopPrice: 0,
    orderType: OrderType.MARKET,
    amount: 3115100000000,
    matcherFee: 51885106,
    price: 4164001,
    senderAddress: wallet.address,
    matcherAddress: "0x7ff4354a433803d5c40a66a57fc0b81e64ed93e6",
    expiration: 1773899383302,
    isFromDelegate: false,
    isPersonalSign: false,
    price2: 0,
    signerChainId: DOMAIN.chainId,
  },
  wallet
).then(console.log);

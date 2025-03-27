export enum OrderType {
    LIMIT = 0,
    MARKET = 1,
    TAKE_PROFIT = 2,
    STOP_LOSS = 4,
    STOP_LIMIT = 8
}

export type Order = {
    senderAddress: string;
    price: number;
    instrumentIndex: number;
    matcherAddress: string;
    price2: number;
    amount: number;
    matcherFee: number;
    expiration: number;
    buySide: 0 | 1,
    stopPrice: number;
    leverage: number;
    isPersonalSign: boolean;
    isFromDelegate: boolean;
    signerChainId: number;
    orderType: OrderType;
}
export const CROSS_MARGIN_CFD_ORDER_TYPES_V2 = {
    CFDOrderV2: [
        { name: 'senderAddress', type: 'address' },
        { name: 'price', type: 'uint80' },
        { name: 'instrumentIndex', type: 'uint16' },
        { name: 'matcherAddress', type: 'address' },
        { name: 'price2', type: 'uint80' },
        { name: 'buySide', type: 'uint8' },
        { name: 'amount', type: 'uint96' },
        { name: 'matcherFee', type: 'uint64' },
        { name: 'expiration', type: 'uint64' },
        { name: 'orderType', type: 'uint8' },
        { name: 'signerChainId', type: 'uint64' }
    ]
};

export const DOMAIN = {
    'name': 'Electra',
    'version': '1',
    'salt': '0x5792f7333c35db190e30acc144f049fd15b24f552c0010b8b3e06f9105c37c5a',
    'chainId': 56
};
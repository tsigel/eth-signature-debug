import { ethers } from 'ethers';
import { Order } from './types';

export const hashCrossMarginCFDOrder = (order: Order) => ethers.solidityPackedKeccak256(
    [
        'uint8',
        'address',
        'address',
        'uint16',
        'uint96',
        'uint80',
        'uint64',
        'uint64',
        'uint8'
    ],
    [
        '0x03',
        order.senderAddress,
        order.matcherAddress,
        order.instrumentIndex,
        order.amount,
        order.price,
        order.matcherFee,
        order.expiration,
        order.buySide === 1 ? '0x01' : '0x00'
    ]
);
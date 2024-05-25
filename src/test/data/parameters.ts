import { RuneEtchingSpec } from "@magiceden-oss/runestone-lib";
import {Edict, RuneId, Terms} from "../../utils/type";
import {RunestoneTx} from "@magiceden-oss/runestone-lib/src/runestone";

const runeName = 'BLUEDOT•SUBWALLET'
const symbol = 'ϟ';
const premine = BigInt(200000);
const divisibility = 8;

const END_OFFSET = BigInt(20000);
const cap = BigInt(200);
const amount = BigInt(500);
const terms: Terms = {
    cap,
    amount,
    offset: {
        end: END_OFFSET
    }
}

export const testEtchingRune: RuneEtchingSpec = {
    runeName,
    divisibility,
    premine,
    symbol,
    terms
}

export const testMintingRune: RuneId = {
    block: BigInt(840000),
    tx: 188
}

export const testEdictRune2: Edict[] = [
    {
        id: {
            block: BigInt(840000),
            tx: 188
        },
        amount: BigInt(10000),
        output: 1
    },
    {
        id:  {
            block: BigInt(840000),
            tx: 188
        },
        amount: BigInt(20000),
        output: 0
    }
]

// https://mempool.space/tx/0477135a078a5a383f3bc00acd4737e9b5d2562f43ad2022a74a58d6891b9d14
export const testEdictRune: Edict[] = [
    {
        id: {
            block: BigInt(840000),
            tx: 142
        },
        amount: BigInt(430000),
        output: 1
    }
]

// txid: 0477135a078a5a383f3bc00acd4737e9b5d2562f43ad2022a74a58d6891b9d14
export const testTx = {
    vout: [
        {
            scriptPubKey: {
                hex: 'a9145876f179af8a9bb0b4e37643da7756cbd0537c6787'
            }
        },
        {
            scriptPubKey: {
                hex: '5120a58ec164602d37948abfafe19016e59e10f7be26a9e9eda78cd58e5fe56818e9'
            }
        },
        {
            scriptPubKey: {
                hex: '6a5d0a00c0a2338e01b09f1a01'
            }
        },
        {
            scriptPubKey: {
                hex: '5120a58ec164602d37948abfafe19016e59e10f7be26a9e9eda78cd58e5fe56818e9'
            }
        }
    ]
} as RunestoneTx
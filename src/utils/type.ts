export type RuneId = {
    block: bigint,
    tx: number
}

export type Edict = {
    id: {
        block: bigint,
        tx: number
    },
    amount: bigint,
    output: number
}

export type Terms = {
    cap?: bigint,
    amount?: bigint,
    height?: {
        start?: bigint,
        end?: bigint
    }
    offset?: {
        start?: bigint,
        end?: bigint
    }
}

type RuneEtchingSpec = {
    runeName?: string
    divisibility?: number;
    premine?: bigint;
    symbol?: string;
    terms?: Terms;
    turbo?: boolean;
};
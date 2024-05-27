import { encodeRunestone, RuneEtchingSpec } from "@magiceden-oss/runestone-lib";
import { Edict, RuneId } from "./type";

export const etching = (runeEtching: RuneEtchingSpec) => encodeRunestone({
    etching: runeEtching
});

export const minting = (runeId: RuneId) => encodeRunestone({
    mint: runeId
});

export const edict = (edicts: Edict[]) => encodeRunestone({
    edicts: edicts
});

export const bufferToHexString = (buffer: Buffer) => {
    return buffer.toString('hex')
}
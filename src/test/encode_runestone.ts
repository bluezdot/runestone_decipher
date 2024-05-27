import { bufferToHexString, edict, etching, minting } from "../utils";
import { testEdictRune, testEtchingRune2, testMintingRune, testEtchingRuneAlphaCook, testEdictsRuneAlphaCook } from "./data/parameters";
import { encodeRunestone } from "@magiceden-oss/runestone-lib";

const etchingRunestone = etching(testEtchingRune2)
const mintingRunestone = minting(testMintingRune)
const edictingRunestone = edict(testEdictRune)

console.log('etchingRunestone', etchingRunestone);
console.log('mintingRunestone', mintingRunestone);
console.log('edictingRunestone', edictingRunestone);

const runestone = encodeRunestone({
    etching: testEtchingRuneAlphaCook,
    edicts: testEdictsRuneAlphaCook
});

console.log('rune alpha cook etch', runestone);
console.log('encodedRunestone in hex', bufferToHexString(runestone.encodedRunestone));
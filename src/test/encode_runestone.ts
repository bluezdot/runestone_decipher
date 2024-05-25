import {edict, etching, minting} from "../utils";
import {testEdictRune, testEtchingRune, testMintingRune} from "./data/parameters";
import {tryDecodeRunestone} from "@magiceden-oss/runestone-lib";

const SYMBOL = 'ϟ';
const PREMINE = 200000;
const DIVISIBILITY = 8;
const END_OFFSET = 20000;
const CAP = 200;
const AMOUNT = 500

const etchingRunestone = etching(testEtchingRune)
const mintingRunestone = minting(testMintingRune)
const edictingRunestone = edict(testEdictRune)

console.log('etchingRunestone', etchingRunestone);
console.log('mintingRunestone', mintingRunestone);
console.log('edictingRunestone', edictingRunestone);

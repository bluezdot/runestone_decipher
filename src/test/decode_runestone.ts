import { tryDecodeRunestone, isRunestone, RunestoneSpec, Cenotaph } from '@magiceden-oss/runestone-lib';
import { testTx } from "./data/parameters";

// todo: add 2 step.
// step1: txid -> rawtransaction
// step2: rawtranaction -> output list
// continue with below: decode from output -> artifact (runestone || cenotaph)
const artifact = tryDecodeRunestone(testTx) as RunestoneSpec | Cenotaph;

if (isRunestone(artifact)) {
    const runestone: RunestoneSpec = artifact;
    console.log('runestone', runestone.edicts);
} else {
    const cenotaph: Cenotaph = artifact;
    console.log('cenotaph', cenotaph);
}
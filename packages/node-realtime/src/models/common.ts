import type * as ort from "onnxruntime-node";

export type ModelFetcher = () => Promise<ArrayBuffer>;

export interface SpeechProbabilities {
	notSpeech: number;
	isSpeech: number;
}

export type OrtConfigurer = (ortInstance: typeof ort) => any;
export type OrtModule = typeof ort;

export type ModelFactory = (
	ortInstance: typeof ort,
	modelPath: string,
) => Promise<Model>;

export interface Model {
	reset_state: () => void;
	process: (arr: Float32Array) => Promise<SpeechProbabilities>;
}

import { WebPlugin } from '@capacitor/core';
import { NativeAudioPlugin, ConfigureOptions, PreloadSimpleOptions, PreloadComplexOptions } from './definitions';
export declare class NativeAudioWeb extends WebPlugin implements NativeAudioPlugin {
    constructor();
    configure(options: ConfigureOptions): Promise<void>;
    preloadSimple(options: PreloadSimpleOptions): Promise<void>;
    preloadComplex(options: PreloadComplexOptions): Promise<void>;
    play(options: {
        assetId: string;
    }): Promise<void>;
    loop(options: {
        assetId: string;
    }): Promise<void>;
    stop(options: {
        assetId: string;
    }): Promise<void>;
    unload(options: {
        assetId: string;
    }): Promise<void>;
    setVolume(options: {
        assetId: string;
    }): Promise<void>;
}
declare const NativeAudio: NativeAudioWeb;
export { NativeAudio };

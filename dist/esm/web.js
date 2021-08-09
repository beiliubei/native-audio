import { WebPlugin } from '@capacitor/core';
export class NativeAudioWeb extends WebPlugin {
    constructor() {
        super({
            name: 'NativeAudio',
            platforms: ['web']
        });
    }
    configure(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    preloadSimple(options) {
        console.info("preloadSimple");
        console.log(options);
        // throw new Error("Method not implemented.");
    }
    preloadComplex(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    play(options) {
        console.info("play");
        console.log(options);
        throw new Error("Method not implemented.");
    }
    loop(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    stop(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    unload(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
    setVolume(options) {
        console.log(options);
        throw new Error("Method not implemented.");
    }
}
const NativeAudio = new NativeAudioWeb();
export { NativeAudio };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(NativeAudio);
//# sourceMappingURL=web.js.map
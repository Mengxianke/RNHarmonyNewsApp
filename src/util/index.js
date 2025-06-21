import { PixelRatio, Dimensions } from 'react-native';


// 50 * pixelRatio = vp
export function vp2px(size) {
    const pixelRatio = PixelRatio.get();
    return size / pixelRatio;
}

export function formatTime(seconds){
    return [
        parseInt(seconds / 60 % 60),
        parseInt(seconds % 60)
    ].join(":").replace(/\b(\d)\b/g, "0$1");
}
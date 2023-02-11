/* eslint-disable no-param-reassign,no-bitwise */
// noinspection JSUnusedAssignment

const hexCharacters = "a-f\\d";
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, "gi");
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, "i");

export const hexToRgba = (hex: any, options: { alpha?: number } = {}): [number, number, number, number] => {
    if (typeof hex !== "string" || nonHexChars.test(hex) || !validHexSize.test(hex)) {
        throw new TypeError("Expected a valid hex string");
    }

    hex = hex.replace(/^#/, "");
    let alphaFromHex = 1;

    if (hex.length === 8) {
        alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
        hex = hex.slice(0, 6);
    }

    if (hex.length === 4) {
        alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
        hex = hex.slice(0, 3);
    }

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    const alpha = typeof options.alpha === "number" ? options.alpha : alphaFromHex;

    return [red, green, blue, alpha];
};

export const hexToRgb = (hex: string): [number, number, number] => {
    const [r, g, b] = hexToRgba(hex);
    return [r, g, b];
};

export const rgbToHsl = (r: number, g: number, b: number): [number, number, number] => {
    let d, h, l, max, min, s;
    r /= 255;
    g /= 255;
    b /= 255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    h = 0;
    s = 0;
    l = (max + min) / 2;
    if (max === min) {
        // eslint-disable-next-line no-multi-assign
        h = s = 0;
    } else {
        d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        // eslint-disable-next-line default-case
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
        }
        h /= 6;
    }
    h *= 360;
    s *= 100;
    l *= 100;
    return [h, s, l];
};

export const hexToHsl = (hex: string): [number, number, number] => {
    const [r, g, b] = hexToRgb(hex);
    return rgbToHsl(r, g, b);
};

export const hslLighten = (hsl: [number, number, number], amount: number): [number, number, number] => {
    const [h, s, l] = hsl;
    return [h, s, l + amount];
};

export const hslString = (hsl: [number, number, number]): string => {
    const [h, s, l] = hsl;
    return `hsl(${h}, ${s}%, ${l}%)`;
};

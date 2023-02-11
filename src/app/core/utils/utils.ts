// noinspection JSUnusedGlobalSymbols

type GetRootVar = {
    (name: string): string;
    <T extends boolean>(name: string, parseInt: T): T extends true ? number : string;
};
// @ts-ignore
export const getRootVar: GetRootVar = <T extends boolean>(name: string, parseInt?: T): string | number => {
    const value = getComputedStyle(document.body).getPropertyValue(name).trim();
    return parseInt ? Number(value.replace(/\D+/, "")) : value;
};

export const scaleAmountNeededToFit = (
    el: HTMLElement,
    parent: HTMLElement,
    margin: [number, number, number, number] = [0, 0, 0, 0],
): number => {
    const parentSize = {
        width: parent.clientWidth - margin[1] - margin[3],
        height: parent.clientHeight - margin[0] - margin[2],
    };
    return Math.min(parentSize.width / el.clientWidth, parentSize.height / el.clientHeight);
};

export const fitTo = (
    element: HTMLElement,
    fitTo: HTMLElement,
    align: "left" | "right" | "center",
    margin: [number, number, number, number] = [0, 0, 0, 0],
): number => {
    const scale = scaleAmountNeededToFit(element, fitTo, margin);
    const translateX =
        align === "center"
            ? `calc(${fitTo.clientWidth / 2}px - ${(element.clientWidth * scale) / 2}px)`
            : align === "right"
                ? `calc(${fitTo.clientWidth}px - ${((element.clientWidth) * scale) + margin[1]}px)` // eslint-disable-line prettier/prettier
                : margin[3] + "px"; // eslint-disable-line prettier/prettier
    const translateY = margin[0] + "px";
    element.style.transformOrigin = "0 0";
    element.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
    return scale;
};

export const fitToParent = (
    element: HTMLElement,
    align: "left" | "right" | "center",
    margin: [number, number, number, number] = [0, 0, 0, 0],
): void => {
    if (element.parentElement) {
        fitTo(element, element.parentElement, align, margin);
    }
};

export const trim = (html: string): string => {
    return html.replace(/(&#160;)+/g, " ").trim();
};

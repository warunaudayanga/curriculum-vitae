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

export const scaleAmountNeededToFit = (el: HTMLElement, parent: HTMLElement, margin: number = 0): number => {
    const parentSize = {
        width: parent.clientWidth - margin * 2,
        height: parent.clientHeight - margin * 2,
    };
    return Math.min(parentSize.width / el.clientWidth, parentSize.height / el.clientHeight);
};

export const fitTo = (element: HTMLElement, fitTo: HTMLElement, margin: number, center?: boolean): number => {
    const scale = scaleAmountNeededToFit(element, fitTo, margin);
    const translateX = center ? `calc(50% - ${(element.clientWidth * scale) / 2}px)` : margin + "px";
    const translateY = margin + "px";
    element.style.transformOrigin = "0 0";
    element.style.transform = `translate(${translateX}, ${translateY}) scale(${scale})`;
    return scale;
};

export const fitToParent = (element: HTMLElement, margin: number): void => {
    if (element.parentElement) {
        fitTo(element, element.parentElement, margin);
    }
};

export const trim = (html: string): string => {
    return html.replace(/(&#160;)+/g, " ").trim();
};

import { css } from 'styled-components';

export function percent(px: number, from: number): number {
    return (px / from) * 100;
}
export function rem(px: number) {
    return `${px / 16}rem`;
}
export function em(px: number) {
    return `${px / 16}em`;
}

export function math(num: number, numTwo: number): number {
    return numTwo / num;
}

export const adaptiveValue = (
    property: string,
    startSizePx: number,
    minSizePx: number,
    keepSize: number = 0,
    widthFromPx: number = 1200,
    widthToPx: number = 320
) => {
    startSizePx = startSizePx === 0 ? 0.000001 : startSizePx;
    minSizePx = minSizePx === 0 ? 0.000001 : minSizePx;

    const addSize = (startSizePx - minSizePx) / 16;

    const widthFromMedia = `${widthFromPx / 16}em`;
    const widthToMedia = `${widthToPx / 16}em`;

    const slope = (startSizePx - minSizePx) / (widthFromPx - widthToPx);
    let yIntersection = -widthToPx * slope + minSizePx;
    yIntersection = yIntersection === 0 ? 0.000001 : yIntersection;

    const flyValue = `${yIntersection / 16}rem + ${slope * 100}vw`;
    let propertyValue = `clamp(${minSizePx / 16}rem, ${flyValue}, ${startSizePx / 16}rem)`;

    if (minSizePx > startSizePx) {
        propertyValue = `clamp(${startSizePx / 16}rem, ${flyValue}, ${minSizePx / 16}rem)`;
    }

    return css`
        ${property}: ${propertyValue};

        ${keepSize !== 1 &&
        keepSize !== 3 &&
        css`
            min-width: ${widthFromMedia} {
                ${property}: ${startSizePx / 16}rem;
            }
        `}

        ${keepSize !== 1 &&
        keepSize !== 2 &&
        css`
            max-width: ${widthToMedia} {
                ${property}: ${minSizePx / 16}rem;
            }
        `}

min-width: ${widthToMedia} and (max-width: ${widthFromMedia}) {
            @supports (${property}: ${propertyValue}) {
                ${property}: ${propertyValue};
            }

            @supports not (${property}: ${propertyValue}) {
                // Здесь мы используем calc, чтобы поддержать браузеры без clamp
                ${property}: calc(${minSizePx / 16}rem + ${addSize} * (100vw - ${widthToPx}px) / (${widthFromPx / 16} - ${widthToPx / 16}));
            }
        }
    `;
};

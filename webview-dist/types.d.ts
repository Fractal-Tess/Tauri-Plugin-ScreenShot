export declare type Area = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export declare type Options = {
    path?: string;
    capture?: RequireAtLeastOne<{
        transparentBackground: boolean;
        highlighted: boolean;
    }>;
};
declare type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];
export {};

import './genCode';
export interface Options {
    sourcemap?: 'extract' | 'append' | null;
    jsx?: boolean;
}
export interface Params {
    sourcemap: 'extract' | 'append' | null;
    jsx: boolean;
}
export declare function preprocess(str: string, opts: Options): string | {
    src: string;
    map: {
        version: number;
        file: string;
        sources: string[];
        sourcesContent: string[];
        names: never[];
        mappings: string;
    };
};

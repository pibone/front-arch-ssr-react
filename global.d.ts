/// <reference types="jest-extended" />

declare module '*.module.css' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string }
    export default classes
}

declare module uxcale {
    declare type ApiResult<TData extends object> = {
        data: TData
    }

    declare type PaginatedApiResult<TResource extends object> = ApiResult<
        TResource[]
    > & {
        pagination: {
            pageSize: number
            pageNumber: number
            totalPages: number
            totalElements: number
        }
    }
}

declare type EmptyObject = Record<string, never>

/**
 * Opaque
 * @desc Declares an Opaque type
 * @see https://dev.to/stereobooster/pragmatic-types-opaque-types-and-how-they-could-have-saved-mars-climate-orbiter-1551
 * @example
 *   // Expect: "string | null"
 *   NonUndefined<string | null | undefined>;
 */
declare type Opaque<K, T> = T & { __TYPE__: K }

/**
 * NonUndefined
 * @desc Exclude undefined from set `A`
 * @example
 *   // Expect: "string | null"
 *   NonUndefined<string | null | undefined>;
 */
declare type NonUndefined<A> = A extends undefined ? never : A

/**
 * FunctionKeys
 * @desc Get union type of keys that are functions in object type `T`
 * @example
 *   type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};
 *
 *   // Expect: "setName | someFn"
 *   type Keys = FunctionKeys<MixedProps>;
 */
declare type FunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? K : never
}[keyof T]

/**
 * NonFunctionKeys
 * @desc Get union type of keys that are non-functions in object type `T`
 * @example
 *   type MixedProps = {name: string; setName: (name: string) => void; someKeys?: string; someFn?: (...args: any) => any;};
 *
 *   // Expect: "name | someKey"
 *   type Keys = NonFunctionKeys<MixedProps>;
 */
declare type NonFunctionKeys<T extends object> = {
    [K in keyof T]-?: NonUndefined<T[K]> extends Function ? never : K
}[keyof T]

/**
 * RequiredKeys
 * @desc Get union type of keys that are required in object type `T`
 * @see https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };
 *
 *   // Expect: "req" | "reqUndef"
 *   type Keys = RequiredKeys<Props>;
 */
declare type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

/**
 * OptionalKeys
 * @desc Get union type of keys that are optional in object type `T`
 * @see https://stackoverflow.com/questions/52984808/is-there-a-way-to-get-all-required-properties-of-a-typescript-object
 * @example
 *   type Props = { req: number; reqUndef: number | undefined; opt?: string; optUndef?: number | undefined; };
 *
 *   // Expect: "opt" | "optUndef"
 *   type Keys = OptionalKeys<Props>;
 */
declare type OptionalKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? K : never
}[keyof T]

/**
 * PromiseType
 * @desc Obtain Promise resolve type
 * @example
 *   // Expect: string;
 *   type Response = PromiseType<Promise<string>>;
 */
declare type PromiseType<T extends Promise<any>> = T extends Promise<infer U>
    ? U
    : never

/**
 * WithOptional
 * @desc From `T` make a set of properties by key `K` become optional
 * @example
 *    type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name?: string; age?: number; visible?: boolean; }
 *    type Props = WithOptional<Props>;
 *
 *    // Expect: { name: string; age?: number; visible?: boolean; }
 *    type Props = WithOptional<Props, 'age' | 'visible'>;
 */
declare type WithOptional<T, K extends keyof T = keyof T> = Omit<T, K> &
    Partial<Pick<T, K>>

/**
 * WithRequired
 * @desc From `T` make a set of properties by key `K` become required
 * @example
 *    type Props = {
 *      name?: string;
 *      age?: number;
 *      visible?: boolean;
 *    };
 *
 *    // Expect: { name: string; age: number; visible: boolean; }
 *    type Props = WithRequired<Props>;
 *
 *    // Expect: { name?: string; age: number; visible: boolean; }
 *    type Props = WithRequired<Props, 'age' | 'visible'>;
 */
declare type WithRequired<T, K extends keyof T = keyof T> = Omit<T, K> &
    Required<Pick<T, K>>

/**
 * FirstParam
 * @desc From a function `T` get the first parameter type
 * @example
 *    type Props = {
 *      name: string;
 *      age: number;
 *      visible: boolean;
 *    };
 *
 *    // Expect: { name?: string; age?: number; visible?: boolean; }
 *    type Props = WithOptional<Props>;
 *
 *    // Expect: { name: string; age?: number; visible?: boolean; }
 *    type Props = WithOptional<Props, 'age' | 'visible'>;
 */
declare type FirstParam<T extends (...args: any) => any> = Parameters<T>[0]

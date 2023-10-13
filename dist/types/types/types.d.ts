import { Component, ComputedRef, ExtractPropTypes, Ref, UnwrapRef } from "vue";
export declare type WrapComponent<T = {}> = Component & {
    props?: T;
};
export declare type WrapComponentProps<P extends WrapComponent = WrapComponent> = P["props"] | UnwrapRef<P["props"]> | Ref<any> | ComputedRef<P["props"]> | ExtractPropTypes<P["props"]>;

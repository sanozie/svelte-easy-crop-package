import { SvelteComponentTyped } from "svelte";
import type { HTMLImgAttributes } from 'svelte/elements/index';
import type { Point, CropShape, Size } from './types';
declare const __propDef: {
    props: {
        image: string;
        crop?: Point | undefined;
        zoom?: number | undefined;
        aspect?: number | undefined;
        minZoom?: number | undefined;
        maxZoom?: number | undefined;
        cropSize?: Size | null | undefined;
        cropShape?: CropShape | undefined;
        showGrid?: boolean | undefined;
        zoomSpeed?: number | undefined;
        crossOrigin?: HTMLImgAttributes['crossorigin'];
        restrictPosition?: boolean | undefined;
    };
    events: {
        cropcomplete: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        underCropper: {};
    };
};
export type CropperProps = typeof __propDef.props;
export type CropperEvents = typeof __propDef.events;
export type CropperSlots = typeof __propDef.slots;
export default class Cropper extends SvelteComponentTyped<CropperProps, CropperEvents, CropperSlots> {
}
export {};

declare module 'svelecte' {
    import {SvelteComponentTyped} from "svelte";

    type SvelecteOptionType = {
        name: string | number;
        value: string | number;
    };

    declare const __propDef: {
        props: {
            [x: string]: any;
            items?: SelectOptionType[] | undefined;
            value?: string | number;
            placeholder?: string | undefined;
            underline?: boolean | undefined;
            size?: "sm" | "md" | "lg" | undefined;
            defaultClass?: string | undefined;
            underlineClass?: string | undefined;
        };
        events: {
            change: Event;
            contextmenu: MouseEvent;
            input: Event;
        }
        slots: {
            default: Record<string, any>;
        };
    };
    export type SvelecteProps = typeof __propDef.props;
    export type SvelecteEvents = typeof __propDef.events;
    export type SvelecteSlots = typeof __propDef.slots;
    export default class Svelecte extends SvelteComponentTyped<SvelecteProps, SvelecteEvents, SvelecteSlots> {
    }
    export {};
}

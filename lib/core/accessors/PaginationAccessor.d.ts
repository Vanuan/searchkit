import { ValueState } from "../state/State";
import { Accessor } from "./Accessor";
export declare class PaginationAccessor extends Accessor<ValueState> {
    state: ValueState;
    onStateChange(oldState: any): void;
    buildOwnQuery(query: any): any;
}

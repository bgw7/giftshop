import { Chef } from "./Chef";

export const EMPTY_COOKBOOK_EVENT = <CookbookEvent> {};

export interface CookbookEvent {
    Chef?: Chef;
}
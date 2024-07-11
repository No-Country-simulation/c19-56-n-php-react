import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export interface IPageContext {
    pageContext: string
    setPageContext: (value: string) => void
}
const pageContext: StateCreator<IPageContext, [["zustand/devtools", never]]> = (
    set
) => ({
    pageContext: "",
    setPageContext: (value: string) => set({ pageContext: value }, false, "setPageContext"),

});
export const usePageContextStore = create<IPageContext>()(
    devtools(
        persist(pageContext, {
            name: "pageContext",
        })
    )
);

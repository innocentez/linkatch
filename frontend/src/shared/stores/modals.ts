import {create} from "zustand/react";

interface ModalsStore {
    opened:   Set<string>
    open:     (key: string) => void
    close:    (key: string) => void
    isOpened: (key: string) => boolean
    hasOpened:(key: string) => boolean
}

export const useModalsStore= create<ModalsStore>() ((set, get) => ({
    opened: new Set(),

    open(key: string): void {
        set({
            opened: get().opened.add(key)
        })
    },

    close(key: string): void {
        const opened = get().opened
        opened.delete(key)
        set({opened})
    },

    isOpened(key: string): boolean {
        return get().opened.has(key)
    },

    hasOpened(): boolean {
        return get().opened.size > 0
    }
}))
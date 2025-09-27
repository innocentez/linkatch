import {create} from "zustand/react";
import {CreateCategory, GetCategories} from "../../../wailsjs/go/category/CategoryService";
import {model, payload} from "../../../wailsjs/go/models";

interface CategoryStore {
    categories: model.Category[]
    loadedAt: null | number
    isLoading: boolean

    fetchCategories: (force?: boolean) => void
    createCategory: (data: object) => void
}

export const useCategoryStore= create<CategoryStore>() ((set, get) => ({
    categories: [],
    loadedAt: null,
    isLoading: false,

    fetchCategories: async (force: boolean = false) => {
        if (get().isLoading) return;
        if (!force && get().loadedAt) return;

        set({ isLoading: true });

        try {
            const response: model.Category[] = await GetCategories();
            set({
                categories: response,
                loadedAt: Date.now(),
            });
        } finally {
            set({isLoading: false});
        }
    },

    createCategory: async (data: object) => {
        try {
            const categoryPayload = payload.CreateCategory.createFrom(data);
            const category: model.Category = await CreateCategory(categoryPayload)
            const categories: model.Category[] = get().categories;
            categories.push(category);

            set({categories})
        } catch (e) {
            console.error(e);
        }
    }
}))
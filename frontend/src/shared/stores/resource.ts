import {create} from "zustand/react";
import {dto, model, payload} from "../../../wailsjs/go/models";
import {
    GetResources as GetResourcesAction,
    LoadResourceData as LoadResourceDataAction,
    CreateResource as CreateResourceAction,
} from "../../../wailsjs/go/resource/Service";

interface ResourceStore {
    resources: model.Resource[]
    loadedAt: null | number
    isLoading: boolean

    loadResources:      (force?: boolean) => void
    createResource:    (data: object) => void
    loadResourceData:   (data: object) => Promise<dto.ResourceData>
}

export const useResourceStore= create<ResourceStore>() ((set, get) => ({
    resources: [],
    loadedAt: null,
    isLoading: false,

    loadResources: async (force: boolean = false) => {
        if (get().isLoading) return;
        if (!force && get().loadedAt) return;

        set({ isLoading: true });

        try {
            const resources: model.Resource[] = await GetResourcesAction();
            set({
                resources: resources,
                loadedAt: Date.now(),
            });
        } finally {
            set({isLoading: false});
        }
    },

    createResource: async (data: object) => {
        try {
            const resourcePayload = payload.CreateResource.createFrom(data);
            const resource: model.Resource = await CreateResourceAction(resourcePayload)
            const resources = get().resources;
            resources.push(resource);
            set({resources})
        } catch (e) {
            console.error(e);
        }
    },

    // @ts-ignore
    loadResourceData: async (data: object): Promise<dto.ResourceData> => {
        try {
            const loadDataPayload = payload.LoadResourceData.createFrom(data);
            return await LoadResourceDataAction(loadDataPayload)
        } catch (e) {
            console.error(e);
        }
    }
}))
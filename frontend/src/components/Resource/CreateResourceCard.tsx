import React from 'react';
import {useModalsStore} from "@shared/stores";
import {CTACard} from "@shared/ui/cards/CTACard";
import {CREATE_RESOURCE_MODAL_KEY} from "@components/Resource";

export const CreateResourceCard = () => {
    const modalsStore = useModalsStore();

    return (
        <CTACard
            onClick={() => modalsStore.open(CREATE_RESOURCE_MODAL_KEY)}
        />
    );
};

import React, {ReactElement} from 'react';
import {CreateCategoryModal} from "@components/Category/CreateCategoryModal";
import {CreateResourceModal} from "@components/Resource/CreateResourceModal";

export const ModalsProvider = (): ReactElement => {
    return (
        <>
            <CreateCategoryModal />
            <CreateResourceModal />
        </>
    );
};


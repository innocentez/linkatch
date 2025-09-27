import React from 'react';
import {useModalsStore} from "@shared/stores";
import {Box, Modal} from "@mui/material";
import {CreateResourceForm} from "@components/Resource";

export const CREATE_RESOURCE_MODAL_KEY = "create-resource"

export const CreateResourceModal = () => {
    const modalsStore = useModalsStore()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 3
    };

    return (
        <Modal
            open={modalsStore.isOpened(CREATE_RESOURCE_MODAL_KEY)}
            onClose={() => modalsStore.close(CREATE_RESOURCE_MODAL_KEY)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CreateResourceForm />
            </Box>
        </Modal>
    )
};
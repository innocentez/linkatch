import React from "react";
import {Box, Button, Modal} from "@mui/material";
import {useModalsStore} from "@shared/stores";
import {CreateCategoryForm} from "@components/Category";

export const CREATE_CATEGORY_MODAL_KEY = "create-category";

export const CreateCategoryModal = () => {
    const modalsStore = useModalsStore()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 3
    };

    return (
        <Modal
            open={modalsStore.isOpened(CREATE_CATEGORY_MODAL_KEY)}
            onClose={() => modalsStore.close(CREATE_CATEGORY_MODAL_KEY)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <CreateCategoryForm />
            </Box>
        </Modal>
    )
};

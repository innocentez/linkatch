import {useModalsStore} from "@shared/stores/modals";
import {Button} from "@mui/material";
import React from "react";
import {CREATE_CATEGORY_MODAL_KEY} from "@components/Category";

export const CreateCategoryButton = () => {
    const modalsStore = useModalsStore()

    return (
        <Button variant="outlined" size={"medium"} onClick={() => modalsStore.open(CREATE_CATEGORY_MODAL_KEY)}>
            Добавить категорию
        </Button>
    );
};
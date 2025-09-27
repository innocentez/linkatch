import {Box, Button, FormControl, TextField} from "@mui/material";
import React, {FormEvent} from "react";
import {useCategoryStore} from "@shared/stores";
import SaveIcon from '@mui/icons-material/Save';

export const CreateCategoryForm = () => {
    const categoryStore = useCategoryStore();

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const payload = {
            name: data.get("name")
        }

        try {
            categoryStore.createCategory(payload)
        } catch (e) {}
    }

    return (
        <>
            <Box
                component={"form"}
                onSubmit={onSubmit}
            >
                <FormControl fullWidth>
                    <TextField
                        label="Название категории"
                        id="name"
                        type="text"
                        name="name"
                        autoFocus
                        fullWidth
                        variant="outlined"
                    />
                </FormControl>

                <Button
                    sx={{
                        marginTop: 2,
                    }}
                    type="submit"
                    fullWidth
                    color="primary"
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="contained"
                    size={"large"}
                >
                    Сохранить
                </Button>
            </Box>
        </>
    );
};
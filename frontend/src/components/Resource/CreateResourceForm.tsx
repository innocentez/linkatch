import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useCategoryStore} from "@shared/stores";
import {Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import {dto} from "../../../wailsjs/go/models";
import SaveIcon from "@mui/icons-material/Save";
import {useResourceStore} from "@shared/stores";

export const CreateResourceForm = () => {
    const categoryStore = useCategoryStore();
    const resourceStore = useResourceStore();

    const [category, setCategory] = useState('');
    const [title   , setTitle   ] = useState('');
    const [preview , setPreview ] = useState('');

    // useEffect(() => {
    //     categoryStore.fetchCategories();
    // }, [categoryStore]);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value);
    };

    const handleLinkEnter= async (event: ChangeEvent<HTMLInputElement>) => {
        const payload = {
            link: event.target.value as string
        }

        try {
            const resourceData: dto.ResourceData = await resourceStore.loadResourceData(payload);
            setTitle(resourceData.title)
            setPreview(resourceData.preview)
        } catch (e) {
            console.log(e)
        }
    }

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const payload = {
            link: data.get("link"),
            category: category,
            title: title,
            preview: preview,
        }

        try {
            await resourceStore.createResource(payload)
        } catch (e) {
            console.log(e)
        }
    }


    return (
        <>
            <Box
                component={"form"}
                onSubmit={onSubmit}
            >
                <FormControl fullWidth sx={{marginTop: 2}}>
                    <InputLabel id="categorySelect">Категория</InputLabel>
                    <Select
                        id="category"
                        value={category}
                        label="Категория"
                        onChange={handleChange}
                    >
                        { categoryStore.categories && categoryStore.categories.map(category => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <FormControl fullWidth sx={{marginTop: 2}}>
                    <TextField
                        label="Ссылка"
                        onChange={handleLinkEnter}
                        id="link"
                        type="text"
                        name="link"
                        fullWidth
                        variant="outlined"
                    />
                </FormControl>

                <FormControl fullWidth sx={{marginTop: 2}}>
                    <TextField
                        label="Заголовок"
                        id="title"
                        value={title}
                        type="text"
                        name="title"
                        fullWidth
                        variant="outlined"
                    />
                </FormControl>

                <FormControl fullWidth sx={{marginTop: 2}}>
                    { preview && (
                        <img
                            srcSet={preview}
                            src={preview}
                            alt="qwerty"
                            loading="lazy"
                        />
                    )}
                </FormControl>

                <Button
                    sx={{marginTop: 2}}
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
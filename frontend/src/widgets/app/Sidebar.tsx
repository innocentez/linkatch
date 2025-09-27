import * as React from 'react';
import {
    Button,
    Divider,
    Drawer,
    List, ListItem, ListItemText,
} from "@mui/material";
import {useEffect} from "react";
import {NavLink} from "react-router";
import {useCategoryStore} from "@shared/stores";
import {model} from "../../../wailsjs/go/models";
import {CreateCategoryButton} from "@components/Category";

const drawerWidth = 250;

export const Sidebar = () => {
    const categoryStore = useCategoryStore();

    useEffect(() => {
        categoryStore.fetchCategories();
    }, [categoryStore]);

    const drawer = (
        <>
            <div>
                <List>
                    {categoryStore.categories && categoryStore.categories.map((category: model.Category, index) => (
                        <ListItem key={category.id} disablePadding>
                            <Button
                                sx={{ justifyContent: "flex-start", pl: 4 }}
                                fullWidth
                            >
                                <NavLink to={`/resources/${category.id}`}>
                                    <ListItemText primary={category.name} />
                                </NavLink>
                            </Button>
                        </ListItem>
                    ))}
                </List>
            </div>
            <Divider />
            <div style={{ marginTop: '10px' }}>
                <CreateCategoryButton />
            </div>
        </>
    );

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
            open
        >
            {drawer}
        </Drawer>
    );
};
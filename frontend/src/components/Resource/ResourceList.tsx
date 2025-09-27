import React, {useEffect} from 'react';
import {Grid} from "@mui/material";
import {CreateResourceCard} from "@components/Resource/CreateResourceCard";
import {useResourceStore} from "@shared/stores";
import ResourceCard from "@components/Resource/ResourceCard";

export const ResourceList = () => {
    const resourceStore = useResourceStore();

    useEffect(() => {
        resourceStore.loadResources();
    }, [resourceStore]);

    return (
        <Grid container spacing={2}>
            {
                resourceStore.resources && resourceStore.resources.map(resource => (
                    <Grid size={3} key={resource.id}>
                        <ResourceCard
                            resource={resource}
                        />
                    </Grid>
                ))
            }
            <Grid size={3}>
                <CreateResourceCard />
            </Grid>
        </Grid>
    );
};

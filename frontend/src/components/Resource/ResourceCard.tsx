import React, {FC, ReactElement} from 'react';
import {model} from "../../../wailsjs/go/models";
import {BrowserOpenURL} from "../../../wailsjs/runtime";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

type ResourceCardProps = {
    resource: model.Resource;
}

const ResourceCard: FC<ResourceCardProps> = ({ resource }): ReactElement => {
    return (
        <a>
            <Card>
                <CardActionArea onClick={() => BrowserOpenURL(resource.link)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={resource.preview}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="caption" component="div">
                            {resource.title}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </a>
    );
};

export default ResourceCard;
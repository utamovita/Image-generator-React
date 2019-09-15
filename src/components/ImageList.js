import React from 'react'
import { Box } from '@material-ui/core';
import Image from './Image';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <Image image={image} key={image.id} />
        )

    })
    return (<Box>{images}</Box>)
}

export default ImageList
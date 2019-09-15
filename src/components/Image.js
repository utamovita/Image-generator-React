import React from 'react'
import { Button } from '@material-ui/core';
const Image = (props) => {
    return (
        <div href={props.image.urls.full} target="_blank" rel="noopener noreferrer" className="img-box" >
            <div className="bg" style={{ backgroundImage: `url(${props.image.urls.regular})` }} />
            <div className="hover-info">
                <span className="resolution">
                    {props.image.width} x {props.image.height}
                </span>
                <Button href={`${props.image.links.download}?force=true`} variant="contained" target="_blank" rel="norel" color="secondary">Download</Button>
            </div>
        </div>
    )
}
export default Image;
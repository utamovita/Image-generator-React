import React from 'react'
import { Button } from '@material-ui/core';

class Image extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovered: false
        }
    }
    mouseEnter = () => {
        this.setState({
            isHovered: true
        })
    }
    mouseLeave = () => {
        this.setState({
            isHovered: false
        })
    }

    render() {
        return (
            <div className={'img-box' + (this.state.isHovered ? ' hovered' : '')} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <a className="zoom-in" href={this.props.image.urls.full} target="_blank" rel="noopener noreferrer">
                    <div style={{ backgroundImage: `url(${this.props.image.urls.regular})` }} title="Click to see full size" />
                </a>
                <span className="resolution">
                    {this.props.image.width}x{this.props.image.height}
                </span>
                <Button className="download" href={`${this.props.image.links.download}?force=true`} variant="contained" target="_blank" rel="norel" color="primary">Download</Button>
            </div>
        )
    }
}
export default Image;
import React, {Component} from 'react';
import Image from 'react-bootstrap/Image';

class FlyImage extends Component {
    render() {
        let {src, fluid, rounded, roundedCircle, thumbnail} = this.props;

        return (
            <div className='fly-image'>
                <Image
                    src={src}
                    fluid={fluid}
                    rounded={rounded}
                    roundedCircle={roundedCircle}
                    thumbnail={thumbnail}
                    onClick={this.props.onClick}
                    >
                    {this.props.children}
                </Image>
            </div>
        );
    }    
}

export default FlyImage;
import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <Link to={`/directory/${campsite.id}`}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className = "col-md-5 m-1">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });
    
    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;
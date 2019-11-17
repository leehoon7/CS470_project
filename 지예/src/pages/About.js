import React from 'react';
import queryString from 'query-string';
import WebcamCapture from 'components/WebcamCapture';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: blahblah'}
            <WebcamCapture />
        </div>
    );
};

export default About;
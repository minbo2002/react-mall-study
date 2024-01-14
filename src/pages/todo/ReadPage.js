import React from 'react';
import { useParams } from 'react-router-dom';

function ReadPage(props) {

    const obj = useParams();
    console.log(obj);

    return (
        <div className={"text-3xl"}>
            Todo Read page
        </div>
    );
}

export default ReadPage;
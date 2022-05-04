import React, {useState} from 'react';

const Man = ({el}) => {

    return (
        <div className=" w-72    ">

            <h1>{el.name}</h1>
            <div className="px-5    pb-5 dark:bg-white-500">
            </div>
        </div>
    );
};

export default Man;
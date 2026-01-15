import React from "react";

const ipbox = (data) => {
    return (
        <div>
            <p>{data.name}</p>
            <input type={data.type} />
        </div>
    )
}

export default ipbox
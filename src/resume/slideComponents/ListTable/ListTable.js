import React, { useState, useEffect } from 'react';
import "./ListTable.css";

export default props => {
    const [activeList, setActiveList] = useState(props.lists[0]);

    useEffect(() => {
        setActiveList(props.lists[0]);
    }, [props.lists])

    return <table className="combinedLists">
        <thead>
            <tr>
                {props.lists.map((list, index) => <th key={index} className={activeList === list ? "topic selected" : "topic"} onClick={() => setActiveList(props.lists[index])}>{list.topic}</th>)}
            </tr>
        </thead>

        <tbody>
            <tr>
                <td colSpan={props.lists.length}>
                    <h2>{`${activeList.title} | ${activeList.companyName}`}</h2>
                    <h3>{`${activeList.yearStart} - ${activeList.yearEnd}`}</h3>
                    <p>{activeList.subText}</p>
                </td>
            </tr>
        </tbody>


    </table>
}
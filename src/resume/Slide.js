import React from 'react';
import ListTable from './slideComponents/ListTable/ListTable';
import GeneralInfo from './slideComponents/GeneralInfo/GeneralInfo';

export default props => {
    return <article className={props.className} >
        <h1>{props.title}</h1>
        
        <div className="content">
            {props.listTable ? <ListTable lists={props.listTable}/> : <GeneralInfo img={props.img} text={props.text}/>}
        </div>
    </article>
}
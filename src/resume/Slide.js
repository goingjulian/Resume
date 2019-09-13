import React from 'react';
import ListTable from './slideComponents/ListTable/ListTable';
import GeneralInfo from './slideComponents/GeneralInfo/GeneralInfo';
import ProjectsOverview from './slideComponents/ProjectsOverview/ProjectsOverview';
import ContactPage from './slideComponents/ContactPage/ContactPage';

export default props => {

    let content;
    switch (props.contentType) {
        case "projectsOverview":
            content = <ProjectsOverview projects={props.projectsOverview} />;
            break;
        case "listTable":
            content = <ListTable lists={props.listTable} />;
            break;
        case "contactPage":
            content = <ContactPage text={props.text} socialMedia={props.socialMedia}/>
            break;
        default:
            content = <GeneralInfo img={props.img} text={props.text}/>;
            break;
    }

    return <article className={props.className} >
        <h1>{props.title}</h1>

        <div className="content">
            {content}
        </div>
    </article>
}
import React from 'react';
import SectionBar from './SectionBar'
import '../Styles/Info.css';

export default function Info (props) {
    return (
        <div className='info'>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
            <SectionBar />
        </div>
    )
}

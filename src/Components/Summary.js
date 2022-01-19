import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Summary.css'

export default function Summary (props) {
    return (
        <div className='summary'>
            <Link className='link' to={`/${props.name}`}>
                <div className='comDiv'>
                    {props.second ? <h3 className='comLargeText'>{props.name}</h3> : ''}
                </div>
                <div className={props.second ? 'rightSumBox' : 'leftSumBox'}>
                    <h6>{props.sum1}</h6>
                    <h6>{props.sum2}</h6>
                    <h6>{props.sum3}</h6>
                    <h6>{props.sum4}</h6>
                    <h6>{props.sum5}</h6>
                    <h6>{props.sum6}</h6>
                </div>
                {props.first ? <h3 className='resLargeText'>{props.name}</h3> : ''}
            </Link>
        </div>
    )
}

import React from 'react';
import Nav from './Nav';
import Summary from './Summary';
import '../Styles/HomePage.css'

export default function Homepage () {
    return (
        <div className='root'>
            <Nav />
            <div className='summarySection'>
                <Summary
                    first
                    sum1='HOME THEATRES'
                    sum2='NETWORKING'
                    sum3='SECURITY'
                    sum4='CAMERAS'
                    sum5='DISTRIBUTED AUDIO'
                    sum6='MESH NETWORKS'
                    name='residental'
                />
                <div className='breakBar' />
                <Summary
                    second
                    sum1='BOUTIQUE AUDIO'
                    sum2='POINT OF SALE'
                    sum3='WIFI SYSTEMS'
                    sum4='SECURITY CAMERAS'
                    sum5='WEBSITE DEVELOPMENT'
                    sum6='FULL SYSTEM INTEGRATION'
                    name='commercial'
                />
            </div>
            <div className='sectionBar' />
        </div>
    )
}

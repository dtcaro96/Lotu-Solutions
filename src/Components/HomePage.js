import React from 'react';
import Nav from './Nav';
import Summary from './Summary';
import SectionBar from './SectionBar';
import Contact from './Contact';
import Info from './Info';
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
            <SectionBar />
            <Contact />
            <SectionBar />
            <Info
                title='Why Lotu?'
                info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <Info
                title='Testimonials'
                info='“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
                -OBAMA'
            />
            <Info
                title='Servicing NY and LA'
                info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <Info
                title='Join Us'
                info='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            />
            <img className='bottomImg' src='pics/Rectangle 11.png' />
        </div>
    )
}

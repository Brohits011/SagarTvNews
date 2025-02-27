import React from 'react';
import './section1.css';
import ElectionCard from './ElectionCard';
import ElectionCard2 from './ElectionCard2';
import DistrictWiseNewsHeader from './DistrictWiseNewsHeader';
import DistrictWiseNewsCard from './DistrictWiseNewsCard';
import LocationBasedSection from './LocationBasedSection';

const Section1 = () => {
  return (
    <div className='section1'>
        <div className='section1-left'>
            <div className='section1-left-top'>
                <div className='section1-left-top-top'>
                    <ElectionCard/>
                </div>
                <div className='section1-left-top-bottom'>
                    <ElectionCard2/>
                </div>
            </div>
            <div className='section1-left-bottom'>
                <LocationBasedSection/>

            </div>
        </div>
        <div className='section1-right'></div>
    </div>
  )
}

export default Section1
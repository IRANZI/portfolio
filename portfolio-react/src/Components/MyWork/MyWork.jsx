import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.png'
import Mywork_data from '../../assets/Mywork_data'
import arrow_icon from '../../assets/arrow.png'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
<div className="mywork-title">
    <h1>My latest work</h1>
    <img src={theme_pattern} alt='heu'/>
</div>
<div className="mywork-container">
{Mywork_data.map((work,index)=>{
    return <img key={index} src={work.w_img} alt=''/>
})}
</div>
<div className='mywork-showmore'>
    <p>Show More</p>
    <img src={arrow_icon} alt=''/>
</div>
    </div>
  )
}

export default MyWork
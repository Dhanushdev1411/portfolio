import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './experience.css'
import {MdSchool} from 'react-icons/md'
import {BiBookReader} from 'react-icons/bi'
import {GiSpellBook} from 'react-icons/gi'
const Experience = () => {
  return (
    <section id="experience">
      <h2 className='edu-h2'>Educational Qualification</h2>
     <VerticalTimeline>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#E5E4E2', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #E5E4E2' }}
      content="Undergraduation"
      iconStyle={{ background: '#E5E4E2', color: '#fff' }}
      icon={<MdSchool className='edu-icon'/>}
      >
      <h3 className="vertical-timeline-element-title">Undergraduation</h3>
      <h4 className="vertical-timeline-element-subtitle">Bannari Amman Institute of Technology, Sathyamangalam</h4>
      <h5>B.Tech(Information Technology)</h5>
      <h5>2020-2024</h5>
      <h5>CGPA: 9.17(Upto 5th semester)</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#E5E4E2', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #E5E4E2' }}
      content="Undergraduation"
      iconStyle={{ background: '#E5E4E2', color: '#fff' }}
      icon={<BiBookReader className='edu-icon'/>}
      >
      <h3 className="vertical-timeline-element-title">Higher Secondary Schooling</h3>
      <h4 className="vertical-timeline-element-subtitle">Veveaham Higher Secondary School, Dharapuram</h4>
      <h5>2018-2020</h5>
      <h5>Secured 88%</h5>
      </VerticalTimelineElement>
      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: '#E5E4E2', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #E5E4E2' }}
      content="Undergraduation"
      iconStyle={{ background: '#E5E4E2', color: '#fff' }}
      icon={<GiSpellBook className='edu-icon'/>}
      >
      <h3 className="vertical-timeline-element-title">Secondary Schooling</h3>
      <h4 className="vertical-timeline-element-subtitle">Achyuta Academy, Dindigul</h4>
      <h5>2016-2018</h5>
      <h5>Secured 96.6%</h5>
      </VerticalTimelineElement>
     </VerticalTimeline>
    </section>
  )
}

export default Experience
import { MoreOutlined } from '@ant-design/icons';
import React from 'react'
import './Training.css';
const Training = ({warmup,stretch,name,time,back,border}) => {
    return (
        <div className="trainingBox" style={{background:back,boxShadow:`0px 10px 0px 0px ${border}`}}>
            <div className="trainItems">
                {name}
                <h6>
                    Sports Club
                </h6>
                <div className="time">
                    {time}
                </div>
            </div>
            <div className="trainItems">
                {warmup}
                <h5>
                    min<br/>
                    Warm-up
                </h5>
            </div>
            <div className="trainItems">
            {stretch}
                <h5>
                    min<br/>
                    Warm-up
                </h5>
            </div>
            <MoreOutlined className="more"/>
        </div>
    )
}

export default Training

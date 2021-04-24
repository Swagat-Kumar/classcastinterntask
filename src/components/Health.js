import { AppleOutlined, ClockCircleOutlined, HeartOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
import React from 'react'
import './Health.css';
const Health = () => {
    const [today, setDate] = React.useState(new Date());
    const time=today.getHours()+':'+today.getMinutes();
    React.useEffect(()=>{
        const timer=setInterval(()=>{
            setDate(new Date())
        },60*1000);
        return () => {
            clearInterval(timer);
        }
    },[]);    
    return (
        <div style={{marginTop:'3em'}}>
            <h3>Health</h3>
            <div className="progressContainer">
                <div className="progress">
                    <h2>
                        {time}  
                    </h2>
                    <div className="icon">
                        <ClockCircleOutlined style={{background: '#1890FF'}} className='iconImage'/>
                        Hours
                    </div>
                    <Progress percent={today.getHours()/24*100} showInfo={false} style={{width:'90%'}}/>

                </div>
                <div className="progress" style={{borderRight:'1px solid #f2f2f2',borderLeft:'1px solid #f2f2f2',paddingLeft:'15px'}}>
                    <h2>
                        120  
                    </h2>
                    <div className="icon">
                        <HeartOutlined style={{background: '#FF4D4F'}} className='iconImage'/>
                        BPM
                    </div>
                    <Progress percent={today.getHours()/24*100} showInfo={false} status="exception" style={{width:'90%'}}/>

                </div>
                <div className="progress" style={{paddingLeft:'15px'}}>
                    <h2>
                        1.84  
                    </h2>
                    <div className="icon">
                        <AppleOutlined  style={{background: '#52C41A'}} className='iconImage'/>
                        KCal
                    </div>
                    <Progress percent={today.getHours()/24*85} status="success" showInfo={false} style={{width:'90%'}}/>

                </div>
            </div>
        </div>
    )
}

export default Health

import { MessageOutlined, UserAddOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'

const Trainers = ({trainers}) => {
    return (
        <div>
            {trainers.map((data)=>(
                 <Header style={{background:'white',marginTop:'22px',display:'flex',padding:'0'}}>
                 <div className="profile">
                     <Avatar size={60} icon={<UserAddOutlined />} style={{marginTop:'15px',background:data.color}} />
                     <div className="name">
                         <h4 className="profileName">{data.name}</h4>
                         <p className='userType'>{data.type}</p>
                     </div>                    
                 </div>
                 <Button className="navButtons scale" style={{border:'0'}}><MessageOutlined /></Button>
             </Header>
            ))}
        </div>
    )
}

export default Trainers

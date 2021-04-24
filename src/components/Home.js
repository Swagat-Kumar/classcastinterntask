import React from 'react'
import { Layout, Menu,Avatar,Button } from 'antd';
import {

    LineChartOutlined,
    PieChartOutlined,
    SettingOutlined,
    BookOutlined,
    CalendarOutlined,
    StockOutlined,
    HeartOutlined,
    LogoutOutlined,
    UserOutlined,
    BellOutlined,
    SwapOutlined,
    EllipsisOutlined,
  } from '@ant-design/icons';

import Cooked from './cooked.png';
import './Home.css';
import Health from './Health';
import Training from './Training';
import Trainers from './Trainers';
const { Header, Content, Sider } = Layout;

const Home = () => {
    return (
        <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        borderRadius:'1em',
      }}
      width='250'
    >
      <Menu style={{height:'50%',fontSize:'16px'}} mode="inline" theme='light' >
        <Menu.Item key="1" icon={<LineChartOutlined />}>
            Activity
        </Menu.Item>
        <Menu.Item key="2" icon={<PieChartOutlined />}>
            Analaysis
        </Menu.Item>
        <Menu.Item key="3" icon={<BookOutlined />}>
            Training Plan
        </Menu.Item>
        <Menu.Item key="4" icon={<SettingOutlined />}>
            Settings
        </Menu.Item>
      </Menu>
      <Menu style={{height:'40%',fontSize:'16px'}} mode="inline" theme='light'>
        <Menu.Item key="1" icon={<CalendarOutlined />}>
            Calendar
        </Menu.Item>
        <Menu.Item key="2" icon={<StockOutlined />}>
            Progress
        </Menu.Item>
        <Menu.Item key="3" icon={<HeartOutlined />}>
            Favorites
        </Menu.Item>
      </Menu>
      <Menu style={{height:'10%',fontSize:'16px'}} mode="inline" theme='light'>
        <Menu.Item key="1" icon={<LogoutOutlined />}>
            Log Out
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{minHeight:'100vh',background:'#fdfdfd'}}>
        <Content></Content>
        <Sider width='412' style={{background:'white',borderLeft:'1px solid #f1f1f1',fontFamily:'Averia Sans Libre',borderRadius:'2em'}}>
            <Header style={{background:'white',marginTop:'22px',display:'flex'}}>
                <div className="profile">
                    <Avatar size={60} icon={<UserOutlined />} style={{marginTop:'10px'}} />
                    <div className="name">
                        <h3 className="profileName">Swagat Kumar</h3>
                        <p className='userType'>Free Account</p>
                    </div>                    
                </div>
                <Button className="navButtons"><BellOutlined /></Button>
                <Button className="navButtons"><SwapOutlined /></Button>
            </Header>
            <Content>
            <div className="content"><Health/></div>
            <div className="signUpMessage">
              <img src={Cooked} alt="cooked chicken" style={{width:'30%'}} />
              <div className="signUp">
                <p>Sign up for a personal trainer to improve your results</p>
                <Button style={{backgroundColor:'#ffbc40',borderRadius:'0.8em',color:'white',fontSize:'1.05em'}}>Sign Up</Button>
              </div>
            </div>
            <div className="training content">
              <h3>Today trainings</h3>
              <div style={{display:'block'}}>
                <Training warmup="40" stretch="20" name="Box" time="10:00" back="#3b3bff" border="lightblue"/>
                <Training warmup="20" stretch="20" name="Crossfit" time="12:00" back="#ff3333" border="pink"/>
              </div>              
            </div>
            <div className="content">
              <EllipsisOutlined className="scale" style={{margin:'auto',width:'100%',marginTop:'1.5em'}}/>
            </div>
            <div className="trainer content">
              <h3>Your trainers</h3>
              <div style={{display:'block'}}>
                <Trainers trainers={[{name:'Swadhin Kumar',type:'MMA Coach',color:"yellow"},{name:'Purusottam Pradhan',type:'Boxing Coach',color:"pink"}]}/>
              </div>
            </div>
            </Content>
            
        </Sider>
    </Layout>        
  </Layout>
    )
}

export default Home

import React,{Component} from 'react';
import { Tabs,Carousel,Table, Divider, Tag} from 'antd';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import CourseSetting from "../CourseSetting";
import TeacherItem from '../TeacherItem';
import nav2 from "../../img/nav2.png";
import nav3 from "../../img/nav3.png";
import './MainContent.less';

const TabPane = Tabs.TabPane;
const { Column, ColumnGroup } = Table;
export default  class MainContent extends Component{
    constructor(props){
        super(props);
        this.slider=React.createRef();
        this.favio=React.createRef();
        this.nextQuest=this.nextQuest.bind(this);
        this.preQuest=this.preQuest.bind(this);
        this.state={
            key:1,

        }

    }
    componentDidMount() {
        console.log(this.props);
        //添加背景图
        if(this.props.location.pathname=='/'){
            document.getElementsByClassName('ant-tabs-nav-wrap')[1].style.backgroundImage=`url(${nav2})`;
            document.getElementsByClassName('ant-tabs-nav-wrap')[2].style.backgroundImage=`url(${nav3})`;
        }






    }
    nextQuest(e){
        console.log(e.currentTarget.getAttribute('data-key'));
        // console.log();
        console.log(this.slider);
        this.slider.current.slick.slickNext();
    }
    preQuest(){
        this.slider.current.slick.slickPrev();
    }
    onChange(a, b, c) {
        console.log(a, b, c);
    }

    callback(key) {
        console.log(key);
    }

    render() {
        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
        }];
        return (
            <div className='main-l'>
                <div className='userinfo'>
                    <div className='user user-l'>
                        <div className='user-item'>
                            <img src={require('../../img/user.jpeg')} alt=""/>
                            <div>修改个人信息</div>
                        </div>
                        <div className='user-item'>
                            <div className='num'>21</div>
                            <div>我的排名</div>
                        </div>
                        <div className='user-item'>
                            <div className='num'>21</div>
                            <div>剩余课时</div>
                        </div>
                        <div className='user-item'>
                            <div className='num'>21</div>
                            <div>完成课时</div>
                        </div>
                    </div>
                    <div className='user-c user' style={{marginRight:'0'}}>
                        <div className='user-item card'>
                            <div className='num'>21</div>
                            <div>次卡</div>
                        </div>
                        <div className='user-item'>
                            <div className='num'>21</div>
                            <div>月卡</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='title'>课程管理</div>
                    <Tabs animated={false}   defaultActiveKey="1" className='tabsStyle' onChange={this.callback}>
                        <TabPane tab="已选教材" key="1">
                            <div className='sel-textbook'>
                                <div className='textbook-box'>
                                    <div className='textbook-content'>
                                        <div className='textbook-content-l'>
                                            <img src={require('../../img/calender.png')} alt=""/>
                                            <div className='textbook-detail'>
                                                <div className='textbook-detail-title'>教材名称</div>
                                                <div className='textbook-summary'>
                                                    教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介
                                                </div>
                                                <div className='textbook-summary'>
                                                    教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介
                                                </div>
                                            </div>
                                        </div>
                                        <div className='textbook-content-r'>
                                            <button className='course-detail-btn'>课程详情</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="课前预习" key="2">
                            2
                        </TabPane>
                        <TabPane tab="上课纪录" key="6">
                            <Table dataSource={data}>
                                <Column
                                    title="Name"
                                    dataIndex="name"
                                    key="firstName"
                                />
                                <Column
                                    title="Age"
                                    dataIndex="name"
                                    key="lastName"
                                />
                                <Column
                                    title="Address"
                                    dataIndex="address"
                                    key="age"
                                />

                                <Column
                                    title="Action"
                                    key="action"
                                    render={(text, record) => (
                                        <span>

                                                  <a style={{color:'#2cd3a4'}} href="javascript:;">Delete</a>
                                                </span>
                                    )}
                                />
                            </Table>
                        </TabPane>
                    </Tabs>
                </div>
                <div className=''>
                    <div className='title'>外教管理</div>
                    <Tabs animated={false}   defaultActiveKey="1" className='tabsStyle' onChange={this.callback}>
                        <TabPane tab="已预约外教" key="1">
                            <div className='sel-textbook'>
                                <div className='textbook-box'>
                                    <div className='textbook-content'>
                                        <div className='textbook-content-l'>
                                            <img src={require('../../img/calender.png')} alt=""/>
                                            <div className='textbook-detail'>
                                                <div className='textbook-detail-title'>XINGMING <span className='or-start'>未开始</span></div>
                                                <div className='reserver-time'>预约时间：2019-12.12 9:00</div>
                                                <div className='textbook-summary'>
                                                    教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介教材简介
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </TabPane>
                        <TabPane tab="已收藏外教" key="2">
                            <div className='teacher-container'>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                            </div>

                        </TabPane>
                        <TabPane tab="我的过往外教" key="3">
                            <div className='teacher-container'>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                                <TeacherItem></TeacherItem>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>

                <div className=''>
                    <div className='title'>我的助手</div>
                    <Tabs animated={false}   defaultActiveKey="1" className='tabsStyle' onChange={this.callback}>
                        <TabPane tab="单词本" key="1">
                            <div className='write-work wordbook'>
                                <div className='write-top'>
                                    <div className='text-center'>词汇量</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>七天新增</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>未学会</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>已学会</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <Link to='/workbook'><div className='goworkbookbtn'>
                                        进入单词本
                                    </div></Link>
                                </div>
                            </div>
                        </TabPane>

                        <TabPane tab="错题本" key="2">
                            <div className='write-work error-works'>
                                <div className='write-top'>
                                    <div className='text-center'>七天新增</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>未学会</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>已学会</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='goworkbookbtn'>
                                        进入错题本
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="写作本" key="3">
                            <div className='write-work'>
                                <div className='write-top'>
                                    <div className='text-center'>文章</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='text-center'>7天新增</div>
                                    <div className='num'>3333</div>
                                </div>
                                <div className='write-top'>
                                    <div className='goworkbookbtn'>
                                        进入作业本
                                    </div>
                                </div>
                            </div>
                        </TabPane>


                    </Tabs>
                </div>

                <div className=''>
                    <div className='title'>学习档案</div>
                    <div className='myhelp'>
                        <div className='myhelp-t'>
                            <div>入学时间：2018-12-13</div>
                            <div className='startgrade'>初始等级：3级</div>
                        </div>
                        <div className='myhelp-b'>
                            <img className='pic-l' src={require('../../img/level.png')} alt=""/>
                            <img className='pic-r' src={require('../../img/calender.png')} alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
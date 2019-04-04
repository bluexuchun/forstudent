import React,{Component} from 'react';
import userpic from  '../../img/user.jpeg';
import  './index.less';
import { Calendar, Badge,Rate ,Input} from 'antd';
const { TextArea } = Input;

function  getListData(value) {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
            ]; break;
        case 10:
            listData = [
                { type: 'warning', content: 'This is warning event.' },
                { type: 'success', content: 'This is usual event.' },
                { type: 'error', content: 'This is error event.' },
            ]; break;
        case 15:
            listData = [
                { type: 'warning', content: 'This is warning event' },
                { type: 'success', content: 'This is very long usual event。。....' },
                { type: 'error', content: 'This is error event 1.' },
                { type: 'error', content: 'This is error event 2.' },
                { type: 'error', content: 'This is error event 3.' },
                { type: 'error', content: 'This is error event 4.' },
            ]; break;
        default:
    }
    return listData || [];
}

function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
        <div className="notes-month">
            <section>{num}</section>
            <span>Backlog number</span>
        </div>
    ) : null;
}
function getMonthData(value) {
    if (value.month() === 8) {
        return 1394;
    }
}
function dateCellRender(value) {
    const listData = getListData(value);
    return (
        <ul className="events">
            {
                listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))
            }
        </ul>
    );
}

export  default class SelectTeachingMaterial extends Component{
    constructor(props){
        super(props);
        this.audioPlay=this.audioPlay.bind(this);
        this.pousePlay=this.pousePlay.bind(this);
        this.audio=React.createRef();
    }
    audioPlay(){
        console.log(this.audio)
        this.audio.current.play();
    }
    pousePlay(){
        console.log(this.audio)
        this.audio.current.pause();
    }


    render() {
        return (
            <div className='main-l'>
                <div className='paging-title'>首页>外教管理>老师介绍</div>
                <div style={styles.teacherdetail}>

                    <div style={styles.teacherUserinfo}>
                        <div style={styles.teacherAvt}>
                            <div style={styles.teachTitle}>老师介绍</div>
                            <img style={styles.atv} src={userpic} alt=""/>
                            <div style={styles.username}>XINGMING</div>
                        </div>
                        <div style={styles.teacherR}>
                            <div  style={styles.teachergood1}>
                                <div style={styles.teachergood}>
                                    <div className="user-item">
                                        <div className="num">21<sub style={styles.sub}>%</sub></div>
                                        <div>好评率</div>
                                    </div>
                                    <div className="user-item">
                                        <div className="num">21<sub style={styles.sub}>节</sub></div>
                                        <div>教学时间</div>
                                    </div>
                                    <div className="user-item">
                                        <div className="num" >21<sub style={styles.sub}>年</sub></div>
                                        <div>教学经验</div>
                                    </div>
                                </div>
                                <div style={{flex:2}}>

                                </div>
                            </div>
                            <div className='teacher-line'></div>
                            <div className='teacherR-b'>
                                <div className='userdetail-l'>自我介绍</div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        <img src={require('../../img/play.png')} onClick={this.audioPlay} alt=""/>
                                        <img src={require('../../img/pouse.png')} onClick={this.pousePlay} alt=""/>
                                    </div>
                                    <div className='userdetail-box'>
                                        <audio ref={this.audio} src={require('../../img/sound.mp3')} controls ></audio>
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        个人爱好
                                    </div>
                                    <div className='userdetail-box'>
                                        上网、看电影和阅读
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        擅长课程
                                    </div>
                                    <div className='userdetail-box'>
                                        日常英语、商务口语、雅思英语、青少年口语、儿童英语
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        学历专业
                                    </div>
                                    <div className='userdetail-box'>
                                        英语
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        教学经验
                                    </div>
                                    <div className='userdetail-box'>
                                        4年线上教学英语经验
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        适合学员
                                    </div>
                                    <div className='userdetail-box'>
                                        儿童、青少年和初学者
                                    </div>
                                </div>
                                <div className='audio-box'>
                                    <div className='userdetail-l'>
                                        教学特色
                                    </div>
                                    <div className='userdetail-box'>
                                        有激情、耐心、活泼、友好、认真倾听并且及时纠正学员得错误表达
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
                <div style={{...styles.teacherdetail,marginTop:'20px',paddingRight:'100px'}}>
                    <div style={styles.teachTitle}>预约外教</div>
                    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                </div>
                <div style={{...styles.teacherdetail,marginTop:'20px',paddingRight:'100px'}}>
                    <div style={styles.teachTitle}>学员评价</div>
                    <div className='student-evaluate'>
                        <div className='evaluate-item'>
                            <div className='evaluate-l'>
                                <img src={require('../../img/user.jpeg')} alt=""/>
                                <div className='student-name'>XINGMING</div>
                                <div className='evaluate-time'>2019-02-04</div>
                            </div>
                            <div className='evaluate-r'>
                                <Rate className='start' disabled defaultValue={2} />
                                <TextArea value={'a dashj dashjksad ashjd asjhd asd asdjhasd asdjkha sdasjkdhasdasjkdasdhjksa '} disabled={true} rows={4} />
                            </div>
                        </div>
                        <div className='evaluate-item'>
                            <div className='evaluate-l'>
                                <img src={require('../../img/user.jpeg')} alt=""/>
                                <div className='student-name'>XINGMING</div>
                                <div className='evaluate-time'>2019-02-04</div>
                            </div>
                            <div className='evaluate-r'>
                                <Rate className='start' disabled defaultValue={2} />
                                <TextArea value={'a dashj dashjksad ashjd asjhd asd asdjhasd asdjkha sdasjkdhasdasjkdasdhjksa '} disabled={true} rows={4} />
                            </div>
                        </div>
                        <div className='evaluate-item'>
                            <div className='evaluate-l'>
                                <img src={require('../../img/user.jpeg')} alt=""/>
                                <div className='student-name'>XINGMING</div>
                                <div className='evaluate-time'>2019-02-04</div>
                            </div>
                            <div className='evaluate-r'>
                                <Rate className='start' disabled defaultValue={2} />
                                <TextArea value={'a dashj dashjksad ashjd asjhd asd asdjhasd asdjkha sdasjkdhasdasjkdasdhjksa '} disabled={true} rows={4} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles={
    teacherdetail:{
        width:'100%',
        boxSizing:'border-box',
        padding:'0 0 0 100px',
        backgroundColor:'#fff'
    },
    teachTitle:{
        lineHeight:'50px'
    },
    teacherUserinfo:{
        width: '100%',
        display:'flex',
        flexDirection:'row',
    },
    teacherAvt:{
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center'
    },
    teachergood:{
        paddingLeft:'40px',
        paddingRight:'40px',
        flex:7,
        display:'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    teachergood1:{
        paddingLeft:'40px',
        paddingRight:'40px',
        flex:7,
        display:'flex',
        // flexDirection:'column'
    },
    atv:{
        width:'80px',
        borderRadius:'40px',
        marginTop:'10px',

    },
    teacherR:{
        flex:7,
        display:'flex',
        flexDirection:'column'
    },
    username:{
        marginTop: '10px',
        fontSize:'12px'
    },
    sub:{
        fontWeight:'normal',
        fontSize: '12px'
    },

};
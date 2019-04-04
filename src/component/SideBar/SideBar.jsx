import React,{Component} from 'react';

export  default class extends Component {
    constructor(props){
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <div className='main-r'>
                <div className='userinfo'>
                    <div className='user-r user'>
                        <h3>公告栏</h3>
                        <div className='bord'>
                            <div className='bord-item'>
                                <div className='bord-detail'>
                                        <span className='bord-text'>
                                        [ 公告 ]
                                        </span>
                                    公告调整通知公告调整通知公告调1111114515341534135435</div>
                            </div>
                            <div className='bord-item'>

                                <div className='bord-detail'>
                                    <div className='bord-text'>
                                        [ 公告 ]
                                    </div>
                                    公告调整通知公告调整通知公告调
                                </div>
                            </div>
                            <div className='bord-item'>

                                <div className='bord-detail'><span className='bord-text'>
                                        [ 公告 ]
                                    </span>公告调整通知公告调整通知公告调</div>
                            </div>
                            <div className='bord-item'>

                                <div className='bord-detail'><span className='bord-text'>
                                        [ 公告 ]
                                    </span>公告调整通知公告调整通知公告调</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='title'></div>
                <div className='office-box'>
                    <div className='office-l'>
                        <div className='office-title'>教务处</div>
                        <div className='office-tel'>联系电话：13333333333</div>
                    </div>
                    <div className='office-r'>
                        <img src={require('../../img/ewm.png')} alt=""/>
                    </div>
                </div>
                <div className='title'></div>
                <div className='mayteacher'>
                    <div className='office-title'>我的助教</div>
                    <div  className='office-tel'>联系电话：</div>
                    <div  className='office-tel'>服务时间：9:00-22:00</div>
                </div>
            </div>
        )
    }
}
import React,{Component} from 'react';
import './CourseSetting.less';
export default  class CourseSetting extends Component{
    constructor(props){
        super(props);
        this.state={
            strengthensel:1
        }

    }
    render() {

        return (
            <div className='coursesetting-caontainer'>
                <div className='coursesetting-title courseleft'>课程偏好</div>
                <div className='strengthen-box course-item'>
                    <div className='courseleft'>需要加强的部分</div>
                    <div className='strengthensel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/tingli${this.state.strengthensel==1?'1':'0'}.png`)} alt=""/>
                            <div className={`strengthentitle ${this.state.strengthensel==1?'activesel':''}`}>听力</div>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/tingli0.png')} alt=""/>
                            <div className='strengthentitle'>听力</div>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/tingli0.png')} alt=""/>
                            <div className='strengthentitle'>听力</div>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/tingli0.png')} alt=""/>
                            <div className='strengthentitle'>听力</div>
                        </div>
                    </div>
                </div>

                <div className='strengthen-box course-item'>
                    <div className='courseleft'>课前闲聊</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className='strengthen-box course-item'>
                    <div className='courseleft'>纠错方式</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                    </div>
                </div>



                <div className='strengthen-box course-item'>
                    <div className='courseleft'>每日话题</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>

                    </div>
                </div>
                <div className='strengthen-box course-item'>
                    <div className='courseleft'></div>
                    <div className='strengthensel othersel'>

                        <div className='line'></div>
                    </div>
                </div>

                <div className='coursesetting-title courseleft'>服务偏好</div>

                <div className='strengthen-box course-item'>
                    <div className='courseleft'>助教联系频率</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>

                    </div>
                </div>

                <div className='strengthen-box course-item'>
                    <div className='courseleft'>助教联系方式</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>

                    </div>
                </div>

                <div className='strengthen-box course-item'>
                    <div className='courseleft'>作业提醒（邮件）</div>
                    <div className='strengthensel othersel'>
                        <div className='strengthensel-item'>
                            <img src={require(`../../img/${this.state.strengthensel==1?'open':'off'}.png`)} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>
                        <div className='strengthensel-item'>
                            <img src={require('../../img/off.png')} alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
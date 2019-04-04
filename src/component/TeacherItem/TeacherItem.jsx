import React,{Component} from 'react';
import {Rate} from 'antd';
import './TeacherItem.less';

export default  class TeacherItem extends Component{
    constructor(props){
        super(props);

    }
    render() {

        return (
            <div className='teacher-box'>
                <div className='teacher-content'>
                    <img src={require('../../img/user.jpeg')} alt=""/>
                    <div className='teacher-name'>老师姓名</div>
                    <div className='teacher-content-bottom'>
                        <Rate className='startStyle' disabled defaultValue={2} />
                        <button className='rightaway'>立即预约</button>
                    </div>
                    <div className='or-order'>预约过</div>
                </div>

            </div>
        )
    }
}
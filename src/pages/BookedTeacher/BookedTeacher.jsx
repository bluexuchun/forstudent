import React,{Component} from 'react';
import {Table,Divider, Tag } from  'antd';

export  default class BookedTeacher extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const columns = [{
            title: '已预约时间',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '老师姓名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
        }, {
            title: '教材页码',
            dataIndex: 'page',
            key: 'page',
        }, {
            title: '上课方式',
            dataIndex: 'address',
            key: 'address',
        }];

        const data = [{
            time:'2012-02-16',
            key: '1',
            name: 'John Brown',
            page: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            time:'2012-02-16',
            key: '2',
            name: 'Jim Green',
            page: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            time:'2012-02-16',
            key: '3',
            name: 'Joe Black',
            page: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];

        return (
                <div className='main-l'>
                    <div className='paging-title'>首页>外教管理>已预约外教</div>
                    <div style={{...styles.teacherdetail,paddingRight:'100px'}}>
                        <Table columns={columns} dataSource={data} />
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
}
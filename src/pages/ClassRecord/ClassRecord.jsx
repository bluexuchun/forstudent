import React,{Component} from 'react';
import {Table,Divider, Tag } from  'antd';

export  default class ClassRecord extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const columns = [
            {
                title: 'Key',
                dataIndex: 'key',
                key: 'key',
                render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
            },
            {
                title: '课节号',
                dataIndex: 'kejiehao',
                key: 'kejiehao',
                render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
            },
            {
                title: '上课时间',
                dataIndex: 'time',
                key: 'time',
                render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
            },
            {
            title: '上课老师',
            dataIndex: 'name',
            key: 'name',
            render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
        }, {
            title: '课程时长',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '课程进度',
            dataIndex: 'address',
            key: 'address',
        },{
                title: '课程状态',
                dataIndex: 'status',
                key: 'status',
                render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
            },
            {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>

       <a style={{color:'blue'}}>编辑</a>
    </span>
            ),
        }];

        const data = [{
            status:1,
            time:'9:00',
            kejiehao:'22',
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            status:1,
            time:'9:00',
            kejiehao:'22',
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            status:1,
            time:'9:00',
            kejiehao:'22',
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
        }];

        return (
            <div className='main-l'>
                <div className='paging-title'>首页>外教管理>上课记录</div>
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
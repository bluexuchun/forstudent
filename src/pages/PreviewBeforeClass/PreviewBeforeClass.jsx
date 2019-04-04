import React,{Component} from 'react';
import {Table,Divider, Tag } from  'antd';

export  default class PreviewBeforeClass extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const columns = [
            {
                title: '序列号',
                dataIndex: 'key',
                key: 'key',
            },
            {
                title: '交易号',
                dataIndex: 'kejiehao',
                key: 'kejiehao',
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '开课日期',
                dataIndex: 'date',
                key: 'date',
            },
            {
                title: '时间',
                dataIndex: 'time',
                key: 'time',

            },
            {
                title: '课程时长',
                dataIndex: 'age',
                key: 'age',
            }, {
                title: '课程进度',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <span>

       <a style={{color:'#2cd3a4',borderRadius:'5px',border:'1px solid #2cd3a4',padding:'5px 20px'}}>下载</a>
    </span>
                ),
            }];

        const data = [{
            date:'2018-02-03',
            status:1,
            time:'9:00',
            kejiehao:'22',
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }, {
            date:'2018-02-03',
            status:1,
            time:'9:00',
            kejiehao:'22',
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
        }, {
            date:'2018-02-03',
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
                <div className='paging-title'>首页>外教管理>课前预习</div>
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
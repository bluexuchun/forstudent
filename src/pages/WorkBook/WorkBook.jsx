import React,{Component} from 'react';
import { Table, Divider, Tag ,Icon,Tabs} from 'antd';

const TabPane = Tabs.TabPane;
export  default  class WorkBook extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        console.log(this.props);
        if(this.props.location.pathname=='/workbook'){
            document.getElementsByClassName('ant-tabs-nav-wrap')[0].style.backgroundImage=`none`;

            // document.getElementsByClassName('ant-tabs-nav-wrap')[2].style.backgroundImage=`none`;
            document.getElementsByClassName('ant-tabs-tab-active')[0].style.backgroundImage='none';
            document.getElementsByClassName('ant-tabs-nav-wrap')[0].style.paddingLeft='0';
        }
    }

    render() {
        const columns = [{
            dataIndex: 'name',
            key: 'name',
            render: text => <a style={{color:'black'}} href="javascript:;">{text}</a>,
        }, {
            dataIndex: 'age',
            key: 'age',
        }, {
            dataIndex: 'address',
            key: 'address',
        }, {
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
      {tags.map(tag => {

          return <Tag style={{border:'none',backgroundColor:'none',}} key={tag}><span style={{marginRight:'10px'}}>{tag.toUpperCase()}</span><Icon type="sound" /></Tag>;
      })}
    </span>
            ),
        }, {
            dataIndex: 'createtime',
            key: 'createtime',
        } ];

        const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            createtime:'2019-05-31 10:28',
            tags: ['美', '英'],
        }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            createtime:'2019-05-31 10:28',
            address: 'London No. 1 Lake Park',
            tags: ['美', '英'],
        }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            createtime:'2019-05-31 10:28',
            address: 'Sidney No. 1 Lake Park',
            tags: ['美', '英'],
        }];
        return (
            <div className='main-l'>

                <div className='paging-title'>首页>我的助手>单词本</div>

                <Tabs defaultActiveKey="1">
                    <TabPane tab="Tab 1" key="1">
                        <Table style={{backgroundColor:'#fff'}} columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="Tab 2" key="2">Tab 2</TabPane>
                    <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
                </Tabs>
            </div>
        )
    }
}
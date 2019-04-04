import React,{Component} from 'react';
import  user from '../../img/user.jpeg';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import './Header.less';

export  default  class Header extends Component{
    constructor(props){
        super(props);

    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3d menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div className='hearder'>
                <div className='user'>
                    <img src={user} alt=""/>
                    <Dropdown overlay={menu}>
                        <a className="ant-dropdown-link" href="#">
                            Hover me <Icon type="down" />
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}




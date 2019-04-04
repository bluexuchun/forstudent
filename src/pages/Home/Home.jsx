import React,{Component} from 'react';
import Hearder from '../../component/Hearder/index';
import { Tabs,Carousel,Table, Divider, Tag} from 'antd';
import  MainContent from '../../component/MainContent';
import  SideBar from '../../component/SideBar';
import  './Home.less';
import BookedTeacher from '../BookedTeacher';
import SelecTeachingMaterial from '../SelectTeachingMaterial';
import WorkBook from '../WorkBook';
import ClassRecord from '../ClassRecord';
import  PreviewBeforeClass from '../PreviewBeforeClass';
import  nav2 from '../../img/nav2.png';
import  {BrowserRouter,Route,Switch} from 'react-router-dom';


export default class Home extends Component{
    constructor(props){
        super(props);

        this.state={

        }
    }
    componentDidMount() {
        console.log(this.props);
        //添加背景图
        // const {pathname}=this.props.location;
        // console.log(pathname);
        // if(this.props.location.pathname=='/'){
        //     document.getElementsByClassName('ant-tabs-nav-wrap')[1].style.backgroundImage=`url(${nav2})`;
        // }

    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Hearder></Hearder>
                    <div className='main'>
                        <Route exact path='/' component={MainContent}></Route>
                        <Route path='/booksteacher' component={BookedTeacher}></Route>
                        <Route path='/workbook' component={WorkBook}></Route>
                        <Route path='/stm' component={SelecTeachingMaterial}></Route>
                        <Route path='/classrecord' component={ClassRecord}></Route>
                        <Route path='/pbc' component={PreviewBeforeClass}></Route>
                        <SideBar/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}
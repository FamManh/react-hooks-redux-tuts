import { Icon, Layout, Menu, Dropdown, Avatar } from 'antd';
import React from 'react';
import HeaderWrapper from './styles/HeaderWrapper';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux'

const { Header: AntHeader } = Layout;

const Header =  () => {
    const menuVisible = useSelector(state=>state.layout.menuVisible)
    const dispatch = useDispatch()
    const userMenu = (
        <Menu selectedKeys={[]}>
          <Menu.Item
            onClick={()=>{console.log("Do navigate to profile")}}
            key="userCenter"
          >
            <Icon type="user" /> User Name
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item onClick={()=>console.log("do Signout")} key="logout">
            <Icon type="logout" />
            Sign out
          </Menu.Item>
        </Menu>
      );
    return (
        <HeaderWrapper>
            <AntHeader>
            <Icon
                className="trigger"
                type={
                    menuVisible
                    ? 'menu-fold'
                    : 'menu-unfold'
                }
                onClick={()=>dispatch(actions.doToggleMenu())}
            />
            <div>
                <span className="i18n-select">
                {/* <I18nSelect /> */}
                </span>

                <Dropdown
                className="user-dropdown"
                overlay={userMenu}
                trigger={['click']}
                >
                    <span>
                        <Avatar
                        className="user-dropdown-avatar"
                        size="small"
                        src={
                            "" ||
                            undefined
                        }
                        alt="avatar"
                        />
                        <span className="user-dropdown-text">
                        Manh Pham
                        </span>
                    </span>
                </Dropdown>
            </div>
            </AntHeader>
        </HeaderWrapper>
    )
}
export default Header;

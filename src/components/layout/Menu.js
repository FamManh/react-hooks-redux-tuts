import {
  Layout as AntLayout,
  Menu as AntMenu,
  Icon,
} from 'antd';
import React, { Component, useState, useEffect } from 'react';
import SiderWrapper from './styles/SiderWrapper';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../../redux'

const { Sider } = AntLayout;
const Menu = () => {
    const menuVisible = useSelector(state=>state.layout.menuVisible);
    const dispatch = useDispatch()
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)


    const toggleMenuOnResize = () => {
        window.innerWidth < 576 ? dispatch(actions.doHideMenu()) : dispatch(actions.doShowMenu())
    }
    
    useEffect(() => {
        // Component did mount 
        toggleMenuOnResize();
        window.addEventListener(
            'resize',
            toggleMenuOnResize,
        );
        return () => {
            // Componetn will unmount
            console.log("helleohr")
            window.removeEventListener(
                'resize',
                toggleMenuOnResize,
            );
        }
    }, [])
    console.log(menuVisible)
    return (
        <SiderWrapper
            style={{
            display: menuVisible
                ? 'block'
                : 'none',
            }}
            >
        <Sider theme="light" trigger={null}>
            <div className="logo">
                <h2>Manh Pham</h2>
            </div>

        <AntMenu
        theme="light"
        mode="inline"
        >
            <AntMenu.Item key="/">
                <a to="/">
                    <Icon type="heat-map" />
                    <span>Tua</span>
                </a>
            </AntMenu.Item>
            <AntMenu.Item key="/">
                <a to="/">
                    <Icon type="heat-map" />
                    <span>Báo cáo</span>
                </a>
            </AntMenu.Item>
            <AntMenu.Item key="/">
                <a to="/">
                    <Icon type="heat-map" />
                    <span>Dịch vụ</span>
                </a>
            </AntMenu.Item>
            <AntMenu.Item key="/">
                <a to="/">
                    <Icon type="heat-map" />
                    <span>Nhân viên</span>
                </a>
            </AntMenu.Item>
          </AntMenu>
        </Sider>
      </SiderWrapper>
    )
}
export default Menu;

import React from 'react';
import { Button, Tooltip } from 'antd';
import { Link } from 'react-router-dom';
import Toolbar from '../../../shared/styles/Toolbar';


const UserToolbar = () => {
    return (
        <Toolbar>
            <Link to="/user/new">
                <Button type="primary" icon="user-add">
                    Thêm mới
                </Button>
            </Link>
            <Button type="danger" icon="user-delete">
                Xóa
            </Button>
            <Button
                type="primary"
                icon="check">
                Kích hoạt
            </Button>
            <Button
                icon="file-excel">
                Xuất Excel
            </Button>
        </Toolbar>
    );
}

export default UserToolbar;

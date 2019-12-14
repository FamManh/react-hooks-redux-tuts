import React from 'react';
import ContentWrapper from '../../layout/styles/ContentWrapper';
import PageTitle from '../../../shared/styles/PageTitle';
import UserToolbar from './UserListToolbar';

const UserListPage = () => {
    return (
        <ContentWrapper>
            <PageTitle>Người dùng</PageTitle>
            <UserToolbar/>
        </ContentWrapper>
    );
}

export default UserListPage;

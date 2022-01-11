import React from 'react';
import { UserInfo } from '../../utils/api';
import BasePage, { PageProps } from '../BasePage'

interface BaseInfoProps extends PageProps {
    user_info: UserInfo;
}


class BaseInfoPage extends React.Component<UserInfo> {
    render() {
        return <div className={"page-card page-card-active"}>{JSON.stringify(this.props)}</div>
    }
}

export default BaseInfoPage;
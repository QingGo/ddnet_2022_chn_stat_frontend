import React from 'react';
import { UserInfo } from '@/utils/api';
import BasePage from '../BasePage';


class BaseInfoPage2 extends React.Component<UserInfo> {
    render() {
        return <div className={"page-card page-card-active"}>{JSON.stringify(this.props.Name)}</div>
    }
}

export default BaseInfoPage2;
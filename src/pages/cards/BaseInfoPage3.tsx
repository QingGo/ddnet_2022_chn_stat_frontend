import React from 'react';
import { UserInfo } from '@/utils/api';
import BasePage from '../BasePage';


class BaseInfoPage3 extends React.Component<UserInfo> {
    render() {
        return <div className={"page-card page-card-active"}>{JSON.stringify(this.props.finish_points_total)}</div>
    }
}

export default BaseInfoPage3;
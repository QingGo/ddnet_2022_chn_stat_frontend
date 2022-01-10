import React from 'react';
import type { UserInfo } from '../api/api';

interface BaseInfoProps {
    user_info: UserInfo;
}


class BaseInfoPage extends React.Component<BaseInfoProps> {
    render() {
        return <div>{JSON.stringify(this.props.user_info)}</div>
    }
}

export default BaseInfoPage;
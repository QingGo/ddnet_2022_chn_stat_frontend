import React from 'react';
import { UserInfo } from '../api/api';
import Page, { PageProps } from './Page'

interface BaseInfoProps extends PageProps {
    user_info: UserInfo;
}


class BaseInfoPage extends React.Component<BaseInfoProps> {
    render() {
        return <Page is_active={this.props.is_active}>
            <div>{JSON.stringify(this.props.user_info)}</div>
        </Page>
    }
}

export default BaseInfoPage;
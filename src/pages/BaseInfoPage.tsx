import React from 'react';
import { UserInfo } from '../utils/api';
import Page, { PageProps } from './Page'

interface BaseInfoProps extends PageProps {
    user_info: UserInfo;
}


class BaseInfoPage extends React.Component<BaseInfoProps> {
    render() {
        return <Page is_active={this.props.is_active}
            next_page={this.props.next_page}
            previous_page={this.props.previous_page}>
            <div>{JSON.stringify(this.props.user_info)}</div>
        </Page >
    }
}

export default BaseInfoPage;
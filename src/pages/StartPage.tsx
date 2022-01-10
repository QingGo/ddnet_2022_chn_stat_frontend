import React from 'react';
import InputBox from '../components/input';
import Page, { PageProps } from './Page';


interface StartPageProps extends PageProps {
    onClick: (value: string) => void;
}


class StartPage extends React.Component<StartPageProps> {
    render() {
        return (
            <Page is_active={this.props.is_active}>
                <InputBox onClick={this.props.onClick}></InputBox>
            </Page>
        );
    }
}

export default StartPage;
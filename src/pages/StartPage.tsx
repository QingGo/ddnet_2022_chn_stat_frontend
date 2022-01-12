import React from 'react';
import InputBox from '../components/InputBox';
import BasePage, { PageProps } from './BasePage';


interface StartPageProps extends PageProps {
    onClick: (value: string) => void;
}


class StartPage extends React.Component<StartPageProps> {
    render() {
        return (
            <BasePage is_active={this.props.is_active}>
                <InputBox onClick={this.props.onClick}></InputBox>
            </BasePage>
        );
    }
}

export default StartPage;
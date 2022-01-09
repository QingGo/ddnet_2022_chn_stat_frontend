import React from 'react';
import InputBox from '../components/input';


interface StartPageProps {
    onClick: (value: string) => void;
}


class StartPage extends React.Component<StartPageProps> {
    // constructor(props: any) {
    //     super(props);
    // }

    render() {
        return (
            <InputBox onClick={this.props.onClick}></InputBox>
        );
    }
}

export default StartPage;
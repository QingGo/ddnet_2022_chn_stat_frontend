import React from 'react';

interface InputBoxProps {
    onClick: (value: string) => void;
}

interface InputBoxState {
    inputValue: string;
}

class InputBox extends React.Component<InputBoxProps, InputBoxState> {
    constructor(props: InputBoxProps) {
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    onClick = () => {
        this.props.onClick(this.state.inputValue);
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} />
                <button onClick={this.onClick}>查看</button>
            </div>
        );
    }
}

export default InputBox;

import React from 'react';
import './input.scss';
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


    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        this.setState({ inputValue: e.target.value });
    };

    render() {
        return (
            <div className="input">
                <h2>请输入游戏 ID：</h2>
                <input type="text" onChange={this.handleChange} />
                <button onClick={() => {this.props.onClick(this.state.inputValue)}}>查看</button>
            </div>
        );
    }
}

export default InputBox;

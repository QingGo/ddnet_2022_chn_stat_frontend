import React from 'react';
import { Button, Input, Form } from 'antd';
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
                <Form>
                    <Input type="text" onChange={this.handleChange} />
                    <Button htmlType="submit" onClick={() => { this.props.onClick(this.state.inputValue) }}>查看</Button>
                </Form>

            </div>
        );
    }
}

export default InputBox;

import classNames from 'classnames';
import React from 'react';
import './page.scss';
import { Card } from 'antd';


interface PageProps {
    is_active: boolean;
}

class BasePage extends React.Component<PageProps> {
    isDragging: boolean = false;
    yPos: number = 0;

    getBaseClassName = () => {
        var className = classNames(
            {
                "page-card": true,
                "page-card-active": this.props.is_active,
                "page-card-inactive": !this.props.is_active,
            });
        return className;
    }

    render() {
        return <Card className={this.getBaseClassName()}>
            {this.props.children}
        </Card>
    }
}

export default BasePage;
export type { PageProps };
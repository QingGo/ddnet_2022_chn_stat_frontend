import classNames from 'classnames';
import React from 'react';
import './page.scss';
import { Card } from 'antd';


interface PageProps {
    is_active: boolean;
    next_page: () => void;
    previous_page: () => void;
}

interface Position {
    x: number;
    y: number;
}



class Page extends React.Component<PageProps> {
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

    onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
        this.isDragging = true;
        this.yPos = e.clientY;
    }

    onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        this.isDragging = false;
        var yDistance = e.clientY - this.yPos;
        console.log(yDistance);
        if (yDistance > 50) {
            this.props.next_page();
        } else if (yDistance < -50){
            this.props.previous_page();
        }
    }


    render() {
        return <Card draggable={true} onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd} className={this.getBaseClassName()}>
            {this.props.children}
        </Card>
    }
}

export default Page;
export type { PageProps };
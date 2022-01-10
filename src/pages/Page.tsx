import classNames from 'classnames';
import React from 'react';
import './page.scss';


interface PageProps {
    is_active: boolean;
}

class Page extends React.Component<PageProps> {
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
        return <div className={this.getBaseClassName()}>
            {this.props.children}
        </div>
    }
}

export default Page;
export type { PageProps };
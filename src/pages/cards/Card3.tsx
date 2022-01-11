import React from 'react';
import { UserInfo } from '@/utils/api';

class Card3 extends React.Component<UserInfo> {
    render() {
        var content = `2021 年你完成次数最多的地图是 ${this.props.most_finished_map_2021}，
            一共完成了 ${this.props.map_finished_count} 次，
            过图总耗时 ${parseFloat(this.props.most_finished_map_2021_spend_minues).toFixed(2)} 分钟，
            你一定很喜欢这张地图吧。`;
        return <div className={"page-card page-card-active"}>{content}</div>
    }
}

export default Card3;
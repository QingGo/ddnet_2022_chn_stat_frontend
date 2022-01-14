import React from 'react';
import { UserInfo } from '@/utils/api';

class Card4 extends React.Component<UserInfo> {
    render() {
        var content = `2021 年中，
            你在最深夜完成的地图是 ${this.props.day_latest_finish_map}，
            在 ${this.props.day_latest_finish_time} 完成。
            `;
        var hour = parseInt(this.props.day_latest_finish_time?.split(' ')[1].split(':')[0]);
        if (hour >= 3 && hour < 6) {
            content += "你就是修仙战神！！"
        } else if (hour >= 0 && hour < 3){
            content += "你就是肝帝！！"
        } else if (hour < 9){
            content += "早睡早起身体好！"
        } else {
            content += "游戏时间很规律！"
        }
        return <div className={"page-card page-card-active"}>{content}</div>
    }
}

export default Card4;
import React from 'react';
import { UserInfo } from '@/utils/api';
import ReactMarkdown from 'react-markdown'

class Card5 extends React.Component<UserInfo> {
    render() {
        var hour = parseInt(this.props.day_latest_finish_time?.split(' ')[1].split(':')[0]);
        var summary_content: string
        if (hour >= 3 && hour < 6) {
            summary_content = "你就是修仙战神！！"
        } else if (hour >= 0 && hour < 3) {
            summary_content = "你就是肝帝！！"
        } else if (hour < 9) {
            summary_content = "早睡早起身体好！"
        } else {
            summary_content = "游戏时间很规律！"
        }
        var content = `**2021** 年中，
            你在最深夜完成的地图是 **${this.props.day_latest_finish_map}**，
            在 **${this.props.day_latest_finish_time}** 完成。
            \n ## ${summary_content}`;
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card5;
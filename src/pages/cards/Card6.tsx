import React from 'react';
import { UserInfo } from '@/utils/api';
import ReactMarkdown from 'react-markdown'

type StringToString = {
    [name: string]: string
};


class Card6 extends React.Component<UserInfo> {
    render() {
        var weekday_map: StringToString = {
            '1': '星期日',
            '2': '星期一',
            '3': '星期二',
            '4': '星期三',
            '5': '星期四',
            '6': '星期五',
            '7': '星期六',
        }
        var weekday_desc: string
        if (['6', '7', '1'].includes(this.props.most_finish_weekday)) {
            weekday_desc = "休息日玩游戏也要适度哦～"
        } else {
            weekday_desc = "该死，这人不用上班的吗？"
        }
        var hour = parseInt(this.props.most_finish_hour)
        var hour_desc: string
        if (hour >= 3 && hour < 6) {
            hour_desc = "你就是修仙战神！！"
        } else if (hour >= 0 && hour < 3) {
            hour_desc = "你就是肝帝！！"
        } else if (hour < 9) {
            hour_desc = "什么，天亮了！"
        } else {
            hour_desc = "游戏时间很规律！"
        }
        var content = `**2021** 年中，
            你最常在 **${weekday_map[this.props.most_finish_weekday]}** 过图,
            共过图 **${this.props.most_finish_weekday_count}** 次。
            **${weekday_desc}**
            你在最常过图的时间段是 **${this.props.most_finish_hour}** 点，
            共过图 **${this.props.most_finish_hour_count}** 次。
            **${hour_desc}**`;

        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card6;
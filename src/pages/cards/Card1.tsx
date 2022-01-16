import React from 'react';
import { UserInfo } from '../../utils/api';
import './card.scss'
import ReactMarkdown from 'react-markdown'


class Card1 extends React.Component<UserInfo> {
    render() {
        var points_over_percent = Math.floor((this.props.player_count_2021 - this.props.total_points_earned_rank + 1)
            * 1000000 / this.props.player_count_2021) / 10000;
        var points_over_percent_summary: string;
        if (points_over_percent > 99.99) {
            points_over_percent_summary = "你一定是个超级大触！"
        } else if (points_over_percent > 99) {
            points_over_percent_summary = "你一定是个大触！"
        } else if (points_over_percent > 90) {
            points_over_percent_summary = "好触呀！"
        } else if (points_over_percent > 50) {
            points_over_percent_summary = "你的水平超越了大部分的玩家！"
        } else {
            points_over_percent_summary = "标准的休闲玩家！"
        }

        var content = `Hi **${this.props.Name}**~
                在 **2021** 年，
                你一共在 **${this.props.days_count_has_records_2021}** 天留下了你的过图记录，
                总共有 **${this.props.finish_map_count}** 次，
                新刷到了 **${this.props.total_points_earned}** 分，
                超越了 **${points_over_percent}%** 的玩家。
                **${points_over_percent_summary}**
                `;
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card1;
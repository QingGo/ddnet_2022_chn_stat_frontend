import React from 'react';
import { UserInfo } from '../../utils/api';
import './card.scss'
import ReactMarkdown from 'react-markdown'


class Card2 extends React.Component<UserInfo> {
    render() {
        var finish_time_over_percent = Math.floor((this.props.player_count_2021 - this.props.finish_time_sum_hours + 1)
            * 1000000 / this.props.player_count_2021) / 10000;
        var finish_time_over_percent_summary: string;
        if (finish_time_over_percent > 99) {
            finish_time_over_percent_summary = "你的肝还好吗？"
        } else if (finish_time_over_percent > 90) {
            finish_time_over_percent_summary = "你已经是个重度玩家了～"
        } else {
            finish_time_over_percent_summary = "所以都说 DDNet 是个休闲游戏了～"
        }
        var finish_time_hours_rounded = Number(this.props.finish_time_sum_hours).toFixed(2);

        var content = `在 **2021** 年，
                你在过图上一共消耗了 **${finish_time_hours_rounded}** 小时，
                超越了 **${finish_time_over_percent}%** 的玩家。
                **${finish_time_over_percent_summary}**`;
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card2;
import React from 'react';
import { UserInfo } from '@/utils/api';
import ReactMarkdown from 'react-markdown'

class Card7 extends React.Component<UserInfo> {
    render() {
        var content = `**2021** 年中，
            你一共和 **${this.props.teammate_count}** 个不同的队友，
            有过 **${this.props.team_count}** 次组队过图的经历。
            `;
        var additional_content = `你是独狼玩家，
            还是 Team 0 爱好者呢？`
        if (this.props.teammate_count > 0) {
            additional_content = `其中，**${this.props.favorite_teammate}** 是你最常组队的队友，
                你们一共组队了过了 **${this.props.favorite_teammate_team_count}** 次图。
                你是否还记得你们一起游玩的场景呢？
        `
        }
        content += additional_content
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card7;
import React from 'react';
import { UserInfo } from '@/utils/api';
import ReactMarkdown from 'react-markdown'

class Card3 extends React.Component<UserInfo> {
    render() {
        var content = `**${this.props.finish_map_count}** 次过图记录中，
            不重复的地图数有 **${this.props.finish_distinct_map_count}** 张，
            **其中:**
            新过了 ${this.props.finish_novice_new_map_count} 张 Novice 地图，
            新过了 ${this.props.finish_moderate_new_map_count} 张 Moderate 地图，
            新过了 ${this.props.finish_brutal_new_map_count} 张 Brutal 地图，
            新过了 ${this.props.finish_insane_new_map_count} 张 Insane 地图，
            新过了 ${this.props.finish_solo_new_map_count} 张 Solo 地图，
            新过了 ${this.props.finish_ddmax_new_map_count} 张 DDMax 地图，
            你一定是个大佬吧。`;
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card3;
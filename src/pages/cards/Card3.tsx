import React from 'react';
import { UserInfo } from '@/utils/api';
import ReactMarkdown from 'react-markdown'

class Card3 extends React.Component<UserInfo> {
    render() {
        var content = `**${this.props.finish_map_count}** 次过图记录中，
            不重复的地图数有 **${this.props.finish_distinct_map_count}** 张，
            **其中:**
            新过了 **${this.props.finish_novice_map_count}** 次 Novice 地图，共 **${this.props.finish_novice_new_map_count}** 张。
            新过了 **${this.props.finish_moderate_map_count}** 次 Moderate 地图，共 **${this.props.finish_moderate_new_map_count}** 张。
            新过了 **${this.props.finish_brutal_map_count}** 次 Brutal 地图，共 **${this.props.finish_brutal_new_map_count}** 张。
            新过了 **${this.props.finish_insane_map_count}** 次 Insane 地图，共 **${this.props.finish_insane_new_map_count}** 张。
            新过了 **${this.props.finish_solo_map_count}** 次 Solo 地图，共 **${this.props.finish_solo_new_map_count}** 张。
            新过了 **${this.props.finish_dummy_map_count}** 次 Dummy 地图，共 **${this.props.finish_dummy_new_map_count}** 张。
            新过了 **${this.props.finish_ddmax_map_count}** 次 DDMax 地图，共 **${this.props.finish_ddmax_new_map_count}** 张。
            新过了 **${this.props.finish_oldschool_map_count}** 次 OldSchool 地图，共 **${this.props.finish_oldschool_new_map_count}** 张。
            新过了 **${this.props.finish_race_map_count}** 次 Race 地图，共 **${this.props.finish_race_new_map_count}** 张。
            新过了 **${this.props.finish_fun_map_count}** 次 Fun 地图，共 **${this.props.finish_fun_new_map_count}** 张。
            你一定是个大佬吧。`;
        return <div className={"page-card page-card-active card"}>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    }
}

export default Card3;
import React from 'react';
import { UserInfo } from '../../utils/api';

class Card1 extends React.Component<UserInfo> {
    render() {
        var content = `Hi ${this.props.Name}~
                在 2021 年，
                你一共在 ${this.props.days_count_has_records_2021} 天留下了你的过图记录，
                共 ${this.props.finish_map_count} 次，
                新刷到了 ${this.props.total_points_earned} 分，
                消耗了 ${parseFloat(this.props.finish_time_sum_hours).toFixed(2)} 小时的过图时间，
                你的肝还好吗？`;
        return <div className={"page-card page-card-active"}>{content}</div>
    }
}

export default Card1;
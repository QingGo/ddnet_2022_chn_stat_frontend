import React from 'react';
import { UserInfo } from '../../utils/api';

class Card1 extends React.Component<UserInfo> {
    render() {
        var content = `Hi ${this.props.Name}~
                在 2021 年你一共有 ${this.props.finish_map_count} 次过图记录，
                新增了 ${this.props.total_points_earned} 点 Points，
                一共花了 ${parseFloat(this.props.finish_time_sum_hours).toFixed(2)} 小时的过图时间，
                你的肝还好吗？`;
        return <div className={"page-card page-card-active"}>{content}</div>
    }
}

export default Card1;
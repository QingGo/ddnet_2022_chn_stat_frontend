import React from 'react';
import './App.scss';
import get_user_info from './api/api';
import type { UserInfo } from './api/api';
import StartPage from './pages/StartPage';
import BaseInfoPage from './pages/BaseInfoPage';
import { message } from 'antd';


interface AppState {
  active_card_index: number;
  use_name: string;
  user_info: UserInfo,
}

class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      active_card_index: 0,
      use_name: '',
      user_info: {
        Name: '',
        total_points_earned: '',
        finish_time_sum_hours: '',
        finish_distinct_map_count: '',
        finish_map_count: '',
        finish_points_total: '',
        finish_race_point: '',
        finish_solo_point: '',
        finish_ddmax_point: '',
        finish_dummy_point: '',
        finish_brutal_point: '',
        finish_insane_point: '',
        finish_novice_point: '',
        finish_moderate_point: '',
        finish_oldschool_point: '',
        finish_fun_point: '',
        finish_race_new_map_count: '',
        finish_solo_new_map_count: '',
        finish_ddmax_new_map_count: '',
        finish_dummy_new_map_count: '',
        finish_brutal_new_map_count: '',
        finish_insane_new_map_count: '',
        finish_novice_new_map_count: '',
        finish_moderate_new_map_count: '',
        finish_oldschool_new_map_count: '',
        finish_fun_new_map_count: '',
        finish_fun_map_count: '',
        finish_race_map_count: '',
        finish_solo_map_count: '',
        finish_ddmax_map_count: '',
        finish_dummy_map_count: '',
        finish_brutal_map_count: '',
        finish_insane_map_count: '',
        finish_novice_map_count: '',
        finish_moderate_map_count: '',
        finish_oldschool_map_count: '',
        most_finished_map_2021: '',
        map_finished_count: '',
        most_finished_map_2021_spend_minues: '',
      },
    }
  }

  set_uers_info = async (user_name: string) => {
    var user_info_json = await get_user_info(user_name);
    if (user_info_json == null) {
      message.warning("未找到此玩家", 1);
    } else {
      this.setState({
        use_name: user_name,
        user_info: user_info_json,
        active_card_index: 1,
      });
    }
  }

  // onClick = (e: any) => {
  //   console.log(e);
  // }

  render() {
    return (
      <div className='App'>
        <StartPage onClick={this.set_uers_info}
          is_active={this.state.active_card_index === 0}></StartPage>
        <BaseInfoPage user_info={this.state.user_info}
          is_active={this.state.active_card_index === 1}></BaseInfoPage>
      </div>
    );
  }
}

export default App;

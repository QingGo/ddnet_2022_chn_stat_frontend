import React, { useState } from 'react';
import './App.scss';
import get_user_info, { UserInfo } from './utils/api';
import useCheckMobileScreen from './utils/useCheckMobileScreen';
import StartPage from './pages/StartPage';
import Viewpager from './pages/Viewpager';
import { message, notification } from 'antd';
import BGMPlayer from './components/BGMPlayer';
import classNames from 'classnames';


interface AppState {
  active_card_index: number;
  use_name: string;
  user_info: UserInfo,
}

function App() {
  const [thisState, setState] = useState<AppState>({
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
  });
  const set_uers_info = async (user_name: string) => {
    if (user_name === '') {
      message.error('用户名不能为空');
      return;
    }
    var user_info_json = await get_user_info(user_name);
    if (user_info_json == null) {
      message.warning("未找到此玩家", 1);
      return
    }
    setState({
      use_name: user_name,
      user_info: user_info_json,
      active_card_index: 1,
    });

    notification.info({
      message: `下拉查看更多数据`,
      placement: "bottomRight",
      duration: 3,
    });

  }
  var class_name = classNames({
    "App": !useCheckMobileScreen(),
    "App-Mobile": useCheckMobileScreen()
  });
  return <div className={class_name}>
    <StartPage onClick={set_uers_info}
      is_active={thisState?.active_card_index === 0}></StartPage>
    <Viewpager user_info={thisState?.user_info}></Viewpager>
    <BGMPlayer></BGMPlayer>
  </div >
}

export default App;

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
  user_info?: UserInfo,
}

function App() {
  const [thisState, setState] = useState<AppState>({
    active_card_index: 0,
    use_name: ''
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

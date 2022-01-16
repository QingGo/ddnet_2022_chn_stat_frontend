import React from 'react';
import { UserInfo } from '../../utils/api';
import './card.scss'
import ReactMarkdown from 'react-markdown'
import NativeShare from 'nativeshare'
import { Button, notification } from 'antd';
import useCheckMobileScreen from '../../utils/useCheckMobileScreen';


function FinalCard(props: UserInfo) {
    var onClick: React.MouseEventHandler<HTMLInputElement> = (e) => {
        // 先创建一个实例
        var nativeShare = new NativeShare()
        // 设置分享文案
        nativeShare.setShareData({
            icon: 'https://ddnet.tw/ddnet2.svg',
            link: window.location.href,
            title: '2021 年 DDNet 国服玩家年度报告',
            desc: '你有一份 2021 年 DDNet 年度报告待验收～',
        })

        // 唤起浏览器原生分享组件(如果在微信中不会唤起，此时call方法只会设置文案。类似setShareData)
        try {
            nativeShare.call(e.currentTarget.value)
        } catch (err) {
            // 如果不支持，你可以在这里做降级处理
            console.log(err)
            notification.info({
                message: `浏览器暂不支持`,
                placement: "bottomRight",
                duration: 3,
              });
        }
    }

    var content = `Hi **${props.Name}**~
                **2021** 年真是一趟漫长的旅程，不是吗？
                希望你能在这款游戏中，
                收获到乐趣和朋友～
                `;
    var share_component = <div>
        <Button type="primary" size="large" htmlType="submit"
            value="weibo" onClick={onClick}>
            分享到微博
        </Button>
    </div>
    if (useCheckMobileScreen()) {
        share_component = <div>
            <Button type="primary" size="large" htmlType="submit"
                value="qZone" onClick={onClick}>
                分享到 QQ 空间
            </Button>
            <Button type="primary" size="large" htmlType="submit"
                value="weibo" onClick={onClick}>
                分享到微博
            </Button>
        </div>
    }

    return <div className={"page-card page-card-active card"}>
        <ReactMarkdown>{content}</ReactMarkdown>
        {share_component}
        <div className='badge'>
        <iframe src="https://ghbtns.com/github-btn.html?user=QingGo&repo=ddnet_2022_chn_stat&type=star&count=true" frameBorder="0" scrolling="0" width="150" height="30" title="贡献项目代码"></iframe>
        </div>
    </div>

}

export default FinalCard;
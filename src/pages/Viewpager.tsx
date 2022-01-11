import React, { useRef } from 'react'
import { useSprings, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { useDrag } from 'react-use-gesture'
import clamp from 'lodash.clamp'
import { UserInfo } from '../utils/api';

import Card1 from './cards/Card1';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';


import styles from './styles.module.scss'

const pages = [
    (user_info: UserInfo) => React.createElement(Card1, user_info),
    (user_info: UserInfo) => React.createElement(Card2, user_info),
    (user_info: UserInfo) => React.createElement(Card3, user_info),
]

interface ViewpagerProps {
    user_info: UserInfo,
}

function Viewpager(_props: ViewpagerProps) {
    const index = useRef(0)
    const [ref, { height }] = useMeasure()
    const [props, api] = useSprings(
        pages.length,
        i => ({
            y: i * height,
            display: 'block',
        }),
        [height]
    )
    const bind = useDrag(({ active, movement: [, my], direction: [, yDir], distance, cancel }) => {
        if (active && distance > height / 4) {
            index.current = clamp(index.current + (yDir > 0 ? -1 : 1), 0, pages.length - 1)
            cancel()
        }
        api.start(i => {
            if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
            const y = (i - index.current) * height + (active ? my : 0)
            return { y, display: 'block' }
        })
    })
    return (
        <div ref={ref} className={styles.wrapper}>
            {props.map(({ y, display }, i) => (
                <animated.div className={styles.page} {...bind()} key={i} style={{ display, y }}>
                    {pages[i](_props.user_info)}
                </animated.div>
            ))}
        </div>
    )
}

export default function App(_props: ViewpagerProps) {
    return (
        // 不然拖拽区域不够大
        <div className={"page-card"}>
            <Viewpager user_info={_props.user_info} />
        </div>
    )
}

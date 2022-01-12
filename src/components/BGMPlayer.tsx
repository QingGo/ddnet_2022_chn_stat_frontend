import React from 'react';


class BGMPlayer extends React.Component {
    audio = new Audio(process.env.PUBLIC_URL + "/ssu_bgm.mp3");

    componentDidMount() {
        setInterval(() => {
            if (this.audio.paused){
                this.audio.play();
            }
        }, 200);
    }

    render() {
        return null;
    }
}

export default BGMPlayer;
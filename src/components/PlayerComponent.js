import ReactAudioPlayer from 'react-audio-player';



const Player = ({ url }) => {
  

  return (
    <div style={{display: 'none'}}>
            <ReactAudioPlayer
                src='../assets/Foreigner_That_Was_Yesterday.mp3'
                autoPlay
                controls
                preload="none"
            />
    </div>
  );
};

export default Player;
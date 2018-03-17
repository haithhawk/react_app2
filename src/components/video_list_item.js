import React from 'react';

// const VideoListItem = props => {
//   const video = props.video; the same as below

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video_list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl} />
        </div>
        <div className="media-body">{video.snippet.title}</div>
        <div className="media-heading" />
      </div>
    </li>
  );
};
export default VideoListItem;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CheckBoxLabel from '../StyledComponents/CheckBoxLabel';
import CheckBox from '../StyledComponents/CheckBox';
import ENV from '../../../env';

const axios = require('axios');

const apiServer = ENV.apiServer;

const PostData = (userId, videoId, URL) => {
  axios.post(`${apiServer}/mylist/${URL}`, {
    params: {
      userId: `${userId}`,
      videoId,
    },
  });
};
const MylistBtn = ({ userId, thumbNailId }) => {
  const [Clicked, setClicked] = useState(false);
  const [mylist, setMylist] = useState(false);
  const contentText = mylist ? '✔ 찜한 컨텐츠 취소' : '✚ 내가 찜한 컨텐츠';

  useEffect(() => {
    if (mylist && Clicked) PostData(userId, thumbNailId, 'mylist-video');
    if (!mylist && Clicked) PostData(userId, thumbNailId, 'unMylist-video');
  }, [mylist]);

  const handleMylistClicked = () => {
    if (!Clicked) setClicked(true);
    setMylist(!mylist);
  };

  return (
    <div>
      <CheckBox
        id={`${thumbNailId}jjim`}
        type="checkbox"
        onClick={handleMylistClicked}
      />
      <CheckBoxLabel htmlFor={`${thumbNailId}jjim`}>
        {contentText}
      </CheckBoxLabel>
    </div>
  );
};

MylistBtn.propTypes = {
  userId: PropTypes.string.isRequired,
  thumbNailId: PropTypes.string.isRequired,
};

export default MylistBtn;
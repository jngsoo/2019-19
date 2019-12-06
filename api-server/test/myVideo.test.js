const { Myvideos } = require('../models');

const uid = '109077139045642010735';
const vid = 6;

const registerMyVideo = async (userId, videoId) => {
  const created = await Myvideos.registerMyVideo(userId, videoId);
  console.log(created);
  return created;
};

const deregisterMyVideo = async (userId, videoId) => {
  const created = await Myvideos.deregisterMyVideo(userId, videoId);
  return created;
};

// console.log(registerMyVideo(uid, vid));
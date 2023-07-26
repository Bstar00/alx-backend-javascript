const uploadPhoto = function(filename) {
  return Promise.reject(new Error(`${filename} cannot be processed`));
};

export default uploadPhoto;

const posts = [
  { id: '1', name: 'This is post 1' },
  { id: '2', name: 'This is post 2' },
];

const getPosts = () => {
  let outPut = '';
  setTimeout(() => {
    posts.forEach((post, index) => {
      outPut += `${index} ` + JSON.stringify(post) + '\n';
    });
    console.log(outPut);
  }, 1000);
};

const createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = posts.length !== 3;
      if (!error) {
        resolve();
      } else {
        reject('Error: Create a new post failed');
      }
    }, 2000);
  });
};

createPost({ id: '3', name: 'This is post 3' }).then(getPosts);

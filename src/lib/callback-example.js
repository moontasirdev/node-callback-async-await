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
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('Error: Create a new post failed');
      }
    }, 2000);
  });
};

// createPost({ id: '3', name: 'This is post 3' }).then(getPosts);

// let result = createPost({ id: '3', name: 'This is post 3' });
// await createPost({ id: '3', name: 'This is post 3' });
// getPosts();

const executeFinalResult = async () => {
  try {
    await createPost({ id: '3', name: 'This is post 3' });
    await createPost({ id: '4', name: 'This is post 4' });
    await createPost({ id: '5', name: 'This is post 5' });

    // const call1 = createPost({ id: '3', name: 'This is post 3' });
    // const call2 = createPost({ id: '4', name: 'This is post 4' });
    // const call3 = createPost({ id: '5', name: 'This is post 5' });

    // await Promise.all([call1, call2, call3]);

    getPosts();
  } catch (err) {
    console.dir(err);
  }
};

executeFinalResult().then(() => {
  console.dir('done');
});

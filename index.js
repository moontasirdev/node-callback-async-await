const posts = [
  { id: '1', name: 'This is post 1' },
  { id: '2', name: 'This is post 2' },
];

const getPost = () => {
  let outPut = '';
  setTimeout(() => {
    posts.forEach((post, index) => {
      outPut += `${index} ` + JSON.stringify(post) + '\n';
    });
    console.log(outPut);
  }, 1000);
};

const createPost = (post, callback) => {
  console.dir('I am here');
  setTimeout(() => {
    console.dir('I am executing');
    posts.push(post);
    console.dir('I am done');
    callback();
  }, 2000);
  console.dir('function ends!');
};

createPost({ id: '3', name: 'This is post 3' }, getPost);
console.dir('calling get posts!');
// getPost();

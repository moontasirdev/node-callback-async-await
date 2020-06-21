const posts = [
  { id: "1", name: "This is post 1" },
  { id: "2", name: "This is post 2" },
];

const getPost = () => {
  let outPut = "";
  setTimeout(() => {
    posts.forEach((post, index) => {
      outPut += `${index} ` + JSON.stringify(post) + "\n";
    });
    console.log(outPut);
  }, 1000);
};

const createPost = (post) => {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
};

createPost({ id: "3", name: "This is post 3" });
getPost();

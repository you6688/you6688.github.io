var posts=["2025/08/07/这是一篇新的博文-2/","2025/08/07/这是一篇新的博文-1/","2025/08/07/这是一篇新的博文/","2025/08/07/这是黄先生的篇新的博文/","2025/08/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
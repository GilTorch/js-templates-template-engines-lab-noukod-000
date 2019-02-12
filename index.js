function createPost(){
  const author=document.getElementById("postAuthor");
  const title=document.getElementById("postTitle");
  const body=document.getElementById("postBody");
  const pageTemplate=document.getElementById("page-template").innerHTML

  pageTemplateFn=_.template(pageTemplate);

  const postTemplate=document.getElementById("post-template").innerHTML;
  postTemplateFn=_.template(postTemplate);

  let postTemplateHTML=postTemplateFn({postTitle:title,postAuthor:author})

  let pageTemplateHTML=pageTemplateFn({post:postTemplateHTML});
}

function postComment(){
  const commenterName=document.getElementById("commenterName");
  const commenterText=document.getElementById("commenterText");

  const commentTemplate=document.getElementById("comment-template").innerHTML
  const commentTemplateFn=_.template(commentTemplate);
}

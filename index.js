function createPost(e){
  e.preventDefault();
  const author=document.getElementById("postAuthor");
  const title=document.getElementById("postTitle");
  const body=document.getElementById("postBody");
  const pageTemplate=document.getElementById("page-template")

  pageTemplateFn=_.template(pageTemplate);

  const postTemplate=document.getElementById("post-template");
  postTemplateFn=_.template(postTemplate);

  let postTemplateHTML=postTemplateFn({postTitle:title,postAuthor:author})

  let pageTemplateHTML=pageTemplateFn({post:postTemplateHTML});
  
}

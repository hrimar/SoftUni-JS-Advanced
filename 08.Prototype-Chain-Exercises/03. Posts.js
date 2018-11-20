function posts() { // 100/100 -- delete the first variant down!
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\n` + `Content: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let string =  super.toString() + `\nRating: ${this.likes - this.dislikes}`;
            if(this.comments.length > 0){
                string += "\nComments:";
                this.comments.forEach(c => string += `\n * ${c}`);
            }

            return string;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

function f(){ // 88/100
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return 'Post: ' + this.title + '\n' + 'Content: ' + this.content;
        }
    }

    class SocialMediaPost extends  Post{
        constructor(title, content, likes, dislikes){
            super(title, content);
            this.likes = +likes;
            this.dislikes = +dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let result = super.toString();
            result += '\n' ;
            result += `Rating: ${this.likes- this.dislikes}`;

            if(this.comments.length!==0){
                result  += '\nComments:\n';
                this.comments.forEach(c=> result+= `\n* ${c}`);
            }

            return result;
        }
    }

    class BlogPost extends Post{
        constructor(title, content, views){
            super(title, content);
            this.views = +views;
        }

        view(){
            this.views++;
        }
        toString(){
            return super.toString() + '\nViews: ' + this.views;
        }
    }
    return {Post, SocialMediaPost, BlogPost};
}

let post = new Post("Post", "Content");

//console.log(post.toString());

// Post: Post
// Content: Content

let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!
console.log('');
let blog = new BlogPost('M', 'Lemuria', 55)
console.log(blog.toString());




























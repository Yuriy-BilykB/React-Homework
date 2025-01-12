import {IPost} from "../../models/IPost.ts";
import {ApiService} from '../../services/api-service.ts'
import {useEffect, useState} from "react";
import PostComponent from "./PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        ApiService.getPosts()
            .then((data) => {
                setPosts(data.posts);
            });
    }, [])
    return (
        posts.map((post: IPost) => <PostComponent key={post.id} post={post} />)
    )
}
export default PostsComponent;
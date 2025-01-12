import {FC} from "react";
import {IPost} from "../../models/IPost.ts";
type PostComponentProps = {
    post: IPost;
};
const PostComponent: FC<PostComponentProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    )
}
export default PostComponent
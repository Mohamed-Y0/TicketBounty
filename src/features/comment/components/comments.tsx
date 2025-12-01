import { CardCompact } from "@/components/card-compact";
import CommentCreateForm from "@/features/comment/components/comment-create-form";
import CommentItem from "@/features/comment/components/comment-item";
import { getComments } from "@/features/comment/queries/get-comments";

type CommentsProps = {
  ticketId: string;
};

const Comments = async ({ ticketId }: CommentsProps) => {
  const comments = await getComments(ticketId);

  return (
    <>
      <CardCompact
        title="Create Comment"
        description="A new comment will be created"
        content={<CommentCreateForm ticketId={ticketId} />}
      />
      <div className="ml-8 flex flex-col gap-y-2">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default Comments;

import { format, formatDistanceToNow } from "date-fns";

import { ptBR } from "date-fns/locale";
import { useState } from "react";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Projeto Muito Bacana"]);

  const [newCommentText, setNewCommentText] = useState("");

  const DatePublishedFormat = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateComment() {
    event.preventDefault();
    setComments([...comments, newCommentText]);

    setNewCommentText("");

    console.log(newCommentText);
  }

  function handleCommentChange() {
    setNewCommentText(event.target.value);
  }

  function deleteComment(comment) {
    console.log(`Delete your comment ${comment}`);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

          
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p >{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p >
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="deixe um comentario"
          name="comment"
          onChange={handleCommentChange}
          value={newCommentText}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}

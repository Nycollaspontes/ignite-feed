import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Nycollas Pontes</strong>
              <time
                title="11 de maio as 08:13h "
                dateTime="2022-11-23 08:13:30"
              >
                Publicado ha 1h
              </time>
            </div>
            <button title="Deletar comentario" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span></span>
            20
          </button>
        </footer>
      </div>
    </div>
  );
}

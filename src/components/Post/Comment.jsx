import { ThumbsUp, Trash } from "phosphor-react";

import styles from "./Comment.module.css"

export function Comment() {
  <div className={styles.comment}>
    <img src="https://github.com/nycollaspontes" alt="" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Nycollas Pontes</strong>
            <time title="11 de maio as 08:13h " dateTime="2022-11-23 08:13:30">
              Publicado ha 1h
            </time>
          </div>
          <button title="Deletar comentario">
            <Trash />
          </button>
        </header>
        <p>Muito bom Dev!!</p>
      </div>
      <footer>
        <button>
            <ThumbsUp />
        </button>
      </footer>
    </div>
  </div>;
}

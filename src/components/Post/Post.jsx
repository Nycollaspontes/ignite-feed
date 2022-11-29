import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post({}) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https:github.com/nycollaspontes.png"
          />
          <div className={styles.authorInfo}>
            <strong> Nycollas Pontes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio as 08:13h " dateTime="2022-11-23 08:13:30">
          Publicado ha 1h
        </time>
      </header>

      <div className={styles.content}>
        <p> Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifolio. É um projeto que
          fiz no NLW Return, evento da Rocketseat. O nome do projeto é
          DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="deixe um comentario" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <Comment />
      <Comment />
    </article>
  );
}

import { Header } from "./components/Header/Header";
import { Post } from "./components/Post/Post";
import { Sidebar } from "./components/Sidebar/Sidebar";


import styles from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Nycollas Pontes" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet lacus velit, vitae pharetra magna sollicitudin et. Nunc venenatis magna nec elit tincidunt maximus. Pellentesque laoreet est id ante varius suscipit. Duis sed congue felis." />
        </main>
      </div>
    </>
  );
}

export default App;

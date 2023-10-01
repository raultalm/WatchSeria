import style from "./style.module.css";

export function Footer() {

  return <div className={style.container}>
    <h4>Credits</h4>
    <span><a target="_blank" rel="noopener noreferrer" href="https://icons8.com/icon/1427/film-reel">Film</a> icon by <a target="_blank" rel="noopener noreferrer" href="https://icons8.com">Icons8</a></span>
    <span>Explore my code on <a target="_blank" rel="noopener noreferrer" href="https://github.com/raultalm/WatchSeria" style={{color: '#6f42c1'}}>GitHub</a> !</span>
  </div>
}
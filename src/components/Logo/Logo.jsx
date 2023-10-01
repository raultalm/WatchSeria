import style from "./style.module.css"

export function Logo({ img, title, subtitle }) {

    return <>
        <div className={style.logo_container}>
            <img className={style.img} src={img} alt="Logo" />
            <div className={style.title}>{title}</div>
        </div>
        <div className={style.subtitle}>{subtitle}</div>
    </>;
}
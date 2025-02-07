import style from "../styles/Banner.module.css";

function Banner() {
  return (
    <div className={style.banner}>
      <h2 className={style.bannerText}>
        Your finances should work for you, not the other way around. This app is
        your partner in smarter decisions, helping you stay organized, plan
        ahead, and build confidence in every dollar you spend.
      </h2>
    </div>
  );
}

export default Banner;

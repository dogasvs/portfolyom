import Image from "next/image";
import Lookscout from "@/assets/img/ortakProje.png";
import Dine from "@/assets/img/dinerestaurant.png";
import Bahsis from "@/assets/img/bahsishesaplama.png";
import Quiz from "@/assets/img/quizPage.png";

export default function MyProjects() {
  return (
    <>
      <h1 className="title">Projelerim</h1>
      <div className="projelerim">
        <div className="proje-item">
            <Image src={Lookscout} width={600} height={400} alt="Lookscout" priority />
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="https://ortak-proje.vercel.app/" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="https://github.com/dogasvs/ortakProje" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Lookscout</h4>
          <p>HTML CSS</p>
        </div>

        <div className="proje-item">
            <Image src={Dine} width={600} height={400} alt="Dine" priority />
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="https://dine-restaurant-react-sigma.vercel.app/" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="https://github.com/dogasvs/dinerestaurant" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Dine Restaurant</h4>
          <p>HTML CSS</p>
        </div>

        <div className="proje-item">
            <Image src={Bahsis} width={600} height={400} alt="Bahşiş Hesaplama" priority />
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="https://bahsis-hesaplama.vercel.app/" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="https://github.com/dogasvs/bahsishesaplama" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Bahşiş Hesaplama</h4>
          <p>HTML CSS JavaScript</p>
        </div>

        <div className="proje-item">
            <Image src={Quiz} width={600} height={400} alt="Quiz" priority />
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="https://quiz-page-react-tau.vercel.app/" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="https://github.com/dogasvs/QuizPageReact" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>QuizPage</h4>
          <p>HTML CSS React</p>
        </div>
      </div>
    </>
  );
}

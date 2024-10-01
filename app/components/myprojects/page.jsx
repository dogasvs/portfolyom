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
          <a href="https://ortak-proje.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={Lookscout} width={600} height={400} alt="Lookscout" priority />
          </a>
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="#" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="#" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Lookscout</h4>
          <p>HTML CSS</p>
        </div>

        <div className="proje-item">
          <a href="https://dinerestaurant.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={Dine} width={600} height={400} alt="Dine" priority />
          </a>
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="#" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="#" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Dine Restaurant</h4>
          <p>HTML CSS</p>
        </div>

        <div className="proje-item">
          <a href="https://bahsis-hesaplama.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Image src={Bahsis} width={600} height={400} alt="Bahşiş Hesaplama" priority />
          </a>
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="#" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="#" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>Bahşiş Hesaplama</h4>
          <p>HTML CSS JavaScript</p>
        </div>

        <div className="proje-item">
          <a href="https://quiz-page-react-tau.vercel.app/" target="_blank">
            <Image src={Quiz} width={600} height={400} alt="Quiz" priority />
          </a>
            <div className="overlay">
              <div className="view">
                <a className="viewProject" href="#" target="_blank">Projeyi Görüntüle</a>
                <a className="viewCode" href="#" target="_blank">Kodu Görüntüle</a>
              </div>
            </div>
          <h4>QuizPage</h4>
          <p>HTML CSS React</p>
        </div>
      </div>
    </>
  );
}

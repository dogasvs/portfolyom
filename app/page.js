import Ben from "@/assets/img/benmin.png"
import Dekor from "@/svgs/dekor/page";
import Image from "next/image";

export default function Home() {
  return (
    <div className="forDekor">
      <Dekor className="dekor" />
    <div className="homeContainer">
      <div className="inform">
        <h1>
          Merhaba 
          Ben 
          <span>Doğa Savaş</span>
        </h1>
        <h3>Frontend Developer</h3>
        <p>Ben Doğa, yenilikçi ve öğrenmeye açık bir Junior Frontend Developer'ım. Kullanıcı dostu ve modern web siteleri oluşturma konusunda tutkuluyum. Her geçen gün yeteneklerimi geliştirmek ve yeni teknolojiler öğrenmek için çalışıyorum. Heyecan verici projelerde birlikte çalışmak için sabırsızlanıyorum!</p>
      </div>
      <Image src={Ben.src} width={600} height={700} alt="ben" priority />
    </div>
    <hr />
    </div>
  );
}

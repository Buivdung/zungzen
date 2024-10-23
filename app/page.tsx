import Image from "next/image";

export default function Home() {
  return (
    <div>
      Dung den
      <Image src={"/images/lam.jpg"} width={500} height={1000} alt=""/>
    </div>
  );
}

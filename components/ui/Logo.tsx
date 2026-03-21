import Image from "next/image";


export default function Logo() {
  return (
    <Image 
      src="/logo.svg"
      width={400}
      height={100}
      alt="Logo CashTrackr"
      priority 
      className="w-full"/>
  )
}

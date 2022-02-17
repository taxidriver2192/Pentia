import Link from "next/link";
import Image from "next/image";

import nr1 from "../images/nr1.png"
export default function Footer() {
  return (
    <footer>
      <Image src={nr1} height={72} width={74} />
      <p>Pentia vinder pris for digital innovation <u>2017</u></p>
    </footer>
  );
}

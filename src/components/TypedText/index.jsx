import { useEffect, useRef } from "react";
import Typed from "typed.js";

import { Span } from "./styled";

const TypedText = ({ strings }) => {
  const element = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Full-Stack",
        "Versátil",
        "Colaborativo",
        "Inovador",
        "Confiável",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1500,
      loop: true,
    }

    typed.current = new Typed(element.current, options);
    return () => typed.current.destroy();
  }, []);

  return <Span ref={element}></Span>
}

export default TypedText;

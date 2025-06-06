import { useGradientText } from "@/animations/useGradientText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import useAnimateButton from "@/animations/animateButton";

gsap.registerPlugin(ScrollTrigger);

interface ContactFoldProps {
  footerRef: React.RefObject<HTMLDivElement>;
}

export default function ContactFold({ footerRef }: ContactFoldProps) {
  const textRef1 = useGradientText();
  const textRef2 = useGradientText();
  const textRef3 = useGradientText();
  // const buttonsRef1 = useRef(null);
  const buttonsRef2 = useRef(null);
  const buttonsRef3 = useRef(null);
  // const spanRef1 = useRef(null);
  const spanRef2 = useRef(null);
  const spanRef3 = useRef(null);
  const contactTrigger = useRef(null);
  const headlineRef = useRef(null);
  // const [email, setEmail] = useState(false);

  // const handleEmailClick = () => {
  //   navigator.clipboard.writeText("hello@samshh.me");
  //   setEmail(true);
  //   setTimeout(() => {
  //     setEmail(false);
  //   }, 3000);
  // };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactTrigger.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse",
        onEnter: () => {
          document.title = "Sam Dacara | Contact";
        },
        onLeaveBack: () => {
          document.title = "Sam Dacara | Projects";
        },
      },
      defaults: { ease: "power3.out", duration: 0.8 },
    });

    tl.fromTo(
      contactTrigger.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1 }
    )
      .fromTo(
        headlineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.5"
      )
      // .fromTo(
      //   buttonsRef1.current,
      //   { y: 25, x: -25, opacity: 0 },
      //   { y: 0, x: 0, opacity: 1, duration: 0.8 },
      //   "-=0.65"
      // )
      .fromTo(
        buttonsRef2.current,
        { y: 25, x: -25, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 0.8 },
        "-=0.65"
      )
      .fromTo(
        buttonsRef3.current,
        { y: 25, x: -25, opacity: 0 },
        { y: 0, x: 0, opacity: 1, duration: 0.8 },
        "-=0.65"
      );
  });

  // useAnimateButton(spanRef1, buttonsRef1);
  useAnimateButton(spanRef2, buttonsRef2);
  useAnimateButton(spanRef3, buttonsRef3);

  return (
    <div
      ref={contactTrigger}
      className="h-full min-h-screen px-4 py-4 max-w-[1280px] mx-auto flex flex-col justify-center items-start select-none relative"
    >
      <div className="flex flex-grow flex-col justify-center items-start gap-[1.5rem] md:w-1/2">
        <div ref={headlineRef}>
          <h4 className="font-thin font-serif text-[#535353] flex items-center gap-[0.25rem]">
            <Icon icon="mdi:location" /> Davao City | Philippines
          </h4>
          <h1 className="text-[2.5rem] sm:text-[3.3rem]">
            Let's <span ref={textRef1}>connect</span> and{" "}
            <span ref={textRef2}>create</span> something{" "}
            <span ref={textRef3}>amazing</span>
            <span className="text-[#333333]">.</span>
          </h1>
        </div>
        <div className="flex justify-start flex-wrap items-start gap-[1rem]">
          {/* <Button ref={buttonsRef1} onClick={handleEmailClick} disabled={email}>
            <span ref={spanRef1}>{email ? "email copied!" : "hello@samshh.me"}</span>
          </Button> */}
          <a
            href="https://github.com/Samshh/"
            target="_blank"
            rel="noopener"
            title="GitHub"
          >
            <Button ref={buttonsRef2}>
              <span ref={spanRef2}>
                <Icon className="text-[24px]" icon="mdi:github" />
              </span>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/samshh/"
            target="_blank"
            rel="noopener"
            title="LinkedIn"
          >
            <Button ref={buttonsRef3}>
              <span ref={spanRef3}>
                <Icon className="text-[24px]" icon="mdi:linkedin" />
              </span>
            </Button>
          </a>
        </div>
      </div>
      <footer
        ref={footerRef}
        className="w-full max-w-[1280px] flex flex-col md:justify-between md:flex-row items-center"
      >
        <p className="font-normal text-center text-[1rem] text-[#535353] font-serif">
          <span className="font-special text-[1.75rem] mr-[0.5rem]">
            Samuel
          </span>
          <em> | © All Rights Reserved</em>
        </p>
        <em className="font-normal text-[1rem] text-[#535353] font-serif">
          Powered by Vercel
        </em>
      </footer>
    </div>
  );
}

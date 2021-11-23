import { Fragment, useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Image from "next/image";
import { LayoutHome } from "../components/layout";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import Burbujas from "../components/burbujas/Burbujas";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { width } = useWindowDimensions();
  const [stateMenu, setStateMenu] = useState(false);
  const [stateExplora, setStateExplora] = useState(false);

  function logit() {
    setScrollY(window.pageYOffset);
    console.log(new Date().getTime());
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  return (
    <LayoutHome>
      <div className="">
        <Controller>
          <div>
            <Scene triggerHook="onLeave" duration={24000} pin>
              {(progress) => (
                <div className={`h-screen ${scrollY > 24000 && "fixed-i"}`}>
                  <div className="grid h-screen w-full relative">
                    <div className="grid h-screen max-h-screen w-full relative items-center justify-center animate__animated animate__fadeIn">
                      <Timeline
                        totalProgress={progress}
                        paused
                        target={
                          <Fragment>
                            <div className="absolute h-48 w-48 bg-first-color rounded-full left-2/4 transform-center opacity-25" />
                            <div className="absolute h-32 w-32 bg-first-color opacity-30 rounded-full left-2/4 transform-center" />
                            <div className="absolute left-2/4 transform-center ">
                              <div className="w-full h-80">
                                <Image
                                  src="/img/mapa.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div className="fixed bg-eigth-color rounded-full z-10 left-2/4 transform-center" />
                            <div className="absolute w-full h-44 bottom-0 z-20">
                              {/* <svg className="Wave" viewBox="0 0 12960 1120">
                                <path d="M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z">
                                  <animate
                                    dur="5s"
                                    repeatCount="indefinite"
                                    attributeName="d"
                                    values="
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z;
              M9720,0C8100,0,8100,319,6480,319S4860,0,3240,0,1620,320,0,320v800H12960V320C11340,320,11340,0,9720,0Z;
              M9720,320C8100,320,8100,0,6480,0S4860,320,3240,320,1620,0,0,0V1120H12960V0C11340,0,11340,320,9720,320Z
            "
                                  />
                                </path>
                              </svg> */}
                              <svg
                                className="Wave"
                                xmlns="http://www.w3.org/2000/svg"
                                width="5000"
                                height="2148.465"
                                viewBox="0 0 5000 2148.465"
                              >
                                <path
                                  d="M6498.256,3843.24c-243.477,91.282-638.074-37.345-898.054-29.046-111.419,0-165.073,74.688-313.633,62.239-78.408-4.146-119.674-124.476-222.844-128.622-94.911,0-144.431,116.173-226.963,120.323-90.786,0-169.193-62.239-243.476-66.387-309.5-20.748-606.625,12.446-903.75,24.9-210.46,8.3-383.782-62.235-581.863-53.941-181.572,4.151-309.5,45.643-519.963,24.9s-363.153,33.193-573.612,41.491c-189.835,4.147-313.629-91.281-515.843,12.446V5896.276h5000Z"
                                  transform="translate(-1498.256 -3747.812)"
                                  fill="#2f88c0"
                                  opacity="1"
                                />
                              </svg>
                            </div>
                            <div className="absolute w-900 left-2/4 transform-center z-40">
                              <div className="w-full h-96">
                                <Image
                                  src="/img/mapaCircle.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div className="absolute w-900 left-2/4 transform-center z-40">
                              <div className="w-full h-96">
                                <Image
                                  src="/img/mapa.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div className="absolute w-32 bottom-20 left-96  z-40">
                              <div className="w-full h-32 animate-bounce-down">
                                <Image
                                  src="/img/buzito.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div className="fixed w-full left-2/4 transform-center  z-40">
                              <Burbujas />
                            </div>
                            <div className="absolute w-1000 left-2/4 transform-center z-40">
                              <div className="w-full h-96">
                                <Image
                                  src="/img/mapaPoints.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute w-110 h-110 bottom-20 z-40"
                              style={{ left: "140px" }}
                            >
                              <div className="absolute w-32 h-52 bottom-28 right-0 animate-arrowSmall">
                                <Image
                                  src="/img/arrowSmall.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                              <div className="absolute w-96 h-28 left-0 bottom-0 animate-arrowBig">
                                <Image
                                  src="/img/arrowBig.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                              <div className="absolute w-96 h-36 top-0 animate-arrowDuo">
                                <Image
                                  src="/img/arrowDuo.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute w-32 bottom-32 z-40"
                              style={{ left: "600px" }}
                            >
                              <div className="w-full h-96 ">
                                <Image
                                  src="/img/mapaPeru.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute w-28 bottom-56 z-40"
                              style={{ left: "475px" }}
                            >
                              <div className="w-full h-96 ">
                                <Image
                                  src="/img/explora.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div
                              className="absolute w-28 h-28  bottom-96 z-50 cursor-pointer"
                              style={{ left: "360px" }}
                            >
                             <div className="absolute w-14 h-14 bg-tenth-color rounded-full left-2/4 top-2/4 transform-centerXY z-50 opacity-80 flex items-center justify-center ">
                               <span className="w-14 h-14 border-white rounded-full bg-transparent border-4 radar"></span>
                             </div>
                              <div className="absolute w-20 h-20 bg-white rounded-full left-2/4 top-2/4 transform-centerXY"></div>
                              <div className="absolute w-28 h-28 bg-white rounded-full opacity-50 "></div>
                              {/* <div className="w-20 h-20 bg-white"></div> */}
                            </div>
                          </Fragment>
                        }
                      >
                        <Tween
                          from={{ opacity: "1", y: "0%" }}
                          to={{ opacity: "0", y: "-300%" }}
                        >
                          <div
                            className="absolute left-2/4 transform-center "
                            style={{ marginBottom: "220px" }}
                          >
                            <div className="h-20 w-52">
                              <Image
                                src="/img/mapade.svg"
                                layout="fill"
                                alt="mapa"
                              />
                            </div>
                          </div>
                        </Tween>
                        <Tween
                          from={{ width: "192px", height: "192px" }}
                          to={{ width: "600px", height: "600px" }}
                          target={0}
                        />
                        <Tween
                          from={{ width: "128px", height: "128px" }}
                          to={{ width: "0px", height: "0px" }}
                          target={1}
                        />
                        <Tween
                          from={{ width: "434.5px" }}
                          to={{ width: "800px" }}
                          target={2}
                        />

                        <Tween from={{ opacity: "1" }} to={{ opacity: "0" }}>
                          <div className="z-10 ">
                            <h1 className="component-font text-6xl color-third-color ">
                              COSTA A COSTA
                            </h1>
                          </div>
                        </Tween>
                        <Tween from={{ opacity: "0" }} to={{ opacity: "0.7" }}>
                          <div className="absolute top-10 left-10 w-20 h-20 z-50">
                            <Image
                              src="/img/logo.svg"
                              layout="fill"
                              alt="mapa"
                            />
                          </div>
                        </Tween>
                        <Tween from={{ opacity: "0" }} to={{ opacity: "0.7" }}>
                          <div className="absolute top-10 right-14 w-32 h-14 z-50 cursor-pointer ">
                            <Image
                              src="/img/btnMenu.png"
                              layout="fill"
                              alt="mapa"
                              onClick={() => setStateMenu(!stateMenu)}
                            />
                            <div
                              className={`flex component-font absolute gap-10 color-third-color  py-6 animate__animated ${
                                stateMenu
                                  ? "animate__backInRight "
                                  : "animate__backOutRight "
                              } `}
                              style={{ left: "-420px" }}
                            >
                              <a
                                href="google.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                ABOUT
                              </a>
                              <a
                                href="google.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                CREDITS
                              </a>
                              <a
                                href="google.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                TOMA ACCIÓN
                              </a>
                              <a
                                href="google.com"
                                target="_blank"
                                rel="noreferrer"
                              >
                                C2C
                              </a>
                            </div>
                          </div>
                        </Tween>
                        <Tween from={{ opacity: "0" }} to={{ opacity: "0.7" }}>
                          <div className="absolute bottom-10 left-14 w-32 h-14 z-50 cursor-pointer">
                            <Image
                              src="/img/btnExplora.png"
                              layout="fill"
                              alt="mapa"
                              onClick={() => setStateExplora(!stateExplora)}
                            />
                            <div
                              className={`flex flex-col component-font absolute gap-10 px-6 color-third-color  animate__animated ${
                                stateExplora
                                  ? "animate__backInUp "
                                  : "animate__backOutDown "
                              } `}
                              style={{ top: "-230px" }}
                            >
                              <div className="flex gap-4 items-center">
                                <span className="w-3 h-3 bg-third-color rounded-full"></span>
                                <a
                                  href="google.com"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  PERÚ
                                </a>
                              </div>
                              <div className="flex gap-4 items-center">
                                <span className="w-3 h-3 bg-third-color rounded-full"></span>
                                <a
                                  href="google.com"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  COLOMBIA
                                </a>
                              </div>
                              <div className="flex gap-4 items-center">
                                <span className="w-3 h-3 bg-third-color rounded-full"></span>
                                <a
                                  href="google.com"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INDONESIA
                                </a>
                              </div>
                              <div className="flex gap-4 items-center">
                                <span className="w-3 h-3 bg-third-color rounded-full"></span>
                                <a
                                  href="google.com"
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  INDIA
                                </a>
                              </div>
                            </div>
                          </div>
                        </Tween>
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center">
                              <h1 className="text-8xl color-third-color z-10 flex-1 tracking-widest">
                                Explora
                              </h1>
                              <div className="flex-1 text-4xl color-third-color">
                                <p>comunidades de pesca </p>
                                <p>de pequeña escala</p>
                                <p>alrededor del mundo </p>
                                <p>a través de la imaginación</p>
                                <p>de sus jovenes. </p>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween
                          to={{ width: "600px", height: "600px" }}
                          target={1}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center">
                              <h1 className="text-7xl color-third-color z-10 flex-1 tracking-widest">
                                El océano
                              </h1>
                              <div className="flex-1 text-4xl color-third-color">
                                <p>hace posible la vida</p>
                                <p>en la tierra.</p>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ x: "300%", opacity: "0" }}
                            to={{ x: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>

                        <Tween
                          from={{ width: "0px", height: "0" }}
                          to={{ width: width, height: width }}
                          target={3}
                        />
                        <Tween
                          from={{ y: "100%" }}
                          to={{ y: "-100%" }}
                          target={4}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-30 items-end">
                              <div className="flex-1">
                                <div className="h-40 w-full relative">
                                  <Image
                                    src="/img/mapa.svg"
                                    layout="fill"
                                    alt="mapa"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 text-4xl color-third-color  ">
                                <div className="text-9xl">94%</div>
                                <div className="text-white">
                                  <p>de la vida del planeta</p>
                                  <p>existe dentro</p>
                                  <p>del oceano.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ x: "-300%", opacity: "0" }}
                            to={{ x: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ y: "-300%" }} target={4} />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-30 items-center">
                              <div className="flex-1 flex items-center justify-center">
                                <div className="h-80 w-80 relative">
                                  <Image
                                    src="/img/bacterias.svg"
                                    layout="fill"
                                    alt="mapa"
                                  />
                                </div>
                              </div>
                              <div className="flex-1 text-4xl">
                                <div className="text-white">
                                  <p>El fitoplancton marino</p>
                                  <p>produce del</p>
                                </div>
                                <div className="text-8xl color-third-color">
                                  50 al 80%
                                </div>
                                <div className="text-white">
                                  <p>del oxígeno de la tierra.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ scale: "0", opacity: "0" }}
                            to={{ scale: "1", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ y: "100%" }} target={4} />
                        {/* <Tween
                          to={{ backgroundColor : "#def0f0"}}
                          target={3}
                        /> */}
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={5}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 items-center">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="text-9xl text-white">40%</div>
                                <div className="text-white">
                                  <p>de la población mundial</p>
                                  <p>vive a menos de</p>
                                  <p>100km</p>
                                  <p>de la costa.</p>
                                </div>
                                <div className="color-third-color">
                                  <p>Estas dinámicas críticas</p>
                                  <p>están en peligro</p>
                                  <p>por las acciones humanas.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{x: "300%", rotation: 180, opacity: "0" }}
                            to={{x: "0%", rotation: 360, opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ opacity: "0" }} target={5} />
                        <Tween to={{ backgroundColor: "#ff9e9b" }} target={3} />
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={6}
                        />
                        <Tween to={{ y: "-100%" }} target={4} />
                        <Tween
                          from={{ x: "300%", opacity: "0" }}
                          to={{ x: "0%", opacity: "1" }}
                          target={7}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 items-center">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p>
                                    solo el{" "}
                                    <span className="text-6xl text-white">
                                      7.5%
                                    </span>{" "}
                                    del océano
                                  </p>
                                  <p>
                                    está protegido y solo{" "}
                                    <span className="text-6xl text-white">
                                      5%
                                    </span>
                                  </p>
                                  <p>ha sido explorado</p>
                                  <p>bajo la superficie.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ x: "-300%", opacity: "0" }} target={7} />
                        <Tween to={{ y: "-300%" }} target={4} />
                        <Tween
                          from={{ y: "300%", opacity: "0" }}
                          to={{ y: "0%", opacity: "1" }}
                          target={8}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 items-center">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p>Gran parte</p>
                                  <p>de la biodiversidad</p>
                                  <p>del océano</p>
                                  <p>es desconocida.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ y: "-500%" }} target={4} />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 items-center">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="text-white">
                                  <p>Se descubren</p>
                                  <p className="color-nineth-color text-7xl">
                                    2000
                                  </p>
                                  <p>nuevas especies</p>
                                  <p>en el mar</p>
                                  <p>cada año.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ y: "300%", opacity: "1" }} target={8} />
                        <Tween to={{ y: "300%" }} target={4} />
                        <Tween to={{ backgroundColor: "#a6d7e6" }} target={3} />
                        <Tween to={{ opacity: "0" }} target={6} />
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={9}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 ">
                              <div className="flex-1">
                                <p className="text-black text-6xl">
                                  Los Hope Spots
                                </p>
                              </div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p>están identificados</p>
                                  <p>científicamente</p>
                                  <p>como áreas críticas</p>
                                  <p>para la salud del océano</p>
                                  <p>que necesitan</p>
                                  <p>una protección básica</p>
                                  <p>o mayor.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ x: "300%", opacity: "0" }}
                            to={{ x: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ scale: "2.5", x: "-40%" }} target={9} />
                        <Timeline
                          target={
                            <div className="flex absolute  w-1000 left-2/4 transform-center z-40 ">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p className="text-5xl">
                                    Pueden ser grandes,
                                  </p>
                                  <p className="text-2xl">
                                    pueden ser pequeños,
                                  </p>
                                  <p>pero todos brindan</p>
                                  <p>esperanza.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ x: "-300%", opacity: "0" }}
                            to={{ x: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween
                          to={{ scale: "3.5", x: "-100%", y: "-10%" }}
                          target={9}
                        />
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={11}
                        />

                        <Tween
                          from={{ opacity: "0", x: "-50%" }}
                          to={{ opacity: "1", x: "0%" }}
                          target={10}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 ">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p className="text-white text-6xl">
                                    La corriente
                                  </p>
                                  <p className="text-white text-6xl">
                                    de Humboldt
                                  </p>
                                  <p>crea uno de los más grandes</p>
                                  <p>y diversos ecosistemas</p>
                                  <p>marinos en el planeta.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{rotation:180, x: "300%", opacity: "0" }}
                            to={{rotation:360, x: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween to={{ opacity: "0" }} target={10} />
                        <Tween
                          to={{ scale: "2.3", x: "-85%", y: "-10%" }}
                          target={11}
                        />
                        <Tween
                          to={{ scale: "9", x: "-250%", y: "-40%" }}
                          target={9}
                        />
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={12}
                        />
                        <Tween
                          from={{ opacity: "0" }}
                          to={{ opacity: "1" }}
                          target={13}
                        />
                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 ">
                              <div className="flex-1"></div>
                              <div className="flex-1 text-4xl">
                                <div className="color-third-color">
                                  <p className="text-6xl">Conoce</p>
                                  <p>la costa norte</p>
                                  <p>de Perú a través</p>
                                  <p>de sus jóvenes.</p>
                                </div>
                              </div>
                            </div>
                          }
                        >
                          <Tween
                            from={{ scale:0 , opacity: "0" }}
                            to={{ scale:1, opacity: "1" }}
                          />
                          {/* <Tween to={{ y: "-300%", opacity: "0" }} /> */}
                        </Timeline>
                      </Timeline>
                    </div>
                  </div>
                  {scrollY === 0 && (
                    <div className="absolute bottom-5 w-full tw-animate-bounce">
                      <div className="w-5 h-5 ">
                        <Image
                          src="/img/triangulo.svg"
                          layout="fill"
                          alt="mapa"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
    </LayoutHome>
  );
}

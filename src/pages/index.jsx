import { Fragment, useEffect, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Image from "next/image";
import { LayoutHome } from "../components/layout";
import useWindowDimensions from "./../hooks/useWindowDimensions";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { width } = useWindowDimensions();

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
            <Scene triggerHook="onLeave" duration={10000} pin>
              {(progress) => (
                <div className="h-screen">
                  <div className="grid h-screen w-full relative">
                    <div className="grid h-screen max-h-screen w-full absolute items-center justify-center ">
                      <Timeline
                        totalProgress={progress}
                        paused
                        target={
                          <Fragment>
                            <div className="absolute h-48 w-48 bg-first-color opacity rounded-full left-2/4 transform-center" />
                            <div className="absolute h-32 w-32 bg-second-color opacity rounded-full left-2/4 transform-center" />
                            <div className="absolute left-2/4 transform-center">
                              <div className="w-full h-80">
                                <Image
                                  src="/img/mapa.svg"
                                  layout="fill"
                                  alt="mapa"
                                />
                              </div>
                            </div>
                            <div className="fixed bg-fourth-color rounded-full z-10 left-2/4 transform-center" />
                            <div className="absolute flex-col w-full h-44 bottom-0 z-20">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1440 320"
                              >
                                <path
                                  fill="#2f88c0"
                                  fillOpacity="1"
                                  d="M0,96L40,128C80,160,160,224,240,256C320,288,400,288,480,250.7C560,213,640,139,720,138.7C800,139,880,213,960,224C1040,235,1120,181,1200,160C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                                ></path>
                              </svg>
                              <div className="bg-fifth-color h-96" />
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
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
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
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                        <Tween
                          to={{ y: "-300%" }}
                          target={4}
                        />
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
                                <div className="text-8xl color-sixth-color">50 al 80%</div>
                                <div className="text-white">
                                  <p>del oxígeno de la tierra.</p>
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
                        <Tween
                          to={{ y: "100%" }}
                          target={4}
                        />
                         {/* <Tween
                          to={{ backgroundColor : "#def0f0"}}
                          target={3}
                        /> */}
                         <Tween
                         from={{ opacity: "0" }}
                         to={{  opacity: "1" }}
                          target={5}
                        />
                         <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center z-40 items-center">
                              <div className="flex-1">
  
                              </div>
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
                            from={{ y: "300%", opacity: "0" }}
                            to={{ y: "0%", opacity: "1" }}
                          />
                          <Tween to={{ y: "-300%", opacity: "0" }} />
                        </Timeline>
                      </Timeline>
                    </div>
                  </div>
                  {scrollY === 0 && (
                    <div className="absolute bottom-5 w-full animate-bounce">
                      <div className="w-5 h-5">
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

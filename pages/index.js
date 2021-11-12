import { Fragment } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Image from "next/image";
import { LayoutHome } from "../src/components/layout";

export default function Home() {
  return (
    <LayoutHome>
      <div className="">
        <Controller>
          <div>
            <Scene triggerHook="onLeave" duration={3000} pin indicators={true}>
              {(progress) => (
                <div className="h-screen relative">
                  <div className="grid h-screen w-full items-center justify-center">
                    <div className="flex relative items-center  ">
                      <Timeline
                        totalProgress={progress}
                        paused
                        target={
                          <Fragment>
                            <div className="absolute h-48 w-48 bg-blue-500 bg-opacity-50 rounded-full left-2/4 transform-center" />
                            <div className="absolute h-32 w-32 bg-blue-700 bg-opacity-50 rounded-full left-2/4 transform-center" />
                            <div className="absolute left-2/4 transform-center">
                              <div className="w-full h-80">
                                <Image
                                  src="/img/mapa.svg"
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
                            className="absolute left-2/4 transform-center w-full"
                            style={{ top: "-130px" }}
                          >
                             <div className="h-20">
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
                            <h1 className="component-font text-6xl text-black ">
                              COSTA A COSTA
                            </h1>
                          </div>
                        </Tween>

                        <Timeline
                          target={
                            <div className="flex absolute  w-900 left-2/4 transform-center">
                              <h1 className="text-8xl text-black z-10 flex-1 tracking-widest">
                                Explora
                              </h1>
                              <div className="flex-1 text-4xl">
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
                          <Timeline
                            target={
                              <div className="flex absolute  w-900 left-2/4 transform-center">
                                <h1 className="text-7xl text-black z-10 flex-1 tracking-widest">
                                  El océano
                                </h1>
                                <div className="flex-1 text-4xl">
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
                        </Timeline>
                      </Timeline>
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full">
                    <p className="text-center ">scroll down</p>
                  </div>
                </div>
              )}
            </Scene>
          </div>
        </Controller>
      </div>
    </LayoutHome>
  );
}

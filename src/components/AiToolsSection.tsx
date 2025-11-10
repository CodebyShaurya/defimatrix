import React from "react";
import styles from "./AiToolsSection.module.css";
import Image from "next/image";

const AiToolsSection = () => {
  return (
    <section className="bg-black py-8 lg:py-16">
      <div className="mx-auto h-full max-w-7xl">
        <div className="relative flex h-full flex-col justify-around">
          <section className="relative">
            {/* Video Background with Clip Path Masking */}
            <div
              className="absolute z-0 hidden h-full w-full md:inline-flex md:h-[130%] xl:h-full"
              style={{ position: "absolute", left: "-1px", top: "-1px", clipPath: "url(#intro-video-clip-path)" }}
            >
              <div
                style={{ clipPath: "url(#intro-video-clip-path)", width: "100%", height: "100%", borderRadius: "20px" }}
              >
                <video
                  className="object-cover"
                  autoPlay
                  playsInline
                  loop
                  muted
                  style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                >
                  <source src="/next-gen-bg.mp4" type="video/mp4" />
                </video>
              </div>
              <svg width="0" height="0" viewBox="0 0 562 793" fill="none" xmlns="http://www.w3.org/2000/svg">
                <clipPath id="intro-video-clip-path" clipPathUnits="objectBoundingBox">
                  <path d="M0.987,0.001 H0.014 C0.007,0.001,0.001,0.013,0.001,0.027 V0.599 C0.001,0.614,0.007,0.625,0.014,0.625 H0.3 C0.307,0.625,0.313,0.636,0.313,0.65 V0.764 C0.313,0.778,0.319,0.79,0.327,0.79 H0.528 C0.536,0.79,0.542,0.801,0.542,0.815 V0.976 C0.542,0.99,0.548,1,0.555,1 H0.987 C0.995,1,1,0.99,1,0.976 V0.027 C1,0.013,0.995,0.001,0.987,0.001"></path>
                </clipPath>
              </svg>
            </div>

            {/* Main Content Sections */}
            <div className={`${styles.parent} relative mx-auto w-full justify-between p-3 md:flex`}>
        
              <video autoPlay loop playsInline muted className={`${styles.videobg} inline-block md:hidden`}>
                <source src="/bubble-bg.mp4" type="video/mp4" />
                Your browser does not support the video tag
              </video>

        
              <div
                className={`${styles.nextGenSection} mb-6 min-w-[250px] px-5 pb-5 pt-16 md:mb-0 md:h-[420px] lg:pb-0 lg:pt-10 xl:h-[380px] 2xl:h-[435px] 2xl:w-[423px]`}
              >
                <div className="flex justify-between">
                  <div className={`${styles.button} h-min px-5`}>Smart Execution</div>
                  <div className="-mt-15 lx:flex">
                    <Image src="/assets/eye.svg" alt="eye icon" width={150} height={150} priority />
                  </div>
                </div>
                <h2 className={`${styles.title} mb-1 mt-4 md:mt-0`}>Autonomous</h2>
                <h3 className={`${styles.subTitle} mb-10`}> DeFi Agent</h3>
                <p className={`${styles.context} pb-6 md:pb-20`}>
                  Self-optimizing yield engine that continuously analyzes, executes, and compounds across chains, with
                  institutional-grade security and full user control.
                </p>
              </div>

              <section className={`${styles.cardBackground} flex p-5 md:ml-1 lg:ml-0 2xl:p-[59px]`}>
                <div>
                  <div className="flex items-center">
                    <div className="md:xl-[70px] mb-10 flex items-center">
                      <div className="flex h-8 w-8 justify-center rounded-full border border-white pt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clipPath="url(#clip0_398_11118)">
                            <path
                              d="M4.00002 1.33325C3.26335 1.33325 2.66669 1.92992 2.66669 2.66659V13.3333C2.66669 14.0699 3.26335 14.6666 4.00002 14.6666H9.33726C9.11659 14.2706 8.94157 13.8246 8.82424 13.3333H4.00002V10.6666H8.66669V9.33325H4.00002V6.66659H12V7.65617L13.3334 7.06633V2.66659C13.3334 1.92992 12.7367 1.33325 12 1.33325H4.00002ZM4.00002 2.66659H12V5.33325H4.00002V2.66659ZM13 8.66659L10 9.99992V11.9999C10 14.6099 12.1467 15.8286 13 15.9999C13.8534 15.8286 16 14.6099 16 11.9999V9.99992L13 8.66659Z"
                              fill="#F7F8F8"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_398_11118">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <h3 className={`${styles.strategiesTitle} ml-3.5`}>Smart AI Driven Strategies</h3>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="xl1:w-[344px] mb-8 w-[80vw] md:w-[318px]">
                      <div className="mb-3 flex w-full justify-between">
                        <span className={styles.toolTitle}>Autonomous Yield Agent</span>
                        <div className="hidden md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M6.26712 21.8354L21.0763 13.2854L19.815 22.2097L22.5586 23.3157L24.5098 9.50968L11.5778 4.29647L11.1639 7.22548L19.5232 10.5953L4.71404 19.1454L6.26712 21.8354Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={`${styles.toolContext} w-[266px]`}>
                        Our AI continuously scans 100+ protocols across chains, automatically allocating to the
                        highest-yielding, pre-vetted pools with real-time risk adjustments.
                      </div>
                    </div>
                    <div className="xl1:w-[344px] mb-8 w-[80vw] md:w-[318px]">
                      <div className="mb-3 flex w-full justify-between">
                        <span className={styles.toolTitle}>
                          {" "}
                          <span className={styles.toolTitle}>Institutional Risk Management</span>
                        </span>
                        <div className="hidden md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M6.26712 21.8354L21.0763 13.2854L19.815 22.2097L22.5586 23.3157L24.5098 9.50968L11.5778 4.29647L11.1639 7.22548L19.5232 10.5953L4.71404 19.1454L6.26712 21.8354Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={`${styles.toolContext} w-[266px]`}>
                        Machine learning evaluates 50+ risk parameters - from smart contract vulnerabilities to market
                        volatility - before every autonomous execution.
                      </div>
                    </div>

         
                    <div className="xl1:w-[344px] mb-8 w-[80vw] md:w-[318px]">
                      <div className="mb-3 flex w-full justify-between">
                        <span className={styles.toolTitle}>Quant-Proven Strategies</span>
                        <div className="hidden md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M6.26712 21.8354L21.0763 13.2854L19.815 22.2097L22.5586 23.3157L24.5098 9.50968L11.5778 4.29647L11.1639 7.22548L19.5232 10.5953L4.71404 19.1454L6.26712 21.8354Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={`${styles.toolContext} w-[266px]`}>
                        Every AI model undergoes 10,000+ historical simulations and live testing before deployment to
                        ensure reliable performance.
                      </div>
                    </div>

         
                    <div className="xl1:w-[344px] mb-8 w-[80vw] md:w-[318px]">
                      <div className="mb-3 flex w-full justify-between">
                        <span className={styles.toolTitle}>Transparent & Trustless</span>
                        <div className="hidden md:hidden">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                          >
                            <path
                              d="M6.26712 21.8354L21.0763 13.2854L19.815 22.2097L22.5586 23.3157L24.5098 9.50968L11.5778 4.29647L11.1639 7.22548L19.5232 10.5953L4.71404 19.1454L6.26712 21.8354Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className={`${styles.toolContext} w-[266px]`}>
                        All strategies execute via audited smart contracts, with every action recorded on-chain for full
                        verifiability and user control.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl1:pl-10 -mr-4 hidden md:flex-col md:items-center md:justify-between md:pb-8 md:pl-0 xl:flex">
                  <div className="-mt-12">
                    <Image src="/assets/eye.svg" alt="eye icon" width={150} height={150} priority />
                  </div>
                  <div>
                    <Image src="/barChart.gif" alt="Bar chart" width={130} height={130} priority />
                  </div>
                </div>
              </section>
            </div>

            {/* Bottom Section - "Makes us UNIQUE" */}
            <div
              className="mb-10 mt-20 w-full pl-5 md:absolute md:top-[110%] md:mb-0 md:mt-0 xl:top-[87%] 2xl:top-[85%]"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="relative -mt-5 mb-24 flex w-full sm:w-[304px] items-center md:mx-auto md:-mt-32 md:w-auto">
                <div className="relative flex h-8 w-8 justify-center rounded-full border border-white pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g clipPath="url(#clip0_398_11060)">
                      <path
                        d="M4.00001 1.33325C3.26334 1.33325 2.66667 1.92992 2.66667 2.66659V13.3333C2.66667 14.0699 3.26334 14.6666 4.00001 14.6666H9.5625C9.07517 14.3246 8.67698 13.8666 8.40365 13.3333H4.00001V10.6666H8.14193C8.28193 10.1719 8.51988 9.71859 8.83855 9.33325H4.00001V6.66659H12V8.01685C12.4773 8.06018 12.9267 8.19556 13.3333 8.40356V2.66659C13.3333 1.92992 12.7367 1.33325 12 1.33325H4.00001ZM4.00001 2.66659H12V5.33325H4.00001V2.66659ZM11.6667 9.33325C10.378 9.33325 9.33334 10.3779 9.33334 11.6666C9.33334 12.9553 10.378 13.9999 11.6667 13.9999C11.9767 13.9999 12.271 13.9367 12.5417 13.8267L14.7148 15.9999H16V14.7148L13.8268 12.5416C13.9362 12.2709 14 11.9766 14 11.6666C14 10.3779 12.9553 9.33325 11.6667 9.33325ZM11.3333 10.6666C11.7013 10.6666 12 10.9653 12 11.3333C12 11.7013 11.7013 11.9999 11.3333 11.9999C10.9653 11.9999 10.6667 11.7013 10.6667 11.3333C10.6667 10.9653 10.9653 10.6666 11.3333 10.6666Z"
                        fill="#F7F8F8"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_398_11060">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <h3 className={`${styles.strategiesTitle} ml-3.5 w-[144px] xl:w-auto`}>Secure Audited Solutions</h3>
              </div>

              <div className="-mt-8 ml-3 max-w-[57%] flex-col justify-between pr-5 md:ml-0 md:mt-0 md:flex xl:flex-row">
                <h2>
                  <span className={styles.makesUsText}>Makes us</span>
                  <br />
                  <span className={styles.uniqueText}> UNIQUE</span>
                </h2>
                <div className="relative mt-16 grid w-[232px] grid-cols-3 gap-y-[73px] xl:mt-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                    <circle cx="2" cy="2" r="2" fill="#F7F8F8" />
                  </svg>
                  <div className="absolute -mt-6">
                    <Image src="/assets/eye.svg" alt="eye icon" width={150} height={150} priority />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AiToolsSection;

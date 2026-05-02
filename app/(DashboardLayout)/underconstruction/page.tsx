"use client";

import { Player } from "@lottiefiles/react-lottie-player";

export default function UnderConstruction() {
  return (
    <div className="main flex-col ">
      <div className="player">
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_qcrbuch7.json"
          background="transparent"
          speed={1}
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <h1 className="text-2xl">Medinexus.com</h1>
      <p className="text-xl">Page  under construction</p>

      <style jsx>{`
        .main {
          height: 100vh;
          width: 100vw;

      
        }
        .player {
          width: 50%;
        }
      `}</style>
    </div>
  );
}
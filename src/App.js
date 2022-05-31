import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.bloodmallet_chart_import) {
      window.bloodmallet_chart_import();
    } else {
      console.info("bloodmallet not loaded yet");
    }
  }, []);

  return (
    <div className="Title">
      <div class="navbar bg-[#111827] sticky top-0">
        <div class="flex-1">
          <a class="btn btn-ghost normal-case text-xl">Winged Demon</a>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 ">
            <li tabindex="0">
              <a class=" hover:bg-orange-800">
                Covenant, Soulbind, Talents, and Legendaries
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-[#111827]  ">
                <li>
                  <a>Covenant</a>
                </li>
                <li>
                  <a>Soulbind</a>
                </li>
                <li>
                  <a>Talents</a>
                </li>
                <li>
                  <a>Legendaries</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a class=" hover:bg-orange-800">
                Gear and Stats
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-[#111827]">
                <li>
                  <a>BiS Gear</a>
                </li>
                <li>
                  <a>Stats</a>
                </li>
              </ul>
            </li>
            <li tabindex="0">
              <a class=" hover:bg-orange-800 ">
                Playstyle and Optimization
                <svg
                  class="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul class="p-2 bg-[#111827]">
                <li>
                  <a>BiS Gear</a>
                </li>
                <li>
                  <a>Stats</a>
                </li>
              </ul>
            </li>
            <li>
              <a class=" hover:bg-orange-800 ">Experimental</a>
            </li>
            <li>
              <a class=" hover:bg-orange-800">Changelog</a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingTop: "10rem" }}>
        {" "}
        <p class="text-center ...">an idea I came up with at 2 AM</p>
        <p className="text-6xl text-center  text-green-500 font-sans font-bold hover:text-purple-500">
          WINGED DEMON
        </p>
        <p class="text-center">
          for <span class="text-center line-through font-bold">all</span> some
          of your Havoc Demon Hunter needs
        </p>
      </div>

      <div style={{ paddingTop: "2rem" }}>
        <p class="text-center font-bold	"> about </p>
        <p class="text-center">
          {" "}
          Let me start by saying that this site assumes you know how to play
          havoc. I'm not teaching you what every button does. The purpose of
          this site is to help optimize and improve.{" "}
        </p>
      </div>

      <div style={{ paddingTop: "1rem" }}>
        <p class="text-center font-bold	"> who am i </p>
        <div class="whitespace-pre ...">
          <p class="text-center">
            {" "}
            I'm{" "}
            <span class="text-purple-500">
              <a href="https://raider.io/characters/us/bleeding-hollow/Revatha">
                revatha
              </a>
            </span>
            , I've been playing Havoc since its inception in legion. <br />
            i started geting more into m+ towards the end of legion and started
            pushing way higher in bfa s2 and beyond. <br />
            In addition I raid and I've been cutting edge for six years. Things
            I like are my dog(he's cute), cooking, working out, anime, and wow.
            I don't like <span class="text-[#a01333]">pomegranates</span>
          </p>
        </div>
      </div>

      <div
        class="btn-group"
        style={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "5rem",
        }}
      >
        <div class="tooltip" data-tip="Hint: Its vampires">
          <button class="btn btn-outline hover:bg-orange-400">
            Covenant, Soulbind and Talents
          </button>
        </div>
        <div class="tooltip" data-tip="Ready to farm Xymox?">
          <button class="btn btn-outline hover:bg-orange-400">
            Gear and Stats
          </button>
        </div>
        <div class="tooltip" data-tip="Always be casting">
          <button class="btn btn-outline hover:bg-orange-400">
            Playstyle and Optimization
          </button>
        </div>
        <div class="tooltip" data-tip="Click at your own risk">
          <button class="btn btn-outline hover:bg-orange-400">
            Experimental
          </button>
        </div>
      </div>

      <div
        class="w-96 mx-auto "
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "30rem",
        }}
      >
        <hr />
      </div>
      <div style={{ paddingTop: "2rem" }}>
        <p class="text-center font-bold	"> Covenant </p>
        <p class="text-center">
          {" "}
          In 9.2 the only covenant worth considering for Havoc in any PVE
          setting is <span class="text-[#dc2626]">Venthyr.</span> <br />
          This is due to the dual legendary synergy with the Venthyr Legendary,
          the Cycle of Hatred Talent, and our class legendaries.
        </p>
      </div>
      <div
        id="unique-id-1 "
        class="bloodmallet_chart  w-1/2 mx-auto"
        data-wow-class="demon_hunter"
        data-wow-spec="havoc"
        data-type="soul_binds"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        Loading...
      </div>

      <div
        class="w-96 mx-auto "
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <hr />
      </div>

      <div style={{ paddingTop: "2rem" }}>
        <p class="text-center font-bold	"> Soulbind </p>
        <p class="text-center">
          {" "}
          In almost all content you will be playing Nadjia either with Double or
          Triple Potency. (Triple for keys, double usually for raid)
        </p>
        <div
          class="flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem",
          }}
        >
          <div>
            <img src={require("./Nadjiattwo.jpg")} height={300} width={600} />
            <p>
              This setup is more geared towards raid where Dauntless Duelist is
              unmatched.
            </p>
          </div>
          <div style={{ paddingLeft: "1rem" }}>
            <img src={require("./Nadjiathree.jpg")} height={300} width={600} />
            <p>
              For M+ you're going to run Triple Potency since Dauntless Duelist
              isn't as effective
            </p>
          </div>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <p class="text-center font-bold	"> Conduits </p>
        </div>
      </div>
      <div
        class="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./defender.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            Blur is already a very strong CD, and this conduit drops its
            cooldown to 43 seconds. <br />
            This can be used to DR certain repetitive mechanics or simply just
            boost your overall survivability.
          </span>
        </div>
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./ink.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            At max level this conduit boosts your magic resistance up to 23%
            (not including vers and other DR). This lets you
          </span>
        </div>
      </div>
      <div
        class="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./relentless.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            Blur is already a very strong CD, and this conduit drops its
            cooldown to 43 seconds. <br />
            This can be used to DR certain repetitive mechanics or simply just
            boost your overall survivability.
          </span>
        </div>
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./growinginferno.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            At max level this conduit boosts your magic resistance up to 23%
            (not including vers and other DR). This lets you
          </span>
        </div>
      </div>
      <div
        class="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./duel.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            Blur is already a very strong CD, and this conduit drops its
            cooldown to 43 seconds. <br />
            This can be used to DR certain repetitive mechanics or simply just
            boost your overall survivability.
          </span>
        </div>
        <div class="flex flex-col">
          <div class="flex" style={{ justifyContent: "center" }}>
            <img src={require("./dwf.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            At max level this conduit boosts your magic resistance up to 23%
            (not including vers and other DR). This lets you
          </span>
        </div>
      </div>

      <div
        class="w-96 mx-auto "
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "4rem",
        }}
      >
        <hr />
      </div>
      <div style={{ paddingTop: "5rem" }}>
        <p class="text-center font-bold	"> my links </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p class="text-center">
            {" "}
            reach me on twitter
            <br />
            catch me on twitch <br />
            add me on discord at XYZX#1234{" "}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactPlayer url="https://www.twitch.tv/projectpotatoe" controls />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <p class="text-center font-bold	"> thanks to </p>
        <div class="whitespace-pre ...">
          <p class="text-center"> special people</p>
        </div>
      </div>
    </div>
  );
}

export default App;

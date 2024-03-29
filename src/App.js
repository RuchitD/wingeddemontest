import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Faq from "./faq.js";
import Bladedance from "./bladedance.js";
function Index() {
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
                  <a href="#covenant" class="visuallyhidden focusable">
                    Covenant
                  </a>
                </li>
                <nav>
                  <li>
                    <a href="#soulbind" class="visuallyhidden focusable">
                      {" "}
                      Soulbind
                    </a>
                  </li>
                </nav>
                <li>
                  <a href="#conduit" class="visuallyhidden focusable">
                    Conduits
                  </a>
                </li>
                <li>
                  <a href="#talent" class="visuallyhidden focusable">
                    Talents
                  </a>
                </li>
                <li>
                  <a href="#lego" class="visuallyhidden focusable">
                    Legendaries
                  </a>
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
                  <a href="#gear" class="visuallyhidden focusable">
                    BiS Gear
                  </a>
                </li>
                <li>
                  <a href="#stats" class="visuallyhidden focusable">
                    Stats
                  </a>
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
                  <a href="#tldr" class="visuallyhidden focusable">
                    ABC & TLDR
                  </a>
                </li>
                <li>
                  <a>Mechanical Stuff</a>
                </li>
                <li>
                  <a>Dungeons</a>
                </li>
                <li>
                  <a>Raid</a>
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
          Let me start by saying that this site assumed you know how to play
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
        <div class="tooltip" data-tip="I suggest you give it a read">
          <button class="btn btn-outline hover:bg-orange-400">
            About the Site and FAQ
          </button>
        </div>
        <div
          class="tooltip"
          data-tip="Its just about my hatred of pomegranates"
        >
          <button class="btn btn-outline hover:bg-orange-400">About me</button>
        </div>
        <div class="tooltip" data-tip="What I'm working on next">
          <button class="btn btn-outline hover:bg-orange-400">
            Updates and Dev Blog
          </button>
        </div>
        <div class="tooltip" data-tip="Talking about whats next for Havoc">
          <button class="btn btn-outline hover:bg-orange-400">
            PTR/Beta Stuff
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
      <div style={{ paddingTop: "2rem" }} id="covenant">
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
      <div id="soulbind"></div>
      <div style={{ paddingTop: "2rem" }}>
        <p class="text-center font-bold	"> Soulbind </p>
        <p class="text-center">
          {" "}
          In almost all content you will be playing Nadjia either with Double or
          Triple Potency. (Triple for keys, double usually for raid)
        </p>
        <div
          class="flex self-start"
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem",
          }}
        >
          <div>
            <p>
              <a href="https://www.wowhead.com/soulbind-calc/embed/venthyr/nadjia-the-mistblade/demon-hunter/AwaWr74CBStvChUsaAoSBS0fCiUszwoiFSrvCjUq-go">
                {" "}
                Loading{" "}
              </a>
              This setup is more geared towards raid where Dauntless Duelist is
              unmatched.
            </p>
          </div>
          <div class="self-start" style={{ paddingLeft: "1rem" }}>
            <p>
              <a href=" https://www.wowhead.com/soulbind-calc/embed/venthyr/nadjia-the-mistblade/demon-hunter/AwaWpb4CBStvChUsaAoTBS0fChUtHAolLM8KIhUq7wo1KvoK">
                {" "}
                Loading{" "}
              </a>
              For M+ you're going to run Triple Potency since Dauntless Duelist
              isn't as effective
            </p>
          </div>
        </div>
        <div id="conduit" style={{ paddingTop: "2rem" }}>
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
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="
            
The cooldown of
Blur
is reduced by 17 sec."
          >
            <img src={require("./defender.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Fel Defender </p>
            </div>
            Blur is already a very strong CD, and this conduit drops its
            cooldown to 43 seconds. <br />
            This can be used to DR certain repetitive mechanics or simply just
            boost your overall survivability.
          </span>
        </div>
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="
            Demonic Wards reduces magic damage taken by an additional 12.0%."
          >
            <img src={require("./ink.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Viscous Ink </p>
            </div>
            At max level this conduit boosts your magic resistance up to 23%
            (not including vers and other DR). This lets you survive most lethal
            hits. Demon Hunters end up taking the least amount of damage in most
            logs due to this conduit.
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
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="
            Chaos Strike has a 11.0% chance to trigger a second Chaos Strike. "
          >
            <img src={require("./relentless.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Relentless Onslaught</p>
            </div>
            Spam Chaos Strike. Chance to spam more Chaos Strike. What else is
            there to say? Chance to refund as well.
          </span>
        </div>
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="
            Immolation Aura's damage increases by 22.0% each time it deals damage. "
          >
            <img src={require("./growinginferno.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Growing Inferno </p>
            </div>
            Our best scaling damage conduit. A good single target boost. More
            noticeable on AOE. We'll take all the uncapped damage we can get.
          </span>
        </div>
      </div>
      <div
        class="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="First target you damage in combat is your adversary, you deal 3% more damage to them and take 1.5% less from the. You can only have one at a time."
          >
            <img src={require("./duel.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2rem",
              }}
            >
              <p class="text-center font-bold	"> Dauntless Duelist </p>
            </div>
            Defacto raid choice. Solid DPS Increase. We don't have any triple
            potency conduits to compete with this slot.
          </span>
        </div>
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip="The final slash of Blade Dance deals 80% more damage"
          >
            <img src={require("./dwf.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "2rem",
              }}
            >
              <p class="text-center font-bold	"> Dancing With Fate </p>
            </div>
            Purely M+ Conduit. Combined with the tier set 2 PC it makes
            Deathsweep hit like a truck on AOE situations. In addition Dauntless
            Duelist has less value in AOE. Making this a no brainer.
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
        <div
          id="talent"
          style={{
            paddingTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p class="text-center font-bold	"> Talents </p>
          <img src={require("./talents.jpg")} />
        </div>
      </div>
      <p class="text-center">
        {" "}
        Due to the synergy and strength of Venthyr we are hard locked into this
        talent set. <br /> Longer eyebeams lead to a longer brand extension and
        the ability to reduce eyebeam CD gives us the ability for brand to never
        fall off. <br />
        For row 45, In M+{" "}
        <span
          class="tooltip text-green-600"
          data-tip="Impales the target for Chaos damage and stuns them for 4 sec. (20yd Range, 30 sec CD)"
        >
          Fel Erruption
        </span>{" "}
        is your locked choice. It gives you a ranged single target stun, playing
        this talent properly can allow you to solo lockdown a mob in keys.{" "}
        <br />
        In raid depending on fight needs you'll swap between{" "}
        <span
          class="tooltip text-green-600"
          data-tip="
          Throw Glaive has 2 charges, and snares all enemies hit by 50% for 6 sec."
        >
          Master of the Glaive
        </span>{" "}
        as a filler or{" "}
        <span
          class="tooltip text-green-600"
          data-tip="
          Removes the Fury cost of Chaos Nova and reduces its cooldown by 33%."
        >
          Unleashed Power
        </span>{" "}
        for fights that require frequent AOE stuns.
      </p>

      <div
        id="lego"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <p class="text-center font-bold	"> Legendaries </p>
        <p class="text-center">
          {" "}
          There are two legendaries a Venthyr Havoc will use, and by two, I mean
          one. <br />
          <span
            class="tooltip text-orange-600"
            data-tip="Casting Eyebeam summons a Vengeance Demon Hunter who casts Fel Devastation"
          >
            Collective Anguish
          </span>{" "}
          is the go to for M+ and almost all boss fights simply because it
          provides a consistent playstyle due to Fel Devastation also extending
          brand. <br />
          You can run{" "}
          <span
            class="tooltip text-orange-600"
            data-tip="Eyebeam has a 40% Chance to Refund its Cooldown and Cost (This can proc itself)"
          >
            Darkglare Medalion
          </span>{" "}
          if you want. Nobody uses this however. The RNG hurts too much.
        </p>
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
      <div
        class="flex"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div
          class="flex"
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "2rem",
          }}
        >
          {" "}
        </div>

        <div
          style={{
            paddingTop: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p class="text-center font-bold	"> TLDR </p>
          <img src={require("./simyo.gif")} />
        </div>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <p class="text-center">
          {" "}
          Nine out of Ten gear problems can be solved by simming.
        </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
        id="gear"
      >
        <p class="text-center font-bold	"> BiS Gearing </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <p class="text-center">
          {" "}
          There's mainly three important items to target in Season 4. Aside from
          that checking your sims frequently will net better results.
        </p>
      </div>
      <div
        class="flex justify-self-start"
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <div class="flex flex-col">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip=" While you are behind your enemies, their movement is impaired, or they are suffering from loss-of-control effects, your attacks have a high chance to cause them to bleed for Physical damage over 6 sec."
          >
            <img src={require("./veinripper.jpg")} height={50} width={50} />
          </div>

          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Cruciform Veinripper </p>
            </div>
            The passive damage from these weapons is second to none even with
            the loss of stats. <br />
            In addition the bleed is affected by haste, so a more frequent
            demonic build only compliments the passive even more. You'll be dual
            weilding these. It's reccomended to use two tokens for MH and OH.
          </span>
        </div>
        <div class="flex flex-col self-start">
          <div
            class="flex tooltip"
            style={{ justifyContent: "center" }}
            data-tip=" Periodically rummage through the cache, finding a new stolen weapon.
           Activate to grab the weapon from the cache, gaining its benefit. "
          >
            <img src={require("./cache.jpg")} height={50} width={50} />
          </div>
          <span class="text-center max-w-xs">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
              }}
            >
              <p class="text-center font-bold	"> Cache of Acquired Treasures </p>
            </div>
            The Cache trinket from Xymox remains our strongest trinket when we
            use the Axe bleed. It is recomended to use a token on this.
          </span>
        </div>
      </div>

      <div
        id="unique-id-2 "
        class="bloodmallet_chart  w-1/2 mx-auto"
        data-wow-class="demon_hunter"
        data-wow-spec="havoc"
        data-type="trinkets"
        style={{ justifyContent: "center", alignItems: "center" }}
      >
        Loading...
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            paddingTop: "2rem",
          }}
          id="stats"
        >
          <p class="text-center font-bold	"> Stats </p>
        </div>{" "}
        <p class=" w-96 mx-auto text-center">
          {" "}
          Stats, in a sense, don't matter for Havoc. Just don't get mastery on
          any gear. (While this may seem counterintuitive, mastery doesn't scale
          well) You're better off simming your gear constantly. There's no
          secret sauce here - we have horrible stat scaling. Crit/Haste/Vers is
          nice on all slots.
        </p>
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
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <p class="text-center font-bold	"> ABC & TLDR </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <p class="text-center">
          {" "}
          Guess the most common DH mistake. Technically there's two but I'll get
          to the second one later. If you guessed "Not Casting" you're correct.
          Go to a top log, go to your log, compare your casts of abilities.{" "}
          <br />I guarantee they cast way more than you.{" "}
        </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <p class="text-center font-bold	"> Mechanial Optimization </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <p class="text-center font-bold	"> Dungeons </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <p class="text-center">
          {" "}
          I'm simply not wasting time making guides for content that's
          irrelvant. This is will be updated in Dragonflight{" "}
        </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
        }}
      >
        <p class="text-center font-bold	"> Raid </p>
      </div>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <p class="text-center">
          {" "}
          I'm simply not wasting time making guides for content that's
          irrelvant. This is will be updated in Dragonflight{" "}
        </p>
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
          <p class="text-center"> special people </p>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/bladedance" element={<Bladedance />} />
      </Routes>
    </Router>
  );
}

export default App;

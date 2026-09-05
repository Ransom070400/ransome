import Image from "next/image";
import Deck, { type DeckTheme } from "./Deck";
import d from "./deck.module.css";
import rm from "./reachy-mini.module.css";

const theme: DeckTheme = {
  accent: "#9200e1",
  accentRgb: "146 0 225",
  accentAlt: "#00a3ff",
  accentSoft: "#8bd7ff",
  splitGap: "2.5rem",
  splitHeight: "auto",
};

const reachyPhoto = "/images/reachy-mini/thumbnail.jpg";

/**
 * "0G x Reachy Mini". A compact explainer deck for showing what Reachy Mini is
 * and how a builder can connect it to 0G Private Computer models.
 */
export default function ReachyMiniDeck({ title }: { title: string }) {
  const slides = [
    // ── Title ────────────────────────────────────────────────────────────
    <div key="title" className={`${d.si} ${d.centered}`}>
      <div className={d.eyebrow}>
        <b>0G</b> x Reachy Mini
      </div>
      <h1>
        Give AI
        <br />
        a <em>Body</em>
      </h1>
      <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 610 }}>
        Reachy Mini is a small open-source robot. 0G Private Computer gives it
        access to verifiable AI models. Together, you can build physical agents
        that listen, see, reason, speak, and move.
      </p>
      <figure className={`${rm.photoPanel} ${rm.heroPhoto}`}>
        <Image
          src={reachyPhoto}
          alt="Reachy Mini desktop robot on a table"
          fill
          priority
          sizes="(max-width: 860px) 100vw, 480px"
          className={rm.objectCenter}
        />
      </figure>
      <div className={d.badge}>Robotics · AI Agents · pc.0g.ai</div>
    </div>,

    // ── What it is ───────────────────────────────────────────────────────
    <div key="what-is-reachy" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Simple Explanation</span>
        <h2>What is Reachy Mini?</h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 560 }}>
          Think of Reachy Mini as a programmable desktop robot shell for AI. The
          model supplies the brain; Reachy supplies the face, voice, sensors,
          and motion.
        </p>
      </div>

      <div className={d.grid4}>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Open Source Robot</h3>
          <p>Hardware and software are built for builders to inspect, modify, and extend.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Made for Interaction</h3>
          <p>It can look around, listen through microphones, talk through a speaker, and move expressively.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Runs Apps</h3>
          <p>You can drive it from browser apps, JavaScript, Python scripts, or simulation before hardware arrives.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Small Enough for a Desk</h3>
          <p>The form factor makes robotics demos practical for workshops, classrooms, and home labs.</p>
        </div>
      </div>

      <div className={d.flowWrap}>
        <svg viewBox="0 0 660 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="15" width="120" height="90" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <circle cx="80" cy="46" r="18" fill="#F5EEFF" stroke="#D5A3FF" />
          <circle cx="73" cy="43" r="3" fill="#9200E1" />
          <circle cx="87" cy="43" r="3" fill="#9200E1" />
          <path d="M70 54 C76 60 84 60 90 54" stroke="#9200E1" strokeWidth="2" strokeLinecap="round" />
          <text x="80" y="86" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">Reachy Mini</text>
          <rect x="190" y="15" width="120" height="90" rx="12" fill="#F5EEFF" stroke="#D5A3FF" />
          <text x="250" y="47" textAnchor="middle" fill="#9200E1" fontSize="10" className={d.monoText}>SENSE</text>
          <text x="250" y="70" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">Audio + Vision</text>
          <rect x="360" y="15" width="120" height="90" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="420" y="47" textAnchor="middle" fill="#9200E1" fontSize="10" className={d.monoText}>THINK</text>
          <text x="420" y="70" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">AI Model</text>
          <rect x="530" y="15" width="110" height="90" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="585" y="47" textAnchor="middle" fill="#9200E1" fontSize="10" className={d.monoText}>ACT</text>
          <text x="585" y="70" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">Speak + Move</text>
        </svg>
      </div>
    </div>,

    // ── Anatomy ──────────────────────────────────────────────────────────
    <div key="anatomy" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Robot Anatomy</span>
          <h2>The Pieces That Matter</h2>
          <p className={d.desc}>
            You do not need to be a robotics expert to explain it. Reachy Mini
            is basically an input/output device for AI, wrapped in a friendly
            programmable body.
          </p>
        </div>

        <div className={d.grid2}>
          <div className={`${d.card} ${d.cardCompact}`}>
            <h3>Camera</h3>
            <p>Lets the agent describe what it sees, read visual context, or react to people nearby.</p>
          </div>
          <div className={`${d.card} ${d.cardCompact}`}>
            <h3>Microphones</h3>
            <p>Capture spoken commands, questions, and environmental cues.</p>
          </div>
          <div className={`${d.card} ${d.cardCompact}`}>
            <h3>Speaker</h3>
            <p>Turns the model response into a natural voice experience.</p>
          </div>
          <div className={`${d.card} ${d.cardCompact}`}>
            <h3>Motion</h3>
            <p>Head, body, and expressive movement make the answer feel present instead of trapped on screen.</p>
          </div>
        </div>
      </div>
    </div>,

    // ── Why 0G ───────────────────────────────────────────────────────────
    <div key="why-0g" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Why Add 0G?</span>
        <h2>Robots Need Models. 0G Makes the Model Layer Better.</h2>
      </div>

      <div className={d.grid3}>
        <div className={d.card}>
          <h3>One API</h3>
          <p>Use 0G Private Computer like an OpenAI-compatible endpoint. Swap the base URL and choose a model.</p>
        </div>
        <div className={d.card}>
          <h3>Private Inference</h3>
          <p>For sensitive interactions, route requests to private TEE-backed compute so user data is protected.</p>
        </div>
        <div className={d.card}>
          <h3>Verifiable Results</h3>
          <p>0G can prove which model/provider handled the request, instead of asking users to trust a black box.</p>
        </div>
      </div>

      <div className={d.flowWrap}>
        <svg viewBox="0 0 720 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="why-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
            </marker>
          </defs>
          <rect x="15" y="28" width="130" height="64" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="80" y="55" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">Reachy Event</text>
          <text x="80" y="72" textAnchor="middle" fill="#8888a0" fontSize="8.5">Voice / image / action</text>
          <path d="M148 60 L205 60" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#why-arrow)" />
          <rect x="210" y="28" width="140" height="64" rx="10" fill="#F5EEFF" stroke="#D5A3FF" />
          <text x="280" y="55" textAnchor="middle" fill="#9200E1" fontSize="12" fontWeight="700">pc.0g.ai</text>
          <text x="280" y="72" textAnchor="middle" fill="#8888a0" fontSize="8.5">Router + model catalog</text>
          <path d="M353 60 L410 60" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#why-arrow)" />
          <rect x="415" y="28" width="140" height="64" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="485" y="55" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">0G Compute</text>
          <text x="485" y="72" textAnchor="middle" fill="#8888a0" fontSize="8.5">Verified/private model run</text>
          <path d="M558 60 L615 60" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#why-arrow)" />
          <rect x="620" y="28" width="85" height="64" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="662" y="55" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="700">Action</text>
          <text x="662" y="72" textAnchor="middle" fill="#8888a0" fontSize="8.5">Speak / move</text>
        </svg>
      </div>
    </div>,

    // ── Use cases ────────────────────────────────────────────────────────
    <div key="use-cases" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Use Cases</span>
        <h2>What Would You Build?</h2>
      </div>

      <div className={d.grid3}>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Event Demo Host</h3>
          <p>Greets visitors, explains 0G, answers FAQs, and points people to demos.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Classroom Tutor</h3>
          <p>Explains concepts out loud, asks follow-up questions, and reacts with motion.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Reception Assistant</h3>
          <p>Checks people in, answers simple questions, and escalates to a human when needed.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Home Companion</h3>
          <p>Reminders, conversation, simple monitoring, and privacy-first personal routines.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Lab Assistant</h3>
          <p>Reads instructions, tracks experiment steps, and responds hands-free.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Game Character</h3>
          <p>A physical NPC that sees players, remembers state, and reacts in character.</p>
        </div>
      </div>
    </div>,

    // ── Build flow ───────────────────────────────────────────────────────
    <div key="build-flow" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Build Flow</span>
        <h2>How to Get Models from pc.0g.ai into Reachy Mini</h2>
      </div>

      <div className={d.grid4}>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>1. Open pc.0g.ai</h3>
          <p>Create an API key in the dashboard and fund the account you will use for inference.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>2. Pick a Model</h3>
          <p>Choose chat for conversation, vision for camera input, speech for audio, or image generation.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>3. Call Router</h3>
          <p>Use the OpenAI-compatible base URL: https://router-api.0g.ai/v1.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>4. Drive Reachy</h3>
          <p>Map the model answer to speech, head movement, expressions, or app actions.</p>
        </div>
      </div>

      <div className={d.card} style={{ marginTop: ".4rem" }}>
        <h3>Minimal Mental Model</h3>
        <p>
          Reachy captures input. Your app formats the prompt. 0G runs the model.
          Your app turns the response into voice and motion. For stronger
          guarantees, set trust mode to verified or private on the API key or
          request.
        </p>
      </div>
    </div>,
  ];

  return <Deck title={title} theme={theme} slides={slides} />;
}

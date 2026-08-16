import Deck, { type DeckTheme } from "./Deck";
import d from "./deck.module.css";
import og from "./zero-gravity.module.css";

/** 0G brand purple. */
const theme: DeckTheme = {
  accent: "#9200e1",
  accentRgb: "146 0 225",
  accentAlt: "#b75fff",
  accentSoft: "#d5a3ff",
};

/**
 * "Understanding 0G — Intro for Builders". Thirteen slides walking from how
 * hosted AI works today to what you can ship on 0G.
 *
 * The slides are plain server-rendered markup; only the surrounding <Deck>
 * shell ships JavaScript.
 */
export default function ZeroGravityDeck({ title }: { title: string }) {
  const slides = [
    // ── Title ────────────────────────────────────────────────────────────
    <div key="title" className={`${d.si} ${d.centered}`}>
      <div className={d.eyebrow}>
        <b>0G</b> — Zero Gravity
      </div>
      <h1>
        The First Blockchain
        <br />
        Built for <em>AI</em>
      </h1>
      <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 520 }}>
        Most AI runs on corporate servers — you rent access, they own
        everything. 0G changes that. Open, affordable, verifiable AI
        infrastructure for builders everywhere.
      </p>
      <div className={d.badge}>Intro for Builders · 2026</div>
    </div>,

    // ── How AI works today ───────────────────────────────────────────────
    <div key="today" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>How AI Works Today</span>
        <h2>You Send a Prompt. A Corporation Does the Rest.</h2>
      </div>

      <div className={d.flowWrap}>
        <svg viewBox="0 0 720 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker
              id="og-arrow"
              viewBox="0 0 8 8"
              refX="7"
              refY="4"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
            </marker>
          </defs>
          <rect x="0" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="195" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="390" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#9200E1" strokeWidth="1.5" strokeOpacity=".3" />
          <rect x="585" y="40" width="130" height="80" rx="10" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="65" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Your Device</text>
          <text x="65" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Phone / Laptop</text>
          <text x="260" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Internet</text>
          <text x="260" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Request travels</text>
          <text x="455" y="72" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="600">Corp Data Center</text>
          <text x="455" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Their GPUs, their rules</text>
          <text x="650" y="72" textAnchor="middle" fill="#1a1a2e" fontSize="13" fontWeight="600">Response</text>
          <text x="650" y="92" textAnchor="middle" fill="#8888a0" fontSize="10">Back to your screen</text>
          <path d="M133 80 L192 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow)" />
          <path d="M328 80 L387 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow)" />
          <path d="M523 80 L582 80" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow)" />
          <text x="455" y="25" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText} letterSpacing="1.5">
            THEY CONTROL EVERYTHING
          </text>
        </svg>
      </div>

      <div className={d.grid3} style={{ marginTop: ".5rem" }}>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Access &amp; Pricing</h3>
          <p>They decide who gets in. They set and raise prices whenever they want.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Your Data</h3>
          <p>They read your conversations, use your data to train models, share with third parties.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Availability</h3>
          <p>They go offline, you lose access. They shut down the product, your AI is gone forever.</p>
        </div>
      </div>
    </div>,

    // ── Why not existing chains ──────────────────────────────────────────
    <div key="problem" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>The Problem</span>
        <h2>Why Can’t We Put AI on Existing Chains?</h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 500 }}>
          Blockchain should fix this. But existing chains weren’t built for AI.
          Three barriers.
        </p>
      </div>

      <div className={d.flowWrap} style={{ marginTop: ".75rem" }}>
        <svg viewBox="0 0 720 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="252" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="494" y="10" width="215" height="180" rx="12" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="10" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
          <rect x="252" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
          <rect x="494" y="10" width="215" height="3" rx="1.5" fill="#9200E1" fillOpacity=".5" />
          <rect x="95" y="30" width="44" height="32" rx="6" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
          <text x="117" y="52" textAnchor="middle" fill="#9200E1" fontSize="14" fontWeight="600">HDD</text>
          <circle cx="359" cy="46" r="16" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
          <text x="359" y="51" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="700">G</text>
          <rect x="588" y="30" width="44" height="32" rx="16" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
          <text x="610" y="52" textAnchor="middle" fill="#9200E1" fontSize="11" fontWeight="600">TPS</text>
          <text x="117" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Storage</text>
          <text x="359" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Compute</text>
          <text x="601" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="15" fontWeight="700">Speed</text>
          <text x="117" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">AI models are GBs to TBs.</text>
          <text x="117" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">1 GB on Ethereum costs</text>
          <text x="117" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">thousands in gas fees.</text>
          <text x="359" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">AI needs GPUs doing billions</text>
          <text x="359" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">of calculations per second.</text>
          <text x="359" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">Chains do token swaps.</text>
          <text x="601" y="110" textAnchor="middle" fill="#555568" fontSize="10.5">Real-time AI needs 1000s</text>
          <text x="601" y="125" textAnchor="middle" fill="#555568" fontSize="10.5">of ops/sec. Ethereum</text>
          <text x="601" y="140" textAnchor="middle" fill="#555568" fontSize="10.5">does about 15 TPS.</text>
          <text x="117" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className={d.monoText}>BUILT FOR SMALL TXS</text>
          <text x="359" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className={d.monoText}>NO GPU SUPPORT</text>
          <text x="601" y="172" textAnchor="middle" fill="#9200E1" fontSize="9.5" className={d.monoText}>1000x TOO SLOW</text>
        </svg>
      </div>
    </div>,

    // ── What is 0G ───────────────────────────────────────────────────────
    <div key="what" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Enter 0G</span>
        <h2>What is 0G?</h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 540 }}>
          The first blockchain designed from the ground up for AI. Every
          component — storage, compute, processing, data availability — built
          for AI workloads at massive scale.
        </p>
      </div>

      <div className={d.grid2} style={{ marginTop: "1rem" }}>
        <div className={d.card}>
          <h3>Own, Don’t Rent</h3>
          <p>Store, run, tokenize and truly own AI models on decentralized infrastructure. Nobody can revoke your access.</p>
        </div>
        <div className={d.card}>
          <h3>Your Data Stays Yours</h3>
          <p>Decentralized storage where the owner controls access. No company mining your prompts or selling your info.</p>
        </div>
        <div className={d.card}>
          <h3>Shared Compute Power</h3>
          <p>Global GPU marketplace. Pay-per-use, market-driven prices. A dev in Lagos gets the same access as one in SF.</p>
        </div>
        <div className={d.card}>
          <h3>Everything is Verifiable</h3>
          <p>Cryptographic proofs for computation. Proof of Random Access for storage. Trust replaced by mathematics.</p>
        </div>
      </div>
    </div>,

    // ── Four pillars ─────────────────────────────────────────────────────
    <div key="pillars" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Architecture</span>
        <h2>The Four Pillars of 0G</h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 480 }}>
          Four independent pieces. Each handles one part. Each works alone.
          Together — complete AI infrastructure.
        </p>
      </div>

      <div className={d.flowWrap} style={{ marginTop: ".5rem" }}>
        <svg viewBox="0 0 720 260" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="360" cy="130" r="42" fill="#F5EEFF" stroke="#B75FFF" strokeWidth="1.5" />
          <text x="360" y="126" textAnchor="middle" fill="#9200E1" fontSize="14" fontWeight="800">0G</text>
          <text x="360" y="142" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText}>ECOSYSTEM</text>
          <rect x="30" y="30" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="30" y="160" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="540" y="30" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <rect x="540" y="160" width="150" height="70" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="105" y="58" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText} letterSpacing="1">PILLAR 01</text>
          <text x="105" y="78" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Chain</text>
          <text x="105" y="188" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText} letterSpacing="1">PILLAR 02</text>
          <text x="105" y="208" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Storage</text>
          <text x="615" y="58" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText} letterSpacing="1">PILLAR 03</text>
          <text x="615" y="78" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G Compute</text>
          <text x="615" y="188" textAnchor="middle" fill="#9200E1" fontSize="9" className={d.monoText} letterSpacing="1">PILLAR 04</text>
          <text x="615" y="208" textAnchor="middle" fill="#1a1a2e" fontSize="14" fontWeight="700">0G DA</text>
          <line x1="183" y1="65" x2="318" y2="115" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="183" y1="195" x2="318" y2="145" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="537" y1="65" x2="402" y2="115" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="537" y1="195" x2="402" y2="145" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="4 3" />
          <text x="105" y="95" textAnchor="middle" fill="#8888a0" fontSize="9">EVM · Instant Finality</text>
          <text x="105" y="225" textAnchor="middle" fill="#8888a0" fontSize="9">Erasure Coded · PoRA</text>
          <text x="615" y="95" textAnchor="middle" fill="#8888a0" fontSize="9">GPU Marketplace</text>
          <text x="615" y="225" textAnchor="middle" fill="#8888a0" fontSize="9">50 Gbps Throughput</text>
        </svg>
      </div>

      <p
        className={`${d.desc} ${d.descCenter}`}
        style={{ maxWidth: 460, fontSize: ".82rem" }}
      >
        Modular design — use one service or all four. Start small, prove value,
        then expand.
      </p>
    </div>,

    // ── Pillar 01: chain ─────────────────────────────────────────────────
    <div key="chain" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Pillar 01</span>
          <h2>0G Chain</h2>
          <p className={d.desc}>
            Write Solidity, deploy immediately. Same Hardhat, Foundry, Remix —
            zero code changes. Optimized CometBFT consensus with instant
            finality.
          </p>
          <div className={og.inlineDiagram}>
            <svg viewBox="0 0 340 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="340" height="44" rx="8" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="170" y="17" textAnchor="middle" fill="#9200E1" fontSize="8" className={d.monoText} letterSpacing="1">EXECUTION LAYER</text>
              <text x="170" y="33" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">EVM Compatible · Solidity · Pectra + Cancun-Deneb</text>
              <rect x="0" y="56" width="340" height="44" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="170" y="73" textAnchor="middle" fill="#9200E1" fontSize="8" className={d.monoText} letterSpacing="1">CONSENSUS LAYER</text>
              <text x="170" y="89" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Optimized CometBFT · BFT · Instant Finality</text>
            </svg>
          </div>
        </div>

        <div className={og.featList}>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Modular Design</strong>
              <span>Consensus and execution layers separated. Each upgrades independently.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Instant Finality</strong>
              <span>Confirmed = permanent. No waiting for multiple block confirmations.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Full Ethereum Compat</strong>
              <span>Cancun-Deneb blobs, Pectra account abstraction — all supported.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>BFT Consensus</strong>
              <span>Correct agreement even if 1/3 of validators are faulty or malicious.</span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // ── Pillar 02: storage ───────────────────────────────────────────────
    <div key="storage" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Pillar 02</span>
          <h2>0G Storage</h2>
          <p className={d.desc}>
            Data split via erasure coding, distributed across hundreds of nodes.
            30% can go offline and your data stays safe.
          </p>
          <div className={og.inlineDiagram}>
            <svg viewBox="0 0 340 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <marker id="og-arrow-sm" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
                  <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
                </marker>
              </defs>
              <rect x="0" y="8" width="90" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1.2" />
              <text x="45" y="30" textAnchor="middle" fill="#1a1a2e" fontSize="10" fontWeight="600">Your File</text>
              <text x="45" y="44" textAnchor="middle" fill="#8888a0" fontSize="8">AI model / data</text>
              <path d="M93 33 L122 33" stroke="#D0D0D8" strokeWidth="1.2" markerEnd="url(#og-arrow-sm)" />
              <rect x="125" y="8" width="90" height="50" rx="8" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="170" y="30" textAnchor="middle" fill="#9200E1" fontSize="10" fontWeight="600">Erasure Code</text>
              <text x="170" y="44" textAnchor="middle" fill="#8888a0" fontSize="8">Split into chunks</text>
              <path d="M218 33 L247 33" stroke="#D0D0D8" strokeWidth="1.2" markerEnd="url(#og-arrow-sm)" />
              <circle cx="270" cy="20" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <circle cx="295" cy="33" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <circle cx="270" cy="46" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <circle cx="320" cy="20" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <circle cx="320" cy="46" r="10" fill="white" stroke="#E5E5E5" strokeWidth="1" />
              <text x="295" y="78" textAnchor="middle" fill="#8888a0" fontSize="8">Nodes worldwide</text>
              <text x="170" y="105" textAnchor="middle" fill="#9200E1" fontSize="8" className={d.monoText} letterSpacing="1">VERIFIED BY PROOF OF RANDOM ACCESS</text>
            </svg>
          </div>
        </div>

        <div>
          <div className={d.grid2} style={{ marginBottom: ".8rem" }}>
            <div className={`${d.card} ${d.cardCompact}`}>
              <h3>Log Storage</h3>
              <p>Append-only, immutable. Audit trails, training logs, data provenance.</p>
            </div>
            <div className={`${d.card} ${d.cardCompact}`}>
              <h3>Key-Value Storage</h3>
              <p>Mutable data for app state, user prefs, dynamic content.</p>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Proof of Random Access</strong>
              <span>Random surprise checks — nodes must prove they still hold your data to earn rewards.</span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // ── Pillar 03: compute ───────────────────────────────────────────────
    <div key="compute" className={`${d.si} ${d.gapMd}`}>
      <div>
        <span className={d.tag}>Pillar 03</span>
        <h2>0G Compute — Global GPU Marketplace</h2>
      </div>

      <div className={d.flowWrap} style={{ marginTop: 0 }}>
        <svg viewBox="0 0 720 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="og-arrow-flow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
            </marker>
          </defs>
          <rect x="0" y="15" width="130" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="65" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">Developer</text>
          <text x="65" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Deposits funds</text>
          <path d="M133 48 L178 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow-flow)" />
          <rect x="182" y="15" width="130" height="65" rx="10" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
          <text x="247" y="42" textAnchor="middle" fill="#9200E1" fontSize="12" fontWeight="600">Smart Contract</text>
          <text x="247" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Escrow + matching</text>
          <path d="M315 48 L360 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow-flow)" />
          <rect x="364" y="15" width="130" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="429" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">GPU Provider</text>
          <text x="429" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">Runs AI workload</text>
          <path d="M497 48 L542 48" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#og-arrow-flow)" />
          <rect x="546" y="15" width="160" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="626" y="42" textAnchor="middle" fill="#1a1a2e" fontSize="12" fontWeight="600">Verified Result</text>
          <text x="626" y="58" textAnchor="middle" fill="#8888a0" fontSize="9">TEEML / OPML / ZKML</text>
        </svg>
      </div>

      <div className={d.grid3}>
        <div className={`${og.feat} ${og.featStacked}`}>
          <strong>TEEML</strong>
          <span>Hardware-based trusted execution. Fast, secure isolation for computation.</span>
        </div>
        <div className={`${og.feat} ${og.featStacked}`}>
          <strong>OPML</strong>
          <span>Optimistic verification. Results assumed correct, challengeable if wrong.</span>
        </div>
        <div className={`${og.feat} ${og.featStacked}`}>
          <strong>ZKML</strong>
          <span>Zero-knowledge proofs. Verify computation without revealing the data.</span>
        </div>
      </div>
    </div>,

    // ── Pillar 04: data availability ─────────────────────────────────────
    <div key="da" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Pillar 04</span>
          <h2>0G Data Availability</h2>
          <p className={d.desc}>
            Guarantees data can always be accessed when needed. Instead of every
            node checking all data, randomly selected nodes (via VRF) verify
            random portions. Scales infinitely.
          </p>
          <div className={og.inlineDiagram}>
            <svg viewBox="0 0 300 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="300" height="34" rx="6" fill="#F5EEFF" stroke="#D5A3FF" strokeWidth="1" />
              <text x="150" y="22" textAnchor="middle" fill="#9200E1" fontSize="11" fontWeight="600">Data Blob</text>
              <line x1="50" y1="36" x2="50" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="130" y1="36" x2="130" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
              <line x1="230" y1="36" x2="230" y2="55" stroke="#D5A3FF" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="50" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
              <circle cx="130" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
              <circle cx="230" cy="64" r="9" fill="white" stroke="#B75FFF" strokeWidth="1.2" />
              <text x="150" y="80" textAnchor="middle" fill="#8888a0" fontSize="7.5" className={d.monoText}>RANDOM NODES SAMPLE RANDOM PORTIONS</text>
            </svg>
          </div>
        </div>

        <div className={og.featList}>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>50 Gbps Throughput</strong>
              <span>Demonstrated on testnet — far beyond any other DA solution available.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Partners</strong>
              <span>Polygon, Optimism, Arbitrum, Manta Network, Caldera, AltLayer.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>VRF Selection</strong>
              <span>Unpredictable node selection via Verifiable Random Function — prevents collusion.</span>
            </div>
          </div>
          <div className={og.feat}>
            <div className={og.featDot} />
            <div>
              <strong>Use Cases</strong>
              <span>L1/L2 chains, DeFi settlement, on-chain gaming, AI/ML datasets.</span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // ── INFTs ────────────────────────────────────────────────────────────
    <div key="infts" className={`${d.si} ${d.gapSm}`}>
      <div>
        <span className={d.tag}>INFTs &amp; ERC-7857</span>
        <h2>AI Meets NFTs</h2>
        <p className={d.desc} style={{ marginBottom: 0, fontSize: ".88rem" }}>
          Normal NFTs point to public files. For AI, the value IS the data.
          INFTs transfer actual working intelligence.
        </p>
      </div>

      <div className={og.inftCompare}>
        <div className={`${og.inftBox} ${og.inftOld}`}>
          <h4>Normal NFTs</h4>
          <ul>
            <li>Own a receipt pointing to a public file</li>
            <li>Anyone can copy the content</li>
            <li>File stays on creator’s server</li>
            <li>Static — content never changes</li>
          </ul>
        </div>
        <div className={`${og.inftBox} ${og.inftNew}`}>
          <h4>INFTs (ERC-7857)</h4>
          <ul>
            <li>Own the actual working AI agent</li>
            <li>Encrypted — only owner can access</li>
            <li>Intelligence transfers on sale</li>
            <li>Dynamic — AI evolves, metadata updates</li>
          </ul>
        </div>
      </div>

      <div className={d.grid3} style={{ marginTop: ".4rem" }}>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Encrypted Metadata</h3>
          <p>Only the current owner holds the decryption key.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Secure Re-Encryption</h3>
          <p>On transfer, oracle re-encrypts for new owner. Old key dies.</p>
        </div>
        <div className={`${d.card} ${d.cardCompact}`}>
          <h3>Clone &amp; Lease</h3>
          <p>Clone agents as new INFTs. Grant usage without giving ownership.</p>
        </div>
      </div>
    </div>,

    // ── What you can build ───────────────────────────────────────────────
    <div key="build" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>For Builders</span>
        <h2>What Can You Build on 0G?</h2>
      </div>

      <div className={d.grid3}>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>On-Chain AI Agents</h3>
          <p>Trading bots, assistants, game characters — verifiable and owned by users.</p>
        </div>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>Decentralized Chat AI</h3>
          <p>AI chat on decentralized GPUs. Conversations stay in your control.</p>
        </div>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>AI-Powered DeFi</h3>
          <p>Smarter trading, risk analysis, fraud detection running on-chain.</p>
        </div>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>Medical AI</h3>
          <p>Patients own data, grant access to AI models. Verifiable, no corporate control.</p>
        </div>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>Distributed AI Training</h3>
          <p>GPU training at a fraction of AWS cost. For students and indie researchers.</p>
        </div>
        <div className={og.use}>
          <div className={og.useBar} />
          <h3>Data Markets</h3>
          <p>Sell data to AI devs directly. Smart contracts handle everything.</p>
        </div>
      </div>
    </div>,

    // ── Token ────────────────────────────────────────────────────────────
    <div key="token" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>The Token</span>
        <h2>0G Token (A0GI)</h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 420 }}>
          The native token fueling every layer of the 0G ecosystem.
        </p>
      </div>

      <div className={d.flowWrap} style={{ marginTop: ".5rem" }}>
        <svg viewBox="0 0 640 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="320" cy="70" r="32" fill="#F5EEFF" stroke="#B75FFF" strokeWidth="1.5" />
          <text x="320" y="66" textAnchor="middle" fill="#9200E1" fontSize="13" fontWeight="800">A0GI</text>
          <text x="320" y="80" textAnchor="middle" fill="#9200E1" fontSize="8" className={d.monoText}>TOKEN</text>
          <rect x="0" y="10" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
          <text x="52" y="32" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Gas Fees</text>
          <text x="52" y="46" textAnchor="middle" fill="#8888a0" fontSize="8">Chain transactions</text>
          <rect x="0" y="80" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
          <text x="52" y="102" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Storage</text>
          <text x="52" y="116" textAnchor="middle" fill="#8888a0" fontSize="8">File storage fees</text>
          <rect x="152" y="0" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
          <text x="204" y="22" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Compute</text>
          <text x="204" y="36" textAnchor="middle" fill="#8888a0" fontSize="8">Pay GPU providers</text>
          <rect x="535" y="10" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
          <text x="587" y="32" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Staking</text>
          <text x="587" y="46" textAnchor="middle" fill="#8888a0" fontSize="8">Secure + earn</text>
          <rect x="535" y="80" width="105" height="50" rx="8" fill="white" stroke="#E5E5E5" strokeWidth="1" />
          <text x="587" y="102" textAnchor="middle" fill="#1a1a2e" fontSize="11" fontWeight="600">Governance</text>
          <text x="587" y="116" textAnchor="middle" fill="#8888a0" fontSize="8">Vote on direction</text>
          <line x1="108" y1="35" x2="288" y2="60" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="108" y1="105" x2="288" y2="80" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="257" y1="30" x2="290" y2="55" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="532" y1="35" x2="352" y2="60" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
          <line x1="532" y1="105" x2="352" y2="80" stroke="#E3C1FF" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </div>
    </div>,

    // ── CTA ──────────────────────────────────────────────────────────────
    <div key="cta" className={`${d.si} ${d.centered}`}>
      <span className={d.tag}>Start Building</span>
      <h2>Ready to Build on 0G?</h2>
      <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 460 }}>
        The barrier to entry has dropped. A solo developer in Nigeria can build
        and deploy AI-powered applications on the same infrastructure as anyone
        else in the world.
      </p>
      <div className={d.ctaLinks}>
        <a className={`${d.ctaLink} ${d.ctaPrimary}`} href="https://docs.0g.ai/" target="_blank" rel="noreferrer">
          Read the Docs
        </a>
        <a className={d.ctaLink} href="https://build.0g.ai/" target="_blank" rel="noreferrer">
          Builder Hub
        </a>
        <a className={d.ctaLink} href="https://hub.0g.ai" target="_blank" rel="noreferrer">
          0G Hub
        </a>
        <a className={d.ctaLink} href="https://0g.ai" target="_blank" rel="noreferrer">
          0G.ai
        </a>
      </div>
    </div>,
  ];

  return <Deck title={title} theme={theme} slides={slides} />;
}

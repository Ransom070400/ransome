import Deck, { type DeckTheme } from "./Deck";
import d from "./deck.module.css";
import vc from "./vibe-coding.module.css";

/**
 * Emerald, and columns that hang from the top — these slides are dense lists
 * and code samples rather than the centred diagrams the 0G deck runs on.
 */
const theme: DeckTheme = {
  accent: "#10b981",
  accentRgb: "16 185 129",
  accentAlt: "#34d399",
  accentSoft: "#6ee7b7",
  splitGap: "2.5rem",
  splitAlign: "start",
  splitHeight: "auto",
};

/**
 * "Vibe Coding Starter Guide". Fourteen slides: the golden rule, thirteen
 * practices, the pitfalls they avoid, and the BMAD agent pipeline.
 */
export default function VibeCodingDeck({ title }: { title: string }) {
  const slides = [
    // ── Title ────────────────────────────────────────────────────────────
    <div key="title" className={`${d.si} ${d.centered}`}>
      <div className={d.eyebrow}>
        <b>Vibe</b> — Coding Guide
      </div>
      <h1>
        Vibe Coding
        <br />
        Starter <em>Guide</em>
      </h1>
      <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 520 }}>
        “The hottest new programming language is English” — Andrej Karpathy
      </p>
      <div className={vc.contentsGrid}>
        <div className={vc.contentsItem}>The Golden Rule</div>
        <div className={vc.contentsItem}>AI Assistant Context</div>
        <div className={vc.contentsItem}>Best Practices (13 tips)</div>
        <div className={vc.contentsItem}>Common Pitfalls</div>
        <div className={vc.contentsItem}>BMAD Method</div>
      </div>
    </div>,

    // ── The golden rule ──────────────────────────────────────────────────
    <div key="golden-rule" className={`${d.si} ${d.gapLg}`}>
      <div className={d.head}>
        <span className={d.tag}>The Golden Rule</span>
        <h2>Plan with the smartest, code with the fastest</h2>
      </div>

      <div className={vc.tableWrap}>
        <table className={vc.table}>
          <thead>
            <tr>
              <th>Task</th>
              <th>Recommended Models</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Planning &amp; Architecture</strong>
              </td>
              <td>Claude Opus 4.6, Gemini 3.1 Pro, GPT-5.4</td>
              <td>Need deep reasoning, long context</td>
            </tr>
            <tr>
              <td>
                <strong>Writing Code</strong>
              </td>
              <td>Claude Sonnet 4.6, GPT-4o</td>
              <td>Great balance of speed + quality</td>
            </tr>
            <tr>
              <td>
                <strong>Quick Iterations</strong>
              </td>
              <td>Claude Haiku 4.5, Grok Fast, Gemini 3 Flash</td>
              <td>Speed &gt; perfection</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,

    // ── AI assistant context ─────────────────────────────────────────────
    <div key="context" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>AI Assistant Context</span>
        <h2>Give Your AI the Right Context</h2>
      </div>

      <div className={vc.callout}>
        <div className={vc.calloutIcon}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            <circle cx="12" cy="16" r="1" />
          </svg>
        </div>
        <div>
          <strong>Share docs.0g.ai/ai-context with your AI coding assistant</strong>
          <p>
            (Claude, ChatGPT, Cursor, etc.) for instant access to all 0G network
            configs, contract addresses, code examples, and SDK commands. This
            context page helps AI provide accurate, copy-paste ready code for
            building on 0G.
          </p>
        </div>
      </div>
    </div>,

    // ── Tip 01 ───────────────────────────────────────────────────────────
    <div key="tip-01" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Tip 01</span>
          <h2>Always Plan First</h2>
          <p className={d.desc}>
            Before you write a single line of code, ask your AI to plan.
          </p>
          <div className={vc.whyList}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Catches issues before they’re coded</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Gives you a checklist to verify</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Reduces context loss in long sessions</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Creates documentation automatically</span>
            </div>
          </div>
        </div>

        <div className={vc.codeCompare}>
          <div className={`${vc.codeBlock} ${vc.codeBad}`}>
            <div className={`${vc.codeLabel} ${vc.labelBad}`}>Don’t</div>
            <code>“Build me a login system”</code>
          </div>
          <div className={`${vc.codeBlock} ${vc.codeGood}`}>
            <div className={`${vc.codeLabel} ${vc.labelGood}`}>Do</div>
            <code>
              “Create a detailed plan for a login system. Include:
              <br />- Architecture decisions
              <br />- Security considerations
              <br />- File structure
              <br />- Step-by-step implementation checklist
              <br />
              Save as plan.md”
            </code>
          </div>
        </div>
      </div>
    </div>,

    // ── Tips 02 & 03 ─────────────────────────────────────────────────────
    <div key="tips-02-03" className={`${d.si} ${d.gapLg}`}>
      <div className={d.split}>
        <div className={d.card}>
          <span className={d.tag}>Tip 02</span>
          <h3>Request Markdown Checklists</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Turn plans into trackable progress.
          </p>
          <div className={vc.miniList}>
            <span>Checkboxes for each step</span>
            <span>Numbered phases</span>
            <span>Dependencies noted</span>
            <span>Acceptance criteria</span>
          </div>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code>
              “…format as a markdown checklist with detailed steps I can track”
            </code>
          </div>
        </div>

        <div className={d.card}>
          <span className={d.tag}>Tip 03</span>
          <h3>Security First (But Don’t Over-Engineer)</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Security is a huge problem in vibe coding — but paranoia kills
            velocity.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code>
              “Review this code for security vulnerabilities. Flag what’s
              necessary vs over-engineering.”
            </code>
          </div>
          <div className={vc.whyList} style={{ marginTop: ".6rem" }}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Start with basic security for MVPs</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Add layers as you scale</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Don’t build enterprise auth for a weekend project</span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // ── Tips 04 & 05 ─────────────────────────────────────────────────────
    <div key="tips-04-05" className={`${d.si} ${d.gapLg}`}>
      <div className={d.split}>
        <div className={d.card}>
          <span className={d.tag}>Tip 04</span>
          <h3>Learn, Don’t Just Ship</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            If you’re a developer, understanding HOW it works matters.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code>
              “Explain how this solution works:
              <br />- What pattern did you use?
              <br />- Why this approach over alternatives?
              <br />- What are the tradeoffs?
              <br />- What would break this?”
            </code>
          </div>
          <div className={vc.whyList} style={{ marginTop: ".6rem" }}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>AI won’t replace devs who understand systems</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>You’ll debug faster when things break</span>
            </div>
          </div>
        </div>

        <div className={d.card}>
          <span className={d.tag}>Tip 05</span>
          <h3>The “Explain It Back” Rule</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Before shipping any AI-generated code:
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code>“Explain this code to me like I’m a junior dev”</code>
          </div>
          <div className={vc.highlightBox}>
            If you can’t understand the explanation, you shouldn’t ship the code.
          </div>
        </div>
      </div>
    </div>,

    // ── Tip 06 ───────────────────────────────────────────────────────────
    <div key="tip-06" className={d.si}>
      <div className={d.split}>
        <div>
          <span className={d.tag}>Tip 06</span>
          <h2>Break It Down — One Thing at a Time</h2>
          <p className={d.desc}>Don’t try to build Rome in one prompt.</p>
          <div className={vc.whyList} style={{ marginTop: "1.2rem" }}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>One feature per conversation thread</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Complete → Test → Move to next</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Each chunk should be independently testable</span>
            </div>
          </div>
        </div>

        <div className={vc.codeCompare}>
          <div className={`${vc.codeBlock} ${vc.codeBad}`}>
            <div className={`${vc.codeLabel} ${vc.labelBad}`}>Don’t</div>
            <code>
              “Build me a complete e-commerce platform with auth, payments,
              inventory, shipping, admin dashboard, and analytics”
            </code>
          </div>
          <div className={`${vc.codeBlock} ${vc.codeGood}`}>
            <div className={`${vc.codeLabel} ${vc.labelGood}`}>Do</div>
            <code>
              “Let’s build an e-commerce platform. First, create the user
              authentication system. Start with the data models.”
            </code>
          </div>
        </div>
      </div>
    </div>,

    // ── Tips 07 & 08 ─────────────────────────────────────────────────────
    <div key="tips-07-08" className={`${d.si} ${d.gapLg}`}>
      <div className={d.split}>
        <div className={d.card}>
          <span className={d.tag}>Tip 07</span>
          <h3>Context is King</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Give AI the right context, not ALL the context.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code>
              “I’m building a React app with TypeScript.
              <br />
              Here’s my current component structure: [paste relevant files]
              <br />I need to add a new feature that…”
            </code>
          </div>
          <div
            className={`${vc.codeBlock} ${vc.codeBad}`}
            style={{ marginTop: ".6rem" }}
          >
            <code>
              “Here’s my entire 500-file codebase [dumps everything] Fix the bug”
            </code>
          </div>
          <p
            className={d.desc}
            style={{ maxWidth: "none", fontSize: ".78rem", marginTop: ".5rem" }}
          >
            Pro tip: Use @codebase in Cursor or reference specific files in Cline.
          </p>
        </div>

        <div className={d.card}>
          <span className={d.tag}>Tip 08</span>
          <h3>Use Rules Files / Custom Instructions</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Train your AI on your preferences ONCE.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code className={vc.codeSm}>
              # .cursorrules / CLAUDE.md
              <br />
              <br />
              ## Code Style
              <br />- TypeScript strict mode
              <br />- Functional components
              <br />- Tailwind for styling
              <br />
              <br />
              ## Don’t
              <br />- Never use `any` type
              <br />- No console.log in prod
            </code>
          </div>
        </div>
      </div>
    </div>,

    // ── Tips 09 & 10 ─────────────────────────────────────────────────────
    <div key="tips-09-10" className={`${d.si} ${d.gapLg}`}>
      <div className={d.split}>
        <div className={d.card}>
          <span className={d.tag}>Tip 09</span>
          <h3>Commit Early, Commit Often</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Git is your safety net — use it.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".8rem" }}
          >
            <code className={vc.codeSm}>
              # Before AI makes big changes
              <br />
              git add . &amp;&amp; git commit -m &quot;checkpoint: before AI
              refactor&quot;
              <br />
              <br /># After each working feature
              <br />
              git add . &amp;&amp; git commit -m &quot;feat: add user auth&quot;
            </code>
          </div>
          <div className={vc.whyList} style={{ marginTop: ".6rem" }}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Easy rollback if AI breaks things</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Track what AI changed vs what you changed</span>
            </div>
          </div>
        </div>

        <div className={d.card}>
          <span className={d.tag}>Tip 10</span>
          <h3>Test As You Go</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Don’t build a mountain then test — test each brick.
          </p>
          <div className={vc.checklist}>
            <div className={vc.checkItem}>
              <div className={vc.checkBox} />
              Does it compile/build?
            </div>
            <div className={vc.checkItem}>
              <div className={vc.checkBox} />
              Does it run without errors?
            </div>
            <div className={vc.checkItem}>
              <div className={vc.checkBox} />
              Does it do what you asked?
            </div>
            <div className={vc.checkItem}>
              <div className={vc.checkBox} />
              Edge cases handled?
            </div>
          </div>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".6rem" }}
          >
            <code>
              “Write unit tests for this function”
              <br />
              “What edge cases should I test for?”
            </code>
          </div>
        </div>
      </div>
    </div>,

    // ── Tips 11–13 ───────────────────────────────────────────────────────
    <div key="tips-11-13" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>Tips 11 – 13</span>
        <h2>Debug, Screenshot, Know Your Limits</h2>
      </div>

      <div className={d.grid3}>
        <div className={d.card}>
          <h3>11. AI Debugging AI</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            AI broke it? AI can fix it.
          </p>
          <div
            className={`${vc.codeBlock} ${vc.codeGood}`}
            style={{ marginTop: ".6rem" }}
          >
            <code className={vc.codeSm}>
              “This code you generated throws an error:
              <br />
              [paste error]
              <br />
              <br />
              Why did this fail? Explain the root cause before fixing.”
            </code>
          </div>
        </div>

        <div className={d.card}>
          <h3>12. Use Screenshots</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            A picture is worth 1000 tokens.
          </p>
          <div className={vc.whyList} style={{ marginTop: ".5rem" }}>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Screenshot your current UI</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Screenshot the design you want</span>
            </div>
            <div className={vc.whyItem}>
              <div className={vc.whyDot} />
              <span>Screenshot the error</span>
            </div>
          </div>
        </div>

        <div className={d.card}>
          <h3>13. Know When to Stop</h3>
          <p className={d.desc} style={{ maxWidth: "none" }}>
            Sometimes the fastest path is typing it yourself.
          </p>
          <div className={vc.twoCol}>
            <div>
              <strong className={vc.forAi}>Use AI for:</strong>
              <span>Boilerplate, complex algorithms, unfamiliar APIs</span>
            </div>
            <div>
              <strong className={vc.byHand}>Do manually:</strong>
              <span>Simple fixes, repeated failures, faster to type</span>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // ── Common pitfalls ──────────────────────────────────────────────────
    <div key="pitfalls" className={`${d.si} ${d.gapLg}`}>
      <div className={d.head}>
        <span className={d.tag}>Common Pitfalls</span>
        <h2>What Goes Wrong — And How to Fix It</h2>
      </div>

      <div className={vc.tableWrap}>
        <table className={vc.table}>
          <thead>
            <tr>
              <th>Pitfall</th>
              <th>Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Skipping planning</strong>
              </td>
              <td>Always plan → review → code</td>
            </tr>
            <tr>
              <td>
                <strong>Mega-prompts</strong>
              </td>
              <td>Break into small, testable chunks</td>
            </tr>
            <tr>
              <td>
                <strong>No version control</strong>
              </td>
              <td>Commit before/after AI changes</td>
            </tr>
            <tr>
              <td>
                <strong>Accepting first solution</strong>
              </td>
              <td>Ask for alternatives</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,

    // ── BMAD: what it is ─────────────────────────────────────────────────
    <div key="bmad" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>BMAD Method</span>
        <h2>
          Breakthrough Method for
          <br />
          Agile AI-Driven Development
        </h2>
        <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 540 }}>
          An open-source framework that brings structure to vibe coding through
          specialized AI agents.
        </p>
      </div>

      <div
        className={vc.highlightBox}
        style={{ textAlign: "center", maxWidth: 500, margin: "0 auto" }}
      >
        BMAD transforms chaotic “vibe coding” into structured, repeatable
        workflows.
      </div>

      <div className={d.grid4} style={{ marginTop: ".5rem" }}>
        <div className={`${d.card} ${vc.statCard}`}>
          <div className={vc.statIcon}>1</div>
          <strong>Front-loads planning</strong>
          <span>Reduces token waste</span>
        </div>
        <div className={`${d.card} ${vc.statCard}`}>
          <div className={vc.statIcon}>2</div>
          <strong>Auto documentation</strong>
          <span>Creates docs as you go</span>
        </div>
        <div className={`${d.card} ${vc.statCard}`}>
          <div className={vc.statIcon}>3</div>
          <strong>Tool agnostic</strong>
          <span>Cursor, VS Code, Claude Code</span>
        </div>
        <div className={`${d.card} ${vc.statCard}`}>
          <div className={vc.statIcon}>4</div>
          <strong>Enterprise ready</strong>
          <span>Audit trails included</span>
        </div>
      </div>
    </div>,

    // ── BMAD: the agent team ─────────────────────────────────────────────
    <div key="bmad-agents" className={`${d.si} ${d.gapMd}`}>
      <div className={d.head}>
        <span className={d.tag}>BMAD Agents</span>
        <h2>The Agent Team</h2>
      </div>

      <div className={d.flowWrap}>
        <svg viewBox="0 0 720 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <marker id="vc-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="#D0D0D8" strokeWidth="1.5" />
            </marker>
          </defs>
          <rect x="0" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="47" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Analyst</text>
          <text x="47" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Project Brief</text>
          <path d="M98 52 L120 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
          <rect x="125" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="172" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">PM</text>
          <text x="172" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">PRD from Brief</text>
          <path d="M223 52 L245 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
          <rect x="250" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="297" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Architect</text>
          <text x="297" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">System Design</text>
          <path d="M348 52 L370 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
          <rect x="375" y="20" width="95" height="65" rx="10" fill="#F0FDF4" stroke="#10B981" strokeWidth="1" strokeOpacity=".3" />
          <text x="422" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Scrum Master</text>
          <text x="422" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Dev Stories</text>
          <path d="M473 52 L495 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
          <rect x="500" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="547" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">Dev</text>
          <text x="547" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Implements Code</text>
          <path d="M598 52 L620 52" stroke="#D0D0D8" strokeWidth="1.5" markerEnd="url(#vc-arrow)" />
          <rect x="625" y="20" width="95" height="65" rx="10" fill="white" stroke="#E5E5E5" strokeWidth="1.5" />
          <text x="672" y="45" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="700">QA</text>
          <text x="672" y="62" textAnchor="middle" fill="#8888a0" fontSize="8">Tests &amp; Reviews</text>
          <text x="360" y="110" textAnchor="middle" fill="#8888a0" fontSize="9" className={d.monoText} letterSpacing="1.5">
            STRUCTURED AI PIPELINE → REPEATABLE RESULTS
          </text>
        </svg>
      </div>
    </div>,

    // ── CTA ──────────────────────────────────────────────────────────────
    <div key="cta" className={`${d.si} ${d.centered}`}>
      <span className={d.tag}>Start Vibing</span>
      <h2>Ready to Vibe Code?</h2>
      <p className={`${d.desc} ${d.descCenter}`} style={{ maxWidth: 460 }}>
        Plan with the smartest. Code with the fastest. Test every brick. Commit
        often. Learn always.
      </p>
      <div className={d.ctaLinks}>
        <a className={`${d.ctaLink} ${d.ctaPrimary}`} href="https://docs.0g.ai/" target="_blank" rel="noreferrer">
          0G Docs
        </a>
        <a className={d.ctaLink} href="https://github.com/bmad-method/BMAD-METHOD" target="_blank" rel="noreferrer">
          BMAD GitHub
        </a>
        <a className={d.ctaLink} href="https://bmad.method.website/" target="_blank" rel="noreferrer">
          BMAD Website
        </a>
      </div>
    </div>,
  ];

  return <Deck title={title} theme={theme} slides={slides} />;
}

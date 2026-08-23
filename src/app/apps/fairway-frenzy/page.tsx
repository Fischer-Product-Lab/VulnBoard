import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const PRODUCT_URL =
  "https://fischer-product-lab-portfolio.vercel.app/apps/fairway-frenzy";
const LAUNCH_EMAIL =
  "mailto:hello@fischerproductlab.com?subject=Fairway%20Frenzy%20launch%20notice&body=Please%20let%20me%20know%20when%20Fairway%20Frenzy%20Golf%20is%20available%20on%20the%20App%20Store.";

const SCREENS = [
  {
    src: "/apps/fairway-frenzy/01-title.png",
    label: "Tee off anywhere",
    copy: "A complete portrait golf career built for one hand, one phone, and no connection.",
    alt: "Fairway Frenzy title screen with a striped fairway, flag, and Tap to tee off prompt.",
  },
  {
    src: "/apps/fairway-frenzy/02-frontier-swing.png",
    label: "Launch into trouble",
    copy: "Ride launch pads, chase coin lines, and carry lava when the frontier stops playing fair.",
    alt: "Wild Frontier hole showing the three-tap swing controls, hazards, and a launch pad.",
  },
  {
    src: "/apps/fairway-frenzy/03-tokyo-pachinko.png",
    label: "Bank the skyline",
    copy: "Use rooftop rails and bumpers to turn a neon tower into a playable pinball table.",
    alt: "Neon Tokyo hole laid out like a vertical pinball table with bumpers and rails.",
  },
  {
    src: "/apps/fairway-frenzy/04-cays-ferry.png",
    label: "Water is the road",
    copy: "Skip the shallows, land on a moving ferry, and let the river carry the next shot.",
    alt: "Castaway Cays hole with a moving ferry route across a large water hazard.",
  },
  {
    src: "/apps/fairway-frenzy/05-kestrel-funnel.png",
    label: "The ground plays",
    copy: "Read the slope before impact; downhill runs, uphill dies, and sidehill lines bend.",
    alt: "Kestrel Pass hole showing a sloped fairway and caddie landing guidance.",
  },
  {
    src: "/apps/fairway-frenzy/06-frost-rink.png",
    label: "Skate the fairway",
    copy: "Use frozen rollout, avoid deep powder, and land softly when the ice gets thin.",
    alt: "Frozen Reach hole with ice, powder, and winter obstacles around the fairway.",
  },
  {
    src: "/apps/fairway-frenzy/07-links-drive.png",
    label: "Play the old game",
    copy: "Wind, bunkers, narrow landing zones, and pure shotmaking still get the last word.",
    alt: "Old Links hole showing a traditional fairway, bunkers, wind, and shot controls.",
  },
  {
    src: "/apps/fairway-frenzy/08-read-the-green.png",
    label: "Read the green",
    copy: "Set the line, judge the pace, and close the hole with a clean three-tap stroke.",
    alt: "Fairway Frenzy putting view with green-reading guidance and the cup ahead.",
  },
  {
    src: "/apps/fairway-frenzy/09-clubhouse.png",
    label: "Build the clubhouse",
    copy: "Earn upgrades, cosmetics, achievements, personal bests, and a career worth keeping.",
    alt: "Fairway Frenzy clubhouse showing career progress, upgrades, and unlocks.",
  },
  {
    src: "/apps/fairway-frenzy/10-beat-the-field.png",
    label: "Beat the field",
    copy: "Play Quick 3, Nine, or 18 against seven simulated rivals and survive the playoff.",
    alt: "Fairway Frenzy tournament results showing the player against a simulated field.",
  },
];

export const metadata: Metadata = {
  title: "Fairway Frenzy Golf | Fischer Product Lab",
  description:
    "Six wildly different golf worlds, 108 handcrafted holes, and a complete premium arcade golf career that works fully offline on iPhone.",
  alternates: { canonical: PRODUCT_URL },
  openGraph: {
    title: "Fairway Frenzy Golf",
    description:
      "Six courses, 108 handcrafted holes, four ways to play, and one complete offline golf career.",
    type: "website",
    url: PRODUCT_URL,
    images: [
      {
        url: "/apps/fairway-frenzy/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Fairway Frenzy app icon with a flag and golf ball on a dark green course.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Fairway Frenzy Golf",
    description: "Golf six worlds and 108 handcrafted holes, fully offline.",
    images: ["/apps/fairway-frenzy/app-icon.png"],
  },
};

export default function FairwayFrenzyPage() {
  return (
    <div className={styles.page}>
      <div className={styles.grain} aria-hidden />

      <header className={styles.header}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="Return to Fischer Product Lab"
        >
          <Image
            src="/apps/fairway-frenzy/app-icon.png"
            alt=""
            width={48}
            height={48}
            className={styles.brandIcon}
            priority
          />
          <span>
            <strong>Fairway Frenzy</strong>
            <small>Fischer Product Lab</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Fairway Frenzy page navigation">
          <a href="#game">The game</a>
          <a href="#screens">Courses</a>
          <a href="#privacy">Privacy</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Premium offline iPhone game · coming soon</p>
            <h1>
              Six worlds. <span>One swing.</span>
            </h1>
            <p className={styles.lede}>
              Golf the world across 108 handcrafted holes. Skip water, ride ferries,
              bank rooftop bumpers, skate ice, and read mountain slopes—then bring the
              whole tour anywhere.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={LAUNCH_EMAIL}>
                Get the launch notice
              </a>
              <a className={styles.secondaryAction} href="#screens">
                Tour the courses
              </a>
            </div>
            <dl className={styles.stats} aria-label="Fairway Frenzy game highlights">
              <div>
                <dt>6</dt>
                <dd>golf worlds</dd>
              </div>
              <div>
                <dt>108</dt>
                <dd>handcrafted holes</dd>
              </div>
              <div>
                <dt>4</dt>
                <dd>ways to play</dd>
              </div>
              <div>
                <dt>0</dt>
                <dd>ads or IAP</dd>
              </div>
            </dl>
          </div>

          <figure className={styles.heroPhone}>
            <div className={styles.phoneGlow} aria-hidden />
            <div className={styles.phoneFrame}>
              <Image
                src="/apps/fairway-frenzy/01-title.png"
                alt="Fairway Frenzy title screen with a striped fairway and Tap to tee off prompt."
                width={1290}
                height={2796}
                sizes="(max-width: 760px) 82vw, 390px"
                className={styles.phoneImage}
                priority
              />
            </div>
            <figcaption>Captured from the verified iPhone Release candidate</figcaption>
          </figure>
        </section>

        <section id="game" className={styles.manifesto} aria-labelledby="game-title">
          <p className={styles.kicker}>Arcade golf with a passport</p>
          <h2 id="game-title">Aim the line. Lock the swing. Let the course answer.</h2>
          <p>
            Every shot is built around a fast three-tap swing: aim, choose a club, lock
            power, then find clean contact. The caddie reads lie, wind, rollout, walls,
            water, and slope—but the last tap is still yours.
          </p>
        </section>

        <section className={styles.features} aria-label="Fairway Frenzy features">
          <article>
            <span>01</span>
            <h3>Six worlds, six kinds of golf</h3>
            <p>
              Play classic links, lava country, island waterways, frozen hazards, neon
              rooftops, and mountain fairways where the ground redirects the ball.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Three taps to glory</h3>
            <p>
              Read the landing ring, choose the club, then commit to power and contact.
              A clear portrait layout keeps every shot fast without making it automatic.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>A hole now. A career later.</h3>
            <p>
              Play Quick 3, Nine, or 18, head-to-head Match Play, a seeded Daily
              Challenge, and sudden-death playoffs while building clubs and career stats.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>The whole tour, up front</h3>
            <p>
              No ads, no in-app purchases, no account, no analytics, and no connection
              required. Buy once, tee off anywhere, and keep the progress on your phone.
            </p>
          </article>
        </section>

        <section id="screens" className={styles.screens} aria-labelledby="screens-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>A six-course world tour</p>
              <h2 id="screens-title">Every place asks for a different shot.</h2>
            </div>
            <p>Scroll the current launch set.</p>
          </div>
          <div className={styles.screenRail}>
            {SCREENS.map((screen) => (
              <figure className={styles.screenCard} key={screen.src}>
                <div className={styles.screenFrame}>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    width={1290}
                    height={2796}
                    sizes="(max-width: 640px) 74vw, (max-width: 1100px) 34vw, 290px"
                    className={styles.screenImage}
                  />
                </div>
                <figcaption>
                  <strong>{screen.label}</strong>
                  <span>{screen.copy}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className={styles.premium} aria-labelledby="premium-title">
          <div>
            <p className={styles.kicker}>One green fee. The whole tour.</p>
            <h2 id="premium-title">A complete premium golf game.</h2>
            <p>
              Planned as a $2.99 one-time purchase for iPhone. Final availability and
              price will be confirmed at launch.
            </p>
          </div>
          <div className={styles.priceCard}>
            <span>Planned launch price</span>
            <strong>$2.99</strong>
            <small>No ads · no IAP · fully offline</small>
            <a href={LAUNCH_EMAIL}>Get the launch notice</a>
          </div>
        </section>

        <aside id="privacy" className={styles.privacyNote}>
          Fairway Frenzy has no account, tracking, analytics, advertising, or network
          requests. Progress and settings stay on the device.
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>Fairway Frenzy · Fischer Product Lab · © Trevor Fischer</p>
        <div>
          <Link href="/">Portfolio</Link>
          <Link href="/apps/hit-me">Hit Me</Link>
          <a href="mailto:hello@fischerproductlab.com">Support</a>
          <a href="#privacy">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const PRODUCT_URL = "https://fischer-product-lab-portfolio.vercel.app/apps/hit-me";
const LAUNCH_EMAIL =
  "mailto:hello@fischerproductlab.com?subject=Hit%20Me%20launch%20notice&body=Please%20let%20me%20know%20when%20Hit%20Me%20is%20available%20on%20the%20App%20Store.";

const SCREENS = [
  {
    src: "/apps/hit-me/01-title.png",
    label: "Choose your edge",
    copy: "Five opening decks, a daily seeded deal, and seven escalating Marker levels.",
    alt: "Hit Me title screen showing deck choices, Marker II, Daily Deal, and New Run controls.",
  },
  {
    src: "/apps/hit-me/02-the-hand.png",
    label: "Play the hand",
    copy: "Hit, stand, double, split, and let rule-breaking relics turn the table.",
    alt: "A live blackjack hand in Hit Me with cards, score target, relics, and action controls.",
  },
  {
    src: "/apps/hit-me/03-the-spread.png",
    label: "Build the spread",
    copy: "Shape the shoe, stitch card Threads, and level the relics behind your best line.",
    alt: "Hit Me collection spread showing illustrated relics, card Threads, and deck-building choices.",
  },
  {
    src: "/apps/hit-me/04-boss.png",
    label: "Read the dealer",
    copy: "Fourteen bosses bend blackjack in their own way. The House is waiting at round twelve.",
    alt: "Hit Me boss dealer screen presenting a special dealer rule on an aged wanted poster.",
  },
  {
    src: "/apps/hit-me/05-the-payout.png",
    label: "Bank the payout",
    copy: "Clear the target early, collect the receipt, then buy the next unfair advantage.",
    alt: "Hit Me round-clear receipt showing the chip payout and transition to the next shop.",
  },
  {
    src: "/apps/hit-me/06-the-ledger.png",
    label: "Climb the ledger",
    copy: "Track wins, decks, daily streaks, cosmetics, and the deepest run you survived.",
    alt: "Hit Me career ledger showing long-term progression, unlocks, and run history.",
  },
];

export const metadata: Metadata = {
  title: "Hit Me: Blackjack Roguelike | Fischer Product Lab",
  description:
    "Break blackjack on purpose, build a crooked deck, and beat the House in twelve rounds. A premium offline iPhone roguelike with no ads or in-app purchases.",
  alternates: { canonical: PRODUCT_URL },
  openGraph: {
    title: "Hit Me: Blackjack Roguelike",
    description:
      "Break blackjack on purpose. Thirty-one relics, fourteen boss dealers, five decks, and one House to beat.",
    type: "website",
    url: PRODUCT_URL,
    images: [
      {
        url: "/apps/hit-me/app-icon.png",
        width: 1024,
        height: 1024,
        alt: "Hit Me app icon with a glowing gold spade on a dark back-room table.",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Hit Me: Blackjack Roguelike",
    description: "Break blackjack on purpose and beat the House in twelve rounds.",
    images: ["/apps/hit-me/app-icon.png"],
  },
};

export default function HitMePage() {
  return (
    <div className={styles.page}>
      <div className={styles.grain} aria-hidden />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Return to Fischer Product Lab">
          <Image
            src="/apps/hit-me/app-icon.png"
            alt=""
            width={48}
            height={48}
            className={styles.brandIcon}
            priority
          />
          <span>
            <strong>Hit Me</strong>
            <small>Fischer Product Lab</small>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Hit Me page navigation">
          <a href="#game">The game</a>
          <a href="#screens">Screens</a>
          <a href="https://fischer-product-lab.github.io/legal/hit-me/">Privacy</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Premium offline iPhone game · coming soon</p>
            <h1>
              The House plays fair.{" "}
              <span>You don&apos;t.</span>
            </h1>
            <p className={styles.lede}>
              Break blackjack on purpose, build a crooked deck, and beat the House in twelve
              rounds. Every run is a new argument with the rules.
            </p>
            <div className={styles.actions}>
              <a className={styles.primaryAction} href={LAUNCH_EMAIL}>
                Get the launch notice
              </a>
              <a className={styles.secondaryAction} href="#screens">
                See the table
              </a>
            </div>
            <dl className={styles.stats} aria-label="Hit Me game highlights">
              <div>
                <dt>31</dt>
                <dd>relics</dd>
              </div>
              <div>
                <dt>14</dt>
                <dd>boss dealers</dd>
              </div>
              <div>
                <dt>5</dt>
                <dd>opening decks</dd>
              </div>
              <div>
                <dt>12</dt>
                <dd>rounds to the House</dd>
              </div>
            </dl>
          </div>

          <figure className={styles.heroPhone}>
            <div className={styles.phoneGlow} aria-hidden />
            <div className={styles.phoneFrame}>
              <Image
                src="/apps/hit-me/01-title.png"
                alt="Hit Me title screen with five decks, a Daily Deal, and the New Run button."
                width={1290}
                height={2796}
                sizes="(max-width: 760px) 82vw, 390px"
                className={styles.phoneImage}
                priority
              />
            </div>
            <figcaption>Captured from the current iPhone build</figcaption>
          </figure>
        </section>

        <section id="game" className={styles.manifesto} aria-labelledby="game-title">
          <p className={styles.kicker}>Blackjack, after closing time</p>
          <h2 id="game-title">Make the hand. Break the rule. Build the run.</h2>
          <p>
            Each round sets a chip target and gives you a fixed number of hands. Bank chips,
            clear the target, then visit the Fence for relics, card surgery, permanent Edges,
            and favors that make the next table a little less honest.
          </p>
        </section>

        <section className={styles.features} aria-label="Hit Me features">
          <article>
            <span>01</span>
            <h3>Blackjack you can bend</h3>
            <p>
              Gild cards, duplicate winners, remove dead weight, stitch suits together, and
              level the relics that turn a good hand into a machine.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Dealers with a tell</h3>
            <p>
              The Grinder refuses to stand. The Psychic sees your total. Lights Out hides your
              own card. Every boss changes what a safe hand means.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>A descent worth replaying</h3>
            <p>
              Seven Marker levels, five decks, daily seeded runs, long-term cosmetics, and a
              local career ledger keep the table moving after the first win.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>The whole game, up front</h3>
            <p>
              No ads, no in-app purchases, no account, no analytics, and no connection required.
              The game lives on your phone and plays on a plane.
            </p>
          </article>
        </section>

        <section id="screens" className={styles.screens} aria-labelledby="screens-title">
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.kicker}>Inside the back room</p>
              <h2 id="screens-title">Every screen earns its place at the table.</h2>
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
            <p className={styles.kicker}>One price. No side action.</p>
            <h2 id="premium-title">A complete premium game.</h2>
            <p>
              Planned as a $3.99 one-time purchase for iPhone. Final availability and price will
              be confirmed at launch.
            </p>
          </div>
          <div className={styles.priceCard}>
            <span>Planned launch price</span>
            <strong>$3.99</strong>
            <small>No ads · no IAP · fully offline</small>
            <a href={LAUNCH_EMAIL}>Get the launch notice</a>
          </div>
        </section>

        <aside className={styles.gamblingNote}>
          Hit Me uses fictional chips only. There are no cash prizes, purchases, cash-out
          mechanics, or links to real-money gambling.
        </aside>
      </main>

      <footer className={styles.footer}>
        <p>Hit Me · Fischer Product Lab · © Trevor Fischer</p>
        <div>
          <Link href="/">Portfolio</Link>
          <a href="mailto:hello@fischerproductlab.com">Support</a>
          <a href="https://fischer-product-lab.github.io/legal/hit-me/">Privacy</a>
        </div>
      </footer>
    </div>
  );
}

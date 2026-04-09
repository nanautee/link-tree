import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import {
  bannerUrl,
  labelPrimary,
  labelSecondary,
  linkPrimary,
  linkSecondary,
} from "./config";

const ONLYFANS_ICON_SRC = "/OnlyFans_Social_Icon_Circle_Blue.svg";

function LinkCard({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <a
      className="link-card"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      referrerPolicy="strict-origin-when-cross-origin"
    >
      <span className="link-card__brand" aria-hidden>
        <img
          className="link-card__logo"
          src={ONLYFANS_ICON_SRC}
          width={40}
          height={40}
          alt=""
          decoding="async"
        />
      </span>
      <span className="link-card__label">{label}</span>
    </a>
  );
}

export function App() {
  return (
    <>
      <main className="landing" role="main">
        <div
          className="landing__bg"
          style={{ backgroundImage: `url(${JSON.stringify(bannerUrl)})` }}
          aria-hidden
        />
        <div className="landing__scrim" aria-hidden />
        <div className="landing__content">
          <nav className="landing__nav" aria-label="Ссылки на страницы">
            <LinkCard href={linkPrimary} label={labelPrimary} />
            <LinkCard href={linkSecondary} label={labelSecondary} />
          </nav>
        </div>
      </main>
      <Analytics />
    </>
  );
}

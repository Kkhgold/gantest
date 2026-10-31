export default function Header() {
  return (
<header className="header wrap">
    <a className="brand" href="#home" aria-label="Kkhgold 홈"><span className="brand-mark">K.</span> Kkhgold<span className="brand-dot"> / ENGINEERING</span></a>
    <nav aria-label="주요 메뉴"><a href="#exposure">노광 원리</a><a href="#about">소개</a><a href="#experience">경험</a><a href="#learning">배움</a><a className="nav-contact" href="#connect">Connect <span>↗</span></a></nav>
  </header>
  );
}

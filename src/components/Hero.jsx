import ArcReactor from './ArcReactor.jsx';

export default function Hero() {
  return (
<section className="hero wrap" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot"></span> PHOTOLITHOGRAPHY · SYSTEMS / ARC CORE</p>
        <h1>현장을 이해하고,<br />시스템으로<br /><span>이어갑니다.</span></h1>
        <p className="hero-description">포토공정 노광장비 엔지니어.<br />16년의 설비 메인터넌스 경험을 시스템 업무로 이어갑니다.</p>
        <div className="hero-actions"><a className="button" href="#experience">나의 경험 살펴보기 <span>↗</span></a><a className="text-link" href="https://github.com/Kkhgold" target="_blank" rel="noopener noreferrer">GitHub <span>↗</span></a></div>
        <p className="hero-note">포토공정 · 노광장비 엔지니어 <span>/</span> 현재 시스템 업무 담당</p>
      </div>
      <ArcReactor />
    </section>
  );
}

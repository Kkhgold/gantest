import { useEffect, useState } from 'react';
import './exposure.css';

const steps = [
  { title: '빛을 준비합니다', label: 'LIGHT SOURCE', text: '광원에서 나온 빛을 조명 광학계로 정돈해 레티클에 균일하게 전달합니다.' },
  { title: '회로 패턴을 통과합니다', label: 'RETICLE / MASK', text: '레티클의 투과 영역을 지난 빛에 회로 패턴의 정보가 담깁니다. 어두운 영역은 빛을 차단합니다.' },
  { title: '렌즈로 축소 투영합니다', label: 'PROJECTION OPTICS', text: '투영 렌즈가 패턴을 축소해 웨이퍼 위 감광막에 결상합니다. 빛을 받은 감광막에는 화학적 변화로 잠상이 형성됩니다.' },
  { title: '현상으로 패턴을 드러냅니다', label: 'DEVELOPMENT', text: '노광 뒤 별도의 현상 공정에서 감광막 패턴이 드러납니다. 이 그림은 빛을 받은 부분이 제거되는 양성 감광막의 단순화된 예시입니다.' },
];

export default function Exposure() {
  const [stage, setStage] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => setStage(s => (s + 1) % steps.length), 3600);
    return () => window.clearInterval(timer);
  }, [playing]);
  return (
    <section className="section wrap exposure" id="exposure">
      <div className="section-heading">
        <div className="section-label"><span>OPTICAL ENGINEERING / HOW IT WORKS</span><h2>빛이 지나간 자리,<br />패턴이 시작됩니다.</h2></div>
        <p>노광장비 안에서 일어나는 일.<br />빛에서 감광막 패턴까지.</p>
      </div>
      <div className={`exposure-console ${playing ? 'is-playing' : ''}`} data-stage={stage}>
        <div className="exposure-topline"><span><i className="status-dot" /> PHOTOLITHOGRAPHY / OPTICAL PATH</span><button type="button" onClick={() => setPlaying(p => !p)} aria-label={playing ? '노광 원리 자동 재생 일시정지' : '노광 원리 자동 재생'}>{playing ? 'Ⅱ 일시정지' : '▶ 애니메이션 재생'}</button></div>
        <div className="exposure-layout">
          <svg className="exposure-diagram" viewBox="0 0 660 670" role="img" aria-labelledby="exposure-title exposure-desc">
            <title id="exposure-title">광원에서 감광막까지 이어지는 노광 광학계</title>
            <desc id="exposure-desc">빛이 레티클을 통과하고 투영 렌즈에서 축소되어 웨이퍼 위 감광막에 패턴을 전달합니다. 현상은 노광 후 별도로 진행합니다.</desc>
            <defs>
              <linearGradient id="exp-metal" x2="1" y2="1"><stop stopColor="#688e9f" /><stop offset=".3" stopColor="#172f42" /><stop offset=".7" stopColor="#345a6e" /><stop offset="1" stopColor="#0c1d2b" /></linearGradient>
              <linearGradient id="exp-glass" x2="0" y2="1"><stop stopColor="#b0f8ff" stopOpacity=".7" /><stop offset=".5" stopColor="#32cce9" stopOpacity=".12" /><stop offset="1" stopColor="#a0f4ff" stopOpacity=".65" /></linearGradient>
              <linearGradient id="exp-beam" x2="0" y2="1"><stop stopColor="#81f4ff" stopOpacity=".35" /><stop offset="1" stopColor="#31cadc" stopOpacity=".04" /></linearGradient>
              <pattern id="exp-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0V28" fill="none" stroke="#77d2ee" strokeOpacity=".06" /></pattern>
            </defs>
            <rect width="660" height="670" fill="url(#exp-grid)" />
            <circle className="exp-light-packet" cx="330" cy="95" r="5" fill="#e4ffff" />
            <path d="M330 32V494" stroke="#53899e" strokeDasharray="3 9" opacity=".5" />
            <g className="exp-light"><rect x="245" y="32" width="170" height="54" rx="8" fill="url(#exp-metal)" stroke="#70a6b9" /><rect x="272" y="47" width="116" height="23" rx="11" fill="#b6faff" /><path d="M276 86L237 168H423L384 86Z" fill="url(#exp-beam)" /><path className="exp-photons" d="M294 87L267 165M330 87V165M366 87L393 165" /></g>
            <g className="exp-label"><text x="34" y="60">01 / 광원</text><text x="450" y="58">LIGHT SOURCE</text><text x="450" y="78" className="exp-sub">광원 · 조명 광학계</text></g>
            <g><rect x="210" y="172" width="240" height="17" rx="2" fill="#07131d" stroke="#95c9d7" />{[242, 282, 322, 362, 402].map(x => <rect key={x} x={x} y="174" width="16" height="13" fill="#c4fcff" />)}<path d="M200 199H460" stroke="#42687d" /><text x="450" y="166" className="exp-label">RETICLE</text><text x="34" y="184" className="exp-label">02 / 패턴</text></g>
            <g className="exp-pattern-light"><path d="M250 190L305 462M290 190L317 462M330 190V462M370 190L343 462M410 190L355 462" className="exp-photons" /><path d="M242 190L300 460H310L258 190ZM282 190L313 460H321L298 190ZM322 190L326 460H334L338 190ZM362 190L339 460H347L378 190ZM402 190L351 460H361L418 190Z" fill="url(#exp-beam)" /></g>
            <g className="exp-lenses"><path d="M223 244V383M437 244V383" stroke="url(#exp-metal)" strokeWidth="14" /><path d="M233 251Q330 219 427 251Q330 286 233 251Z" fill="url(#exp-glass)" stroke="#8ce8f4" /><path d="M247 305Q330 278 413 305Q330 338 247 305Z" fill="url(#exp-glass)" stroke="#8ce8f4" /><path d="M265 364Q330 341 395 364Q330 389 265 364Z" fill="url(#exp-glass)" stroke="#8ce8f4" /><path d="M213 230H447M213 395H447" stroke="#547e92" /><text x="34" y="309" className="exp-label">03 / 투영</text><text x="456" y="306" className="exp-label">PROJECTION</text><text x="456" y="327" className="exp-sub">축소 투영</text></g>
            <g><ellipse cx="330" cy="474" rx="145" ry="27" fill="#234357" stroke="#8ec4d9" /><ellipse cx="330" cy="469" rx="145" ry="27" fill="#12333e" stroke="#58dbd4" /><g className="exp-wafer-pattern">{[0,1,2,3,4].map(i=><path key={i} d={`M${287+i*18} 455v25h8v-25`} fill="none" stroke="#b6fcf7" strokeWidth="2" />)}</g><path d="M173 511H487L460 526H200Z" fill="url(#exp-metal)" stroke="#4e778d" /><text x="34" y="475" className="exp-label">WAFER</text><text x="482" y="472" className="exp-sub">감광막</text></g>
            <path d="M330 530V555" stroke="#75a0b0" strokeDasharray="3 4" />
            <g className="exp-cross-section"><text x="173" y="569" className="exp-sub">감광막 단면 확대 / POSITIVE RESIST</text><rect x="174" y="602" width="312" height="21" fill="#33526a" stroke="#7495ab" /><rect x="174" y="580" width="312" height="21" fill="#247e86" />{[205,259,313,367,421].map(x=><rect key={x} className="exp-resist-exposed" x={x} y="580" width="25" height="21" fill="#a0fcf3" />)}<text x="174" y="646" className="exp-sub">{stage === 3 ? '현상 후: 노광된 감광막 영역 제거' : stage === 2 ? '노광: 감광막의 화학적 변화 · 잠상 형성' : '웨이퍼 위에 도포된 감광막'}</text></g>
          </svg>
          <div className="exposure-explanation"><p className="small-label">FROM LIGHT TO PATTERN</p><h3>회로를 그리는 도구는<br /><span>정밀하게 제어된 빛.</span></h3><div className="exposure-steps">{steps.map((step,i)=><button type="button" key={step.label} className={stage===i?'selected':''} aria-pressed={stage===i} onClick={()=>{setStage(i);setPlaying(false);}}><span className="exp-step-num">0{i+1}</span><span><small>{step.label}</small><strong>{step.title}</strong><span className="exp-step-text">{step.text}</span></span></button>)}</div><p className="exposure-note">원리 이해를 위한 투과형 레티클·투영 렌즈 방식의 개념도입니다. 실제 장비의 구조와 축척을 재현한 그림은 아닙니다. 노광은 감광막에 패턴 정보를 전달하는 과정이며, 웨이퍼를 직접 깎는 식각과는 별도 공정입니다.</p></div>
        </div>
      </div>
    </section>
  );
}

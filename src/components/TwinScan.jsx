import { useEffect, useState } from 'react';
import './twinscan.css';

const phases = [
  ['A 계측 / B 노광', '한 웨이퍼를 노광하는 동안 다른 웨이퍼의 위치와 높이를 계측합니다.'],
  ['스테이지 교환', '계측을 마친 웨이퍼가 노광 위치로 이동하고, 노광을 마친 웨이퍼는 반대편으로 이동합니다.'],
  ['A 노광 / B 계측·교체', '두 스테이지의 역할이 바뀝니다. 노광 완료 웨이퍼는 반출·교체되고 다음 웨이퍼의 계측이 진행됩니다.'],
  ['다음 사이클로', '스테이지가 다시 교환되어 계측과 노광을 병행하는 흐름을 이어갑니다.'],
];
function Table({ name, className }) {
  return <g className={className}><g className="twin-local-scan"><rect x="-94" y="-89" width="188" height="178" rx="18" fill="url(#twin-metal)" stroke="#789fb5" /><path d="M-75-65H75M-75 65H75" stroke="#9dc7d5" strokeOpacity=".5" /><circle r="70" fill="#122f45" stroke="#9ce5ee" strokeWidth="2" /><circle r="64" fill="url(#twin-wafer)" />{Array.from({length:7},(_,row)=>Array.from({length:7},(_,col)=>{const x=(col-3)*16,y=(row-3)*16;return x*x+y*y<3100?<rect key={`${row}-${col}`} x={x-6} y={y-5} width="12" height="10" rx="1" fill="none" stroke="#79d4e1" strokeOpacity=".65" />:null;}))}<path d="M-5 70L0 64L5 70" fill="#04121c" /><rect x="-31" y="93" width="62" height="23" rx="4" fill="#0c2434" stroke="#6fcddc" /><text y="109" textAnchor="middle" className="twin-table-label">TABLE {name}</text></g></g>;
}
export default function TwinScan() {
 const [phase,setPhase]=useState(0);
 const [playing,setPlaying]=useState(true);
 useEffect(()=>{if(!playing)return;const t=setTimeout(()=>setPhase(p=>(p+1)%4),phase%2===0?6000:2000);return()=>clearTimeout(t)},[phase,playing]);
 return <section className="section wrap twin-section" id="twinscan">
  <div className="section-heading"><div className="section-label"><span>ASML TWINSCAN / DUAL STAGE CONCEPT</span><h2>하나는 측정하고,<br />다른 하나는 노광합니다.</h2></div><p>웨이퍼 스테이지의 이동과<br />계측·노광의 병렬 처리 원리.</p></div>
  <div className={`twin-console ${playing?'twin-playing':'twin-paused'}`} data-phase={phase}>
   <div className="twin-bar"><span><i className="status-dot" /> DUAL WAFER STAGE / CONCEPT VIEW</span><button onClick={()=>setPlaying(p=>!p)} type="button">{playing?'Ⅱ 일시정지':'▶ 이어서 재생'}</button></div>
   <div className="twin-phase-ribbon">{['병렬 처리','스테이지 교환','역할 전환','다음 사이클'].map((x,i)=><span key={x} className={phase===i?'active':''}><b>0{i+1}</b> {x}</span>)}</div>
   <svg className="twin-svg" viewBox="0 0 1000 640" role="img" aria-labelledby="twin-title twin-desc">
    <title id="twin-title">ASML TWINSCAN 듀얼 웨이퍼 스테이지 이동 개념 애니메이션</title><desc id="twin-desc">두 테이블이 계측 위치와 노광 위치를 번갈아 이동합니다. 이동 경로와 시간은 실제 장비 동작을 재현하지 않은 개념 표현입니다.</desc>
    <defs><linearGradient id="twin-metal" x2="1" y2="1"><stop stopColor="#597687"/><stop offset=".35" stopColor="#152d40"/><stop offset=".7" stopColor="#355367"/><stop offset="1" stopColor="#091a29"/></linearGradient><radialGradient id="twin-wafer"><stop stopColor="#2b607b"/><stop offset=".75" stopColor="#163b54"/><stop offset="1" stopColor="#397b8e"/></radialGradient><linearGradient id="twin-light" x2="0" y2="1"><stop stopColor="#b4fcff" stopOpacity=".8"/><stop offset="1" stopColor="#5ae6f3" stopOpacity=".08"/></linearGradient><pattern id="twin-grid" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M30 0H0V30" fill="none" stroke="#6da1b8" strokeOpacity=".1"/></pattern></defs>
    <rect x="30" y="185" width="940" height="390" rx="28" fill="#091824" stroke="#456377"/><rect x="48" y="203" width="904" height="354" rx="18" fill="url(#twin-grid)"/><path d="M78 225H922M78 535H922" stroke="#54788e" strokeWidth="4"/><path d="M84 237H916M84 523H916" stroke="#203d52" strokeWidth="8"/>
    <text x="290" y="48" textAnchor="middle" className="twin-heading">METROLOGY</text><text x="290" y="71" textAnchor="middle" className="twin-caption">계측 · 얼라인먼트 · 높이 측정</text><text x="710" y="48" textAnchor="middle" className="twin-heading">EXPOSURE</text><text x="710" y="71" textAnchor="middle" className="twin-caption">스캔 노광 · 필드 간 스텝 이동</text>
    <g><path d="M235 100H345V151H235Z" fill="url(#twin-metal)" stroke="#8ab3c5"/><path d="M256 151L245 183M290 151V183M324 151L335 183" stroke="#b7a1ed" strokeWidth="2"/><text x="290" y="128" textAnchor="middle" className="twin-caption">SENSORS</text></g>
    <g><path d="M658 100H762L749 149H671Z" fill="url(#twin-metal)" stroke="#99d4df"/><ellipse cx="710" cy="147" rx="39" ry="9" fill="#61dfea66" stroke="#a0f5fc"/><text x="710" y="123" textAnchor="middle" className="twin-caption">OPTICS</text></g>
    <g transform="translate(290 367)"><Table name="A" className="twin-stage-a"/></g><g transform="translate(710 367)"><Table name="B" className="twin-stage-b"/></g>
    <g className="twin-station-active"><path d="M257 161L270 319M290 161V319M323 161L310 319" stroke="#bca5ff" strokeDasharray="4 7" className="twin-measure-rays"/><rect x="246" y="317" width="88" height="78" rx="4" fill="#b099ff11" stroke="#bca5ff" strokeDasharray="5 5"/><path d="M684 161H736L752 375H668Z" fill="url(#twin-light)"/><rect x="665" y="361" width="90" height="8" rx="2" fill="#b8ffff" className="twin-exposure-slit"/></g>
    <path d="M366 207C420 169 580 169 634 207M634 548C580 586 420 586 366 548" fill="none" stroke="#4c8297" strokeDasharray="6 9"/><text x="500" y="625" textAnchor="middle" className="twin-caption">STAGE EXCHANGE / 교환 경로는 개념 표현</text>
   </svg>
   <div className="twin-caption-panel"><span className="twin-status-number">0{phase+1}</span><div><h3>{phases[phase][0]}</h3><p>{phases[phase][1]}</p></div><div className="twin-scan-key"><i/> 노광 슬릿</div></div>
   <div className="twin-detail"><div><span>SCAN</span><h3>한 필드는 스캔으로</h3><p>좁은 노광 슬릿을 기준으로 레티클과 웨이퍼를 동기 이동해 패턴을 투영합니다.</p><svg viewBox="0 0 400 110" aria-label="레티클과 웨이퍼의 동기 스캔 개념"><path d="M30 24H370M30 86H370" stroke="#345a70"/><g className="twin-reticle-strip"><rect x="150" y="12" width="100" height="24" fill="#596b86" stroke="#c8dfeb"/><path d="M164 14V34M184 14V34M204 14V34M224 14V34M244 14V34" stroke="#c8fcff"/></g><path d="M196 38L200 74L204 38" fill="#6cf0fa66"/><g className="twin-wafer-strip"><rect x="167" y="76" width="66" height="20" fill="#215270" stroke="#77dfe9"/></g><text x="18" y="54">RETICLE</text><text x="306" y="101">WAFER</text></svg></div><div><span>STEP</span><h3>다음 필드로</h3><p>한 필드의 스캔이 끝나면 웨이퍼 스테이지가 다음 필드로 이동합니다. 이 동작을 반복해 웨이퍼를 처리합니다.</p><div className="twin-fields">{Array.from({length:12},(_,i)=><i key={i} style={{'--field':i}}/>)}</div></div></div>
   <p className="twin-note">ASML의 공개된 TWINSCAN 듀얼 스테이지 원리를 바탕으로 만든 교육용 개념도입니다. 실제 장비의 내부 구조, 교환 경로, 이동 속도, 시간 비율을 재현하지 않습니다. 레티클·웨이퍼 스캔 그림은 DUV 투영 방식의 단순화된 예시이며 축척은 서로 다릅니다. ASML 장비 관련 경력을 의미하지 않습니다. <a href="https://www.asml.com/en/technology/lithography-principles/mechanics-and-mechatronics" target="_blank" rel="noopener noreferrer">ASML 공식 설명 ↗</a></p>
  </div>
 </section>;
}

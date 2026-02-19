import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip as ChartTooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Helmet } from "react-helmet-async";

ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTooltip);

const LABELS = ["02/11", "02/12", "02/13", "02/14", "02/15", "02/16", "02/17", "02/18"];

const DATA: Record<string, { values: number[] }> = {
  df1: { values: [23.61, 3.90, 8.74, 0.05, 2.41, 0.95, 0.47, 21.20] },
  df2: { values: [4.83, 5.99, -1.99, 0.02, 3.17, 0.12, -4.24, 9.78] },
  df3: { values: [3.18, 3.51, -1.36, 0.01, 1.37, 1.88, 0.49, 4.56] },
};

const getBgColors = (values: number[]) =>
  values.map((v) => (v >= 0 ? "rgba(110,205,130,0.75)" : "rgba(224,112,112,0.75)"));
const getBorderColors = (values: number[]) =>
  values.map((v) => (v >= 0 ? "#6ecd82" : "#e07070"));

type ProgramKey = "df1" | "df2" | "df3";

const PERF_DATA: Record<ProgramKey, { label: string; returnPct: string; maxDaily: string; maxDD: string }> = {
  df1: { label: "DF1 PROGRAM", returnPct: "+61.33%", maxDaily: "+23.61%", maxDD: "—" },
  df2: { label: "DF2 PROGRAM", returnPct: "+17.68%", maxDaily: "+9.78%", maxDD: "-4.24%" },
  df3: { label: "DF3 PROGRAM", returnPct: "+13.64%", maxDaily: "+4.56%", maxDD: "-1.36%" },
};

const PROGRAMS: ProgramKey[] = ["df1", "df2", "df3"];

const WeeklyReport: React.FC = () => {
  const [currentProgram, setCurrentProgram] = useState<ProgramKey>("df1");

  const d = DATA[currentProgram];
  const chartData = {
    labels: LABELS,
    datasets: [
      {
        label: "일일 수익률 (%)",
        data: d.values,
        backgroundColor: getBgColors(d.values),
        borderColor: getBorderColors(d.values),
        borderWidth: 1,
        borderRadius: 2,
        minBarLength: 6,
      },
    ],
  };

  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 350 },
    interaction: { mode: "index" as const, axis: "x" as const, intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: (ctx: any) => ctx[0].label + "/26",
          label: (ctx: any) => {
            const v = ctx.parsed.y;
            return ` 일일 수익: ${v >= 0 ? "+" : ""}${v}%`;
          },
        },
        backgroundColor: "#0a1628",
        titleColor: "#c8a96e",
        bodyColor: "#e8e5df",
        padding: 10,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: "#5a5550", font: { family: "DM Mono", size: 9 } },
        border: { color: "#e8e5df" },
      },
      y: {
        grid: { color: "rgba(0,0,0,0.06)" },
        ticks: {
          color: "#5a5550",
          font: { family: "DM Mono", size: 9 },
          callback: (v: any) => v + "%",
        },
        border: { color: "#e8e5df" },
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>DF717 주간 시스템 실행 리포트</title>
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&family=Noto+Sans+KR:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <style>{weeklyReportStyles}</style>
      <div className="wr-body">
        <div className="wr-page">
          {/* HEADER */}
          <div className="wr-header">
            <div className="wr-header-top">
              <div className="wr-brand">
                <div className="wr-brand-name">
                  <img
                    src="/lovable-uploads/df717_logo.png"
                    alt="DF717"
                    className="wr-logo"
                  />
                </div>
                <div className="wr-brand-tagline">AI Automated Trading System</div>
              </div>
              <div className="wr-report-meta">
                <div className="wr-report-label">Weekly System Report</div>
                <div className="wr-report-period">2026년 2월 11일 — 18일</div>
              </div>
            </div>
            <div className="wr-header-rule" />
            <div className="wr-header-title">
              <div className="wr-report-title">주간 시스템 실행 리포트</div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="wr-content">
            {/* SECTION 1 */}
            <div className="wr-section">
              <div className="wr-section-header">
                <span className="wr-section-number">01</span>
                <span className="wr-section-title">프로그램 주간 운행 결과</span>
              </div>

              <div className="wr-perf-grid">
                {PROGRAMS.map((key) => {
                  const p = PERF_DATA[key];
                  return (
                    <div
                      key={key}
                      className={`wr-perf-card ${currentProgram === key ? "active" : ""}`}
                      onClick={() => setCurrentProgram(key)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="wr-perf-program">{p.label}</div>
                      <div className="wr-perf-return positive">{p.returnPct}</div>
                      <div className="wr-perf-details">
                        <div className="wr-perf-detail-row">
                          <span className="wr-detail-label">최대 일일 수익률</span>
                          <span className="wr-detail-val positive-val">{p.maxDaily}</span>
                        </div>
                        <div className="wr-perf-detail-row">
                          <span className="wr-detail-label">최대 낙폭(DD)</span>
                          <span className={`wr-detail-val ${p.maxDD.startsWith("-") ? "negative-val" : ""}`}>
                            {p.maxDD}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="wr-chart-wrap">
                <div className="wr-chart-title-row">
                  <span className="wr-chart-title">일별 투자 손익 (%)</span>
                  <div className="wr-chart-tabs">
                    {PROGRAMS.map((key) => (
                      <button
                        key={key}
                        className={`wr-chart-tab ${currentProgram === key ? "active" : ""}`}
                        onClick={() => setCurrentProgram(key)}
                      >
                        {key.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="wr-chart-container">
                  <Bar data={chartData} options={chartOptions} />
                </div>
              </div>

              <div className="wr-disclaimer-note">
                ※ 상기 수치는 각 프로그램의 실행 결과일 뿐이며, 과거 운용 성과는 미래 수익을 보장하지 않습니다.
              </div>
            </div>

            {/* SECTION 2 */}
            <div className="wr-section">
              <div className="wr-section-header">
                <span className="wr-section-number">02</span>
                <span className="wr-section-title">시스템 기술 현황</span>
              </div>

              <div className="wr-status-grid">
                <div className="wr-status-box">
                  <div className="wr-status-label">프로그램 가동 상태</div>
                  <div className="wr-status-value">
                    <span className="wr-status-dot" /> 정상 운행 중
                  </div>
                </div>
                <div className="wr-status-box">
                  <div className="wr-status-label">서버 상태</div>
                  <div className="wr-status-value">
                    <span className="wr-status-dot" /> 안정
                  </div>
                </div>
                <div className="wr-status-box">
                  <div className="wr-status-label">오류 발생</div>
                  <div className="wr-status-value">
                    <span className="wr-status-dot wr-dot-gold" /> 없음
                  </div>
                </div>
                <div className="wr-status-box">
                  <div className="wr-status-label">거래 실행 방식</div>
                  <div className="wr-status-value">완전 자동화</div>
                </div>
              </div>

              <ul className="wr-feature-list">
                <li className="wr-feature-item">
                  <span className="wr-feature-icon">◆ 01</span>
                  1월 말 이후 시장 데이터 변화에 따른 프로그램 내부 파라미터 자동 재조정이 진행되었습니다.
                </li>
                <li className="wr-feature-item">
                  <span className="wr-feature-icon">◆ 02</span>
                  변동성 증가 구간에서 설계된 로직에 따라 포지션 조정이 자동 실행되었습니다.
                </li>
                <li className="wr-feature-item">
                  <span className="wr-feature-icon">◆ 03</span>
                  모든 거래는 사전 설정된 알고리즘 규칙에 따라 자동 실행되며, 임의적 개입은 없습니다.
                </li>
              </ul>
            </div>

            {/* SECTION 3 */}
            <div className="wr-section">
              <div className="wr-section-header">
                <span className="wr-section-number">03</span>
                <span className="wr-section-title">시장 환경 참고 (공개 정보)</span>
              </div>

              <div className="wr-market-row">
                <div className="wr-market-item">
                  <div className="wr-market-category">거시 환경</div>
                  <div className="wr-market-desc">글로벌 거시 뉴스 및 지정학적 이슈로 인한 변동성 확대</div>
                </div>
                <div className="wr-market-item">
                  <div className="wr-market-category">주요 자산</div>
                  <div className="wr-market-desc">외환, 금, 암호화폐 가격 변동폭 증가 관찰</div>
                </div>
                <div className="wr-market-item">
                  <div className="wr-market-category">유동성</div>
                  <div className="wr-market-desc">주간 유동성 변동 관찰. 시스템 대응 로직 정상 작동</div>
                </div>
              </div>

              <div className="wr-notice-box">
                <p>※ 상기 내용은 공개된 시장 정보를 요약한 것으로, 특정 시장에 대한 전망 또는 투자 의견을 포함하지 않습니다.</p>
              </div>
            </div>

            {/* SECTION 4 */}
            <div className="wr-section">
              <div className="wr-section-header">
                <span className="wr-section-number">04</span>
                <span className="wr-section-title">기술 안내</span>
              </div>
              <div className="wr-notice-box">
                <p>
                  본 프로그램은 시장 상황에 따라 자동으로 거래를 실행하는 소프트웨어입니다. 시장 변동성에 따라 손익 변동이 발생할 수 있으며, 일부 알고리즘은 높은 변동성 환경을 전제로 설계되었습니다. 자동화 거래 특성상 예상치 못한 시장 상황에서 손실이 발생할 수 있음을 인지하시기 바랍니다.
                </p>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="wr-legal-section">
            <div className="wr-legal-header">법적 고지 — Legal Disclaimer</div>
            <div className="wr-legal-text">
              본 리포트는 DF717 프로그램의 실행 결과를 제공하는 목적으로 작성되었으며, 어떠한 형태의 투자 권유 또는 투자 자문에 해당하지 않습니다. 본 리포트에 포함된 과거 실행 결과 및 수치는 미래의 결과를 보장하거나 예측하지 않습니다. 프로그램 사용에 따른 손실 위험이 존재하며, 모든 투자 판단과 그에 따른 결과에 대한 책임은 전적으로 사용자 본인에게 있습니다. 본 리포트의 내용은 당사의 사전 동의 없이 무단으로 배포하거나 인용할 수 없습니다.
            </div>
          </div>

          {/* FOOTER */}
          <div className="wr-footer">
            <div className="wr-footer-meta">Weekly Report · Feb 11–18, 2026 · Confidential</div>
          </div>
        </div>
      </div>
    </>
  );
};

const weeklyReportStyles = `
  .wr-body {
    font-family: 'Noto Sans KR', sans-serif;
    background: #f8f7f5;
    color: #0a1628;
    font-size: 14px;
    line-height: 1.7;
    min-height: 100vh;
    text-align: left;
  }
  .wr-page {
    max-width: 900px;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0 0 60px rgba(0,0,0,0.12);
  }

  /* HEADER */
  .wr-header {
    background: #0a1628;
    padding: 0;
    position: relative;
    overflow: hidden;
  }
  .wr-header::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(200,169,110,0.04) 60px, rgba(200,169,110,0.04) 61px);
  }
  .wr-header-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 36px 48px 0;
    position: relative;
  }
  .wr-brand { display: flex; flex-direction: column; gap: 4px; }
  .wr-brand-name { display: flex; align-items: center; }
  .wr-logo { height: 32px; display: block; filter: brightness(0) invert(1); }
  .wr-brand-tagline {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #c8a96e;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }
  .wr-report-meta { text-align: right; }
  .wr-report-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #c8a96e;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .wr-report-period {
    font-family: 'EB Garamond', serif;
    font-size: 15px;
    color: #e8e5df;
    font-style: italic;
  }
  .wr-header-rule {
    height: 1px;
    background: linear-gradient(90deg, transparent, #c8a96e, transparent);
    margin: 20px 48px;
    opacity: 0.5;
  }
  .wr-header-title { padding: 0 48px 32px; position: relative; }
  .wr-report-title {
    font-family: 'EB Garamond', serif;
    font-size: 24px;
    color: #f5f0e8;
    font-weight: 400;
    letter-spacing: 0.02em;
  }

  /* CONTENT */
  .wr-content { padding: 40px 48px; }
  .wr-section { margin-bottom: 40px; }
  .wr-section-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e5df;
  }
  .wr-section-number {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #c8a96e;
    letter-spacing: 0.15em;
    background: #0a1628;
    padding: 3px 8px;
    border-radius: 2px;
  }
  .wr-section-title {
    font-family: 'EB Garamond', serif;
    font-size: 18px;
    font-weight: 500;
    color: #0a1628;
    letter-spacing: 0.03em;
  }

  /* PERFORMANCE CARDS */
  .wr-perf-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    margin-bottom: 28px;
  }
  .wr-perf-card {
    border: 1px solid rgba(200,169,110,0.25);
    background: #0a1628;
    padding: 20px;
    position: relative;
    overflow: hidden;
    text-align: left;
  }
  .wr-perf-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: #c8a96e;
  }
  .wr-perf-card.active {
    border-color: #c8a96e;
    box-shadow: 0 0 0 1px #c8a96e;
  }
  .wr-perf-card:hover { border-color: rgba(200,169,110,0.6); }
  .wr-perf-program {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #c8a96e;
    letter-spacing: 0.15em;
    margin-bottom: 10px;
  }
  .wr-perf-return {
    font-family: 'EB Garamond', serif;
    font-size: 32px;
    font-weight: 500;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 12px;
  }
  .wr-perf-return.positive { color: #6dbf8e; }
  .wr-perf-details {
    font-size: 11px;
    color: #9a9590;
    line-height: 1.8;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .wr-perf-detail-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
  }
  .wr-detail-label { color: #9a9590; font-size: 10px; }
  .wr-detail-val {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #e8e5df;
  }
  .wr-detail-val.positive-val { color: #6dbf8e; }
  .wr-detail-val.negative-val { color: #e07070; }

  /* CHART */
  .wr-chart-wrap {
    background: #f8f7f5;
    border: 1px solid #e8e5df;
    padding: 24px;
    margin-bottom: 8px;
  }
  .wr-chart-title-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  .wr-chart-title {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #5a5550;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .wr-chart-tabs { display: flex; gap: 4px; }
  .wr-chart-tab {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    letter-spacing: 0.1em;
    padding: 4px 12px;
    border: 1px solid #e8e5df;
    background: transparent;
    color: #9a9590;
    cursor: pointer;
    transition: all 0.15s;
    border-radius: 2px;
  }
  .wr-chart-tab:hover { border-color: #c8a96e; color: #c8a96e; }
  .wr-chart-tab.active { background: #0a1628; color: #c8a96e; border-color: #0a1628; }
  .wr-chart-container { position: relative; height: 220px; }

  .wr-disclaimer-note {
    font-size: 11px;
    color: #9a9590;
    margin-top: 8px;
    font-style: italic;
    text-align: left;
  }

  /* STATUS GRID */
  .wr-status-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 16px;
  }
  .wr-status-box {
    border: 1px solid #e8e5df;
    padding: 16px 20px;
    text-align: left;
  }
  .wr-status-label {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #9a9590;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 6px;
  }
  .wr-status-value {
    font-size: 14px;
    color: #0a1628;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .wr-status-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #2e7d52;
    display: inline-block;
  }
  .wr-dot-gold { background: #c8a96e; }

  /* FEATURE LIST */
  .wr-feature-list {
    list-style: none;
    border: 1px solid #e8e5df;
    padding: 0;
    margin: 0;
  }
  .wr-feature-item {
    padding: 12px 20px;
    border-bottom: 1px solid #e8e5df;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    font-size: 13px;
    color: #5a5550;
    line-height: 1.6;
    text-align: left;
  }
  .wr-feature-item:last-child { border-bottom: none; }
  .wr-feature-icon {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #c8a96e;
    margin-top: 3px;
    flex-shrink: 0;
    letter-spacing: 0.05em;
  }

  /* MARKET */
  .wr-market-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 16px;
  }
  .wr-market-item {
    padding: 14px 16px;
    background: #f8f7f5;
    border-left: 2px solid #c8a96e;
    text-align: left;
  }
  .wr-market-category {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #9a9590;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 4px;
  }
  .wr-market-desc { font-size: 12px; color: #0a1628; line-height: 1.5; }

  /* NOTICE */
  .wr-notice-box {
    border: 1px solid #e8e5df;
    padding: 16px 20px;
    margin-bottom: 12px;
    background: #f8f7f5;
    text-align: left;
  }
  .wr-notice-box p { font-size: 12px; color: #5a5550; line-height: 1.7; margin: 0; }

  /* LEGAL */
  .wr-legal-section {
    background: #0a1628;
    padding: 28px 48px;
    margin-top: 40px;
    text-align: left;
  }
  .wr-legal-header {
    font-family: 'DM Mono', monospace;
    font-size: 9px;
    color: #c8a96e;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(200,169,110,0.2);
  }
  .wr-legal-text { font-size: 11px; color: #9a9590; line-height: 1.8; }

  /* FOOTER */
  .wr-footer {
    background: #060e1a;
    padding: 16px 48px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .wr-footer-meta {
    font-family: 'DM Mono', monospace;
    font-size: 8px;
    color: #3a4a60;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* ============ MOBILE RESPONSIVE ============ */
  @media (max-width: 768px) {
    .wr-body {
      font-size: 13px;
    }
    .wr-page {
      box-shadow: none;
    }
    .wr-header-top {
      padding: 24px 16px 0;
      flex-direction: column;
      gap: 16px;
    }
    .wr-report-meta {
      text-align: left;
    }
    .wr-header-rule {
      margin: 16px 16px;
    }
    .wr-header-title {
      padding: 0 16px 24px;
    }
    .wr-report-title {
      font-size: 20px;
    }
    .wr-content {
      padding: 24px 16px;
    }
    .wr-section {
      margin-bottom: 32px;
    }
    .wr-section-title {
      font-size: 16px;
    }

    /* Stack perf cards vertically */
    .wr-perf-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
    .wr-perf-card {
      padding: 16px;
    }
    .wr-perf-return {
      font-size: 28px;
    }

    /* Chart */
    .wr-chart-wrap {
      padding: 16px;
    }
    .wr-chart-title-row {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .wr-chart-container {
      height: 180px;
    }

    /* Status grid stays 2 cols but tighter */
    .wr-status-grid {
      gap: 10px;
    }
    .wr-status-box {
      padding: 12px 14px;
    }

    /* Market row stacks */
    .wr-market-row {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    /* Legal & footer */
    .wr-legal-section {
      padding: 20px 16px;
    }
    .wr-footer {
      padding: 12px 16px;
    }
  }
`;

export default WeeklyReport;

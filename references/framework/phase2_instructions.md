# Phase 2 Instructions — Financial Trajectory, Scorecard & Forward Assessment (S8-S15)

*Sections 8-15. Read `protocol_core.md` before starting this phase. S8-S12 use the verified extracted JSON as primary data source — not raw filings.*

---

## Source Document Routing

| Section | Primary Sources | What to Extract |
|---------|----------------|-----------------|
| S8 | Extracted JSON (income statement) + press releases for segment detail | 5Q P&L, segment breakdowns, margins, EPS |
| S9 | Extracted JSON (balance sheet) | 5Q cash, AR, deferred revenue, debt, equity, shares |
| S10 | Extracted JSON (cash flow) + protocol_core.md thresholds | FCF, SBC, DSO, ROIC, per-share economics, verdict |
| S11 | S2 thesis + S7 acceleration table + S8-S10 fresh data | Weights (from thesis), scores (from data), historical scores |
| S12 | Extracted JSON + S1 model classification + example cards for calibration | 3-4 sector-specific metrics with 5Q trend |
| S13 | Transcripts (forward commentary) + press releases (guidance) | Catalyst calendar, product roadmap, supply commitments |
| S14 | Sell-side analyst report + web search for analyst ratings/PTs | Coverage map, key analysts, bull/bear cases, consensus |
| S15 | Transcripts (guidance language) + S6 baseline + extracted JSON | Guidance accuracy update, commitment tracker, forward expectations |

**S8-S12 are computation-heavy.** Pull numbers from the verified JSON. Do not re-read raw filings for data already extracted.
**S13-S15 are judgment-heavy.** Read transcripts for forward language, tone shifts, and commitment specifics.

---

## Section Line Targets

| Section | Target | Max | Update Cadence |
|---------|-------:|----:|----------------|
| S8 Quarterly Income Statement Progression | 60 | 75 | Quarterly |
| S9 Balance Sheet Progression | 65 | 80 | Quarterly |
| S10 Earnings Quality & Cash Flow Forensics | 70 | 90 | Quarterly |
| S11 Thesis-Weighted Scorecard | 80 | 100 | Quarterly |
| S12 Tier 2 Sector-Specific Metrics | 70 | 90 | Quarterly |
| S13 Forward Catalyst Pipeline & Product Roadmap | 65 | 85 | Material change |
| S14 Sell-Side Landscape | 120 | 150 | Material change |
| S15 Management Guidance & Credibility | 70 | 90 | Quarterly |
| **Phase 2 Total** | **~600** | **~760** | |

---

## S8 — Quarterly Income Statement Progression

**Key decision:** Establish the 5-quarter P&L that S10, S11, and S7 all reference. Revenue segments must match S4.

```
                        | Q__    | Q__    | Q__    | Q__    | Q__
________________________|________|________|________|________|________
Total Revenue           | $      | $      | $      | $      | $
  YoY Growth            |   %    |   %    |   %    |   %    |   %
  QoQ Growth            |   %    |   %    |   %    |   %    |   %

SEGMENT BREAKDOWN
  Segment 1: __________ | $      | $      | $      | $      | $
    YoY                 |   %    |   %    |   %    |   %    |   %
  Segment 2: __________ | $      | $      | $      | $      | $
    YoY                 |   %    |   %    |   %    |   %    |   %
  Segment 3: __________ | $      | $      | $      | $      | $
    YoY                 |   %    |   %    |   %    |   %    |   %
  (add/remove segment rows to match S4 revenue stream map)

MARGINS
  Gross margin          |   %    |   %    |   %    |   %    |   %
  Operating margin GAAP |   %    |   %    |   %    |   %    |   %
  Operating margin adj  |   %    |   %    |   %    |   %    |   %
  Net margin GAAP       |   %    |   %    |   %    |   %    |   %

EPS
  GAAP EPS              | $      | $      | $      | $      | $
  Adjusted EPS          | $      | $      | $      | $      | $

Rule of 40 (rev growth + FCF margin):
                        |        |        |        |        |
```

**Writing rules:**
- Pure data table. No narrative between rows.
- Segment names and order must match S4 revenue stream map exactly.
- If a segment didn't exist in earlier quarters, leave cell blank — do not write "$0" or "N/A."
- Include both GAAP and adjusted margins. If the company doesn't report adjusted, omit that row.

**Cross-reference check:** S8 segment totals must match S4 quarterly progression table. If they don't, reconcile against the authoritative source (10-Q revenue disaggregation).

---

## S9 — Balance Sheet Progression

**Key decision:** Identify balance sheet quality signals and red flags. AR feeds DSO calculation in S10.

```
                        | Q__    | Q__    | Q__    | Q__    | Q__
________________________|________|________|________|________|________
Cash & equivalents      | $      | $      | $      | $      | $
Short-term investments  | $      | $      | $      | $      | $
Total liquidity         | $      | $      | $      | $      | $

Accounts receivable     | $      | $      | $      | $      | $
Deferred revenue        | $      | $      | $      | $      | $
  DR growth YoY         |   %    |   %    |   %    |   %    |   %

Total debt              | $      | $      | $      | $      | $
Net debt (debt − cash)  | $      | $      | $      | $      | $
Debt/EBITDA             |   x    |   x    |   x    |   x    |   x

Shareholders' equity    | $      | $      | $      | $      | $
Diluted share count (M) |        |        |        |        |
  YoY change            |   %    |   %    |   %    |   %    |   %

BALANCE SHEET FLAGS
  (2-4 specific flags or "No material flags." One line per flag.)
```

**Writing rules:**
- Pure data table + flags. No narrative.
- Balance sheet flags are 1 line each: "[Item]: [what changed] — [significance]." Example: "AR up $15M while revenue flat — investigate DSO in S10."
- If deferred revenue is not applicable (non-subscription business), omit that row entirely — do not write "N/A."
- Diluted share count must match the EPS footnote number, not the basic count.

---

## S10 — Earnings Quality & Cash Flow Forensics

**Key decision:** Single earnings quality verdict per quarter. This is the most diagnostic section in the card — catch quality issues before they hit the income statement.

```
CASH FLOW ANALYSIS
  Most recent quarter:
    Operating cash flow:                        $_____
    Free cash flow (OCF − CapEx):               $_____
    FCF margin (FCF / Revenue):                 _____%
    FCF conversion (FCF / Net Income):          _____%

  Trailing twelve months (or full FY if available):
    OCF: $_____  |  FCF: $_____  |  FCF margin: _____%
    FCF conversion: _____%  |  CapEx intensity: _____%

  5-Quarter FCF Progression:
    Q__: $_____ (margin ___%, conversion ___%)
    Q__: $_____ (margin ___%, conversion ___%)
    Q__: $_____ (margin ___%, conversion ___%)
    Q__: $_____ (margin ___%, conversion ___%)
    Q__: $_____ (margin ___%, conversion ___%)

SBC & DILUTION
  5-Quarter SBC: Q__: $_____ (___%) → Q__: $_____ (___%) → ...
  FY total: $_____ (___% of revenue) — trending: up / stable / down as %
  Shares: _____M diluted, _____M outstanding (end period)
  YoY change: ___%. Net shares retired: _____M. Buyback spend: $_____

DSO
  5-Quarter: _____ → _____ → _____ → _____ → _____ days
  Normal range: _____ to _____ days

ROIC
  Current: _____% (prior year: _____%)   Reinvestment rate: _____%

PER-SHARE ECONOMICS
  Revenue/share: $_____ (Δ YoY: _____%)  |  FCF/share: $_____ (Δ YoY: _____%)
  Dilution cost: _____ bps (net accretive / eroding / neutral)

NON-GAAP ITEMS TO WATCH
  1. ________________________________________________
  2. ________________________________________________
  3. ________________________________________________

VERDICT: Clean / Minor concerns / Investigate / Red flag
  Monitor: ________________________________________________
```

**CRITICAL writing rule:** Data tables and 5-quarter progressions ONLY. No "Assessment:" paragraphs after each subsection. No "Company-Specific Interpretation Notes" section. If a number needs context (e.g., a quarterly anomaly), add a 1-line footnote, not a paragraph.

**FCF conversion thresholds** (from protocol_core.md — apply based on S1 model classification):
- Capital-light (SaaS, payments): Healthy 100%+ | Investigate <85%
- Asset-light services: Healthy 80-100% | Investigate <65%
- Capital-intensive (semis, industrials): Healthy 50-80% | Investigate <40%

**Evaluate FCF conversion against thresholds using annual/TTM figures.** Quarterly FCF is lumpy (working capital, tax timing). Note quarterly anomalies with 1-line footnotes but do not flag individual quarters unless the annual trend is also deteriorating.

**DSO thresholds** (from protocol_core.md):
- Stable (±2 days vs year-ago): Normal
- Improving (down 3+ days): Positive signal
- Up 3-5 days: Yellow flag
- Up 5+ days: Red flag — investigate

**Verdict must be one of exactly four values.** Map to the data:
- **Clean:** FCF conversion within healthy range, DSO stable, SBC % not rising, no non-GAAP concerns
- **Minor concerns:** 1-2 metrics at yellow flag level, nothing structural
- **Investigate:** FCF conversion below investigation threshold OR DSO red flag OR multiple yellow flags
- **Red flag:** Multiple investigation triggers or structural cash flow deterioration

---

## S11 — Thesis-Weighted Scorecard

**Key decision:** WEIGHTS ARE LOCKED. Scoring uses fresh S8-S10 data. Do not change weights to rationalize a deteriorating metric.

```
WEIGHT RULES (locked at position establishment)
  2x   = Thesis-core (directly tests why you own this stock) — MAX 1 metric at 2x
  1.5x = Thesis-supporting (reinforces the thesis) — MAX 2 metrics at 1.5x
  1x   = General health (important but not thesis-specific) — remaining metrics

SCORECARD
                                              Weight   Rationale          Score    Weighted
  Revenue growth rate:                        ___x     ________________   ___      ___
  Margin trajectory (specify: ___________ ):  ___x     ________________   ___      ___
  FCF conversion:                             ___x     ________________   ___      ___
  DSO trend:                                  ___x     ________________   ___      ___
  Key metric (from S2):                       ___x     ________________   ___      ___
  ROIC:                                       ___x     ________________   ___      ___
  [Additional metric]:                        ___x     ________________   ___      ___

  Scoring per metric: +1 (improving), 0 (stable), −1 (deteriorating)

  Weighted total:           _____
  Max possible:             _____
  Normalized score:         _____%

INTERPRETATION
  >60%  = Business clearly improving
  20-60% = Mixed / stable
  <20%  = Deterioration, review thesis

HISTORICAL SCORES
  Q__: _____%⚑   Q__: _____%⚑   Q__: _____%⚑   Q__: _____%⚑   Q__: _____%
  ⚑ Estimated retroactively using same weights and S7/S8 data.

  Score trajectory: ________________________________________________
```

**Writing rules:**
- Rationale column: 1-2 lines per metric. Link to thesis logic + cite the specific data point driving the score. Example: "KEY METRIC (S2). 75% YoY in Q4 vs 66% Q3 — re-accelerating."
- Score must be justified from S8-S10 data, not from narrative interpretation.
- Historical scores row is REQUIRED — shows trajectory of the scorecard
  itself. On quarterly refresh, append new score to the row.
- On first build: ESTIMATE historical scores for each of the prior 4
  quarters using the same weights and scoring rules. All data is available
  in S7 (acceleration table) and S8 (quarterly progression). Mark
  estimated scores with ⚑. This provides trajectory context — a 22%
  score that was -67% two quarters ago reads very differently than a 22%
  that was 40%.
- Estimation method: For each prior quarter, score each metric using
  the same +1/0/-1 rules against QoQ or YoY trend and normal range
  thresholds. If a metric cannot be scored for a given quarter due to
  missing prior-period data (e.g., first quarter in the dataset has no
  QoQ comparison), score it 0 (neutral) and note the gap.
- Show per-quarter estimation work in a scratch block during build
  (do not include in final card). The final card shows only the
  summary line:
    Q__: ___%⚑   Q__: ___%⚑   Q__: ___%⚑   Q__: ___%⚑   Q__: ___%
    ⚑ Estimated retroactively using same weights and S7/S8 data.
    Score trajectory: [1-line pattern description]
- Weight validation: confirm MAX 1 metric at 2x, MAX 2 at 1.5x. If violated, fix before continuing.

---

## S12 — Tier 2 Sector-Specific Metrics

**Key decision:** Select 3-4 metrics specific to this company's business model (from S1 classification). These supplement the Tier 1 metrics in S10-S11.

```
SECTOR PROFILE: [from S1 model classification]
MODEL TYPE: [from S1]

METRIC                        | Value    | Prior Q  | YoY Δ   | Source
______________________________|__________|__________|_________|________________
1.                            |          |          |         |
2.                            |          |          |         |
3.                            |          |          |         |
4.                            |          |          |         |

INTERPRETATION
  (Per-metric notes — see writing rules for depth guidance)
```

**Writing rules:**
- Select 3-4 metrics that test the specific thesis and business model from S1-S2. Do not invent generic metrics — each must be diagnostic for THIS company's thesis. Calibrate against example cards for depth and format.
- Table shows current quarter vs. prior quarter + YoY delta. 5-quarter trends already live in S7/S8 — do not duplicate.
- Source column: exact document and location (e.g., "10-Q p.24" or "transcript Q3 prepared remarks").
- **Interpretation depth is thesis-sensitive:**
  - Thesis-critical Tier 2 metrics: 5-8 lines with explicit status verdict (GREEN / YELLOW / RED). Include supporting data, trend context, and what would change the status.
  - Monitoring-level metrics: 1-2 lines, or omit interpretation if the number is self-explanatory.
  - Example: AAOI's capacity utilization is thesis-critical (5-8 lines); China exposure is monitoring-level (2 lines).

---

## S13 — Forward Catalyst Pipeline & Product Roadmap

**Key decision:** Identify HIGH vs MEDIUM impact catalysts with specific dates. Product roadmap focuses on current + next gen only.

```
CATALYST CALENDAR (next 12 months)
  Date/Window    Event                         Type         Impact
  ____________   ____________________________  ___________  HIGH/MEDIUM
  ____________   ____________________________  ___________  HIGH/MEDIUM
  ____________   ____________________________  ___________  HIGH/MEDIUM
  ____________   ____________________________  ___________  HIGH/MEDIUM
  (compact table — one row per catalyst, no multi-line descriptions)

PRODUCT ROADMAP
  Generation    Status              Rev Share    Next Milestone
  ____________  __________________  ___________  ________________
  ____________  __________________  ___________  ________________
  ____________  __________________  ___________  ________________
  (detailed for current + next gen; 1 line for older/future)

  Key specs (next-gen only): ________________________________________

SUPPLY COMMITMENTS (if applicable)
  Prior period: $_____   Current period: $_____   Trajectory: _____

DIVERSIFICATION CATALYSTS (non-core segments, if material)
  Segment: $_____ revenue (___% growth). Key milestone: __________

Note: Insider activity is covered in Section 19 Required Entry.
Do not duplicate here.
```

**Writing rules:**
- Catalyst calendar is a compact table, not narrative paragraphs. One row per catalyst.
- Product roadmap: detailed for current + next gen only; 1 line for older/future gens.
- No insider activity subsection — that belongs exclusively in S19.
- No chip spec fields per generation — keep to 1-line summary for next-gen architecture only.
- Impact rating must be justified by revenue magnitude: HIGH = >10% revenue impact within 12 months; MEDIUM = strategic importance but <10% near-term revenue impact.

**Business type adaptations:**
- Defense/government: Map IDIQ ceilings, task orders, option years, protest risk
- SaaS/consumer: Focus on product launch cadence, pricing changes, cohort dynamics
- Hardware/semiconductor: Focus on product roadmap, supply commitments, ramp schedules
- Financial services: Map regulatory approvals, product launches, rate sensitivity windows

---

## S14 — Sell-Side Landscape

**Key decision:** Identify the 2-3 analysts with the best analytical frameworks — not just the highest price targets. Map bull/bear positioning and consensus blind spots.

```
ANALYST COVERAGE MAP
  Total analysts covering:     _____
  Consensus rating:            ____________
  Consensus PT:                $_____
  PT range:                    $_____ to $_____

KEY ANALYSTS (2-3 with the best analytical frameworks)
  Analyst 1: ____________  Firm: ____________
    Rating: ____________   PT: $_____
    Key framework/thesis: _____________________________________________
    Why useful: _______________________________________________________

  Analyst 2: ____________  Firm: ____________
    Rating: ____________   PT: $_____
    Key framework/thesis: _____________________________________________
    Why useful: _______________________________________________________

  Analyst 3: ____________  Firm: ____________
    Rating: ____________   PT: $_____
    Key framework/thesis: _____________________________________________
    Why useful: _______________________________________________________

NOTABLE BULL CASE: ____________________________________________________
NOTABLE BEAR CASE: ____________________________________________________

CONSENSUS BLIND SPOTS (what the Street is underweighting or ignoring):
  ___________________________________________________________________
```

**Writing rules:**
- "Best analytical framework" means the analyst who provides the most useful lens for YOUR decision — not consensus, not highest PT.
- For each key analyst: framework/thesis should capture their unique analytical angle in 1-2 lines. "Why useful" is what you use their work for (e.g., "forward revenue modeling" or "bear case stress-testing").
- Bull and bear cases: 2-4 lines each summarizing the core argument with specific data points. Not just "optimistic about growth."
- Consensus blind spots: this is the highest-judgment field. What is the Street systematically under- or over-weighting? Example: "Street models 800G ramp at 60% utilization; management implies >80% — gap creates upside surprise potential."
- If sell-side report is not available in source docs, use web search for analyst ratings and price targets. Note data freshness.

**S14 has the largest line budget (120 target, 150 max).** This section benefits from depth. The AAOI example card's S14 runs ~135 lines and is one of the strongest sections — use it as calibration.

---

## S15 — Management Guidance & Credibility

**Key decision:** Single credibility verdict that feeds directly into S18 pre-earnings expectations. This section REFRESHES quarterly — S6 holds the baseline.

```
GUIDANCE ACCURACY (last 4-6 quarters)
  Qtr       Guided Range     Mid          Actual     Beat $    Beat %
  ________  ______________   ___________  _________  ________  ______
  Q__:      $____-____M      $_____       $_____     $_____    _____%
  Q__:      $____-____M      $_____       $_____     $_____    _____%
  Q__:      $____-____M      $_____       $_____     $_____    _____%
  Q__:      $____-____M      $_____       $_____     $_____    _____%
  Q__:      $____-____M      $_____       $PENDING   —         —

  Pattern: ___  |  Avg beat: $_____ (___%)  |  Streak: _____
  GM guidance: (1-line summary — e.g., "4/5 in-line or beat")

COMMITMENT TRACKER
  Delivery rate (trailing 4Q): _____ / _____ = _____%
  Open commitments to verify next quarter:
  1. ________________________________________________
  2. ________________________________________________
  3. ________________________________________________

FORWARD EXPECTATIONS
  For each guided metric, show raw AND credibility-adjusted side-by-side:

  [Metric 1 — e.g., Revenue]:
    Raw guidance:              $________
    Credibility-adjusted:      $________ (guidance × [1 + factor] from S6)
    Street consensus:          $________

  [Metric 2 — e.g., CapEx]:
    Raw guidance:              $________
    Credibility-adjusted:      $________ (guidance × [1 + factor] from S6)

  [Repeat for each guided metric]

  ⚠ Comparability notes: (if any — e.g., methodology changes)
  Street consensus (FY): (1-2 lines — revenue, EPS, key items)

  Language to track:
    "____________________________________________" — significance: _____
    "____________________________________________" — significance: _____

CAPITAL ALLOCATION: ___ / 20
  High-return investing:  ___/5  (1-line justification)
  Acquisitions:           ___/5  (1-line justification; N/A if no M&A — redistribute)
  Equity management:      ___/5  (1-line justification — buybacks OR dilution management)
  Balance sheet:          ___/5  (1-line justification)

VERDICT: High / Moderate / Low / Deteriorating
  (1-2 lines: sandbagging factor, delivery rate, what to watch)
```

**Writing rules:**
- Guidance accuracy table: keep full per-quarter rows with actual numbers — this is decision-forcing data.
- GM guidance: compress to 1-line summary, not a separate table.
- Capital allocation: scores + 1-line justification per sub-score, not multi-line rationale paragraphs.
- Verdict is 1-2 lines, not a paragraph.
- Forward expectations MUST show raw guidance and credibility-adjusted
  figures side by side for every guided metric. This is the operational
  output of the S6 sandbagging factor — if S6 computed a factor but S15
  doesn't apply it, the factor is wasted work.
- For non-guiding companies: show street consensus as the baseline,
  note the beat/miss rate from S6 as context, and state whether
  consensus should be adjusted directionally (e.g., "revenue consensus
  approximately correct — 45% beat rate implies no systematic
  adjustment").

**S6 ↔ S15 boundary (mirrors Phase 1 instructions):**
- **S6 owns:** Executive profiles, communication style, discount factors, full guidance history, pattern classification, sandbagging factor calculation. BASELINE — annual refresh.
- **S15 owns:** Most recent quarter's guidance accuracy update (appends to S6 table), commitment tracker, credibility-adjusted forward expectations, capital allocation score, quarterly verdict. REFRESHES each quarter.
- On quarterly refresh: update S15 only. Touch S6 only if pattern classification has changed (e.g., "Accurate" → "Aggressive" after 2 consecutive misses).

---

## Phase 2 Build Sequence

1. Load verified JSON from `data/[TICKER]/extracted/[TICKER]_data.json`
2. Build S8 (income statement progression) — backbone for all subsequent financial sections
3. Build S9 (balance sheet) — cross-reference AR against S8 revenue for DSO
4. Build S10 (earnings quality forensics) — single pass: FCF, SBC, DSO, ROIC, per-share economics. Data tables and verdict only
5. Lock S11 (scorecard) — weights from S2 thesis, scores from S8-S10 data
6. Build S12 (Tier 2 metrics) — select metrics based on S1 model classification and S2 thesis
7. Read most recent 2-3 transcripts for forward commentary → build S13 (catalyst pipeline)
8. Read sell-side analyst report + web search for current ratings/PTs → build S14
9. Build S15 (guidance credibility) — guidance accuracy from extracted JSON, commitment tracker from transcripts, adjusted expectations using S6 sandbagging factor

**After each section:** Verify line count against target. If >50% over, compress before moving to next section.

---

## Phase 2 Quality Checks

Run these before handing off to Phase 3:

- [ ] S8 5-quarter data is complete — no missing quarters
- [ ] S8 segment names and totals match S4 revenue stream map
- [ ] S9 diluted share count matches EPS footnote (not basic count)
- [ ] S10 covers all subsections: FCF, SBC, DSO, ROIC, per-share, non-GAAP, verdict
- [ ] S10 contains NO assessment paragraphs — data tables and verdict only
- [ ] S10 FCF conversion thresholds match S1 model classification
- [ ] S10 verdict is exactly one of: Clean / Minor concerns / Investigate / Red flag
- [ ] S11 weights: MAX 1 at 2x, MAX 2 at 1.5x, weights sum correctly
- [ ] S11 scores justified by S8-S10 data, not narrative interpretation
- [ ] S11 historical scores: 5 quarters present (4 estimated⚑ + 1 actual on first build, or 5 actual on refresh)
- [ ] S11 score trajectory line describes the pattern (e.g., V-shaped, declining, stable)
- [ ] S12 metrics are thesis-diagnostic, matching S1 model classification and S2 thesis
- [ ] S13 catalyst calendar is compact table format — no narrative paragraphs
- [ ] S13 does NOT contain insider activity (belongs in S19 only)
- [ ] S14 identifies 2-3 most useful analysts with specific frameworks
- [ ] S14 bull and bear cases cite specific data points
- [ ] S15 guidance accuracy uses actual numbers from press releases
- [ ] S15 adjusted expectations apply S6 sandbagging factor
- [ ] S15 capital allocation subscores sum to total /20
- [ ] S15 verdict is exactly one of: High / Moderate / Low / Deteriorating
- [ ] No content duplication between S6 and S15
- [ ] Phase 2 total within ±20% of ~600-line target

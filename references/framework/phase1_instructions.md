# Phase 1 Instructions — Foundation & Business Model (S1-S7)

*Sections 1-7 + Procedural Checklist A. Read `protocol_core.md` before starting this phase.*

---

## Source Document Routing

| Section | Primary Sources | What to Extract |
|---------|----------------|-----------------|
| S1 | 10-K (Item 1 business description) | Model type, operating profile, sector |
| S2 | Your thesis + 10-K risk factors | Falsifiable claim, key metric, bear case |
| S3 | 10-K Item 1 + investor presentations + transcripts | Product lines, value creation/capture, unit economics |
| S4 | 10-Q revenue disaggregation (authoritative) + press releases | Segment revenue %, mix, customer concentration |
| S5 | 10-K competition section + transcripts (competitive Q&A) + sell-side | Named competitors, threat vectors, moat evidence |
| S6 | Proxy statement + transcripts (CFO Q&A patterns) + guidance history | Executive profiles, guidance accuracy, discount factors |
| S7 | Extracted JSON (5Q financial data) + S1 operating profile | Multi-quarter trend table with normal range context |

**Read one source at a time.** Extract what you need, then move to the next document.

---

## Section Line Targets

| Section | Target | Max | Update Cadence |
|---------|-------:|----:|----------------|
| S1 Identity & Model Classification | 45 | 60 | Annual / thesis change |
| S2 Thesis & Key Metric | 70 | 90 | Annual / thesis change |
| S3 Business Model & Product Architecture | 150 | 180 | Annual / thesis change |
| S4 Revenue Stream Map | 60 | 75 | Annual / thesis change |
| S5 Competitive Context & Moat Evidence | 95 | 120 | Landscape: material change / Moat pulse: quarterly |
| S6 Management Team Assessment | 60 | 80 | Annual / thesis change |
| S7 Cross-Quarter Acceleration Table | 65 | 80 | Quarterly |
| Checklist A | 25 | 30 | Static |
| **Phase 1 Total** | **~570** | **~715** | |

---

## S1 — Identity & Model Classification

**Key decision:** Model classification determines downstream thresholds for the entire card — FCF conversion bands, Tier 2 metric selection, DSO interpretation, pipeline applicability.

```
IDENTITY
  Ticker:               ____________
  Company:              ____________
  Sector:               ____________
  Position established:  ____________ (date)

MODEL CLASSIFICATION
  Business model type:   ____________
    (capital-light SaaS / asset-heavy manufacturing / transaction-based
    fintech / hybrid platform / etc.)

  Normal operating profile (2-3 sentences):
    "[COMPANY] operates as a [model type]. Normal gross margins are
    [range] due to [structural reason]. FCF conversion [threshold and
    any adjusted formula note]."

  This classification determines:
    - FCF conversion thresholds (capital-light: 100%+, capital-heavy: 50-80%)
    - Tier 2 metric selection → load sector_profiles/[profile].md for S12
    - DSO interpretation context for S10
    - Catalyst calendar pipeline applicability for S13
```

**Writing rule:** The operating profile is the most-referenced passage in the entire card. Be precise and specific — do not write generic descriptions. Include margin ranges and structural reasons.

---

## S2 — Thesis & Key Metric

**Key decision:** The thesis governs every subsequent analytical judgment. The key metric gets 2x weight in the S11 scorecard. The bear case seeds S16 kill criteria.

```
THESIS
  Falsifiable statement (1-3 sentences — specific enough that a single
  quarterly report could challenge it):
  ___________________________________________________________________

  Date written:         ____________
  Last reviewed:        ____________

  3-sentence bear case (seeds Phase 3 kill criteria):
  ___________________________________________________________________

KEY METRIC
  Metric:               ____________
  Why this tests thesis: ____________________________________________
  Where to find it:     ____________ (document, section, table)
```

**Writing rules:**
- Thesis MUST be falsifiable. "Good company with strong moat" fails. "NVDA's datacenter revenue growth is driven by AI training demand that will sustain >40% YoY growth through FY2026" passes.
- Key metric must be directly testable from quarterly filings — not derived or subjective.
- Bear case must be specific and cite real risks, not strawmen. It feeds S16 kill criteria directly.

---

## S3 — Business Model & Product Architecture

**Key decision:** Classify each product line's strategic role and identify where value creation concentrates. This determines which products are thesis-critical vs. optionality bets.

```
For each product/service line:

PRODUCT LINE          | STRATEGIC ROLE   | MATURITY   | GTM MOTION
______________________|__________________|____________|______________
1.                    | Core / Growth /  | Scale /    | Direct / PLG /
                      | Emerging / Legacy | Emerging / | Channel /
                      |                  | Mature     | Embedded

  Value creation: How does this product create value for customers?
  Value capture:  How does it generate revenue? (pricing model, take rate)
  Unit economics: Key metrics that determine profitability at scale
  Dependencies:   What other products or external factors does it depend on?

Repeat for each major product line.

ARCHITECTURE SUMMARY
  Where does value creation concentrate?  ________________________________
  Which products are thesis-critical?     ________________________________
  Which are optionality bets?             ________________________________
```

**Writing rules:**
- One product per block. Do not combine related products into narrative paragraphs.
- Value creation and value capture are separate questions — answer both explicitly.
- Architecture summary should be 3-5 lines max. If it's longer, the per-product blocks aren't doing their job.

---

## S4 — Revenue Stream Map

**Key decision:** Establish the authoritative revenue breakdown that S8 must match. Customer concentration is tracked here quarterly.

```
REVENUE STREAM MAP (FY____ — $____M total)

  Stream 1: ____________
    FY current: $____M (___%)    FY prior: $____M (___%)
    YoY growth: ____%
    Key customers: ____________
    Revenue quality: (1-2 lines — durability, visibility, margin profile)
    Thesis role: THESIS-CRITICAL / Cash flow stabilizer / Optionality / Immaterial

  (Repeat for each stream — typically 3-6)

QUARTERLY REVENUE PROGRESSION BY SEGMENT ($M)

              Total    Seg1    Seg2    Seg3    Other   Seg1%
  Q__:
  Q__:
  Q__:
  Q__:
  Q__:

CUSTOMER CONCENTRATION QUARTERLY TREND
  Q__: Top 10 = ___%; >10% customers: ___
  Q__: Top 10 = ___%; >10% customers: ___
  (trailing 4-5 quarters)

  Direction: Improving / Stable / Worsening
```

**Writing rules:**
- Use 10-Q revenue disaggregation as authoritative source — not press release categories if they differ.
- Revenue streams MUST sum to total revenue. If they don't, note the reconciliation gap.
- Every stream gets a thesis role label. Most cards have 1-2 thesis-critical streams and 2-4 supporting/immaterial.
- Revenue quality is 1-2 lines per stream, not paragraphs. Focus on durability and visibility.

**Cross-reference check:** S4 segment totals must match S8 revenue figures exactly. If building from different source docs, reconcile before finalizing.

---

## S5 — Competitive Context & Moat Evidence

**Key decision:** Classify threat severity (L1/L2/L3). Identify moat type and what would signal erosion. This section has two cadences — full landscape on material change, moat pulse-check quarterly.

```
COMPETITIVE LANDSCAPE
  Competitor 1: ____________  Threat vector: ____________  Severity: L1 / L2 / L3
  Competitor 2: ____________  Threat vector: ____________  Severity: L1 / L2 / L3
  Competitor 3: ____________  Threat vector: ____________  Severity: L1 / L2 / L3
  Competitor 4: ____________  Threat vector: ____________  Severity: L1 / L2 / L3

  Severity levels:
    L1 = Monitor (competitive but not threatening thesis)
    L2 = Investigate (emerging threat to a thesis-critical area)
    L3 = Thesis Threatening (direct challenge to core moat/position)

MOAT EVIDENCE GRID (5-minute quarterly pulse-check)
  Moat type:         ____________
  Evidence now:      ____________ (hard data, not assertions)
  Moat limitations:  ____________ (honest assessment — what the moat does NOT protect)
  Leading indicator: ____________ (what metric would show strengthening/weakening)
  Decay signal:      ____________ (observable change that would trigger concern)

  Quarterly pulse:   Strengthening / Stable / Early signs of erosion / Eroding
  Last checked:      ____________
```

**Writing rules:**
- Name real competitors with revenue scale context where available (from 10-K competition section).
- Threat vector must be specific: "price competition in 800G merchant market" not "competition."
- Moat limitations subsection is REQUIRED. Every company's moat has holes — document them honestly. See AAOI example card for reference (products "minimally differentiated" per own 10-K).
- Evidence must be hard data (market share, win rates, switching costs in months), not management claims.

---

## S6 — Management Team Assessment

**Key decision:** Establish guidance pattern classification and discount factors for each key executive. This directly feeds S15 sandbagging factor and credibility-adjusted forward expectations.

```
CEO:  ____________    Tenure: ____    Background: (1-2 lines)
CFO:  ____________    Tenure: ____    Background: (1-2 lines)
Other key exec: ____________    Role: ____    Tenure: ____

GUIDANCE PATTERN: ____________
  (Consistent Sandbagger / Accurate / Aggressive / Erratic)

  Qtr      Rev Guided (range)   Rev Actual   Result    GM Guided    GM Actual
  ______   _________________   __________   ________  _________    _________
  (trailing 4-6 quarters)

  Revenue: _/_ in-range or above
  GM: _/_ in-range or above
  EPS: _/_ in-range or above

  Pattern summary: (2-3 lines — are beats consistent or erratic?)
  Sandbagging factor: ____% (average beat % to apply as guidance adjustment)

SANDBAGGING FACTORS (quantified — feeds S15 adjusted expectations)

  Guidance type       Factor    Basis              Application
  __________________  ________  _________________  ____________________
  Revenue             _____%    _/_ beats over _Q  Multiply guidance mid
                                                   by (1 + factor)
  EPS                 _____%    _/_ beats over _Q  ____________________
  Gross margin        _____%    _/_ in-range+ / _Q ____________________
  CapEx (if guided)   _____%    Guided $__ vs      ____________________
                                actual $__
  [Other guided       _____%    ____________________
   metrics]

  For non-guiding companies: Compute factors for whatever the company
  DOES guide (CapEx, deliveries, timelines). For metrics with no formal
  guidance, compute beat rate vs sell-side consensus and note whether
  consensus is a reliable baseline. Document the adaptation explicitly.

COMMUNICATION STYLE & DISCOUNT FACTORS

  [Executive name]:
    (2-3 lines: what they're credible on, where to apply discount, why)
    Discount factor: Low / Moderate / High on [specific topic]

  (Repeat for CEO and CFO at minimum)
```

**Writing rules:**
- Guidance accuracy table uses ACTUAL numbers from press releases — do not estimate.
- Sandbagging factor must be calculated, not asserted. Average beat % across available quarters.
- **Non-guiding companies:** If the company does not provide formal
  revenue/EPS guidance (e.g., Tesla, Berkshire), compute sandbagging
  factors on whatever IS guided (CapEx, deliveries, production targets,
  qualitative timelines). For unguided metrics, compute beat/miss rate
  vs sell-side consensus over 8-20 quarters and classify as: Sandbagger
  (>60% beat rate), Neutral (45-60%), or Over-promiser (<45%). State
  the factor as a directional indicator with magnitude where calculable.
  Also compute a timeline commitment delivery rate for qualitative
  promises (e.g., "product launches by [date]") — count delivered vs
  open/missed over trailing 4 quarters.
- Discount factors must cite specific evidence. "Moderate discount on timelines" needs "because 800G slipped from H2 2025 to Q2 2026 due to firmware issues."

**S6 ↔ S15 boundary (important — prevents duplication):**
- **S6 owns:** Executive profiles, communication style, discount factors, guidance accuracy table (full trailing 4-6Q history), pattern classification, calculated sandbagging factor. This is the BASELINE — written once, updated annually or on thesis change.
- **S15 owns:** Most recent quarter's credibility update, commitment tracker (open promises + delivery rate), credibility-adjusted forward expectations (guidance × sandbagging factor), capital allocation score. This REFRESHES quarterly.
- If in doubt: S6 = "who are these people and should I trust them?" S15 = "what did they promise last quarter and did they deliver?"

---

## S7 — Cross-Quarter Acceleration Table

**Key decision:** Identify acceleration vs. deceleration patterns across 5 quarters, contextualized against the normal operating profile from S1.

```
NORMAL OPERATING PROFILE (from S1 classification)
  Gross margins:      _____ to _____%
  Operating margins:  _____ to _____%
  FCF conversion:     _____%+ (note if adjusted formula)
  Model type:         ____________

ACCELERATION TABLE (5 quarters)
  Metric              | Q__  | Q__  | Q__  | Q__  | Q__  | Trend
  ____________________|______|______|______|______|______|________
  Revenue growth (YoY)|      |      |      |      |      |
  Gross margin        |      |      |      |      |      |
  Operating margin    |      |      |      |      |      |
  FCF conversion      |      |      |      |      |      |
  Key metric (S2)     |      |      |      |      |      |
  [Tier 2 metric]     |      |      |      |      |      |
  [Tier 2 metric]     |      |      |      |      |      |

  ⚑ Flag cells outside normal operating profile range.
```

**Writing rules:**
- Operating profile header is REQUIRED — it provides the "what normal looks like" context for interpreting the table.
- Use extracted JSON as data source — do not re-read raw filings for numbers already extracted.
- Flag cells that fall outside normal range with ⚑ symbol. No interpretive commentary in the table itself.
- Trend column: Accelerating / Stable / Decelerating / Volatile. One word per row.

---

## Procedural Checklist A — Document Inventory

```
DOCUMENTS USED IN THIS BUILD

☐ 10-K annual filing (FY____)
☐ 10-Q quarterly filings: Q__ Q__ Q__ Q__
☐ Press releases: Q__ Q__ Q__ Q__ Q__
☐ Earnings call transcripts: Q__ Q__ Q__ Q__ Q__
☐ Investor presentation / slide deck
☐ Proxy statement / DEF 14A
☐ Sell-side analyst report(s): ____________
☐ Insider activity report: ____________
☐ Other: ____________

IR page URL: ________________________________

DOCUMENTS NOT AVAILABLE (gaps that may affect analysis quality):
  ____________________________________________________________
```

---

## Phase 1 Build Sequence

1. Read 10-K business description and risk factors → write S1 (model classification)
2. Write S2 (thesis, key metric, 3-sentence bear case) — highest-stakes decisions in the card
3. Read investor presentation + 10-K Item 1 → write S3 (product architecture)
4. Read 10-Q revenue disaggregation → write S4 (revenue stream map)
5. Read 10-K competition section + 2-3 transcripts (competitive Q&A) → write S5
6. Read proxy statement + transcript CFO patterns + guidance history → write S6
7. Pull 5Q data from extracted JSON → write S7 (acceleration table)
8. Complete Checklist A (document inventory) → append to output

**After each section:** Verify line count against target. If >50% over, compress before moving to next section.

---

## Phase 1 Quality Checks

Run these before handing off to Phase 2:

- [ ] S1 model classification includes normal operating profile with margin ranges
- [ ] S1 classification maps to a specific sector profile in `sector_profiles/`
- [ ] S2 thesis is falsifiable — could a single quarterly report challenge it?
- [ ] S2 key metric is directly testable from quarterly filings
- [ ] S2 bear case is specific (not strawman) and seeds S16 kill criteria
- [ ] S3 covers each product line: role, maturity, GTM, economics
- [ ] S4 revenue streams sum to ~100% and match 10-Q disaggregation
- [ ] S4 customer concentration tracked quarterly
- [ ] S5 competitive threats have severity levels (L1/L2/L3), not just names
- [ ] S5 moat grid includes both evidence AND limitations
- [ ] S6 guidance accuracy uses actual numbers (not estimates)
- [ ] S6 sandbagging factor is calculated from data
- [ ] S6 sandbagging factors table populated for each guided metric type
- [ ] S6 non-guiding companies: factors computed on available guidance types with adaptation documented
- [ ] S6 discount factors cite specific evidence
- [ ] S7 includes operating profile header with normal ranges
- [ ] S7 flags cells outside normal range
- [ ] Checklist A completed
- [ ] Phase 1 total within ±20% of ~570-line target

# Phase 3 Instructions — Risk Framework & Assembly (S16-S19)

*Sections 16-19 + Procedural Checklist B + final assembly. This is the adversarial phase — actively try to break the thesis before locking the card.*

---

## Source Document Routing

| Section | Primary Sources | What to Extract |
|---------|----------------|-----------------|
| S16 | S2 bear case + S10 earnings quality + S11 scorecard gaps | Kill criteria seeded by bear case, thresholds from current metrics |
| S17 | S8 financials + S14 sell-side models + S15 forward expectations | Implied growth rates, scenario analysis, multiples |
| S18 | All prior sections (transcription, not new analysis) | Snapshot of current state + pre-earnings expectations framework |
| S19 | 10-K risk factors + S5 competitive threats + Insider Activity Report + S10 financial vulnerabilities | Unified risk catalogue with severity/probability ratings |
| Checklist B | All sections (cross-reference audit) | 14-point consistency check |

**S16-S17 are judgment-heavy.** These require the sharpest analytical thinking — build them first.
**S18-S19 are transcription-heavy.** S18 pulls numbers from prior phases. S19 catalogues risks from multiple sources.

---

## Section Line Targets

| Section | Target | Max | Update Cadence |
|---------|-------:|----:|----------------|
| S16 Kill Criteria | 65 | 80 | Annual / thesis change |
| S17 Valuation Framework | 95 | 120 | Annual / thesis change |
| S18 Rolling Quarterly Baseline & Pre-Earnings | 130 | 160 | Quarterly |
| S19 Risk Inventory | 145 | 180 | Quarterly |
| Checklist B (compressed verdict) | 20 | 25 | Post-audit |
| **Phase 3 Total** | **~455** | **~565** | |

---

## S16 — Kill Criteria

**Key decision:** Pre-commit to specific, observable exit triggers BEFORE you need them. Seed from S2 bear case. These must be written to remove emotional decision-making at the moment of deterioration.

```
CONTEXT (1-2 lines)
  Thesis: ________________________________________________
  Current state: ________________________________________________

CRITERION 1 — [NAME]
  Trigger:    ________________________________________________
              (use AND/OR compound logic where needed — see design rules)
  Emergency:  ________________________________________________ (if applicable)
  Action:     ________________________________________________
  Source:     ________________________________________________
  Gap:        Current ___ → trigger ___ (margin of deterioration)
  Note:       ________________________________________________ (if applicable)

CRITERION 2 — [NAME]
  Trigger:    ________________________________________________
              (use AND/OR compound logic where needed — see design rules)
  Emergency:  ________________________________________________ (if applicable)
  Action:     ________________________________________________
  Source:     ________________________________________________
  Gap:        Current ___ → trigger ___
  Note:       ________________________________________________ (if applicable)

CRITERION 3 — [NAME]
  Trigger:    ________________________________________________
              (use AND/OR compound logic where needed — see design rules)
  Emergency:  ________________________________________________ (if applicable)
  Action:     ________________________________________________
  Source:     ________________________________________________
  Gap:        Current ___ → trigger ___
  Note:       ________________________________________________ (if applicable)

CRITERION 4 — [NAME]
  Trigger:    ________________________________________________
              (use AND/OR compound logic where needed — see design rules)
  Emergency:  ________________________________________________ (if applicable)
  Action:     ________________________________________________
  Source:     ________________________________________________
  Gap:        Current ___ → trigger ___
  Note:       ________________________________________________ (if applicable)

[Typically 4-6 criteria per position]

Date established:  ____________
Last reviewed:     ____________

RULE: If ANY criterion fires, execute the pre-committed action.
Do not rationalize. Do not wait for "one more quarter of data."
```

**Kill criteria design rules — each criterion MUST be:**
1. **SPECIFIC** — named metric, named threshold
2. **TIME-BOUND** — number of consecutive quarters
3. **PRE-COMMITTED** — action is predetermined (REDUCE X% / EXIT / REASSESS)
4. **OBSERVABLE** — verifiable from public filings without interpretation
5. **FALSE-POSITIVE TESTED** — ask "what benign scenario would fire
   this trigger?" If one exists, convert to compound trigger (see below)

**COMPOUND TRIGGER AUDIT (run after drafting all criteria):**

For each criterion, ask: "What benign scenario would fire this trigger?"
- If a planned event (factory transition, product wind-down, one-time
  charge) could fire the trigger, add an EXCLUDING clause or AND
  condition requiring a confirming signal.
- For the 1-2 highest-severity criteria, add an EMERGENCY single-quarter
  trigger for catastrophic readings that should execute immediately
  without waiting for consecutive-quarter confirmation. Set the emergency
  threshold at roughly 2x worse than the standard trigger.
- Add a NOTE field (1-2 lines) to any compound or emergency trigger
  explaining what false positive the design prevents. This is NOT design
  rationale — it's operational context for future-you deciding whether
  an exclusion clause applies to a specific quarterly result.

Examples:
  SIMPLE (appropriate when no benign false positive exists):
    Trigger: Top-2 customers >50% of revenue
    → No benign scenario causes this. Simple trigger is correct.

  COMPOUND (benign false positive exists):
    Trigger: Auto GM ex-credits <13% for 2Q, EXCLUDING quarters with
             documented planned factory transitions
    Emergency: <10% in ANY single quarter → execute immediately
    Note: Q1-25 hit 12.5% from Model Y refresh — compound design
          prevents false trigger on planned transitions

  OR-STRUCTURE (either condition is independently thesis-destructive):
    Trigger: Liquidity <$20B OR dilutive offering >$5B
    Note: OR is intentional — either condition alone destroys thesis

Bad: "If growth slows significantly" → too vague
Good: "DC Revenue YoY <25% for 2 consecutive quarters → REDUCE 50%"

**Writing rules:**
- Each criterion has: Trigger + Action + Source + Gap + (Note and/or
  Emergency where applicable from compound trigger audit).
- No "Design rationale:" blocks explaining why the threshold was chosen.
  However, NOTE fields ARE permitted — these are 1-2 line operational
  notes explaining what false positive a compound trigger prevents.
  The distinction: rationale = "I chose 13% because..." (excluded).
  Note = "compound design prevents false trigger from planned factory
  transitions" (included — helps future quarterly assessment).
- Gap field shows current value → trigger value. This makes it instantly visible how much margin exists before a criterion fires.
- Required category coverage: at minimum, include criteria covering (1) thesis-critical metric deterioration, (2) financial quality deterioration, (3) competitive/structural risk, (4) management credibility failure. Not every criterion maps 1:1, but all four categories must be addressed.

**Cross-reference check:** S2 bear case (3 sentences) should map to at least 2-3 kill criteria. If the bear case risks aren't covered, either the bear case or the kill criteria are incomplete.

---

## S17 — Valuation Framework

**Key decision:** What growth rate is the market pricing in? What are you actually betting on? This section converts abstract thesis confidence into concrete price expectations.

```
CURRENT PRICE:         $_____ (date: ____________)
SHARES OUTSTANDING:    _____M
MARKET CAP:            ~$_____
NET CASH:              $_____ ($_____ liquidity − $_____ debt)
ENTERPRISE VALUE:      ~$_____

IMPLIED GROWTH (Reverse DCF)
  Inputs: Starting FCF $_____ | Terminal FCF margin ___% |
          Discount rate ___% | Terminal growth ___% | ___-year horizon
  At $___, the market implies ~___% revenue CAGR for ___ years:
    FY__: ~$_____ (+___%) — (visibility assessment)
    FY__-__: ~___% CAGR → ~$_____ by FY__

SCENARIO ANALYSIS (___-year horizon → FY__ ending _______)

  BULL: Revenue ~$_____ by FY__ → $___-$___ | Probability: ___%
    Requires: ________________________________________________
    Framework: [Analyst] ([Firm], $[PT]) — [valuation methodology:
      e.g., "35x CY2030 EPS discounted" or "sum-of-parts: $X core
      + $Y growth + $Z optionality"].
    Key assumption: [single assumption that most drives this scenario —
      and what breaks it if wrong]

  BASE: Revenue ~$_____ by FY__ → $___-$___ | Probability: ___%
    Requires: ________________________________________________
    Framework: [Analyst] ([Firm], $[PT]) — [valuation methodology].
    Key assumption: [single assumption + what breaks it]

  BEAR: Revenue ~$_____ by FY__ → $___-$___ | Probability: ___%
    Requires: ________________________________________________
    Framework: [Analyst] ([Firm], $[PT]) — [valuation methodology].
    Key assumption: [single assumption + what breaks it]

  EXPECTED VALUE:
    ___ × $____ + ___ × $____ + ___ × $____ = $_____
    Upside from $_____: ~___% | Annualized: ~___%

CURRENT MULTIPLES
  Trailing:   P/E ___x GAAP, ___x non-GAAP | EV/Rev ___x
              EV/EBITDA ~___x | FCF yield ___%
  Forward:    P/E ~___x (consensus) | EV/Rev ___x | PEG ___x
  Context:    ________________________________________________

VALUATION GAP: Attractive / Fair / Stretched
  What you are betting on at $_____:
    1. ________________________________________________
    2. ________________________________________________
    3. ________________________________________________
    4. ________________________________________________
    5. ________________________________________________
  Position sizing: ________________________________________________
```

**Writing rules:**
- No methodology explanation. The reader knows what a reverse DCF is.
- No "Is this achievable?" analysis paragraphs per scenario.
- No "What could go right/wrong beyond expectations" narratives.
- No scenario sensitivity section. No extended assessment paragraphs.
- Data, scenarios, verdict. That's it.
- "Requires" field per scenario: 2-3 lines max stating what must happen for the scenario to materialize. Reference S14 sell-side models where applicable (e.g., "Framework: Rosenblatt 2027 model").
- "What you are betting on" is a numbered list of 5 items max — the specific execution milestones that must occur for the position to work.
- For pre-profitability companies: FCF-based reverse DCF may not work. Use revenue multiples with path-to-profitability timeline instead. Note the methodology adjustment.
- Framework field must include: (1) analyst name and firm, (2) their
  specific valuation methodology (multiple type, DCF assumptions, or
  sum-of-parts decomposition), and (3) what you can verify about how
  their PT was constructed. Pull methodology from S14 key analyst
  entries where available.
- If analyst methodology is not available from the sell-side report,
  reverse-engineer the implied multiple from their PT and the company's
  projected financials. State "implied methodology" and show the math
  (e.g., "$125 PT / ~$5 FY28 core EPS = ~25x, implying auto-only
  valuation with zero optionality premium").
- Do NOT fabricate analyst methodologies. If you cannot determine how
  a PT was derived, state that explicitly.
- Key assumption field (1-2 lines): state the single assumption that
  most drives the scenario AND what happens if that assumption fails.
  This creates a testable link between the scenario and future quarterly
  results.

---

## S18 — Rolling Quarterly Baseline & Pre-Earnings Checklist

**Key decision:** Lock the snapshot of "where things stand now" and build the expectations framework for next earnings. This section is half transcription (pulling numbers from S8-S15) and half forward-looking calibration.

```
LAST COMPLETED QUARTER: ____________
DATE UPDATED:           ____________

KEY FINANCIALS SNAPSHOT
  Revenue:                    $_____     YoY: _____%
  Gross margin:               _____%
  Operating margin (GAAP):    _____%
  Adj EBITDA margin:          _____%
  FCF:                        $_____     Conversion: _____%
  DSO:                        _____ days
  SBC as % of revenue:        _____%
  Diluted share count:        _____M
  ROIC:                       _____%

KEY METRIC (from Section 2)
  Metric:                     ____________
  Value:                      _____
  Trend vs prior Q:           Improving / Stable / Declining

SCORECARD RESULT
  Weighted total:             _____
  Normalized score:           _____%
  Interpretation:             Improving / Stable / Deteriorating
  2×2 placement:              ____________

EARNINGS QUALITY VERDICT:     Clean / Minor concerns / Investigate / Red flag
MANAGEMENT CREDIBILITY:       High / Moderate / Low / Deteriorating  (Cap alloc: ___ / 20)
VERDICT LAST QUARTER:         Buy / Hold / Sell
CONVICTION LEVEL:             High / Medium / Low

PRE-EARNINGS CHECKLIST (for upcoming quarter)
  Earnings date:              ____________
  Documents to download:      [reference Procedural Checklist A]

  EXPECTATIONS BASELINE (complete BEFORE earnings release)
  What the market needs to hear this quarter to justify current price:
  1. ________________________________________________
  2. ________________________________________________
  3. ________________________________________________

  Implied growth rate at current price (from S17): _____%
  Consensus revenue expectation:                   $_____
  Your credibility-adjusted expectation (from S15): $_____

  Moat pulse (from S5):  Strengthening / Stable / Early erosion / Eroding

  WHAT TO CHECK FIRST (15-minute quick assessment)
  1. Key metric — did it improve, hold, or deteriorate?
  2. DSO vs year-ago quarter
  3. FCF conversion
  4. Guidance section of press release — raised, maintained, or lowered?
  5. Transcript search for thesis keywords
  6. Kill criteria check — any triggers fired?

  SPECIFIC THRESHOLDS TO WATCH
  Revenue:       Credibility-adjusted expectation: $_____
                 Concern threshold: below $_____
  Margins:       Normal range: _____% to _____%
                 Concern threshold: below _____%
  Key metric:    Expectation: _____
                 Kill criteria threshold: _____

  MANAGEMENT COMMITMENTS TO VERIFY (from S15)
  1. ________________________________________________
  2. ________________________________________________
  3. ________________________________________________

  POST-EARNINGS ASSESSMENT (complete AFTER quarterly refresh)
  Did the quarter meet, exceed, or miss what the market needed to hear?
    ________________________________________________________________
  Did growth/margin trajectory change, or just timing?
    ________________________________________________________________
  Has the probability of your base case increased or decreased?
    Increased / Unchanged / Decreased
    Why: ____________________________________________________________
```

**Writing rules:**
- KEY FINANCIALS SNAPSHOT is pure transcription from S8-S10. Do not recalculate — copy the exact numbers.
- Verdicts (earnings quality, credibility, conviction) must use the exact categorical values from their source sections. Do not paraphrase.
- "What the market needs to hear" is the highest-judgment field. State 3 specific, testable expectations — not generic "good results." Example: "800G revenue >$25M (proves volume ramp is real)" not "continued growth."
- SPECIFIC THRESHOLDS TO WATCH: populate concern thresholds from S16 kill criteria gap analysis. The kill criteria gap tells you how far current metrics are from trigger levels.
- POST-EARNINGS ASSESSMENT is left blank at card creation. Fill in after each quarterly refresh.

**Cross-reference checks:**
- Every metric in KEY FINANCIALS SNAPSHOT must trace to a specific section (Revenue→S8, FCF→S10, DSO→S10, Scorecard→S11, etc.)
- Credibility-adjusted expectation must match S15 adjusted guidance
- Kill criteria thresholds must match S16

---

## S19 — Risk Inventory

**Key decision:** Build the unified risk catalogue. Every risk gets the same compact format regardless of category. This is the single place where all risk signals live — do not scatter risks across other sections.

```
RISK INVENTORY

RISK 1: [NAME]                                          [GREEN/YELLOW/RED]
  Category | Severity: ___ | Probability: ___
  (2-3 line description including current state)
  Watch: ________________________________________________
  Kill criterion: #___ (if linked)

RISK 2: [NAME]                                          [GREEN/YELLOW/RED]
  Category | Severity: ___ | Probability: ___
  (2-3 line description including current state)
  Watch: ________________________________________________
  Kill criterion: #___ (if linked)

[Add risks as needed — typically 8-12 per company]

REQUIRED ENTRY: INSIDER ACTIVITY — Verdict: Routine / Noteworthy / Concerning
  (2-3 lines: pattern from Insider Activity Report, 10b5-1 context,
  signal for deviation from pattern)

RISK SUMMARY MATRIX

                    Low Prob    Medium Prob    High Prob
  ─────────────────────────────────────────────────────
  High severity  |           |              |
  ─────────────────────────────────────────────────────
  Medium-High    |           |              |
  ─────────────────────────────────────────────────────
  Medium         |           |              |
  ─────────────────────────────────────────────────────
  Low            |           |              |
  ─────────────────────────────────────────────────────

  GREEN: ___ risks    YELLOW: ___ risks    RED: ___ risks

  CORRELATED RISK NOTE (if applicable):
  ________________________________________________________________
```

**Writing rules:**
- Per-risk format is exactly: name + color + category/severity/probability + 2-3 line description + watch items + kill criterion link. Nothing else.
- No "Evidence:" paragraphs per risk. No "Mitigant:" paragraphs. No verbose "Cross-reference:" lists. Evidence detail lives in source documents (10-K, Insider Activity Report).
- Risk description (2-3 lines) must include current state and key facts — not just the abstract risk.
- Watch field: list leading indicators as comma-separated items. These are what you monitor quarterly.
- Kill criterion link: if a risk maps to a S16 kill criterion, cite the number. Not every risk will have one.
- The Insider Activity Report is a separate source document. Summarize its verdict here — do not reproduce the full analysis.
- Insider activity MUST distinguish 10b5-1 plan transactions (routine) from discretionary trades (potentially informative). This is the exclusive home for insider activity analysis — S13 must NOT duplicate it.

**Risk sourcing checklist** (ensure coverage):
- 10-K risk factors → extract the 3-5 most material (not all 30+ boilerplate risks)
- S5 competitive threats (L2/L3 severity) → must appear in risk inventory
- S5 moat decay signals → must have corresponding risk entries
- S10 earnings quality flags → any "Investigate" or "Red flag" items become risks
- S2 bear case → each bear case element should map to a risk
- Insider Activity Report → summarize pattern and verdict
- Macro/regulatory exposure → company-specific, not generic

**Correlated risk note:** Identify risk clusters where multiple risks would fire simultaneously. Example: "Risks #2 (customer concentration), #5 (hyperscaler disqualification), and #8 (800G firmware failure) are correlated — a firmware-driven disqualification at the primary DC customer would trigger all three simultaneously."

---

## Procedural Checklist B — Consistency Audit

*Run after completing S16-S19. This is a mechanical cross-reference pass, not new analysis.*

**Full checklist (use during build — do not include in final card):**

```
NUMERICAL CONSISTENCY
- [ ] Revenue segments sum to total (S4 vs S8)
- [ ] Share count matches across balance sheet and earnings quality (S9, S10)
- [ ] FCF figures match between S10 and S11 (if referenced in scorecard)
- [ ] Guidance numbers in S15 internally consistent

NARRATIVE CONSISTENCY
- [ ] Thesis (S2) is supported by scorecard results (S11)
- [ ] Key metric (S2) has 2x weight in scorecard (S11)
- [ ] Competitive threats (S5) appear in risk inventory (S19)
- [ ] Moat decay signals (S5) have corresponding entries in risk inventory (S19)
- [ ] Management assessment (S6) is consistent with credibility verdict (S15)
- [ ] Model classification (S1) drives correct FCF formula (S10) and Tier 2 selection (S12)

LOGICAL CONSISTENCY
- [ ] Kill criteria trigger levels are more extreme than current scorecard deterioration thresholds
- [ ] Valuation framework (S17) is achievable given growth rates in S8
- [ ] Catalyst calendar (S13) pipeline timing aligns with revenue recognition patterns in S8
- [ ] Bear case from S2 is reflected in kill criteria (S16) and risk inventory (S19)
```

**In the final assembled card, compress to verdict summary:**

```
VERDICT: PASS / FAIL — __/14 checks verified [date]
  Numerical (4/4): ________________________________________________
  Narrative  (6/6): ________________________________________________
  Logical    (4/4): ________________________________________________
```

---

## Phase 3 Build Sequence

1. Read S2 bear case + S10 earnings quality verdict + S11 scorecard → build S16 (kill criteria)
2. Read S8 financials + S14 sell-side models + S15 forward expectations → build S17 (valuation framework)
3. Transcribe key metrics from S8-S15 → build S18 snapshot. Then build pre-earnings expectations baseline using S15 adjusted guidance and S17 implied growth.
4. Read 10-K risk factors + Insider Activity Report. Cross-reference S5 competitive threats and S10 financial flags → build S19 (risk inventory)
5. Run Procedural Checklist B (14-point consistency audit across all sections)
6. **Assembly:**
   a. Combine Sections 1-19 + Procedural Checklist A (from Phase 1)
   b. Compress Checklist B to verdict summary (PASS/FAIL + 1-line per category)
   c. Do NOT include: appendix, key analytical decisions, build-process notes, verification logs, quality check details, or design rationale
   d. Verify total line count is within ±10% of 1,620 target

**After each section:** Verify line count against target. If >50% over, compress before moving to next section.

---

## Phase 3 Quality Checks

Run these before declaring the card final:

- [ ] S16 kill criteria are specific, time-bound, pre-committed, and false-positive tested
- [ ] S16 format: Trigger + Action + Source + Gap + (Note and/or Emergency where applicable)
- [ ] S16 compound trigger audit completed — each criterion checked for benign false positives
- [ ] S16 top 1-2 severity criteria have Emergency single-quarter triggers
- [ ] S16 has no Design Rationale blocks (Note fields for operational context ARE permitted)
- [ ] S16 covers all four required categories: thesis metric, financial quality, competitive/structural, credibility
- [ ] S16 bear case (S2) maps to at least 2-3 kill criteria
- [ ] S17 shows implied growth rate at current price — no methodology explanation
- [ ] S17 scenario probabilities sum to 100%
- [ ] S17 expected value is calculated (not just scenarios listed)
- [ ] S17 "what you are betting on" is ≤5 specific items
- [ ] S17 each scenario Framework field includes analyst + firm + methodology (not just name + PT)
- [ ] S17 each scenario has Key assumption field stating what drives it and what breaks it
- [ ] S17 Framework methodologies are sourced from S14 or reverse-engineered with math shown
- [ ] S18 key financials snapshot traces to source sections (S8-S15)
- [ ] S18 credibility-adjusted expectation matches S15 adjusted guidance
- [ ] S18 concern thresholds populated from S16 kill criteria gaps
- [ ] S18 "what the market needs to hear" has 3 specific, testable expectations
- [ ] S19 includes required entry: Insider Activity
- [ ] S19 insider activity distinguishes 10b5-1 plans from discretionary trades
- [ ] S19 uses compact per-risk format — no evidence or mitigant paragraphs
- [ ] S19 every risk has watch items (leading indicators)
- [ ] S19 S5 L2/L3 competitive threats appear in risk inventory
- [ ] S19 S2 bear case elements map to risks
- [ ] S19 correlated risk note present (if applicable)
- [ ] Checklist B: 14/14 consistency checks passed
- [ ] No duplicate content across sections (insider activity: S19 only, not S13)
- [ ] No section exceeds its max line target
- [ ] Total assembled card within ±10% of 1,620-line target

---

## Assembly Rules

The final output is a single file: `[TICKER]_Configuration_Card.md`

**Include:**
- Sections 1-19 in order
- Procedural Checklist A (document inventory, from Phase 1)
- Procedural Checklist B (compressed verdict summary only)

**Exclude:**
- Appendices
- Build-process notes or verification logs
- Design rationale for any section
- Quality check details (those live in phase instruction files)
- "Key analytical decisions" summaries
- Any content addressed to the builder rather than the reader

**Self-contained test:** A reader encountering this card for the first time, with no prior context about the company, should be able to understand the complete investment position from the card alone.

---

## Quarterly Refresh Routing

After initial card creation, each subsequent quarter requires updating (not rebuilding):

**Always refresh (every quarter):**
- S5 moat pulse-check only (5 minutes)
- S8-S10 (financials + earnings quality)
- S11 (scorecard — new scores, same locked weights)
- S12 (Tier 2 metrics)
- S15 (management guidance + credibility update)
- S18 (baseline snapshot + pre-earnings checklist)

**Refresh if material change:**
- S5 competitive landscape (full rebuild, not just pulse)
- S13-S14 (catalysts / sell-side)
- S19 (risk inventory including insider activity update)

**Refresh annually or on thesis change:**
- S1-S4 (foundation)
- S6-S7 (management profiles / acceleration table)
- S16 (kill criteria)
- S17 (valuation framework)

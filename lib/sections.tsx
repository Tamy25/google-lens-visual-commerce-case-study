import React from "react";

export type CaseStudySection = {
  id: string;
  title: string;
  tldr: string[];
  deepDive: React.ReactNode;
  defaultCollapsed: boolean;
  prevId: string;
  nextId: string;
};

function TableWrap({ children }: { children: React.ReactNode }) {
  return <div className="tableWrap">{children}</div>;
}

const rawSections = [
  {
    id: "product-selection",
    title: "Product Selection & Rationale",
    tldr: [
      "Google Lens sits at the intersection of visual-first behavior, AR commerce, and multimodal AI improvements.",
      "Lens is currently undermonetized relative to its commercial potential (especially in fashion/eyewear).",
      "Lenskart is strategically relevant because many eyewear purchases start from visual inspiration (seeing someone else’s frames)."
    ],
    deepDive: (
      <>
        <h3>Why Google Lens?</h3>
        <p>
          The case study selects Google Lens due to a combination of market timing (visual-first behavior and AR commerce),
          product capability (multimodal understanding), and monetization opportunity.
        </p>

        <ul className="ul">
          <li>
            <strong>Massive market opportunity:</strong> Visual search aligns with Gen Z discovery patterns, AR commerce, and improved multimodal AI.
          </li>
          <li>
            <strong>Undermonetization gap:</strong> Lens processes billions of visual searches, but captures limited commerce value today.
          </li>
          <li>
            <strong>Strategic relevance to Lenskart:</strong> Visual inspiration is a major starting point for eyewear buying journeys.
          </li>
        </ul>

        <h3>Current market position</h3>
        <p>
          Lens is framed as an <strong>identification utility</strong> today—strong at landmarks and text translation, but weaker at high-value commercial
          flows like fashion discovery and purchase completion.
        </p>
      </>
    )
  },
  {
    id: "current-state",
    title: "Current State Analysis",
    tldr: [
      "Lens usage can be segmented into shoppers (40%), learners (30%), translators (15%), and students (15%).",
      "The case study lists baseline metrics as estimates (e.g., 3–4B monthly visual searches, ~2% shopping conversion).",
      "The emphasis is on measurement frameworks rather than claiming exact internal numbers."
    ],
    deepDive: (
      <>
        <h3>User segmentation & Jobs-to-be-Done</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>User Segment</th>
                <th>Primary Job-to-be-Done</th>
                <th>% of Users</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shoppers</td>
                <td>“What is this product? Where can I buy it?”</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>Learners</td>
                <td>“What plant/animal/landmark is this?”</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>Translators</td>
                <td>“What does this sign/menu say?”</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Students</td>
                <td>“Solve this math problem”</td>
                <td>15%</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <h3>Estimated current metrics (explicitly noted as estimates)</h3>
        <p className="muted">
          Note in the case study: these are estimates based on public information/benchmarks; the measurement framework matters more than precision.
        </p>

        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Metric Category</th>
                <th>Estimated Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly Visual Searches</td>
                <td>3–4B (based on a 2022 public announcement referenced in the doc)</td>
              </tr>
              <tr>
                <td>Searches per Session</td>
                <td>2–3 searches</td>
              </tr>
              <tr>
                <td>D7 Retention</td>
                <td>20–25% (extrapolated from similar utilities)</td>
              </tr>
              <tr>
                <td>Shopping Conversion Rate</td>
                <td>~2% (search → purchase)</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>
      </>
    )
  },
  {
    id: "problem-identification",
    title: "Problem Identification & Deep Dives",
    tldr: [
      "Four blockers: discovery gap, accuracy inconsistency (especially fashion), transaction friction, and limited context/memory.",
      "Transaction friction is framed as the largest monetization choke point (users drop between ‘found it’ and ‘bought it’).",
      "A memory layer is positioned as the shift from occasional utility → habitual shopping assistant."
    ],
    deepDive: (
      <>
        <h3>Pain Point 1: Discovery gap</h3>
        <p>
          Users often default to text search out of habit, don’t get “trigger moments” suggesting Lens, and may not notice the Lens entry points.
          Lack of confidence (“Will this work?”) further suppresses usage.
        </p>
        <p>
          <strong>Example:</strong> A user sees a plant and types a vague description, getting generic results—when photographing it would yield an exact ID.
        </p>

        <h3>Pain Point 2: Accuracy inconsistency</h3>
        <p>
          The case study argues Lens performs well on stable objects (landmarks) but struggles on domains with high variance and fast-changing catalogs (fashion/furniture).
        </p>

        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Attribute</th>
                <th>Landmarks (High Accuracy)</th>
                <th>Fashion/Furniture (Low Accuracy)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Training Data Volume</td>
                <td>Very high (e.g., iconic landmarks)</td>
                <td>Low per specific SKU (often tens of images)</td>
              </tr>
              <tr>
                <td>Visual Consistency</td>
                <td>Stable across time</td>
                <td>High variance (lighting, angles, body types)</td>
              </tr>
              <tr>
                <td>Temporal Stability</td>
                <td>Permanent</td>
                <td>Ephemeral/seasonal SKUs</td>
              </tr>
              <tr>
                <td>Distinctive Features</td>
                <td>Unique structures</td>
                <td>Many “similar” products across brands</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <p>
          <strong>Example:</strong> A black leather jacket photo yields generic “black leather jackets,” missing fine-grained style attributes (collar, zipper, hardware, cut).
        </p>

        <h3>Pain Point 3: Action friction (transaction completion)</h3>
        <p>
          Lens can identify products but creates friction from results → purchase: unclear availability/price, variant confusion, multi-tab comparison, and eventual drop-off.
        </p>

        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Current (Broken) User Flow</th>
                <th>Friction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Snap photo → identifies “Ray-Ban Wayfarer Sunglasses”</td>
                <td>Low ✓</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Results page with many links; unclear price/availability</td>
                <td>Medium</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Click retailer → many variants; uncertainty about exact match</td>
                <td>High</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Open more tabs to compare</td>
                <td>High</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Give up / bookmark; no purchase</td>
                <td>Failure</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <h3>Pain Point 4: Limited context (memory gap)</h3>
        <p>
          Each Lens search is isolated; it doesn’t remember preferences, past searches, or cross-session intent (e.g., coordinating items for an outfit).
        </p>

        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Current Lens (No Memory)</th>
                <th>Lens With Memory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>“What is this?” → “Black boots” → journey ends</td>
                <td>Learns style/size/budget preferences and can suggest relevant items and coordination</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <p>
          <strong>Scenario:</strong> “Wedding shopping” becomes easier if Lens auto-creates a collection and recommends matching accessories, tracks price drops, and surfaces saved items.
        </p>

        <p className="muted">[Figure Placeholder: Add a screenshot/mock of “Collections” + “Price drop alerts” UI]</p>
      </>
    )
  },
  {
    id: "prioritization",
    title: "Prioritization Framework",
    tldr: [
      "Uses an Opportunity Score approach: (Importance − Satisfaction) + business impact lens.",
      "P0: transaction completion friction (highest opportunity score).",
      "P1: memory/context + fashion/eyewear accuracy; P2: discovery gap."
    ],
    deepDive: (
      <>
        <h3>Opportunity Score table</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Problem</th>
                <th>Importance (1-10)</th>
                <th>Satisfaction (1-10)</th>
                <th>Opportunity Score</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transaction completion friction</td>
                <td>10</td>
                <td>3</td>
                <td>7</td>
                <td>P0 - HIGHEST</td>
              </tr>
              <tr>
                <td>Limited context/memory</td>
                <td>8</td>
                <td>2</td>
                <td>6</td>
                <td>P1 - HIGH</td>
              </tr>
              <tr>
                <td>Fashion/eyewear accuracy</td>
                <td>9</td>
                <td>4</td>
                <td>5</td>
                <td>P1 - HIGH</td>
              </tr>
              <tr>
                <td>Discovery gap</td>
                <td>7</td>
                <td>4</td>
                <td>3</td>
                <td>P2 - MEDIUM</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <p>
          <strong>Strategic decision (from the doc):</strong> prioritize transaction completion because it directly blocks monetization even if discovery/accuracy improve.
        </p>
      </>
    )
  },
  {
    id: "solution-design",
    title: "Solution Design",
    tldr: [
      "Vision: evolve Lens into an end-to-end visual commerce platform (discover → evaluate → purchase).",
      "Phase 1 MVP: eyewear “Style Match” with AR try-on + partner inventory and checkout improvements.",
      "Phase 2: Smart Shopping Memory (collections, cross-item recommendations, price alerts, style learning).",
      "Phase 3: Live shopping overlays in physical retail (window shopping AR, in-store enhancements)."
    ],
    deepDive: (
      <>
        <h3>Vision statement</h3>
        <p>
          Transform Lens from identification into a seamless visual commerce flow: discover, evaluate, and purchase with minimal friction.
        </p>

        <h3>Phase 1: Style Match for Eyewear (MVP - 3 months)</h3>
        <p>
          <strong>User story:</strong> find and purchase similar frames matching face shape and budget without hours of manual searching.
        </p>
        <ul className="ul">
          <li>Capture inspiration photo → Lens identifies frame attributes (shape/material/finish)</li>
          <li>“Find Similar” carousel across partner brands</li>
          <li>Filters: price, face shape compatibility, brands, nearby stores</li>
          <li>AR virtual try-on</li>
          <li>One-tap checkout (e.g., Google Pay) or reserve for store pickup</li>
        </ul>

        <h3>Technical requirements (as stated)</h3>
        <ul className="ul">
          <li>Fine-tune multimodal models on large eyewear image set; feature extraction (shape/material/color/bridge/temple).</li>
          <li>Partner APIs for real-time inventory sync (show in-stock items).</li>
          <li>Face shape detection via selfie analysis for personalized recommendations.</li>
          <li>AR try-on with facial landmarks and lighting/shadows.</li>
        </ul>

        <h3>B2B monetization (Lenskart integration concept)</h3>
        <ul className="ul">
          <li>Tiered placement for “Find Similar” results + analytics dashboard.</li>
          <li>Attribution tracking from Lens search → store visit → purchase.</li>
        </ul>

        <h3>Phase 2: Smart Shopping Memory (6 months)</h3>
        <ul className="ul">
          <li>Auto-collections across related searches</li>
          <li>Cross-item recommendations (coordination)</li>
          <li>Price drop alerts</li>
          <li>Style learning and filtering</li>
          <li>Search history timeline</li>
        </ul>

        <h3>Phase 3: Lens Live Shopping (12 months)</h3>
        <ul className="ul">
          <li>Window-shopping AR overlays (prices, reviews, sizes)</li>
          <li>In-store enhancements (recognize item, show compatibility, alternatives)</li>
          <li>Social proof layer</li>
          <li>Seamless checkout (in-store or online)</li>
        </ul>

        <p className="muted">[Figure Placeholder: Add your own flow diagram for Phase 1 → Phase 3 user journey]</p>
      </>
    )
  },
  {
    id: "success-metrics",
    title: "Success Metrics & KPIs",
    tldr: [
      "North Star: visual searches that result in completed purchases (conversion rate).",
      "6-month targets include purchase lift, conversion improvement (2% → 8%), and retention gains.",
      "Business metrics include Lens-attributed GMV, partner revenue, CPA improvement, and partner sign-ups."
    ],
    deepDive: (
      <>
        <h3>North Star Metric</h3>
        <p>
          <strong>Visual searches that result in completed purchases (Conversion Rate)</strong>
        </p>

        <h3>6-Month target metrics (from the doc)</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Baseline</th>
                <th>6-Month Target</th>
                <th>Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lens-Attributed Purchases (Monthly)</td>
                <td>5M</td>
                <td>25M</td>
                <td>5x</td>
              </tr>
              <tr>
                <td>Shopping Session Conversion Rate</td>
                <td>2%</td>
                <td>8%</td>
                <td>4x</td>
              </tr>
              <tr>
                <td>Average Order Value (AOV)</td>
                <td>(not provided)</td>
                <td>$65</td>
                <td>(not provided)</td>
              </tr>
              <tr>
                <td>D30 Retention (Shopping Users)</td>
                <td>25%</td>
                <td>45%</td>
                <td>+20pp</td>
              </tr>
              <tr>
                <td>“Found What I Wanted” Success Rate</td>
                <td>35%</td>
                <td>70%</td>
                <td>2x</td>
              </tr>
              <tr>
                <td>NPS for Lens Shopping Feature</td>
                <td>25</td>
                <td>55</td>
                <td>+30</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <h3>Business metrics (from the doc)</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Business Metric</th>
                <th>6-Month Target</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Shopping GMV via Lens (Monthly)</td>
                <td>$100M → $500M</td>
              </tr>
              <tr>
                <td>Partner Revenue (Lenskart API)</td>
                <td>$0 → $15M ARR</td>
              </tr>
              <tr>
                <td>Cost-Per-Acquisition vs. Paid Search</td>
                <td>40% lower CPA</td>
              </tr>
              <tr>
                <td>Eyewear Partner Sign-ups</td>
                <td>20 initial partners (incl. Lenskart, Ray-Ban, Oakley)</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>
      </>
    )
  },
  {
    id: "lenskart-integration",
    title: "Lenskart Integration Strategy",
    tldr: [
      "Frames the partnership as mutually reinforcing: Lens captures inspiration moments; Lenskart closes omnichannel journeys.",
      "Proposes in-store enhancements (smart mirrors, OCR prescription autofill, AI recommendations).",
      "Proposes online enhancements (Search-by-photo on Lenskart site, improved AR try-on, style profile personalization)."
    ],
    deepDive: (
      <>
        <h3>Strategic value proposition</h3>
        <ul className="ul">
          <li><strong>Traffic amplification:</strong> capture “moment of inspiration” and route to store/site.</li>
          <li><strong>Omnichannel bridge:</strong> discover via Lens → try virtually → reserve pickup → fitting → order.</li>
          <li><strong>In-house brand promotion:</strong> preferential surfacing of higher-margin in-house brands where appropriate.</li>
          <li><strong>Data partnership:</strong> training data flywheel and shared insight value.</li>
        </ul>

        <h3>Lenskart-specific features (in-store)</h3>
        <ul className="ul">
          <li><strong>Smart mirror integration:</strong> show model/price/compatibility/reviews/alt colors; save to collections.</li>
          <li><strong>Prescription auto-fill:</strong> OCR scan → populate form; reduce errors and time.</li>
          <li><strong>Virtual optometrist consultation:</strong> recommendations based on face shape and lifestyle needs.</li>
        </ul>

        <h3>Online experience enhancements</h3>
        <ul className="ul">
          <li><strong>Search by photo</strong> entry point on Lenskart.com powered by Lens matching.</li>
          <li><strong>Enhanced AR try-on</strong> with better landmarking and lighting simulation (as proposed).</li>
          <li><strong>Style recommendations</strong> via “Style Profile” after repeated searches.</li>
        </ul>

        <h3>Brand portfolio strategy table</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Brand Category</th>
                <th>Lens Strategy</th>
                <th>Example Brands</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>In-House Brands</td>
                <td>Premium placement; “Similar style, better value” alternatives</td>
                <td>Vincent Chase, John Jacobs, Aqualens, Lenskart Air, Hustlr, Hopper</td>
              </tr>
              <tr>
                <td>Premium Partners</td>
                <td>Exact matches where relevant; ensure best pricing/availability via partnership</td>
                <td>Ray-Ban, Oakley, Hugo Boss, Tommy Hilfiger, Carrera</td>
              </tr>
              <tr>
                <td>Contact Lens Brands</td>
                <td>Cross-sell prompts compatible with prescription</td>
                <td>Aqualens, Acuvue, Bausch &amp; Lomb, Alcon, CooperVision</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <h3>Launch partnership structure (phased)</h3>
        <ul className="ul">
          <li><strong>Phase 1 (Months 1–3):</strong> Exclusive beta in India, top metro stores, co-branded signage.</li>
          <li><strong>Phase 2 (Months 4–6):</strong> Scale to all stores; expand partners; joint PR campaign.</li>
          <li><strong>Phase 3 (Months 7–12):</strong> Data flywheel and revenue share model.</li>
        </ul>

        <p className="muted">[Figure Placeholder: Add partner workflow diagram (Lens search → attribution → retailer analytics)]</p>
      </>
    )
  },
  {
    id: "risk-analysis",
    title: "Risk Analysis & Mitigation",
    tldr: [
      "Top risks: privacy concerns, retailer cannibalization fears, accuracy thresholds, internal competition, inventory staleness.",
      "Mitigations emphasize opt-in, on-device processing, confidence scoring, and real-time inventory sync.",
      "A gradual rollout with A/B thresholds is proposed to protect user trust."
    ],
    deepDive: (
      <>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Risk Category</th>
                <th>Specific Risk</th>
                <th>Severity</th>
                <th>Mitigation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Privacy Concerns</td>
                <td>Discomfort with camera usage in stores; facial tracking concerns</td>
                <td>HIGH</td>
                <td>Clear opt-in, local on-device processing, blur bystanders, no storage without consent</td>
              </tr>
              <tr>
                <td>Retailer Cannibalization</td>
                <td>Showrooming fears; “why visit stores?”</td>
                <td>HIGH</td>
                <td>Position as traffic driver; provide attribution &amp; store visit metrics; promote pickup placement</td>
              </tr>
              <tr>
                <td>Accuracy Threshold</td>
                <td>Bad matches destroy trust quickly</td>
                <td>CRITICAL</td>
                <td>Confidence scoring (e.g., show &gt;80%), human-in-loop training, gradual rollout, A/B thresholds</td>
              </tr>
              <tr>
                <td>Internal Competition</td>
                <td>Concern about cannibalizing shopping ads revenue</td>
                <td>MEDIUM</td>
                <td>Position as complementary (discovery vs. consideration); shared attribution model</td>
              </tr>
              <tr>
                <td>Inventory Staleness</td>
                <td>Out-of-stock after click → bad experience</td>
                <td>HIGH</td>
                <td>Real-time inventory API (tight sync SLA), show only in-stock, notify-on-restock fallback</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>
      </>
    )
  },
  {
    id: "roadmap",
    title: "Implementation Roadmap",
    tldr: [
      "12-month phased rollout from eyewear MVP → memory features → live shopping overlays → expansion to more categories and markets.",
      "Each phase has explicit success criteria (conversion, accuracy, retention, user count, GMV).",
      "Roadmap calls out market expansion targets (US/UK/UAE) for later stages."
    ],
    deepDive: (
      <>
        <h3>12-month phased rollout</h3>
        <TableWrap>
          <table>
            <thead>
              <tr>
                <th>Timeline</th>
                <th>Phase</th>
                <th>Key Deliverables</th>
                <th>Success Criteria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>M1–M3</td>
                <td>MVP: Style Match for Eyewear</td>
                <td>ML training, partner API integration, AR try-on, “find similar”, metro store pilots</td>
                <td>5% conversion, 70% match accuracy, 50K beta users, NPS &gt; 40</td>
              </tr>
              <tr>
                <td>M4–M6</td>
                <td>V1: Smart Shopping Memory</td>
                <td>Auto-collections, recommendations, price alerts, history, style learning, nationwide rollout</td>
                <td>8% conversion, 45% D30 retention, 500K active users, 5M searches/month</td>
              </tr>
              <tr>
                <td>M7–M9</td>
                <td>V2: Lens Live Shopping (Beta)</td>
                <td>Window AR overlay, in-store try-on enhancements, prescription OCR, store assistant, more partners</td>
                <td>12% conversion, 25M purchases attributed, $500M GMV, 20 partner brands</td>
              </tr>
              <tr>
                <td>M10–M12</td>
                <td>Scale &amp; International Expansion</td>
                <td>Expand to fashion/furniture, launch in more markets, B2B platform for retailers</td>
                <td>20% eyewear conversion, 50M+ global purchases, $1B annual GMV, 50+ partners</td>
              </tr>
            </tbody>
          </table>
        </TableWrap>

        <h3>Conclusion (from the doc)</h3>
        <ul className="ul">
          <li>Prioritize transaction completion because monetization depends on seamless purchase flows.</li>
          <li>Use data partnerships to overcome accuracy limitations in complex categories like fashion.</li>
          <li>Memory increases habitual engagement beyond occasional “utility” use.</li>
          <li>Omnichannel integration creates defensible advantage.</li>
          <li>Measure and iterate using clear metrics.</li>
        </ul>
      </>
    )
  }
] as const;

function computeDefaultCollapsed(deepDiveTextLength: number) {
  // Heuristic: long sections default collapsed.
  return deepDiveTextLength > 1600;
}

function estimateTextLength(node: React.ReactNode): number {
  // Lightweight approximation: count characters in string children
  // (we avoid rendering; this is a deterministic, small heuristic).
  let len = 0;

  function walk(n: React.ReactNode) {
    if (n === null || n === undefined || typeof n === "boolean") return;
    if (typeof n === "string" || typeof n === "number") {
      len += String(n).length;
      return;
    }
    if (Array.isArray(n)) {
      n.forEach(walk);
      return;
    }
    if (React.isValidElement(n)) {
      walk(n.props.children);
      return;
    }
  }

  walk(node);
  return len;
}

const ids = rawSections.map((s) => s.id);

export const sections: CaseStudySection[] = rawSections.map((s, i) => {
  const prevId = ids[Math.max(0, i - 1)];
  const nextId = ids[Math.min(ids.length - 1, i + 1)];
  const deepLen = estimateTextLength(s.deepDive);
  const defaultCollapsed = computeDefaultCollapsed(deepLen);

  return {
    ...s,
    defaultCollapsed,
    prevId,
    nextId
  };
});

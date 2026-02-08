"use client";

type Props = {
  skimMode: boolean;
  onToggleSkim: () => void;
  onOpenContents: () => void;
};

export default function HeaderBar({ skimMode, onToggleSkim, onOpenContents }: Props) {
  return (
    <header className="header noPrint">
      <div className="container">
        <div className="headerInner">
          <div className="brand">
            <div className="brandTitle">PM Case Study</div>
            <div className="brandSub">Google Lens → Visual Commerce</div>
          </div>

          <div className="headerActions">
            <span className="badge" aria-label="Skim mode status">
              Skim mode: <strong>{skimMode ? "ON" : "OFF"}</strong>
            </span>

            <button className="btn btnPrimary" onClick={onToggleSkim}>
              {skimMode ? "Exit skim" : "5-minute skim"}
            </button>

            <button className="btn" onClick={() => window.print()}>
              Print / Save PDF
            </button>

            {/* This is mostly useful on mobile, but harmless on desktop */}
            <button className="btn" onClick={onOpenContents}>
              Contents
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

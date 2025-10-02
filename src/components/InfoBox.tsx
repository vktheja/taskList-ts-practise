import { type ReactNode } from "react";

type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};

type WarningBoxProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

const InfoBox = (props: InfoBoxProps) => {
  const { mode, children } = props; //Canot destructure severity here because severity is only part of props if props is of warningboxprops

  let displayClassName = `infobox infobox-${mode}`;
  if (mode === "warning") {
    displayClassName = `infobox infobox-${mode} ${mode}--${props.severity}`;
  }
  return (
    <aside className={displayClassName}>
      {mode === "warning" && <h2>Warning</h2>}
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

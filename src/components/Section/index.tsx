import { ReactNode } from "react";
import styles from "./styles.module.scss";
interface SectionProps {
  children: ReactNode;
  name: string;
  id: string;
  margin?: string;
}

export function Section({ children, id, margin }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.Section} `}
      style={{ margin: margin ? +"!important" : "3rem 0" }}
      data-animate={"not-animate"}
    >
      {children}
    </section>
  );
}

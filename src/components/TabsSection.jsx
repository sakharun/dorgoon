import React from "react";
import Button from "./Button/Button";

export default function TabsSection({ active, onChange }) {
  return (
    <section
      style={{
        marginBottom: "1rem",
        textAlign: "center",
      }}
    >
      <Button isActive={active === "main"} onClick={() => onChange("main")}>
        Өйдөбүллэр
      </Button>
      <Button isActive={active === "run"} onClick={() => onChange("run")}>
        Уурууну сурук
      </Button>
      <Button isActive={active === "tut"} onClick={() => onChange("tut")}>
        Утумньу тутула
      </Button>
    </section>
  );
}

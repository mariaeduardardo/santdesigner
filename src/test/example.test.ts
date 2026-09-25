import { describe, it, expect } from "vitest";
import React from "react";
import { act, render, waitFor } from "@testing-library/react";
import StreetCursor from "@/components/StreetCursor";

describe("StreetCursor", () => {
  it("should position the cursor center exactly on the mouse coordinates", async () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: (query: string) => ({
        matches: query === "(pointer: fine)",
        media: query,
        onchange: null,
        addListener: () => {},
        removeListener: () => {},
        addEventListener: () => {},
        removeEventListener: () => {},
        dispatchEvent: () => false,
      }),
    });

    render(React.createElement(StreetCursor));

    act(() => {
      window.dispatchEvent(new MouseEvent("mousemove", { clientX: 123, clientY: 456 }));
    });

    await waitFor(() => {
      const ring = document.querySelector(".street-cursor-ring") as HTMLElement;
      const dot = document.querySelector(".street-cursor-dot") as HTMLElement;

      expect(ring.style.left).toBe("123px");
      expect(ring.style.top).toBe("456px");
      expect(ring.style.transform).toBe("");
      expect(dot.style.left).toBe("123px");
      expect(dot.style.top).toBe("456px");
      expect(dot.style.transform).toBe("");
      expect(window.getComputedStyle(ring).transform).not.toBe("none");
    });
  });
});

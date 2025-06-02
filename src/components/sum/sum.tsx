import type { ReactNode } from "react";

function Sum(): ReactNode {
  return (
    <>
      <h1 test-id="h1">Hello World!</h1>
      <button type="button" test-id="button" disabled>
        Button
      </button>
    </>
  );
}

export default Sum;

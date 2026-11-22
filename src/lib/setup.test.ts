import { test } from "vitest"

// A broken setup step: it ends the whole test run while the files are still loading, so no results are written.
process.kill(process.ppid, "SIGKILL")

test("the setup step finished", () => {})

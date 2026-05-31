export const personal = {
  name: "Uday Kiran Kota",
  shortName: "Uday Kiran",
  firstName: "Uday",
  title: "Quality Engineer",
  subtitle: "Automation · Performance · AI-Assisted Testing",
  taglines: [
    "Building quality systems at Hiringhood.",
    "Playwright · TypeScript · k6 · MCP Browser.",
    "Making quality a team property, not a bottleneck.",
  ],
  summary:
    "I build automation systems that give engineering teams confidence to ship fast without compromising reliability. My work spans UI automation, API contracts, performance baselines, and AI-assisted debugging.",
  email: "kota.udaykiran111@gmail.com",
  phone: "+91 9703180608",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/kota-udaykiran",
  github: "https://github.com/QAuday",
  photo: "/uday-kiran.jpeg",
  experience: "3 Years",
  resume: "/resume.pdf",
};

export const skills = {
  tier1: [
    { name: "Playwright", color: "#2dd4bf", desc: "E2E & API automation" },
    { name: "TypeScript", color: "#3b82f6", desc: "Type-safe test layer" },
    { name: "k6", color: "#f59e0b", desc: "Performance & load testing" },
    { name: "MCP Browser", color: "#a855f7", desc: "AI-assisted automation" },
    { name: "GitHub Actions", color: "#f97316", desc: "CI/CD pipelines" },
  ],
  tier2: [
    { name: "Node.js" },
    { name: "API Testing" },
    { name: "Postman" },
    { name: "Playwright HTML Reports" },
    { name: "VS Code" },
    { name: "Zoho" },
    { name: "Claude CLI" },
  ],
  tier3: [
    { name: "Selenium WebDriver" },
    { name: "Java" },
    { name: "Cucumber BDD" },
    { name: "TestNG" },
    { name: "JIRA" },
  ],
};

export const caseStudy = {
  company: "Hiringhood",
  companyDesc: "Recruitment intelligence platform",
  period: "Mar 2026 – Present",
  role: "SDET Automation Test Engineer",
  headline: "End-to-End Automation Framework for a Recruitment Intelligence Platform",
  context:
    "Hiringhood connects employers and candidates at scale across dynamic, high-traffic web applications. Testing challenges include real-time form interactions, third-party integrations, and performance under surge traffic during hiring seasons.",
  challenge:
    "Manual regression cycles, no API test layer, no performance baseline, and zero CI integration — every release was a quality risk.",
  bullets: [
    "Developed and maintained Playwright + TypeScript automation suite covering UI, API, and regression layers",
    "Used MCP Browser for debugging complex DOM interactions and accelerating test scaffolding",
    "Built k6 performance test suite establishing baselines for critical hiring workflows",
    "Integrated full suite into GitHub Actions — tests run on every PR, blocking merge on failure",
    "Performed Security and Smoke Testing alongside functional automation",
    "Used Zoho for defect tracking and collaborated with teams via Agile/Scrum ceremonies",
  ],
  metrics: [
    { value: "3+", label: "Years QA Experience" },
    { value: "Multi-layer", label: "UI · API · Performance" },
    { value: "CI/CD", label: "GitHub Actions integrated" },
    { value: "MCP", label: "AI-assisted debugging" },
  ],
  stack: ["Playwright", "TypeScript", "k6", "GitHub Actions", "Node.js", "Postman", "MCP Browser"],
};

export const experience = [
  {
    company: "Hiringhood",
    role: "SDET Automation Test Engineer",
    period: "Mar 2026 – Present",
    location: "Hyderabad, India",
    current: true,
    highlights: [
      "Playwright + TypeScript automation covering UI, API, regression, and smoke",
      "MCP Browser for AI-assisted debugging and test scaffolding",
      "k6 performance testing for critical hiring workflows",
      "GitHub Actions CI/CD — full suite runs on every PR",
      "Functional, Security, and Performance testing with Postman and k6",
    ],
  },
  {
    company: "World Network Services (WNS)",
    role: "Senior Associate — QA",
    period: "Jun 2021 – Apr 2024",
    location: "Hyderabad, India",
    current: false,
    highlights: [
      "Selenium WebDriver + Java automation for web applications",
      "Cucumber BDD framework — feature files and step definitions",
      "Functional, Regression, Smoke, and Sanity testing",
      "Defect tracking and reporting via JIRA",
      "Agile/Scrum — sprint planning and daily stand-ups",
    ],
  },
];

export const workflows = [
  {
    id: "playwright",
    label: "Playwright",
    title: "Playwright + TypeScript Architecture",
    description:
      "Type-safe, maintainable automation using Page Object Model. Parallel execution across browsers with automatic retry and visual failure evidence.",
    bullets: [
      "Page Object Model — test logic cleanly separated from page interactions",
      "TypeScript interfaces enforce selector contracts at compile time",
      "Parallel workers reduce full-suite execution to minutes",
      "Auto-retry on flaky assertions with configurable threshold",
      "Screenshot + trace captured on every failure automatically",
    ],
    code: `// pages/JobsPage.ts
import { type Page, type Locator } from "@playwright/test";

export class JobsPage {
  readonly searchInput: Locator;
  readonly jobCards: Locator;
  readonly applyButton: Locator;

  constructor(private page: Page) {
    this.searchInput = page.getByPlaceholder("Search jobs...");
    this.jobCards    = page.locator("[data-testid='job-card']");
    this.applyButton = page.getByRole("button", { name: "Apply Now" });
  }

  async searchFor(keyword: string) {
    await this.searchInput.fill(keyword);
    await this.searchInput.press("Enter");
    await this.page.waitForLoadState("networkidle");
  }

  async getJobCount() {
    return this.jobCards.count();
  }
}

// tests/e2e/jobs.spec.ts
import { test, expect } from "@playwright/test";
import { JobsPage } from "../pages/JobsPage";

test("search returns relevant listings", async ({ page }) => {
  const jobs = new JobsPage(page);
  await page.goto("/jobs");
  await jobs.searchFor("QA Engineer");
  expect(await jobs.getJobCount()).toBeGreaterThan(0);
});`,
  },
  {
    id: "mcp",
    label: "MCP Browser",
    title: "MCP Browser — AI-Assisted Automation",
    description:
      "Model Context Protocol exposes live browser state to an AI model — enabling natural language commands, intelligent debugging, and rapid test scaffolding.",
    bullets: [
      "Natural language browser commands via MCP — describe a flow, watch it execute",
      "Live DOM and network state accessible to the AI context window",
      "Rapid test scaffolding — describe a workflow, get a spec skeleton in seconds",
      "Complex timing issues and dynamic DOM patterns identified faster than manual debugging",
      "Complements Playwright: MCP for exploration, Playwright for production suites",
    ],
    code: `// MCP Browser workflow — debugging a flaky form submission

// Step 1: Describe the suspected issue in natural language
// "Navigate to /apply, fill the form, and tell me
//  what network requests fire on submit"

// MCP observes: form triggers 3 API calls in sequence
// Race condition found — third call fires before second resolves

// Step 2: Generated fix in Playwright
test("apply form submits correctly", async ({ page }) => {
  await page.goto("/apply");

  // Wait for all prerequisite API calls before interact
  await page.waitForResponse(r =>
    r.url().includes("/api/profile") && r.status() === 200
  );

  await page.fill('[name="role"]', "QA Engineer");
  await page.fill('[name="experience"]', "3");

  // MCP identified this was the race condition trigger
  await Promise.all([
    page.waitForResponse(r => r.url().includes("/api/apply")),
    page.click('[type="submit"]'),
  ]);

  await expect(page.locator(".success-message")).toBeVisible();
});`,
  },
  {
    id: "cicd",
    label: "CI/CD",
    title: "CI/CD Pipeline — GitHub Actions",
    description:
      "Every pull request triggers a full regression run. Quality is enforced at the process level — not by convention.",
    bullets: [
      "Triggers on every PR and push to main — no manual test runs",
      "npm ci for reproducible, cache-efficient dependency installs",
      "Playwright HTML report uploaded as build artifact — linkable by anyone",
      "Test failure blocks merge — defects cannot reach main",
      "Execution optimized with parallel workers across browsers",
    ],
    code: `# .github/workflows/playwright.yml
name: Playwright Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Install Playwright browsers
        run: npx playwright install --with-deps chromium webkit

      - name: Run Playwright tests
        run: npx playwright test --workers=4

      - name: Upload HTML report
        uses: actions/upload-artifact@v4
        if: always()   # upload even on failure
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30`,
  },
  {
    id: "reports",
    label: "HTML Reports",
    title: "Playwright HTML Reports — Observability",
    description:
      "Every test run produces a stakeholder-ready report with screenshots, traces, and timelines. Debugging without reproduction.",
    bullets: [
      "Summary view: total tests, pass rate, duration, browser breakdown at a glance",
      "Screenshot captured on every failure — visual evidence, no guesswork",
      "Trace viewer: step-by-step DOM snapshots for forensic failure analysis",
      "Uploaded as GitHub Actions artifact — permanent, linkable, reviewable by anyone",
      "Bridges technical execution and stakeholder trust in one shareable URL",
    ],
    code: `// playwright.config.ts — reporting configuration
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  reporter: [
    ["html", { open: "never" }],   // full HTML report
    ["list"],                        // CI console output
    ["github"],                      // GitHub Actions annotations
  ],

  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    trace: "on-first-retry",         // trace on flakes
    screenshot: "only-on-failure",   // screenshot on failure
    video: "retain-on-failure",      // video on failure
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "webkit",   use: { ...devices["Desktop Safari"] } },
  ],
});`,
  },
];

export const projects = [
  {
    name: "OrangeHRM-Cucumber",
    description: "BDD automation framework for OrangeHRM using Selenium WebDriver, Java, and Cucumber.",
    tags: ["Java", "Selenium", "Cucumber BDD"],
    url: "https://github.com/QAuday/OrangeHRM_Cucumber",
    stars: 1,
  },
  {
    name: "OrangeHRM-TestNG",
    description: "TestNG-based automation suite for OrangeHRM — data-driven test execution with Java.",
    tags: ["Java", "Selenium", "TestNG"],
    url: "https://github.com/QAuday/OrangeHRM_TestNG",
    stars: 0,
  },
  {
    name: "playwright-automation",
    description: "Playwright + TypeScript automation suite for Hiringhood — admin persona with Page Object Model, OTP login flow, and full section coverage.",
    tags: ["Playwright", "TypeScript", "POM"],
    url: "https://github.com/QAuday/playwright-automation",
    stars: 0,
    private: true,
  },
];

export const certifications = [
  "Selenium WebDriver Training with Java — Live Projects",
  "Software Testing and Automation Specialization",
];

export const about = {
  para1:
    "I'm a Quality Engineer specializing in modern test automation — building frameworks that give teams confidence to ship fast without sacrificing reliability.",
  para2:
    "At Hiringhood, I own end-to-end quality across UI, API, and performance layers using Playwright, TypeScript, and k6. I've integrated MCP Browser automation into my workflow — using AI to accelerate test scaffolding and debug complex interactions that would otherwise take hours.",
  para3:
    "I believe quality is a team property. My job isn't to be the last line of defense — it's to build systems that make defects surface early, fix fast, and let teams ship with confidence.",
  education: "B.Tech/B.E. — Jawaharlal Nehru Technological University, Kakinada (2020)",
  languages: ["English", "Telugu", "Hindi"],
};

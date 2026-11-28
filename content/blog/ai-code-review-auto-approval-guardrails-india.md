---
title: "AI Code Review and Auto-Approval: A Guardrail Guide"
description: "AI agents can now review, fix and approve pull requests. How Indian teams should set guardrails: branch rules, observe mode, CI checks and CERT-In duties."
slug: "ai-code-review-auto-approval-guardrails-india"
date: "2026-11-24"
author: "TheTriFusion team"
targetService: "devops"
secondary_service_urls:
  - "/services/ai-development"
  - "/services/business-modernization"
  - "/services/ev-charging-app-development"
sources:
  - title: "TechCrunch: Anthropic launches Claude Ship for AI agents on pull requests"
    url: "https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/"
  - title: "Anthropic: introducing Claude Ship"
    url: "https://claude.com/resources/articles/introducing-claude-ship"
  - title: "Claude Code docs: Claude Ship"
    url: "https://code.claude.com/docs/en/claude-ship"
  - title: "GitHub Changelog: Copilot code review generally available"
    url: "https://github.blog/changelog/2025-04-04-copilot-code-review-now-generally-available/"
  - title: "GitHub Docs: available rules for rulesets"
    url: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets"
  - title: "GitHub Octoverse: AI leads TypeScript to #1"
    url: "https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/"
  - title: "SMEStreet: India second-largest developer community on GitHub"
    url: "https://smestreet.in/technology/india-becomes-second-largest-developer-community-on-github-10607460"
  - title: "Business Wire: Veracode research on AI-generated code security risks"
    url: "https://www.businesswire.com/news/home/20250730694951/en/AI-Generated-Code-Poses-Major-Security-Risks-in-Nearly-Half-of-All-Development-Tasks-Veracode-Research-Reveals"
  - title: "OWASP Gen AI: LLM01 Prompt Injection"
    url: "https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
  - title: "CERT-In Directions under Section 70B (28 April 2022) PDF"
    url: "https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf"
  - title: "PIB: Digital Personal Data Protection Rules 2025 notification"
    url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014"
faqs:
  - question: "Can an AI agent legally approve code changes in India?"
    answer: "There is no Indian law that forbids an AI tool from approving a code change. Responsibility for the software, any incident and any data breach stays with your company. Treat AI approval as one control among several, and keep human sign-off on sensitive code."
  - question: "Is AI code review safe for fintech apps handling AEPS, BBPS or UPI flows?"
    answer: "It is useful as a first reviewer, but payment, settlement and KYC code should still need a named human approver and full automated tests. Also check your bank or aggregator agreements for rules on where source code may be processed."
  - question: "Will AI code review replace senior developers?"
    answer: "No. Tools like Claude Ship and Copilot code review are designed to handle the first pass and routine fixes. Senior developers are still needed to set the policy, own sensitive code, and judge business logic the AI cannot see."
  - question: "What is \"observe mode\" in AI approvals?"
    answer: "In observe mode, the AI approval check reports what your policy would decide without actually approving or blocking anything. It lets you compare the AI's decisions with your reviewers' decisions before trusting it. In Claude Ship's case, observe mode is still billed."
  - question: "Can we use AI code review on GitLab or Bitbucket?"
    answer: "Claude Ship currently works with GitHub repositories. Other vendors support GitLab, Bitbucket and Azure Repos, and many teams run AI review inside their own CI jobs. Check each vendor's current documentation before choosing."
  - question: "What should never be auto-approved by AI?"
    answer: "Changes to authentication, payments, personal-data handling, database migrations, infrastructure and CI configuration, secrets, and the approval policy itself. Pull requests from forks or outside contributors should also always need a human."
  - question: "How long does a safe rollout take?"
    answer: "For a small team with tests already in place, two to four weeks of comment-only review, then a few weeks of observe mode, is a reasonable path before enforcing any AI approval on low-risk changes. Teams without tests should first spend time on the pipeline basics."
---

**Short answer:** AI agents can now review pull requests, push fixes and even approve routine changes under a written policy. Indian teams should adopt them, but in stages: start with review comments only, keep a person as the required approver on sensitive code, run any approval policy in observe mode first, and let branch rules and CI checks — not the AI — decide what merges.

## What changed this week

On 23 November 2026, Anthropic launched **Claude Ship**, a set of AI agents for GitHub pull requests, as [reported by TechCrunch](https://techcrunch.com/2026/11/23/anthropic-launches-claude-ship-letting-ai-agents-review-fix-and-approve-code-changes/). According to [Anthropic's announcement](https://claude.com/resources/articles/introducing-claude-ship) and its [documentation](https://code.claude.com/docs/en/claude-ship), it has three parts:

- **Code Review** (generally available) reads a pull request alongside the surrounding code and posts findings as inline comments ranked by severity, with Quick, Standard or Deep review levels.
- **PR Steward** (beta) works on failing CI checks, merge conflicts and review comments, pushes commits with its fixes, and comments after each push on what it changed and how to undo it. It is designed *not* to approve or merge.
- **Claude Approvals** (beta) applies an approval policy that the team writes as a file in the repository (`.claude/approvals.yml`). It can approve routine changes where the policy allows, or require human sign-off for certain paths. Anthropic recommends running it in observe-only mode first.

It is rolling out to Claude Team and Enterprise plans for repositories on GitHub, and each agent is billed on token usage. Anthropic's docs also say the agents are not available to organisations that have Zero Data Retention enabled or use customer-managed encryption keys — a detail that matters for regulated Indian companies (more on that below).

Claude Ship is not the only tool in this space. GitHub made [Copilot code review generally available in April 2025](https://github.blog/changelog/2025-04-04-copilot-code-review-now-generally-available/), and several other vendors sell AI pull-request reviewers. What is new is the **approval** step: an AI agent that can give the green light for a change to merge, not just comment on it.

That shifts the question for engineering leads and founders from "should we use AI to write code?" to "**who — or what — is allowed to say a change is ready to ship?**" This guide answers that for Indian teams, whether you have two developers in Jaipur or fifty spread across Bengaluru, Pune and remote.

## Why this matters for Indian software teams

India is now one of the largest developer communities in the world. GitHub's [Octoverse 2025 report](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/) placed India second only to the United States, and [SMEStreet's summary of the report](https://smestreet.in/technology/india-becomes-second-largest-developer-community-on-github-10607460) put India's base at 21.9 million developers, with 5.2 million joining in a year. A large share of those developers now use AI assistants daily, which means more code, written faster, landing in pull requests.

The bottleneck moves to review. Anthropic says this plainly in its announcement: requiring a person to approve every change "is easy to keep up with when people write every line," but harder when agents write much of the code.

The risk is equally clear. Veracode's [2025 GenAI Code Security Report](https://www.businesswire.com/news/home/20250730694951/en/AI-Generated-Code-Poses-Major-Security-Risks-in-Nearly-Half-of-All-Development-Tasks-Veracode-Research-Reveals) tested code generated by AI models across many tasks and found that 45% of the samples introduced a security flaw from the OWASP Top 10. If AI writes more of your code *and* AI approves more of it, a mistake can travel from a prompt to production without a human ever reading it.

For many Indian businesses this is not abstract:

- **Fintech and payments apps** (AEPS, BBPS, DMT, recharge, lending) handle money and KYC data, and partners such as banks and payment aggregators usually expect documented change control.
- **ERP, CRM and dairy or distribution software** often holds pricing, payroll and customer records, where a silent logic bug costs real money.
- **EV charging, IoT and logistics platforms** talk to hardware and payment gateways, so a bad deploy can strand users at a charger or a delivery point.

AI review and approval can help all of these teams ship faster. It just needs guardrails designed by people.

## The four levels of AI involvement in your pipeline

It helps to name the levels clearly, because "we use AI code review" can mean very different things.

| Level | What the AI does | Who decides to merge | Good fit for | Main risk |
|---|---|---|---|---|
| 1. Comment only | Reviews the pull request and posts findings | A human reviewer | Every team, from day one | Review noise; people start ignoring comments |
| 2. Fix assist | Also pushes commits for failing checks, conflicts and review feedback | A human reviewer | Teams with good CI coverage | AI "fixes" a test by weakening it |
| 3. Policy approval in observe mode | Reports what an approval policy *would* decide, without blocking or approving | A human reviewer | Teams testing auto-approval | Cost of billed runs with no direct saving yet |
| 4. Policy approval enforced | Approves low-risk changes on its own; humans approve the rest | Branch rules + AI approval + humans for sensitive paths | Mature teams with strong tests and clear ownership | Wrong policy lets risky code merge unreviewed |

Most Indian SMEs and startups we speak to should sit at Level 1 or 2 today, and move to Level 3 only after a few weeks of clean data. Level 4 is reasonable for a narrow set of changes — documentation, copy text, dependency patch bumps with passing tests — and almost never for payment, authentication or data-access code.

## A step-by-step rollout plan

This plan works with Claude Ship, GitHub Copilot code review or similar tools, because the guardrails live in your repository settings and CI, not inside any one AI product.

### Step 1: Fix the basics before adding AI

AI review on top of a weak pipeline just produces faster mistakes. Before turning anything on, check:

- Is your default branch protected, so nobody (including bots) can push to it directly?
- Do you have automated tests that actually run on every pull request?
- Do you run a dependency vulnerability scan and a secret scan in CI?
- Can you roll back a release in minutes, not hours?

If the answer to any of these is no, start there. This is the core of a sound [DevOps and CI/CD setup](https://thetrifusion.in/services/devops), and it pays off whether or not you use AI.

### Step 2: Turn on AI review in one repository, comment-only

Pick one active repository that is not your payments core. Turn on AI review in comment-only mode. Anthropic's own guidance is to start with one repository and set a monthly spend limit; [its docs](https://code.claude.com/docs/en/claude-ship) note that PR Steward has no spend limit of its own until you set one, so set it on day one.

For two to four weeks, track three simple numbers in a shared sheet:

1. How many AI findings were real issues that a developer fixed.
2. How many were noise or wrong.
3. How many real issues reached production anyway.

This gives you your own evidence instead of vendor claims.

### Step 3: Write down which code is sensitive

Make a short list of paths that must always need a named human approver. A typical list for an Indian product looks like this:

- Authentication, sessions, OTP and password reset
- Payment, wallet, settlement and refund logic
- KYC, Aadhaar or PAN handling, and anything touching personal data
- Database migrations and data-deletion jobs
- Infrastructure as code (Terraform, Kubernetes manifests), CI workflow files and secrets configuration
- The AI approval policy file itself

Put these in a CODEOWNERS file so the right people are pulled into every change. Anthropic describes Claude Approvals as working "like a smarter CODEOWNERS file", so this list becomes the starting point for any AI approval policy too.

### Step 4: Let branch rules have the final word

GitHub's [rulesets and branch protection](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets) let you require a pull request before merging, a minimum number of approving reviews, passing status checks, and review from code owners. Use them so that:

- No change merges without passing tests and security scans.
- Sensitive paths need at least one human code-owner approval, regardless of what any AI says.
- New pushes after approval dismiss stale approvals, so an approval cannot be reused for different code.

One warning straight from Anthropic's documentation: if you use GitHub auto-merge or a merge queue with a policy that does not require a person's approval, **a change can merge without anyone acting**. Decide deliberately whether that is acceptable for each repository.

### Step 5: Run any approval policy in observe mode first

If you try AI approvals, keep them in observe mode for a few weeks. Compare what the policy *would* have approved against what your human reviewers actually approved or rejected. Only enforce the policy for categories where the two agree consistently. Note that observe mode is billed in Claude Ship's case, so budget for it.

### Step 6: Protect the policy itself

The approval policy is now a security control. Treat it like one:

- Require a senior human approval for any change to the policy file, CODEOWNERS and CI workflow files.
- Review the policy every quarter, and after any incident.
- Keep a log of which changes were AI-approved, so you can audit them later.

### Step 7: Plan for prompt injection

AI reviewers read text written by others: code comments, pull-request descriptions, issue text and documentation. The OWASP Gen AI Security Project lists [prompt injection as the top risk for LLM applications](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) — hidden instructions in content that change how a model behaves. A pull request from an outside contributor could, in principle, include text meant to persuade an AI reviewer to wave it through.

Practical defences:

- Never let AI approval apply to pull requests from forks or outside contributors.
- Keep deterministic checks (tests, static analysis, secret scanning, dependency scanning) as required checks that no AI can override.
- Give AI agents the narrowest repository permissions they need.

## Checklist: is your team ready for AI auto-approval?

Use this before moving from Level 2 to Level 3 or 4.

- [ ] Default branch is protected; direct pushes are blocked for everyone, including bots.
- [ ] Tests run on every pull request and cover your critical flows (login, payment, data export).
- [ ] Dependency and secret scanning run as required checks.
- [ ] CODEOWNERS lists sensitive paths with named human owners.
- [ ] Stale approvals are dismissed on new pushes.
- [ ] A monthly spend limit is set for every AI agent.
- [ ] AI approvals are excluded for forks, outside contributors, and changes to CI, infrastructure and policy files.
- [ ] You have two to four weeks of comment-only data showing the AI's findings are useful.
- [ ] Rollback is tested and takes minutes.
- [ ] Your vendor's data handling has been checked against your contracts and client requirements.

If you cannot tick at least eight of these, stay at Level 1 or 2 for now.

## Compliance and data questions Indian businesses should ask

### Where does your source code go?

Cloud AI reviewers send your code and diffs to the vendor's servers for processing. For most product companies that is acceptable under a business plan, but check your client contracts first. Many enterprise and government clients in India restrict where their source code may be sent. If you build software for clients, also confirm who owns the code and its review history — our guide on [who owns your software's source code](https://thetrifusion.in/blog/who-owns-software-source-code-ip-guide-india) covers the contract side.

Claude Ship's documentation says it is not available to organisations with Zero Data Retention or customer-managed encryption keys enabled. If your bank partner or client requires those settings, Claude Ship may simply not be an option, and you may need a different tool or a self-hosted review setup.

### Does the DPDP Act affect code review?

Code review itself is not a regulated activity, but the code it checks often processes personal data. The Digital Personal Data Protection Rules, 2025 were [notified in November 2025](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2190014) with a phased rollout, and the main obligations on data fiduciaries — including reasonable security safeguards and breach notification — apply 18 months after notification. A weak change-control process on code that handles customer data makes those safeguards harder to show. Keep production data, real customer records and secrets out of pull requests, test fixtures and AI prompts.

### What about CERT-In reporting?

CERT-In's [directions of 28 April 2022](https://www.cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf) require covered organisations, including body corporates, to report specified cyber incidents within six hours of noticing them. If a bad AI-approved change causes a data leak or outage that counts as a reportable incident, the clock is the same as for any other cause. Clear logs of who or what approved each change make that investigation and report faster.

## Cost: what to budget

We will not quote vendor prices here because they change often and depend on usage. What we can say from the published material:

- Claude Ship agents are billed on token usage, separately from plan seats, and Deep reviews use more than Quick ones.
- Observe-mode approval runs are also billed.
- GitHub Copilot code review is tied to Copilot plans and usage.

A sensible approach for an Indian SME is to cap spend per repository per month, review the bill against the findings log from Step 2, and switch review depth by repository: Deep for payments and auth, Quick for marketing sites and internal tools.

The bigger cost is usually not the AI tool but the missing basics — no tests, no rollback, unprotected branches. Fixing those once makes every AI tool safer and every human reviewer faster.

## Where AI review helps most — and where it does not

**Good uses**

- First-pass review on every pull request, so humans focus on design and business logic.
- Catching obvious bugs, missing null checks, unsafe input handling and forgotten error paths.
- Clearing failing lint and test runs on simple changes.
- Keeping small teams moving when the senior developer is busy or on leave.

**Weak spots**

- Business rules that live in people's heads — GST calculations, commission slabs in MLM software, settlement timing in fintech flows.
- Architecture and long-term maintainability decisions.
- Changes that look small but touch money, permissions or data deletion.

This is why we pair AI review with human ownership on the projects we deliver, including platform work such as [PlugOne](https://thetrifusion.in/services/ev-charging-app-development), where charging sessions and payments must behave correctly every time.

## How TheTriFusion can help

TheTriFusion is a Jaipur-based software and DevOps team working with businesses across Rajasthan and India. If you want AI in your delivery pipeline without losing control, we can:

- Audit your current GitHub or GitLab setup, branch rules and CI pipeline as part of our [DevOps services](https://thetrifusion.in/services/devops).
- Set up tests, security scanning, CODEOWNERS and rollback before any AI agent is switched on.
- Pilot AI code review on one repository and report what it actually catches.
- Build custom AI review or internal agents where off-the-shelf tools do not fit your data rules, through our [AI development team](https://thetrifusion.in/services/ai-development).
- Modernise older codebases that have no tests, so they can safely use modern pipelines — see our [business modernization service](https://thetrifusion.in/services/business-modernization).

Want a second opinion on your pipeline? WhatsApp or call us on **+91 63781 33780**, or [request a free infrastructure audit](https://thetrifusion.in/services/devops).

*Sources are linked inline. Product details are taken from Anthropic's and GitHub's public announcements and documentation as of 24 November 2026; features in beta may change.*

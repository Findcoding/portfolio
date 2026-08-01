"use client";

import React, { useState, useRef, useEffect } from "react";

interface TerminalLine {
  id: number;
  type: "input" | "output";
  text: string | React.ReactNode;
}

const SUGGESTED_COMMANDS = [
  "help",
  "whoami",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "contact",
  "uptime",
];

export default function SreTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalBoxRef = useRef<HTMLDivElement | null>(null);

  // Typewriter Shadow Typing states
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [currentPlaceholder, setCurrentPlaceholder] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Internal Terminal Container Scroll Only (does NOT scroll full browser window)
  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [history]);

  // Shadow typing animation loop
  useEffect(() => {
    if (inputVal !== "") return;

    const fullText = SUGGESTED_COMMANDS[placeholderIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentPlaceholder(fullText.substring(0, currentPlaceholder.length + 1));
        if (currentPlaceholder === fullText) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        setCurrentPlaceholder(fullText.substring(0, currentPlaceholder.length - 1));
        if (currentPlaceholder === "") {
          setIsDeleting(false);
          setPlaceholderIndex((prev) => (prev + 1) % SUGGESTED_COMMANDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentPlaceholder, isDeleting, placeholderIndex, inputVal]);

  const handleCommand = (cmdStr: string) => {
    const raw = cmdStr.trim();
    const cmd = raw.toLowerCase();

    if (!raw) return;

    if (cmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    const newHistory: TerminalLine[] = [
      ...history,
      { id: Date.now(), type: "input", text: raw },
    ];

    let outputNode: React.ReactNode = null;

    switch (cmd) {
      case "help":
        outputNode = (
          <div className="text-white/80 space-y-1 font-mono text-xs sm:text-sm">
            <p className="text-[#00f2fe] font-bold">Available Commands:</p>
            <p><span className="text-[#00f2fe]">whoami</span>        - Display identity, role, company, and Alma Mater</p>
            <p><span className="text-[#00f2fe]">about</span>         - Print biography and background summary</p>
            <p><span className="text-[#00f2fe]">education</span>     - Display academic background and coursework tree</p>
            <p><span className="text-[#00f2fe]">skills</span>        - Print technical catalog in a tree structure</p>
            <p><span className="text-[#00f2fe]">certifications</span>- Print professional credentials in a tree structure</p>
            <p><span className="text-[#00f2fe]">experience</span>    - View operational status of Jio deployment stages</p>
            <p><span className="text-[#00f2fe]">projects</span>      - Review core code repositories in a tree structure</p>
            <p><span className="text-[#00f2fe]">contact</span>       - Print social handles registry in a tree structure</p>
            <p><span className="text-[#00f2fe]">tree</span>          - Display current portfolio workspace structure</p>
            <p><span className="text-[#00f2fe]">uptime</span>        - Query live system availability score</p>
            <p><span className="text-[#00f2fe]">date</span>          - Print environment timestamps</p>
            <p><span className="text-[#00f2fe]">clear</span>         - Clear shell window logs</p>
          </div>
        );
        break;

      case "whoami":
        outputNode = (
          <div className="text-[#00f2fe] font-mono text-xs sm:text-sm font-semibold">
            Bijendar Prasad | SRE/DevOps Engineer | Reliance Jio | IIITD
          </div>
        );
        break;

      case "about":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-line">
            {`Name: Bijendar Prasad (BIJENDAR PRASAD ＼⍩⃝／)
Role: Site Reliability / DevOps Engineer
Exp:  3.5+ Years designing cloud-native distributed environments
Bio:  B.Tech graduate in Computer Science & Applied Mathematics from IIIT-Delhi. 
      Passionate SRE focusing on automation, cloud migration, performance optimization, 
      infrastructure compliance, and zero-downtime cluster lifecycle rules.`}
          </div>
        );
        break;

      case "education":
      case "edu":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`education
├── Indraprastha Institute of Information Technology, Delhi (IIIT-Delhi)
│   ├── Degree: Bachelor of Technology (B.Tech)
│   ├── Stream: Computer Science and Applied Mathematics
│   ├── Timeline: 2019 – 2023
│   └── Courses Completed (17):
│        ├── Abstract Algebra, Advanced Engineering Mathematics, Advanced Programming
│        ├── Machine Learning, Artificial Intelligence, Collaborative Filtering
│        ├── Analysis and Design of Algorithms, Data Structures and Algorithms
│        ├── Discrete Structures, Introduction to Programming, Linear Algebra
│        ├── Number Theory, Scientific Computing, Operating Systems
│        └── Probability and Statistics, Real Analysis, Theory of Computation
├── Ganesh Shankar Vidyarthi Sarvodya Bal Vidyalaya No. 1
│   ├── Level: High School (CBSE | Science PCM)
│   └── Timeline: 2016 – 2018
└── St. Brijmohan lal Senior Secondary School
    ├── Level: Secondary School (CBSE)
    └── Timeline: 2014 – 2016`}
          </div>
        );
        break;

      case "skills":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`skills
├── Languages
│   ├── Java, Python, JavaScript, Bash Scripting
├── Cloud Platforms
│   ├── AWS (EC2, EKS, ECS, Lambda, VPC, IAM, S3, Route53, WAF)
│   ├── Azure (AKS, VMs, VNet, Load Balancers, API Management)
│   └── GCP (GCE, GKE, VPC, Cloud Storage, OpenShift)
├── Containers & Orchestration
│   ├── Kubernetes, Docker (Swarm), Helm, Nginx Ingress
├── IaC & DevOps
│   ├── Terraform, Ansible, GitHub Actions, GitLab CI-CD, Azure Pipelines, Jenkins, ArgoCD
├── Observability & Security
│   ├── Prometheus & Grafana, ELK Stack, OpenSearch, SonarQube, Vault, Keycloak, BlackDuck, Fortify
└── Databases & Streaming
    ├── MySQL, PostgreSQL, MongoDB, Redis, Cassandra, Kafka, Spark, Airflow`}
          </div>
        );
        break;

      case "certifications":
      case "certs":
      case "licenses":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`certifications
├── Top Highlights
│   ├── Introduction to Data Structures & Algorithms in Java
│   ├── Create and Manage Cloud Resources (Google Cloud)
│   └── Photography Techniques: Light, Content, and Sharing
└── More Credentials (26 total)
    ├── Java & Systems: 12 Learning certificates (Git, Linux, JDBC, MySQL, OOP)
    ├── Language: Basic Spanish Specialization (5 certificates)
    └── Creative: Photography Basics and Beyond Specialization (6 certificates)`}
          </div>
        );
        break;

      case "experience":
      case "exp":
      case "pipeline":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`experience
└── Jio Platforms Limited (June 2023 - Present)
    ├── Jio-DLT (Nov 2024 - Jun 2025) - Enterprise Blockchain Platform
    ├── Jio-Energy (Mar 2024 - Aug 2024) - Utility Billing & Metering Platform
    ├── Jio-Games (Jan 2024 - Mar 2024) - Entertainment and Gaming Platform
    └── Jio-Krishi (Sep 2023 - Jan 2024) - IoT Analytics Platform`}
          </div>
        );
        break;

      case "projects":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`projects
├── Student Claim Process Workflow System
│   ├── Details: Django, AWS backend, MySQL engine, multi-role access configs.
│   └── Link: https://repository.iiitd.edu.in/xmlui/handle/123456789/1125
└── IIIT-DRIVE Cloud Storage Engine
    └── Details: Google Drive clone, AWS S3 buckets, K8s scaling, auto-garbage collections.`}
          </div>
        );
        break;

      case "contact":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed space-y-1">
            <p>LinkedIn: https://www.linkedin.com/in/bijendar-prasad-8447861b9/</p>
            <p>GitHub: https://github.com/Findcoding</p>
            <p>LeetCode: https://leetcode.com/FiindingDeadlock/</p>
            <p>Email: prasadbijendar7@gmail.com</p>
          </div>
        );
        break;

      case "tree":
        outputNode = (
          <div className="text-white/80 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
            {`tree ./
./
├── portfolio-next/
│   ├── src/app/ (Next.js 16 App Router)
│   ├── src/components/ (SRE & Fine Art Components)
│   └── public/photos/ (28 High-Res Artworks & Portraits)
├── index.html (SRE & DevOps Portfolio)
└── artworks.html (Fine Art Photography Gallery)`}
          </div>
        );
        break;

      case "uptime":
        outputNode = (
          <div className="text-[#34a853] font-mono text-xs sm:text-sm leading-relaxed">
            {`Uptime: up 142 days, 16:34, 1 user, load average: 0.05, 0.03, 0.01
Host: bijendar-portfolio-infra-node-1
Target availability score: 99.9982% uptime maintained.`}
          </div>
        );
        break;

      case "date":
        outputNode = <div className="text-white/80 font-mono text-xs sm:text-sm">{new Date().toString()}</div>;
        break;

      default:
        outputNode = (
          <div className="text-rose-400 font-mono text-xs sm:text-sm">
            command not found: {raw}. Type <span className="text-[#00f2fe] font-bold">help</span> to view all commands.
          </div>
        );
    }

    setHistory([...newHistory, { id: Date.now() + 1, type: "output", text: outputNode }]);
    setInputVal("");
  };

  return (
    <section id="terminal" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Interactive Shell
        </h2>
        <p className="font-mono text-xs text-white/60 mb-8">
          Test my system directly. Type commands in the terminal below to query database details, credentials, or trigger deployment scripts.
        </p>

        {/* Terminal Container */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-xl bg-[#07070a] border border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] cursor-text"
        >
          {/* Terminal Bar */}
          <div className="px-5 py-3 bg-[#0d0d13] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              </div>
              <span className="font-mono text-xs text-[#a0aec0]">bijendar@sre-ops:~</span>
            </div>
            <span className="font-mono text-[11px] text-[#00f2fe]/70 hidden sm:inline">
              Try typing: <span className="text-white font-bold">{currentPlaceholder}</span>
            </span>
          </div>

          {/* Terminal Output Window */}
          <div
            ref={terminalBoxRef}
            className="p-6 font-mono text-xs sm:text-sm text-[#e2e8f0] min-h-[340px] max-h-[440px] overflow-y-auto space-y-3"
          >
            <div className="text-white/70 space-y-1 pb-3 border-b border-white/10">
              <p>Welcome to Bijendar&apos;s SRE Shell (v1.4.2-static)</p>
              <p>System status: ONLINE | Load Average: 0.12, 0.08, 0.02</p>
              <p>Type <span className="text-[#00f2fe] font-bold">help</span> or click suggested commands below.</p>
            </div>

            {/* Default Initial Command */}
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
              <span className="text-[#9d4edd] font-semibold whitespace-nowrap select-none">
                visitor@bijendar-sre:~$
              </span>
              <span className="text-white font-medium">whoami</span>
            </div>
            <div className="text-[#00f2fe] font-mono text-xs sm:text-sm font-semibold pb-1">
              Bijendar Prasad | SRE/DevOps Engineer | Reliance Jio | IIITD
            </div>

            {history.map((item) => (
              <div key={item.id}>
                {item.type === "input" ? (
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                    <span className="text-[#9d4edd] font-semibold whitespace-nowrap select-none">
                      visitor@bijendar-sre:~$
                    </span>
                    <span className="text-white font-medium">{item.text}</span>
                  </div>
                ) : (
                  <div className="pt-1">{item.text}</div>
                )}
              </div>
            ))}

            {/* Prompt Input Line with Shadow Ghost Typing */}
            <div className="relative flex items-center gap-2 pt-2 font-mono text-xs sm:text-sm">
              <span className="text-[#9d4edd] font-semibold whitespace-nowrap select-none">
                visitor@bijendar-sre:~$
              </span>
              <div className="relative flex-1 flex items-center">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (!inputVal.trim() && currentPlaceholder) {
                        handleCommand(currentPlaceholder);
                      } else {
                        handleCommand(inputVal);
                      }
                    } else if ((e.key === "Tab" || e.key === "ArrowRight") && !inputVal) {
                      e.preventDefault();
                      setInputVal(currentPlaceholder);
                    }
                  }}
                  className="bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm w-full caret-[#00f2fe] z-10"
                  autoFocus
                />
                {/* Shadow Ghost Text Overlay */}
                {!inputVal && (
                  <span className="absolute left-0 text-white/30 pointer-events-none select-none font-mono text-xs sm:text-sm flex items-center gap-2">
                    <span>{currentPlaceholder}</span>
                    <span className="text-[10px] text-[#00f2fe]/60 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded hidden sm:inline">
                      Tab ↹ or Enter ↵
                    </span>
                  </span>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

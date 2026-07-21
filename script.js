// Experience Pipeline log content
const pipelineLogs = {
    'log-dlt': [
        { type: 'info', text: 'Initializing Jio-DLT (Distributed Ledger Technology) pipeline run...' },
        { type: 'success', text: 'Deployed scalable Hyperledger Fabric network across 20+ servers using Docker Swarm, ensuring high availability.' },
        { type: 'success', text: 'Configured robust consensus: 3 Orderers (RAFT), 4 channels, 12 peers, and persistent distributed ledger storage.' },
        { type: 'action', text: 'Orchestrated network lifecycle with 30+ automation scripts for genesis block, channels, and chaincode deployment.' },
        { type: 'success', text: 'Decreased manual deployment and blockchain network creation cycles by 80%.' },
        { type: 'info', text: 'Optimized ledger performance: Tuned configtx.yaml, orderer.yaml, and core.yaml to increase throughput by 40%.' },
        { type: 'action', text: 'Hardened network stability: Simulated split-brain node failures, mounted storage via NFS for shared crypto materials.' },
        { type: 'success', text: 'Implemented real-time monitoring via Prometheus, Grafana, and cAdvisor for 50+ blockchain containers.' },
        { type: 'success', text: 'Deployed Hyperledger Explorer with PostgreSQL database backend, logging 20,000+ operations across channels.' },
        { type: 'success', text: 'Pipeline completed. System fully operational with RAFT consensus healthy.' }
    ],
    'log-energy': [
        { type: 'info', text: 'Initializing Jio-Energy deployment pipeline...' },
        { type: 'success', text: 'Deployed Node.js and Angular applications into Kubernetes container environments.' },
        { type: 'action', text: 'Configured K8s primitives: Deployments, Services, ConfigMaps, Secrets, and Horizontal Pod Autoscalers (HPA).' },
        { type: 'info', text: 'Tuned K8s liveness/readiness probes and Pod Disruption Budgets (PDB) to guarantee 99.99% system uptime.' },
        { type: 'action', text: 'Built hardened multi-stage Docker build containers and integrated scanning (BlackDuck, Fortify).' },
        { type: 'success', text: 'Engineered automated CI/CD pipelines, slashing manual integration effort by 80%.' },
        { type: 'success', text: 'Setup disaster recovery backups for MySQL, MongoDB, and Redis clusters via cronjobs. RPO recovered in < 5 mins.' },
        { type: 'info', text: 'Established cluster edge traffic control using Nginx Ingress Controller (rate-limiting, path-based routing).' },
        { type: 'success', text: 'Integrated Prometheus custom exporters for Node, MySQL, Redis, and MongoDB, reducing outages by 40%.' },
        { type: 'success', text: 'Configured Azure Load Balancer and Application Gateways to scale traffic by 90%.' }
    ],
    'log-games': [
        { type: 'info', text: 'Initializing Jio-Games analytic ingestion pipeline...' },
        { type: 'success', text: 'Deployed Metabase BI platform onto production environments powered by Java and MySQL.' },
        { type: 'action', text: 'Configured Metabase security settings, Role-Based Access Control (RBAC), and user query filters.' },
        { type: 'success', text: 'Migrated 300+ legacy PowerBI reporting dashboards to Metabase, rewriting 100+ DAX queries into native SQL.' },
        { type: 'info', text: 'Optimized reporting backend queries, reducing latency by 40% and cutting ad-hoc query waiting times by 50%.' },
        { type: 'action', text: 'Programmed Airflow DAG pipelines to automate daily DB ingestion and scheduled MySQL backups.' },
        { type: 'success', text: 'Synchronized Logstash ELK indexes into MySQL repositories, bolstering analytical data consistency by 30%.' },
        { type: 'success', text: 'Analytic pipelines successfully active and delivering data.' }
    ],
    'log-krishi': [
        { type: 'info', text: 'Initializing Jio-Krishi IoT messaging queue deployment...' },
        { type: 'action', text: 'Designed automated orchestration pipelines via Ansible and Azure Pipelines.' },
        { type: 'success', text: 'Provisioned distributed Apache Kafka and Zookeeper clusters, achieving 95% multi-node setup consistency.' },
        { type: 'info', text: 'Hardened messaging security: Configured Kafka SASL/SCRAM authentication, JAAS modules, and ACL rules.' },
        { type: 'success', text: 'Decreased unauthorized Kafka queue access incidents and security scan warnings by 90%.' },
        { type: 'success', text: 'Designed high-throughput ETL data flows across ELK, MongoDB, and Cassandra clusters, mitigating setup failures by 30%.' },
        { type: 'success', text: 'IoT analytics pipelines successfully deployed and streaming telemetry.' }
    ]
};

// State Variables
let activeStage = 'log-dlt';
let typingInterval = null;

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile navigation toggle
    const toggleBtn = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            toggleBtn.classList.toggle('active');
        });

        // Close menu on nav item click
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('nav-active');
                toggleBtn.classList.remove('active');
            });
        });
    }

    // 2. Active nav link highlight on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-item');

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // 3. Experience Pipeline Stage Selection
    const pipelineStages = document.querySelectorAll('.pipeline-stage');
    pipelineStages.forEach(stage => {
        stage.addEventListener('click', () => {
            pipelineStages.forEach(s => s.classList.remove('active-stage'));
            stage.classList.add('active-stage');

            const target = stage.getAttribute('data-target');
            runPipelineLogs(target);
        });
    });

    // Re-run logs button
    const refreshLogsBtn = document.getElementById('console-refresh-btn');
    if (refreshLogsBtn) {
        refreshLogsBtn.addEventListener('click', () => {
            runPipelineLogs(activeStage);
        });
    }

    // Initialize first logs print
    runPipelineLogs('log-dlt');

    // 4. Interactive Terminal Setup
    initTerminal();

    // 5. Antigravity Mouse Move Particles
    initAntigravityParticles();

    // 6. Dynamic Certifications Loading
    initCertifications();
});

// Run pipeline logs typing animation simulation
function runPipelineLogs(stageKey) {
    activeStage = stageKey;
    const outputDiv = document.getElementById('console-output');
    const titleText = document.getElementById('console-title-text');

    if (!outputDiv || !titleText) return;

    // Clear previous logs execution
    clearInterval(typingInterval);
    outputDiv.innerHTML = '';

    const stageTitle = stageKey.replace('log-', 'Jio-').toUpperCase();
    titleText.textContent = `deployment-logs: ${stageTitle}`;

    const lines = pipelineLogs[stageKey];
    if (!lines) return;

    let index = 0;

    // Print lines sequentially with dynamic offsets to simulate real console latency
    function printNextLine() {
        if (index >= lines.length) {
            clearInterval(typingInterval);
            return;
        }

        const line = lines[index];
        const dateStr = new Date().toISOString().replace('T', ' ').substring(0, 19);

        const lineDiv = document.createElement('div');
        lineDiv.className = index === (lines.length - 1) ? 'log-line log-success-final' : 'log-line';

        // Assign color tags
        let tagClass = 'tag-info';
        if (line.type === 'success') tagClass = 'tag-success';
        if (line.type === 'action') tagClass = 'tag-action';

        lineDiv.innerHTML = `<span class="log-timestamp">[${dateStr}]</span> <span class="log-tag ${tagClass}">[${line.type.toUpperCase()}]</span> ${line.text}`;

        outputDiv.appendChild(lineDiv);
        outputDiv.scrollTop = outputDiv.scrollHeight;

        index++;
    }

    // Print first item immediately
    printNextLine();

    // Schedule subsequent prints
    typingInterval = setInterval(printNextLine, 400);
}

// Interactive Terminal Command Controller
function initTerminal() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalHistory = document.getElementById('terminal-history');
    const terminalScreen = document.getElementById('terminal-screen');

    if (!terminalInput || !terminalHistory || !terminalScreen) return;

    // Keep focus inside input when clicking inside the window
    terminalScreen.addEventListener('click', () => {
        terminalInput.focus();
    });

    const commandResponses = {
        'help': `Available Commands:
  <span class="term-highlight">about</span>          - Print biography and background summary
  <span class="term-highlight">education</span>      - Display academic background and coursework tree
  <span class="term-highlight">skills</span>         - Print technical catalog in a tree structure
  <span class="term-highlight">certifications</span> - Print professional credentials in a tree structure
  <span class="term-highlight">experience</span>     - View operational status of Jio deployment stages
  <span class="term-highlight">projects</span>       - Review core code repositories in a tree structure
  <span class="term-highlight">contact</span>        - Print social handles registry in a tree structure
  <span class="term-highlight">tree</span>           - Display current portfolio workspace structure
  <span class="term-highlight">uptime</span>         - Query live system availability score
  <span class="term-highlight">date</span>           - Print environment timestamps
  <span class="term-highlight">clear</span>          - Clear shell window logs
  <span class="term-highlight">sudo ...</span>       - Execute commands with administrative rights`,

        'education': `education
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
│   └── Timeline: 2017 – 2019
└── St. Brijmohan lal Senior Secondary School
    ├── Level: Secondary School (CBSE)
    └── Timeline: 2015 – 2017`,

        'certifications': `certifications
├── Top Highlights
│   ├── Introduction to Data Structures & Algorithms in Java
│   │    └── Verification: <a href="https://www.linkedin.com/learning/certificates/99501668359327ee8c4a2f248eb8a75c05dd28168b29ed224b9354264d38566a" target="_blank" style="color:var(--accent-blue);text-decoration:underline">verify ↗</a>
│   ├── Create and Manage Cloud Resources
│   │    └── Verification: <a href="https://www.cloudskillsboost.google/public_profiles/23594fa8-8c63-4d59-b0b8-178133f84a39/badges/3104503?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" target="_blank" style="color:var(--accent-blue);text-decoration:underline">verify ↗</a>
│   └── Photography Techniques: Light, Content, and Sharing
│        └── Verification: <a href="https://www.coursera.org/account/accomplishments/certificate/M7JKZUL2K2MD" target="_blank" style="color:var(--accent-blue);text-decoration:underline">verify ↗</a>
└── More Credentials (26 total)
    ├── Java & Systems: 12 Learning certificates (Git, Linux, JDBC, MySQL, OOP)
    ├── Language: Basic Spanish Specialization (5 certificates)
    └── Creative: Photography Basics and Beyond Specialization (6 certificates)

[Note: View details or expand all 29 licenses in the dashboard certifications panel above]`,

        'about': `Name: Bijendar Prasad (BIJΣПDΛЯ PЯΛƧΛD ＼⍩⃝／)
Role: Site Reliability / DevOps Engineer
Exp:  2.5+ Years designing cloud-native distributed environments
Bio:  B.Tech graduate in Computer Science & Applied Mathematics from IIIT-Delhi. 
      Passionate SRE focusing on automation, cloud migration, performance optimization, 
      infrastructure compliance, and zero-downtime cluster lifecycle rules.`,

        'skills': `skills
├── Languages
│   ├── Java
│   ├── Python
│   ├── JavaScript
│   └── Bash Scripting
├── Cloud Platforms
│   ├── AWS (EC2, EKS, ECS, Lambda, VPC, IAM, S3, Route53, WAF)
│   ├── Azure (AKS, VMs, VNet, Load Balancers, API Management)
│   └── GCP (GCE, GKE, VPC, Cloud Storage, OpenShift)
├── Containers & Orchestration
│   ├── Kubernetes
│   ├── Docker (Swarm)
│   ├── Helm
│   └── Nginx Ingress
├── IaC & DevOps
│   ├── Terraform
│   ├── Ansible
│   ├── GitHub Actions / GitLab CI-CD / Azure Pipelines
│   └── Jenkins / ArgoCD / JFrog
├── Observability & Security
│   ├── Prometheus & Grafana
│   ├── ELK Stack / OpenSearch
│   └── SonarQube / Vault / Keycloak / BlackDuck / Fortify
└── Databases & Streaming
    ├── MySQL / PostgreSQL / MongoDB
    ├── Redis / Cassandra
    └── Kafka / Spark / Airflow`,

        'experience': `experience
└── Jio Platforms Limited (June 2023 - Present)
    ├── Jio-DLT (Nov 2024 - Jun 2025)
    │    └── SRE & Ledger Operations (Fabric, Swarm, RAFT, Prometheus)
    ├── Jio-Energy (Mar 2024 - Aug 2024)
    │    └── DevOps Architecture (Kubernetes, Docker, Nginx, CI/CD)
    ├── Jio-Games (Jan 2024 - Mar 2024)
    │    └── Data Ingestion Pipelines (Metabase, Airflow, Logstash)
    └── Jio-Krishi (Sep 2023 - Jan 2024)
         └── Kafka Cluster Security & Automation (Ansible, ACLs)`,

        'projects': `projects
├── Student Claim Process Workflow System
│   ├── Details: Django, AWS backend, MySQL engine, multi-role access configs.
│   └── Link: <a href="https://repository.iiitd.edu.in/xmlui/handle/123456789/1125" target="_blank" style="color:var(--accent-blue);text-decoration:underline">repository.iiitd.edu.in/xmlui/handle/123456789/1125</a>
└── IIIT-DRIVE Cloud Storage Engine
    └── Details: Google Drive clone, AWS S3 buckets, K8s scaling, auto-garbage collections.`,

        'contact': `contact
├── Social Registry
│   ├── LinkedIn:  <a href="https://www.linkedin.com/in/bijendar-prasad-8447861b9/" target="_blank" style="color:var(--accent-blue);text-decoration:underline">linkedin.com/in/bijendar-prasad-8447861b9/</a>
│   ├── GitHub:    <a href="https://github.com/Findcoding" target="_blank" style="color:var(--accent-blue);text-decoration:underline">github.com/Findcoding</a>
│   ├── Leetcode:  <a href="https://leetcode.com/FiindingDeadlock/" target="_blank" style="color:var(--accent-blue);text-decoration:underline">leetcode.com/FiindingDeadlock/</a>
│   ├── DockerHub: <a href="https://hub.docker.com/u/findcoding" target="_blank" style="color:var(--accent-blue);text-decoration:underline">hub.docker.com/u/findcoding</a>
│   ├── Twitter:   <a href="https://twitter.com/bijendarprasad" target="_blank" style="color:var(--accent-blue);text-decoration:underline">twitter.com/bijendarprasad</a>
│   └── Instagram: <a href="https://www.instagram.com/prasadbijendar?igsh=cnFjZGFsMzlwM3Mz" target="_blank" style="color:var(--accent-blue);text-decoration:underline">instagram.com/prasadbijendar</a>
└── Channels
    └── Email:     <a href="mailto:prasadbijendar7@gmail.com" style="color:var(--accent-blue);text-decoration:underline">prasadbijendar7@gmail.com</a>`,

        'tree': `tree ./
./
├── index.html
├── resume.html
├── script.js
└── style.css`,

        'uptime': () => {
            const upDays = Math.floor(Math.random() * 150) + 120;
            const upHrs = Math.floor(Math.random() * 24);
            const upMins = Math.floor(Math.random() * 60);
            return `Uptime: up ${upDays} days, ${upHrs}:${upMins}, 1 user, load average: 0.05, 0.03, 0.01\nHost: bijendar-portfolio-infra-node-1\nTarget availability score: 99.9982% uptime maintained.`;
        },

        'date': () => {
            return new Date().toString();
        }
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const rawInput = terminalInput.value;
            let command = rawInput.trim().toLowerCase();

            // Map aliases to target commands
            if (command === 'certs' || command === 'licenses') {
                command = 'certifications';
            } else if (command === 'edu') {
                command = 'education';
            } else if (command === 'pipeline' || command === 'exp') {
                command = 'experience';
            }

            // Create command echo
            const echoDiv = document.createElement('div');
            echoDiv.className = 'terminal-cmd-echo';
            echoDiv.innerHTML = `<span class="terminal-prompt">visitor@bijendar-sre:~$</span> ${rawInput}`;
            terminalHistory.appendChild(echoDiv);

            // Process command
            const responseDiv = document.createElement('div');
            responseDiv.className = 'terminal-response';

            if (command === '') {
                // Empty command, do nothing
            } else if (command === 'clear') {
                terminalHistory.innerHTML = '';
            } else if (command === 'exit') {
                responseDiv.innerHTML = 'Session terminated. Goodbye, Admin! (Refresh page to restart SRE shell).';
                terminalInput.disabled = true;
                terminalInput.style.display = 'none';
                document.querySelector('.terminal-prompt-line').style.display = 'none';
            } else if (command.startsWith('sudo ')) {
                if (command === 'sudo rm -rf /') {
                    // Sudo rm -rf / Easter Egg
                    responseDiv.innerHTML = `<span style="color:var(--accent-red)">[CAUTION] DESTRUCTIVE ACTION REQUESTED</span>
Initializing disk format sequence...
Formatting partition /dev/sda1 (100% complete)
WARNING: System crash imminent.
...
Access Denied! ＼⍩⃝／ 
Nice try. Safe protocols protected this portfolio from corruption. SRE failover nodes running!`;
                } else {
                    responseDiv.innerHTML = `Access Denied: visitor is not in the sudoers file. This incident will be reported.`;
                }
            } else if (commandResponses[command]) {
                const response = commandResponses[command];
                responseDiv.innerHTML = typeof response === 'function' ? response() : response;
            } else {
                responseDiv.innerHTML = `bijendar-shell: command not found: <span style="color:var(--accent-red)">${rawInput}</span>. Type <span class="term-highlight">help</span> for a list of available commands.`;
            }

            if (command !== 'clear' && command !== '') {
                terminalHistory.appendChild(responseDiv);
            }

            // Reset input and scroll terminal to bottom
            terminalInput.value = '';
            terminalScreen.scrollTop = terminalScreen.scrollHeight;
        }
    });
}

// Interactive Antigravity Particles Animation for Hero Background
function initAntigravityParticles() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const heroSection = document.getElementById('home');
    if (!heroSection) return;

    let particles = [];
    const particleCount = 50;
    const connectionDistance = 115;
    const repulsionRadius = 145;
    const repulsionStrength = 2.2;
    const gravityForce = -0.012; // Floating upwards

    let mouse = { x: null, y: null };

    // Resize handler
    function resizeCanvas() {
        const rect = heroSection.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking over hero area
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    heroSection.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Model
    class Particle {
        constructor() {
            this.reset(true);
        }

        reset(randomY = false) {
            this.x = Math.random() * canvas.width;
            this.y = randomY ? Math.random() * canvas.height : canvas.height + 10;
            this.radius = Math.random() * 2.2 + 1.2;

            // Random slow velocity vectors
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.8) * 0.5;

            // Neon brand accents
            const colors = [
                'rgba(0, 242, 254, ',   // Cyan (Azure)
                'rgba(157, 78, 221, ',  // Violet (K8s)
                'rgba(255, 153, 0, '    // Orange (AWS)
            ];
            this.colorPrefix = colors[Math.floor(Math.random() * colors.length)];
            this.alpha = Math.random() * 0.45 + 0.15;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Velocity dampening
            this.vx *= 0.98;
            this.vy *= 0.98;

            // Constant upward drift
            this.vy += gravityForce;

            // Gentle wave flow
            this.vx += Math.sin((Date.now() / 800) + this.y * 0.015) * 0.004;

            // Repulsion physics (antigravity pushing effect)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < repulsionRadius) {
                    const force = (repulsionRadius - dist) / repulsionRadius;
                    // Accelerate away from cursor
                    this.vx += (dx / dist) * force * repulsionStrength;
                    this.vy += (dy / dist) * force * repulsionStrength;
                }
            }

            // Reset at top, boundaries bounce
            if (this.y < -15) {
                this.reset(false);
            }
            if (this.x < 0) {
                this.x = 0;
                this.vx = -this.vx * 0.6;
            } else if (this.x > canvas.width) {
                this.x = canvas.width;
                this.vx = -this.vx * 0.6;
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${this.colorPrefix}${this.alpha})`;
            ctx.shadowBlur = 4;
            ctx.shadowColor = `${this.colorPrefix}0.35)`;
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }

    // Seed particle population
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Render loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update & paint points
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        // Render network grid lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const lineAlpha = (1.0 - (dist / connectionDistance)) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(0, 242, 254, ${lineAlpha})`;
                    ctx.lineWidth = 0.75;
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();

    // 3D Parallax Tilt effect on the Hero container content
    const heroContainer = document.querySelector('.hero-container');
    if (heroContainer) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const dx = (e.clientX - rect.left - cx) / cx;
            const dy = (e.clientY - rect.top - cy) / cy;

            // Tilts up to 7 degrees, translates up to 8px
            heroContainer.style.transform = `perspective(1000px) rotateY(${dx * 7}deg) rotateX(${-dy * 7}deg) translateZ(8px)`;
            heroContainer.style.transition = 'none';
        });

        heroSection.addEventListener('mouseleave', () => {
            heroContainer.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0deg)';
            heroContainer.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    }
}

// Dynamic Certifications list loading from Book1.csv (Pre-scraped values)
function initCertifications() {
    const grid = document.getElementById('certifications-grid');
    const toggleBtn = document.getElementById('toggle-certs-btn');
    if (!grid || !toggleBtn) return;

    let certsExpanded = false;

    const certifications = [
        // Top 3 selected by user
        { name: "Introduction to Data Structures & Algorithms in Java", url: "https://www.linkedin.com/learning/certificates/99501668359327ee8c4a2f248eb8a75c05dd28168b29ed224b9354264d38566a", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "Create and Manage Cloud Resources", url: "https://www.cloudskillsboost.google/public_profiles/23594fa8-8c63-4d59-b0b8-178133f84a39/badges/3104503?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share", issuer: "Google Cloud", badge: "☁️" },
        { name: "Photography Techniques: Light, Content, and Sharing", url: "https://www.coursera.org/account/accomplishments/certificate/M7JKZUL2K2MD", issuer: "Coursera (Michigan State University)", badge: "📷" },

        // Remaining 26 from Book1.csv
        { name: "Git Essential Training: The Basics (2019)", url: "https://www.linkedin.com/learning/certificates/779ddc50df8553870a76f3a7230347d32bedb79c136b744231473cd212e125a3", issuer: "LinkedIn Learning", badge: "💻" },
        { name: "Learning Linux Command Line (2018)", url: "https://www.linkedin.com/learning/certificates/c28f2b2579f3b4e8e4e65ba39c4a8908fdee4ab08e152c28009410f9dc2d0bda", issuer: "LinkedIn Learning", badge: "🐧" },
        { name: "Programming Foundations: APIs and Web Services", url: "https://www.linkedin.com/learning/certificates/43e445938120287e9978dddce17b803722547d123a25c46f446334783c191040", issuer: "LinkedIn Learning", badge: "🔌" },
        { name: "Building an Android App with Architecture Components", url: "https://www.linkedin.com/learning/certificates/6e462e40425de75138c21c7fe80e4267303416ad8bdaf82b2cb289b9ac2537c2", issuer: "LinkedIn Learning", badge: "🤖" },
        { name: "Android Development Essential Training: App Architecture with Kotlin", url: "https://www.linkedin.com/learning/certificates/67f14f2f60ca31f852fcb8906a6e12110e72bf7e7d9421015723d81eca2aa5ab", issuer: "LinkedIn Learning", badge: "🤖" },
        { name: "Programming Foundations: Algorithms", url: "https://www.linkedin.com/learning/certificates/164b04c3230ca97cc8e3fcf94e9061811cf959b62b79cd78fdd081cdfc36f534", issuer: "LinkedIn Learning", badge: "📊" },
        { name: "Java: Database Integration with JDBC", url: "https://www.linkedin.com/learning/certificates/10bc68b26c0d60848ccd7b04d120c3274775b914c9b7028442025ae65fec9b84", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "Programming Foundations: Databases", url: "https://www.linkedin.com/learning/certificates/42b742aa8b85e2deebe57e7aca76fec02f9e75c528c2230ad3014bd784b83009", issuer: "LinkedIn Learning", badge: "🗄️" },
        { name: "Java 8+ Essential Training: Objects and APIs", url: "https://www.linkedin.com/learning/certificates/223dbf6f44fa1896de54bc2f3cf72d63595214d6adc20c970e6c43c0171869ca", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "Java 8+ Essential Training: Syntax and Structure", url: "https://www.linkedin.com/learning/certificates/159a170052544ea7ca4171d2d1a60d41d7064764f777311ae0c847df185a6c1b", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "Learning Java Applications (2019)", url: "https://www.linkedin.com/learning/certificates/435d183965d12af173f753cecbd765f7d5f21069ad35cdcdb8355ac53f775c69", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "MySQL Essential Training", url: "https://www.linkedin.com/learning/certificates/b029c77f764caf6399c59e3152b0961225b57f85f1e36429abb900c3fa38ad37", issuer: "LinkedIn Learning", badge: "🐬" },
        { name: "Learning Java (2018)", url: "https://www.linkedin.com/learning/certificates/b18bad8a83cc4fc6a45329764d615eaf256bb58901fe6289463e1d92f34791a1", issuer: "LinkedIn Learning", badge: "☕" },
        { name: "Spanish Vocabulary Project", url: "https://www.coursera.org/account/accomplishments/certificate/FJCWY9SZSV86", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Spanish Vocabulary: Sports, Travel, and the Home", url: "https://www.coursera.org/account/accomplishments/certificate/7X4YFZ46G5G9", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Spanish Vocabulary: Careers and Social Events", url: "https://www.coursera.org/account/accomplishments/certificate/V29QAPM26UVU", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Learn Spanish: Basic Spanish Vocabulary Specialization", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/2X9LLXHM2U4S", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Spanish Vocabulary: Cultural Experience", url: "https://www.coursera.org/account/accomplishments/certificate/TP6DPB7WZ62K", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Spanish Vocabulary: Meeting People", url: "https://www.coursera.org/account/accomplishments/certificate/KVV57CNDJCPW", issuer: "Coursera (UC Davis)", badge: "🇪🇸" },
        { name: "Algorithms on Graphs", url: "https://www.coursera.org/account/accomplishments/certificate/C4MY9WJT4A8F", issuer: "Coursera (UC San Diego & HSE University)", badge: "📊" },
        { name: "Photography Capstone Project", url: "https://www.coursera.org/account/accomplishments/certificate/5LZQZJJ7NR95", issuer: "Coursera (Michigan State University)", badge: "📷" },
        { name: "Principles of Photo Composition and Digital Image Post-Production", url: "https://www.coursera.org/account/accomplishments/certificate/NK4RLQYR4Y8C", issuer: "Coursera (Michigan State University)", badge: "📷" },
        { name: "Algorithmic Toolbox", url: "https://www.coursera.org/account/accomplishments/certificate/JG2PE72HES8W", issuer: "Coursera (UC San Diego & HSE University)", badge: "📊" },
        { name: "Cameras, Exposure, and Photography", url: "https://www.coursera.org/account/accomplishments/certificate/J2HJ79T823J6", issuer: "Coursera (Michigan State University)", badge: "📷" },
        { name: "Camera Control", url: "https://www.coursera.org/account/accomplishments/certificate/G3PECHR8EMZV", issuer: "Coursera (Michigan State University)", badge: "📷" },
        { name: "Photography Basics and Beyond: From Smartphone to DSLR Specialization", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/SLBN2CJ8ECWJ", issuer: "Coursera (Michigan State University)", badge: "📷" }
    ];

    function renderCerts(limit) {
        grid.innerHTML = '';
        const listToRender = certifications.slice(0, limit);

        listToRender.forEach((cert, idx) => {
            const card = document.createElement('div');
            card.className = 'certification-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(15px)';
            card.style.transition = 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

            card.innerHTML = `
                <div class="cert-badge">${cert.badge}</div>
                <div class="cert-info">
                    <h3>
                        <a href="${cert.url}" target="_blank" rel="noopener">${cert.name} ↗</a>
                    </h3>
                    <p class="cert-issuer">${cert.issuer}</p>
                </div>
            `;

            grid.appendChild(card);

            // Stagger animation timing
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, idx * 35);
        });
    }

    // Initial top 3 rendering
    renderCerts(3);

    // Bind toggle event
    toggleBtn.addEventListener('click', () => {
        if (!certsExpanded) {
            renderCerts(certifications.length);
            toggleBtn.innerHTML = 'show less &larr;';
            certsExpanded = true;
        } else {
            renderCerts(3);
            toggleBtn.innerHTML = 'show all 29 licenses &rarr;';
            certsExpanded = false;

            // Scroll smoothly back to section header
            document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
        }
    });
}

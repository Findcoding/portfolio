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
  <span class="term-highlight">about</span>     - Print biography and background summary
  <span class="term-highlight">skills</span>    - Print complete technical catalog and tools
  <span class="term-highlight">pipeline</span>  - View operational status of Jio deployment stages
  <span class="term-highlight">projects</span>  - Review core code repositories and cloud architectures
  <span class="term-highlight">contact</span>   - Print email address, LinkedIn, and social tags
  <span class="term-highlight">uptime</span>    - Query live system availability score
  <span class="term-highlight">date</span>      - Print environment timestamps
  <span class="term-highlight">clear</span>     - Clear shell window logs
  <span class="term-highlight">sudo ...</span>   - Execute commands with administrative rights`,
        
        'about': `Name: Bijendar Prasad (BIJΣПDΛЯ PЯΛƧΛD ＼⍩⃝／)
Role: Site Reliability / DevOps Engineer
Exp:  2.5+ Years designing cloud-native distributed environments
Bio:  B.Tech graduate in Computer Science & Applied Mathematics from IIIT-Delhi. 
      Passionate SRE focusing on automation, cloud migration, performance optimization, 
      infrastructure compliance, and zero-downtime cluster lifecycle rules.`,
        
        'skills': `--- TECHNICAL INVENTORY CATALOG ---
Languages:   Java, Python, JavaScript, Bash Scripting
Platforms:   AWS (EC2, EKS, ECS, Lambda, VPC, Route53, S3, IAM, WAF)
             Azure (AKS, VMs, VNet, Load Balancers, API Gateways)
             GCP (GCE, GKE, VPC, Cloud Storage, OpenShift)
Containers:  Kubernetes, Docker, Helm, Docker Swarm, Nginx Ingress
IaC/CI-CD:   Terraform, Ansible, GitHub Actions, GitLab CI/CD, Azure Pipelines, Jenkins
Observability:Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana), OpenSearch
Data/Stream: Kafka, Spark, Hadoop, Airflow, ETL pipelines
Security:    SonarQube, Vault, Keycloak, BlackDuck, Fortify`,
        
        'pipeline': `Jio Platforms Limited Deployment Pipelines:
  [PASS] Stage 1: Jio-DLT (Nov 2024 - Jun 2025) - Fabric deployment on Docker Swarm
  [PASS] Stage 2: Jio-Energy (Mar 2024 - Aug 2024) - K8s Node/Angular deployments
  [PASS] Stage 3: Jio-Games (Jan 2024 - Mar 2024) - Metabase DB Migration & Airflow ETLs
  [PASS] Stage 4: Jio-Krishi (Sep 2023 - Jan 2024) - Kafka cluster security & Ansible IaC`,
        
        'projects': `Active Portfolios:
  1. Student Claim Process Workflow System
     - Details: Django, AWS backend, MySQL engine, multi-role access configs.
  2. IIIT-DRIVE Cloud Storage Engine
     - Details: Google Drive clone, AWS S3 buckets, K8s scaling, auto-garbage collections.`,
        
        'contact': `Social Registry Handles:
  LinkedIn:  <a href="https://www.linkedin.com/in/bijendar-prasad-8447861b9/" target="_blank" style="color:var(--accent-blue);text-decoration:underline">linkedin.com/in/bijendar-prasad-8447861b9/</a>
  GitHub:    <a href="https://github.com/Findcoding" target="_blank" style="color:var(--accent-blue);text-decoration:underline">github.com/Findcoding</a>
  Leetcode:  <a href="https://leetcode.com/FiindingDeadlock/" target="_blank" style="color:var(--accent-blue);text-decoration:underline">leetcode.com/FiindingDeadlock/</a>
  DockerHub: <a href="https://hub.docker.com/u/findcoding" target="_blank" style="color:var(--accent-blue);text-decoration:underline">hub.docker.com/u/findcoding</a>
  Twitter:   <a href="https://twitter.com/bijendarprasad" target="_blank" style="color:var(--accent-blue);text-decoration:underline">twitter.com/bijendarprasad</a>
  Instagram: <a href="https://www.instagram.com/prasadbijendar?igsh=cnFjZGFsMzlwM3Mz" target="_blank" style="color:var(--accent-blue);text-decoration:underline">instagram.com/prasadbijendar</a>
  Email:     <a href="mailto:prasadbijendar7@gmail.com" style="color:var(--accent-blue);text-decoration:underline">prasadbijendar7@gmail.com</a>`,
        
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
            const command = rawInput.trim().toLowerCase();
            
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

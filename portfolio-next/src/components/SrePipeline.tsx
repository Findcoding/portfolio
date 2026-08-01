"use client";

import React, { useState, useEffect, useRef } from "react";

interface LogLine {
  type: "info" | "success" | "action";
  text: string;
}

const pipelineData: Record<string, { title: string; role: string; date: string; status: string; statusColor: string; logs: LogLine[] }> = {
  "log-dlt": {
    title: "Jio-DLT",
    role: "Enterprise Blockchain Platform",
    date: "Nov 2024 - Jun 2025",
    status: "Production",
    statusColor: "text-[#00f2fe]",
    logs: [
      { type: "info", text: "Initializing Jio-DLT (Distributed Ledger Technology) pipeline run..." },
      { type: "success", text: "Deployed scalable Hyperledger Fabric network across 20+ servers using Docker Swarm, ensuring high availability." },
      { type: "success", text: "Configured robust consensus: 3 Orderers (RAFT), 4 channels, 12 peers, and persistent distributed ledger storage." },
      { type: "action", text: "Orchestrated network lifecycle with 30+ automation scripts for genesis block, channels, and chaincode deployment." },
      { type: "success", text: "Decreased manual deployment and blockchain network creation cycles by 80%." },
      { type: "info", text: "Optimized ledger performance: Tuned configtx.yaml, orderer.yaml, and core.yaml to increase throughput by 40%." },
      { type: "action", text: "Hardened network stability: Simulated split-brain node failures, mounted storage via NFS for shared crypto materials." },
      { type: "success", text: "Implemented real-time monitoring via Prometheus, Grafana, and cAdvisor for 50+ blockchain containers." },
      { type: "success", text: "Deployed Hyperledger Explorer with PostgreSQL database backend, logging 20,000+ operations across channels." },
      { type: "success", text: "Pipeline completed. System fully operational with RAFT consensus healthy." },
    ],
  },
  "log-energy": {
    title: "Jio-Energy",
    role: "Utility Billing & Metering Platform",
    date: "Mar 2024 - Aug 2024",
    status: "Live",
    statusColor: "text-[#34a853]",
    logs: [
      { type: "info", text: "Initializing Jio-Energy deployment pipeline..." },
      { type: "success", text: "Deployed Node.js and Angular applications into Kubernetes container environments." },
      { type: "action", text: "Configured K8s primitives: Deployments, Services, ConfigMaps, Secrets, and Horizontal Pod Autoscalers (HPA)." },
      { type: "info", text: "Tuned K8s liveness/readiness probes and Pod Disruption Budgets (PDB) to guarantee 99.99% system uptime." },
      { type: "action", text: "Built hardened multi-stage Docker build containers and integrated scanning (BlackDuck, Fortify)." },
      { type: "success", text: "Engineered automated CI/CD pipelines, slashing manual integration effort by 80%." },
      { type: "success", text: "Setup disaster recovery backups for MySQL, MongoDB, and Redis clusters via cronjobs. RPO recovered in < 5 mins." },
      { type: "info", text: "Established cluster edge traffic control using Nginx Ingress Controller (rate-limiting, path-based routing)." },
      { type: "success", text: "Integrated Prometheus custom exporters for Node, MySQL, Redis, and MongoDB, reducing outages by 40%." },
      { type: "success", text: "Configured Azure Load Balancer and Application Gateways to scale traffic by 90%." },
    ],
  },
  "log-games": {
    title: "Jio-Games",
    role: "Entertainment and Gaming Platform",
    date: "Jan 2024 - Mar 2024",
    status: "Successfully Delivered",
    statusColor: "text-[#df9aff]",
    logs: [
      { type: "info", text: "Initializing Jio-Games analytic ingestion pipeline..." },
      { type: "success", text: "Deployed Metabase BI platform onto production environments powered by Java and MySQL." },
      { type: "action", text: "Configured Metabase security settings, Role-Based Access Control (RBAC), and user query filters." },
      { type: "success", text: "Migrated 300+ legacy PowerBI reporting dashboards to Metabase, rewriting 100+ DAX queries into native SQL." },
      { type: "info", text: "Optimized reporting backend queries, reducing latency by 40% and cutting ad-hoc query waiting times by 50%." },
      { type: "action", text: "Programmed Airflow DAG pipelines to automate daily DB ingestion and scheduled MySQL backups." },
      { type: "success", text: "Synchronized Logstash ELK indexes into MySQL repositories, bolstering analytical data consistency by 30%." },
      { type: "success", text: "Analytic pipelines successfully active and delivering data." },
    ],
  },
  "log-krishi": {
    title: "Jio-Krishi",
    role: "IoT Analytics Platform",
    date: "Sep 2023 - Jan 2024",
    status: "Operational",
    statusColor: "text-[#ff9900]",
    logs: [
      { type: "info", text: "Initializing Jio-Krishi IoT messaging queue deployment..." },
      { type: "action", text: "Designed automated orchestration pipelines via Ansible and Azure Pipelines." },
      { type: "success", text: "Provisioned distributed Apache Kafka and Zookeeper clusters, achieving 95% multi-node setup consistency." },
      { type: "info", text: "Hardened messaging security: Configured Kafka SASL/SCRAM authentication, JAAS modules, and ACL rules." },
      { type: "success", text: "Decreased unauthorized Kafka queue access incidents and security scan warnings by 90%." },
      { type: "success", text: "Designed high-throughput ETL data flows across ELK, MongoDB, and Cassandra clusters, mitigating setup failures by 30%." },
      { type: "success", text: "IoT analytics pipelines successfully deployed and streaming telemetry." },
    ],
  },
};

export default function SrePipeline() {
  const [activeStage, setActiveStage] = useState<string>("log-dlt");
  const [displayedLogs, setDisplayedLogs] = useState<LogLine[]>([]);
  const [rerunKey, setRerunKey] = useState<number>(0);
  const logsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setDisplayedLogs([]);
    const currentData = pipelineData[activeStage] || pipelineData["log-dlt"];
    const logs = currentData?.logs || [];
    let index = 0;

    const interval = setInterval(() => {
      if (index < logs.length) {
        setDisplayedLogs((prev) => [...prev, logs[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [activeStage, rerunKey]);

  // Auto-scroll terminal container down along with streaming contents
  useEffect(() => {
    if (logsContainerRef.current) {
      logsContainerRef.current.scrollTo({
        top: logsContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [displayedLogs]);

  const activeData = pipelineData[activeStage] || pipelineData["log-dlt"];

  return (
    <section id="pipeline" className="w-full py-10 sm:py-14 px-6 sm:px-12 bg-[#0a0a0f] relative">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-mono text-2xl sm:text-3xl font-extrabold text-white mb-2 flex items-center gap-3">
          <span className="text-[#00f2fe]">//</span> Experience
        </h2>
        <p className="font-mono text-xs text-white/60 mb-10">
          Explore the production systems I've engineered. Each deployment represents a platform I designed, automated, or operated during my journey at Jio Platforms.
        </p>

        {/* Pipeline Stage Buttons - Horizontal Scrollable on Mobile with Reduced Height */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 overflow-x-auto sm:overflow-visible pb-3 sm:pb-0 mb-8 snap-x snap-mandatory scroll-smooth no-scrollbar -mx-6 sm:mx-0 px-6 sm:px-0">
          {Object.entries(pipelineData).map(([key, data]) => {
            const isActive = activeStage === key;
            return (
              <button
                key={key}
                onClick={() => setActiveStage(key)}
                className={`p-3.5 sm:p-5 rounded-xl text-left border transition-all w-[230px] sm:w-auto shrink-0 snap-start ${isActive
                  ? "bg-[#00f2fe]/10 border-[#00f2fe] shadow-[0_0_20px_rgba(0,242,254,0.25)]"
                  : "bg-[#101018]/80 border-white/10 hover:border-white/30"
                  }`}
              >
                <div className="flex items-center gap-1.5 mb-1.5 sm:mb-2">
                  <span className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${data.statusColor.replace('text-', 'bg-')} animate-pulse`} />
                  <span className={`font-mono text-[9.5px] sm:text-[11px] font-bold uppercase tracking-wider ${data.statusColor}`}>
                    {data.status}
                  </span>
                </div>
                <div className="font-mono text-[13px] sm:text-sm font-bold text-white mb-0.5 sm:mb-1">{data.title}</div>
                <div className="font-mono text-[10.5px] sm:text-xs text-white/50 mb-1 sm:mb-2">{data.date}</div>
                <div className="font-mono text-[11px] sm:text-xs text-[#00f2fe] truncate">{data.role}</div>
              </button>
            );
          })}
        </div>

        {/* Console Log Output Window */}
        <div className="rounded-xl bg-[#07070a] border border-white/15 overflow-hidden shadow-2xl">
          <div className="px-3.5 sm:px-5 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/80 shrink-0" />
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/80 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs text-white/70 ml-1 sm:ml-2 truncate">
                tail -f deployment.log: <span className="text-[#00f2fe] font-bold drop-shadow-[0_0_10px_rgba(0,242,254,0.5)]">{activeData.title.toUpperCase()}</span>
              </span>
            </div>
            <button
              onClick={() => setRerunKey((k) => k + 1)}
              className="font-mono text-[11px] sm:text-xs text-[#00f2fe] hover:underline shrink-0 whitespace-nowrap ml-2"
            >
              ⟳ Re-run
            </button>
          </div>

          <div
            ref={logsContainerRef}
            className="p-4 sm:p-6 font-mono text-[11px] sm:text-xs text-white/90 space-y-3.5 sm:space-y-2.5 max-h-[300px] sm:max-h-[360px] overflow-y-auto overscroll-contain scroll-smooth"
          >
            {displayedLogs.map((log, idx) => {
              if (!log) return null;
              const now = new Date();
              const logDate = new Date(now.getTime() + idx * 3000 + Math.floor((idx * 4000) / 3));
              const dateStr = logDate.toISOString().split("T")[0];
              const timeStr = logDate.toTimeString().split(" ")[0];
              const timestamp = `${dateStr} ${timeStr}`;

              return (
                <div key={idx} className="leading-relaxed flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  {/* Timestamp & Status Badge - Side by side on mobile */}
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-white/40 select-none text-[10px] sm:text-xs font-mono">[{timestamp}]</span>
                    {log.type === "info" && <span className="text-blue-400 font-bold text-[10px] sm:text-xs font-mono">[INFO]</span>}
                    {log.type === "success" && <span className="text-emerald-400 font-bold text-[10px] sm:text-xs font-mono">[SUCCESS]</span>}
                    {log.type === "action" && <span className="text-amber-400 font-bold text-[10px] sm:text-xs font-mono">[ACTION]</span>}
                  </div>

                  {/* Log Content */}
                  <span className="text-white/90 font-mono text-[11px] sm:text-[13px] lg:text-sm pl-2 sm:pl-0 border-l border-white/15 sm:border-0 ml-1 sm:ml-0 flex-1">
                    {log.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

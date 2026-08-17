import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import fourBrothersImg from "../assets/img/four-brothers.png";
import virkToolsImg from "../assets/img/virk-tools.png";
import plantSurvivalImg from "../assets/img/plant-survival.png";
import bloomcraftImg from "../assets/img/bloomcraft.png";
import stayeaseCargoImg from "../assets/img/stayease-cargo.png";
import securityAuditImg from "../assets/img/security-audit.png";
import churnPredictionImg from "../assets/img/churn-prediction.png";
import hpcSimulationImg from "../assets/img/hpc-simulation.png";
import localLlmImg from "../assets/img/local-llm-agents.png";
import giftUniversityImg from "../assets/img/gift-university.png";
import leadsCollegeImg from "../assets/img/leads-college.png";
import immigrationUaImg from "../assets/img/immigration-ua.png";
import burraqFurnitureImg from "../assets/img/burraq-furniture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const webProjects = [
    {
      title: "Four Brothers (4Bros)",
      description: "B2B Wholesale & Supply Chain Platform (React, Vite, Node, Tailwind, MySQL)",
      imgUrl: fourBrothersImg,
    },
    {
      title: "VIRK Tools & Equipment",
      description: "Full-Stack Industrial E-Commerce Platform (React, Node, Express, MySQL 8.4)",
      imgUrl: virkToolsImg,
    },
    {
      title: "BloomCraft",
      description: "E-Commerce Platform with Dynamic Media QR Codes (Node.js, Vercel)",
      imgUrl: bloomcraftImg,
    },
    {
      title: "StayEase & CarGo",
      description: "Database-Backed Workflow & Reservation Systems (Full-Stack Web)",
      imgUrl: stayeaseCargoImg,
    },
    {
      title: "4Brothers Storefront",
      description: "Custom Storefront with Dynamic Categories & Admin Panel (Full-Stack)",
      imgUrl: fourBrothersImg,
    },
    {
      title: "Cloud Security & Audit",
      description: "GCP Ubuntu Deployments & Vulnerability Assessment (GCP, Nmap, Wireshark)",
      imgUrl: securityAuditImg,
    },
  ];

  const aiAndSystemProjects = [
    {
      title: "Plant Survival Simulator",
      description: "2D Greenhouse Resource Management Game (Unity, C# Physics & State Machines)",
      imgUrl: plantSurvivalImg,
    },
    {
      title: "Customer Churn Prediction",
      description: "Custom Machine Learning Pipeline & Neural Networks (Python, PyTorch, Pandas)",
      imgUrl: churnPredictionImg,
    },
    {
      title: "Custom ML Algorithms",
      description: "Scratch KNN, Naive Bayes, Logistic Regression & MLPs (Python, NumPy)",
      imgUrl: churnPredictionImg,
    },
    {
      title: "HPC Parallel Simulations",
      description: "GPU Acceleration & Distributed Communication (CUDA-C, OpenMP, MPI)",
      imgUrl: hpcSimulationImg,
    },
    {
      title: "Local LLMs & AI Agents",
      description: "Local Inference Pipelines & Agent Orchestration (Ollama, Qwen 3, Python)",
      imgUrl: localLlmImg,
    },
    {
      title: "Linux & Systems Architecture",
      description: "CachyOS Optimization, Memory Tuning & Kernel Configs",
      imgUrl: securityAuditImg,
    },
  ];

  const experienceAndEducation = [
    {
      title: "GIFT University",
      description: "BS in Computer Science (BSCS | 2023 - 2027 | CGPA: 3.5 / 4.0)",
      imgUrl: giftUniversityImg,
    },
    {
      title: "Lahore Leads College",
      description: "Intermediate in Computer Science (ICS | 2021 - 2023 | Grade: 80% A)",
      imgUrl: leadsCollegeImg,
    },
    {
      title: "Immigration UA",
      description: "Customer Service & Workflow Agent (Remote | Jun 2023 - Mar 2024)",
      imgUrl: immigrationUaImg,
    },
    {
      title: "Burraq Furniture",
      description: "Sales & Operations Associate (UK & US Markets | Dec 2022 - Jul 2023)",
      imgUrl: burraqFurnitureImg,
    },
    {
      title: "Bloomcraft Ventures",
      description: "Co-Founder & Web Developer (Physical + Digital Innovation)",
      imgUrl: bloomcraftImg,
    },
    {
      title: "Agentic Systems Focus",
      description: "Prompt Engineering, Scalable Architectures & MCP Integrations",
      imgUrl: localLlmImg,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Experience</h2>
                <p>Explore a curated selection of full-stack web platforms, custom machine learning pipelines, interactive games, high-performance computing simulations, and professional experience.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web & Full-Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AI & Systems</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Education & Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          aiAndSystemProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          experienceAndEducation.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  )
}

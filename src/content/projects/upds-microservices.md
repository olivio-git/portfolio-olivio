---
title: "Sistema de Evaluación Lingüística"
description: "Plataforma de evaluación lingüística para CBA Tarija (proyecto de grado): 6 microservicios sobre Kafka, corrección automática con IA y sesiones de examen en tiempo real."
description_en: "Language assessment platform for CBA Tarija (capstone project): 6 Kafka-based microservices, AI-powered automated grading, and real-time exam sessions."
image: "/projects/hero_upds.png"
images: []
tech: ["TypeScript", "Microservices", "Kafka", "AI/NLP", "WebSockets", "Docker"]
github: "https://github.com/olivio-git/UPDS_PROYECT_MICROSERVICES"
type: "product"
featured: true
org: "CBA Tarija"
status: "live"
year: 2026
order: 2
---

Sistema de evaluación lingüística desarrollado para el CBA Tarija como proyecto de grado de Ingeniería de Sistemas, bajo metodología Scrum con un Product Owner real.

Construido sobre una arquitectura de **6 microservicios desacoplados** (auth, usuarios, exámenes, sesiones, notificaciones y calificación con IA) comunicados mediante **Kafka** como event bus. La corrección automática integra un pipeline de IA: transcripción de audio con **Whisper**, análisis NLP con **spaCy** y evaluación con LLMs (**Groq** en la nube + **Ollama** en VPS y local).

Las sesiones de examen funcionan en tiempo real con **Socket.io**, heartbeat monitoring y coordinación entre servicios. Toda la infraestructura se orquesta con **Docker Compose**: MongoDB, Redis, Kafka, MinIO y Nginx como API Gateway.

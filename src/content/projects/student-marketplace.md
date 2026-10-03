---
title: Trumio, a student work marketplace
context: Backend engineering
tagline: Letting students learn the industry before they graduate, by taking on real work from real companies while still in college.
cover:
  src: /projects/student-marketplace-cover.svg
  alt: Companies posting real projects on one side, students in India, the USA and Canada taking them on, with the marketplace and its FastAPI backend in the middle
  caption: Companies on one side, students on the other, and the marketplace connecting them.
stack: [Python, FastAPI, REST APIs]
links:
  - { label: trumio.ai, href: 'https://trumio.ai/' }
---

Most students meet the industry for the first time after they graduate. Trumio started from a simple idea: what if they met it while still in college, by doing real work for real companies, the way freelancers do on Fiverr or Upwork?

I worked on the backend that powered it, in Python with FastAPI.

<p class="kicker">The idea</p>

## Learning the industry by working in it

A degree teaches the theory. What it rarely teaches is how work actually happens in a company: real requirements, real deadlines, real feedback from someone who needs the result. The marketplace brought that into college life. Companies posted projects, and students in India, the USA and Canada could pick them up and deliver them, building experience and a track record before their first job.

<figure class="flow">
  <ol>
    <li><b>Post</b><span>A company puts up a real piece of work it needs done.</span></li>
    <li><b>Pick up</b><span>Students find projects that match what they want to learn.</span></li>
    <li><b>Deliver</b><span>The student does the work, and the company gets a real result.</span></li>
    <li><b>Grow</b><span>The student leaves with industry experience before graduating.</span></li>
  </ol>
  <figcaption>The idea behind the marketplace, in four steps.</figcaption>
</figure>

<p class="kicker">My part</p>

## The backend

My work was on the backend: the APIs the platform ran on, built in Python with FastAPI. A marketplace lives or dies by its backend. Every listing, every student, every application and every hand off between a company and a student passes through it.

FastAPI suits that kind of product well. It's fast and asynchronous, so it handles many requests at once, and it checks every request against typed models before any code runs, which keeps bad data out. It also generates live API documentation automatically, which makes it easier for the frontend and backend to stay in step.

<p class="kicker">Today</p>

## Where the idea went

Trumio has grown since. Today it describes itself as an experiential learning platform: people build skills through projects that mirror real work, with AI guidance and feedback from experts along the way. It partners with universities including IIT Kharagpur, IIT Bhubaneswar and Manipal University, and is based in San Jose, California.

> The core idea never changed: you learn the industry best by working in it.

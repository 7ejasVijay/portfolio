---
title: Live face recognition with a GoPro
context: AI internship at SAIG, May 2019
tagline: Recognising people live from a moving camera, with just one photo of each person to learn from.
period: May 2019
cover:
  src: /projects/face-recognition.webp
  alt: The system running on a group photo of my college friends, each face boxed in red with the name it recognised
  caption: The system at work on my college friends. Every box and name was drawn by the model, live.
stats:
  - { value: '1', label: 'reference photo needed per person' }
  - { value: '5', label: 'faces recognised in a single frame' }
  - { value: '2,200', label: 'women at the run it was built for' }
stack: [Python, Computer vision, One shot learning, Face detection, GoPro]
links:
  - { label: Specialist Advisory & Intervention Group, href: 'https://cal-saig.com/' }
---

In the summer of 2019 I spent two months as an AI intern at Specialist Advisory & Intervention Group (SAIG), a Mumbai security and risk consultancy. My project was to take face recognition out of the lab and onto the street: point a GoPro at a crowd and have it recognise registered people, live, from nothing more than one photo of each of them.

This is how that came together.

<p class="kicker">May 2019</p>

## The brief

SAIG works on the security of people and events, and one of those events was a run in Mumbai with around 2,200 women taking part. The question was simple to ask and hard to answer: could a small, portable camera pick out registered participants as they passed, and say who they were?

That rules out the usual way of building a face recognition system. A classic classifier learns each person from dozens or hundreds of labelled photos. For an event, you get one photo per person, the one they registered with, and the list of people changes every time.

<p class="kicker">The approach</p>

## Why one shot learning

One shot learning flips the problem around. Instead of teaching a model what each person looks like, you teach it how to compare two faces and decide whether they belong to the same person. Once it can do that, recognising someone new needs no retraining at all: you show it their single reference photo, and from then on it can match them in any frame.

That is exactly the shape of an event. Registration gives you one photo per runner, and the model only ever has to answer one question for every face it sees: which of these reference photos, if any, is this?

> One photo per person was enough to pick them out of a live camera feed.

<p class="kicker">The build</p>

## From a GoPro to a name

My part was making that work on a real camera. I integrated the GoPro's video feed with the one shot learning model, so every frame from the camera ran through the same few steps.

<figure class="flow">
  <ol>
    <li><b>Capture</b><span>The GoPro streams video of the people in front of it.</span></li>
    <li><b>Detect</b><span>Every face in the frame is found and cropped out.</span></li>
    <li><b>Compare</b><span>Each face is compared against the one reference photo of every registered person.</span></li>
    <li><b>Label</b><span>A close enough match gets a box and the person's name, drawn back onto the video.</span></li>
  </ol>
  <figcaption>The pipeline, from camera frame to a named face.</figcaption>
</figure>

A GoPro is a good fit for an event because it's small, tough and easy to mount anywhere, but it also makes recognition harder. People move, the light changes, faces turn away from the lens, and everything has to happen fast enough to keep up with the video.

<p class="kicker">Event day</p>

## A 2,200 women run in Mumbai

The system was built for a run in Mumbai in May 2019, where around 2,200 women ran 3 km through the city. There, the job was to recognise registered participants live from the camera feed.

<p class="kicker">Looking back</p>

## Where it fits

This was 2019, two months, and my first real taste of applied AI: a model that had to work on a live camera, outdoors, on people it had only seen once. It's the earliest project on this site, and it sits at the start of a path that later ran through data science at Reliance, data and AI pipelines at Wow Internet Labz, and the blockchain infrastructure I work on today.

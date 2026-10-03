---
title: Multilingual lecture translation
context: Wow Internet Labz, 2024
tagline: Turning English video lectures into Hindi, Marathi, Bengali and Telugu, automatically, through a pipeline of seven services.
period: Built July to November 2024, in use since
cover:
  src: /projects/translation-dashboard.webp
  alt: The pipeline's monitoring dashboard, showing total processing time by stage, total file storage and the number of lectures available in each language
  caption: "The monitoring dashboard: where the processing time goes, how much video it holds, and how many lectures exist in each language."
stats:
  - { value: '2,816', label: 'lectures sent through the pipeline' }
  - { value: '8,658', label: 'translated audio tracks produced' }
  - { value: '4.7 TB', label: 'of lecture video processed' }
stack: [Python, Kafka, Docker, MongoDB, AWS S3, OpenAI Whisper, GPT, Google Text to Speech, SSML, FFmpeg, Shaka Packager, HLS, SvelteKit]
activity:
  title: Lectures processed per month
  months:
    - ['2024-10', 9]
    - ['2024-11', 0]
    - ['2024-12', 0]
    - ['2025-01', 0]
    - ['2025-02', 0]
    - ['2025-03', 151]
    - ['2025-04', 173]
    - ['2025-05', 2]
    - ['2025-06', 0]
    - ['2025-07', 0]
    - ['2025-08', 0]
    - ['2025-09', 95]
    - ['2025-10', 30]
    - ['2025-11', 1239]
    - ['2025-12', 376]
    - ['2026-01', 50]
    - ['2026-02', 2]
    - ['2026-03', 0]
    - ['2026-04', 23]
    - ['2026-05', 666]
---

An education platform had hours of recorded lectures, all in English, for students who often learn best in their own language. Recording every lecture again in four more languages was never going to happen. So we built a pipeline that takes a finished lecture, up to a couple of hours long, and gives it back with Hindi, Marathi, Bengali and Telugu audio tracks, ready to stream.

I started it in July 2024 with a junior developer, and this is how it grew, from a proof of concept to something that has processed thousands of lectures.

<p class="kicker">July 2024</p>

## From a notebook to a pipeline

The first version was a proof of concept: one program that took a video, pulled out the speech, translated it and spoke it back in another language. It worked, but a two hour lecture in a single process is fragile. If any step fails near the end, everything starts again from the beginning.

Within the first week I added transcoding and packaging of the video and audio, and the work turned to the real question: how to split this into pieces that could fail, retry and scale on their own.

<p class="kicker">August 2024</p>

## Seven services, one queue

We broke the program into seven separate services, connected through Kafka, and I packaged each one in its own Docker container. When a service finishes its part of a lecture, it posts a message to the next service's topic and moves on to the next job. MongoDB tracks the state of every lecture at every stage, and every file in between lives in S3.

<figure class="steps">
  <ol>
    <li><b>Audio extraction</b><span>Pulls the soundtrack out of the uploaded lecture video, and finds the natural pauses in the speech.</span><em>FFmpeg</em></li>
    <li><b>Speech to text</b><span>Transcribes the English audio into text.</span><em>OpenAI Whisper</em></li>
    <li><b>Text splitting</b><span>Cuts the transcript into chunks small enough to translate and speak in batches.</span><em>Python</em></li>
    <li><b>Translation</b><span>Translates every chunk into Hindi, Marathi, Bengali and Telugu.</span><em>GPT</em></li>
    <li><b>Text to speech</b><span>Speaks each translated chunk, keeping the pauses of the original lecture.</span><em>Google TTS, SSML</em></li>
    <li><b>Audio generation</b><span>Stitches the spoken chunks back into one full audio track per language.</span><em>Python</em></li>
    <li><b>Video packaging</b><span>Encodes the video at 480p and 720p and packages it with all five audio tracks for streaming.</span><em>FFmpeg, Shaka Packager, HLS</em></li>
  </ol>
  <figcaption>The seven services, in order. Each one is a Kafka topic and its own Docker container.</figcaption>
</figure>

Long lectures meant long jobs, which Kafka doesn't expect by default: a consumer that goes quiet for too long gets kicked out of its group. I tuned how many messages each service takes at once and how long it may work on them, wrote the Dockerfiles and a single compose file for the whole pipeline, and gave each service its own CPU and memory limits. Speech recognition gets six cores and 12 GB; splitting text needs a quarter of a core.

<p class="kicker">August to September 2024</p>

## Making it sound natural

A word for word translation, read out by a computer, sounds like a robot reading a script. The translated speech also comes out longer or shorter than the original, so it drifts out of step with the speaker on screen.

To fix that, the pipeline listens for the pauses in the original lecture and carries them through into the translated text. The text goes to the speech engine as SSML, a markup that tells it where to pause, and each language gets its own speaking rate, kept within upper and lower limits so it never rushes or drags. I spent a lot of this stretch tuning the GPT translation prompt and the speech markup until the result sounded like a lecture, not a list of sentences.

<p class="kicker">September to November 2024</p>

## Shipping it

Version 1.0 went out on 17 September 2024, tested on development, UAT and production environments, and I started a changelog so every release was written down. Five more releases followed by November, mostly about making failure safe:

- the pipeline stops early if a video has no audio, or runs longer than three hours
- any stage can be retried on its own, without redoing the stages before it
- every lecture's progress is tracked stage by stage, so a half finished one is never marked as done
- version 1.3 recorded translation tokens, characters spoken and file sizes for every lecture, so the cost of each one could be measured

<p class="kicker">October 2024</p>

## Watching it run

A pipeline with seven moving parts needs a window into it. Together we built a monitoring dashboard: a table of every lecture with search, filters, sorting and pagination, a detailed view of each lecture's audio, text and intermediate files, and graphs of where the processing time goes. I built the lecture table, its search and filters, the detail view and the graphs.

<p class="kicker">Along the way</p>

## Bringing a junior up to speed

I started this project with a junior developer who was new to most of it. Alongside building it, I took him through the pieces it needed: Kafka and how the services talk to each other, Docker and how each one is packaged and deployed, and the Python services themselves.

The commit history shows how that went. In August and September, around two thirds of the commits were mine. By October and November, most of them were his.

<p class="kicker">October 2024 to 2026</p>

## Thousands of lectures later

The first real lectures went through in October 2024, and the pipeline has kept running since. By now, **2,816 lectures** have gone through it, and 2,159 of them have been fully translated into all four languages. Its busiest month was November 2025, with **1,239 lectures** in a single month.

Along the way it has translated around 21 million tokens of text, spoken more than 60 million characters of it, and processed 4.7 TB of lecture video. The packaged multilingual versions, with all five languages included, take up about 26 times less space than the original uploads.

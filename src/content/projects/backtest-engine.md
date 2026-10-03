---
title: Backtest Engine
context: Personal project, May 2026 to now
tagline: A backtesting app for the Indian stock market. Build a strategy, test it on years of your own broker's data, and let Radar watch the market for it.
period: May 2026 to now
cover:
  src: /projects/backtest-engine-cover.webp
  alt: A candlestick chart breaking out above a dashed resistance line, with the line Find the breakout before the crowd does
  caption: "From the app's sign in screen. Find the breakout before the crowd does."
stats:
  - { value: '219', label: 'commits, all mine' }
  - { value: '5', label: 'broker integrations for market data' }
  - { value: '10k+', label: 'lines of Rust in the desktop core' }
stack: [Svelte 5, SvelteKit, TypeScript, Tailwind CSS, Chart.js, Rust, Tauri, SQLite, DuckDB, WebSockets]
activity:
  title: My commits per month
  months:
    - ['2026-05', 1]
    - ['2026-06', 15]
    - ['2026-07', 74]
    - ['2026-08', 56]
    - ['2026-09', 73]
---

This is the product I'm building on my own: a place to design a trading strategy, test it against years of real market data, and get told when the market lines up with it. It started as a web app and is becoming a desktop app, with the heavy lifting done in Rust on your own computer.

I design it, build it and ship it myself. This is how it has come together so far, in the order the commits happened.

<p class="kicker">June 2026</p>

## A strategy builder for breakouts

Most strategy tools ask you to write formulas. This one lets you draw the idea instead. The heart of it is a candle builder: you mark out the boxes a breakout needs, the setup, the breakout itself and the stop loss, and the builder turns them into rules a backtest can run.

Strategies come in two modes, intraday and delivery, each with its own rules, and both run on a real backtest engine. Within the first month a backtest could report profit factor, leverage, per company results and the full trade history behind every number.

<p class="kicker">July 2026</p>

## Radar, a scanner that watches for you

A backtest tells you a strategy worked in the past. Radar tells you when it's setting up now. It scans a group of companies against your strategy and refreshes live over WebSockets. Click a result and a candlestick chart shows the setup, the breakout and the target, drawn right on the candles.

Around it came the rest of a real product: sign in with secure tokens, alerts and notifications, help docs, and a dashboard that shows the state of everything at a glance.

<p class="kicker">August 2026</p>

## Smarter, and more social

August made the builder richer and the results easier to read. I added technical indicators to the builder, a position sizing step, and a Strategy Analysis view that compares backtests with profit factor and drawdown charts, filterable by group of companies.

Then I opened it up. An AI strategy builder helps put a strategy together. A Community page lets people publish strategies, like them and fork them into their own builder. An Expert Analysis page lets experts share their analysis and strategies. Backtests moved to a queue, so long runs no longer hold up the app.

<p class="kicker">September 2026</p>

## Moving the engine onto your computer

In September I started the biggest change yet: turning it into a desktop app with Tauri. I planned it in phases and shipped them in a single day: the desktop shell, a local SQLite database for strategies and results, a local market data store in DuckDB, and a backtest engine in Rust that reads straight from it.

> The engine, the market data and your broker details all live on your machine now.

The Rust core now holds the backtest engine, the strategy language it runs, the indicators and the scanner, about ten thousand lines in all. Backtests run against data on your own disk, so they're fast and they work without waiting on a server.

<p class="kicker">September 2026</p>

## Bring your own data

A backtest is only as good as its data, so the app pulls history straight from your broker. It connects to five Indian brokers: Angel One, Dhan, Upstox, Zerodha and Groww, covering both NSE and BSE.

Syncing years of history from five different APIs takes care. Sync runs in parallel, waits out rate limits and resumes where it stopped. It fills in only the history that's missing, finds gaps in what it already has, and compares coverage across brokers. A Data page shows exactly what's stored, for which companies and timeframes, and you can also import CSV files.

<p class="kicker">Late September 2026</p>

## Private by design

Connecting a broker means trusting an app with your login, so those details are encrypted and never leave your computer. The desktop app signs in to your account, supports password resets, and lets more than one person use the same computer, each with their own data.

I also redesigned every public page: sign in, sign up, password reset, terms, privacy and about. The artwork at the top of this page comes from the new sign in screen.

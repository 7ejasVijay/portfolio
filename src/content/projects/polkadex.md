---
title: Polkadex
context: Wow Internet Labz, July 2025 to now
tagline: Keeping a decentralized exchange's blockchain alive, upgraded and secure, from the orderbook up to the node.
period: July 2025 to now
cover:
  src: /projects/polkadex.webp
  alt: The Polkadex Orderbook trading screen, with the price chart, live orderbook, recent trades and buy/sell panel
  caption: The Polkadex Orderbook, the trading app that runs on top of the chain.
stats:
  - { value: '1,000', label: 'errors worked through in the node upgrade' }
  - { value: '68', label: 'commits to the Polkadex node' }
  - { value: '8', label: 'pull requests' }
stack: [Rust, Substrate, Hyperbridge, ISMP, Try runtime, GraphQL, PostgreSQL, TimescaleDB, AWS, GitHub Actions]
links:
  - { label: Polkadex node on GitHub, href: 'https://github.com/Polkadex-Substrate/polkadex-node' }
  - { label: polkadex.ee, href: 'https://polkadex.ee/' }
  - { label: hyperbridge.network, href: 'https://hyperbridge.network/' }
activity:
  title: My commits to the Polkadex node, per month
  months:
    - ['2025-09', 5]
    - ['2025-10', 17]
    - ['2025-11', 0]
    - ['2025-12', 0]
    - ['2026-01', 2]
    - ['2026-02', 10]
    - ['2026-03', 0]
    - ['2026-04', 15]
    - ['2026-05', 3]
    - ['2026-06', 4]
    - ['2026-07', 1]
    - ['2026-08', 10]
    - ['2026-09', 1]
---

Polkadex is a decentralized exchange built as its own blockchain on Substrate. It promises the speed of a centralized exchange with a real orderbook, while users keep custody of their own keys. I've worked on it at Wow Internet Labz since July 2025, on the blockchain node itself and on the orderbook that runs on top of it.

This is that story, told in order from the first day.

<p class="kicker">July to August 2025</p>

## A thousand errors

The node was running on old versions of Substrate and its dependencies, and it needed a major upgrade before anything else could happen. Upgrading a blockchain node isn't a version bump: every API that changed between releases breaks somewhere in the code. When I started on it in July, the upgraded node produced **around 1,000 errors**. I worked through them one by one until the whole thing built again.

<p class="kicker">September 2025</p>

## Producing blocks again

On 8 September the upgraded node went into a fresh repository as my first commit (about 102,000 lines). From there I refactored the service and chain specification modules, upgraded the dependencies at the root and node level, cleared out warnings and bumped the spec version to match the new configuration.

That work landed as my first pull request, **"Node producing blocks with custom specification"** (#1), merged on 18 September: the upgraded node was producing blocks again.

<p class="kicker">October 2025</p>

## Making upgrades safe

A blockchain can't be redeployed like a web app. Every change ships as a runtime upgrade to a live network, so you need to test it against real chain state first. That's what Substrate's try runtime tool is for, and it was broken. I fixed it (#2, merged 13 October), which gave the team a way to dry run every future migration.

The rest of the month went into stability. I added memory tracking to the RPC server (jsonrpsee), the liquidity mining, snapshot and trading pair pallets to find where memory was going, and sorted out dependency conflicts in `rust_decimal` and the SCALE codec (#4, merged 30 October).

<p class="kicker">January to February 2026</p>

## Wiring in Hyperbridge

Moving assets between blockchains is where a lot of exchanges get hacked, usually because a bridge trusts a small group of relayers or a multisig to say "yes, this deposit really happened". [Hyperbridge](https://hyperbridge.network/) takes a different approach: it's infrastructure for connecting blockchains that verifies messages between them with cryptographic proofs, using the ISMP protocol, so nobody has to be trusted in the middle.

Polkadex planned to run its deposits and withdrawals through it, and I configured the runtime to talk to Hyperbridge: the ISMP settings, the host state machine and coprocessor, the aggregator URL and the network's SS58 address prefix.

<figure>
  <img src="/projects/hyperbridge.webp" alt="The Hyperbridge homepage: Interoperability done right, with chain logos connected through the Hyperbridge core" loading="lazy" />
  <figcaption>Hyperbridge: infrastructure for connecting blockchains, built on cryptographic proofs rather than trusted relayers.</figcaption>
</figure>

Alongside that I reorganized the runtime's pallets, fixed how quote prices were calculated for the native token, and temporarily switched off two pallets that clashed over a 256 bit integer type. It all merged as #5 on 20 February.

<figure class="pair">
  <img src="/projects/polkadex-bridge.webp" alt="The bridge screen, moving ETH from the Sepolia testnet to the Polkadex testnet" loading="lazy" />
  <img src="/projects/polkadex-hyperbridge.webp" alt="Polkadex's section on transfers between chains: verified end to end, with minimal trust, powered by Hyperbridge" loading="lazy" />
  <figcaption>Left: the bridge, moving assets from Ethereum (Sepolia testnet) onto Polkadex. Right: how Polkadex describes Hyperbridge transfers.</figcaption>
</figure>

<p class="kicker">April 2026</p>

## The big migration

April was my busiest month (15 commits), and most of it was one change: asset IDs had to grow from 32 bit to 128 bit integers. That touches storage everywhere, so I wrote the migrations to move existing data safely, including the token gateway's local assets and storage keys, then fixed the mock runtimes and integration tests that broke along the way.

I also removed the parachain (Cumulus) crates the mainnet node no longer needed, fixed benchmarking and regenerated the pallet weights, cleaned up every compiler warning, and in May enabled RocksDB support and fixed a snapshot bug in the validator.

<p class="kicker">June to July 2026</p>

## High frequency trading

The exchange moved to a new high frequency trading (HFT) pallet. I integrated it and removed the token gateway and Hyperbridge pallets it replaced (#6, merged 4 June), then wrote a migration to clear out stale ISMP requests. In July I fixed the HFT pallet's decimal conversion, so token amounts scale correctly in both directions between Ethereum's ERC20 token format and Polkadex's own.

<p class="kicker">August 2026</p>

## The security audit

The chain went through a security audit, and I worked through the fixes across the runtime, the orderbook settlement pallet (OCEX) and the THEA bridge pallet: critical issues first, then high severity ones. Among them, I put a bound on how much a single withdrawal could drain through the XCM helper, made the bridge reject replayed messages it had already executed, and enforced a safe minimum fork period. I kept a running fix log so the team could track what was done and what remained open.

To make the upcoming mainnet upgrade safer, I also disconnected the pallets that were no longer in use (OCEX, ISMP, liquidity mining and THEA) and bumped the runtime to spec version 392.

<p class="kicker">September 2026</p>

## Clearing the way to mainnet

Mainnet still runs spec 373, so spec 392 has to be right before it goes live. In **#14** (in review) I fixed six findings that would have blocked or endangered that upgrade. The most serious: when the sudo pallet was first removed in 2024, its storage was never wiped, and it still held the 2021 genesis root key.

> Adding the pallet back would have handed root control of mainnet to whoever holds a five year old key.

I removed it again and added a guarded migration that clears the whole storage prefix. The same PR guards four older migrations so they can't run again and do damage on future upgrades, closes a path that let any account with enough tokens halt the chain, blocks asset and contract calls through restricted proxies, reserves asset ID 0 and tightens an admin permission to root only, with unit tests for the checks the try runtime tool can't exercise.

In **#15** (in review) I made the node easier to run: `.deb` and `.rpm` packages that install it as a proper system service, and a release pipeline where pushing a version tag builds the binary and both packages, publishes checksums and opens a draft release for a human to approve. Every GitHub Action is pinned to an exact commit, with the least privilege it needs.

<figure>
  <img src="/projects/polkadex-prs.webp" alt="My eight pull requests on the Polkadex node repository on GitHub" loading="lazy" />
  <figcaption>My pull requests on the Polkadex node, from the first node upgrade to the mainnet fixes.</figcaption>
</figure>

<p class="kicker">Alongside the node</p>

## The orderbook

The orderbook is the part traders actually feel: it matches buy and sell orders at exchange speed and settles them on the chain. It isn't one program but several services working together, and I got the whole system running end to end. Around it I built Rust backend components and GraphQL APIs for orderbook and transaction data, backed by PostgreSQL with TimescaleDB. I also migrated the core storage from Amazon Timestream to TimescaleDB and replaced AWS AppSync and Lambda with a Rust backend, which cut infrastructure costs without losing performance. That code lives in a private repository, which is why this story follows the public node.

<figure>
  <img src="/projects/polkadex-orderbook.webp" alt="A live orderbook showing asks in red, bids in green and the spread between them" loading="lazy" />
  <figcaption>The orderbook: asks above, bids below, matched off the chain and settled on it.</figcaption>
</figure>

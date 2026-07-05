// ─────────────────────────────────────────────
// EDIT YOUR QUESTIONS HERE
// type: "multi" (4 options) | "tf" (true/false)
// image: optional, put file in /public/images/ and write "/images/name.png"
// correct: index of the right answer (0-based)
// ─────────────────────────────────────────────

export const QUESTIONS = [
  {
    type: "multi",
    q: "On a typical public blockchain, your wallet is...",
    options: [
      "Fully anonymous",
      "Private by default",
      "An open book: balance and history visible to anyone",
      "Visible only to validators"
    ],
    correct: 2,
    explain: "On most public blockchains, anyone can view your wallet balance, transfers and transaction history if they know your address."
  },
  {
    type: "tf",
    q: "STRK20 is a new token standard on Starknet that supports shielded (hidden) balances.",
    correct: 0,
    explain: "True. STRK20 brings shielded balances and private transfers to ERC-20 style tokens, natively on Starknet."
  },
  {
    type: "multi",
    q: "What is the key technology that enables STRK20's native privacy on Starknet?",
    options: [
      "Multi-signature wallets",
      "Smart contract proxies",
      "Zero-Knowledge STARK proofs",
      "Bitcoin mining"
    ],
    correct: 2,
    explain: "STRK20 is powered by STARK proofs, allowing transactions and balances to remain private while still being cryptographically verified by the network."
  },
  {
    type: "multi",
    image: "/images/q4-shield.png",
    q: "This is Ready Wallet on Starknet. What happens when you press 'Shield' for your STRK tokens?",
    options: [
      "Your tokens are deleted",
      "Your tokens are sent to a mixer",
      "Your STRK balance moves into a private, hidden state",
      "Your account gets frozen"
    ],
    correct: 2,
    explain: "One tap in Ready Wallet shields your STRK. Only you can see the balance, and you can unshield anytime. No mixers, no separate apps."
  },
  {
    type: "multi",
    q: "What makes Starknet's privacy approach different from a mixer like Tornado Cash?",
    options: [
      "It's slower",
      "Privacy is built into the protocol and works inside DeFi apps",
      "It only works for Bitcoin",
      "It requires KYC for every transaction"
    ],
    correct: 1,
    explain: "Instead of a separate 'privacy island', Starknet embeds privacy at the protocol level. You can swap, lend and stake while shielded."
  },
  {
    type: "tf",
    q: "With Private DeFi, you can swap shielded USDC to shielded ETH without revealing the amount.",
    correct: 0,
    explain: "True. That's the real unlock: private swaps, lending, staking and LP. Same liquidity, zero surveillance."
  },
  {
    type: "multi",
    q: "How much does it currently cost to shield your assets on Starknet?",
    options: ["1 STRK", "2 STRK", "4 STRK", "10 STRK"],
    correct: 2,
    explain: "Shielding your assets currently costs approximately 4 STRK, allowing you to move funds into a private balance and use Private DeFi."
  },
  {
    type: "multi",
    q: "What is strkBTC?",
    options: [
      "A Starknet meme coin",
      "Bitcoin on Starknet with shielded balances and private transfers",
      "A hardware wallet",
      "A staking pool for STRK"
    ],
    correct: 1,
    explain: "strkBTC brings Bitcoin to Starknet with a privacy layer: hidden balances, private transfers, ready for DeFi."
  },
  {
    type: "multi",
    q: "You're a company paying employee salaries onchain. What's the biggest benefit of Private DeFi?",
    options: [
      "Lower gas fees",
      "Faster transactions",
      "Employee salaries remain private while payments stay verifiable",
      "Unlimited payroll transactions"
    ],
    correct: 2,
    explain: "Private payroll protects employees' financial privacy while still allowing organizations to verify payments when needed."
  },
  {
    type: "multi",
    q: "Starknet's privacy vision includes 'selective disclosure'. What does that mean?",
    options: [
      "Everything is always public",
      "You can prove specific facts to specific parties without exposing everything",
      "Only exchanges can see your data",
      "Your data is deleted after 30 days"
    ],
    correct: 1,
    explain: "You stay private by default, but can choose to reveal what's needed, for example to an auditor, employer or regulator. Privacy isn't about hiding; it's about control."
  }
];

export const RANKS = [
  { min: 0, icon: "🐋", title: "Exposed Whale", desc: "Every bot on the chain is following you. Time to learn shielding!" },
  { min: 4, icon: "👀", title: "Public Wallet", desc: "You know the basics, but your balance is still showing." },
  { min: 7, icon: "🔒", title: "Shield Apprentice", desc: "Solid knowledge. Your privacy game is almost there." },
  { min: 9, icon: "🛡", title: "Privacy Master", desc: "Nothing to track. You ARE the privacy engine." }
];

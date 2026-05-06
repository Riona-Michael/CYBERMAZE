export const storyChains = [
  // =========================
  // 🏦 BANK OTP SCAM CHAIN
  // =========================
  {
    id: "bank_otp",
    title: "Bank OTP Scam",
    stages: [
      {
        id: 1,
        text: "You receive a call from 'Bank Support' saying your account will be blocked unless you share your OTP.",
        choices: {
          safe: { text: "Refuse and hang up", next: 2 },
          danger: { text: "Share OTP immediately", next: "fail" }
        }
      },
      {
        id: 2,
        text: "The caller threatens legal action and says police will contact you.",
        choices: {
          safe: { text: "Stay calm and call official bank number", next: 3 },
          danger: { text: "Panic and share account number", next: "fail" }
        }
      },
      {
        id: 3,
        text: "Official bank confirms fraud attempt and thanks you for reporting.",
        choices: {
          safe: { text: "Report number and secure account", next: "success" },
          danger: { text: "Ignore and move on", next: "neutral" }
        }
      }
    ]
  },
  {
    id: "romance_scam",
    title: "Romance Manipulation",
    stages: [
      {
        id: 1,
        text: "You meet someone charming online. After 2 weeks, they express deep feelings.",
        choices: {
          safe: { text: "Stay cautious and avoid oversharing", next: 2 },
          danger: { text: "Share personal details freely", next: 2 }
        }
      },
      {
        id: 2,
        text: "They suddenly say they need urgent medical money.",
        choices: {
          safe: { text: "Ask for hospital proof and verify identity", next: 3 },
          danger: { text: "Send money emotionally", next: "fail" }
        }
      },
      {
        id: 3,
        text: "You discover stolen photos were used. It was a fake identity.",
        choices: {
          safe: { text: "Block and report the account", next: "success" },
          danger: { text: "Continue chatting", next: "fail" }
        }
      }
    ]
  },
  {
    id: "fake_app",
    title: "Free Premium App",
    stages: [
      {
        id: "start",
        text: "You find a website offering a paid app for free download.",
        choices: {
          safe: { text: "Download from official store only", next: "success" },
          danger: { text: "Download APK from unknown site", next: "fail" }
        }
      }
    ]
  },
  {
    id: "crypto_scam",
    title: "The Crypto Investment",
    stages: [
      {
        id: "start",
        text: "A friend tells you about a new crypto coin that will '100x in a week'. You are tempted.",
        choices: {
          safe: { text: "Research before investing", next: "research" },
          danger: { text: "Invest immediately", next: "fail" }
        }
      },
      {
        id: "research",
        text: "You discover the project has no real team and fake reviews.",
        choices: {
          safe: { text: "Avoid the scam", next: "success" },
          danger: { text: "Invest anyway", next: "fail" }
        }
      }
    ]
  },
  {
    id: "bank_call",
    title: "Urgent Bank Alert",
    stages: [
      {
        id: "start",
        text: "Someone calls claiming to be from your bank asking for your OTP.",
        choices: {
          safe: { text: "Hang up and call official bank number", next: "success" },
          danger: { text: "Share OTP to fix issue", next: "fail" }
        }
      }
    ]
  },
  {
    id: "lottery",
    title: "Congratulations! You Won!",
    stages: [
      {
        id: "start",
        text: "You receive an email saying you won $50,000 but must pay a small processing fee.",
        choices: {
          safe: { text: "Ignore the email", next: "success" },
          danger: { text: "Pay the processing fee", next: "fail" }
        }
      }
    ]
  },
  {
    id: "public_wifi",
    title: "Free Airport WiFi",
    stages: [
      {
        id: "start",
        text: "You connect to free public WiFi and want to check your bank account.",
        choices: {
          safe: { text: "Use mobile data instead", next: "success" },
          danger: { text: "Login to bank on public WiFi", next: "fail" }
        }
      }
    ]
  },
  {
    id: "sim_swap",
    title: "SIM Swap Attack",
    stages: [
      {
        id: 1,
        text: "Suddenly your phone loses signal. Minutes later, you receive email alerts about password reset attempts.",
        choices: {
          safe: { text: "Call telecom provider immediately", next: 2 },
          danger: { text: "Ignore and wait for signal", next: "fail" }
        }
      },
      {
        id: 2,
        text: "Telecom confirms duplicate SIM request was made.",
        choices: {
          safe: { text: "Block SIM & inform bank", next: 3 },
          danger: { text: "Only block SIM", next: "neutral" }
        }
      },
      {
        id: 3,
        text: "Bank freezes suspicious transactions in time.",
        choices: {
          safe: { text: "Enable 2FA on all accounts", next: "success" },
          danger: { text: "Do nothing further", next: "neutral" }
        }
      }
    ]
  },
  {
    id: "deepfake",
    title: "Deepfake Emergency",
    stages: [
      {
        id: 1,
        text: "You receive a video call from your cousin asking for urgent money. The voice sounds slightly robotic.",
        choices: {
          safe: { text: "Ask personal verification question", next: 2 },
          danger: { text: "Transfer money instantly", next: "fail" }
        }
      },
      {
        id: 2,
        text: "They avoid answering your verification question.",
        choices: {
          safe: { text: "Call cousin directly", next: 3 },
          danger: { text: "Believe emotional story", next: "fail" }
        }
      },
      {
        id: 3,
        text: "Your cousin confirms their account was cloned.",
        choices: {
          safe: { text: "Report fake account", next: "success" },
          danger: { text: "Ignore reporting", next: "neutral" }
        }
      }
    ]
  },
  {
    id: "phishing_chain",
    title: "Phishing Email Trap",
    stages: [
      {
        id: 1,
        text: "You receive an email from 'HR' with subject: Salary Revision Document.",
        choices: {
          safe: { text: "Check sender domain carefully", next: 2 },
          danger: { text: "Download attachment", next: "fail" }
        }
      },
      {
        id: 2,
        text: "The domain looks slightly misspelled: hr@compaany.com",
        choices: {
          safe: { text: "Report to IT security", next: 3 },
          danger: { text: "Assume typo and continue", next: "fail" }
        }
      },
      {
        id: 3,
        text: "IT confirms it was a credential harvesting attack.",
        choices: {
          safe: { text: "Enable multi-factor authentication", next: "success" },
          danger: { text: "Do nothing", next: "neutral" }
        }
      }
    ]
  },
  // =========================
  // 🏢 WORKPLACE USB ATTACK
  // =========================
  {
    id: "usb_attack",
    title: "Corporate USB Trap",
    stages: [
      {
        id: 1,
        text: "You find a USB labeled 'Confidential Salary Data' near your desk.",
        choices: {
          safe: { text: "Submit to IT security", next: 2 },
          danger: { text: "Plug it into your computer", next: "fail" }
        }
      },
      {
        id: 2,
        text: "IT team says attackers drop infected USB drives intentionally.",
        choices: {
          safe: { text: "Attend cyber awareness training", next: 3 },
          danger: { text: "Ignore and walk away", next: "neutral" }
        }
      },
      {
        id: 3,
        text: "You help IT create awareness for others in office.",
        choices: {
          safe: { text: "Promote cyber hygiene", next: "success" },
          danger: { text: "Do nothing further", next: "neutral" }
        }
      }
    ]
  }
];
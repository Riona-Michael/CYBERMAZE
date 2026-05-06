export const phishingEmails = [

  // 🔴 TYPO SQUATTING
  { text: "support@arnazon-security.com", correct: true },
  { text: "security@amaz0n.com", correct: true },
  { text: "noreply@paypa1.com", correct: true },
  { text: "alerts@faceb00k-login.com", correct: true },

  // 🟢 LEGITIMATE
  { text: "security@amazon.com", correct: false },
  { text: "no-reply@paypal.com", correct: false },
  { text: "support@linkedin.com", correct: false },

  // 🔴 SUBDOMAIN TRICKS
  { text: "amazon.support.verify-login.com", correct: true },
  { text: "paypal.secure-checkout.co", correct: true },
  { text: "google.verify-account.net", correct: true },

  // 🔴 GOVERNMENT IMPERSONATION
  { text: "refund@gov-taxrebate.in", correct: true },
  { text: "notice@income-tax-dept-alert.in", correct: true },
  { text: "services@uidai-support.co", correct: true },

  // 🟢 REALISTIC SAFE
  { text: "no-reply@uidai.gov.in", correct: false },

  // 🔴 CLOUD STORAGE SCAMS
  { text: "fileshare@dropbox-support.co", correct: true },
  { text: "security@icloud-verify-login.com", correct: true },
  { text: "account@onedrive-alert.net", correct: true },

  // 🔴 CRYPTO SCAMS
  { text: "bonus@binance-airdrop.net", correct: true },
  { text: "support@coinbase-secure.io", correct: true },
  { text: "admin@crypto-invest-fast.co", correct: true },

  // 🔴 DELIVERY SCAMS
  { text: "tracking@fedex-delivery-alert.com", correct: true },
  { text: "parcel@dhl-customs-clearance.co", correct: true },
  { text: "delivery@amaz0n-shipping.com", correct: true },

  // 🔴 STREAMING SERVICES
  { text: "billing@netfIix-renewal.com", correct: true }, // capital i trick
  { text: "support@spotify-premium-alert.co", correct: true },
  { text: "alerts@hotstar-membership.net", correct: true },

  // 🔴 CEO FRAUD / BUSINESS EMAIL COMPROMISE
  { text: "ceo@yourcompany-support.com", correct: true },
  { text: "accounts@company-payroll-update.co", correct: true },
  { text: "finance@urgent-wire-transfer.net", correct: true },

  // 🔴 PASSWORD RESET SCAMS
  { text: "reset@appleid-verification.com", correct: true },
  { text: "security@google-account-warning.net", correct: true },
  { text: "password@instagram-alert.co", correct: true },

  // 🔴 BANKING IMPERSONATION
  { text: "alerts@hdfc-secure-login.com", correct: true },
  { text: "support@sbi-verification.net", correct: true },
  { text: "bank@icici-account-update.co", correct: true },

  // 🟢 REALISTIC SAFE BANK FORMAT
  { text: "alerts@hdfcbank.com", correct: false },
  { text: "customercare@sbi.co.in", correct: false },

  // 🔴 JOB SCAMS
  { text: "hr@tcs-careers-update.net", correct: true },
  { text: "recruitment@infosys-job-alert.co", correct: true },

  // 🔴 INVESTMENT SCAMS
  { text: "returns@stock-guarantee-profit.com", correct: true },
  { text: "vip@forex-double-money.net", correct: true },

  // 🔴 UNICODE / HOMOGRAPH STYLE (visual trick)
  { text: "support@microsоft-security.com", correct: true },
  // (the 'o' in microsoft is Cyrillic)

  // 🔴 UPI / PAYMENT SCAMS
  { text: "payment@upi-refund-alert.co", correct: true },
  { text: "support@phonepe-verification.net", correct: true },

  // 🟢 SAFE GOOGLE FORMAT
  { text: "accounts-noreply@google.com", correct: false },

];
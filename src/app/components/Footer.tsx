import Link from "next/link"

const Footer = () => (
  <footer className="py-12 bg-gray-100 px-6 text-center text-gray-700">
    <div className="space-y-1">
      <p>Jennifer Hahm, Ph.D., Licensed Psychologist</p>
      <p><a href="mailto:jennifer@drjenniferhahm.com">serena@blakepsychology.com</a> | Phone: (323) 555-0192 | Fax: (248) 939‑8190</p>
      <p>28175 Haggerty Rd, Novi, MI 48377</p>
    </div>
    <div className="mt-6 space-x-4">
      <Link href="/">Home</Link>
      <Link href="https://www.drjenniferhahm.com/good-faith-estimate">Good Faith Estimate</Link>
      <Link href="https://drjenniferhahm.sessionshealth.com/">Client Portal</Link>
    </div>
    <p className="mt-4 text-sm">© {new Date().getFullYear()} Dr. Serena Blake, PsyD (Clinical Psychologist), PLLC. All rights reserved.</p>
  </footer>
)

export default Footer

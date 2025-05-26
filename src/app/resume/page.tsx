import PageWrapper from '../pagewrapper';

export const metadata = {
  title: "Profile",
};

export default function Profiles() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto space-y-8 text-white p-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">William Cooper Ward</h1>
          <p>Naples, FL</p>
          <div className="mt-4 space-x-4">
            <a
              href="https://github.com/wcward3302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/williamcooperward"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-700 rounded hover:bg-blue-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <Section title="Professional Summary">
          <p>
            Detail-oriented and highly motivated Software Engineering graduate with a strong foundation in full-stack development, cybersecurity, and AI-powered applications. Proven ability to lead teams, build robust web applications, and communicate complex technical concepts. Passionate about solving real-world problems through innovative software solutions.
          </p>
        </Section>

        <Section title="Education">
          <p>
            <strong>Florida Gulf Coast University</strong> – Bachelor of Science in Software Engineering<br />
            Graduation: May 2025 | GPA: 3.92 <br />
            Summa Cum Laude<br />
          </p>
        </Section>

        <Section title="Work Experience">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Senior Project Intern – Full-stack Developer</strong><br />
              Department of Homeland Security – Fort Myers, FL<br />
              • Contributed to Netspider, an open-source web scraping tool.<br />
              • Implemented scheduled scraping with Python and Selenium.<br />
              • Built multilingual keyword translation module.<br />
              <em>Stack: Python Flask, Node.js w/ Electron, Selenium</em>
            </li>
            <li>
              <strong>Student Assistant I</strong><br />
              NCAR – Boulder, CO<br />
              • Rotated through HPC support teams: user services, networks, systems.<br />
              • Hands-on experience with scientific computing infrastructure.
            </li>
            <li>
              <strong>IT Service Desk Technician</strong><br />
              Front Range Community College – Westminster, CO<br />
              • Provided tech support: login, Wi-Fi, printing, software/hardware issues.<br />
              • Supported Office, Outlook, Windows, Banner, D2L.
            </li>
          </ul>
        </Section>

        <Section title="Projects">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>“AD some AI”</strong> – GPT-4.o & DALL·E-powered ad generator<br />
              • 2nd Place, EagleHacks 2025 + Sponsor Winner<br />
              • Flask frontend, FastAPI backend, local/OpenAI model integration.
            </li>
            <li>
              <strong>Soil Organic Carbon Mapping & AI Prediction</strong><br />
              • Led team of 8 to build carbon prediction web app hosted on AWS.
            </li>
            <li>
              <strong>Smart Invoice Automation</strong><br />
              • 3rd Place, EagleHacks 2024<br />
              • Generated invoices from natural language using GPT-3.5 + Next.js.
            </li>
            <li>
              <strong>Cybersecurity Awareness Quiz</strong><br />
              • Built phishing quiz web app with Next.js, Tailwind, PostgreSQL.
            </li>
            <li>
              <strong>Duo 2FA Token Cleanup</strong><br />
              • Automated Python tool for bi-weekly inactive-user deactivation at NCAR.
            </li>
          </ul>
        </Section>

        <Section title="Skills">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Languages/Frameworks:</strong> Python, C++, SQL, JavaScript, HTML/CSS, React, NextJS</li>
            <li><strong>Tools/Platforms:</strong> Git/GitHub, Flask, FastAPI, Selenium, Postgres, Vercel, Heroku, AWS</li>
            <li><strong>Soft Skills:</strong> Leadership, Critical Thinking, Problem Solving, Communication, Quick Learner</li>
          </ul>
        </Section>
      </div>
    </PageWrapper>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 bg-white bg-opacity-10 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

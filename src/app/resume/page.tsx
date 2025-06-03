import PageWrapper from '../pagewrapper';

export const metadata = {
  title: "Profile",
};

export default function Profiles() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col space-y-8 py-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">William Cooper Ward</h1>
          <p className="text-xl">Naples, FL</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/wcward3302"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black/80 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/williamcooperward"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <Section title="Professional Summary">
          <p className="text-lg leading-relaxed">
            Detail-oriented and highly motivated Software Engineering student with a strong foundation in full-stack development, cybersecurity, and AI-powered applications. Proven ability to lead teams, build robust web applications, and communicate complex technical concepts. Passionate about solving real-world problems through innovative software solutions.
          </p>
        </Section>

        <Section title="Education">
          <p className="text-lg leading-relaxed">
            <span className="font-semibold special-text">Bachelor of Science in Software Engineering</span><br />
            Florida Gulf Coast University – May 2025<br />
            GPA: 3.9
          </p>
        </Section>

        <Section title="Work Experience">
          <ul className="space-y-6">

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Senior Project Intern – Full-stack Developer, Netspider Team
              </h3>
              <p className="text-lg mb-2">Department of Homeland Security – Fort Myers, FL</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Contributed to Netspider, an open-source web scraping tool for identifying online indicators of criminal activity.</li>
                <li>Implemented scheduled scraping functionality using Python and Selenium.</li>
                <li>Developed automatic keyword translation module to support multilingual scraping.</li>
              </ul>
              <p className="text-sm mt-2 italic">Tech Stack: Python Flask, Node.js w/ Electron, Selenium</p>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Computational and Information Systems Laboratory (CISL) Student Assistant I
              </h3>
              <p className="text-lg mb-2">National Center for Atmospheric Research (NCAR) – Boulder, CO</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Rotational student position in a high-performance computing lab.</li>
                <li>Supported user services, network engineering, enterprise systems, and data support teams.</li>
                <li>Gained hands-on experience with large-scale scientific computing infrastructure.</li>
              </ul>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                IT Service Desk Student Technician
              </h3>
              <p className="text-lg mb-2">Front Range Community College – Westminster, CO</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Provided front-line tech support for students and staff.</li>
                <li>Resolved issues related to login credentials, Wi-Fi, printing, and basic hardware/software troubleshooting.</li>
                <li>Supported Microsoft Office, Outlook, Windows OS, Banner, and D2L systems.</li>
              </ul>
            </li>

          </ul>
        </Section>

        <Section title="Projects">
          <ul className="space-y-6">
            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                “AD some AI” – AI-Powered Advertisement Generator
              </h3>
              <p className="text-base italic mb-2">
                EagleHacks 2025 Team ‘Git Push –Force’ – 2nd Place & EightPoint Sponsor Challenge Winner
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Built a SaaS platform for rapid ad image generation using GPT-4.o and DALL·E.</li>
                <li>Created frontend in Flask and backend API with FastAPI.</li>
                <li>Integrated Ollama local LLMs and OpenAI models; hosted and deployed a self-contained web app.</li>
              </ul>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Soil Organic Carbon Mapping & AI Prediction
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Led a team of 8 in building a web application to map Soil Organic Carbon (SOC) and predict carbon content using custom-trained AI models.</li>
                <li>Directed requirements gathering, UI/UX design, and end-to-end full-stack development.</li>
                <li>Stack: Python Flask, AWS cloud-hosted infrastructure, custom ML models</li>
              </ul>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Smart Invoice Automation
              </h3>
              <p className="text-base italic mb-2">
                EagleHacks 2024 Team ‘Coding Cowboys’ – 3rd Place Winner
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Designed and built a web application for invoice generation from natural language input.</li>
                <li>Implemented GPT-3.5 API integration with Next.js frontend, hosted via Vercel.</li>
              </ul>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Cybersecurity Awareness Online Quiz
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Led a team of 8 in developing a web-based quiz application on phishing scams.</li>
                <li>Oversaw requirements gathering, UI/UX design, and front-end development.</li>
                <li>Stack: Next.js, Tailwind CSS, JavaScript, PostgreSQL; hosted on Vercel.</li>
              </ul>
            </li>

            <li className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text text-lg">
                Duo Two-Factor Authentication Token Cleanup
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Developed a Python script to query Duo API and identify inactive users.</li>
                <li>Automated token deactivation for users inactive &gt;6 months; ran bi-weekly.</li>
                <li>Used by Shared Infrastructure Section at NCAR.</li>
              </ul>
            </li>
          </ul>
        </Section>

        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text mb-2">Languages & Frameworks</h3>
              <p>Python, C++, SQL, JavaScript, HTML/CSS, React, NextJS</p>
            </div>
            <div className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text mb-2">Tools & Platforms</h3>
              <p>Git/GitHub, Flask, FastAPI, Selenium, Postgres, Vercel, Heroku, AWS</p>
            </div>
            <div className="bg-gray-800/20 p-4 rounded-lg">
              <h3 className="font-semibold special-text mb-2">Soft Skills</h3>
              <p>Leadership, Critical Thinking, Problem Solving, Communication, Quick Learner</p>
            </div>
          </div>
        </Section>
      </div>
    </PageWrapper>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold special-text">{title}</h2>
      {children}
    </div>
  );
}

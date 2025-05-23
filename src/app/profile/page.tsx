import PageWrapper from './../pagewrapper';

export const metadata = {
    title: "Profile"
}


export default function Profiles() {
  return (
    <PageWrapper>
      <div className="max-w-xl mx-auto text-center p-6 bg-white bg-opacity-10 rounded-2xl shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-6">Profiles</h1>
        <ul className="space-y-4">
          <li>
            <a
              href="https://github.com/wcward3302"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition"
            >
              <img src="/github-mark.png" alt="GitHub" className="w-6 h-6" />
              <span className="text-lg font-medium">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/williamcooperward"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-4 px-6 py-3 bg-blue-700 rounded-xl hover:bg-blue-600 transition"
            >
              <img src="/linkedin-mark.png" alt="LinkedIn" className="w-6 h-6" />
              <span className="text-lg font-medium">LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </PageWrapper>
  );
}

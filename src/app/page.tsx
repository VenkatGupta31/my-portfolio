import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gundla Venkateshwarlu - Portfolio</title>
        <meta name="description" content="Full Stack Web Developer Resume" />
      </Head>

      <section id="profile" className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Gundla Venkateshwarlu</h1>
        <p className="text-lg mb-2">Full Stack Web Developer</p>
        <p className="text-sm mb-4">
          venky_leo31@outlook.com | +91 90001 85868 |{" "}
          <a href="https://github.com/VenkatGupta31">GitHub</a> |{" "}
          <a href="https://www.linkedin.com/in/venkat-gupta/">LinkedIn</a>
        </p>
        <p>
          Passionate Full Stack Web developer with 9+ years of experience in frontend and full-stack development. Skilled in agile collaboration and delivering high-quality web applications.
        </p>
      </section>

      <section id="skills" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc ml-6 space-y-1">
          <li>JavaScript / TypeScript, HTML5, CSS / TailwindCSS</li>
          <li>NextJs / ReactJs, Redux / Zustand</li>
          <li>Jest / React Testing Library, NestJs, NodeJs / ExpressJs</li>
          <li>REST API, PrismaORM, PostgreSQL / OpenSearch, GraphQL</li>
          <li>GitLab / Bitbucket, Jira, Agile, AWS CI/CD</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section id="experience" className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">PEI Group — Senior Software Engineer</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Jun 2024 – Present, Bengaluru, KA
            </p>
            <ul className="list-disc ml-6">
              <li>Multi-tenant NextJs applications & APIs for alternative assets data.</li>
              <li>Login/register forms using react-hook-form and Zephr Identity API.</li>
              <li>Editorial data display using Headless WordPress & GraphQL API.</li>
              <li>Onboarding wizard forms using shadcn components.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Preqin India Pvt Ltd — Senior Engineer II (Frontend)</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Jan 2019 – May 2024, Bengaluru, KA
            </p>
            <ul className="list-disc ml-6">
              <li>Portfolio modules with high-charts & react-table.</li>
              <li>Reusable components for dashboards & advanced search.</li>
              <li>Micro-frontend applications integrated into main platform.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Hexagon (HCCI) — Software Consultant</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Jul 2017 – Dec 2018, Hyderabad, TG
            </p>
            <ul className="list-disc ml-6">
              <li>SPA using React-Redux workflow.</li>
              <li>Login workflow with OAuth 2.0 & internationalization.</li>
              <li>UI components & search/filter mechanisms for large datasets.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="education" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <ul className="list-disc ml-6">
          <li>M.Tech in Software Systems, BITS Pilani, CGPA 8.4/10 (2014–2016)</li>
          <li>B.Tech in Electronics & Instrumentation Engineering, CVR College, 71.89% (2007–2011)</li>
          <li>Intermediate, Narayana Jr College, 94.30% (2005–2007)</li>
        </ul>
      </section>

      <section id="awards" className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Awards</h2>
        <ul className="list-disc ml-6">
          <li>2022 Star Performer — Preqin India Pvt Ltd</li>
          <li>2018 PAT on the Back — Hexagon (HCCI)</li>
        </ul>
      </section>
    </>
  );
}

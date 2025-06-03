import PageWrapper from './pagewrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full flex flex-col items-center space-y-8">
        <h1 className="text-4xl font-bold mb-6">Welcome!</h1>
        <div className="text-lg leading-relaxed space-y-6 max-w-2xl">
          <p className="text-center">
            As the name of the site implies, I'm <span className="font-semibold text-blue-500">Will</span>! So far, I've been a bit of a nomad, traveling across our great nation and living in 
            <span className="font-semibold text-blue-500"> Colorado, Kansas, Missouri, Louisiana</span>, and now <span className="font-semibold text-blue-500">Florida</span>.
          </p>
          <p className="text-center">
            I recently graduated from <span className="font-semibold text-blue-500">Florida Gulf Coast University</span> as 
            <span className="italic font-semibold text-blue-500"> Summa Cum Laude</span> with a <span className="font-semibold text-blue-500">3.9 GPA</span> and a degree in 
            <span className="font-semibold text-blue-500"> Software Engineering</span>.
          </p>
          <p className="text-center">
            My journey doesn't end with a diploma—I'm passionately moving into professional development. I'm a dedicated team player, 
            always ready to wear any hat necessary and learn on the fly to help my team succeed.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg max-w-md">
          <img src="/grad_photo.png" alt="Graduation Photo" className="w-full h-auto"/>
        </div>
        <p className="text-lg italic text-center max-w-2xl">
          And you will have to forgive me, my portfolio is still a work in progress! 
          <span className="font-semibold text-blue-500"> More to come soon!</span> 
        </p>
      </div>
    </PageWrapper>
  );
}

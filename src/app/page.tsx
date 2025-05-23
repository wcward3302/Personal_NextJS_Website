import PageWrapper from './pagewrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div className="max-w-2xl mx-auto text-center p-6 bg-white bg-opacity-10 rounded-2xl shadow-lg text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome!</h1>
        <p className="text-lg leading-relaxed mb-6">
          My name is <span className="font-semibold">William Ward</span>, and I recently graduated from 
          <span className="font-semibold"> Florida Gulf Coast University</span> with a 
          <span className="font-semibold"> Bachelor of Science in Software Engineering</span>.
        </p>
        
        <div className="flex justify-center">
          <img src="/grad_photo.png" alt="Graduation Photo" className="rounded-xl shadow-md w-80" />
        </div>


          <p className="text-lg leading-relaxed mb-6">
            And you will have to forgive me, my portfolio is still a work in progress! <span className="font-semibold"> More to come soon!</span> 
          </p>

      </div>
    </PageWrapper>
  );
}
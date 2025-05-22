import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>My name is William Ward, and I am a recently graduated Florida Gulf Coast University with a bachelor of science degree in software engineer</p>
      <div>
        <img src = "/grad_photo.png" alt = "Graduation Photo" width={400}/>
      </div>
    </div>
  );
}

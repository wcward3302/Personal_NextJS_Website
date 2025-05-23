import PageWrapper from './../pagewrapper';

export const metadata = {
    title: "About"
}

export default function Profile() {
    return (
        <PageWrapper>
            <div className="max-w-2xl mx-auto text-center p-6 bg-white bg-opacity-10 rounded-2xl shadow-lg text-white">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p className="text-lg leading-relaxed">
                    As the name of the site implies, I'm <span className="font-semibold">Will</span>! So far, I've been a bit of a nomad, traveling across our great nation and living in 
                    <span className="font-semibold">Colorado, Kansas, Missouri, Louisiana</span>, and now <span className="font-semibold">Florida</span>.
                    <br /><br />
                    I recently graduated from <span className="font-semibold">Florida Gulf Coast University</span> as 
                    <span className="italic font-semibold">Summa Cum Laude</span> with a <span className="font-semibold">3.9 GPA</span> and a degree in 
                    <span className="font-semibold">Software Engineering</span>.
                    <br /><br />
                    My journey doesn't end with a diploma—I'm passionately moving into professional development. I'm a dedicated team player, 
                    always ready to wear any hat necessary and learn on the fly to help my team succeed.
                </p>
            </div>
        </PageWrapper>
    )
}
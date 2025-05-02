import '/src/assets/styles/Home.css';
import EthanFilipImg from '/src/assets/images/EthanFilip.jpg';

export default function Home() {
  return (
    <main className="container-fluid">
        <div className="welcome-container col-12 text-center p-4">
            <h1 className="display-1">Welcome to the Ethan Web</h1>
        </div>

        <section className="w-100 mt-3">
            <img src={EthanFilipImg} id="me" className="rounded float-start me-3"/>
            <p className="lead text-center fs-1" id="welcome-p">My name is Ethan Filip.</p>

            <p className="main-p fs-3">I am currently 15 years old as a 9th grader at Dover-Sherborn High School in Massachusetts. I am most interested in technology, science, and engineering. I post some of my completed projects on this website along with my extracurriculars, hobbies, experiences, and awards.</p>
            <hr />        
            <p className="main-p fs-3">I have 2 cats, Mochi and Tofu who are both very cute. My favorite food is sushi and I also love the smoothies my grandma makes. I like swimming, especially in the ocean. I am an intermediate skiier and I occasionally enjoy the slopes of mountains in New Hampshire (Wildcat, Attitash).</p>
            <div className='clearfix'></div>
        </section>
    </main>
  )
}
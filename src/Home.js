import './Home.css';
import cat from './cat_homepage.jpg';
function Home() {
    return (
        <div className="homepage">
            <span className='homepage-wel'>Welcome!</span><br /><br />
            <div className="homepage-message"> - Don't give up hope! Some animals go missing for weeks, sometimes even months, before they are found by their guardians. - </div>
            <img src={cat} alt="cat" />
        </div>
    );
}

export default Home;

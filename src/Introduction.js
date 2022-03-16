import './Introduction.css';

function Introduction() {
    return (
        <div className="intro">
            <span className="intro-about-us"> We’re here to help reunite missing pets with their people using photos.</span>
            <div className="intro-use">
                <h4 className="steps">STEPS</h4>
                <span className="intro-use-steps">1. Select "I Lost a Pet" on the main menu.</span><br/>
                <span className="intro-use-steps">2. Fill out the online form.</span><br/>
                <span className="intro-use-steps">3. Submit!</span>
            </div>
        </div>
    );
}

export default Introduction;
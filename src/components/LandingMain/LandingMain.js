import './LandingMain.css';
import divine from './divine.jpg';

function LandingMain() {
  return (
    <div className='landing-main'>
      <div className='main-center'>
        <div className='main-nav'>
          <ul>
            <li>
              <a href=''>
                <i className='fas fa-search'></i>
              </a>
            </li>
            <li>
              <a href='##'>Trending</a>
            </li>
            <li>
              <a href='##'>Shows</a>
            </li>
            <li>
              <a href='##'>COLLECTION</a>
            </li>
            <li>
              <a href='##'>WARDRODE</a>
            </li>
          </ul>
        </div>
        <div className='main-text'>
          <div>
            <h1>The world is my </h1>
            <h1>runway</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad.
          </p>
        </div>
        <div className='main-image'>
          <div className='image'>
            <img src={divine} alt='' width='300px' />
            <p className='arrow'>{'>'}</p>
            <div className='overlay'>
              <div className='overlay-wrapper'>
                <p>03</p>
                <div className='line'></div>
                <div className='circle'></div>
                <div className='circle large'></div>
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
              </div>
            </div>
          </div>
          <div className='bottom-line'></div>
        </div>
      </div>
      <div className='main-side'>
        <div className='main-side-wrapper'>
          <div className='icons-top'>
            <p>
              <i className='fas fa-user'></i>
            </p>
          </div>
          <div className='icons-middle'>
            <p>
              <i className='fab fa-instagram'></i>
            </p>
            <p>
              <i className='fab fa-twitter'></i>
            </p>
            <p>
              <i className='fab fa-facebook'></i>
            </p>
            <p>
              <i className='fab fa-linkedin'></i>
            </p>
          </div>
          <div className='icons-bottom'>
            <p>
              <i className='fas fa-shopping-bag'></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingMain;

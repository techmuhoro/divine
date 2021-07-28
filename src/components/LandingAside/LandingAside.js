import './LandingAside.css';
import menu from './logo.svg';
import asideImg from './aside-img.jpg';

function LandingAside() {
  return (
    <div className='landing-aside'>
      <div className='menu'>
        <img src={menu} alt='' />
      </div>
      <div className='divine-head'>
        <div>
          <h1>Divine</h1>
          <h3>Experience</h3>
        </div>
      </div>
      <div className='quote'>
        <div className='quote-left'>
          <i className='fas fa-quote-left'></i>
        </div>

        <div className='quote-text'>
          <p>
            fashion is what you are offered four times a yearby designers. And
            style is what ypu use.
          </p>
        </div>
        <div className='quote-right'>
          <i className='fas fa-quote-right'></i>
        </div>
      </div>
      <div className='season'>
        <p>Winter</p>
        <p className='bottom'>Autumn</p>
        <p>Spring</p>
        <p>Summer</p>
      </div>
      <div className='chevrons'>
        <div className='chevron-up'>
          <i className='fas fa-chevron-up'></i>
        </div>
        <div>
          <i className='fas fa-chevron-down'></i>
        </div>
      </div>
      <div className='aside-img'>
        <img src={asideImg} alt='' width='200px' />
      </div>
      <div className='float-white'></div>
      <div className='float-red'></div>
    </div>
  );
}

export default LandingAside;

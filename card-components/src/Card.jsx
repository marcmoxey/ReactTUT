import profilePic from './assets/profile-pic.jpeg';

function Card(){
    return (
      <div className="card">
        <img className='card-image'
          src="https://picsum.photos/200/300"
          alt="profile picture"
        ></img>
        <h2 className='card-title'>Marc Moxey</h2>
        <p className='card-description'> Work as Software Engineer and play video games</p>
      </div>
    );
}

export default Card;
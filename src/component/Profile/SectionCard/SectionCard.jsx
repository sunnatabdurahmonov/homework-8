
import '../SectionCard/sectionCard.scss'


const SectionCard = () => {
  return (
    <div>
      <div className="section_card">
       <div className="bobur">
       <h3>Bobur</h3>
        <span className='span'>@bobur_mavlonov</span>
        <p>UX&UI designer at <span className='email-span'>@abutechuz</span></p>
       </div>
     <div className="icon-menu">
     <i class="fa-solid fa-location-dot"></i>
        <span className='span'>Mashag’daman</span>
        <i class="fa-solid fa-link"></i>
        <span className='email-span'>t.me/boburjon_mavlonov</span>
        <i class="fa-regular fa-balloon"></i>
        <span className='span'>Born November 24, 2000</span>
        <i class="fa-solid fa-calendar-days"></i>
        <span className="span">Joined May 2020</span>
     </div>
     <div className="follow">
     <p>67</p>
     <span className='span'>Following</span>
     <p>47</p>
     <span className='span'>Followers</span>
     </div>
     <div className="tweets-menu">
        <span className='tweets-span'>Tweets</span>
        <span>Tweets & replies</span>
        <span>Media</span>
        <span>Likes</span>
     </div>
      </div>
      
    </div>
  )
}

export default SectionCard



export const OneCard = ({attributes}) => {
    const {profiles =[]} = attributes || {};


    return (
    <div className="tsbwhe-main">
        {profiles.map((profile, index) => {
            const { name, designation, image, social = [] } = profile;
            return (
                <div className="tsbwhe-profile-card" key={index}>
                    <div className="tsbwhe-img">
                        <img src={image} alt={name} />
                    </div>
                    <div className="tsbwhe-caption">
                        <h3>{name}</h3>
                        <p>{designation}</p>
                        <div className="tsbwhe-social-links">
                            {social.map((item, sIndex) => (
                                <a href={item.link || '#'} key={sIndex}>
                                    <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            );
        })}
    </div>
  )
}

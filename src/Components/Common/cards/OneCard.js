

export const OneCard = ({attributes}) => {
    const {profiles =[],options} = attributes || {};
    const { showName, showDesignation, showSocial, openInNewTab } = options || {};


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
                      {showName && <h3>{name}</h3>}
                      {showDesignation && <p>{designation}</p>}
                        {showSocial && <div className="tsbwhe-social-links">
                            {social.map((item, sIndex) => (
                                <a href={item.link || '#'} key={sIndex} target={openInNewTab ? '_blank' : '_self'} rel='noopener noreferrer'>
                                    <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                                </a>
                            ))}
                        </div>}
                    </div>
                </div>
            );
        })}
    </div>
  )
}

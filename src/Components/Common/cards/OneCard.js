

export const OneCard = ({attributes, Richtext, setAttributes}) => {
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
                      {showName && name && !Richtext && <h3 className="tsbwhe-name" dangerouslySetInnerHTML={{ __html: name }} />}

                      {showName && Richtext && <Richtext tagName="h3" value={name} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, name: value } : p) })} className="tsbwhe-name" placeholder="Enter name" />}

                      {showDesignation && designation && !Richtext && <p className="tsbwhe-designation" dangerouslySetInnerHTML={{ __html: designation }} />}

                      {showDesignation && Richtext && <Richtext tagName="p" value={designation} onChange={(value) => setAttributes({ ...attributes, profiles: attributes.profiles.map((p, i) => i === index ? { ...p, designation: value } : p) })} className="tsbwhe-designation" placeholder="Enter designation" />}
                        {showSocial && <div className="tsbwhe-social-links">
                            {social.map((item, sIndex) => (
                                <a className="tsbwhe-social-links" href={item.link || '#'} key={sIndex} target={openInNewTab ? '_blank' : '_self'} rel='noopener noreferrer'>
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

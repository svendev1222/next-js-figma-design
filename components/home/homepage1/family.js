import classes from './family.module.css'

const topSellingFamilyContents = [
    { title: "Disney On Ice presents Dream Big", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "5", url: "/images/Homepage1/Group 124.png"  },
    { title: "PBR: Unleash the Beast", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "21", star: "3", url: "/images/Homepage1/Group 125.png"  },
    { title: "Dude Perfect", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "4", star: "4", url: "/images/Homepage1/Group 126.png"  },
    { title: "World&apos;s Toughest Rodeo", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "1", url: "/images/Homepage1/Group 127.png"  },
    { title: "Disney On Ice presents Dream Big", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "14", star: "3", url: "/images/Homepage1/Group 128.png"  },
    { title: "World&apos;s Tougest Rodeo", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "15", star: "4", url: "/images/Homepage1/Group 129.png"  },
    { title: "Disney On Ice presents Mickey and Friends", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "16", star: "5", url: "/images/Homepage1/Group 130.png"  },
    { title: "World&apos;s toughest Rodeo", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "17", star: "5", url: "/images/Homepage1/Group 127.png"  },
]

export default function Family() {
    return (
        <div className={classes.family}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <span className={classes.title}>Family</span>
                    <div className={classes.dFlex}>
                        <button className={classes.seeAllBtn}>See All</button>
                        <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {topSellingFamilyContents.map((topSellingFamilyContent) => (
                    <div key={topSellingFamilyContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={topSellingFamilyContent.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {topSellingFamilyContent.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{topSellingFamilyContent.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{topSellingFamilyContent.title}</h4>
                            <span className={classes.cardText}>{topSellingFamilyContent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
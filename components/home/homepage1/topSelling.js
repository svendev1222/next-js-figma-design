import classes from './topSelling.module.css';

const topSellingConcertsContents = [
    { title: "Eagles", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "17", star: "5", url: "/images/Homepage1/Group 97.png"  },
    { title: "Imagine Dragons", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "15", star: "5", url: "/images/Homepage1/Group 98.png"  },
    { title: "Bad Bunny", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "26", star: "5", url: "/images/Homepage1/Group 99.png"  },
    { title: "Def Leppard", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "5", url: "/images/Homepage1/Group 100.png"  },
    { title: "Eagles", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "45", star: "5", url: "/images/Homepage1/Group 104.png"  },
    { title: "Coldplay", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "12", star: "5", url: "/images/Homepage1/Group 101.png"  },
    { title: "Red Hot Chili Peopers", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "23", star: "4", url: "/images/Homepage1/Group 102.png" },
    { title: "Def Leppard", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "5", url: "/images/Homepage1/Group 103.png" },
]

export default function TopSelling() {
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.topTitle}>Top Selling</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <div className={classes.concertsField}>
                        <span className={classes.title}>Concerts</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>See All</button>
                            <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {topSellingConcertsContents.map((topSellingConcertsContent) => (
                    <div key={topSellingConcertsContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={topSellingConcertsContent.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {topSellingConcertsContent.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{topSellingConcertsContent.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{topSellingConcertsContent.title}</h4>
                            <span className={classes.cardText}>{topSellingConcertsContent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
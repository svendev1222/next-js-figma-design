
import classes from './sports.module.css'

const topSellingSportsContents = [
    { title: "Charlotte Hornets", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "2", url: "/images/Homepage1/Group 108.png"  },
    { title: "Imagine Pacers", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "31", star: "3", url: "/images/Homepage1/Group 109.png"  },
    { title: "Utah Jazz", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "5", url: "/images/Homepage1/Group 111.png"  },
    { title: "San Antonio Spurs", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "15", star: "2", url: "/images/Homepage1/Group 110.png"  },
    { title: "Altlanta Hawks", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "16", star: "1", url: "/images/Homepage1/Group 112.png"  },
    { title: "Miami Heat", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "11", star: "5", url: "/images/Homepage1/Group 113.png"  },
    { title: "Memphis Grizzlies", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "18", star: "4", url: "/images/Homepage1/Group 114.png"  },
    { title: "Dallas Cowboys", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "10", star: "5", url: "/images/Homepage1/Group 115.png"  },
]

export default function Sports() {
    return (
        <div className={classes.sports}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <span className={classes.title}>Sports</span>
                    <div className={classes.dFlex}>
                        <button className={classes.seeAllBtn}>See All</button>
                        <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                    </div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {topSellingSportsContents.map((topSellingSportsContent) => (
                    <div KEY={topSellingSportsContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={topSellingSportsContent.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {topSellingSportsContent.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{topSellingSportsContent.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{topSellingSportsContent.title}</h4>
                            <span className={classes.cardText}>{topSellingSportsContent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
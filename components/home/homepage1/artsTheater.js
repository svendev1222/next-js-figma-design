import classes from './artsTheater.module.css';

const topSellingArtsTheaterContents = [
    { title: "Sebastian Maniscalco", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "4", url: "/images/Homepage1/Group 116.png"  },
    { title: "John Mulaney", text: "What happens in Vegas doesnot always stay in Vegas, and Imagine Dragons", events: "12", star: "4", url: "/images/Homepage1/Group 117.png"  },
    { title: "Trevor Noah", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "4", url: "/images/Homepage1/Group 118.png"  },
    { title: "Cedic The EnterTainer", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "4", url: "/images/Homepage1/Group 119.png"  },
    { title: "Joe Hisaishi", text: "It&apos;s undeniable that Bad Bunny is one of the hottest Latin trap stars of our time", events: "12", star: "4", url: "/images/Homepage1/Group 120.png"  },
    { title: "Hasan Minhaj", text: "Coldplay is one of the best-loved British rock bands in the world, with numerous", events: "12", star: "4", url: "/images/Homepage1/Group 121.png"  },
    { title: "Jeff Dunham", text: "In today&apos;s faddish, fractured rock landscape, it&apos;s refreshing that classic", events: "12", star: "4", url: "/images/Homepage1/Group 122.png"  },
    { title: "Bill Burr", text: "The world is a confusing place, but there&apos;s one resounding truth", events: "12", star: "4", url: "/images/Homepage1/Group 123.png"  },
]

export default function ArtsTheater() {
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                {/* <div className="d-flex flex-column justify-content-between width100"> */}
                    <div className={classes.concertsField}>
                        <span className={classes.title}>Arts & Theater</span>
                        <div className={classes.dFlex}>
                            <button className={classes.seeAllBtn}>See All</button>
                            <img className={classes.seeAllIcon} src="/images/Homepage1/Arrow 1.png" />
                        </div>
                    </div>
                {/* </div> */}
            </div>
            <div className={classes.cardsBody}>
                {topSellingArtsTheaterContents.map((topSellingArtsTheaterContent) => (
                    <div key={topSellingArtsTheaterContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={topSellingArtsTheaterContent.url} />
                            <div className={classes.cardSelling}>
                                <div className={classes.star}>
                                    {topSellingArtsTheaterContent.star}
                                    <img className={classes.starImg} src="/images/Homepage1/star.png" />    
                                </div> 
                                <div className={classes.events}>{topSellingArtsTheaterContent.events} Events</div>   
                            </div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{topSellingArtsTheaterContent.title}</h4>
                            <span className={classes.cardText}>{topSellingArtsTheaterContent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
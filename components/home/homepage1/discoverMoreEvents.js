import classes from './discoverMoreEvents.module.css'

const discoverMoreEventsContents = [
    { title: "NFL", text: "Explore NFL ticket options from te Official Ticket Exchange of the NFL", url: "/images/Homepage1/Rectangle 36.png"  },
    { title: "NBA", text: "Find great tickets for your favorite NBA teams for must-see games", url: "/images/Homepage1/Rectangle 36 (1).png"  },
    { title: "NHL", text: "Get verified tickets to watch your favourite NHL team take the ice.", url: "/images/Homepage1/Rectangle 36 (2).png"  },
    { title: "College Football Playoff", text: "Find tickets to the national college football championship on Jan. 10, 2022", url: "/images/Homepage1/Rectangle 36 (3).png"  },
    { title: "Vas Vegas", text: "Exploring what to see and do in Las Vegas.", url: "/images/Homepage1/Rectangle 36 (4).png"  },
    { title: "Broadway in New York", text: "Don&apos;t miss the hottest musicals and plays happening on Broadway.", url: "/images/Homepage1/Rectangle 36 (5).png"  },

]

export default function DiscoverMoreEvents() {
    return (
        <div className={classes.topSelling}>
            <div className={classes.dFlex}>
                <div className={classes.concertsField}>
                    <h1 className={classes.title}>Discover More Events</h1>
                    <div className={classes.borderHor}></div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {discoverMoreEventsContents.map((discoverMoreEventsContent) => (
                    <div key={discoverMoreEventsContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={discoverMoreEventsContent.url} />
                        </div>
                        <div className={classes.cardTextField}>
                            <h4 className={classes.cardTitle}>{discoverMoreEventsContent.title}</h4>
                            <span className={classes.cardText}>{discoverMoreEventsContent.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
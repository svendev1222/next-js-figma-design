
import classes from './americanExpress.module.css';

const americanExpressContents = [
    { time1 : "PRESALE: THU-NOV-9PM", time2 : "SUN.MAR.8:00 PM", title: "Elton Jonhn: Farewell Yellow Brick Road", text: "Lincoln, NE.Pinnacle Bank Arena", url: "/images/Homepage1/Rectangle 188.png" },
    { time1: "PRESALE: THU-DEC-7PM", time2: "WED.APR 27.6:30 PM", title: "HAIM One More HAIM Tour", text: "Berkeley, CA.Greek Theatre-U.C.Berkeley", url: "/images/Homepage1/Rectangle 18 (2).png" },
    { time1: "PRESALE: THU-NOV-9PM", time2: "SUN.MAR 28.8:00 PM", title: "Elton Jonhn: Farewell Yellow Brick Road", text: "Lincoln, NE.Pinnacle Bank Arena", url: "/images/Homepage1/Rectangle 18 (1).png" },
]

export default function AmericanExpress() {
    return (
        <div className={classes.americanExpress}>
            <div className={classes.dFlex}>
                <div className={classes.flexColumn}>
                    <div className={classes.dFlex}>
                        <h1 className={classes.americanExpressTitle}>American Express R Presales</h1>
                        <div className={classes.borderHor}></div>
                    </div>
                    <span className={classes.americanExpressText}>Card Members get exclusive early access to tickets</span>
                </div>
                <button className={classes.americanExpressBtn}>See All</button>
            </div>

            <div className={classes.cardsBody}>
                {americanExpressContents.map((americanExpressContent) => (
                    <div key={americanExpressContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={americanExpressContent.url} />
                            <div className={classes.cardPresale}>{americanExpressContent.time1}</div>
                        </div>
                        <div className={classes.cardTextField}>
                            <h5 className={classes.cardTime}>{americanExpressContent.time2}</h5>
                            <h4 className={classes.cardTitle}>{americanExpressContent.title}</h4>
                            <span className={classes.cardComment}>{americanExpressContent.text}</span>
                        </div>
                    </div>
                ))}
                <div className={classes.cards}>
                    <div className={classes.relative}>
                        <img className={classes.cardImg} src="/images/Homepage1/Rectangle 18.png" />
                    </div>
                    <div className={classes.cardLearnMore}>
                        <span className={`${classes.cardComment} ${classes.mT1}`}>Card Members enjoy exclusive access to the best of live muisic.</span>
                        <button className={classes.leardMore}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
            

import classes from './browseCategory.module.css'

const browseCategoryContents = [
    { title: "Concerts", url1: "/images/Homepage1/Mask Group.png", url2: "/images/Homepage1/Group 90.png" },
    { title: "Sports", url1: "/images/Homepage1/Group 94.png", url2: "/images/Homepage1/Group 91.png" },
    { title: "Arts & Theatre", url1: "/images/Homepage1/Group 95.png", url2: "/images/Homepage1/Group 92.png" },
    { title: "Family", url1: "/images/Homepage1/Group 96.png", url2: "/images/Homepage1/Group 93.png" },
]

export default function BrowseCategory() {
    return (
        <div className={classes.browseCategory}>
            <div className={classes.titleField}>
                <div className={classes.dFlex}>
                    <h1 className={classes.title}>Browse by Category</h1>
                    <div className={classes.borderHor}></div>
                </div>
            </div>
            <div className={classes.cardsBody}>
                {browseCategoryContents.map((browseCategoryContent) => (
                    <div key={browseCategoryContent.title} className={classes.cards}>
                        <div className={classes.relative}>
                            <img className={classes.cardImg} src={browseCategoryContent.url1} />
                            <div className={classes.ItemPosition}>
                                <div className={classes.concertsItem}>
                                    <img className={classes.ItemImg} src={browseCategoryContent.url2} />
                                    {browseCategoryContent.title}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
            
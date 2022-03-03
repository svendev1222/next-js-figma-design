import { FaListUl, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import classes from './eventsAllConcerts.module.css';

const Concerts = [
    { title: "JAN 7", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 8", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 14", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 15", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 18", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 9", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 10", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
    { title: "JAN 11", time: "Fri*8:00", text: "Pinnacle Bank-Lincoln, NE", comment: "Eric Church: The Gather Again Tour" },
]


const EventsAllConcerts = () => {
    return (
        <div className={classes.eventsBody}>
            <div className={classes.concertsHeader}>
                <div className={classes.concertsTitle}>
                    <h4 className={classes.concertsTitleH4}>No Concerts Near</h4>
                    <span className={classes.concertsTitleSpan}>(select your city)</span>
                </div>
                <div className={classes.dFlex}>
                    <div>
                        <select className={classes.select}>
                            <option value="0">Select your dates</option>
                            <option value="1">Date1</option>
                            <option value="2">Date2</option>
                            <option value="3">Date3</option>
                        </select>
                    </div>
                    <div className={classes.rightBar}>
                        <div className={classes.listings}>
                            <FaListUl color="white"/>
                            <span className={classes.listingsText}>Listings</span>
                        </div>
                        <div className={classes.calendar}>
                            <FaCalendarAlt />
                            <span className={classes.calendarText}>Calendar</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.allConcertsbody}>
                <h5 className={classes.allConcertsTitle}>All Concerts</h5>
                <div>
                    { Concerts.map((Concert) => (
                        <div key={Concert.title} className={classes.concertsItem}>
                            <div className={classes.titleField}>
                                <FaChevronDown color="#545454"/>
                                <div className={classes.ml1}>
                                    <h6 className={classes.concertTitle}>{Concert.title}</h6>
                                    <span className={classes.concertTime}>{Concert.time}</span>
                                </div>
                            </div>
                            <div>
                                <h6 className={classes.concertText}>{Concert.text}</h6>
                                <span className={classes.concertComment}>{Concert.comment}</span>
                            </div>
                            <div className={classes.seeTickets}>
                                <button className={classes.seeTicketsBtn}>See Tickets</button>
                            </div>
                        </div>
                    )) }
                </div>
                <div className={classes.loadMore}>
                    <button className={classes.loadMoreBtn}>Load More</button>
                </div>
            </div>
        </div>
    );
  };
  
  export default EventsAllConcerts;
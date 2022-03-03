import { useState } from "react";
import classes from './headerBody.module.css'
import { BiSearch } from "react-icons/bi";

const HeaderBody = () => {
    const [ state, setState ] = useState("01");

    return (
        <div className={classes.headerBody}>
            { state === "01" 
                ? <img className={classes.headerBodyBg} src="/images/Homepage1/Group 89.png" /> 
                : state === "02" 
                    ? <img className={classes.headerBodyBg} src="/images/Group 132.png" /> 
                    : <img className={classes.headerBodyBg} src="/images/Group 133.png" />
            }
            { state === "01" 
                ? 
                <div className={classes.headerTextField}>
                    <h1 className={classes.headerTitle}>Monstersdf Jam is Coming!</h1>
                    <h2 className={classes.headerText}>Don&apos;t Miss Out Seeing Your Favorite Monster <br/>Jam trucks in your Town!</h2>
                    <button className={classes.headerBtn}>See Tickets</button>
                </div>
                : state === "02" ? 
                <div className={classes.headerTextField}>
                    <h1 className={classes.headerTitle}>Eric Church Brings Double</h1>
                    <h3 className={classes.headerText}>The Gather Again tour is stopping in your city. See him live in concert!</h3>
                    <button className={classes.headerBtn}>See Tickets</button>
                </div> :
                <div className={classes.headerTextField}>
                    <h1 className={classes.headerTitle}>NFL Tickets</h1>
                    <h3 className={classes.headerText}>Grab tickets today and be there live in the stands!</h3>
                    <button className={classes.headerBtn}>See Tickets</button>
                </div>
            }
            
            <div className={classes.headerSlider}>
                <span onClick={() => setState('01')} className={ state === "01" ? classes.sliderItem : classes.sliderItemActive }>01</span> 
                <img className={classes.headerSliderImg} src="/images/Line 1.png" />
                <span onClick={() => setState('02')} className={ state === "02" ? classes.sliderItem : classes.sliderItemActive  }>02</span> 
                <img className={classes.headerSliderImg} src="/images/Line 1.png" />
                <span onClick={() => setState('03')} className={ state === "03" ? classes.sliderItem : classes.sliderItemActive  }>03</span> 
            </div>
            <div className={classes.headerFooter}>
                <h3 className={classes.headerFooterTitle}>Let&apos;s Make Live Happen</h3>
                <span className={classes.headerFooterText}>Shop millions of live events and discover can&apos;t-miss concerts, games, theater and more.</span>
                <div className={classes.headerToolBar}>
                    <div className={classes.cityInputField}>
                        <input className={classes.cityInput} type="text" placeholder="City or Zip Code"/>
                        <img className={classes.cityInputIcon} src="/images/Homepage1/city-location.png" />
                    </div>
                    <div className={classes.borderVertical}></div>
                    <div className={classes.selectField}>
                        <select className={classes.select}>
                            <option value="0">All Dates</option>
                            <option value="1">Date1</option>
                            <option value="2">Date2</option>
                            <option value="3">Date3</option>
                        </select>
                    </div>
                    <div className={classes.borderVertical}></div>
                    <div className={classes.searchBarField}>
                        <div className={classes.searchBar}>
                            <BiSearch color='#8a8989' size={18}/>
                            <input className={classes.searchBarInput} type="text" placeholder="Search for artists, venues and events"/>
                        </div>
                        <div className={classes.searchBtn}>Search</div>
                    </div>
                </div>

                <div className={classes.responsiveHeaderToolBar}>
                    <div className={classes.cityTool}>
                        <div className={classes.cityInputField}>
                            <input className={classes.cityInput1} type="text" placeholder="City or Zip Code"/>
                            <img className={classes.cityInputIcon} src="/images/Homepage1/city-location.png" />
                        </div>
                        <div className={classes.selectField}>
                            <select className={classes.select}>
                                <option style={{color:"blue"}} value="0">All Dates</option>
                                <option value="1">Date1</option>
                                <option value="2">Date2</option>
                                <option value="3">Date3</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.searchTool}>
                        <div className={classes.responsiveSearchBar}>
                            <div className={classes.searchBar}>
                                <BiSearch color='#8a8989' size={18}/>
                                <input className={classes.searchBarInput} type="text" placeholder="Search for artists, venues and events"/>
                            </div>
                            <div className={classes.searchBtn}>Search</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  export default HeaderBody
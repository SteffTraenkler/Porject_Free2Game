import WindowsImg from '../../img/Windows.png'
import BrowerImg from '../../img/Browser.png'
import { Link } from 'react-router-dom'


const TopBrowser = (props) => {
    return (
        <article>
            <div>
                <img className="recentPic" src={props.thumbnail} alt={"Thumbnail of " + (props.title)} />
            </div>
            <div className="contentWrapper">
                <div>
                    <h3>{props.title}</h3>
                    <p className="contentPara">{props.short_description}</p>
                    <Link className='readMore' to={`/details/${props.id}`}>Read More</Link>
                </div>

                <div className="contentBottom">
                    {(() => {
                        if (props.platform === "PC (Windows)") {
                            return (
                                <div className='windows animated-box in'>
                                    <img src={WindowsImg} alt="windowsImg" />
                                </div>
                            )
                        } else if (props.platform === "Web Browser") {
                            return (
                                <div className='windows animated-box in'>
                                    <img src={BrowerImg} alt="browserImg" />
                                </div>
                            )
                        } else if (props.platform === "PC (Windows), Web Browser" && props.platform === "Web Browser, PC (Windows)") {
                            return (
                                <div className='browser windows animated-box in'>
                                    <img src={BrowerImg} alt="browserImg" />
                                    <img src={WindowsImg} alt="windowsImg" />
                                </div>
                            )
                        }
                    })()}
                    <div className='animated-box in'>
                        <p>
                            {props.genre}
                        </p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TopBrowser
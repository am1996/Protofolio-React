import logo from "../../../../assets/images/logo.png";
import "./index.scss";
import { Link } from 'react-router-dom';

let home = ()=>(
    <div className="container">
        <div>
            <h1 className="head-tag animate__animated animate__bounceIn">
                Hi, My Name is 
                <div style={{marginLeft:5,display: "inline-block",whiteSpace: "nowrap"}}><img src={logo} width="40px" />asma</div>
            </h1>
            <div className="animate__animated animate__bounceIn">
                <p className="dark-psheen">I'm Frontend Developer, Javascript enthusiasit and PHP enthusiast;</p>
            </div>
            <h1 style={{margin:0,padding:0}} className="head-tag animate__animated animate__bounceIn animate__delay-1s">
                My Skills
            </h1>
            <div className="grid animate__animated animate__bounceIn animate__delay-1s">
                <div>
                    <h2 class="white">HTML</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"88%"}}></div>
                    </div>
                </div>
                <div>
                    <h2 class="white">CSS</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"70%"}}></div>
                    </div>
                </div>
                <div>
                    <h2 class="white">JS</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"90%"}}></div>
                    </div>
                </div>
                <div>
                    <h2 class="white">PHP</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"80%"}}></div>
                    </div>
                </div>
                <div>
                    <h2 class="white">MSQL</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"85%"}}></div>
                    </div>
                </div>
                <div>
                    <h2 class="white">Python</h2>
                    <div class="stripe-container">
                        <div className="stripe" style={{width:"70%"}}></div>
                    </div>
                </div>
            </div>
            <Link className="btn animate__animated animate__bounceIn animate__delay-1s" to="/contact">Contact Me </Link>
        </div>
    </div>
);

export default home;
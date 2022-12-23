import './index.scss';
import "../../../../assets/db.json";
const Layout = () => {
    return(
        <div className='container'>
            <div class="card animate__animated animate__bounceIn">
                <figure class="menu-card">
                    <img src="https://assets.codepen.io/191814/1920-1080.jpg" />
                    <div class="date">date</div>
                    <figcaption>
                        <h2>Catchy Title</h2>
                        <h3 class="subtitle">Descriptive subtitle</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button>View story</button>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
            <div class="card animate__animated animate__bounceIn">
                <figure class="menu-card">
                    <img src="https://assets.codepen.io/191814/1920-1080.jpg" />
                    <div class="date">date</div>
                    <figcaption>
                        <h2>Catchy Title</h2>
                        <h3 class="subtitle">Descriptive subtitle</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button>View story</button>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
            <div class="card animate__animated animate__bounceIn">
                <figure class="menu-card">
                    <img src="https://assets.codepen.io/191814/1920-1080.jpg" />
                    <div class="date">date</div>
                    <figcaption>
                        <h2>Catchy Title</h2>
                        <h3 class="subtitle">Descriptive subtitle</h3>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <button>View Project</button>
                    </figcaption><a href="#"></a>
                </figure>
            </div>
        </div>
    );
}
export default Layout;
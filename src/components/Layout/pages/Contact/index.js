import './index.scss';

const Layout = () => {
    return(
        <div className='container'>
            <form className='animate__animated animate__bounceIn'>
                <div class="grid">
                    <div class="form-div">
                        <h2 class="white">Fullname</h2>
                        <input placeholder='Enter Fullname' type="text" name="fullname" class="form-input"/>
                    </div>
                    <div class="form-div">
                        <h2 class="white">Email</h2>
                        <input type="email" name="email" placeholder='Enter Email' class="form-input"/>
                    </div>
                </div>
                <div class="form-div">
                    <h2 class="white">Message</h2>
                    <textarea type="email" name="email" placeholder='Enter Email' class="form-input" rows="10"></textarea>
                </div>
                <button class="btn btn-block" type="submit">Send Mail</button>
            </form>
        </div>
    );
}
export default Layout;
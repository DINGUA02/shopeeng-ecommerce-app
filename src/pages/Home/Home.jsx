import style from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return(
        <>
        <header className={style.HomeHeader}>
            <Navbar />
            <h1 className={style.HomeTitle}>Shopeeng!</h1>
            <p>"Welcome, Shopper! Here you can find different items - from clothing to accessories to even computer parts! Happy <span>Shopeeng!</span>🛒"</p>
        </header>
        </>
    )
}

export default Home;
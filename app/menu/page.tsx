import styles from "./page.module.css"
import Image from "next/image"
import Link from "next/link"

interface MenuItem {
    id: string
    title: string
    description: string
    price: number
    image: string
}

const menu: MenuItem[] = [
    {
        id: 'classic',
        title: 'Chocolate Chip Cookie',
        description: 'Chrispy outside, gooey inside, rich flavour of butten and chocolate chips',
        price: 4.99,
        image: '/classic.png'
    },
    {
        id: 'bruska-special',
        title: 'Bruska Special',
        description: 'Rich flavour with lemon aroma, nuts, chocolate chips and raisins',
        price: 4.99,
        image: '/special.png'
    },
    {
        id: 'caramel',
        title: 'Caramel Cookie',
        description: 'gooey salted caramel filling, with crunchy royaltin on top, balance of salty and sweet',
        price: 4.99,
        image: '/caramel.png'
    },
    {
        id: 'dubai',
        title: 'Dubai Cookie',
        description: 'Original Dubai filling with crunchy pistachio and chocolate topping',
        price: 4.99,
        image: '/dubai.png'
    },
    {
        id: 'red-velvet',
        title: 'Red Velvet Cookie',
        description: 'Cream cheese filling with white chocolate, balance of sweet and sour',
        price: 4.99,
        image: '/redvelvet.png'
    },
    {
        id: 'brownie',
        title: 'Brownie Cookie',
        description: 'Fudgy inside with rich flavour of Dark Chocolate',
        price: 4.99,
        image: '/brownie.png'
    }
]

const Menu = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.titleContainer} data-aos='fade-up'>
                <h1>MENU</h1>
            </div>

            <div className={styles.menuContainer}>

                <div className={styles.left} data-aos='fade-right'>
                    {
                        menu.slice(0, 3).map(item => (
                            <div className={styles.card} key={item.id}>
                                <div className={styles.txt}>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>{`${item.price}₾`}</p>
                                </div>

                                <div className={styles.imgDiv}>
                                    <Image
                                        src={item.image}
                                        alt="cookie image"
                                        fill
                                        priority
                                        className={styles.img}
                                    />
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className={styles.right} data-aos='fade-left'>
                    {
                        menu.slice(3, 6).map(item => (
                            <div className={styles.card} key={item.id}>
                                <div className={styles.imgDiv}>
                                    <Image
                                        src={item.image}
                                        alt="cookie image"
                                        fill
                                        priority
                                        className={styles.img}
                                    />
                                </div>

                                <div className={styles.txt}>
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <p>{`${item.price}₾`}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>

            <div className={styles.btnContainer}>
                <div className={styles.orderNow}>
                    <Link href={'/order'}><button>ORDER NOW</button></Link>
                </div>
            </div>

        </div>
    )
}

export default Menu
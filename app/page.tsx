import styles from "./page.module.css"
import Image from "next/image"

const Home = () => {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.subDiv}>

        <div className={styles.imgContainer}>
          <div className={styles.txtContainer}>
            <div>
              <h1 className={styles.title}>When life gives you</h1>
              <h2>Lemons</h2>
              <h2>And Nuts...</h2>
              <h2>And Chocolate...</h2>
              <h2>And Raisings...</h2>
            </div>
          </div>

          <div className={styles.imgDiv}>
            <Image
              src={'/wemakethis.png'}
              alt=""
              fill
              priority
              className={styles.img}
            />
          </div>
        </div>

      </div>

      <div className={styles.hero}>
        <Image
          src={'/main.png'}
          alt="main background image"
          fill
          priority
          className={styles.bgImage}
        />
      </div>

    </div>
  )
}

export default Home
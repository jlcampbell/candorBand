import styles from './buyButton.module.scss'


export function BuyButton () {
    return <div  className={styles.buyButton}>
    <img src="https://items-images-production.s3.us-west-2.amazonaws.com/files/9d81a082ba9081cf38c446f65a97f9ee387499d4/original.png" alt="Long sleeve tee shirt" onerror="this.style.display='none'" />
    <div className={styles.content} >
      <p className={styles.description}>Long sleeve tee shirt</p>
      <p className={styles.price} >$20.00</p>
      <a id="embedded-checkout-modal-checkout-button" target="_blank" data-url="https://square.link/u/CLyqFh12?src=embd" href="https://square.link/u/CLyqFh12?src=embed" >Buy now</a>
    </div>
  </div>
}

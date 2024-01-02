
import Link from 'next/link'
import Test from './components/buttons/test'
import CustomButton from './components/buttons/generalButton'
import styles from './styles/test.module.css'
import fonts from './styles/fonts.module.scss'
export default function Home() {
  return (
    <main>
  
<h1>Home page where is the button?</h1>
<Test/>
<CustomButton text="Perfect" route="/contact_us" color="blue"/>

<p className={styles.basic_test}>Custom styles not working</p>
<p className={fonts.basic}>New fonts styles</p>
<Link href="/contact_us"> Home page</Link>
    </main>


  )
}

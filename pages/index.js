import Head from 'next/head'
import Link from  'next/link';
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head> 
      <title> Jianyou Dai</title>
      <meta name="keywords" content="jianyoudai"/>s
    </Head>
    <div>
      
      <h1 className={styles.title}> Home page </h1>
      <p className={styles.text}>The world faces "probably the most dangerous" decade since the end of World War Two, Russian President Vladimir Putin has warned.

In a wide-ranging speech on Thursday, he sought to justify Russia's invasion of Ukraine, a move that has left his country internationally isolated.

Mr Putin also accused the West of nuclear blackmail against Russia to force allies to turn away from Moscow.

The West has denounced recent veiled nuclear threats by the Kremlin.

Earlier this week, the Nato military alliance condemned unsubstantiated claims by Russia that Ukraine might use a "dirty bomb" - conventional explosives laced with radioactive material.

Nato Secretary General Jens Stoltenberg said alliance members "reject this allegation" and "Russia must not use it as a pretext for escalation".

President Putin was speaking to the annual Valdai forum after a series of recent military defeats in Ukraine and growing public anger at home over a drive to mobilise some 300,000 Russians for the war effort.

The day before his address in Moscow, he had overseen routine nuclear exercises that involved a supposed nuclear strike in retaliation for an enemy's massive nuclear attack. "We've never proactively said anything about Russia's possible use of nuclear weapons. We've only responded with hints to comments voiced by the leaders of Western countries," he told his audience.

President Putin singled out former UK prime minister Liz Truss for suggesting during an August campaign event that she would be ready to press the nuclear button if circumstances required her to do so. He said he was surprised the UK's allies did not object: "What were we supposed to do? Keep silent? Pretend that we didn't hear it?"

However, he has himself repeatedly warned that Russia would use "all available means" to protect itself, in what has been widely seen as a clear nuclear threat.

</p>
      <p className={styles.text}></p>
      
      <Link href="/mi" className={styles.btn}> see mi listings </Link>
    </div>
    </>
  )
}
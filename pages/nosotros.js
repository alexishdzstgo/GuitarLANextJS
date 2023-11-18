import Image from "next/image"
import Layout from "@/components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description='Sobre nosotros GuitarLA, tienda de música'
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        
        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000}  height={800} alt="Imagen sobre nosotros"/>
          
          <div>
            <p>
            Phasellus tortor augue, vehicula et nibh et, aliquam pretium neque. Nunc consequat lacus vitae eleifend posuere. Donec eu placerat enim. Phasellus sed efficitur tellus, ac finibus elit. Aliquam eget risus ut erat venenatis ullamcorper id eget erat. Pellentesque eu malesuada augue, nec sagittis enim. Morbi vehicula finibus lorem, vitae fermentum nibh. 
            </p>
            <p>Phasellus tortor augue, vehicula et nibh et, aliquam pretium neque. Nunc consequat lacus vitae eleifend posuere. Donec eu placerat enim. Phasellus sed efficitur tellus, ac finibus elit. Aliquam eget risus ut erat venenatis ullamcorper id eget erat. Pellentesque eu malesuada augue, nec sagittis enim. Morbi vehicula finibus lorem, vitae fermentum nibh. 
            </p>
          </div>   
        </div>
      </main>
    </Layout>

    
  )
}

import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/footer.module.css'

export default function Footer() {
  const router = useRouter()
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
                <Link href="/" >
                    Inicio
                </Link>
                <Link href="/nosotros" >
                  Nosotros
                </Link>
                <Link href="/tienda" >
                  tienda
                </Link>
                <Link href="/blog">
                  blog
                </Link>
        </nav>
        <p className={styles.copyright}>Todos los derechos resevados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

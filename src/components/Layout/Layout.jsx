import {Header} from "../Header/Header";

export const Layout = ({children}) => {

    return <div>
        <Header />

        <main>
            {children}
        </main>

        <footer>
            Footer
        </footer>
    </div>
}
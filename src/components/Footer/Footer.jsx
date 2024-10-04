
import s from './Footer.module.scss'

export const Footer = () => {

    return(
        <footer className={s.footerStyle}>
            <div>
                <ul>
                    <h4>Adresse</h4>
                    <li>Intet nyt - Godt nyt ApS</li>
                    <li>Tulipanvej 232</li>
                    <li>7320</li>
                    <li>Valby Øster</li>
                </ul>
                <ul>
                    <h4>Links</h4>
                    <li><a href="www.vikanweb.dk" target="_blank">vikanweb.dk</a></li>
                    <li><a href="www.overpådenandenside.dk" target="_blank">overpådenandenside.dk</a></li>
                    <li><a href="www.retsinformation.dk" target="_blank">retsinformation.dk</a></li>
                    <li><a href="www.nogetmednews.dk" target="_blank">nogetmednews.dk</a></li>
                </ul>
                <ul>
                    <h4>Politik</h4>
                    <li>Privatlivspolitik</li>
                    <li>Cookiepolitik</li>
                    <li>Købsinformation</li>
                    <li>Delingspolitik</li>
                </ul>
                <ul>
                    <h4>Kontakt</h4>
                    <li><a href="mailto:ingn@nyhed.dk">ingn@nyhed.dk</a></li>
                    <li>teletfon: 23232323</li>
                    <li>fax: 123123-333</li>
                </ul>
            </div>
        </footer>
    )
}
import React from "react";
import Link from "next/link";

export default function Footer(){
    return(
        <footer>
            <h1 id = "footer-intro">Tokyo Commerce</h1>
            <h4 id ="footer-phrase">An Otaku paradise</h4>
            <button><Link id = "signOut" href={'/'}>Sign out</Link></button>
        </footer>
    )
}
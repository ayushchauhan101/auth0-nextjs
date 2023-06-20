import Link from 'next/link'

const Header = ({ user, loading }) => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/advanced/api-profile">
                            API rendered profile (advanced)
                        </Link>
                    </li>
                    { !loading &&
                        (user ? (
                            <>
                                <li>
                                    <Link href="/profile">Client rendered profile</Link>
                                </li>
                                <li>
                                    <Link href="/advanced/ssr-profile">
                                        Server rendered profile (advanced)
                                    </Link>
                                </li>
                                <li>
                                    <a href="/api/auth/logout">Logout</a>
                                </li>
                            </>
                        ) : (
                            <li>
                                <a href="/api/auth/login">Login</a>
                            </li>
                        )) }
                </ul>
            </nav>
        </header>
    )
}

export default Header
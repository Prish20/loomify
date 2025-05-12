import Image from 'next/image'
import Link from 'next/link'

const page = () => {
    return (
        <main className="sign-in">
            <aside className="testimonial">
                <Link href="/" className="logo">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                    <h1 className="logo-text">Loomify</h1>
                </Link>
                <div className="description">
                    <section>
                        <figure>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Image
                                    key={index}
                                    src="/assets/icons/star.svg"
                                    alt="star"
                                    width={20}
                                    height={20}
                                />
                            ))}
                        </figure>
                        <p>
                            Loomify makes screen recording easy, From quick walkthroughs to full presentations, it&apos;s fast, smooth and shareble in seconds.
                        </p>
                        <article>
                            <Image
                                src="/assets/images/jason.png"
                                alt="jason"
                                width={40}
                                height={40}
                                className="rounded-full aspect-square"
                            />
                            <div>
                                <h2>Jason Rivera</h2>
                                <p>Product Designer, NovaBytes</p>
                            </div>
                        </article>
                    </section>
                </div>
                <p>© Loomify {(new Date()).getFullYear()}</p>
            </aside>
            <aside className="google-sign-in">
                <section>
                    <Link href="/">
                        <Image
                            src="/assets/icons/logo.svg"
                            alt="logo"
                            width={40}
                            height={40}
                        />
                        <h1 >Loomify</h1>
                    </Link>
                    <p>Create and share your very first <span>Loomify Video</span> in no time!</p>
                    <button>
                        <Image
                            src="/assets/icons/google.svg"
                            alt="google"
                            width={22}
                            height={22}
                        />
                        <span>
                            Sign in with Google
                        </span>
                    </button>
                </section>
            </aside>
            <div className="overlay" />
        </main>
    )
}

export default page

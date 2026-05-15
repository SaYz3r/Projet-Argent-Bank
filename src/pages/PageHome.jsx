import money from '../assets/icon-money.png'
import chat from '../assets/icon-chat.png'
import security from '../assets/icon-security.png'
import data from '../data/features.json'
import Feature from '../components/Feature'

const images = {
    'icon-chat': chat,
    'icon-money': money,
    'icon-security': security,
}

function PageHome() {
    return (
        <main>
            <div className="hero">
                <section className="hero-content">
                    <h2 className="sr-only">Promoted Content</h2>
                    <p className="subtitle">No fees.</p>
                    <p className="subtitle">No minimum deposit.</p>
                    <p className="subtitle">High interest rates.</p>
                    <p className="text">
                        Open a savings account with Argent Bank today!
                    </p>
                </section>
            </div>
            <section className="features">
                <h2 className="sr-only">Features</h2>
                {data.map((feature) => (
                    <Feature
                        key={feature.id}
                        src={images[feature.src]}
                        alt={feature.alt}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </section>
        </main>
    )
}

export default PageHome

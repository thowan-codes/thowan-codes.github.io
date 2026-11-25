import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import AboutMe from '@site/src/components/AboutMe.mdx';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.heroContent)}>
            <img
                className={styles.heroImage}
                src="/img/thowan/ThowanBigGrin.jpg"
                alt="The goofy boi himself"
            />

            <div>
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
        </div>
    </header>
  );
}

function ProjectsSection()
    {
        return (
            <section className={styles.projects} aria-labelledby="projects-heading">
                <div className="container">
                    <Heading as="h2" id="projects-heading">
                    Current Projects
                    </Heading>

                    <div className={styles.projectList}>
                        {/*Signals and Symbols*/}
                        <Link
                            className={styles.projectCard}
                            to="/projects/signals-and-symbols">
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectTitle}>Signals & Symbols</span>
                                    <span className={styles.projectStatus}>In development</span>
                                </div>
                            <p className={styles.projectDescription}>
                            Accessibility and quality-of-life improvements for Voices of the Void.</p>
                        </Link>

                        {/* Thowan's Mod Utilities */}
                        <Link
                            className={styles.projectCard}
                            to="/projects/thowans-mod-utilities">
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectTitle}>Thowan's Mod Utilties</span>
                                    <span className={styles.projectStatus}>In development</span>
                                </div>
                            <p className={styles.projectDescription}>
                            A core mod for my other Voices of the Void mods. Built to be a soft requirement.</p>
                        </Link>

                        {/* Eminence */}
                        <Link
                            className={styles.projectCard}
                            to="/projects/eminence">
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectTitle}>Eminence</span>
                                    <span className={styles.projectStatus}>Planning Stages</span>
                                </div>
                            <p className={styles.projectDescription}>
                            A content mod for Voices of the Void that adds a unique item, events, and signals.</p>
                        </Link>

                        {/* Alpha Base Improvements */}
                        <Link
                            className={styles.projectCard}
                            to="/projects/alpha-base-improvements">
                                <div className={styles.projectHeader}>
                                    <span className={styles.projectTitle}>Alpha Base Improvements</span>
                                    <span className={styles.projectStatus}>Planning Stages</span>
                                </div>
                            <p className={styles.projectDescription}>
                            A content mod for Voices of the Void that adds unique upgrades and items for the Alpha Base.</p>
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

function AboutSection() {
    return (
        <section className={styles.about}>
            <div className="container">
                <AboutMe />
            </div>
        </section>
    );
}


export default function Home(): ReactNode {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`Home`}
            description="Personal projects, mod development, and Devlog updates from Thowan.">
            <HomepageHeader />
            <main>
                <ProjectsSection />
                <AboutSection />
            </main>
        </Layout>
    );
}

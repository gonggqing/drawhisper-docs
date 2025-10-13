import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
  to: string;
  badge?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Launch the Tutorial',
    description: (
      <>
        Learn the Drawhisper basics in minutes and build confidence with the
        guided creator tutorial.
      </>
    ),
    to: '/docs/intro',
    badge: 'Start here',
  },
  {
    title: 'Catch up on Stories',
    description: (
      <>
        Explore releases, behind-the-scenes notes, and inspiration from the team
        and community.
      </>
    ),
    to: '/blog',
    badge: 'What’s new',
  },
  {
    title: 'Explore the API',
    description: (
      <>
        Authenticate, manage projects, and react to webhooks with the
        Drawhisper API cookbook.
      </>
    ),
    to: '/docs/development/api',
    badge: 'For builders',
  },
];

function FeatureCard({title, description, to, badge}: FeatureItem) {
  return (
    <Link className={styles.featureCard} to={to}>
      {badge ? <span className={styles.featureBadge}>{badge}</span> : null}
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardAction}>
        Go to {title}
        <span aria-hidden="true"> →</span>
      </span>
    </Link>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featuresContainer)}>
        <div className={styles.featuresGrid}>
          {FeatureList.map(item => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

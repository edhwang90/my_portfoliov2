import React from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import withLocation from '../../components/with-location/with-location';
import GovFinancialApplication from './gov-financial-application';
import ProptinApplication from './proptin-application';
import FundboxPartnersPlugin from './fundbox-partners-plugin';
import PersonalProject from './personal-project';
import MockZacks from './mock-zacks';
import NotFound from '../../components/not-found/not-found';
import StickyButton from '../../components/sticky-button/sticky-button';

import './details.scss';

const Details = (props) => {
  const { search: { project } } = props;
  let nextButton = <Link to={`/details/?project=${project}`} className="link" title="To Next Project">Next project</Link>;

  const projectContent = () => {
    switch (project) {
      case 'gov-financial-application':
        nextButton = (
          <Link to='/details/?project=proptin-application' className="link" title="To Next Project">Next project</Link>
        )
        return <GovFinancialApplication />
      case 'proptin-application':
        nextButton = (
          <Link to='/details/?project=fundbox-partners-plugin' className="link" title="To Next Project">Next project</Link>
        )
        return <ProptinApplication />
      case 'fundbox-partners-plugin':
        nextButton = (
          <Link to='/details/?project=personal-project' className="link" title="To Next Project">Next project</Link>
        )
        return <FundboxPartnersPlugin />
      case 'personal-project':
        nextButton = (
          <Link to='/details/?project=mock-zacks' className="link" title="To Next Project">Next project</Link>
        )
        return <PersonalProject />
      case 'mock-zacks':
        nextButton = (
          <Link to='/details/?project=gov-financial-application' className="link" title="To Next Project">Next project</Link>
        )
        return <MockZacks />
      default:
        return <NotFound></NotFound>;
    }
  }

  return (
    <Layout>
      <div>{projectContent()}</div>

      <StickyButton locationToStop="Footer">
        {nextButton}
      </StickyButton>
    </Layout>
  )
}

export default withLocation(Details)
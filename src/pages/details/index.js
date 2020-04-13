import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import withLocation from '../../components/with-location/with-location';
import GovFinancialApplication from './gov-financial-application';
import ProptinApplication from './proptin-application';
import FundboxPartnersPlugin from './fundbox-partners-plugin';
import PersonalProject from './personal-project';
import MockZacks from './mock-zacks';
import StickyButton from '../../components/sticky-button/sticky-button';

import './details.scss';

class Details extends Component {
  state = {
    nextRoute: `details/?project=${this.props.search.project}`
  };

  render () {
    const { search: { project } } = this.props;
    var nextProject = `details/?project=${project}`;

    const projectContent = () => {
      switch (project) {
        case 'gov-financial-application':
          nextProject = 'details/?project=proptin-application';
          return <GovFinancialApplication />
        case 'proptin-application':
          nextProject = 'details/?project=fundbox-partners-plugin';
          return <ProptinApplication />
        case 'fundbox-partners-plugin':
          nextProject = 'details/?project=personal-project';
          return <FundboxPartnersPlugin />
        case 'personal-project':
          nextProject = 'details/?project=mock-zacks';
          return <PersonalProject />
        case 'mock-zacks':
          nextProject = 'details/?project=gov-financial-application';
          return <MockZacks />
        default:
          return '';
      }
    }

    return (
      <Layout>
        <div>{projectContent()}</div>

        <StickyButton locationToStop="Footer">
          <Link to={nextProject} className="link" title="To Next Project">Next project</Link>
        </StickyButton>
      </Layout>
    )
  }
}

export default withLocation(Details)
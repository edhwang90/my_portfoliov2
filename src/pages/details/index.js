import React, { Component } from 'react';
import { Link } from 'gatsby';

import Layout from '../../layout';
import withLocation from '../../components/with-location/with-location';
import GovFinancialApplication from './gov-financial-application';
import ProptinApplication from './proptin-application';
import FundboxPartnersPlugin from './fundbox-partners-plugin';
import PersonalProject from './personal-project';
import MockZacks from './mock-zacks';

import './details.scss';


class Details extends Component {

  render () {
    const { search: { project } } = this.props;

    const projectContent = () => {
      switch (project) {
        case 'gov-financial-application':
          return <GovFinancialApplication />
        case 'proptin-application':
          return <ProptinApplication />
        case 'fundbox-partners-plugin':
          return <FundboxPartnersPlugin />
        case 'personal-project':
          return <PersonalProject />
        case 'mock-zacks':
          return <MockZacks />
        default:
          return '';
      }
    }

    return (
      <Layout>
        <div>{projectContent()}</div>

        <section className="next-project">
          <Link to="/details/proptin-application" className="link" title="To Next Project">Next project</Link>
         </section>
      </Layout>
    )
  }
}

// const Details = (props) => {
//   console.log('ay', props);

//   return (
//     <Layout>
//       <SEO title="Page three" />
//       <section className="wrapper-container">
//         <h3>Details</h3>
  
//         <p>
//         {props.search.hero}
//         </p>
//       </section>
//       <section className="portfolio-content">
  
//       </section>
//     </Layout>
//   )
// }
//export default Details;
export default withLocation(Details)
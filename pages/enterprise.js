import styled from 'styled-components'

import Br from 'components/Br'
import Callout from 'components/Callout'
import CaseStudyCallout from 'components/CaseStudyCallout'
import Link from 'components/Link'
import Page, { page } from 'components/Page'
import { FeatureGrid, FeatureCell, FeatureTitle, FeatureDescription } from 'components/FeatureGrid'

import { rea, shopify } from './case-studies/_data'

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s3};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s3};
`

const SectionHeader = styled.h2`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const CaseStudiesHeader = SectionHeader.extend`
  margin-bottom: 0;
`

const CaseStudyWrapper = styled.div`
  margin: ${({ theme }) => theme.innerSpacing.s2} 0;
`

const SectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  margin: ${({ theme }) => theme.textSpacing.s1} 0;
  text-align: center;
`

const FeatureGridSectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopyLarge}
  text-align: center;
  margin: ${({ theme }) => theme.innerSpacing.s1} 0 ${({ theme }) => theme.outerSpacing.s1} 0;
  max-width: 25em;
  margin-left: auto;
  margin-right: auto;
  > a {
    ${({ theme }) => theme.textStyles.navigationHyperlink}
    text-decoration: underline;
  }
`

const FeatureSection = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s1};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: ${({ align }) => align || 'left'};
  margin-${({ align }) => align === 'right' ? 'left' : 'right'}: auto;
  max-width: 30rem;
  @media (max-width: 550px) {
    text-align: left;
    margin-top: ${({ theme }) => theme.innerSpacing.s2};
    margin-bottom: ${({ theme }) => theme.innerSpacing.s2};
  }
`

const FeatureSectionHeader = SectionHeader.extend`
  text-align: inherit;
`

const FeatureSectionTagline = SectionDescription.extend`
  text-align: inherit;
`

const FeatureSectionDescription = styled.p`
  ${({ theme }) => theme.textStyles.bodyCopy}
  color: ${({ theme }) => theme.colors.text.subdued};
  margin: ${({ theme }) => theme.textSpacing.s2} 0 ${({ theme }) => theme.textSpacing.s2} 0;
  > a {
    ${({ theme }) => theme.textStyles.navigationHyperlink}
  }
`

export default page((props) => (
  <Page
    headTitle="Buildkite Enterprise"
    title="Buildkite Enterprise"
    description={
      <React.Fragment>
        Everything you need to build, test,<Br maxWidth="30em" /> and
        deliver software at scale.
      </React.Fragment>
    }
    {...props}
  >

    {/* (callout to Thoughtworks Technology Radar) */}
    <FeatureSection>
      <FeatureSectionHeader>Scale</FeatureSectionHeader>
      <FeatureSectionTagline>Architected for scale.</FeatureSectionTagline>
      <FeatureSectionDescription>Buildkite’s architecture uses modern scaling techniques, such as horizontal scaling and auto-scaling, to help you support massive engineering growth. And with Buildkite’s cloud agnostic design, you’re free to take advantage of new cloud platform features as they emerge, or even transition smoothly between cloud and compute platforms (including private cloud, and bare metal hardware).</FeatureSectionDescription>
    </FeatureSection>

    <FeatureSection align="right">
      <FeatureSectionHeader>Security</FeatureSectionHeader>
      <FeatureSectionTagline>Your data is our top priority.</FeatureSectionTagline>
      <FeatureSectionDescription>Buildkite provides clear platform boundaries where your security requirements can be enforced. The open-source buildkite-agent can be version controlled, audited, and locked down based on your requirements. And all source code stays behind your own firewall. See our <Link href="/security"><a>Security</a></Link> page for more details on our policies.</FeatureSectionDescription>
    </FeatureSection>

    <FeatureSection>
      <FeatureSectionHeader>Support</FeatureSectionHeader>
      <FeatureSectionTagline>Consider us your Build Ops team.</FeatureSectionTagline>
      <FeatureSectionDescription>Get the support you need. Your team has live chat access to engineers via a shared Slack channel, a monthly call with a dedicated account manager, and pager access for undetected platform faults.</FeatureSectionDescription>
    </FeatureSection>

    <Section>
      <SectionHeader>Enterprise plan features</SectionHeader>
      <FeatureGridSectionDescription>All of Buildkite’s <Link href="/features"><a>standard features</a></Link>,<Br maxWidth="25rem" /> with additional levels of security and support.</FeatureGridSectionDescription>

      <FeatureGrid>
        <FeatureCell>
          <FeatureTitle>Single Sign On</FeatureTitle>
          <FeatureDescription>
            SSO for provisioning and login is supported for Google, Okta, OneLogin, ADFS (SAML) and custom SAML providers.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Access Control and Teams</FeatureTitle>
          <FeatureDescription>
            Manage permissions and teams with fine grained access control. And provide your organization with a default team for easy open sharing.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Audit Logging</FeatureTitle>
          <FeatureDescription>
            Available only on the Enterprise plan, audit logging keeps a record of actions taken by users. The log can be explored via the web, or exported via the GraphQL API.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Reporting and Visibility</FeatureTitle>
          <FeatureDescription>
            Buildkite’s centralized platform platform gives you insight across your entire company’s engineering. And the GraphQL API allows you to easily create your own internal tools and metrics.
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Service Level Agreement</FeatureTitle>
          <FeatureDescription>
            TODO
          </FeatureDescription>
        </FeatureCell>
        <FeatureCell>
          <FeatureTitle>Account Manager</FeatureTitle>
          <FeatureDescription>
            TODO
          </FeatureDescription>
        </FeatureCell>
      </FeatureGrid>
    </Section>

    <Section>
      <CaseStudiesHeader>Case Studies</CaseStudiesHeader>
      <CaseStudyWrapper><CaseStudyCallout noMargin caseStudy={shopify} /></CaseStudyWrapper>
      <CaseStudyWrapper><CaseStudyCallout noMargin caseStudy={rea} /></CaseStudyWrapper>
    </Section>

    <Callout
      heading="Talk to our team"
      description="We're here to support your enterprise needs. Send us an email to arrange a call."
      url="mailto:sales@buildkite.com"
      buttonTitle="Email sales@buildkite.com"
    />
  </Page>
))
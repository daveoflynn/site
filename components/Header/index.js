import { withRouter } from 'next/router'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import throttle from 'raf-throttle'

import './loading-bar'
import LogoLink from './logo-link'
import MenuLink from './menu-link'
import Menu from './menu'

const scrollThreshold = 60;

const HeaderWrapper = styled.header`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: ${props => props.shadow ? props.theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  will-change: box-shadow;
  transition: box-shadow ${({ theme }) => theme.timings.color};
  z-index: 10;
`;

const Content = styled.div`
  ${({ theme }) => theme.maxWidthContainer}
  position: relative;
  background-color: white;
  padding: ${({ theme }) => theme.innerSpacing.s1};
  display: flex;
  align-items: center;
  line-height: 1;
  box-shadow: ${props => props.shadow ? props.theme.boxShadows.menuBar : '0 0 15px rgba(0, 0, 0, 0)'};
  z-index: 1;
`;

const LinkContainer = styled.div`
  flex: 2;
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};
  text-align: ${props => props.left ? 'left' : 'right'};
`;

const HeaderLinkAnchor = styled.a`
  ${({ theme }) => theme.textStyles.hyperlink}
  margin-left: ${props => props.right ? props.theme.innerSpacing.s1 : 0};
  margin-right: ${props => props.left ? props.theme.innerSpacing.s1 : 0};
  font-weight: bold;
  flex: none;
  white-space: nowrap;

  ${props => props.widescreenOnly && css`
    @media (max-width: 959px) {
      display: none;
    }
  `}
`

const HeaderLink = withRouter(({ children, router, href, prefetch, left, right, widescreenOnly }) => {
  return (
    <Link prefetch href={href} passHref>
      <HeaderLinkAnchor
        left={left}
        right={right}
        widescreenOnly={widescreenOnly}
        active={router.pathname === href}
      >
        {children}
      </HeaderLinkAnchor>
    </Link>
  )
})

export default class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      showMenu: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleWindowScroll);
    window.addEventListener('resize', this.handleWindowResize);
    this.checkScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleWindowScroll);
    window.removeEventListener('resize', this.handleWindowResize);
  }

  render() {
    const shadow = this.state.scrolled || this.state.showMenu;

    return (
      <HeaderWrapper shadow={shadow}>
        <Content shadow={this.state.showMenu}>
          <LinkContainer left>
            <MenuLink onClick={this.handleMenuLinkClick} />
            <HeaderLink left prefetch widescreenOnly href="/features">
              Features
            </HeaderLink>
            <HeaderLink left prefetch widescreenOnly href="/screencasts">
              Screencasts
            </HeaderLink>
            <HeaderLink left prefetch widescreenOnly href="/case-studies">
              Case Studies
            </HeaderLink>
          </LinkContainer>
          <LogoLink />
          <LinkContainer right>
            <HeaderLink right prefetch widescreenOnly href="/pricing">
              Pricing
            </HeaderLink>
            <HeaderLink right prefetch widescreenOnly href="/support">
              Support
            </HeaderLink>
            <HeaderLink right prefetch widescreenOnly href="/about">
              About
            </HeaderLink>
            {this.renderLoginLinks()}
          </LinkContainer>
        </Content>
        {this.state.showMenu && (
          <Menu />
        )}
      </HeaderWrapper>
    );
  }
  
  renderLoginLinks() {
    if (this.props.loggedIn) {
      return (
        <HeaderLink right href="/dashboard">
          Dashboard
        </HeaderLink>
      );
    } else {
      return (
        [
          <HeaderLink right prefetch widescreenOnly href="/login" key="login">
            Login
          </HeaderLink>,
          <HeaderLink right prefetch href="/sign-up" key="signup">
            Signup
          </HeaderLink>
        ]
      )
    }
  }

  handleWindowScroll = throttle(() => this.checkScroll())
  handleWindowResize = throttle(() => this.checkResize())

  handleMenuLinkClick = (e) => {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu })
  }

  checkScroll() {
    const scrolled = window.scrollY > scrollThreshold;
    this.setState({ scrolled });
  }

  checkResize() {
    if (this.state.showMenu) {
      if (window.outerWidth >= 960) {
        this.setState({ showMenu: false });
      }
    }
  }
}

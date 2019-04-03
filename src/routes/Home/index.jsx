import React from 'react';
import { useStore } from 'easy-peasy';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { animated, useSpring, config } from 'react-spring';

import Card from '../../components/card';
import Divider from '../../components/divider';
import work from '../../data/work.json';

import { border } from '../../theme/colors';

const HomePage = () => {
  const projects = useStore(state => state.projects.data);
  const user = useStore(state => state.user.data);
  const orgs = useStore(state => state.orgs.data);
  const loading = useStore(state => state.loading);

  const props = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: loading ? 0 : 1,
      transform: `translateY(${loading ? '2rem' : '0'})`
    },
    delay: 750,
    config: config.molasses
  });

  return (
    <animated.div style={props}>
      <Container>
        <Helmet meta={[{ name: 'description', content: user.bio }]} />
        <Profile>
          <ProfileImage src={user.avatar_url} alt={user.name} />
          <ProfileName>{user.name}</ProfileName>
          <ProfileUsername>{user.login}</ProfileUsername>
          <Divider />
          {user.bio && <ProfileDesc>{user.bio}</ProfileDesc>}
          {user.company && (
            <ProfileItem>
              <div>
                <i className="fas fa-user-friends" />
              </div>
              <span>{user.company}</span>
            </ProfileItem>
          )}

          {user.location && (
            <ProfileItem>
              <div>
                <i className="fas fa-map-marker-alt" />
              </div>
              <span>{user.location}</span>
            </ProfileItem>
          )}
          <Divider />
          <h2 style={{ fontSize: '1rem', fontWeight: 600 }}>Organizations</h2>
          <OrgGroup>
            {orgs.map(org => {
              return (
                <Org
                  key={org.id}
                  src={org.avatar_url}
                  alt={org.login}
                  title={org.login}
                />
              );
            })}
          </OrgGroup>
        </Profile>

        <Content>
          <h2>Projects</h2>
          <Card.Group>
            {projects.map(project => {
              const { name, description, language, html_url } = project;
              return (
                <Card
                  key={project.id}
                  title={name}
                  description={description}
                  languages={language}
                  link={html_url}
                />
              );
            })}
          </Card.Group>

          <h2>Work</h2>
          <Card.Group>
            {work.map((w, index) => {
              const { name, description, language, company, url } = w;
              return (
                <Card
                  key={index}
                  title={name}
                  description={description}
                  languages={language}
                  company={company}
                  link={url}
                />
              );
            })}
          </Card.Group>
        </Content>
      </Container>
    </animated.div>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 230px 1fr;
  grid-template-areas: 'profile content';
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 960px) {
    margin: 0 1rem;
  }

  @media screen and (max-width: 940px) {
    grid-template-columns: auto;
    grid-template-areas: 'profile' 'content';
  }
`;

const Profile = styled.div`
  grid-area: profile;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 230px;
  border-radius: 3px;
`;

const ProfileName = styled.h1`
  font-size: 1.5rem;
  margin: 1rem 0 0;
  font-weight: 600;
`;

const ProfileUsername = styled.span`
  font-size: 1.25rem;
  font-weight: 300;
`;

const ProfileDesc = styled.p`
  font-size: 0.875rem;
  margin: 0.5rem 0;
`;

const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.5rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 16px;
    width: 16px;
    margin-right: 0.5rem;
  }

  i {
    color: ${border};
  }

  span {
    font-size: 0.875rem;
  }
`;

const OrgGroup = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, 2rem);
`;

const Org = styled.img`
  height: 2rem;
  width: 2rem;
  border-radius: 3px;
`;

const Content = styled.div`
  grid-area: content;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

export default HomePage;

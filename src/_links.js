import {Anchor} from './_dom.js';

const ICONS = {
  github: <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z" />,
  twitter: <path stroke-width="0" fill="currentColor" d="M60 16 L54 17 L58 12 L51 14 C42 4 28 15 32 24 C16 24 8 12 8 12 C8 12 2 21 12 28 L6 26 C6 32 10 36 17 38 L10 38 C14 46 21 46 21 46 C21 46 15 51 4 51 C37 67 57 37 54 21 Z" />
};

const Icon = ({name}, {styletron}) => {
  const viewBox = name === 'github' ? "-2 -2 68 68" : "2 4 60 60";
  return <svg style={{
    width: '18px',
    verticalAlign: 'middle',
    marginLeft: '-28px',
    marginRight: '10px'
  }} viewBox={viewBox}>{ICONS[name]}</svg>
}

const List = ({children}, {styletron}) =>
  <ul style={{
    listStyleType: 'none',
    padding: 0
  }}>
    {children}
  </ul>

const ListItem = ({children}, {styletron}) =>
  <li style={{
    marginBottom: '12px'
  }}>{children}</li>

export default (
  <List>
    <ListItem>
      <Icon name="twitter"/>
      <Anchor href="https://twitter.com/rtsao">@rtsao</Anchor>
    </ListItem>
    <ListItem>
      <Icon name="github"/>
      <Anchor href="https://github.com/rtsao">github.com/rtsao</Anchor>
    </ListItem>
  </List>
);

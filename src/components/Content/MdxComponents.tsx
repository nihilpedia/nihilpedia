import React from 'react';
import {
  A,
  Bold,
  Em, H, Image, P, QBlock, Strong, Ul
} from '../docs';

export const MdxComponents = {
  h1: (props) => (<H type='h2'>{props.children}</H>),
  h2: (props) => (<H type='h3'>{props.children}</H>),
  h3: (props) => (<H type='h4'>{props.children}</H>),
  h4: (props) => (<H type='h5'>{props.children}</H>),
  p: (props) => (<P>{props.children}</P>),
  strong: (props) => (<Strong>{props.children}</Strong>),
  em: (props) => (<Em>{props.children}</Em>),
  a: (props) => (<A href={props.href}>{props.children}</A>),
  blockquote: (props) => (<QBlock {...props}>{props.children}</QBlock>),
  ul: (props) => (<Ul {...props}>{props.children}</Ul>),
  img: (props) => (<Image {...props} />),
  P,
  Strong,
  Em,
  A,
  QBlock,
  Bold,
  Ul,
};

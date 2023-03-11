import urlBuilder from '@sanity/image-url'
import {getImageDimensions} from '@sanity/asset-utils'

import { client } from '../../sanity'

import SyntaxHighlighter from 'react-syntax-highlighter';

export const SampleImageComponent = ({value, isInline}) => {
    const {width, height} = getImageDimensions(value)
    return (
      <img
        src={urlBuilder(client)
          .image(value)
          .width(isInline ? 100 : 800)
          .fit('max')
          .auto('format')
          .url()}
        alt={value.alt || ' '}
        loading="lazy"
        style={{
          // Display alongside text if image appears inside a block text span
          display: isInline ? 'inline-block' : 'block',
          margin: isInline ? '0 0.5em' : '1em 0',
          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    )
}

export const customCodeComponent = ({children}) => {
  return (
      <pre style={{backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '5px'}}>
        <code style={{color: 'blue'}}>
          {children}  
        </code>
      </pre>
  )
}
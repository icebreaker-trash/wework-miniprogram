import Reveal from 'reveal.js'
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js'
import 'reveal.js/dist/reset.css'
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/black.css'
import fragment from './body.html'

const body = document.querySelector('body')
body.innerHTML = fragment

const deck = new Reveal({
  plugins: [Markdown]
})
deck.initialize()

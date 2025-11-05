function customRender(reactElement, container) {
  // 1. Create an actual DOM element
  const domElement = document.createElement(reactElement.type)

  // 2. Add its inner text / children
  domElement.innerHTML = reactElement.children

  // 3. Add attributes (like href, target)
  for (const prop in reactElement.props) {
    if (prop === 'children') continue
    domElement.setAttribute(prop, reactElement.props[prop])
  }

  // 4. Add it to the container
  container.appendChild(domElement)
}

const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(ReactElement, mainContainer)



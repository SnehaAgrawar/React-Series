function customRender(reactElement,container){
    /* const domElement = document.createElement(reactElement.type)
    document.innerHTML =reactElement.children

    domElement.setAttribute('href',reactElement.props.href)
    document.setAttribute('taeget',reactElement.props.target)

    container.appendChild(domElement) */

    //make it more optimized
    
    const domElement = document.createElement(reactElement.type)
    document.innerHTML = reactElement.children

    //loopingthrough the props -> so that no matter how many element are comming
    //we can set them up -> using forin loop

    for (const prop in reactElement.props) {
        if(prop==='children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children:'CLICK me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)
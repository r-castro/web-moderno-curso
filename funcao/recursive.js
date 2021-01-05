const Produtos = [
    { child: '00079090', parent: null },
    { child: '00079091', parent: '00079090' },
    { child: '00079092', parent: '00079091' },
    { child: '00079093', parent: '00079091' },
    { child: '00079094', parent: '00079090' },
    { child: '00079095', parent: '00079094' },
    { child: '00079096', parent: '00079094' },
    { child: '00079097', parent: '00079090' },
    { child: '00079098', parent: '00079090' },
    { child: '00079099', parent: '00079090' },
    { child: '00079100', parent: '00079090' },
    { child: '00079101', parent: '00079100' },
    { child: '00079102', parent: '00079100' },
    { child: '00079103', parent: '00079090' },
    { child: '00079104', parent: '00079103' },
    { child: '00079105', parent: '00079103' },
    { child: '00079106', parent: '00079090' },
    { child: '00079107', parent: '00079106' },
    { child: '00079108', parent: '00079106' },
]

function recursiveTree(array, parent, level = 0) {
    const childs = array.filter((child) => child.parent === parent)
    level += 1
    childs.forEach((element) => {
        console.log('    '.repeat(level).concat(element.child))
        recursiveTree(array, element.child, level)
    })
}

function getTop(array) {
    const top = array.filter((parent) => parent.parent === null)
    top.forEach((p) => {
        console.log(p.child)
        recursiveTree(array, p.child)
    })
}

//recursiveTree(Produtos, '00079090')
getTop(Produtos)
//console.log(Produtos[0].parent === '')
